// Auditoria visual de imagenes por plancha:
//  - Detecta duplicados por hash MD5 (contenido identico aunque cambie el nombre).
//  - Detecta "huerfanos": archivos en disco que el manifest no incluye.
//  - Genera scripts/_audit-product-images.html con thumbnails + marcas en rojo.
//
// Para quitar fotos despues de revisar:
//   1) Borra (o renombra a _<algo>) el archivo en public/products/maquinas/<slug>/
//   2) node scripts/generate-product-images.mjs   (regenera el manifest)
//   3) git add/commit/push

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = path.resolve(".");
const MAQUINAS = path.join(ROOT, "public/products/maquinas");
const MANIFEST = JSON.parse(fs.readFileSync(path.join(ROOT, "data/product-images.json"), "utf8"));
const OUT_HTML = path.join(ROOT, "scripts/_audit-product-images.html");

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);
function isImage(f) { return IMAGE_EXTS.has(path.extname(f).toLowerCase()); }

const slugs = fs.readdirSync(MAQUINAS).filter((d) => fs.statSync(path.join(MAQUINAS, d)).isDirectory()).sort();

const planchas = [];
let totalDups = 0;
let totalHuerfanos = 0;

for (const slug of slugs) {
    const slugDir = path.join(MAQUINAS, slug);
    const onDisk = fs.readdirSync(slugDir).filter(isImage);
    const manifestPaths = MANIFEST[slug] || [];
    const manifestBasenames = new Set(manifestPaths.map((p) => path.basename(p)));

    // Hash de cada archivo en disco
    const files = onDisk.map((name) => {
        const full = path.join(slugDir, name);
        const buf = fs.readFileSync(full);
        const hash = crypto.createHash("md5").update(buf).digest("hex");
        const sizeKB = Math.round(buf.length / 1024);
        const inManifest = manifestBasenames.has(name);
        return { name, hash, sizeKB, inManifest, relUrl: `../public/products/maquinas/${slug}/${name}` };
    });

    // Agrupar por hash para encontrar duplicados
    const byHash = new Map();
    for (const f of files) {
        if (!byHash.has(f.hash)) byHash.set(f.hash, []);
        byHash.get(f.hash).push(f);
    }
    const dupGroups = [...byHash.values()].filter((g) => g.length > 1);
    const dupNames = new Set(dupGroups.flat().map((f) => f.name));

    // Marcar duplicados y huerfanos
    for (const f of files) {
        f.isDup = dupNames.has(f.name);
    }
    const huerfanos = files.filter((f) => !f.inManifest);

    totalDups += dupGroups.reduce((s, g) => s + (g.length - 1), 0);
    totalHuerfanos += huerfanos.length;

    planchas.push({ slug, files, dupGroups, huerfanos });
}

// ===== Reporte consola =====
console.log(`\nPlanchas auditadas: ${planchas.length}`);
console.log(`Duplicados exactos (mismo MD5): ${totalDups}`);
console.log(`Huerfanos (en disco pero no en manifest): ${totalHuerfanos}\n`);

for (const p of planchas) {
    if (p.dupGroups.length === 0 && p.huerfanos.length === 0) continue;
    console.log(`--- ${p.slug} ---`);
    for (const g of p.dupGroups) {
        console.log(`  [DUP] mismo contenido:`);
        for (const f of g) console.log(`    - ${f.name} (${f.sizeKB} KB${f.inManifest ? "" : ", HUERFANO"})`);
    }
    for (const h of p.huerfanos) {
        if (!h.isDup) console.log(`  [HUERFANO] ${h.name} (${h.sizeKB} KB)`);
    }
}

// ===== Reporte HTML =====
const html = `<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8"><title>Auditoria imagenes - Beinsen</title>
<style>
  body { font-family: system-ui, sans-serif; max-width: 1400px; margin: 0 auto; padding: 20px; background: #fafafa; }
  h1 { margin: 0 0 4px; }
  .meta { color: #666; font-size: 14px; margin-bottom: 24px; }
  .plancha { background: white; border: 1px solid #ddd; border-radius: 12px; padding: 16px; margin-bottom: 18px; }
  .plancha h2 { margin: 0 0 12px; font-size: 16px; font-family: 'Consolas', monospace; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px; }
  .img-card { border: 2px solid #e5e5e5; border-radius: 8px; padding: 8px; background: #fff; text-align: center; }
  .img-card.dup { border-color: #e53935; background: #ffebee; }
  .img-card.huerfano { border-color: #ff9800; background: #fff3e0; }
  .img-card img { width: 100%; aspect-ratio: 1; object-fit: contain; background: #f5f5f5; border-radius: 4px; }
  .img-card .name { font-family: 'Consolas', monospace; font-size: 11px; margin-top: 6px; word-break: break-all; }
  .img-card .size { font-size: 10px; color: #888; }
  .tag { display: inline-block; padding: 1px 6px; border-radius: 3px; font-size: 9px; font-weight: bold; margin-top: 3px; }
  .tag.dup { background: #e53935; color: white; }
  .tag.huerfano { background: #ff9800; color: white; }
  .clean { color: #4caf50; font-size: 13px; }
  .summary { background: white; border: 1px solid #ddd; border-radius: 12px; padding: 16px; margin-bottom: 18px; }
  .filter { display: flex; gap: 8px; margin-bottom: 16px; }
  .filter button { padding: 6px 12px; border: 1px solid #ccc; background: white; border-radius: 6px; cursor: pointer; font-size: 13px; }
  .filter button.active { background: #FF6600; color: white; border-color: #FF6600; }
</style></head>
<body>
<h1>Auditoria de imagenes - Beinsen</h1>
<div class="meta">${planchas.length} planchas - ${totalDups} duplicados - ${totalHuerfanos} huerfanos</div>
<div class="filter">
  <button class="active" onclick="filt('all')">Todas</button>
  <button onclick="filt('dup')">Solo con duplicados</button>
  <button onclick="filt('huerfano')">Solo con huerfanos</button>
  <button onclick="filt('issue')">Con cualquier problema</button>
</div>
${planchas.map((p) => {
    const hasDup = p.dupGroups.length > 0;
    const hasHuerfano = p.huerfanos.some((h) => !h.isDup);
    const status = hasDup ? "dup" : hasHuerfano ? "huerfano" : "clean";
    return `<div class="plancha" data-status="${status}">
      <h2>${p.slug} ${hasDup || hasHuerfano ? "" : '<span class="clean">OK</span>'}</h2>
      <div class="grid">
        ${p.files.map((f) => `
          <div class="img-card ${f.isDup ? "dup" : (!f.inManifest ? "huerfano" : "")}">
            <img src="${f.relUrl}" alt="${f.name}">
            <div class="name">${f.name}</div>
            <div class="size">${f.sizeKB} KB</div>
            ${f.isDup ? '<span class="tag dup">DUPLICADO</span>' : ""}
            ${!f.inManifest ? '<span class="tag huerfano">HUERFANO</span>' : ""}
          </div>`).join("")}
      </div>
    </div>`;
}).join("")}
<script>
function filt(mode) {
  document.querySelectorAll('.filter button').forEach(b => b.classList.toggle('active', b.textContent.includes(mode === 'all' ? 'Todas' : mode === 'dup' ? 'duplicados' : mode === 'huerfano' ? 'huerfanos' : 'problema')));
  document.querySelectorAll('.plancha').forEach(p => {
    const s = p.dataset.status;
    const show = mode === 'all' || (mode === 'dup' && s === 'dup') || (mode === 'huerfano' && s === 'huerfano') || (mode === 'issue' && s !== 'clean');
    p.style.display = show ? '' : 'none';
  });
}
</script>
</body></html>`;

fs.writeFileSync(OUT_HTML, html);
console.log(`\nReporte HTML: ${path.relative(ROOT, OUT_HTML)}`);
console.log(`Abrelo con doble click para ver thumbnails y marcar visualmente.`);
