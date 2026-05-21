// Aplica las URLs de TiendaSublimación a data/products.ts.
// Solo aplica matches con score >= MIN_SCORE (alta confianza).
// Toca accesorios y consumibles. NO toca máquinas (el usuario las revisará manualmente).
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PRODUCTS_TS = path.join(ROOT, 'data', 'products.ts');
const MATCHES_JSON = path.join(ROOT, 'data', 'tiendasublimacion-matches.json');

const MIN_SCORE = 0.85;
const APPLY_TYPES = ['accessory', 'consumable']; // NO 'plancha'

const matches = JSON.parse(fs.readFileSync(MATCHES_JSON, 'utf8'));

// Construir mapa slug → url
const toApply = new Map();
const dudosos = [];
const allMatches = [...matches.accessories.map(x => ({ ...x, type: 'accessory' })),
                    ...matches.consumables.map(x => ({ ...x, type: 'consumable' }))];

for (const m of allMatches) {
  if (!APPLY_TYPES.includes(m.type)) continue;
  if (!m.best) continue;
  if (m.best.score >= MIN_SCORE) {
    toApply.set(m.slug, m.best.tsUrl);
  } else if (m.best.score >= 0.4) {
    dudosos.push({ slug: m.slug, beinsenName: m.beinsenName, score: m.best.score, tsName: m.best.tsName, tsUrl: m.best.tsUrl });
  }
}

console.log(`A aplicar (score >= ${MIN_SCORE}): ${toApply.size}`);
console.log(`Dudosos (0.4 - ${MIN_SCORE}): ${dudosos.length}\n`);

// Leer products.ts y aplicar
let text = fs.readFileSync(PRODUCTS_TS, 'utf8');
let applied = 0;

for (const [slug, url] of toApply) {
  // Buscar el bloque que contiene "slug": "X" y añadir tiendaSublimacionUrl si no existe
  const slugLine = `"slug": "${slug}",`;
  const idx = text.indexOf(slugLine);
  if (idx === -1) {
    // Algunos accesorios no tienen slug, usar id como fallback
    const idLine = `"id": "${slug}"`;
    const idIdx = text.indexOf(idLine);
    if (idIdx === -1) {
      console.log(`  ⚠ no encontrado: ${slug}`);
      continue;
    }
    // Verificar si ya tiene tiendaSublimacionUrl en el bloque
    const blockEnd = text.indexOf('},', idIdx);
    if (text.slice(idIdx, blockEnd).includes('tiendaSublimacionUrl')) {
      console.log(`  ↻ ya existe (id): ${slug}`);
      continue;
    }
    // Insertar después de la línea del id
    const lineEnd = text.indexOf('\n', idIdx);
    const indent = text.slice(text.lastIndexOf('\n', idIdx) + 1, idIdx).match(/^\s*/)[0];
    const insertion = `\n${indent}"tiendaSublimacionUrl": "${url}",`;
    text = text.slice(0, lineEnd) + insertion + text.slice(lineEnd);
    applied++;
    continue;
  }
  // Verificar si ya tiene tiendaSublimacionUrl cerca
  const after = text.slice(idx, idx + 600);
  if (after.includes('tiendaSublimacionUrl')) {
    console.log(`  ↻ ya existe: ${slug}`);
    continue;
  }
  const lineEnd = text.indexOf('\n', idx);
  const indent = text.slice(text.lastIndexOf('\n', idx) + 1, idx).match(/^\s*/)[0];
  const insertion = `\n${indent}"tiendaSublimacionUrl": "${url}",`;
  text = text.slice(0, lineEnd) + insertion + text.slice(lineEnd);
  applied++;
}

fs.writeFileSync(PRODUCTS_TS, text);
console.log(`\n✓ ${applied} URLs aplicadas`);

if (dudosos.length > 0) {
  console.log(`\n=== Dudosos (score 0.4 - ${MIN_SCORE}) — revisar manualmente ===`);
  dudosos.forEach(d => {
    console.log(`\n  ${d.slug} (score: ${d.score.toFixed(2)})`);
    console.log(`     Beinsen: ${d.beinsenName}`);
    console.log(`     Sugerido: ${d.tsUrl.split('/').pop()}`);
  });
}
