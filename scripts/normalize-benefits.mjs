import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const MAQUINAS_DIR = path.join(ROOT, 'public', 'products', 'maquinas');

const IMAGE_EXTS = ['.png', '.jpg', '.jpeg', '.webp'];

function findFile(dir, base) {
  for (const ext of IMAGE_EXTS) {
    const f = base + ext;
    if (fs.existsSync(path.join(dir, f))) return f;
  }
  return null;
}

function listFiles(dir, regex) {
  return fs.readdirSync(dir)
    .filter(f => regex.test(f) && fs.statSync(path.join(dir, f)).isFile())
    .map(f => {
      const m = f.match(regex);
      return { file: f, num: parseInt(m[1], 10), ext: path.extname(f) };
    })
    .sort((a, b) => a.num - b.num);
}

const dryRun = process.argv.includes('--dry-run');
const folders = fs.readdirSync(MAQUINAS_DIR).filter(f => fs.statSync(path.join(MAQUINAS_DIR, f)).isDirectory());

const problems = [];
let totalRenames = 0;

for (const folder of folders) {
  const dir = path.join(MAQUINAS_DIR, folder);

  const extras = listFiles(dir, /^fotoExtra(\d+)\.(png|jpg|jpeg|webp)$/i);
  const extraQueue = [...extras]; // queue we pop from

  const renames = []; // {from, to}

  for (let n = 1; n <= 4; n++) {
    const existing = findFile(dir, `fotoB${n}`);
    if (existing) continue;
    const extra = extraQueue.shift();
    if (!extra) {
      problems.push(`${folder}: falta fotoB${n} y no hay extras disponibles`);
      continue;
    }
    renames.push({ from: extra.file, to: `fotoB${n}${extra.ext}` });
  }

  // Reindex remaining extras to consecutive 1..N
  extraQueue.forEach((extra, i) => {
    const newName = `fotoExtra${i + 1}${extra.ext}`;
    if (extra.file !== newName) renames.push({ from: extra.file, to: newName });
  });

  if (renames.length === 0) continue;

  // Apply: use 2-step rename with __tmp__ prefix to avoid collisions
  const tempPrefix = '__norm__';
  for (const { from } of renames) {
    const src = path.join(dir, from);
    const tmp = path.join(dir, tempPrefix + from);
    if (!dryRun) fs.renameSync(src, tmp);
  }
  for (const { from, to } of renames) {
    const tmp = path.join(dir, tempPrefix + from);
    const dst = path.join(dir, to);
    console.log(`  ${folder}: ${from} → ${to}`);
    if (!dryRun) fs.renameSync(tmp, dst);
    totalRenames++;
  }
}

console.log(`\n${dryRun ? '[dry-run] ' : '✓ '}${totalRenames} renombrados`);
if (problems.length) {
  console.log(`\n⚠ ${problems.length} máquinas con slots faltantes:`);
  problems.forEach(p => console.log(`  - ${p}`));
}
