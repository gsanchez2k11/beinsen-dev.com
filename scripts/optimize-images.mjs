// Optimiza in-place todas las imágenes de public/products/* :
//  - redimensiona el lado mayor a MAX_DIMENSION px (preserva ratio)
//  - re-comprime PNG (compressionLevel 9) y JPG (calidad 82, mozjpeg)
//  - omite imágenes que ya están por debajo del umbral (SKIP_IF_BELOW_KB)
//
// No genera nuevos archivos ni cambia formatos. Next.js se encarga de servir
// AVIF/WebP a los clientes que los soportan (next.config.ts:images.formats).
//
// Uso:
//   node scripts/optimize-images.mjs --dry-run    (solo reporta)
//   node scripts/optimize-images.mjs              (aplica)
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PRODUCTS_DIR = path.join(ROOT, 'public', 'products');

const MAX_DIMENSION = 2000;       // px lado mayor
const SKIP_IF_BELOW_KB = 350;     // archivos ya pequeños se dejan
const JPG_QUALITY = 82;
const PNG_COMPRESSION = 9;

const dryRun = process.argv.includes('--dry-run');

function walk(dir) {
    const out = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) out.push(...walk(p));
        else if (/\.(png|jpe?g)$/i.test(entry.name)) out.push(p);
    }
    return out;
}

async function optimize(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const beforeSize = fs.statSync(filePath).size;
    if (beforeSize / 1024 < SKIP_IF_BELOW_KB) return { skipped: true, beforeSize, afterSize: beforeSize };

    const buf = await fs.promises.readFile(filePath);
    const img = sharp(buf, { failOn: 'none' });
    const meta = await img.metadata();
    const maxSide = Math.max(meta.width || 0, meta.height || 0);

    let pipeline = img.rotate(); // respeta EXIF
    if (maxSide > MAX_DIMENSION) {
        pipeline = pipeline.resize({
            width: meta.width >= meta.height ? MAX_DIMENSION : undefined,
            height: meta.height > meta.width ? MAX_DIMENSION : undefined,
            fit: 'inside',
            withoutEnlargement: true,
        });
    }

    if (ext === '.png') {
        pipeline = pipeline.png({ compressionLevel: PNG_COMPRESSION, palette: true });
    } else {
        pipeline = pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true });
    }

    const out = await pipeline.toBuffer();
    const afterSize = out.length;

    // Solo sobrescribimos si reducimos al menos 5 %
    if (afterSize >= beforeSize * 0.95) {
        return { skipped: true, reason: 'no-gain', beforeSize, afterSize };
    }

    if (!dryRun) await fs.promises.writeFile(filePath, out);
    return { skipped: false, beforeSize, afterSize };
}

const files = walk(PRODUCTS_DIR);
console.log(`Encontradas ${files.length} imágenes en public/products/\n`);

let totalBefore = 0;
let totalAfter = 0;
let optimized = 0;
let skipped = 0;
let errors = 0;

let i = 0;
for (const f of files) {
    i++;
    try {
        const r = await optimize(f);
        totalBefore += r.beforeSize;
        totalAfter += r.afterSize;
        if (r.skipped) {
            skipped++;
            continue;
        }
        optimized++;
        const rel = path.relative(ROOT, f);
        const beforeMB = (r.beforeSize / 1024 / 1024).toFixed(2);
        const afterMB = (r.afterSize / 1024 / 1024).toFixed(2);
        const pct = ((1 - r.afterSize / r.beforeSize) * 100).toFixed(0);
        console.log(`  [${i}/${files.length}] ${rel}`);
        console.log(`         ${beforeMB} MB → ${afterMB} MB  (-${pct}%)`);
    } catch (e) {
        errors++;
        console.log(`  ⚠ error en ${path.relative(ROOT, f)}: ${e.message}`);
    }
}

const beforeMB = (totalBefore / 1024 / 1024).toFixed(1);
const afterMB = (totalAfter / 1024 / 1024).toFixed(1);
const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);

console.log(`\n${dryRun ? '[dry-run] ' : '✓ '}Optimizadas: ${optimized}  Sin cambios: ${skipped}  Errores: ${errors}`);
console.log(`Total: ${beforeMB} MB → ${afterMB} MB   (ahorrados ${savedMB} MB)`);
