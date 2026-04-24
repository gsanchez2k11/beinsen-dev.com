import { planchasData, allPlanchasData, allAccessoriesData, allConsumablesData } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/ProductDetailView";
import { getLocalized } from "@/lib/i18n";
import { enrichWithLocalImages } from "@/lib/productImages";
import { enrichWithLocalDownloads } from "@/lib/productDownloads";
import { getArticlesByProduct } from "@/lib/articles";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
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
        return {
            title: "Producto no encontrado | Beinsen",
        };
    }

    const item = enrichWithLocalImages(rawItem as any);

    // Default to 'es' for metadata on server-side
    const name = getLocalized(item.name as any, 'es');
    const description = getLocalized(item.description as any, 'es') || "";

    return {
        title: `${name} | Beinsen`,
        description: description.substring(0, 160) + "...",
        openGraph: {
            title: name,
            description: description.substring(0, 160) + "...",
            images: [item.image || '/logo.png'],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: name,
            description: description.substring(0, 160) + "...",
            images: [item.image || '/logo.png'],
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

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: name,
        image: item.image,
        description: description,
        brand: {
            '@type': 'Brand',
            name: 'Beinsen'
        },
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
        }
    };

    const getFullItemData = (items: { id: string, price?: number | string }[], source: any[]) => {
        return items.map(item => {
            const fullData = source.find(s => s.id === item.id);
            return {
                ...fullData,
                price: item.price || fullData?.price || "Consultar PVP"
            } as any;
        });
    };

    const fullAccessories = getFullItemData((item as any).accessories || [], allAccessoriesData).map((a: any) => enrichWithLocalImages(a));
    const fullConsumables = getFullItemData((item as any).consumables || [], allConsumablesData).map((c: any) => enrichWithLocalImages(c));

    const relatedArticles = getArticlesByProduct(resolvedParams.slug).slice(0, 3);

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
        </>
    );
}
