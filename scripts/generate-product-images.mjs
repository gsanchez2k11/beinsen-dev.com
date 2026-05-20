import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PRODUCTS_DIR = path.join(ROOT, 'public', 'products');
const OUT_JSON = path.join(ROOT, 'data', 'product-images.json');

const IMAGE_EXTS = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'];

function isImage(f) {
  return IMAGE_EXTS.includes(path.extname(f).toLowerCase());
}

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(isImage);
}

function findFile(dir, base) {
  // Returns the file matching `${base}.<ext>` for any image ext, or null
  const files = listImages(dir);
  for (const f of files) {
    if (path.basename(f, path.extname(f)) === base) return f;
  }
  return null;
}

function buildGallery(slugDir, urlBase) {
  // Order: fotoPrincipal → fotoExp(N)? → fotoB1..4 → fotoExtra1..N → galeria/* (legacy)
  const result = [];
  const rootFiles = listImages(slugDir);
  const byBase = new Map(rootFiles.map(f => [path.basename(f, path.extname(f)), f]));

  const principal = byBase.get('fotoPrincipal');
  if (principal) result.push(`${urlBase}/${principal}`);

  // fotoExp (may also be fotoExp1, fotoExp2…)
  const expFiles = rootFiles.filter(f => /^fotoExp(\d*)$/i.test(path.basename(f, path.extname(f)))).sort(naturalSort);
  for (const f of expFiles) result.push(`${urlBase}/${f}`);

  const bens = rootFiles.filter(f => /^fotoB\d+$/i.test(path.basename(f, path.extname(f)))).sort(naturalSort);
  for (const f of bens) result.push(`${urlBase}/${f}`);

  const extras = rootFiles.filter(f => /^fotoExtra\d+$/i.test(path.basename(f, path.extname(f)))).sort(naturalSort);
  for (const f of extras) result.push(`${urlBase}/${f}`);

  // Legacy galeria/ subfolder (if any remains)
  const galeriaDir = path.join(slugDir, 'galeria');
  const galeriaFiles = listImages(galeriaDir).sort(naturalSort);
  for (const f of galeriaFiles) result.push(`${urlBase}/galeria/${f}`);

  // Fallback: list whatever images sit in root with no recognized prefix
  if (result.length === 0) {
    const all = rootFiles.sort(naturalSort);
    for (const f of all) result.push(`${urlBase}/${f}`);
  }

  return result;
}

function processCategory(category) {
  const catDir = path.join(PRODUCTS_DIR, category);
  if (!fs.existsSync(catDir)) return {};
  const out = {};
  const slugs = fs.readdirSync(catDir).filter(s => {
    const p = path.join(catDir, s);
    return fs.statSync(p).isDirectory();
  });
  for (const slug of slugs) {
    const slugDir = path.join(catDir, slug);
    const urlBase = `/products/${category}/${slug}`;
    const images = buildGallery(slugDir, urlBase);
    if (images.length > 0) out[slug] = images;
  }
  return out;
}

const manifest = {
  ...processCategory('maquinas'),
  ...processCategory('accesorios'),
  ...processCategory('consumibles'),
};

// Stable key order
const sorted = Object.fromEntries(Object.keys(manifest).sort().map(k => [k, manifest[k]]));

fs.writeFileSync(OUT_JSON, JSON.stringify(sorted, null, 2) + '\n', 'utf8');
console.log(`✓ ${Object.keys(sorted).length} productos escritos en ${path.relative(ROOT, OUT_JSON)}`);
