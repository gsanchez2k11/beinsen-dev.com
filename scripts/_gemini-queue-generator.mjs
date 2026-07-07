// Genera scripts/_gemini-queue.html: tablero con las 33 planchas listo
// para procesarlas a mano en Gemini app sin romperse la cabeza.
//
// Abre el HTML resultante con doble click (file://...) — funciona en local
// sin servidor.

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const MAQUINAS = path.join(ROOT, "public/products/maquinas");
const PROMPT_FILE = path.join(ROOT, "scripts/style-prompt.txt");
const PLANCHAS_TS = path.join(ROOT, "data/raw/planchas.ts");
const OUT_HTML = path.join(ROOT, "scripts/_gemini-queue.html");

if (!fs.existsSync(PROMPT_FILE)) {
    console.error("Falta scripts/style-prompt.txt — no puedo seguir.");
    process.exit(1);
}
const PROMPT_TEMPLATE = fs.readFileSync(PROMPT_FILE, "utf8").trim();

function loadNames() {
    const txt = fs.readFileSync(PLANCHAS_TS, "utf8");
    const out = {};
    const re = /"slug":\s*"([^"]+)"[\s\S]*?"name":\s*\{[\s\S]*?"es":\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(txt)) !== null) out[m[1]] = m[2];
    return out;
}
const names = loadNames();

const slugs = fs
    .readdirSync(MAQUINAS)
    .filter((d) => {
        const p = path.join(MAQUINAS, d);
        return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, "fotoPrincipal.png"));
    })
    .sort();

const items = slugs.map((slug) => {
    const name = names[slug] || slug;
    const prompt = PROMPT_TEMPLATE.replace(/\[PRODUCTO\]/g, name);
    // path relativo desde scripts/_gemini-queue.html a la imagen
    const imageRel = `../public/products/maquinas/${slug}/fotoPrincipal.png`;
    const filename = `${slug}.png`;
    return { slug, name, prompt, imageRel, filename };
});

const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Gemini queue — Beinsen (${items.length} planchas)</title>
<style>
  :root { --orange: #FF6600; }
  * { box-sizing: border-box; }
  body { font-family: system-ui, sans-serif; max-width: 1500px; margin: 0 auto; padding: 0 24px 80px; background: #fafafa; color: #222; }
  header { position: sticky; top: 0; background: #fafafa; padding: 16px 0; border-bottom: 1px solid #e5e5e5; z-index: 10; }
  h1 { margin: 0; font-size: 22px; }
  .progress { font-size: 14px; color: #555; margin-top: 4px; }
  .bar { height: 6px; background: #eee; border-radius: 3px; margin-top: 6px; overflow: hidden; }
  .bar > div { height: 100%; background: var(--orange); transition: width 0.3s; }
  details { margin-top: 12px; font-size: 13px; }
  details ol { padding-left: 20px; }
  code { background: #fff8e1; padding: 2px 5px; border-radius: 3px; font-size: 12px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 20px; margin-top: 24px; }
  .card { background: white; border: 1px solid #e5e5e5; border-radius: 12px; padding: 16px; transition: opacity 0.2s; }
  .card.done { opacity: 0.35; background: #f0f8f0; }
  .card img { width: 100%; aspect-ratio: 1; object-fit: contain; background: #f5f5f5; border-radius: 8px; cursor: grab; }
  .card img:active { cursor: grabbing; }
  .card h2 { font-size: 15px; margin: 12px 0 2px; line-height: 1.3; }
  .slug { font-family: 'Consolas', monospace; font-size: 10px; color: #999; word-break: break-all; }
  .filename { font-family: 'Consolas', monospace; font-size: 11px; background: #fff8e1; padding: 5px 8px; border-radius: 4px; margin: 8px 0; }
  textarea { width: 100%; min-height: 70px; font-size: 11px; padding: 6px; border: 1px solid #ddd; border-radius: 4px; resize: vertical; font-family: inherit; }
  .row { display: flex; gap: 8px; margin-top: 8px; }
  button { padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer; font-size: 13px; flex: 1; }
  button.primary { background: var(--orange); color: white; border-color: var(--orange); }
  button.success { background: #4caf50; color: white; border-color: #4caf50; }
  button:hover { filter: brightness(0.95); }
  button.copied { background: #4caf50 !important; color: white !important; }
  .toggle-prompt { font-size: 12px; color: #777; background: none; border: none; cursor: pointer; padding: 4px 0; }
  .toggle-prompt:hover { color: var(--orange); }
</style>
</head>
<body>
<header>
  <h1>Imágenes de planchas — cola para Gemini</h1>
  <div class="progress"><span id="done">0</span> / ${items.length} hechas · <button onclick="resetAll()" style="flex: 0; padding: 2px 8px; font-size: 12px;">Reiniciar</button></div>
  <div class="bar"><div id="bar"></div></div>
  <details>
    <summary>Cómo usar (instrucciones)</summary>
    <ol>
      <li>Abre Gemini en otra pestaña: <a href="https://gemini.google.com/u/3/app" target="_blank">gemini.google.com</a></li>
      <li>Crea la carpeta de descarga: <code>C:\\Users\\futur\\Downloads\\gemini-output\\</code></li>
      <li>Por cada tarjeta:
        <ol>
          <li>En Gemini: <strong>Nueva conversación</strong></li>
          <li>Arrastra la imagen de la tarjeta a Gemini (o usa el botón "+ Subir imagen" y selecciónala desde <code>public/products/maquinas/&lt;slug&gt;/fotoPrincipal.png</code>)</li>
          <li>Pulsa <strong>Copiar prompt</strong> aquí, pega en Gemini y envía</li>
          <li>Espera ~20s. Click derecho sobre la imagen generada → <strong>Guardar como…</strong> con el nombre <strong>exacto</strong> que indica la tarjeta (<code>&lt;slug&gt;.png</code>) en <code>gemini-output\\</code></li>
          <li>Pulsa <strong>Marcar como hecha</strong></li>
        </ol>
      </li>
      <li>Al terminar, en terminal: <code>node scripts/style-images-collect.mjs</code></li>
    </ol>
  </details>
</header>
<div class="grid" id="grid"></div>
<script>
const data = ${JSON.stringify(items, null, 2)};
const DONE_KEY = "beinsen_gemini_queue_done";
const done = new Set(JSON.parse(localStorage.getItem(DONE_KEY) || "[]"));

function refreshCount() {
  document.getElementById("done").textContent = done.size;
  document.getElementById("bar").style.width = (done.size / data.length * 100) + "%";
}

function renderCard(p) {
  const card = document.createElement("div");
  card.className = "card" + (done.has(p.slug) ? " done" : "");
  card.id = "card-" + p.slug;
  card.innerHTML = \`
    <img src="\${p.imageRel}" draggable="true" alt="\${p.name}">
    <h2>\${p.name}</h2>
    <div class="slug">\${p.slug}</div>
    <div class="filename">Guardar como: <strong>\${p.filename}</strong></div>
    <button class="toggle-prompt" onclick="togglePrompt('\${p.slug}')">Mostrar prompt ▾</button>
    <textarea id="prompt-\${p.slug}" readonly style="display:none">\${p.prompt}</textarea>
    <div class="row">
      <button class="primary" onclick="copyPrompt('\${p.slug}', this)">Copiar prompt</button>
      <button class="success" onclick="markDone('\${p.slug}')">Marcar como hecha</button>
    </div>
  \`;
  return card;
}

function copyPrompt(slug, btn) {
  const p = data.find(x => x.slug === slug);
  navigator.clipboard.writeText(p.prompt).then(() => {
    const orig = btn.textContent;
    btn.textContent = "✓ Copiado al portapapeles";
    btn.classList.add("copied");
    setTimeout(() => { btn.textContent = orig; btn.classList.remove("copied"); }, 2000);
  });
}

function togglePrompt(slug) {
  const el = document.getElementById("prompt-" + slug);
  el.style.display = el.style.display === "none" ? "block" : "none";
}

function markDone(slug) {
  if (done.has(slug)) done.delete(slug);
  else done.add(slug);
  localStorage.setItem(DONE_KEY, JSON.stringify([...done]));
  document.getElementById("card-" + slug).classList.toggle("done");
  refreshCount();
}

function resetAll() {
  if (!confirm("¿Reiniciar el progreso? Perderás el track de qué tienes hecho.")) return;
  done.clear();
  localStorage.setItem(DONE_KEY, "[]");
  document.querySelectorAll(".card").forEach(c => c.classList.remove("done"));
  refreshCount();
}

const grid = document.getElementById("grid");
data.forEach(p => grid.appendChild(renderCard(p)));
refreshCount();
</script>
</body>
</html>
`;

fs.writeFileSync(OUT_HTML, html);
console.log(`Generado: ${path.relative(ROOT, OUT_HTML)}`);
console.log(`Planchas en la cola: ${items.length}`);
console.log(`\nÁbrelo con doble click o desde el explorador de archivos.`);
