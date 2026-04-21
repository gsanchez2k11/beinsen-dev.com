import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PRODUCTS_DIR = path.join(ROOT, "public", "products");
const OUTPUT = path.join(ROOT, "data", "product-images.json");
const IMG_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

const manifest = {};

if (fs.existsSync(PRODUCTS_DIR)) {
  for (const slug of fs.readdirSync(PRODUCTS_DIR).sort()) {
    const dir = path.join(PRODUCTS_DIR, slug);
    const stat = fs.statSync(dir);
    if (!stat.isDirectory()) continue;
    const files = fs.readdirSync(dir).filter((f) => IMG_EXT.test(f)).sort();
    if (files.length === 0) continue;
    manifest[slug] = files.map((f) => `/products/${slug}/${f}`);
  }
}

fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2) + "\n");
console.log(`✓ Product images manifest: ${Object.keys(manifest).length} products`);
