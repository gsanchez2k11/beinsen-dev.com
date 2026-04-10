const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, 'data', 'products.ts');
const imagesFilePath = path.join(__dirname, 'product_images.json');

const images = JSON.parse(fs.readFileSync(imagesFilePath, 'utf8'));
let productData = fs.readFileSync(productsFilePath, 'utf8');

// Replace image URLs for matches
for (const [slug, imageUrl] of Object.entries(images)) {
    // Escape slug for regex
    const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // We want to find the block of the specific slug and update its image field.
    // A regex to match the product object roughly:
    const regex = new RegExp(`"slug":\\s*"${escapedSlug}",([^}]*?)"image":\\s*"[^"]+"`, 'g');

    // Alternatively, a simpler approach is to find the index of the slug, then find the image property around it
    // But since the order might be different, let's use a replacer function on the whole text by parsing it
}

// Since it's a TS file containing an array, we can find the start of the array and the end, parse it, update it, and stringify it.
// However, trailing commas or comments might break JSON.parse. 
// A safer regex replacement:
// Match an object within the planchasData array.
const updatedData = productData.replace(/(\{\s*"id"[^}]+\})/g, (match) => {
    try {
        // Find if this object has a slug we know
        const slugMatch = match.match(/"slug"\s*:\s*"([^"]+)"/);
        if (slugMatch && images[slugMatch[1]]) {
            const newImage = images[slugMatch[1]];
            // Replace the image URL
            return match.replace(/"image"\s*:\s*"([^"]+)"/, `"image": "${newImage}"`);
        }
    } catch (e) { }
    return match;
});

fs.writeFileSync(productsFilePath, updatedData, 'utf8');
console.log('Finished updating images in products.ts');
