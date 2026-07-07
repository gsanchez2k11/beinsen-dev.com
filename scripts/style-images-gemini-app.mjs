// Automatiza Gemini app (gemini.google.com) para procesar las 33 fotoPrincipal
// usando la suscripcion del usuario (sin cobro por API).
//
// FASES:
//   node scripts/style-images-gemini-app.mjs --login   → abre Chrome para login (UNA vez)
//   node scripts/style-images-gemini-app.mjs --probe   → procesa SOLO Alaska (test)
//   node scripts/style-images-gemini-app.mjs           → procesa las 33
//
// Estado persistente:
//   scripts/_gemini-session/    → userDataDir aislado con tu login de Google
//   scripts/_gemini-downloads/  → descargas temporales antes de copiar al destino

import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright-core";

const args = process.argv.slice(2);
const MODE =
    args.includes("--login") ? "login" :
    args.includes("--probe") ? "probe" :
    args.includes("--copy-profile") ? "copy" : "all";

// Conducimos Brave (lo mismo que usa el usuario). El perfil aislado en
// scripts/_gemini-session/ ya tiene la sesion de Manuel/u3.
const BROWSER_EXE = "C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe";
const SESSION_DIR = path.resolve("scripts/_gemini-session");
const REAL_DIR = "C:/Users/futur/AppData/Local/Google/Chrome/User Data";
const DL_DIR = path.resolve("scripts/_gemini-downloads");

// Carpeta donde se depositan los styled tal como el usuario pidio:
// C:\Users\futur\Downloads\gemini-output\<slug>.png. Despues, el collector
// los mueve a public/products/maquinas/<slug>/fotoPrincipal-styled.png.
const GEMINI_OUTPUT_DIR = "C:/Users/futur/Downloads/gemini-output";

fs.mkdirSync(SESSION_DIR, { recursive: true });
fs.mkdirSync(DL_DIR, { recursive: true });
fs.mkdirSync(GEMINI_OUTPUT_DIR, { recursive: true });

// Subdirectorios pesados que NO necesitamos copiar (caches, GPU, service workers)
const SKIP_DIRS = new Set([
    "cache", "code cache", "gpucache", "grshadercache", "shadercache",
    "service worker", "webrtc logs", "blob_storage", "componentcrx",
    "optimization_hints", "extensionrules", "media history",
]);
function copyProfile() {
    console.log("Copiando perfil real de Chrome a la carpeta aislada...");
    const t0 = Date.now();
    fs.cpSync(REAL_DIR, SESSION_DIR, {
        recursive: true,
        force: true,
        errorOnExist: false,
        filter: (src) => {
            const segments = src.toLowerCase().split(/[\\/]/);
            for (const s of segments) if (SKIP_DIRS.has(s)) return false;
            return true;
        },
    });
    console.log(`  copia completada en ${((Date.now() - t0) / 1000).toFixed(1)}s`);
}

const MAQUINAS = "public/products/maquinas";
const PROMPT_TEMPLATE = fs.readFileSync("scripts/style-prompt.txt", "utf8").trim();

function loadNames() {
    const txt = fs.readFileSync("data/raw/planchas.ts", "utf8");
    const out = {};
    const re = /"slug":\s*"([^"]+)"[\s\S]*?"name":\s*\{[\s\S]*?"es":\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(txt)) !== null) out[m[1]] = m[2];
    return out;
}
const names = loadNames();

function listSlugs(onlyFirst = false) {
    const slugs = fs
        .readdirSync(MAQUINAS)
        .filter((d) => {
            const p = path.join(MAQUINAS, d);
            return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, "fotoPrincipal.png"));
        })
        .sort();
    return onlyFirst ? slugs.filter((s) => s.startsWith("alaska")) : slugs;
}

// ----------------------------------------------------------------------------

async function loginFlow() {
    console.log("Abriendo Chrome con perfil aislado en " + SESSION_DIR);
    console.log("Pasos:");
    console.log("  1. Inicia sesion en tu cuenta Google.");
    console.log("  2. Acepta cookies si las pide.");
    console.log("  3. Verifica que ves la interfaz normal de Gemini con cuadro de texto y boton de adjuntar.");
    console.log("  4. CIERRA la ventana de Chrome cuando termines (no Ctrl+C aqui).");
    console.log("");

    const ctx = await chromium.launchPersistentContext(SESSION_DIR, {
        executablePath: BROWSER_EXE,
        headless: false,
        viewport: null,
        args: ["--disable-blink-features=AutomationControlled"],
    });
    const page = ctx.pages()[0] || (await ctx.newPage());
    await page.goto("https://gemini.google.com/u/3/app", { waitUntil: "domcontentloaded" });

    // Esperamos a que el usuario cierre la ventana
    await new Promise((resolve) => {
        ctx.on("close", resolve);
        page.on("close", () => setTimeout(() => ctx.close().then(resolve).catch(resolve), 500));
    });
    console.log("Sesion guardada. Lanza --probe para procesar Alaska.");
}

// ----------------------------------------------------------------------------

async function processOne(page, slug) {
    const inFile = path.resolve(MAQUINAS, slug, "fotoPrincipal.png");
    // El usuario quiere las descargas en C:\Users\futur\Downloads\gemini-output\<slug>.png
    const outFile = path.join(GEMINI_OUTPUT_DIR, slug + ".png");
    const name = names[slug] || slug;
    const prompt = PROMPT_TEMPLATE.replace(/\[PRODUCTO\]/g, name);

    console.log(`\n[${slug}] enviando — ${name}`);

    // Abrimos chat nuevo navegando a la home (Gemini limpia el estado).
    await page.goto("https://gemini.google.com/u/3/app", { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {});
    await page.waitForTimeout(2000);

    // ---- 1) Subir imagen ----
    // Gemini renderiza el textarea contenteditable y un boton "+" para adjuntar.
    // Intentamos primero localizar un input[type=file] que ya este montado
    // (algunas versiones lo tienen aunque sea oculto). Si no aparece, clicamos
    // el boton de adjuntar y usamos el filechooser nativo.
    let uploaded = false;
    try {
        const fi = page.locator('input[type="file"]').first();
        await fi.waitFor({ state: "attached", timeout: 5000 });
        await fi.setInputFiles(inFile);
        uploaded = true;
        console.log("  imagen subida via input[type=file] directo");
    } catch {
        // Patron alternativo: click en el boton de adjuntar y esperar el chooser
        const attachSelectors = [
            'button[aria-label*="archivo" i]',
            'button[aria-label*="file" i]',
            'button[aria-label*="adjuntar" i]',
            'button[aria-label*="upload" i]',
            'button[aria-label*="anad" i]',
            'button[aria-label*="add" i]',
            'button[mat-icon-button]',
        ];
        for (const sel of attachSelectors) {
            const btn = page.locator(sel).first();
            try {
                await btn.waitFor({ state: "visible", timeout: 2000 });
                const [fileChooser] = await Promise.all([
                    page.waitForEvent("filechooser", { timeout: 5000 }),
                    btn.click(),
                ]);
                await fileChooser.setFiles(inFile);
                uploaded = true;
                console.log(`  imagen subida via filechooser (selector ${sel})`);
                break;
            } catch {
                // Probar un menu emergente: "Subir imagen" / "Upload from computer"
                try {
                    const upMenu = page.locator('[role=menuitem]:has-text("Subir"), [role=menuitem]:has-text("Upload"), button:has-text("Subir imagen"), button:has-text("Upload image")').first();
                    if (await upMenu.isVisible({ timeout: 1000 })) {
                        const [fileChooser] = await Promise.all([
                            page.waitForEvent("filechooser", { timeout: 5000 }),
                            upMenu.click(),
                        ]);
                        await fileChooser.setFiles(inFile);
                        uploaded = true;
                        console.log(`  imagen subida via menu emergente`);
                        break;
                    }
                } catch {}
            }
        }
    }
    if (!uploaded) throw new Error("No pude subir la imagen — selectores no encontrados");

    // Pausa para que Gemini procese el upload y muestre el preview
    await page.waitForTimeout(3000);

    // ---- 2) Escribir el prompt ----
    const promptSelectors = [
        'rich-textarea [contenteditable="true"]',
        '[contenteditable="true"][role="textbox"]',
        '[contenteditable="true"]',
        'textarea',
    ];
    let promptBox = null;
    for (const sel of promptSelectors) {
        const cand = page.locator(sel).first();
        if (await cand.isVisible({ timeout: 1500 }).catch(() => false)) {
            promptBox = cand;
            break;
        }
    }
    if (!promptBox) throw new Error("No encontre el cuadro de prompt");

    await promptBox.click();
    // Usar keyboard.type es mas fiable que .fill() en contenteditable
    await page.keyboard.type(prompt, { delay: 5 });
    console.log("  prompt escrito");
    await page.waitForTimeout(700);

    // ---- 3) Enviar ----
    // Intento boton de enviar; si no, Ctrl+Enter o Enter
    const sendSelectors = [
        'button[aria-label*="Enviar" i]',
        'button[aria-label*="Send" i]',
        'button[aria-label*="enviar mensaje" i]',
        'button[aria-label*="send message" i]',
    ];
    let sent = false;
    for (const sel of sendSelectors) {
        const b = page.locator(sel).first();
        if (await b.isVisible({ timeout: 800 }).catch(() => false) && await b.isEnabled().catch(() => false)) {
            await b.click();
            sent = true;
            break;
        }
    }
    if (!sent) await page.keyboard.press("Enter");
    console.log("  esperando generacion...");

    // ---- 4) Esperar imagen generada ----
    // Nano Banana suele tardar 8-30s. Buscamos un <img> dentro del area de
    // respuesta que NO sea el preview de nuestra imagen original.
    const generatedImg = page.locator('img[alt*="Generated" i], img[src^="https://"][alt], message-content img[src^="data:image"], message-content img[src^="https://"], img[data-testid*="generated" i]').last();
    await generatedImg.waitFor({ state: "visible", timeout: 120000 });
    // Pequeno margen para que termine de pintarse en alta calidad
    await page.waitForTimeout(2000);
    console.log("  imagen generada, descargando...");

    const src = await generatedImg.getAttribute("src");
    if (!src) throw new Error("Sin src en la imagen generada");

    let buf;
    if (src.startsWith("data:image")) {
        const b64 = src.split(",")[1];
        buf = Buffer.from(b64, "base64");
    } else {
        // Descargar via JS de la pagina (lleva cookies de la sesion)
        const b64viaPage = await page.evaluate(async (url) => {
            const r = await fetch(url, { credentials: "include" });
            if (!r.ok) throw new Error("HTTP " + r.status);
            const blob = await r.blob();
            return await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result.split(",")[1]);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        }, src);
        buf = Buffer.from(b64viaPage, "base64");
    }

    fs.writeFileSync(outFile, buf);
    console.log(`  guardada: ${path.relative(process.cwd(), outFile)}  (${(buf.length / 1024).toFixed(0)} KB)`);
}

// ----------------------------------------------------------------------------

async function processFlow(probeOnly) {
    if (!fs.existsSync(path.join(SESSION_DIR, "Default"))) {
        console.error("No hay sesion guardada. Lanza primero --copy-profile o --login");
        process.exit(1);
    }

    const slugs = listSlugs(probeOnly);
    console.log(`A procesar: ${slugs.length} plancha${slugs.length === 1 ? "" : "s"}`);

    const ctx = await chromium.launchPersistentContext(SESSION_DIR, {
        executablePath: BROWSER_EXE,
        headless: false,
        viewport: null,
        args: ["--disable-blink-features=AutomationControlled"],
    });
    const page = ctx.pages()[0] || (await ctx.newPage());

    const force = process.argv.includes("--force");
    let ok = 0, fail = 0, skip = 0;
    for (let i = 0; i < slugs.length; i++) {
        const slug = slugs[i];
        const expected = path.join(GEMINI_OUTPUT_DIR, slug + ".png");
        if (fs.existsSync(expected) && !force) {
            console.log(`\n=== ${i + 1}/${slugs.length} ${slug}  →  ya descargada, salto (usa --force para regenerar)`);
            skip++;
            continue;
        }
        console.log(`\n=== ${i + 1}/${slugs.length} ${slug} ===`);
        try {
            await processOne(page, slug);
            ok++;
        } catch (e) {
            console.log("  ✗ " + e.message);
            fail++;
            // Saca un screenshot para diagnosticar
            try {
                await page.screenshot({ path: path.join(DL_DIR, `error-${slug}.png`), fullPage: false });
            } catch {}
        }
    }

    await ctx.close();
    console.log(`\nResumen: ${ok} OK · ${skip} saltadas · ${fail} fallidas`);
    console.log(`Descargas en: ${GEMINI_OUTPUT_DIR}`);
}

// ----------------------------------------------------------------------------

try {
    if (MODE === "login") await loginFlow();
    else if (MODE === "copy") copyProfile();
    else if (MODE === "probe") await processFlow(true);
    else await processFlow(false);
} catch (e) {
    console.error(e);
    process.exit(2);
}
