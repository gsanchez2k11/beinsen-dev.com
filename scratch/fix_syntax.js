const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix the missing "}," between features and accessories
// Matches: ] followed by newline and then "accessories":
content = content.replace(/\]\n(\s+)"accessories":/g, `]\n    },\n$1"accessories":`);

// Also fix if there's no newline (unlikely but to be safe)
content = content.replace(/\]\s+"accessories":/g, `]\n    },\n    "accessories":`);

fs.writeFileSync(filePath, content);
console.log('Successfully repaired product syntax.');
