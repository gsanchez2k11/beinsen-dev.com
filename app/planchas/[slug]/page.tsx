import { planchasData, allAccessoriesData } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/ProductDetailView";
import { getLocalized } from "@/lib/i18n";
import type { Metadata } from "next";

export function generateStaticParams() {
    return planchasData.map((plancha) => ({
        slug: plancha.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const plancha = planchasData.find((p) => p.slug === resolvedParams.slug);

    if (!plancha) {
        return {
            title: "Producto no encontrado | Beinsen",
        };
    }

    // Default to 'es' for metadata on server-side
    const name = getLocalized(plancha.name, 'es');
    const description = getLocalized(plancha.description, 'es') || "";

    return {
        title: `${name} | Planchas Profesionales Beinsen`,
        description: description.substring(0, 160) + "...",
        openGraph: {
            title: name,
            description: description.substring(0, 160) + "...",
            images: [plancha.image],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: name,
            description: description.substring(0, 160) + "...",
            images: [plancha.image],
        },
    };
}

export default async function PlanchaDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const plancha = planchasData.find((p) => p.slug === resolvedParams.slug);

    if (!plancha) {
        notFound();
    }

    const name = getLocalized(plancha.name, 'es');
    const description = getLocalized(plancha.description, 'es') || "";

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: name,
        image: plancha.image,
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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProductDetailView plancha={plancha} />
        </>
    );
}
