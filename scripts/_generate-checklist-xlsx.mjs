// Genera una ficha XLSX en Downloads con la informacion minima para
// añadir una plancha nueva a beinsen.com. Pensada para entregársela al
// jefe / proveedor.

import ExcelJS from "exceljs";

const OUT = "C:/Users/futur/Downloads/FICHA-NUEVA-PLANCHA-BEINSEN.xlsx";

const wb = new ExcelJS.Workbook();
wb.creator = "Beinsen";
wb.created = new Date(2026, 5, 25);

const ws = wb.addWorksheet("Ficha de nueva plancha", {
    views: [{ state: "frozen", ySplit: 2 }],
    pageSetup: { paperSize: 9, orientation: "portrait", fitToPage: true, fitToWidth: 1 },
});

// Cabecera principal
ws.mergeCells("A1:B1");
const title = ws.getCell("A1");
title.value = "FICHA DE NUEVA PLANCHA — Beinsen";
title.font = { name: "Calibri", size: 16, bold: true, color: { argb: "FFFFFFFF" } };
title.alignment = { horizontal: "center", vertical: "middle" };
title.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFF6600" } };
ws.getRow(1).height = 30;

// Cabecera columnas
ws.getRow(2).values = ["Campo", "Ejemplo / Formato"];
ws.getRow(2).font = { bold: true, color: { argb: "FFFFFFFF" } };
ws.getRow(2).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF333333" } };
ws.getRow(2).alignment = { horizontal: "center", vertical: "middle" };
ws.getRow(2).height = 22;

// Anchos
ws.columns = [
    { key: "campo", width: 38 },
    { key: "ej",    width: 58 },
];

const SECTION_BG = "FF1F4E79";   // azul oscuro
const EJEMPLO_COLOR = "FF7F7F7F"; // gris para los ejemplos

function addSection(label) {
    const r = ws.addRow([label, ""]);
    ws.mergeCells(`A${r.number}:B${r.number}`);
    r.getCell(1).font = { bold: true, size: 13, color: { argb: "FFFFFFFF" } };
    r.getCell(1).alignment = { horizontal: "left", vertical: "middle", indent: 1 };
    r.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: SECTION_BG } };
    r.height = 24;
}

function addRow(campo, ejemplo) {
    const r = ws.addRow([campo, ejemplo]);
    r.font = { name: "Calibri", size: 11 };
    r.alignment = { vertical: "middle", wrapText: true };

    r.getCell(1).font = { name: "Calibri", size: 11 };
    r.getCell(2).font = { name: "Calibri", size: 11, italic: true, color: { argb: EJEMPLO_COLOR } };

    r.height = 26;
}

// ───── A. IDENTIDAD ─────
addSection("A. Identidad comercial");
addRow("Nombre comercial",                "Alaska Plancha Térmica Textil");
addRow("Referencia interna",              "90004029");
addRow("Tipo de plancha",                 "Textil / Tazas / Gorras / Especial");
addRow("PVP",                             "Importe en € o «Consultar PVP»");

// ───── B. ESPECIFICACIONES TÉCNICAS ─────
addSection("B. Especificaciones técnicas");
addRow("Tamaño del plato",                "40×50 cm   ó   38×38 cm");
addRow("Tipo de plato",                   "Sandwich / Swing-Away / Multi-función");
addRow("Modo de funcionamiento",          "Eléctrica / Neumática / Manual / Automática");
addRow("Potencia",                        "1.8 kW");
addRow("Voltaje",                         "220 V");
addRow("Temperatura máxima",              "230 °C");
addRow("Rango del temporizador",          "0–999 segundos");
addRow("Peso neto",                       "42 kg");
addRow("Peso bruto",                      "46 kg");
addRow("Tamaño del embalaje",             "75×52×50 cm");

// ───── C. CARACTERÍSTICAS ESPECIALES ─────
addSection("C. Características especiales (para destacar en ficha, redes y catálogo)");
addRow("Características principales",     "Eléctrica · Neumática · Swing-away · Sándwich · Doble estación · Platos intercambiables · Cambio rápido · Pantalla táctil · Memorias programables · Apertura electromagnética · Gran formato · Multiformato · Alta producción…");
addRow("Aplicaciones principales",        "Camisetas, mochilas, bolsas, lonas, prendas técnicas…");

// ───── D. GARANTÍA Y CERTIFICACIONES ─────
addSection("D. Garantía y certificaciones");
addRow("Garantía",                        "2 años con piezas y mano de obra");
addRow("Certificaciones disponibles",     "CE, RoHS, FCC… — adjuntar los PDFs de cada una");

// ───── E. FOTOGRAFÍAS ─────
addSection("E. Fotografías");
addRow("Fotos del producto",              "Carpeta con fotos del producto");

// ───── F. MATERIAL COMPLEMENTARIO ─────
addSection("F. Material complementario");
addRow("Vídeo del producto funcionando",  "15–30 segundos, MP4 o URL YouTube");
addRow("Manual de usuario en PDF",        "Idealmente en ES, EN, PT e IT");
addRow("Libro de mantenimiento",          "Guía interna de mantenimiento y servicio técnico");

// ───── G. ACCESORIOS Y REPUESTOS ─────
addSection("G. Accesorios y repuestos (deben enlazarse con sus artículos en la web)");
addRow("Accesorios compatibles",          "Listado de accesorios + referencia de cada uno");
addRow("Repuestos disponibles",           "Listado de repuestos + referencia de cada uno");

// ───── H. METADATOS WEB ─────
addSection("H. Metadatos web (los rellena el equipo digital)");
addRow("Slug (URL)",                      "alaska-plancha-termica-textil");
addRow("Categoría web",                   "planchas");

await wb.xlsx.writeFile(OUT);
console.log("OK: " + OUT);
