// Audita si cada plancha tiene la lista obligatoria de 11 accesorios.
// Reporta por plancha qué tiene y qué le falta.

import { rawPlanchasData } from "../data/raw/planchas.ts";
import { rawAccessoriesData } from "../data/raw/accessories.ts";
import { rawConsumablesData } from "../data/raw/consumables.ts";

// id → nombre ES — combinamos accesorios + consumibles porque algunos viven en cada uno
const idToName = new Map();
for (const a of [...rawAccessoriesData, ...rawConsumablesData]) {
    const n = typeof a.name === "string" ? a.name : a.name?.es;
    idToName.set(a.id, n || "(sin nombre)");
}

// Las 11 categorías obligatorias. Regex sobre el NOMBRE del accesorio para detectar match.
// Un item puede contar en VARIAS categorías (no se hace break en el primer match).
const CATS = [
    ["Almohadilla (silicona, de su tamaño)",      /almohadilla\s+de\s+silicona/i],
    ["Almohadilla 2,4 mm",                        /2[.,]4\s*mm/i],
    ["Cinta térmica",                             /cinta\s*t[eé]rmica/i],
    ["Guantes",                                   /guante/i],
    ["Termómetro",                                /term[oó]metro/i],
    ["Papel protector siliconado",                /papel.*siliconad|siliconad.*papel/i],
    ["Funda aislante",                            /funda\s*aislan/i],
    ["Funda protectora",                          /funda\s*protector/i],
    ["Almohadilla teflón termorresistente",       /almohadilla\s+de\s+tefl[oó]n.*termorresist/i],
    ["Almohadilla algodón reciclado 80×110",      /almohadilla\s+de\s+algod[oó]n\s+recicl/i],
    ["Hoja/Lámina de teflón Beinsen",             /l[aá]mina\s+de\s+tefl|hoja\s+de\s+tefl/i],
];

const planchas = rawPlanchasData.filter(p => !p.hidden);
console.log(`\nTotal planchas visibles: ${planchas.length}\n`);

// Contador global de qué accesorios obligatorios cubre cada plancha
const summary = [];
for (const p of planchas) {
    const accIds = [...(p.accessories || []).map(a => a.id), ...(p.consumables || []).map(a => a.id)];
    const accNames = accIds.map(id => idToName.get(id) || `(? ${id})`);
    const tamPlato = (p.technicalSpecs || []).find(s => {
        const lab = typeof s.label === "string" ? s.label : s.label?.es || "";
        return /tama[ñn]o.*plato|tama[ñn]o.*plancha/i.test(lab);
    });
    const tamPlatoTxt = tamPlato ? (typeof tamPlato.value === "string" ? tamPlato.value : tamPlato.value?.es) : "(?)";

    const tieneOFalta = CATS.map(([label, rx]) => {
        const matches = accNames.filter(n => rx.test(n));
        return [label, matches];
    });
    summary.push({ slug: p.slug, name: p.name.es, tam: tamPlatoTxt, total: accIds.length, tieneOFalta });
}

// Print: por plancha, lo que falta
console.log("=".repeat(80));
console.log("AUDITORÍA POR PLANCHA");
console.log("=".repeat(80));
for (const s of summary) {
    const faltan = s.tieneOFalta.filter(([, m]) => m.length === 0).map(([l]) => l);
    const tiene  = s.tieneOFalta.filter(([, m]) => m.length > 0);
    console.log(`\n▶ ${s.name}  [${s.slug}]  · plato: ${s.tam} · accesorios totales: ${s.total}`);
    if (tiene.length) {
        console.log(`   ✓ Tiene (${tiene.length}/11):`);
        for (const [l, m] of tiene) console.log(`      · ${l}  →  ${m.join(" | ")}`);
    }
    if (faltan.length) {
        console.log(`   ✗ FALTAN (${faltan.length}/11):`);
        for (const l of faltan) console.log(`      · ${l}`);
    }
}

// Tabla resumen cobertura por categoría
console.log("\n\n" + "=".repeat(80));
console.log("COBERTURA POR CATEGORÍA (cuántas planchas tienen cada accesorio obligatorio)");
console.log("=".repeat(80));
for (const [label] of CATS) {
    const con = summary.filter(s => s.tieneOFalta.find(([l]) => l === label)[1].length > 0).length;
    const sin = summary.length - con;
    const bar = "█".repeat(Math.round((con / summary.length) * 30));
    console.log(` ${label.padEnd(44)} ${String(con).padStart(2)}/${summary.length}  ${bar} ${"·".repeat(30 - bar.length)} (faltan ${sin})`);
}
