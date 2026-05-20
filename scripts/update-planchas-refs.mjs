import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const MAQUINAS_DIR = path.join(ROOT, 'public', 'products', 'maquinas');
const PLANCHAS_TS = path.join(ROOT, 'data', 'products.ts');

const IMAGE_EXTS = ['.png', '.jpg', '.jpeg', '.webp'];

function findExt(dir, base) {
  for (const ext of IMAGE_EXTS) {
    if (fs.existsSync(path.join(dir, base + ext))) return ext;
  }
  return null;
}

function findFile(dir, base) {
  for (const ext of IMAGE_EXTS) {
    const f = base + ext;
    if (fs.existsSync(path.join(dir, f))) return f;
  }
  return null;
}

function ensureFotoExp(slug, originalRef) {
  // originalRef: "/products/maquinas/{slug}/XX.png" — points to a file that may live in galeria/
  // Goal: ensure fotoExp.{ext} exists at root and return its filename.
  const dir = path.join(MAQUINAS_DIR, slug);
  const existing = findFile(dir, 'fotoExp');
  if (existing) return existing;

  // Resolve where the original file actually lives now
  if (!originalRef) return null;
  const filename = path.basename(originalRef);
  const ext = path.extname(filename);
  const candidates = [
    path.join(dir, filename),
    path.join(dir, 'galeria', filename),
    // try lower ext
    path.join(dir, path.basename(filename, ext) + ext.toLowerCase()),
    path.join(dir, 'galeria', path.basename(filename, ext) + ext.toLowerCase()),
  ];
  const found = candidates.find(c => fs.existsSync(c));
  if (!found) return null;

  const targetExt = path.extname(found).toLowerCase();
  const target = path.join(dir, 'fotoExp' + targetExt);
  fs.copyFileSync(found, target);
  return 'fotoExp' + targetExt;
}

const text = fs.readFileSync(PLANCHAS_TS, 'utf8');
const startMarker = 'const rawPlanchasData';
const startIdx = text.indexOf(startMarker);
if (startIdx === -1) {
  console.error('No encontré const rawPlanchasData');
  process.exit(1);
}
const eqIdx = text.indexOf('=', startIdx);
const arrStart = text.indexOf('[', eqIdx);
// Find matching closing bracket
let depth = 0;
let arrEnd = -1;
let inStr = false;
let strCh = '';
let escape = false;
for (let i = arrStart; i < text.length; i++) {
  const c = text[i];
  if (escape) { escape = false; continue; }
  if (inStr) {
    if (c === '\\') escape = true;
    else if (c === strCh) inStr = false;
    continue;
  }
  if (c === '"' || c === "'") { inStr = true; strCh = c; continue; }
  if (c === '[') depth++;
  else if (c === ']') { depth--; if (depth === 0) { arrEnd = i; break; } }
}
if (arrEnd === -1) { console.error('No encontré cierre del array'); process.exit(1); }

const prefix = text.slice(0, arrStart);
const arrayText = text.slice(arrStart, arrEnd + 1);
const suffix = text.slice(arrEnd + 1);

// Remove trailing commas to parse
const cleaned = arrayText.replace(/,(\s*[\]\}])/g, '$1');
const data = JSON.parse(cleaned);

let updates = 0;
let fotoExpCopies = 0;

for (const product of data) {
  const slug = product.slug;
  if (!slug) continue;
  const dir = path.join(MAQUINAS_DIR, slug);
  if (!fs.existsSync(dir)) continue;

  // 1. image principal → fotoPrincipal.{ext}
  const principalExt = findExt(dir, 'fotoPrincipal');
  if (principalExt && product.image) {
    const newImage = `/products/maquinas/${slug}/fotoPrincipal${principalExt}`;
    if (product.image !== newImage) {
      product.image = newImage;
      updates++;
    }
  }

  // 2. Remove top-level "gallery" — enrichWithLocalImages reconstruye desde el manifest
  if (product.gallery) {
    delete product.gallery;
    updates++;
  }

  // 3. benefits[N].image → fotoB{N+1}.{ext}
  if (Array.isArray(product.benefits)) {
    product.benefits.forEach((b, i) => {
      if (typeof b !== 'object' || !b) return;
      const benFile = findFile(dir, `fotoB${i + 1}`);
      if (benFile) {
        const newRef = `/products/maquinas/${slug}/${benFile}`;
        if (b.image !== newRef) {
          b.image = newRef;
          updates++;
        }
      } else if (b.image && b.image.startsWith(`/products/maquinas/${slug}/`)) {
        // No fotoB{N+1} físico → eliminar la ref para que use galería de fallback
        delete b.image;
        updates++;
      }
    });
  }

  // 4. storySegments[N].image → fotoExp.{ext}
  if (Array.isArray(product.storySegments)) {
    const withImage = product.storySegments.filter(s => s && s.image);
    if (withImage.length === 1) {
      // Caso simple: una sola foto en Experiencia → fotoExp
      const seg = withImage[0];
      const newFile = ensureFotoExp(slug, seg.image);
      if (newFile) {
        const newRef = `/products/maquinas/${slug}/${newFile}`;
        if (seg.image !== newRef) {
          seg.image = newRef;
          updates++;
          fotoExpCopies++;
        }
      }
    } else if (withImage.length > 1) {
      // Múltiples → fotoExp1, fotoExp2, ...
      withImage.forEach((seg, idx) => {
        const baseName = `fotoExp${idx + 1}`;
        const existing = findFile(dir, baseName);
        if (existing) {
          seg.image = `/products/maquinas/${slug}/${existing}`;
          updates++;
          return;
        }
        // Copiar archivo origen a fotoExpN
        const filename = path.basename(seg.image);
        const candidates = [
          path.join(dir, filename),
          path.join(dir, 'galeria', filename),
        ];
        const found = candidates.find(c => fs.existsSync(c));
        if (found) {
          const ext = path.extname(found).toLowerCase();
          const target = path.join(dir, baseName + ext);
          fs.copyFileSync(found, target);
          seg.image = `/products/maquinas/${slug}/${baseName}${ext}`;
          updates++;
          fotoExpCopies++;
        }
      });
    }
  }
}

// Reescribir el archivo con el nuevo array
const newArrayText = JSON.stringify(data, null, 2);
fs.writeFileSync(PLANCHAS_TS, prefix + newArrayText + suffix, 'utf8');

console.log(`✓ ${updates} refs actualizadas`);
console.log(`✓ ${fotoExpCopies} fotoExp creadas`);
