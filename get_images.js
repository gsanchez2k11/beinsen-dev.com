const mysql = require('mysql2/promise');
const fs = require('fs');

async function main() {
    const connection = await mysql.createConnection({
        host: '85.31.237.181',
        user: 'blaBstRadEbI',
        password: 'Up6x9-=YDQ0n',
        database: 'wordpress_8'
    });

    const [rows] = await connection.execute(`
        SELECT p.post_name, pm.meta_value as thumbnail_id, att.guid as image_url
        FROM Q2erkm_posts p
        LEFT JOIN Q2erkm_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_thumbnail_id'
        LEFT JOIN Q2erkm_posts att ON pm.meta_value = att.ID
        WHERE p.post_status='publish' AND p.post_type='page'
    `);

    const keywords = ['plancha', 'prensa', 'estación', 'estacion', 'horno', 'andra', 'caen', 'obrei', 'dorian', 'alina', 'sore', 'trinidad', 'miranda', 'estambul', 'pocola', 'gante'];
    const products = rows.filter(r => keywords.some(k => r.post_name.toLowerCase().includes(k)) || keywords.some(k => r.post_name.toLowerCase() === k));

    const imageMap = {};
    for (const p of products) {
        if (p.image_url) {
            imageMap[p.post_name] = p.image_url;
        }
    }

    console.log(JSON.stringify(imageMap, null, 2));
    process.exit(0);
}
main().catch(console.error);
