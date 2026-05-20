import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const MAQUINAS_DIR = path.join(ROOT, 'public', 'products', 'maquinas');

const renames = [];

function normalizeExt(ext) {
  const e = ext.toLowerCase();
  return e === '.jpeg' ? '.jpg' : e;
}

function planRenameFile(dir, file, newBase) {
  const ext = normalizeExt(path.extname(file));
  const oldPath = path.join(dir, file);
  const newName = `${newBase}${ext}`;
  const newPath = path.join(dir, newName);
  if (oldPath === newPath) return null;
  return { oldPath, newPath, file, newName };
}

function processFolder(folder) {
  const dir = path.join(MAQUINAS_DIR, folder);
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === 'galeria') {
        const galDir = path.join(dir, 'galeria');
        const galFiles = fs.readdirSync(galDir);
        for (const gf of galFiles) {
          const ext = path.extname(gf);
          const lowerExt = normalizeExt(ext);
          if (ext !== lowerExt) {
            const base = path.basename(gf, ext);
            const oldPath = path.join(galDir, gf);
            const newPath = path.join(galDir, base + lowerExt);
            if (oldPath !== newPath) {
              renames.push({ oldPath, newPath, file: gf, newName: base + lowerExt });
            }
          }
        }
      }
      continue;
    }

    const file = entry.name;
    const base = path.basename(file, path.extname(file));

    // fotoCard → fotoPrincipal
    if (/^fotoCard$/i.test(base)) {
      const r = planRenameFile(dir, file, 'fotoPrincipal');
      if (r) renames.push(r);
      continue;
    }

    // ben{N} → fotoB{N}
    const benMatch = base.match(/^ben(\d+)$/i);
    if (benMatch) {
      const r = planRenameFile(dir, file, `fotoB${benMatch[1]}`);
      if (r) renames.push(r);
      continue;
    }

    // extra{N} → fotoExtra{N}
    const extraMatch = base.match(/^extra(\d+)$/i);
    if (extraMatch) {
      const r = planRenameFile(dir, file, `fotoExtra${extraMatch[1]}`);
      if (r) renames.push(r);
      continue;
    }

    // Normalize extension only (e.g. .JPG → .jpg) for any other file already with desired prefix
    const ext = path.extname(file);
    const lowerExt = normalizeExt(ext);
    if (ext !== lowerExt) {
      const r = planRenameFile(dir, file, base);
      if (r) renames.push(r);
    }
  }
}

const folders = fs.readdirSync(MAQUINAS_DIR).filter(f => {
  return fs.statSync(path.join(MAQUINAS_DIR, f)).isDirectory();
});

for (const folder of folders) {
  processFolder(folder);
}

const dryRun = process.argv.includes('--dry-run');

console.log(`Plan: ${renames.length} archivos a renombrar`);
for (const r of renames) {
  console.log(`  ${path.relative(ROOT, r.oldPath)}  →  ${r.newName}`);
}

if (!dryRun) {
  let done = 0;
  for (const r of renames) {
    if (fs.existsSync(r.newPath) && r.oldPath.toLowerCase() !== r.newPath.toLowerCase()) {
      console.warn(`  ⚠ Saltado (destino ya existe): ${r.newPath}`);
      continue;
    }
    // Para case-only renames en Windows, usar paso intermedio
    if (r.oldPath.toLowerCase() === r.newPath.toLowerCase()) {
      const tmp = r.oldPath + '.__tmp__';
      fs.renameSync(r.oldPath, tmp);
      fs.renameSync(tmp, r.newPath);
    } else {
      fs.renameSync(r.oldPath, r.newPath);
    }
    done++;
  }
  console.log(`\n✓ ${done} archivos renombrados`);
} else {
  console.log('\n(dry-run: no se hizo ningún cambio)');
}
