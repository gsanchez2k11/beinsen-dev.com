import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArticleCategory = "guias" | "tecnica" | "mantenimiento" | "troubleshooting" | "novedades";

export interface ArticleFrontmatter {
    title: string;
    excerpt: string;
    category: ArticleCategory;
    heroImage?: string;
    videoUrl?: string;
    author?: string;
    authorRole?: string;
    publishedAt: string;  // ISO date
    products?: string[];  // slugs of related products
    downloads?: string[]; // slugs to map to public/manuales/<slug>/
    readingMinutes?: number;
}

export interface Article extends ArticleFrontmatter {
    slug: string;
    content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "aprende");

export function getArticleSlugs(): string[] {
    if (!fs.existsSync(CONTENT_DIR)) return [];
    return fs.readdirSync(CONTENT_DIR)
        .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
        .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getArticle(slug: string): Article | null {
    const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
    const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
    const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
    if (!filePath) return null;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const fm = data as ArticleFrontmatter;

    // Auto reading minutes if missing (~200 wpm)
    const readingMinutes = fm.readingMinutes ?? Math.max(1, Math.round(content.split(/\s+/).length / 200));

    return { ...fm, readingMinutes, slug, content };
}

export function getAllArticles(): Article[] {
    return getArticleSlugs()
        .map((s) => getArticle(s))
        .filter((a): a is Article => a !== null)
        .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getArticlesByProduct(productSlug: string): Article[] {
    return getAllArticles().filter((a) => a.products?.includes(productSlug));
}

export const CATEGORY_LABELS: Record<ArticleCategory, { es: string; en: string }> = {
    guias: { es: "Guías", en: "Guides" },
    tecnica: { es: "Técnica", en: "Technical" },
    mantenimiento: { es: "Mantenimiento", en: "Maintenance" },
    troubleshooting: { es: "Resolución de problemas", en: "Troubleshooting" },
    novedades: { es: "Novedades", en: "News" },
};
