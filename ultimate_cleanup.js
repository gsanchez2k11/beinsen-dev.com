const fs = require('fs');
const path = require('path');

const productsFilePath = 'data/products.ts';
let content = fs.readFileSync(productsFilePath, 'utf8');

// 1. Remove Garbage IDs
const idsToRemove = [
    "filtro-hepa-beinsen-kenia", "sensor-temperatura-beinsen-kenia", "rele-estado-solido-beinsen-kenia",
    "resistencia-repuesto-kenia-rodillo", "sensor-proximidad-kenia", "motor-paso-paso-kenia",
    "cable-alimentacion-kenia", "placa-control-kenia", "valvula-solenoide-kenia",
    "cilindro-neumatico-kenia", "fusible-termico-3d-16", "filtro-aire-3d", "lampara-horno-sz1",
    "pantalla-hornos-sz1", "placa-base-hornos-sx8-sz1", "rele-hornos-sx8-sz1", "rele-estado-solido-sz1",
    "rele-intermedio-sz1", "fuente-alimentacion-24v-sx8-sz1", "rele-estado-solido-sx8-sz1",
    "lampara-horno-sx8", "pantalla-hornos-sx8", "rele-intermedio-sx8", "valvula-solenoide-sx8",
    "cilindro-neumatico-sx8", "sensor-proximidad-sx8", "motor-paso-paso-sx8", "filtro-aire-sx8",
    'rodillo-cintas', 'filtro-hepa-sx8-sz1-tb', 'filtro-hepa-sx8-sz1-ta', 'filtro-carbon-sx8-sz1',
    'cojinete-f6904rs-sx8-sz1', 'cojinete-f6901rs-sx8-sz1', 'fuente-alimentacion-24v-sx8-sz1-b',
    'sensor-placa-calefactora-sx8-sz1', 'contactor-ca-220v-sx8-sz1', 'sensor-temperatura-sz1',
    'motor-deposito-polvo-sx8', 'rele-intermedio-24v-sz1'
];

idsToRemove.forEach(id => {
    const idStr = `"id": "${id}"`;
    let index = content.indexOf(idStr);
    while (index !== -1) {
        let start = -1;
        let bc = 0;
        for (let i = index; i >= 0; i--) {
            if (content[i] === '}') bc++;
            if (content[i] === '{') {
                if (bc === 0) { start = i; break; }
                bc--;
            }
        }
        if (start !== -1) {
            let ibc = 0;
            let end = -1;
            for (let i = start; i < content.length; i++) {
                if (content[i] === '{') ibc++;
                if (content[i] === '}') ibc--;
                if (ibc === 0) {
                    end = i + 1;
                    if (content[end] === ',') end++;
                    break;
                }
            }
            if (end !== -1) {
                content = content.slice(0, start) + content.slice(end);
            } else { break; }
        } else { break; }
        index = content.indexOf(idStr);
    }
});

// 2. Restore missing links
const chinelaSlug = "chinela-plancha-transfer-zapatillas";
content = content.replace(
    new RegExp(`("slug":\\s*"${chinelaSlug}"[\\s\\S]*?"accessories": \\[)`, 'g'),
    '$1\n      { "id": "plato-38x38-beinsen-chinela" },'
);
const mugPressSlugs = ["alina-plancha-para-tazas", "aruba-plancha-para-tazas", "sore-plancha-profesional-tazas"];
mugPressSlugs.forEach(slug => {
    content = content.replace(
        new RegExp(`("slug":\\s*"${slug}"[\\s\\S]*?"consumables": \\[)`, 'g'),
        '$1\n      { "id": "resistencia-tazas-11oz-a" },'
    );
});

// 3. Clean Malformed and Rare Images
const rareStrings = ['white-beinsen-logo', 'white-img', 'white-2019', 'transparent-sin_re'];
// This is more complex, I'll do it by finding all objects in the arrays
function cleanArrays() {
    const sections = [
        { start: 'const rawAccessoriesData: Accessory[] = [', end: '];' },
        { start: 'const rawConsumablesData: Consumable[] = [', end: '];' }
    ];
    sections.forEach(sec => {
        const startIdx = content.indexOf(sec.start);
        if (startIdx === -1) return;
        const contentStart = startIdx + sec.start.length;
        const endIdx = content.indexOf(sec.end, contentStart);
        const sectionContent = content.slice(contentStart, endIdx);
        let objects = [];
        let bc = 0, os = -1;
        for (let i = 0; i < sectionContent.length; i++) {
            if (sectionContent[i] === '{') { if (bc === 0) os = i; bc++; }
            else if (sectionContent[i] === '}') { bc--; if (bc === 0 && os !== -1) { objects.push(sectionContent.slice(os, i + 1)); os = -1; } }
        }
        const cleaned = objects.map(obj => {
            if (!obj.includes('"id":') || !obj.includes('"name":') || obj.includes('"name": {}')) return null;
            if (rareStrings.some(s => obj.includes(s))) return obj.replace(/"image":\s*"[^"]*"/, '"image": ""');
            return obj;
        }).filter(o => o !== null);
        const newSection = '\n  ' + cleaned.join(',\n  ') + '\n';
        content = content.slice(0, contentStart) + newSection + content.slice(endIdx);
    });
}
cleanArrays();

// 4. Update Galleries from 'galeria' folder
const machinesDir = path.join('public', 'products', 'maquinas');
const planchasRegex = /const rawPlanchasData: Plancha\[\] = \[([\s\S]*?)\];/;
const pMatch = content.match(planchasRegex);
if (pMatch) {
    const section = pMatch[1];
    const slugs = (section.match(/"slug":\s*"([^"]+)"/g) || []).map(sm => sm.match(/"slug":\s*"([^"]+)"/)[1]);
    slugs.forEach(slug => {
        const gallerySubDirPath = path.join(machinesDir, slug, 'galeria');
        if (fs.existsSync(gallerySubDirPath)) {
            const images = fs.readdirSync(gallerySubDirPath).filter(f => /\.(png|jpe?g|webp|avif)$/i.test(f)).map(f => `/products/maquinas/${slug}/galeria/${f}`);
            if (images.length > 0) {
                const galleryValue = JSON.stringify(images, null, 2).replace(/\n/g, '\n      ');
                const slugRegex = new RegExp(`({[^{}]*"slug":\\s*"${slug}"[^{}]*})`, 's');
                content = content.replace(slugRegex, (obj) => {
                    if (obj.includes('"gallery":')) return obj.replace(/"gallery":\s*\[[\s\S]*?\]/, `"gallery": ${galleryValue}`);
                    return obj.replace(/\s*}\s*$/, `,\n    "gallery": ${galleryValue}\n  }`);
                });
            }
        }
    });
}

content = content.replace(/,,/g, ',');
fs.writeFileSync(productsFilePath, content);
console.log("Ultimate cleanup finished successfully.");
