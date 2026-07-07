// Exporta las 33 planchas a un CSV listo para subir a una IA externa.
// El TS de data/raw/planchas.ts es JSON puro (keys con dobles comillas)
// envuelto en `export const X: T[] = [...]`. Lo extraemos por texto.

import fs from "node:fs";
import path from "node:path";

const SRC = "data/raw/planchas.ts";
const OUT = "C:/Users/futur/Downloads/prensas-beinsen.csv";
const BASE_URL = "https://beinsen.com";

const txt = fs.readFileSync(SRC, "utf8").replace(/\r\n/g, "\n");
const startIdx = txt.indexOf("= [\n") + 2;
const endIdx = txt.indexOf("];\n", startIdx);
if (startIdx < 2 || endIdx === -1) throw new Error("No encuentro el array exportado en " + SRC);
const planchas = JSON.parse(txt.slice(startIdx, endIdx + 1));

function csvEscape(v) {
    if (v === null || v === undefined) return "";
    const s = String(v);
    if (/[",\n;]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
}

function getLoc(obj, key = "es") {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[key] || "";
}

// Formato exacto que Predis.ai espera (segun sample_ecom_upload.csv)
const headers = ["id", "title", "description", "images"];

// Manifest de imagenes para incluir TODAS las fotos de cada plancha
const imagesManifest = JSON.parse(fs.readFileSync("data/product-images.json", "utf8"));

const rows = [headers.join(",")];

for (const p of planchas) {
    const slug = p.slug || p.id || "";
    const imgs = imagesManifest[slug] || (p.image ? [p.image] : []);
    const imagesField = imgs.map((rel) => `${BASE_URL}${rel}`).join(",");
    const row = [
        slug,
        getLoc(p.name, "es"),
        getLoc(p.description, "es"),
        imagesField,
    ].map(csvEscape);
    rows.push(row.join(","));
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, rows.join("\n") + "\n", "utf8");
console.log(`Exportadas ${planchas.length} prensas a ${OUT}`);
