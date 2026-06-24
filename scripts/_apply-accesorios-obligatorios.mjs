// Aplica la lista de accesorios obligatorios a las 33 planchas visibles.
// Reglas:
//   - Solo AÑADE (nunca borra ni reordena lo existente).
//   - Universales (ID único) → a todas las planchas.
//   - Por tamaño (almohadilla silicona, teflón termorresistente, lámina teflón)
//     → se detecta el tamaño del plato vía technicalSpecs/size y se asigna el ID
//     que matchea. Si la plancha tiene plato variable (38×38 / 40×50), se añaden las dos.
//   - Los SKUs nuevos viven en consumables.ts (creados ya). Aquí solo asignamos.
//   - Reparto entre arrays: guantes y termómetro → "accessories" (ya es la costumbre).
//     Resto → "consumables".

import fs from "node:fs";
import { rawPlanchasData } from "../data/raw/planchas.ts";

const UNIVERSAL_CONSUMABLES = [
    "almohadilla-espuma-24mm",
    "cinta-termica-10mm",
    "papel-protector-siliconado",
    "funda-aislante-prensa",
    "funda-protectora-prensa",
    "almohadilla-algodon-80x110",
];
const UNIVERSAL_ACCESSORIES = [
    "guantes-protectores-algodon",
    "termometro-digital-infrarrojos-it122",
];

const BY_SIZE = {
    "15x15": ["almohadilla-teflon-termorresistente-15x15"],
    "25x25": ["almohadilla-teflon-termorresistente-25x25"],
    "38x38": ["almohadilla-silicona-38x38", "almohadilla-teflon-termorresistente-38x38", "lamina-teflon-38x38"],
    "40x50": ["almohadilla-silicona-40x50", "almohadilla-teflon-termorresistente-40x50", "lamina-teflon-40x50"],
    "80x100": ["almohadilla-silicona-80x100"],
    "80x110": ["almohadilla-silicona-80x100"], // única almohadilla silicona grande que tenemos
};

function detectSizes(plancha) {
    const txts = [];
    const spec = (plancha.technicalSpecs || []).find(s => {
        const lab = typeof s.label === "string" ? s.label : s.label?.es || "";
        return /tama[ñn]o.*plato|tama[ñn]o.*plancha/i.test(lab);
    });
    if (spec) txts.push(typeof spec.value === "string" ? spec.value : spec.value?.es || "");
    txts.push(typeof plancha.size === "string" ? plancha.size : plancha.size?.es || "");
    const sizes = new Set();
    const re = /(\d{2,3})\s*[x×]\s*(\d{2,3})/g;
    for (const t of txts) {
        let m;
        while ((m = re.exec(t))) {
            sizes.add(`${m[1]}x${m[2]}`);
        }
    }
    return sizes;
}

const report = [];
let totalAdded = 0;

for (const p of rawPlanchasData) {
    if (p.hidden) continue;
    const existingAcc = new Set((p.accessories || []).map(a => a.id));
    const existingCon = new Set((p.consumables || []).map(a => a.id));
    const existing = new Set([...existingAcc, ...existingCon]);

    const targetAccessories = new Set(UNIVERSAL_ACCESSORIES);
    const targetConsumables = new Set(UNIVERSAL_CONSUMABLES);
    const sizes = detectSizes(p);
    const sizeBased = new Set();
    for (const s of sizes) {
        for (const id of BY_SIZE[s] || []) sizeBased.add(id);
    }
    // Los por tamaño van como consumibles (almohadillas y láminas son consumibles)
    for (const id of sizeBased) targetConsumables.add(id);

    const toAddAcc = [...targetAccessories].filter(id => !existing.has(id));
    const toAddCon = [...targetConsumables].filter(id => !existing.has(id));

    if (toAddAcc.length || toAddCon.length) {
        p.accessories = [...(p.accessories || []), ...toAddAcc.map(id => ({ id }))];
        p.consumables = [...(p.consumables || []), ...toAddCon.map(id => ({ id }))];
        totalAdded += toAddAcc.length + toAddCon.length;
    }

    report.push({
        slug: p.slug,
        name: typeof p.name === "string" ? p.name : p.name?.es,
        sizes: [...sizes].join(", ") || "(sin tamaño detectado)",
        added: [...toAddAcc, ...toAddCon],
    });
}

// Serialización (preserva orden de claves de inserción de V8)
const out = `import type { Plancha } from "../types";\n\nexport const rawPlanchasData: Plancha[] = ${JSON.stringify(rawPlanchasData, null, 2)};\n`;
fs.writeFileSync("data/raw/planchas.ts", out, "utf8");

// Reporte
console.log("=".repeat(80));
console.log(`APLICADO. Total accesorios añadidos: ${totalAdded}`);
console.log("=".repeat(80));
for (const r of report) {
    console.log(`\n▶ ${r.name}  [${r.slug}]`);
    console.log(`   Tamaños detectados: ${r.sizes}`);
    console.log(`   Añadidos (${r.added.length}): ${r.added.join(", ") || "(ninguno — ya los tenía todos)"}`);
}
