import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DOWNLOADS_DIR = path.join(ROOT, "public", "manuales");
const OUTPUT = path.join(ROOT, "data", "product-downloads.json");
const DOC_EXT = /\.(pdf|docx?|xlsx?)$/i;

// Localized labels for recognized filenames (case-insensitive, without extension).
// Unknown filenames fall back to a prettified version of the base name.
const LABELS = {
  "manual": { es: "Manual de Usuario", en: "User Manual", pt: "Manual do Utilizador", it: "Manuale Utente" },
  "manual-usuario": { es: "Manual de Usuario", en: "User Manual", pt: "Manual do Utilizador", it: "Manuale Utente" },
  "ficha-tecnica": { es: "Ficha Técnica", en: "Technical Sheet", pt: "Ficha Técnica", it: "Scheda Tecnica" },
  "datasheet": { es: "Ficha Técnica", en: "Datasheet", pt: "Ficha Técnica", it: "Scheda Tecnica" },
  "guia": { es: "Guía", en: "Guide", pt: "Guia", it: "Guida" },
  "guia-sublimacion": { es: "Guía de Sublimación", en: "Sublimation Guide", pt: "Guia de Sublimação", it: "Guida Sublimazione" },
  "catalogo": { es: "Catálogo", en: "Catalog", pt: "Catálogo", it: "Catalogo" },
  "garantia": { es: "Garantía", en: "Warranty", pt: "Garantia", it: "Garanzia" },
  "despiece": { es: "Despiece", en: "Exploded View", pt: "Despiece", it: "Esploso" },
  "declaracion-conformidad": { es: "Declaración de Conformidad", en: "Declaration of Conformity", pt: "Declaração de Conformidade", it: "Dichiarazione di Conformità" },

  // Malvinas — cada archivo etiquetado en su propio idioma
  "guia-de-usuario-malvinas-v1.2.1": "Manual de Usuario",
  "user-guide-malvinas-v1.2.1":      "User Manual",
  "guia-do-usuario-malvinas-v1.2.1": "Manual do Utilizador",
  "guia-di-utente-malvinas-v1.2.1":  "Manuale Utente",
};

function prettify(base) {
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(" ");
}

const manifest = {};

if (fs.existsSync(DOWNLOADS_DIR)) {
  for (const slug of fs.readdirSync(DOWNLOADS_DIR).sort()) {
    const dir = path.join(DOWNLOADS_DIR, slug);
    if (!fs.statSync(dir).isDirectory()) continue;
    const files = fs.readdirSync(dir).filter((f) => DOC_EXT.test(f)).sort();
    if (files.length === 0) continue;
    manifest[slug] = files.map((f) => {
      const base = f.replace(DOC_EXT, "").toLowerCase();
      const label = LABELS[base] || prettify(base);
      return { label, url: `/manuales/${slug}/${f}` };
    });
  }
}

fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2) + "\n");
console.log(`✓ Product downloads manifest: ${Object.keys(manifest).length} products`);
