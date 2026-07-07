// Recoge las descargas de Gemini desde C:\Users\futur\Downloads\gemini-output\
// y las coloca en public/products/maquinas/<slug>/fotoPrincipal-styled.png.
//
// El usuario tuvo que guardar cada descarga con el nombre exacto <slug>.png
// segun le indicaba la tarjeta del tablero HTML.
//
// Opciones:
//   --dry-run  no copia, solo dice que pasaria
//   --force    sobreescribe fotoPrincipal-styled.png si ya existe
//   --move     ademas borra el fichero original de Descargas tras copiar

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const force = args.includes("--force");
const moveAfter = args.includes("--move");

const DL_DIR = "C:/Users/futur/Downloads/gemini-output";
const MAQUINAS = "public/products/maquinas";

if (!fs.existsSync(DL_DIR)) {
    console.error("No existe la carpeta de descargas: " + DL_DIR);
    console.error("Creala y guarda ahi las imagenes que descargues de Gemini con nombre <slug>.png.");
    process.exit(1);
}

const planchaSlugs = new Set(
    fs.readdirSync(MAQUINAS).filter((d) => fs.statSync(path.join(MAQUINAS, d)).isDirectory())
);

const pngs = fs.readdirSync(DL_DIR).filter((f) => /\.png$/i.test(f));
if (pngs.length === 0) {
    console.log("No hay PNGs en " + DL_DIR);
    process.exit(0);
}

console.log(`Encontrados ${pngs.length} PNG${pngs.length === 1 ? "" : "s"} en gemini-output\n`);

let ok = 0, skip = 0, unknown = 0, exists = 0;

for (const file of pngs.sort()) {
    const slug = path.basename(file, path.extname(file));
    const src = path.join(DL_DIR, file);
    const dstDir = path.join(MAQUINAS, slug);
    const dst = path.join(dstDir, "fotoPrincipal-styled.png");

    if (!planchaSlugs.has(slug)) {
        console.log(`  ?  ${file}  →  ningun slug coincide (${slug})`);
        unknown++;
        continue;
    }

    if (fs.existsSync(dst) && !force) {
        console.log(`  -  ${file}  →  ya existe fotoPrincipal-styled.png (usa --force para sobreescribir)`);
        exists++;
        continue;
    }

    const size = (fs.statSync(src).size / 1024).toFixed(0);
    if (dryRun) {
        console.log(`  ?  ${file}  →  ${path.relative(".", dst)}  (${size} KB)  [dry-run]`);
    } else {
        fs.copyFileSync(src, dst);
        console.log(`  ✓  ${file}  →  ${path.relative(".", dst)}  (${size} KB)`);
        if (moveAfter) fs.unlinkSync(src);
    }
    ok++;
}

console.log(`\nResumen: ${ok} copiada${ok === 1 ? "" : "s"}, ${exists} saltada${exists === 1 ? "" : "s"} (ya existian), ${unknown} sin slug coincidente`);
if (!dryRun && ok > 0 && !moveAfter) {
    console.log(`\nNota: los originales siguen en ${DL_DIR}. Para borrarlos relanza con --move.`);
}
