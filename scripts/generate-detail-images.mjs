import sharp from "sharp";
import { readdir, writeFile } from "fs/promises";
import { extname, basename, join } from "path";

const DIR = "public/detalles-maquinas";
const OUTPUT = "data/detail-images.json";
const EXTS = [".png", ".jpg", ".jpeg", ".webp"];

const files = (await readdir(DIR)).filter(f => EXTS.includes(extname(f).toLowerCase()));

const manifest = {};
for (const file of files) {
  const slug = basename(file, extname(file)).replace(/_transparente$/, "");
  const { width, height } = await sharp(join(DIR, file)).metadata();
  manifest[slug] = { src: `/detalles-maquinas/${file}`, width, height };
}

await writeFile(OUTPUT, JSON.stringify(manifest, null, 2));
console.log(`✅ ${OUTPUT} generado con ${Object.keys(manifest).length} entrada(s)`);
for (const [slug, { src, width, height }] of Object.entries(manifest)) {
  console.log(`   ${slug} → ${src} (${width}x${height})`);
}
