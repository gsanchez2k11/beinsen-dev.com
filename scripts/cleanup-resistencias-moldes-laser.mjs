// Tercera ronda de limpieza de catálogo:
//   1) Eliminar los 2 moldes que aún quedan en accessories.ts y sus refs en planchas.
//   2) Mover los 17 items "resistencia*" de accessories.ts a consumables.ts
//      (objeto completo + las refs en cada plancha).
//   3) Eliminar la ref "laser-posicionamiento" de la plancha Barahona.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function findArrayEnd(text, start) {
    let depth = 0, inStr = false, esc = false;
    for (let i = start; i < text.length; i++) {
        const c = text[i];
        if (inStr) {
            if (esc) esc = false;
            else if (c === "\\") esc = true;
            else if (c === '"') inStr = false;
        } else {
            if (c === '"') inStr = true;
            else if (c === "[") depth++;
            else if (c === "]") { depth--; if (depth === 0) return i; }
        }
    }
    return -1;
}

function loadFile(file) {
    const raw = fs.readFileSync(file, "utf8");
    const eol = raw.includes("\r\n") ? "\r\n" : "\n";
    const eqIdx = raw.search(/=\s*\[/);
    const arrStart = raw.indexOf("[", eqIdx);
    const arrEnd = findArrayEnd(raw, arrStart);
    const prefix = raw.slice(0, arrStart);
    const arr = JSON.parse(raw.slice(arrStart, arrEnd + 1).replace(/,(\s*[\]}])/g, "$1"));
    const suffix = raw.slice(arrEnd + 1);
    return { prefix, suffix, arr, eol };
}

function saveFile(file, { prefix, suffix, arr, eol }) {
    const json = JSON.stringify(arr, null, 2);
    let out = prefix + json + suffix;
    if (eol === "\r\n") out = out.replace(/\r?\n/g, "\r\n");
    fs.writeFileSync(file, out);
}

const TO_DELETE_FROM_ACC = new Set([
    "molde-3d-silicona-platos",
    "molde-3d-silicona-tazas-conicas-jarras",
]);
const TO_DELETE_FROM_REFS = new Set([
    ...TO_DELETE_FROM_ACC,
    "laser-posicionamiento",
]);
const isResistencia = (id) => /^resistencia|-resistencia/i.test(id) || id.startsWith("plato-resistencia");

const A = loadFile(path.join(ROOT, "data/raw/accessories.ts"));
const C = loadFile(path.join(ROOT, "data/raw/consumables.ts"));
const P = loadFile(path.join(ROOT, "data/raw/planchas.ts"));

// 1) Borrar moldes de accessories
const deletedMoldes = A.arr.filter((x) => TO_DELETE_FROM_ACC.has(x.id));
A.arr = A.arr.filter((x) => !TO_DELETE_FROM_ACC.has(x.id));
console.log("=== 1) MOLDES ELIMINADOS (" + deletedMoldes.length + ") ===");
for (const d of deletedMoldes) console.log("  - " + d.id + "  →  " + (d.name?.es || d.name));

// 2) Mover resistencias acc → cons (objeto completo)
const movedToCons = [];
const remainingAcc = [];
for (const item of A.arr) {
    if (isResistencia(item.id)) movedToCons.push(item);
    else remainingAcc.push(item);
}
A.arr = remainingAcc;
C.arr = C.arr.concat(movedToCons);
console.log("\n=== 2) RESISTENCIAS MOVIDAS acc→cons (" + movedToCons.length + ") ===");
for (const r of movedToCons) console.log("  - " + r.id);

// 3) Re-clasificar refs en planchas + borrar refs a items eliminados
const accIdsNow = new Set(A.arr.map((x) => x.id));
const consIdsNow = new Set(C.arr.map((x) => x.id));

let removedRefs = 0;
let movedRefs = 0;
const removedLog = [];
const movedLog = [];

for (const pl of P.arr) {
    const oldAcc = pl.accessories || [];
    const oldCons = pl.consumables || [];
    const newAcc = [];
    const newCons = [];

    for (const it of oldAcc) {
        if (TO_DELETE_FROM_REFS.has(it.id)) {
            removedRefs++;
            removedLog.push("  acc [" + pl.slug + "] " + it.id);
            continue;
        }
        if (consIdsNow.has(it.id) && !accIdsNow.has(it.id)) {
            newCons.push(it);
            movedRefs++;
            movedLog.push("  acc→cons  [" + pl.slug + "] " + it.id);
            continue;
        }
        newAcc.push(it);
    }
    for (const it of oldCons) {
        if (TO_DELETE_FROM_REFS.has(it.id)) {
            removedRefs++;
            removedLog.push("  cons [" + pl.slug + "] " + it.id);
            continue;
        }
        if (accIdsNow.has(it.id) && !consIdsNow.has(it.id)) {
            newAcc.push(it);
            movedRefs++;
            movedLog.push("  cons→acc  [" + pl.slug + "] " + it.id);
            continue;
        }
        newCons.push(it);
    }
    pl.accessories = newAcc;
    pl.consumables = newCons;
}

console.log("\n=== 3) REFS ELIMINADAS (" + removedRefs + ") ===");
console.log(removedLog.join("\n"));
console.log("\n=== 4) REFS MOVIDAS DE ARRAY (" + movedRefs + ") ===");
console.log(movedLog.join("\n"));

saveFile(path.join(ROOT, "data/raw/accessories.ts"), A);
saveFile(path.join(ROOT, "data/raw/consumables.ts"), C);
saveFile(path.join(ROOT, "data/raw/planchas.ts"), P);

console.log("\n✓ Total accesorios: " + A.arr.length + " | Total consumibles: " + C.arr.length);
