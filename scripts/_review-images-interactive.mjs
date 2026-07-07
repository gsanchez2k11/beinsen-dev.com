// Genera scripts/_review-images-interactive.html: tablero con TODAS las
// fotos de cada plancha en thumbnails grandes + checkbox "borrar" por foto.
//
// Uso:
//   1) node scripts/_review-images-interactive.mjs
//   2) Doble click en scripts/_review-images-interactive.html
//   3) Marca las fotos a borrar; el progreso se guarda en localStorage.
//   4) Pulsa "Exportar JSON" → descarga delete-list.json a Downloads.
//   5) Pasame el JSON y yo aplico los borrados de golpe.

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const MAQUINAS = path.join(ROOT, "public/products/maquinas");
const OUT_HTML = path.join(ROOT, "scripts/_review-images-interactive.html");

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);
const isImage = (f) => IMAGE_EXTS.has(path.extname(f).toLowerCase());

const slugs = fs.readdirSync(MAQUINAS).filter((d) => fs.statSync(path.join(MAQUINAS, d)).isDirectory()).sort();

const planchas = slugs.map((slug) => {
    const slugDir = path.join(MAQUINAS, slug);
    const files = fs.readdirSync(slugDir).filter(isImage).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    return {
        slug,
        files: files.map((name) => ({
            name,
            sizeKB: Math.round(fs.statSync(path.join(slugDir, name)).size / 1024),
            relUrl: `../public/products/maquinas/${slug}/${name}`,
        })),
    };
});

const totalFotos = planchas.reduce((s, p) => s + p.files.length, 0);

const html = `<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8"><title>Review imagenes - Beinsen</title>
<style>
  :root { --orange: #FF6600; --red: #e53935; }
  * { box-sizing: border-box; }
  body { font-family: system-ui, sans-serif; max-width: 1600px; margin: 0 auto; padding: 0 24px 80px; background: #fafafa; color: #222; }
  header { position: sticky; top: 0; background: #fafafa; padding: 16px 0; border-bottom: 2px solid #ddd; z-index: 100; }
  h1 { margin: 0 0 6px; font-size: 22px; }
  .meta { color: #666; font-size: 14px; }
  .actions { margin-top: 12px; display: flex; gap: 8px; flex-wrap: wrap; }
  .actions button { padding: 8px 14px; border: 1px solid #ccc; background: white; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: bold; }
  .actions button.primary { background: var(--orange); color: white; border-color: var(--orange); }
  .actions button.danger { background: var(--red); color: white; border-color: var(--red); }
  .actions button:hover { filter: brightness(0.95); }
  .summary { background: #fff3e0; border-left: 4px solid var(--orange); padding: 10px 14px; margin-top: 12px; border-radius: 4px; font-size: 14px; }
  .summary strong { color: var(--red); }
  details.help { margin-top: 12px; font-size: 13px; }
  details.help summary { cursor: pointer; color: #555; }
  details.help ul { margin: 6px 0 0; padding-left: 20px; }
  .plancha { background: white; border: 1px solid #ddd; border-radius: 12px; padding: 18px; margin-top: 18px; }
  .plancha h2 { margin: 0 0 14px; font-size: 17px; font-family: 'Consolas', monospace; display: flex; justify-content: space-between; align-items: center; }
  .plancha h2 .count { font-size: 12px; color: #888; font-family: system-ui; font-weight: normal; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; }
  .img-card { border: 3px solid #e5e5e5; border-radius: 10px; padding: 10px; background: #fff; text-align: center; cursor: pointer; transition: all 0.15s; user-select: none; }
  .img-card:hover { border-color: #FF9966; }
  .img-card.delete { border-color: var(--red); background: #ffebee; opacity: 0.75; }
  .img-card.delete img { filter: grayscale(60%); }
  .img-card img { width: 100%; aspect-ratio: 1; object-fit: contain; background: #f5f5f5; border-radius: 6px; }
  .img-card .name { font-family: 'Consolas', monospace; font-size: 12px; margin-top: 8px; word-break: break-all; font-weight: bold; }
  .img-card .size { font-size: 10px; color: #888; margin-top: 2px; }
  .img-card .badge { display: inline-block; padding: 2px 8px; border-radius: 3px; font-size: 10px; font-weight: bold; margin-top: 4px; background: var(--red); color: white; }
  .img-card:not(.delete) .badge { display: none; }
</style></head>
<body>
<header>
  <h1>Review de imagenes - Beinsen</h1>
  <div class="meta">${planchas.length} planchas - <strong id="totalFotos">${totalFotos}</strong> fotos totales - <strong style="color: var(--red);" id="totalBorrar">0</strong> marcadas para borrar</div>
  <div class="actions">
    <button class="primary" onclick="exportJSON()">Exportar JSON (descargar)</button>
    <button onclick="clearAll()">Limpiar seleccion</button>
    <button onclick="document.querySelectorAll('.plancha').forEach(p => p.open = true)">Expandir todo</button>
  </div>
  <div class="summary">
    Click sobre una foto para marcarla como "borrar". Click otra vez para deseleccionar. El progreso se guarda automaticamente. Cuando termines, pulsa <strong>Exportar JSON</strong> y mandaselo a Claude.
  </div>
  <details class="help">
    <summary>Criterio sugerido (puedes ajustar a ojo)</summary>
    <ul>
      <li><strong>Borrar:</strong> vista lateral pura, vista trasera/de espaldas, fondo sucio (taller/oficina), desenfocada/movida.</li>
      <li><strong>Mantener:</strong> 3/4 frontal, frontal, cenital, detalle con fondo limpio (controlador, resistencias, etc.).</li>
      <li>Si una plancha queda con menos de 3 fotos, Claude te avisa y mantiene todas.</li>
    </ul>
  </details>
</header>
${planchas.map((p) => `
<div class="plancha">
  <h2>${p.slug} <span class="count">${p.files.length} fotos</span></h2>
  <div class="grid">
    ${p.files.map((f) => {
        const id = `${p.slug}/${f.name}`;
        return `<div class="img-card" data-id="${id}" onclick="toggle(this)">
          <img src="${f.relUrl}" alt="${f.name}" loading="lazy">
          <div class="name">${f.name}</div>
          <div class="size">${f.sizeKB} KB</div>
          <span class="badge">BORRAR</span>
        </div>`;
    }).join("")}
  </div>
</div>`).join("")}

<script>
const STORAGE_KEY = "beinsen_review_delete";
const toDelete = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));

function refresh() {
  document.querySelectorAll(".img-card").forEach(c => {
    c.classList.toggle("delete", toDelete.has(c.dataset.id));
  });
  document.getElementById("totalBorrar").textContent = toDelete.size;
}

function toggle(card) {
  const id = card.dataset.id;
  if (toDelete.has(id)) toDelete.delete(id);
  else toDelete.add(id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...toDelete]));
  refresh();
}

function clearAll() {
  if (!confirm("Limpiar TODAS las marcas?")) return;
  toDelete.clear();
  localStorage.setItem(STORAGE_KEY, "[]");
  refresh();
}

function exportJSON() {
  const payload = { generated: new Date().toISOString(), delete: [...toDelete].sort() };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "delete-list.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  alert(toDelete.size + " fotos exportadas a delete-list.json. Pasale ese archivo a Claude.");
}

refresh();
</script>
</body></html>`;

fs.writeFileSync(OUT_HTML, html);
console.log(`Generado: ${path.relative(ROOT, OUT_HTML)}`);
console.log(`Planchas: ${planchas.length}, fotos totales: ${totalFotos}`);
console.log(`\nAbrelo con doble click, marca, exporta y pasame el JSON.`);
