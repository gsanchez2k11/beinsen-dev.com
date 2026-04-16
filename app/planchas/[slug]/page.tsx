import { planchasData, allAccessoriesData, allConsumablesData } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/ProductDetailView";
import { getLocalized } from "@/lib/i18n";
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
    const item = [...planchasData, ...allAccessoriesData, ...allConsumablesData].find((p) => p.slug === resolvedParams.slug);

    if (!item) {
        return {
            title: "Producto no encontrado | Beinsen",
        };
    }

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
    const item = [...planchasData, ...allAccessoriesData, ...allConsumablesData].find((p) => p.slug === resolvedParams.slug);

    if (!item) {
        notFound();
    }

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

    const fullAccessories = getFullItemData((item as any).accessories || [], allAccessoriesData);
    const fullConsumables = getFullItemData((item as any).consumables || [], allConsumablesData);

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
            />
        </>
    );
}
