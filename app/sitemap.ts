import { MetadataRoute } from 'next'
import { planchasData, allAccessoriesData, allConsumablesData } from '@/data/products'
import { getArticleSlugs, getArticle } from '@/lib/articles'
import { storiesData } from '@/data/stories'

const BASE_URL = 'https://beinsen.com'

export default function sitemap(): MetadataRoute.Sitemap {
    // Static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date('2025-05-01'),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/planchas`,
            lastModified: new Date('2025-05-01'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/accesorios`,
            lastModified: new Date('2025-05-01'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/aprende`,
            lastModified: new Date('2025-05-01'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contacto`,
            lastModified: new Date('2025-05-01'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/casos-exito`,
            lastModified: new Date('2025-05-01'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/comparar`,
            lastModified: new Date('2025-05-01'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/asesor`,
            lastModified: new Date('2025-05-01'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/soporte`,
            lastModified: new Date('2025-05-01'),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/privacidad`,
            lastModified: new Date('2025-01-01'),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${BASE_URL}/legal`,
            lastModified: new Date('2025-01-01'),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${BASE_URL}/condiciones`,
            lastModified: new Date('2025-01-01'),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
    ]

    // Product detail pages (planchas + accessories + consumables all use /planchas/[slug])
    const allProducts = [
        ...planchasData,
        ...allAccessoriesData,
        ...allConsumablesData,
    ]

    const productRoutes: MetadataRoute.Sitemap = allProducts.map((product) => ({
        url: `${BASE_URL}/planchas/${product.slug}`,
        lastModified: new Date('2025-05-01'),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Blog articles
    const articleSlugs = getArticleSlugs()
    const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map((slug) => {
        const article = getArticle(slug)
        return {
            url: `${BASE_URL}/aprende/${slug}`,
            lastModified: article?.publishedAt ? new Date(article.publishedAt) : new Date('2025-05-01'),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }
    })

    // Case study individual pages
    const storyRoutes: MetadataRoute.Sitemap = storiesData.map((story) => ({
        url: `${BASE_URL}/casos-exito/${story.slug}`,
        lastModified: new Date(`${story.year}-12-31`),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
    }))

    return [...staticRoutes, ...productRoutes, ...articleRoutes, ...storyRoutes]
}
