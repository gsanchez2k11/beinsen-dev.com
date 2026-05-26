// Limpieza de catálogo:
//   1) Borrar 4 accesorios huérfanos (3 moldes + 1 placa).
//   2) Mover IDs mal categorizados al array correcto en cada plancha.
//   3) Reportar referencias fantasma con sugerencias por similitud.
//
// Modo `--apply` escribe los archivos. Sin flag, dry-run.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const APPLY = process.argv.includes("--apply");
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const FILES = {
    accessories: path.join(ROOT, "data/raw/accessories.ts"),
    consumables: path.join(ROOT, "data/raw/consumables.ts"),
    planchas: path.join(ROOT, "data/raw/planchas.ts"),
};

const TO_DELETE = new Set([
    "molde-3d-silicona-3-botellas-aluminio",
    "molde-3d-silicona-tazas-rectas",
    "molde-silicona-3-tazas-11oz",
    "placa-polimero-platos-horno",
]);

// Busca el `]` que cierra el array que abre en `start`, ignorando corchetes
// dentro de cadenas JSON. Devuelve el índice del `]` final.
function findArrayEnd(text, start) {
    let depth = 0;
    let inStr = false;
    let esc = false;
    for (let i = start; i < text.length; i++) {
        const c = text[i];
        if (inStr) {
            if (esc) esc = false;
            else if (c === "\\") esc = true;
            else if (c === '"') inStr = false;
        } else {
            if (c === '"') inStr = true;
            else if (c === "[") depth++;
            else if (c === "]") {
                depth--;
                if (depth === 0) return i;
            }
        }
    }
    return -1;
}

function loadFile(file) {
    const raw = fs.readFileSync(file, "utf8");
    const eol = raw.includes("\r\n") ? "\r\n" : "\n";
    // Encontrar el primer "= [" tras la declaración del export.
    const eqIdx = raw.search(/=\s*\[/);
    if (eqIdx < 0) throw new Error("No se encontró '= [' en " + file);
    const arrStart = raw.indexOf("[", eqIdx);
    const arrEnd = findArrayEnd(raw, arrStart);
    if (arrEnd < 0) throw new Error("No se encontró ']' de cierre en " + file);
    const prefix = raw.slice(0, arrStart);
    const arrText = raw.slice(arrStart, arrEnd + 1).replace(/,(\s*[\]}])/g, "$1");
    const suffix = raw.slice(arrEnd + 1); // incluye ";\n" y cualquier helper posterior
    const arr = JSON.parse(arrText);
    return { prefix, suffix, arr, eol };
}

function saveFile(file, { prefix, suffix, arr, eol }) {
    const json = JSON.stringify(arr, null, 2);
    let out = prefix + json + suffix;
    if (eol === "\r\n") out = out.replace(/\r?\n/g, "\r\n");
    fs.writeFileSync(file, out);
}

function levenshtein(a, b) {
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    const m = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
    for (let i = 0; i <= a.length; i++) m[i][0] = i;
    for (let j = 0; j <= b.length; j++) m[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            m[i][j] = a[i - 1] === b[j - 1]
                ? m[i - 1][j - 1]
                : Math.min(m[i - 1][j], m[i][j - 1], m[i - 1][j - 1]) + 1;
        }
    }
    return m[a.length][b.length];
}

// ---- Carga ----
const A = loadFile(FILES.accessories);
const C = loadFile(FILES.consumables);
const P = loadFile(FILES.planchas);

const nameOf = (arr, id) => {
    const item = arr.find((x) => x.id === id);
    if (!item) return null;
    const n = item.name;
    return typeof n === "string" ? n : (n?.es || n?.en || id);
};

// ---- 1) Borrar moldes + placa ----
const beforeAccLen = A.arr.length;
const deleted = A.arr.filter((x) => TO_DELETE.has(x.id));
A.arr = A.arr.filter((x) => !TO_DELETE.has(x.id));

console.log("=== 1) ELIMINADOS de accessories.ts (" + deleted.length + ") ===");
for (const d of deleted) console.log("  - " + d.id + "  →  " + (d.name?.es || d.name));
console.log("  total accesorios: " + beforeAccLen + " → " + A.arr.length);

// Sets actualizados
const accIds = new Set(A.arr.map((x) => x.id));
const consIds = new Set(C.arr.map((x) => x.id));

// ---- 2) Reclasificar mal categorizados en cada plancha ----
let moves = 0;
const moveLog = [];
for (const pl of P.arr) {
    const accArr = pl.accessories || [];
    const consArr = pl.consumables || [];

    // accessories: si el ID es realmente un consumible → mover a consumables
    const newAcc = [];
    for (const item of accArr) {
        if (consIds.has(item.id) && !accIds.has(item.id)) {
            consArr.push(item);
            moves++;
            moveLog.push("  acc→cons  [" + pl.slug + "] " + item.id);
        } else {
            newAcc.push(item);
        }
    }
    pl.accessories = newAcc;

    // consumables: si el ID es realmente un accesorio → mover a accessories
    const newCons = [];
    for (const item of consArr) {
        if (accIds.has(item.id) && !consIds.has(item.id)) {
            pl.accessories.push(item);
            moves++;
            moveLog.push("  cons→acc  [" + pl.slug + "] " + item.id);
        } else {
            newCons.push(item);
        }
    }
    pl.consumables = newCons;
}
console.log("\n=== 2) MOVIMIENTOS (" + moves + ") ===");
console.log(moveLog.join("\n"));

// ---- 3) Investigar fantasmas ----
const allRefAcc = new Set();
const allRefCons = new Set();
for (const pl of P.arr) {
    for (const it of pl.accessories || []) allRefAcc.add(it.id);
    for (const it of pl.consumables || []) allRefCons.add(it.id);
}
const allRefs = new Set([...allRefAcc, ...allRefCons]);
const ghosts = [...allRefs].filter((id) => !accIds.has(id) && !consIds.has(id)).sort();

const allExisting = [...accIds, ...consIds];
console.log("\n=== 3) REFERENCIAS FANTASMA (" + ghosts.length + ") + sugerencias ===");
for (const g of ghosts) {
    const ranked = allExisting
        .map((id) => ({ id, d: levenshtein(g, id) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, 3);
    // En qué planchas aparece
    const inWhich = [];
    for (const pl of P.arr) {
        if ((pl.accessories || []).some((x) => x.id === g)) inWhich.push(pl.slug + " (acc)");
        if ((pl.consumables || []).some((x) => x.id === g)) inWhich.push(pl.slug + " (cons)");
    }
    console.log("\n  · " + g);
    console.log("    usado en: " + inWhich.join(", "));
    console.log("    candidatos:");
    for (const r of ranked) {
        const cat = accIds.has(r.id) ? "acc" : "cons";
        const nm = nameOf(cat === "acc" ? A.arr : C.arr, r.id);
        console.log("      [d=" + r.d + "][" + cat + "] " + r.id + (nm ? "  ← " + nm : ""));
    }
}

// ---- Escribir ----
if (APPLY) {
    saveFile(FILES.accessories, A);
    saveFile(FILES.planchas, P);
    saveFile(FILES.consumables, C);
    console.log("\n✓ Archivos escritos.");
} else {
    console.log("\n(dry-run — relanza con --apply para escribir)");
}
