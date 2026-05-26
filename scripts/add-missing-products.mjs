// Añade los 4 productos faltantes al catálogo:
//   - cinta-termica-10mm                  → consumibles
//   - almohadilla-silicona-40x50          → consumibles
//   - almohadilla-silicona-38x38          → consumibles
//   - plato-resistencia-combo-38x38       → accesorios
//
// Datos sacados de tiendasublimacion.com (URLs y referencias reales).

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

// ---- Entradas nuevas ----

const cintaTermica10mm = {
    reference: "CONSUBCIN10M",
    id: "cinta-termica-10mm",
    slug: "cinta-termica-10mm",
    tiendaSublimacionUrl: "https://tiendasublimacion.com/cinta-termica-adhesiva-10mm.html",
    name: {
        es: "Cinta térmica adhesiva 10 mm x 33 m",
        en: "Heat-resistant adhesive tape 10 mm x 33 m",
        pt: "Fita térmica adesiva 10 mm x 33 m",
        it: "Nastro termico adesivo 10 mm x 33 m",
    },
    price: "Consultar PVP",
    pvp: 5.02,
    image: "https://tiendasublimacion.com/media/catalog/product/cache/8acdd8bc2d5574fb711d6c7b202fdd18/c/i/cinta-termica-tipo-kapton-de-0-4.webp",
    description: {
        es: "Rollo de cinta adhesiva tipo Kapton, 10 mm de ancho y 33 m de largo, resistente hasta 250 °C. Imprescindible para fijar transfers en tazas, platos, textiles y otros sustratos sublimables.",
        en: "Kapton-type adhesive tape roll, 10 mm wide and 33 m long, heat-resistant up to 250 °C. Essential for fixing transfers on mugs, plates, textiles and other sublimation substrates.",
        pt: "Rolo de fita adesiva tipo Kapton, 10 mm de largura e 33 m de comprimento, resistente até 250 °C. Indispensável para fixar transferências em canecas, pratos, têxteis e outros substratos sublimáveis.",
        it: "Rotolo di nastro adesivo tipo Kapton, 10 mm di larghezza e 33 m di lunghezza, resistente fino a 250 °C. Indispensabile per fissare i transfer su tazze, piatti, tessuti e altri substrati sublimabili.",
    },
    technicalSpecs: [
        { label: { es: "Ancho", en: "Width", pt: "Largura", it: "Larghezza" }, value: "10 mm" },
        { label: { es: "Largo", en: "Length", pt: "Comprimento", it: "Lunghezza" }, value: "33 m" },
        { label: { es: "Resistencia térmica", en: "Heat resistance", pt: "Resistência térmica", it: "Resistenza termica" }, value: "Hasta 250 °C / Up to 250 °C" },
        { label: { es: "Tipo", en: "Type", pt: "Tipo", it: "Tipo" }, value: "Cinta adhesiva tipo Kapton / Kapton-type adhesive tape" },
    ],
};

const almohadillaSilicona40x50 = {
    reference: "PLAACCA50",
    id: "almohadilla-silicona-40x50",
    slug: "almohadilla-silicona-40x50",
    tiendaSublimacionUrl: "https://tiendasublimacion.com/almohadilla-de-silicona-de-40x50.html",
    name: {
        es: "Almohadilla de silicona de 40 x 50 cm para plato base",
        en: "40 x 50 cm silicone pad for base plate",
        pt: "Almofada de silicone de 40 x 50 cm para prato base",
        it: "Cuscino in silicone 40 x 50 cm per piastra base",
    },
    price: "Consultar PVP",
    pvp: 55.06,
    image: "https://tiendasublimacion.com/media/catalog/product/cache/8acdd8bc2d5574fb711d6c7b202fdd18/w/h/white-61z1xwc-uul._ac_sl1500_.webp",
    description: {
        es: "Almohadilla de silicona resistente al calor hasta 220 °C con espesor de 10 mm. Asegura impresiones uniformes y perfectas en prensas de calor para sublimación.",
        en: "Heat-resistant silicone pad up to 220 °C with 10 mm thickness. Ensures uniform and perfect prints on sublimation heat presses.",
        pt: "Almofada de silicone resistente ao calor até 220 °C com 10 mm de espessura. Garante impressões uniformes e perfeitas em prensas térmicas para sublimação.",
        it: "Cuscino in silicone resistente al calore fino a 220 °C con spessore di 10 mm. Garantisce stampe uniformi e perfette su presse termiche per sublimazione.",
    },
    technicalSpecs: [
        { label: { es: "Dimensiones", en: "Dimensions", pt: "Dimensões", it: "Dimensioni" }, value: "40 x 50 cm" },
        { label: { es: "Espesor", en: "Thickness", pt: "Espessura", it: "Spessore" }, value: "10 mm" },
        { label: { es: "Resistencia al calor", en: "Heat resistance", pt: "Resistência ao calor", it: "Resistenza al calore" }, value: "Hasta 220 °C / Up to 220 °C" },
        { label: { es: "Material", en: "Material", pt: "Material", it: "Materiale" }, value: "Silicona / Silicone" },
    ],
};

const almohadillaSilicona38x38 = {
    reference: "PLAACCA38",
    id: "almohadilla-silicona-38x38",
    slug: "almohadilla-silicona-38x38",
    tiendaSublimacionUrl: "https://tiendasublimacion.com/almohadilla-de-silicona-de-38x38.html",
    name: {
        es: "Almohadilla de silicona de 38 x 38 cm",
        en: "38 x 38 cm silicone pad",
        pt: "Almofada de silicone de 38 x 38 cm",
        it: "Cuscino in silicone 38 x 38 cm",
    },
    price: "Consultar PVP",
    pvp: 39.87,
    image: "https://tiendasublimacion.com/media/catalog/product/cache/8acdd8bc2d5574fb711d6c7b202fdd18/w/h/white-61-fucn8ygl._ac_uf894_1000_ql80_.webp",
    description: {
        es: "Almohadilla de silicona resistente al calor hasta 220 °C con espesor de 10 mm. Para impresiones uniformes y perfectas en prensa de calor de sublimación.",
        en: "Heat-resistant silicone pad up to 220 °C with 10 mm thickness. For uniform and perfect prints on sublimation heat presses.",
        pt: "Almofada de silicone resistente ao calor até 220 °C com 10 mm de espessura. Para impressões uniformes e perfeitas em prensa térmica de sublimação.",
        it: "Cuscino in silicone resistente al calore fino a 220 °C con spessore di 10 mm. Per stampe uniformi e perfette su pressa termica per sublimazione.",
    },
    technicalSpecs: [
        { label: { es: "Dimensiones", en: "Dimensions", pt: "Dimensões", it: "Dimensioni" }, value: "38 x 38 cm" },
        { label: { es: "Espesor", en: "Thickness", pt: "Espessura", it: "Spessore" }, value: "10 mm" },
        { label: { es: "Resistencia al calor", en: "Heat resistance", pt: "Resistência ao calor", it: "Resistenza al calore" }, value: "Hasta 220 °C / Up to 220 °C" },
        { label: { es: "Material", en: "Material", pt: "Material", it: "Materiale" }, value: "Silicona / Silicone" },
    ],
};

const platoResistenciaCombo38x38 = {
    reference: "BPLAN159",
    id: "plato-resistencia-combo-38x38",
    slug: "plato-resistencia-combo-38x38",
    tiendaSublimacionUrl: "https://tiendasublimacion.com/plato-y-resistencia-planchas-para-planchas-combo-beinsen-38x38.html",
    name: {
        es: "Plato + resistencia para planchas combo Beinsen 38 x 38",
        en: "Platen + heating element for Beinsen Combo 38 x 38 presses",
        pt: "Prato + resistência para prensas combo Beinsen 38 x 38",
        it: "Piastra + resistenza per presse combo Beinsen 38 x 38",
    },
    price: "Consultar PVP",
    pvp: 157.30,
    image: "https://tiendasublimacion.com/media/catalog/product/cache/8acdd8bc2d5574fb711d6c7b202fdd18/w/h/white-resiplana_1.webp",
    description: {
        es: "Repuesto de plato superior con resistencia incorporada para planchas combo Beinsen 38 x 38 de 1ª generación. Aplica calor plano y uniforme sobre los objetos a planchar.",
        en: "Upper platen replacement with built-in heating element for first-generation Beinsen Combo 38 x 38 presses. Delivers flat, uniform heat on the items being pressed.",
        pt: "Reposição de prato superior com resistência incorporada para prensas combo Beinsen 38 x 38 de 1ª geração. Aplica calor plano e uniforme sobre os objetos a prensar.",
        it: "Ricambio della piastra superiore con resistenza integrata per presse combo Beinsen 38 x 38 di prima generazione. Applica calore piano e uniforme sugli oggetti da pressare.",
    },
    technicalSpecs: [
        { label: { es: "Dimensiones plato", en: "Platen dimensions", pt: "Dimensões do prato", it: "Dimensioni piastra" }, value: "38 x 38 cm" },
        { label: { es: "Material", en: "Material", pt: "Material", it: "Materiale" }, value: "Aluminio fundido / Cast aluminium" },
        { label: { es: "Compatibilidad", en: "Compatibility", pt: "Compatibilidade", it: "Compatibilità" }, value: "Planchas Combo Beinsen 1ª generación 38 x 38" },
        { label: { es: "Incluye", en: "Includes", pt: "Inclui", it: "Include" }, value: "Plato + resistencia + cableado + adaptador" },
    ],
};

// ---- Aplicar ----

const consFile = path.join(ROOT, "data/raw/consumables.ts");
const accFile = path.join(ROOT, "data/raw/accessories.ts");

const C = loadFile(consFile);
const A = loadFile(accFile);

const newConsumables = [cintaTermica10mm, almohadillaSilicona40x50, almohadillaSilicona38x38];
const newAccessories = [platoResistenciaCombo38x38];

const existingConsIds = new Set(C.arr.map((x) => x.id));
const existingAccIds = new Set(A.arr.map((x) => x.id));

let addedCons = 0, addedAcc = 0;
for (const n of newConsumables) {
    if (existingConsIds.has(n.id)) { console.log("· ya existe (cons): " + n.id); continue; }
    C.arr.push(n);
    addedCons++;
    console.log("+ consumible: " + n.id);
}
for (const n of newAccessories) {
    if (existingAccIds.has(n.id)) { console.log("· ya existe (acc): " + n.id); continue; }
    A.arr.push(n);
    addedAcc++;
    console.log("+ accesorio:  " + n.id);
}

saveFile(consFile, C);
saveFile(accFile, A);

console.log("\n✓ Añadidos " + addedCons + " consumibles y " + addedAcc + " accesorios.");
console.log("  Total consumibles: " + C.arr.length);
console.log("  Total accesorios:  " + A.arr.length);
console.log("\nSiguiente paso: ejecuta `node scripts/fix-product-categorization.mjs --apply`");
console.log("para mover las refs de almohadillas de silicona del array accessories al consumables en planchas.");
