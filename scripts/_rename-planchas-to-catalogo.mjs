// One-shot: reemplaza el URL /catalogo (route) por /catalogo en todo el
// repositorio, dejando intactas las referencias al filesystem
// `data/raw/planchas` (donde 'planchas' va precedido de una letra).
//
// Patrón:   (?<!\w)/catalogo\b   ← lookbehind impide matches dentro de
//                                  "raw/planchas", "data/raw/planchas.ts", etc.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Carpetas/ficheros que NUNCA tocamos.
const EXCLUDE_DIRS = new Set([
    "node_modules", ".next", ".git", "public", "data",
]);
// Sí tocamos data/products.ts pero NO data/raw/*  — manejado abajo.

const EXTENSIONS = new Set([
    ".ts", ".tsx", ".mts", ".mjs", ".js", ".jsx", ".json", ".md", ".mdx",
]);

const URL_RE = /(?<!\w)\/catalogo\b/g;

let totalReplacements = 0;
const filesChanged = [];

function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (EXCLUDE_DIRS.has(entry.name)) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walk(full);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name);
            if (!EXTENSIONS.has(ext)) continue;
            processFile(full);
        }
    }
}

function processFile(file) {
    const raw = fs.readFileSync(file, "utf8");
    if (!URL_RE.test(raw)) return;
    URL_RE.lastIndex = 0;
    const count = (raw.match(URL_RE) || []).length;
    const out = raw.replace(URL_RE, "/catalogo");
    fs.writeFileSync(file, out);
    totalReplacements += count;
    filesChanged.push({ file: path.relative(ROOT, file), count });
}

walk(ROOT);

// Procesar manualmente data/products.ts (no toca raw/* pero podría tener URLs).
// Lo dejamos fuera del walk por seguridad — si tuviera URLs, se actualizan aquí.
const productsFile = path.join(ROOT, "data/products.ts");
if (fs.existsSync(productsFile)) {
    processFile(productsFile);
}

console.log("Ficheros modificados (" + filesChanged.length + "):");
for (const c of filesChanged) {
    console.log("  " + String(c.count).padStart(3) + "x  " + c.file);
}
console.log("\nTotal reemplazos: " + totalReplacements);
