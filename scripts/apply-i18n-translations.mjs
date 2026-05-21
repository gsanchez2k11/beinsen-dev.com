// Aplica las traducciones PT/IT de data/i18n-translations/*.json a los
// archivos data/raw/*.ts. Para cada path "slug.field" busca el objeto
// Localized correspondiente en el dataset crudo y añade `pt`/`it`.
//
// Estrategia:
//  1. Consolidar los 5 JSON de traducciones en un único mapa.
//  2. Para cada dataset (planchas/accessories/consumables):
//      a. Cargar como JSON (con quitada de trailing commas).
//      b. Recorrer recursivamente; cuando encontremos un Localized cuyo
//         path coincida con una key del mapa, fusionar pt/it.
//      c. Volcar el dataset al .ts manteniendo el prefijo `import...`
//         y `export const NAME: ... = `.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// 1. Consolidar
const trDir = path.join(ROOT, 'data', 'i18n-translations');
const translations = {};
for (const f of fs.readdirSync(trDir).filter(f => f.endsWith('.json'))) {
    const obj = JSON.parse(fs.readFileSync(path.join(trDir, f), 'utf8'));
    Object.assign(translations, obj);
}
console.log(`Total traducciones consolidadas: ${Object.keys(translations).length}`);

const FILES = [
    { rel: 'data/raw/planchas.ts',    varName: 'rawPlanchasData',    typeName: 'Plancha' },
    { rel: 'data/raw/accessories.ts', varName: 'rawAccessoriesData', typeName: 'Accessory' },
    { rel: 'data/raw/consumables.ts', varName: 'rawConsumablesData', typeName: 'Consumable' },
];

const LOCALE_KEYS = new Set(['es', 'en', 'pt', 'it']);
function isLocalized(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
    const keys = Object.keys(obj);
    if (keys.length === 0) return false;
    if (!keys.includes('es') && !keys.includes('en')) return false;
    return keys.every(k => LOCALE_KEYS.has(k));
}

let totalApplied = 0;

for (const { rel, varName, typeName } of FILES) {
    const abs = path.join(ROOT, rel);
    const text = fs.readFileSync(abs, 'utf8');

    // Aislamos el array
    const startIdx = text.indexOf(varName);
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
    const prefix = text.slice(0, arrStart);
    const suffix = text.slice(end + 1);
    const arr = JSON.parse(text.slice(arrStart, end + 1).replace(/,(\s*[\]\}])/g, '$1'));

    let appliedInFile = 0;

    function walk(node, pathParts) {
        if (Array.isArray(node)) {
            node.forEach((item, i) => walk(item, [...pathParts, `[${i}]`]));
            return;
        }
        if (!node || typeof node !== 'object') return;
        if (isLocalized(node)) {
            const key = pathParts.join('.').replace(/\.\[/g, '[');
            const tr = translations[key];
            if (tr) {
                if (!node.pt && tr.pt !== undefined) {
                    node.pt = tr.pt;
                    appliedInFile++;
                }
                if (!node.it && tr.it !== undefined) {
                    node.it = tr.it;
                    appliedInFile++;
                }
            }
            return;
        }
        for (const [k, v] of Object.entries(node)) {
            walk(v, [...pathParts, k]);
        }
    }

    for (const item of arr) {
        const root = item.slug || item.id;
        if (!root) continue;
        for (const [k, v] of Object.entries(item)) {
            walk(v, [root, k]);
        }
    }

    // Volcar
    const newArrText = JSON.stringify(arr, null, 2);
    fs.writeFileSync(abs, prefix + newArrText + suffix, 'utf8');
    console.log(`  ${rel}: ${appliedInFile} traducciones aplicadas`);
    totalApplied += appliedInFile;
}

console.log(`\n✓ Total: ${totalApplied} traducciones aplicadas`);
