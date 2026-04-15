const fs = require('fs');

const content = fs.readFileSync('data/products.ts', 'utf8');

const jsonMatch = content.match(/export const planchasData: Plancha\[\] = (\[[\s\S]*?\]);/);
if (!jsonMatch) {
   console.log("Could not find json data");
   process.exit(1);
}

const products = JSON.parse(jsonMatch[1]);

// Filter out descatalogadas and non-products
const cleanProducts = products.filter(p => !p.name.toLowerCase().includes('descatalogada') && !p.name.toLowerCase().includes('garantía') && !p.name.toLowerCase().includes('donde comprar') && !p.name.toLowerCase().includes('mesa'));

cleanProducts.forEach(p => {
   let cat = 'Otras';
   const text = (p.name + " " + p.id).toLowerCase();

   if (text.includes('esparta') || text.includes('caen') || text.includes('trinidad') || text.includes('miranda') || text.includes('pocola') || text.includes('neumatica') || text.includes('termica') || text.includes('transfer')) {
      cat = 'Textil';
   }
   if (text.includes('taza') || text.includes('sore') || text.includes('alina') || text.includes('andra')) {
      cat = 'Tazas y Botellas';
   }
   if (text.includes('gorra') || text.includes('gante') || text.includes('obrei')) {
      cat = 'Gorras';
   }
   if (text.includes('espinillera') || text.includes('estambul') || text.includes('zapatilla') || text.includes('chinela') || text.includes('horno') || text.includes('plato') || text.includes('dorian') || text.includes('molde')) {
      cat = 'Especializadas';
   }
   if (text.includes('multifuncion') || text.includes('multifunción')) {
      cat = 'Multifunción';
   }

   // Default fallback
   if (cat === 'Otras') cat = 'Textil';

   p.category = cat;
});

const newInterface = `export interface Plancha { id: string; slug: string; name: string; description: string; image: string; size: string; price: number | string; category: string; features: string[]; accessories: Accessory[]; }`;

const newContent = content.replace(/export interface Plancha \{.*?\}/, newInterface)
   .replace(/export const planchasData: Plancha\[\] = \[[\s\S]*?\];/, `export const planchasData: Plancha[] = ${JSON.stringify(cleanProducts, null, 2)};`);

fs.writeFileSync('data/products.ts', newContent);
console.log('Categories structured and cleaned. Total products: ' + cleanProducts.length);
