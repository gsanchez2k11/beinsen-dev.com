// Escrapea tiendasublimacion.com, extrae todos los productos y los matchea contra
// los productos Beinsen de data/products.ts. Genera un reporte JSON con propuestas.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'data', 'tiendasublimacion-matches.json');

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';

// Páginas de categoría que vamos a escrapear (planchas + sub-páginas de accesorios)
const SEED_PAGES = [
  'https://tiendasublimacion.com/planchas-transfer-termicas.html',
  'https://tiendasublimacion.com/accesorios.html',
  'https://tiendasublimacion.com/accesorios/alaska.html',
  'https://tiendasublimacion.com/accesorios/malvinas.html',
  'https://tiendasublimacion.com/accesorios/tobago.html',
  'https://tiendasublimacion.com/accesorios/trinidad.html',
  'https://tiendasublimacion.com/accesorios/alaska/accesorios-riad.html',
  'https://tiendasublimacion.com/accesorios/alaska/consumibles-alaska.html',
  'https://tiendasublimacion.com/accesorios/alaska/repuestos-alaska.html',
  'https://tiendasublimacion.com/accesorios/malvinas/accesorios-malvinas.html',
  'https://tiendasublimacion.com/accesorios/malvinas/consumibles-malvinas.html',
  'https://tiendasublimacion.com/accesorios/malvinas/repuestos-malvinas.html',
  'https://tiendasublimacion.com/accesorios/tobago/accesorios-tobago.html',
  'https://tiendasublimacion.com/accesorios/tobago/consumibles-tobago.html',
  'https://tiendasublimacion.com/accesorios/tobago/repuestos-tobago.html',
  'https://tiendasublimacion.com/accesorios/trinidad/accesorios-trinidad.html',
  'https://tiendasublimacion.com/accesorios/trinidad/consumibles-trinidad.html',
  'https://tiendasublimacion.com/accesorios/trinidad/repuestos-trinidad.html',
];

async function fetchPage(url) {
  try {
    const r = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
    if (!r.ok) return null;
    return await r.text();
  } catch (e) {
    return null;
  }
}

// Extrae nombre de producto y URL de cada bloque de producto
function extractProducts(html, sourceUrl) {
  const items = new Map(); // url → name
  // Producto Magento típico: <a href="...html" ... product-item-link>NOMBRE</a>
  // O bien <a href="..."><img alt="NOMBRE"...>
  const linkRe = /<a[^>]+class="[^"]*product-item-link[^"]*"[^>]+href="([^"]+)"[^>]*>\s*([^<]+?)\s*<\/a>/gi;
  let m;
  while ((m = linkRe.exec(html))) {
    const url = m[1];
    const name = m[2].trim();
    if (url.includes('tiendasublimacion.com') && url.endsWith('.html') && !items.has(url)) {
      items.set(url, name);
    }
  }
  // Fallback: enlaces con alt en img
  const imgRe = /<a[^>]+href="(https:\/\/tiendasublimacion\.com\/[^"]+\.html)"[^>]*>\s*<img[^>]+alt="([^"]+)"[^>]*>/gi;
  while ((m = imgRe.exec(html))) {
    const url = m[1];
    const name = m[2].trim();
    if (!items.has(url) && !url.includes('#')) items.set(url, name);
  }
  return items;
}

// Carga rawPlanchasData / rawAccessoriesData / rawConsumablesData de data/products.ts
function loadDataset(name) {
  const t = fs.readFileSync(path.join(ROOT, 'data', 'products.ts'), 'utf8');
  const startMarker = `const ${name}`;
  const startIdx = t.indexOf(startMarker);
  if (startIdx === -1) return [];
  const eqIdx = t.indexOf('=', startIdx);
  const arrStart = t.indexOf('[', eqIdx);
  let d = 0, end = -1, ins = false, sc = '', es = false;
  for (let i = arrStart; i < t.length; i++) {
    const c = t[i];
    if (es) { es = false; continue; }
    if (ins) { if (c === '\\') es = true; else if (c === sc) ins = false; continue; }
    if (c === '"' || c === "'") { ins = true; sc = c; continue; }
    if (c === '[') d++;
    else if (c === ']') { d--; if (d === 0) { end = i; break; } }
  }
  if (end === -1) return [];
  return JSON.parse(t.slice(arrStart, end + 1).replace(/,(\s*[\]\}])/g, '$1'));
}

function normalize(s) {
  if (!s) return '';
  return s.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/beinsen/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Tokens significativos: nombre de la máquina o componente clave
function getKeywords(name) {
  const norm = normalize(name);
  return norm.split(' ').filter(w => w.length >= 4);
}

function scoreMatch(productName, tsName) {
  const productKw = new Set(getKeywords(productName));
  const tsKw = new Set(getKeywords(tsName));
  // Requiere que el primer token "fuerte" (probablemente el modelo) esté presente
  const productFirst = [...productKw][0] || '';
  if (productFirst && !tsKw.has(productFirst)) return 0;
  // Score = intersección / union
  let inter = 0;
  productKw.forEach(k => { if (tsKw.has(k)) inter++; });
  return inter / Math.max(productKw.size, 1);
}

async function main() {
  console.log('Escrapeando tiendasublimacion.com...');
  const allTsProducts = new Map();
  for (const url of SEED_PAGES) {
    const html = await fetchPage(url);
    if (!html) { console.log(`  ✗ ${url}`); continue; }
    const items = extractProducts(html, url);
    items.forEach((name, u) => allTsProducts.set(u, name));
    console.log(`  ✓ ${url} (+${items.size})`);
  }
  console.log(`\nTotal productos únicos en TS: ${allTsProducts.size}\n`);

  const planchas = loadDataset('rawPlanchasData').filter(p => !p.hidden);
  const accessories = loadDataset('rawAccessoriesData');
  const consumables = loadDataset('rawConsumablesData');

  function matchAll(items, type) {
    const results = [];
    for (const item of items) {
      const name = typeof item.name === 'object' ? (item.name.es || item.name.en || '') : (item.name || '');
      if (!name) continue;
      const candidates = [];
      allTsProducts.forEach((tsName, tsUrl) => {
        const score = scoreMatch(name, tsName);
        if (score > 0) candidates.push({ score, tsName, tsUrl });
      });
      candidates.sort((a, b) => b.score - a.score);
      results.push({
        type,
        slug: item.slug || item.id,
        beinsenName: name,
        matches: candidates.slice(0, 3),
        best: candidates[0] || null,
      });
    }
    return results;
  }

  const report = {
    scrapedAt: new Date().toISOString(),
    totalTsProducts: allTsProducts.size,
    planchas: matchAll(planchas, 'plancha'),
    accessories: matchAll(accessories, 'accessory'),
    consumables: matchAll(consumables, 'consumable'),
  };

  fs.writeFileSync(OUT, JSON.stringify(report, null, 2));

  const countWith = (arr) => arr.filter(r => r.best && r.best.score >= 0.4).length;
  const countMaybe = (arr) => arr.filter(r => r.best && r.best.score > 0 && r.best.score < 0.4).length;
  const countNo = (arr) => arr.filter(r => !r.best).length;

  console.log(`\n=== Resumen ===`);
  console.log(`Planchas (${planchas.length}): match alto=${countWith(report.planchas)}, dudoso=${countMaybe(report.planchas)}, sin match=${countNo(report.planchas)}`);
  console.log(`Accesorios (${accessories.length}): match alto=${countWith(report.accessories)}, dudoso=${countMaybe(report.accessories)}, sin match=${countNo(report.accessories)}`);
  console.log(`Consumibles (${consumables.length}): match alto=${countWith(report.consumables)}, dudoso=${countMaybe(report.consumables)}, sin match=${countNo(report.consumables)}`);
  console.log(`\nReporte escrito en: ${path.relative(ROOT, OUT)}`);
}

main();
