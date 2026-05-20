import { planchasData, allPlanchasData, allAccessoriesData, allConsumablesData } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/ProductDetailView";
import { CatalogProductCard } from "@/components/CatalogProductCard";
import { getLocalized } from "@/lib/i18n";
import { enrichWithLocalImages } from "@/lib/productImages";
import { enrichWithLocalDownloads } from "@/lib/productDownloads";
import { getArticlesByProduct } from "@/lib/articles";
import Link from "next/link";
import { BookOpen, ArrowRight, Zap } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
    const allSlugs = [
        ...planchasData.map(p => ({ slug: p.slug })),
        ...allAccessoriesData.filter(a => a.slug).map(a => ({ slug: a.slug as string })),
        ...allConsumablesData.filter(c => c.slug).map(c => ({ slug: c.slug as string }))
    ];
    return allSlugs;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const rawItem = [...allPlanchasData, ...allAccessoriesData, ...allConsumablesData].find((p) => p.slug === resolvedParams.slug);

    if (!rawItem) {
        return { title: "Producto no encontrado | Beinsen" };
    }

    const item = enrichWithLocalImages(rawItem as any);
    const name = getLocalized(item.name as any, 'es');
    const description = getLocalized(item.description as any, 'es') || "";
    const rawDesc = description.length > 155 ? description.substring(0, 155) + "…" : description;
    const category = getLocalized((rawItem as any).category as any, 'es') || "";
    const titleSuffix = category ? ` — ${category} | Beinsen` : " | Beinsen";
    const ogImage = item.image || "https://beinsen.com/brand/og-home.jpg";

    const url = `https://beinsen.com/planchas/${resolvedParams.slug}`;
    return {
        title: `${name}${titleSuffix}`,
        description: rawDesc,
        alternates: {
            canonical: url,
            languages: {
                es: url,
                en: url,
                pt: url,
                it: url,
                "x-default": url,
            },
        },
        openGraph: {
            title: `${name} — ${category || "Beinsen"}`,
            description: rawDesc,
            url: `https://beinsen.com/planchas/${resolvedParams.slug}`,
            images: [{ url: ogImage, width: 1200, height: 630, alt: name }],
            type: "website",
            siteName: "Beinsen",
        },
        twitter: {
            card: "summary_large_image",
            title: `${name} — ${category || "Beinsen"}`,
            description: rawDesc,
            images: [ogImage],
        },
    };
}

export default async function PlanchaDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const rawItem = [...allPlanchasData, ...allAccessoriesData, ...allConsumablesData].find((p) => p.slug === resolvedParams.slug);

    if (!rawItem || (rawItem as any).hidden) {
        notFound();
    }

    const kind: "planchas" | "accessories" | "consumables" =
        planchasData.some(p => p.slug === resolvedParams.slug) ? "planchas"
        : allAccessoriesData.some(a => a.slug === resolvedParams.slug) ? "accessories"
        : "consumables";

    const item = enrichWithLocalDownloads(enrichWithLocalImages(rawItem as any));

    const name = getLocalized(item.name as any, 'es');
    const description = getLocalized(item.description as any, 'es') || "";

    const category = getLocalized((rawItem as any).category as any, 'es') || "";
    const productUrl = `https://beinsen.com/planchas/${resolvedParams.slug}`;

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        image: item.image ? [item.image] : [],
        description,
        sku: (rawItem as any).reference || resolvedParams.slug,
        brand: { '@type': 'Brand', name: 'Beinsen' },
        manufacturer: { '@type': 'Organization', name: 'Beinsen', url: 'https://beinsen.com' },
        category,
        url: productUrl,
        offers: {
            '@type': 'Offer',
            url: productUrl,
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', name: 'Beinsen', url: 'https://beinsen.com' },
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://beinsen.com' },
            { '@type': 'ListItem', position: 2, name: 'Catálogo', item: 'https://beinsen.com/planchas' },
            { '@type': 'ListItem', position: 3, name, item: productUrl },
        ],
    };

    const jsonLd = [productSchema, breadcrumbSchema];

    const getFullItemData = (items: { id: string, price?: number | string }[], source: any[]) => {
        return items
            .map(item => {
                const fullData = source.find(s => s.id === item.id);
                if (!fullData) return null;
                return {
                    ...fullData,
                    price: item.price || fullData.price || "Consultar PVP"
                } as any;
            })
            .filter((item): item is any => item !== null);
    };

    const fullAccessories = getFullItemData((item as any).accessories || [], allAccessoriesData).map((a: any) => enrichWithLocalImages(a));
    const fullConsumables = getFullItemData((item as any).consumables || [], allConsumablesData).map((c: any) => enrichWithLocalImages(c));

    const relatedArticles = getArticlesByProduct(resolvedParams.slug).slice(0, 3);

    // Similar machines (same category, exclude current)
    const similarMachines = kind === "planchas"
        ? planchasData
            .filter(p =>
                p.slug !== resolvedParams.slug &&
                getLocalized((p as any).category as any, 'es') === category
            )
            .slice(0, 4)
            .map(p => enrichWithLocalImages(p as any))
        : [];

    // Find compatible machines for accessories/consumables
    const compatiblePlanchas = kind !== "planchas" 
        ? allPlanchasData.filter(p => 
            p.accessories?.some(a => a.id === rawItem.id) || 
            p.consumables?.some(c => c.id === rawItem.id)
          ).map(p => enrichWithLocalImages(p))
        : [];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* @ts-ignore - Support both Plancha and CompatibleItem */}
            <ProductDetailView
                plancha={item as any}
                fullAccessories={fullAccessories}
                fullConsumables={fullConsumables}
                compatiblePlanchas={compatiblePlanchas}
                kind={kind}
            />

            {relatedArticles.length > 0 && (
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <BookOpen size={20} className="text-[#FF6600]" />
                        <h3 className="text-sm font-black uppercase tracking-[0.3em]">Aprende sobre este producto</h3>
                        <div className="h-px flex-1 bg-border/40" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedArticles.map((a) => (
                            <Link
                                key={a.slug}
                                href={`/aprende/${a.slug}`}
                                className="group p-6 bg-card border border-border/40 rounded-3xl hover:border-[#FF6600]/40 transition-all flex flex-col gap-3"
                            >
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6600]">{a.category}</span>
                                <h4 className="font-black text-lg group-hover:text-[#FF6600] transition-colors leading-tight">{a.title}</h4>
                                <p className="text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                                <span className="inline-flex items-center gap-2 text-[#FF6600] text-xs font-black uppercase tracking-widest mt-auto pt-2">
                                    Leer <ArrowRight size={12} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {similarMachines.length > 0 && (
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                    <div className="flex items-center gap-4 mb-10">
                        <Zap size={20} className="text-[#FF6600]" />
                        <h3 className="text-sm font-black uppercase tracking-[0.3em]">También te puede interesar</h3>
                        <div className="h-px flex-1 bg-border/40" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {similarMachines.map((p: any, i: number) => (
                            <CatalogProductCard key={p.id} item={p} locale="es" index={i} isFeatureCard={false} />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}
