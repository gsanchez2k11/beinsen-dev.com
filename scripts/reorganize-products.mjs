import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PRODUCTS_DIR = path.join(ROOT, 'public', 'products');
const IMAGES_JSON = path.join(ROOT, 'data', 'product-images.json');
const PRODUCTS_TS = path.join(ROOT, 'data', 'products.ts');

// Slugs classified as accessories (from rawAccessoriesData)
const ACCESORIOS = new Set([
  'plato-resistencia-combo-38x38',
  'almohadilla-silicona-38x38',
  'lamina-teflon-38x38',
  'lamina-teflon-40x50',
  'resistencia-tazas-11oz-b',
  'resistencia-tazas-6-10oz',
  'resistencia-tazas-11oz-a',
  'resistencia-tazas-conicas-17oz',
  'resistencia-doble-taza-11-15oz',
  'plato-gorras-beinsen-riad',
  'resistencia-15x20-beinsen-riad',
  'resistencia-gorras-beinsen-riad',
  'plato-gorras-beinsen-obrei',
  'resistencia-gorras-combo-beinsen',
  'resistencia-gorras-beinsen-obrei',
  'resistencia-15x15-beinsen-obrei',
  'plato-15x20-beinsen-riad',
  'plato-base-15x15-beinsen-obrei',
  'plato-intercambiable-18x18-barbados',
  'plato-intercambiable-redondo-24-barbados',
  'plato-intercambiable-zapatillas-barbados',
  'plato-intercambiable-18x38-barbados',
  'plato-intercambiable-18x45-barbados',
  'plato-intercambiable-30x35-barbados',
  'placa-polimero-platos-horno',
  'molde-3d-silicona-platos',
  'molde-3d-silicona-tazas-conicas-jarras',
  'molde-3d-silicona-tazas-rectas',
  'molde-silicona-3-tazas-11oz',
  'molde-3d-silicona-3-botellas-aluminio',
  'resistencia-platos-6-1-gen',
  'resistencia-platos-5-dorian',
  'rodillo-cintas',
  'almohadilla-algodon-80x110',
  'filtro-hepa-sx8-sz1-tb',
  'filtro-hepa-sx8-sz1-ta',
  'filtro-carbon-sx8-sz1',
  'cojinete-f6904rs-sx8-sz1',
  'cojinete-f6901rs-sx8-sz1',
  'fuente-alimentacion-24v-sx8-sz1-b',
  'fuente-alimentacion-24v-sx8-sz1',
  'sensor-placa-calefactora-sx8-sz1',
  'contactor-ca-220v-sx8-sz1',
  'sensor-temperatura-sz1',
  'motor-deposito-polvo-sx8',
  'rele-intermedio-24v-sz1',
  'rele-estado-solido-sz1',
  'rele-hornos-sx8-sz1',
  'placa-base-hornos-sx8-sz1',
  'pantalla-hornos-sz1',
  'lampara-horno-sz1',
  'resistencia-tazas-2-5oz',
  'resistencia-chupitos-1-5oz',
  'resistencia-cilindrica-20-30oz',
  'plato-base-18x18-cambio-rapido',
  'plato-base-18x38-cambio-rapido',
  'plato-base-18x45-cambio-rapido',
  'plato-base-30x35-cambio-rapido',
  'plato-base-zapatillas-cambio-rapido',
  'plato-base-redondo-24-cambio-rapido',
  'plato-base-gorras-cambio-rapido',
  'plato-base-camisetas-cambio-rapido',
  'plato-base-40x50-2mangas-cambio-rapido',
  'plato-base-12x45-mangas-cambio-rapido',
  'plato-base-15x50-pantalones-cambio-rapido',
  'plato-base-15-5x25-5-cambio-rapido',
  'plato-base-15x25-cambio-rapido',
  'plato-base-25x30-cambio-rapido',
  'plato-base-15x15-cambio-rapido',
  'almohadilla-silicona-80x100',
  'plato-38x38-beinsen-chinela',
  'fusible-termico-3d-16',
  'almohadilla-teflon-termorresistente-40x50',
  'almohadilla-teflon-termorresistente-38x38',
  'almohadilla-teflon-termorresistente-25x25',
  'almohadilla-teflon-termorresistente-15x15',
  'termometro-digital-infrarrojos-it122',
  'guantes-protectores-algodon',
  'mesa-universal-grande-ruedas',
  'resistencia-conica-tazas-12oz',
  'resistencia-tazas-conicas-17oz',
]);

// Slugs classified as consumables (from rawConsumablesData)
const CONSUMIBLES = new Set([
  'cinta-termica-sublimacion-10mm',
  'almohadilla-silicona-40x50',
  'resistencia-cilindrica-tazas-11oz-tipo-a',
]);

function getCategory(slug) {
  if (CONSUMIBLES.has(slug)) return 'consumibles';
  if (ACCESORIOS.has(slug)) return 'accesorios';
  return 'maquinas';
}

// Create target directories
for (const cat of ['maquinas', 'accesorios', 'consumibles']) {
  fs.mkdirSync(path.join(PRODUCTS_DIR, cat), { recursive: true });
}

// Move folders
const entries = fs.readdirSync(PRODUCTS_DIR, { withFileTypes: true });
const moves = []; // { from, to, slug, cat }

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const slug = entry.name;
  // Skip already-categorized folders
  if (['maquinas', 'accesorios', 'consumibles'].includes(slug)) continue;

  const cat = getCategory(slug);
  const from = path.join(PRODUCTS_DIR, slug);
  const to = path.join(PRODUCTS_DIR, cat, slug);
  moves.push({ from, to, slug, cat });
}

console.log(`Moving ${moves.length} folders...`);
for (const { from, to, slug, cat } of moves) {
  fs.renameSync(from, to);
  console.log(`  ${slug} → ${cat}/`);
}

// Update product-images.json
const imagesJson = JSON.parse(fs.readFileSync(IMAGES_JSON, 'utf8'));
const slugToCat = {};
for (const { slug, cat } of moves) slugToCat[slug] = cat;

function updateImagePath(p) {
  if (typeof p !== 'string') return p;
  // Match /products/SLUG/...
  return p.replace(/^\/products\/([^/]+)\//, (_, slug) => {
    const cat = slugToCat[slug];
    if (!cat) return `/products/${slug}/`; // unchanged if not moved
    return `/products/${cat}/${slug}/`;
  });
}

function walkAndUpdate(obj) {
  if (typeof obj === 'string') return updateImagePath(obj);
  if (Array.isArray(obj)) return obj.map(walkAndUpdate);
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, walkAndUpdate(v)]));
  }
  return obj;
}

const updatedImages = walkAndUpdate(imagesJson);
fs.writeFileSync(IMAGES_JSON, JSON.stringify(updatedImages, null, 2));
console.log('Updated product-images.json');

// Update products.ts — replace /products/SLUG/ paths
let ts = fs.readFileSync(PRODUCTS_TS, 'utf8');
let updated = ts;
for (const { slug, cat } of moves) {
  // Replace all occurrences of /products/SLUG/ with /products/CAT/SLUG/
  const escaped = slug.replace(/-/g, '\\-');
  updated = updated.replace(
    new RegExp(`/products/${escaped}/`, 'g'),
    `/products/${cat}/${slug}/`
  );
}
if (updated !== ts) {
  fs.writeFileSync(PRODUCTS_TS, updated, 'utf8');
  console.log('Updated products.ts');
} else {
  console.log('No changes needed in products.ts');
}

console.log('Done!');
