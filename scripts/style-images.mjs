// Procesa fotoPrincipal.png de cada plancha con Gemini 2.5 Flash Image
// (Nano Banana), aplicando el prompt de scripts/style-prompt.txt.
//
// Uso:
//   node scripts/style-images.mjs --only=<slug>        → procesa solo ese slug (test)
//   node scripts/style-images.mjs                      → procesa todos los pendientes
//   node scripts/style-images.mjs --force              → reprocesa aunque ya este styled
//
// Salida: cada plancha tiene su fotoPrincipal-styled.png junto al original.
// Manifiesto en scripts/_style-manifest.json (que vamos a sobreescribir cada run).
//
// Variables de entorno:
//   GOOGLE_AI_API_KEY  → key de https://aistudio.google.com/apikey

import fs from "node:fs";
import path from "node:path";

// ---- carga de .env.local ---------------------------------------------------

function loadEnv() {
    const file = ".env.local";
    if (!fs.existsSync(file)) return;
    const raw = fs.readFileSync(file, "utf8");
    for (const line of raw.split(/\r?\n/)) {
        const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.+?)\s*$/);
        if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
    }
}
loadEnv();

const API_KEY = process.env.GOOGLE_AI_API_KEY;
if (!API_KEY) {
    console.error("Falta GOOGLE_AI_API_KEY en .env.local");
    process.exit(1);
}

// ---- args ------------------------------------------------------------------

const args = process.argv.slice(2);
const onlySlug = (args.find((a) => a.startsWith("--only=")) || "").split("=")[1] || null;
const force = args.includes("--force");

// ---- prompt + nombres ------------------------------------------------------

const PROMPT_TEMPLATE = fs.readFileSync("scripts/style-prompt.txt", "utf8").trim();
const MAQUINAS_DIR = "public/products/maquinas";
const MANIFEST = "scripts/_style-manifest.json";

// Nombres legibles para sustituir [PRODUCTO]. Cargamos planchas.ts y extraemos
// pares slug → name.es con regex (no necesitamos ejecutar el modulo).
function loadNames() {
    const txt = fs.readFileSync("data/raw/planchas.ts", "utf8");
    const out = {};
    const re = /"slug":\s*"([^"]+)"[\s\S]*?"name":\s*\{[\s\S]*?"es":\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(txt)) !== null) out[m[1]] = m[2];
    return out;
}
const names = loadNames();

// ---- inventario de planchas con fotoPrincipal.png --------------------------

const slugs = fs
    .readdirSync(MAQUINAS_DIR)
    .filter((d) => {
        const p = path.join(MAQUINAS_DIR, d);
        return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, "fotoPrincipal.png"));
    })
    .filter((d) => (onlySlug ? d === onlySlug : true))
    .sort();

if (slugs.length === 0) {
    console.error("No hay planchas para procesar" + (onlySlug ? ` (slug=${onlySlug})` : ""));
    process.exit(1);
}

console.log(`A procesar: ${slugs.length} plancha${slugs.length === 1 ? "" : "s"}`);

// ---- llamada a Gemini ------------------------------------------------------

const MODEL = "gemini-2.5-flash-image";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

async function callGemini(prompt, pngBuffer, attempt = 1) {
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt },
                    {
                        inline_data: {
                            mime_type: "image/png",
                            data: pngBuffer.toString("base64"),
                        },
                    },
                ],
            },
        ],
        generationConfig: {
            responseModalities: ["IMAGE"],
        },
    };

    const res = await fetch(`${URL}?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    if (res.status === 429 || res.status === 503) {
        if (attempt >= 4) throw new Error(`Rate limit / overloaded tras ${attempt} reintentos`);
        const delay = 15000 * attempt;
        console.log(`  ${res.status} → espero ${delay / 1000}s y reintento (intento ${attempt + 1})`);
        await new Promise((r) => setTimeout(r, delay));
        return callGemini(prompt, pngBuffer, attempt + 1);
    }
    if (!res.ok) {
        const txt = await res.text();
        throw new Error(`HTTP ${res.status}: ${txt.slice(0, 300)}`);
    }

    const json = await res.json();
    const parts = json?.candidates?.[0]?.content?.parts || [];
    const imgPart = parts.find((p) => p.inline_data || p.inlineData);
    if (!imgPart) {
        throw new Error("Respuesta sin imagen: " + JSON.stringify(json).slice(0, 300));
    }
    const dataB64 = (imgPart.inline_data || imgPart.inlineData).data;
    return Buffer.from(dataB64, "base64");
}

// ---- procesado -------------------------------------------------------------

const manifest = {
    startedAt: new Date().toISOString(),
    model: MODEL,
    promptSha: bufHash(Buffer.from(PROMPT_TEMPLATE)),
    items: [],
};

function bufHash(buf) {
    let h = 5381;
    for (let i = 0; i < buf.length; i++) h = ((h << 5) + h + buf[i]) >>> 0;
    return h.toString(16);
}

let okCount = 0;
let skipCount = 0;
let failCount = 0;

for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const dir = path.join(MAQUINAS_DIR, slug);
    const inFile = path.join(dir, "fotoPrincipal.png");
    const outFile = path.join(dir, "fotoPrincipal-styled.png");

    if (fs.existsSync(outFile) && !force) {
        console.log(`[${i + 1}/${slugs.length}] ${slug}  →  ya existe styled, salto`);
        manifest.items.push({ slug, status: "skipped" });
        skipCount++;
        continue;
    }

    const name = names[slug] || slug;
    const prompt = PROMPT_TEMPLATE.replace(/\[PRODUCTO\]/g, name);
    const inBuf = fs.readFileSync(inFile);

    console.log(`[${i + 1}/${slugs.length}] ${slug}  →  enviando (${(inBuf.length / 1024).toFixed(0)} KB)`);
    const t0 = Date.now();
    try {
        const outBuf = await callGemini(prompt, inBuf);
        fs.writeFileSync(outFile, outBuf);
        const ms = Date.now() - t0;
        console.log(`     ✓ ${(outBuf.length / 1024).toFixed(0)} KB en ${(ms / 1000).toFixed(1)}s`);
        manifest.items.push({ slug, status: "ok", inBytes: inBuf.length, outBytes: outBuf.length, ms });
        okCount++;
    } catch (e) {
        console.log(`     ✗ ${e.message}`);
        manifest.items.push({ slug, status: "fail", error: e.message });
        failCount++;
    }

    // Pequeno delay para respetar rate-limit (~10 req/min en free tier).
    if (i < slugs.length - 1) await new Promise((r) => setTimeout(r, 7000));
}

manifest.finishedAt = new Date().toISOString();
manifest.summary = { ok: okCount, skipped: skipCount, failed: failCount };
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));

console.log(`\nResumen: ${okCount} OK · ${skipCount} saltadas · ${failCount} fallidas`);
console.log(`Manifiesto: ${MANIFEST}`);
