const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define standard accessories and consumables
const standardAccessories = [
  { "id": "mesa-trinidad" },
  { "id": "laser-posicionamiento" }
];
const standardConsumables = [
  { "id": "teflon-40x50" },
  { "id": "neopreno-base" },
  { "id": "limpiador-plato" }
];

// Regular expression to find blocks in rawPlanchasData
// This is tricky because it's TypeScript code, not pure JSON.
// But we know the structure of the objects.

// We will target specific common IDs used in Machines if helpful, 
// or just look for "accessories": [] 

const accessoriesBlock = `"accessories": [\n      { "id": "mesa-trinidad" },\n      { "id": "laser-posicionamiento" }\n    ]`;
const consumablesBlock = `"consumables": [\n      { "id": "teflon-40x50" },\n      { "id": "neopreno-base" },\n      { "id": "limpiador-plato" }\n    ]`;

// Let's perform a smart replacement for "accessories": []
// If it's empty, we replace it. 
// We should also check if "consumables" exists right after.

// This regex targets "accessories": [] followed by "category" or "consumables"
// and replaces it with the full set.
content = content.replace(/"accessories": \[\],(\s+)"category":/g, 
  `"accessories": [\n      { "id": "mesa-trinidad" },\n      { "id": "laser-posicionamiento" }\n    ],\n    "consumables": [\n      { "id": "teflon-40x50" },\n      { "id": "neopreno-base" },\n      { "id": "limpiador-plato" }\n    ],\n$1"category":`);

// Also fix cases where consumables might be there but empty or partial
content = content.replace(/"accessories": \[\],(\s+)"consumables": \[([\s\S]*?)\]/g, 
  `"accessories": [\n      { "id": "mesa-trinidad" },\n      { "id": "laser-posicionamiento" }\n    ],\n    "consumables": [\n      { "id": "teflon-40x50" },\n      { "id": "neopreno-base" },\n      { "id": "limpiador-plato" }\n    ]`);

fs.writeFileSync(filePath, content);
console.log('Successfully updated product ecosystem.');
