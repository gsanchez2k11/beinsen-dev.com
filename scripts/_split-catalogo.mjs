// Separa catalogo-beinsen-es.pdf por modelo y guarda 1 PDF por slug en
// public/catalogo/. Cada PDF contiene SOLO la pagina de esa maquina.

import fs from "node:fs";
import path from "node:path";
import { PDFDocument } from "pdf-lib";

const SRC = "C:/Users/futur/Downloads/catalogo-beinsen-es.pdf";
const OUT = "public/catalogo";

// Mapeo paginaPDF (1-indexed) → slug del producto.
// El catalogo va: pag1=portada, pag2=indice, pag3-27=25 maquinas, pag28=contraportada.
const PAGES = [
    [3,  "alaska-plancha-termica-textil"],
    [4,  "barbados-plancha-termica-textil"],
    [5,  "belice-plancha-termica-textil"],
    [6,  "doha-plancha-transfer-gran-formato"],
    [7,  "esparta-prensa-termica-neumatica"],
    [8,  "estambul-prensa-swing-away-electrica"],
    [9,  "guyana-plancha-termica-textil"],
    [10, "kenia-plancha-termica-textil"],
    [11, "malvinas-plancha-termica-textil"],
    [12, "miranda-prensa-termica-automatica-electrica"],
    [13, "normandia-i-plancha-termica-textil"],
    [14, "normandia-iii-plancha-termica-textil"],
    [15, "pocola-plancha-transfer-manual-pequena"],
    [16, "trinidad-prensa-termica-automatica"],
    [17, "jamaica-planchas-transfer-multifuncion-para-sublimacion"],
    [18, "andra-prensa-automatica-tazas"],
    [19, "aruba-plancha-para-tazas"],
    [20, "barein-plancha-termica"],
    [21, "maine-plancha-para-tazas"],
    [22, "sore-plancha-profesional-tazas"],
    [23, "gante-plancha-manual-gorras"],
    [24, "obrei-plancha-gorras-apertura-automatica"],
    [25, "chinela-plancha-transfer-zapatillas"],
    [26, "felina-prensa-termica-para-espinilleras"],
    [27, "tobago-estacion-planchado-continuo"],
];

fs.mkdirSync(OUT, { recursive: true });

const srcBytes = fs.readFileSync(SRC);
const srcDoc = await PDFDocument.load(srcBytes);
const totalPages = srcDoc.getPageCount();
console.log("PDF origen: " + totalPages + " paginas");

let ok = 0;
for (const [pageNum, slug] of PAGES) {
    const newDoc = await PDFDocument.create();
    const [copiedPage] = await newDoc.copyPages(srcDoc, [pageNum - 1]); // 0-indexed
    newDoc.addPage(copiedPage);
    newDoc.setTitle(`Beinsen — ${slug}`);
    newDoc.setAuthor("Futura Teck de Murcia S.L.U.");
    newDoc.setSubject("Catálogo 2026");
    newDoc.setProducer("beinsen.com");
    const bytes = await newDoc.save();
    fs.writeFileSync(path.join(OUT, slug + ".pdf"), bytes);
    ok++;
}

// Tambien copiamos el catalogo completo para distribuidores que quieran enlazar al PDF entero.
fs.writeFileSync(path.join(OUT, "catalogo-completo.pdf"), srcBytes);
console.log("Guardado: catalogo-completo.pdf (catalogo entero)");

console.log("OK: " + ok + " PDFs individuales generados en " + OUT);
