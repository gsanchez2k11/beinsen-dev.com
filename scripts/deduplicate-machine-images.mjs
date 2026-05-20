import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const MAQUINAS_DIR = path.join(ROOT, 'public', 'products', 'maquinas');

const IMAGE_EXTS = ['.png', '.jpg', '.jpeg', '.webp'];

function isImage(f) {
  return IMAGE_EXTS.includes(path.extname(f).toLowerCase());
}

function hashFile(p) {
  const buf = fs.readFileSync(p);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

const dryRun = process.argv.includes('--dry-run');

const folders = fs.readdirSync(MAQUINAS_DIR).filter(f => fs.statSync(path.join(MAQUINAS_DIR, f)).isDirectory());

let totalDeleted = 0;
let totalBytes = 0;

for (const folder of folders) {
  const dir = path.join(MAQUINAS_DIR, folder);
  const galDir = path.join(dir, 'galeria');
  if (!fs.existsSync(galDir)) continue;

  const rootFiles = fs.readdirSync(dir).filter(f => isImage(f) && fs.statSync(path.join(dir, f)).isFile());
  const galFiles = fs.readdirSync(galDir).filter(isImage);

  // Hash root files first
  const rootHashes = new Map();  // hash → root filename
  for (const f of rootFiles) {
    const p = path.join(dir, f);
    rootHashes.set(hashFile(p), f);
  }

  // For each galeria file, if hash matches a root file → delete from galeria
  for (const gf of galFiles) {
    const p = path.join(galDir, gf);
    const h = hashFile(p);
    if (rootHashes.has(h)) {
      const rootMatch = rootHashes.get(h);
      const size = fs.statSync(p).size;
      console.log(`  ${folder}: galeria/${gf} ≡ ${rootMatch} (${size} bytes)`);
      if (!dryRun) fs.unlinkSync(p);
      totalDeleted++;
      totalBytes += size;
    }
  }
}

const mb = (totalBytes / 1024 / 1024).toFixed(2);
console.log(`\n${dryRun ? '[dry-run] ' : '✓ '}${totalDeleted} duplicados ${dryRun ? 'detectados' : 'eliminados'} de galeria/ (${mb} MB)`);
