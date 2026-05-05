const fs = require('fs');
let c = fs.readFileSync('data/products.ts', 'utf8');
const searchStr = `"storySegments": [
      {
        "title": { "es": "Rendimiento profesional", "en": "Professional performance" },
        "description": { "es": "Aruba Plancha Para Tazas ha sido diseñada para ofrecer resultados consistentes y alta productividad.", "en": "Aruba Mug Heat Press is designed to deliver consistent results and high productivity." },
        "image": "/products/maquinas/aruba-plancha-para-tazas/03.png"
      }
    ],`;
c = c.replace(searchStr, '');
fs.writeFileSync('data/products.ts', c);
