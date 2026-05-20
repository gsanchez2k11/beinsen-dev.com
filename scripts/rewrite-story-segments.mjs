// One-off script: rewrites storyHeadline + storySegments for 18 machines
// with template/duplicate content. Idempotent — safe to re-run.
import fs from "node:fs";
import path from "node:path";

const FILE = path.resolve("data/products.ts");

// Each entry: { slug, headline: {es,en}, segments: [{title:{es,en}, description:{es,en}, image?}] }
const REWRITES = [
    {
        slug: "alaska-plancha-termica-textil",
        headline: { es: "Eléctrica sin compresor", en: "Electric, no compressor" },
        segments: [{
            title: { es: "Adiós a la palanca", en: "No more lever" },
            description: {
                es: "Beinsen Alaska sustituye la palanca clásica por un sistema electromagnético eléctrico que abre la prensa al terminar el ciclo, sin compresor ni ruido. Disponible en plato 38x38 o 40x50 cm con resistencia mejorada y alfombrilla de última generación para un reparto de calor más uniforme.",
                en: "Beinsen Alaska replaces the classic lever with an electric electromagnetic system that opens the press when the cycle ends — no compressor, no noise. Available in 38x38 or 40x50 cm plates with an upgraded heating element and next-generation pad for more uniform heat distribution.",
            },
            image: "/products/maquinas/alaska-plancha-termica-textil/07.png",
        }],
    },
    {
        slug: "barbados-plancha-termica-textil",
        headline: { es: "Manual con precisión repetible", en: "Manual with repeatable precision" },
        segments: [{
            title: { es: "Apertura electromagnética", en: "Electromagnetic opening" },
            description: {
                es: "Beinsen Barbados combina cierre manual con apertura electromagnética automática al finalizar el ciclo. El contador de presión calibrado permite repetir cada estampación con el mismo ajuste. Plato intercambiable 38x38 o 40x50 cm y bandeja extraíble para colocar la prenda sin esfuerzo.",
                en: "Beinsen Barbados combines manual closing with automatic electromagnetic opening at cycle end. The calibrated pressure counter lets you repeat each print at the same setting. Interchangeable 38x38 or 40x50 cm plate with pull-out tray for easy garment placement.",
            },
            image: "/products/maquinas/barbados-plancha-termica-textil/06.png",
        }],
    },
    {
        slug: "belice-plancha-termica-textil",
        headline: { es: "Manual robusta y fiable", en: "Robust and reliable manual press" },
        segments: [{
            title: { es: "El clásico que no falla", en: "The classic that won't fail" },
            description: {
                es: "Beinsen Belice es la plancha manual de entrada al mundo textil: estructura sencilla, robusta y sin electrónica innecesaria. Plato 38x38 o 40x50 cm con resistencia profesional, pensada para talleres pequeños y producciones diarias donde la fiabilidad pesa más que las opciones extra.",
                en: "Beinsen Belice is the entry-level manual press for textile work: simple, robust build with no unnecessary electronics. 38x38 or 40x50 cm plate with a professional heating element, designed for small workshops and daily production where reliability matters more than extras.",
            },
        }],
    },
    {
        slug: "guyana-plancha-termica-textil",
        headline: { es: "Doble estación, doble flujo", en: "Two stations, double the flow" },
        segments: [{
            title: { es: "Trabaja en paralelo", en: "Work in parallel" },
            description: {
                es: "Beinsen Guyana monta dos platos independientes en la misma estructura: prepara la siguiente prenda mientras prensas la actual y dobla tu producción sin doblar el espacio ocupado. Misma mecánica fiable que el modelo Barbados, multiplicada por dos.",
                en: "Beinsen Guyana fits two independent plates in the same frame: prepare the next garment while pressing the current one and double your output without doubling your floor space. Same reliable mechanics as the Barbados, multiplied by two.",
            },
        }],
    },
    {
        slug: "kenia-plancha-termica-textil",
        headline: { es: "Formato lanyards y cintas", en: "Lanyard & ribbon format" },
        segments: [{
            title: { es: "Plato extralargo 100x25 cm", en: "Extra-long 100x25 cm plate" },
            description: {
                es: "Beinsen Kenia es la especialista de cintería: su plato de 100x25 cm permite sublimar lanyards, cintas, tirantes y prendas estrechas en una sola pasada. Concebida específicamente para producción de cintería y publicidad, no para usos textiles generales.",
                en: "Beinsen Kenia is the specialist for narrow goods: its 100x25 cm plate lets you sublimate lanyards, ribbons, straps and narrow garments in a single pass. Built specifically for ribbon and promotional production, not for general textile use.",
            },
        }],
    },
    {
        slug: "malvinas-plancha-termica-textil",
        headline: { es: "Generación más ágil", en: "Faster generation" },
        segments: [{
            title: { es: "Rediseñada para ser más rápida", en: "Redesigned to be faster" },
            description: {
                es: "Beinsen Malvinas representa la evolución natural de la gama manual: estructura nueva con flujo de trabajo optimizado, apertura más rápida, control de temperatura más estable y bandeja inferior reformada que acelera el cambio de prenda en cada ciclo.",
                en: "Beinsen Malvinas is the natural evolution of the manual line: new structure with an optimized workflow, faster opening, more stable temperature control and a redesigned lower tray that speeds up garment changeover at every cycle.",
            },
        }],
    },
    {
        slug: "normandia-i-plancha-termica-textil",
        headline: { es: "Neumática doble plato", en: "Pneumatic dual plate" },
        segments: [{
            title: { es: "Producción en paralelo con compresor", en: "Parallel production with compressor" },
            description: {
                es: "Beinsen Normandia I usa apertura y cierre neumáticos con dos platos para encadenar ciclos sin tiempos muertos. La presión es constante en cada estampación independientemente del operario — ideal para producciones medianas que requieren ritmo regular.",
                en: "Beinsen Normandia I uses pneumatic opening and closing with two plates to chain cycles without dead time. Pressure stays constant on every print regardless of the operator — ideal for medium-volume production that needs steady throughput.",
            },
        }],
    },
    {
        slug: "normandia-ii-plancha-termica-textil",
        headline: { es: "Neumática profesional", en: "Professional pneumatic" },
        segments: [{
            title: { es: "Presión constante con compresor", en: "Constant compressor pressure" },
            description: {
                es: "Beinsen Normandia II eleva la gama neumática con cierre que mantiene presión uniforme durante todo el ciclo, sin variaciones según quien la maneje. Construcción reforzada y electrónica preparada para producciones largas en talleres profesionales.",
                en: "Beinsen Normandia II steps up the pneumatic line with closing that keeps pressure uniform throughout the cycle, with no variation between operators. Reinforced build and electronics geared for long production runs in professional workshops.",
            },
        }],
    },
    {
        slug: "normandia-iii-plancha-termica-textil",
        headline: { es: "Neumática alta producción", en: "High-volume pneumatic" },
        segments: [{
            title: { es: "Para volúmenes altos", en: "For high volumes" },
            description: {
                es: "Beinsen Normandia III es la evolución superior de la gama neumática con mejoras en estructura, electrónica y rendimiento térmico. Pensada para talleres que sublimen grandes cantidades de producto a diario y necesiten una máquina dimensionada para producción continua.",
                en: "Beinsen Normandia III is the top evolution of the pneumatic line with upgraded structure, electronics and thermal performance. Built for workshops sublimating large daily volumes that need a machine sized for continuous production.",
            },
        }],
    },
    {
        slug: "sore-plancha-profesional-tazas",
        headline: { es: "Especialista en tazas", en: "Mug specialist" },
        segments: [{
            title: { es: "Producción ×5 en una sola máquina", en: "5× production in one machine" },
            description: {
                es: "Beinsen Sore concentra toda la personalización de tazas en una unidad compacta y robusta. Resistencias intercambiables y cambio rápido permiten alternar entre formatos sin perder ciclos. Ideal para talleres con producción constante de tazas.",
                en: "Beinsen Sore concentrates all mug personalization in one compact, sturdy unit. Interchangeable heating elements and quick swap let you alternate formats without losing cycles. Ideal for workshops with steady mug production.",
            },
        }],
    },
    {
        slug: "andra-prensa-automatica-tazas",
        headline: { es: "Envoltura automática", en: "Automatic wrap" },
        segments: [{
            title: { es: "Coloca la taza, pulsa, y listo", en: "Load, press, done" },
            description: {
                es: "Beinsen Andra incorpora un sistema de envoltura automática alrededor de la taza que elimina la necesidad de fijar el papel manualmente. Reduce los tiempos de ciclo y garantiza resultado uniforme sin intervención del operario en cada estampación.",
                en: "Beinsen Andra features an automatic wrap system around the mug that removes the need to manually fix the paper. Shorter cycle times and uniform results with no operator intervention on every print.",
            },
        }],
    },
    {
        slug: "barahona-plancha-para-tazas-6-en-1",
        headline: { es: "Seis formatos en una máquina", en: "Six formats in one machine" },
        segments: [{
            title: { es: "Cubre todo el catálogo de tazas", en: "Covers the entire mug catalog" },
            description: {
                es: "Beinsen Barahona incluye 6 resistencias intercambiables (chupito, taza mini, 6-10oz, 11-15oz, 12oz cónica y 17oz cónica) en una sola estructura. Cubres todos los formatos del mercado sin necesidad de comprar máquinas separadas para cada uno.",
                en: "Beinsen Barahona includes 6 interchangeable heating elements (shot glass, mini mug, 6-10oz, 11-15oz, 12oz conical and 17oz conical) in a single structure. Cover every mug format without buying separate machines.",
            },
        }],
    },
    {
        slug: "barein-plancha-termica",
        headline: { es: "Tazas con controlador digital", en: "Mugs with digital controller" },
        segments: [{
            title: { es: "Resistencias intercambiables", en: "Interchangeable heating elements" },
            description: {
                es: "Beinsen Barein es la plancha de tazas con controlador digital preciso y resistencias intercambiables de 6-9oz. Tiempo de calentamiento corto (≈5 min), consumo moderado (130-260W) y temperatura máxima 220ºC para sublimación sin complicaciones.",
                en: "Beinsen Barein is the mug press with a precise digital controller and 6-9oz interchangeable heating elements. Short warm-up (~5 min), moderate power draw (130-260W) and 220°C max temperature for straightforward sublimation.",
            },
            iframe: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/r1fMuXcRomk?si=sNKbdTDInM_4FfSY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
        }],
    },
    {
        slug: "chinela-plancha-transfer-zapatillas",
        headline: { es: "Especialista en calzado", en: "Footwear specialist" },
        segments: [{
            title: { es: "Diseñada para zapatillas", en: "Built for sneakers" },
            description: {
                es: "Beinsen Chinela tiene una geometría específica de plato adaptada al calzado, que permite aplicar transfer en zapatillas y deportivas donde una prensa plana no llega. Resuelve un nicho concreto del mercado de personalización de moda.",
                en: "Beinsen Chinela has a plate geometry specifically adapted to footwear, letting you apply transfer to sneakers and sports shoes where a flat press can't reach. Solves a specific niche in fashion personalization.",
            },
        }],
    },
    {
        slug: "pocola-plancha-transfer-manual-pequena",
        headline: { es: "Compacta para pequeños formatos", en: "Compact for small formats" },
        segments: [{
            title: { es: "Plato 15x20 cm", en: "15x20 cm plate" },
            description: {
                es: "Beinsen Pocola es la plancha transfer manual de plato pequeño (15x20 cm), perfecta para sublimar bodies, baberos, fundas de móvil, parches y artículos pequeños. Bajo consumo, poco espacio en la mesa y resultado profesional desde el primer ciclo.",
                en: "Beinsen Pocola is the small-plate manual transfer press (15x20 cm), perfect for sublimating bodies, bibs, phone cases, patches and small items. Low power draw, small footprint and professional results from the first cycle.",
            },
        }],
    },
    {
        slug: "gante-plancha-manual-gorras",
        headline: { es: "Iniciación en gorras", en: "Entry-level cap press" },
        segments: [{
            title: { es: "Compacta para empezar en gorras", en: "Compact to start with caps" },
            description: {
                es: "Beinsen Gante es la plancha manual para gorras pensada para iniciación al mercado o producciones puntuales. Tamaño reducido, plato específico para gorras y precio asequible — el punto de entrada ideal antes de saltar a una neumática.",
                en: "Beinsen Gante is the manual cap press built for market entry or occasional production. Compact size, cap-specific plate and affordable price — the ideal entry point before moving up to a pneumatic model.",
            },
        }],
    },
    {
        slug: "chicago-plancha-termica-automatica",
        headline: { es: "Compacta y automática", en: "Compact and automatic" },
        segments: [{
            title: { es: "Premium sin ocupar espacio", en: "Premium without the footprint" },
            description: {
                es: "Beinsen Chicago concentra las características premium de las prensas automáticas en un formato compacto: apertura asistida, control digital y construcción robusta. Pensada para talleres donde el espacio es limitado pero la calidad no es negociable.",
                en: "Beinsen Chicago packs premium automatic-press features into a compact format: assisted opening, digital control and robust build. Built for workshops where space is tight but quality isn't negotiable.",
            },
        }],
    },
    {
        slug: "luanda-plancha-termica-automatica",
        headline: { es: "Automática textil compacta", en: "Compact automatic textile press" },
        segments: [{
            title: { es: "Automatización en formato pequeño", en: "Automation in a small package" },
            description: {
                es: "Beinsen Luanda ofrece automatización completa (apertura asistida, control electrónico) en formato compacto, pensada para talleres que quieren dar el salto a la automatización sin las dimensiones ni el coste de instalación de una neumática.",
                en: "Beinsen Luanda offers full automation (assisted opening, electronic control) in a compact format, designed for workshops looking to step up to automation without the size or installation cost of a pneumatic press.",
            },
        }],
    },
];

function jsToTsObject(obj, indent = 6) {
    const sp = " ".repeat(indent);
    const sp2 = " ".repeat(indent + 2);
    return JSON.stringify(obj, null, 2)
        .split("\n")
        .map((line, i) => (i === 0 ? line : sp + line))
        .join("\n");
}

function buildBlock(headline, segments, indent = 4) {
    const sp = " ".repeat(indent);
    const sp2 = " ".repeat(indent + 2);
    let out = `${sp}"storyHeadline": ${JSON.stringify(headline)},\n`;
    out += `${sp}"storySegments": [\n`;
    out += segments.map((seg) => {
        const lines = [`${sp2}{`];
        lines.push(`${sp2}  "title": ${JSON.stringify(seg.title)},`);
        lines.push(`${sp2}  "description": ${JSON.stringify(seg.description)}${seg.image || seg.iframe ? "," : ""}`);
        if (seg.image) lines.push(`${sp2}  "image": ${JSON.stringify(seg.image)}${seg.iframe ? "," : ""}`);
        if (seg.iframe) lines.push(`${sp2}  "iframe": ${JSON.stringify(seg.iframe)}`);
        lines.push(`${sp2}}`);
        return lines.join("\n");
    }).join(",\n");
    out += `\n${sp}],`;
    return out;
}

let src = fs.readFileSync(FILE, "utf-8");
let modified = 0;
let inserted = 0;
let replaced = 0;

for (const r of REWRITES) {
    const slugLine = `"slug": "${r.slug}"`;
    const slugIdx = src.indexOf(slugLine);
    if (slugIdx === -1) {
        console.log(`⚠ No encontrado: ${r.slug}`);
        continue;
    }

    // Find the next "category" key within this object
    const block = buildBlock(r.headline, r.segments);

    // Limit scope to this machine's object — find the next slug or end
    const nextSlugIdx = src.indexOf('"slug": "', slugIdx + slugLine.length);
    const machineEnd = nextSlugIdx === -1 ? src.length : nextSlugIdx;
    const machineBlock = src.slice(slugIdx, machineEnd);

    // Look for existing storyHeadline within this machine only
    const headlineKeyIdx = machineBlock.indexOf('"storyHeadline":');
    const categoryKeyMatch = machineBlock.match(/^(\s+)"category":/m);

    if (headlineKeyIdx !== -1) {
        // Replace: walk character-by-character to find end of storySegments array
        // Start at storyHeadline line
        const absHeadlineStart = slugIdx + headlineKeyIdx;
        // Find start of line for proper indent
        const lineStart = src.lastIndexOf("\n", absHeadlineStart) + 1;
        const indent = absHeadlineStart - lineStart;

        // Find "storySegments": after the headline
        const segKey = '"storySegments":';
        const segKeyIdx = src.indexOf(segKey, absHeadlineStart);
        if (segKeyIdx === -1) { console.log(`✗ ${r.slug}: storyHeadline sin storySegments`); continue; }

        // Find the opening [ after "storySegments":
        const arrayStart = src.indexOf('[', segKeyIdx);
        if (arrayStart === -1) { console.log(`✗ ${r.slug}: no [ tras storySegments`); continue; }

        // Walk to matching ]
        let depth = 0;
        let i = arrayStart;
        for (; i < src.length; i++) {
            const c = src[i];
            if (c === '[') depth++;
            else if (c === ']') {
                depth--;
                if (depth === 0) break;
            }
        }
        if (depth !== 0) { console.log(`✗ ${r.slug}: ] no encontrado`); continue; }

        // Include trailing comma if present
        let endIdx = i + 1;
        if (src[endIdx] === ',') endIdx++;
        // Strip trailing whitespace/newlines that belonged to the block
        while (endIdx < src.length && (src[endIdx] === ' ' || src[endIdx] === '\t')) endIdx++;
        if (src[endIdx] === '\n') endIdx++;

        const newBlock = buildBlock(r.headline, r.segments, indent);
        src = src.slice(0, lineStart) + newBlock + "\n" + src.slice(endIdx);
        replaced++;
    } else if (categoryKeyMatch) {
        // Insert before "category"
        const indent = categoryKeyMatch[1].length;
        const absStart = slugIdx + categoryKeyMatch.index;
        const newBlock = buildBlock(r.headline, r.segments, indent);
        src = src.slice(0, absStart) + newBlock + "\n" + " ".repeat(indent) + src.slice(absStart);
        inserted++;
    } else {
        console.log(`⚠ ${r.slug}: no encontré 'category' donde insertar`);
        continue;
    }
    modified++;
}

fs.writeFileSync(FILE, src);
console.log(`✓ Modificadas: ${modified} máquinas (${inserted} nuevas + ${replaced} reemplazadas)`);
