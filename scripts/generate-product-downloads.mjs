import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DOWNLOADS_DIR = path.join(ROOT, "public", "manuales");
const OUTPUT = path.join(ROOT, "data", "product-downloads.json");
const DOC_EXT = /\.(pdf|docx?|xlsx?)$/i;
const LANG_MANUAL = /^manual-(es|en|pt|it)\.pdf$/i;

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
};

const MAINTENANCE_LABEL = {
  es: "Libro de Mantenimiento",
  en: "Maintenance Book",
  pt: "Livro de Manutenção",
  it: "Libretto di Manutenzione",
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

    const entries = [];
    const langManuals = {};

    for (const f of files) {
      const langMatch = f.match(LANG_MANUAL);
      if (langMatch) {
        langManuals[langMatch[1].toLowerCase()] = `/manuales/${slug}/${f}`;
        continue;
      }

      const base = f.replace(DOC_EXT, "");
      const lowerBase = base.toLowerCase();
      let label;

      if (lowerBase.startsWith("libro_mantenimiento")) {
        label = MAINTENANCE_LABEL;
      } else {
        label = LABELS[lowerBase] || prettify(base);
      }

      entries.push({ label, url: `/manuales/${slug}/${f}` });
    }

    if (Object.keys(langManuals).length > 0) {
      entries.unshift({
        label: LABELS["manual"],
        languages: langManuals,
      });
    }

    if (entries.length > 0) {
      manifest[slug] = entries;
    }
  }
}

fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2) + "\n");
console.log(`✓ Product downloads manifest: ${Object.keys(manifest).length} products`);
