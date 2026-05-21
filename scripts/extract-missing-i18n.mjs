// Recorre data/raw/*.ts y extrae todos los objetos `Localized<...>` que
// tengan `es` y `en` pero NO tengan `pt` o `it`. Genera un JSON con
// estructura plana: { "path.to.field": { es, en } } para que sea fácil
// traducir y luego aplicar.
//
// `path` usa el slug del producto (o id si no hay slug) como root y luego
// el path JSON del campo, con índices entre corchetes:
//   alaska-plancha-termica-textil.name
//   alaska-plancha-termica-textil.benefits[0].title
//   ...
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const FILES = [
    { rel: 'data/raw/planchas.ts',     varName: 'rawPlanchasData' },
    { rel: 'data/raw/accessories.ts',  varName: 'rawAccessoriesData' },
    { rel: 'data/raw/consumables.ts',  varName: 'rawConsumablesData' },
];

function parseDataset(absPath, varName) {
    const text = fs.readFileSync(absPath, 'utf8');
    // Buscar `export const NAME ... = [ ... ];`
    const startIdx = text.indexOf(varName);
    if (startIdx === -1) throw new Error(`no se encontró ${varName} en ${absPath}`);
    const eqIdx = text.indexOf('=', startIdx);
    const arrStart = text.indexOf('[', eqIdx);
    let d = 0, end = -1, ins = false, sc = '', es = false;
    for (let i = arrStart; i < text.length; i++) {
        const c = text[i];
        if (es) { es = false; continue; }
        if (ins) { if (c === '\\') es = true; else if (c === sc) ins = false; continue; }
        if (c === '"' || c === "'") { ins = true; sc = c; continue; }
        if (c === '[') d++;
        else if (c === ']') { d--; if (d === 0) { end = i; break; } }
    }
    if (end === -1) throw new Error(`no se encontró cierre del array en ${absPath}`);
    return JSON.parse(text.slice(arrStart, end + 1).replace(/,(\s*[\]\}])/g, '$1'));
}

// Detecta si un objeto es un `Localized<...>`: tiene al menos `es` o `en`,
// y todas sus keys están en el set {es, en, pt, it}.
const LOCALE_KEYS = new Set(['es', 'en', 'pt', 'it']);
function isLocalized(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
    const keys = Object.keys(obj);
    if (keys.length === 0) return false;
    if (!keys.includes('es') && !keys.includes('en')) return false;
    return keys.every(k => LOCALE_KEYS.has(k));
}

const missing = {}; // { "slug.path.to.field": { es, en } }
const stats = { totalLocalized: 0, missingPT: 0, missingIT: 0 };

function walk(node, pathParts) {
    if (Array.isArray(node)) {
        node.forEach((item, i) => walk(item, [...pathParts, `[${i}]`]));
        return;
    }
    if (!node || typeof node !== 'object') return;
    if (isLocalized(node)) {
        stats.totalLocalized++;
        const needsPT = !node.pt;
        const needsIT = !node.it;
        if (!needsPT && !needsIT) return;
        if (needsPT) stats.missingPT++;
        if (needsIT) stats.missingIT++;
        const key = pathParts.join('.').replace(/\.\[/g, '[');
        missing[key] = {
            es: node.es,
            en: node.en,
            ...(needsPT ? { needsPT: true } : {}),
            ...(needsIT ? { needsIT: true } : {}),
        };
        return;
    }
    for (const [k, v] of Object.entries(node)) {
        walk(v, [...pathParts, k]);
    }
}

for (const { rel, varName } of FILES) {
    const abs = path.join(ROOT, rel);
    const arr = parseDataset(abs, varName);
    for (const item of arr) {
        const root = item.slug || item.id;
        if (!root) continue;
        for (const [k, v] of Object.entries(item)) {
            walk(v, [root, k]);
        }
    }
}

const out = path.join(ROOT, 'data', 'i18n-missing.json');
fs.writeFileSync(out, JSON.stringify(missing, null, 2));

console.log(`Total Localized<…> encontrados: ${stats.totalLocalized}`);
console.log(`Faltan PT: ${stats.missingPT}`);
console.log(`Faltan IT: ${stats.missingIT}`);
console.log(`Total faltantes (objetos): ${Object.keys(missing).length}`);
console.log(`Reporte en: ${path.relative(ROOT, out)}`);
