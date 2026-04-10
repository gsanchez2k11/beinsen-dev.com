const mysql = require('mysql2/promise');
const cheerio = require('cheerio');
const fs = require('fs');

async function main() {
    const connection = await mysql.createConnection({
        host: '85.31.237.181',
        user: 'blaBstRadEbI',
        password: 'Up6x9-=YDQ0n',
        database: 'wordpress_8'
    });

    const [rows] = await connection.execute(`
    SELECT post_name, post_title 
    FROM Q2erkm_posts 
    WHERE post_status='publish' AND post_type='page';
  `);

    const keywords = ['plancha', 'prensa', 'estación', 'estacion', 'horno', 'andra', 'caen', 'obrei', 'dorian', 'alina', 'sore'];
    const products = rows.filter(r => keywords.some(k => r.post_title.toLowerCase().includes(k)) && !r.post_title.toLowerCase().includes('english') && !r.post_title.toLowerCase().includes('português'));

    console.log(`Found ${products.length} potential product pages based on keywords.`);
    const catalog = [];

    for (const page of products) {
        console.log("Fetching...", page.post_name);
        try {
            const res = await fetch(`https://beinsen.com/${page.post_name}`);
            const text = await res.text();
            const $ = cheerio.load(text);

            const title = page.post_title;
            const images = [];
            $('img').each((i, el) => images.push($(el).attr('src')));

            const content = $('p').map((i, el) => $(el).text()).get().filter(t => t.length > 20).join(' ');

            catalog.push({
                id: page.post_name,
                name: title,
                description: content.substring(0, 250).trim() + "...",
                image: images.find(src => src && src.includes('wp-content/uploads')) || 'https://images.unsplash.com/photo-1590249257692-a162df94afff',
                price: 'Consultar PVP',
                slug: page.post_name,
                size: 'Estándar',
                features: content.split('.').map(s => s.trim()).filter(s => s.length > 10).slice(0, 4),
                accessories: []
            });
        } catch (e) {
            console.log("Failed", page.post_name);
        }
    }

    fs.writeFileSync('data/scraped_products.json', JSON.stringify(catalog, null, 2));
    console.log("Done! Written to data/scraped_products.json");
    process.exit(0);
}
main();
