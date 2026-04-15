const mysql = require('mysql2/promise');

async function main() {
    try {
        const connection = await mysql.createConnection({
            host: '85.31.237.181',
            user: 'blaBstRadEbI',
            password: 'Up6x9-=YDQ0n',
            database: 'wordpress_8'
        });

        console.log("Connected to MySQL!");

        const [rows] = await connection.execute(`
      SELECT ID, post_title, post_content
      FROM Q2erkm_posts
      WHERE post_title LIKE '%Andra%' AND post_status='publish';
    `);
        console.log("Post:", rows[0] ? rows[0].post_title : "Not found", "Content length:", rows[0] ? rows[0].post_content.length : 0);

        if (rows[0]) {
            const [meta] = await connection.execute(`
        SELECT meta_key, LENGTH(meta_value) as len
        FROM Q2erkm_postmeta
        WHERE post_id = ?
        ORDER BY len DESC
        LIMIT 10;
      `, [rows[0].ID]);
            console.log("Top metadata for this post:", meta);
        }

        await connection.end();
    } catch (err) {
        console.error("Database connection failed:", err.message);
    }
}

main();
