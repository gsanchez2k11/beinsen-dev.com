import { MetadataRoute } from 'next'
import { planchasData, allAccessoriesData, allConsumablesData } from '@/data/products'
import { getArticleSlugs, getArticle } from '@/lib/articles'
import { storiesData } from '@/data/stories'
import { SITE_URL } from '@/lib/site'

const BASE_URL = SITE_URL

export default function sitemap(): MetadataRoute.Sitemap {
    // lastModified dinamico: usa la fecha del build/deploy. Asi Google ve la
    // web siempre fresca en cada deploy en vez de un '2025-05-01' rancio.
    const now = new Date()

    // Static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/catalogo`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/accesorios`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/aprende`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contacto`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/casos-exito`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/comparar`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/asesor`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        // Páginas legales se sirven con robots:noindex (ver layout) y se omiten del sitemap
    ]

    // Product detail pages (planchas + accessories + consumables all use /catalogo/[slug])
    const allProducts = [
        ...planchasData,
        ...allAccessoriesData,
        ...allConsumablesData,
    ]

    const productRoutes: MetadataRoute.Sitemap = allProducts.map((product) => ({
        url: `${BASE_URL}/catalogo/${product.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Blog articles: si tienen publishedAt usamos esa fecha (es la verdadera);
    // si no, fallback a la fecha del deploy
    const articleSlugs = getArticleSlugs()
    const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map((slug) => {
        const article = getArticle(slug)
        return {
            url: `${BASE_URL}/aprende/${slug}`,
            lastModified: article?.publishedAt ? new Date(article.publishedAt) : now,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }
    })

    // Case study individual pages: fecha del propio caso (año)
    const storyRoutes: MetadataRoute.Sitemap = storiesData.map((story) => ({
        url: `${BASE_URL}/casos-exito/${story.slug}`,
        lastModified: new Date(`${story.year}-12-31`),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
    }))

    return [...staticRoutes, ...productRoutes, ...articleRoutes, ...storyRoutes]
}
