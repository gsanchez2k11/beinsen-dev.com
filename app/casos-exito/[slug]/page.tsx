import { storiesData } from "@/data/stories";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import StoryDetailClient from "./story-client";

const BASE_URL = "https://beinsen.com";

export function generateStaticParams() {
    return storiesData.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const story = storiesData.find((s) => s.slug === params.slug);
    if (!story) return {};

    const title = story.title.es;
    const description = `${story.challenge.es} ${story.solution.es}`.slice(0, 155);
    const url = `${BASE_URL}/casos-exito/${story.slug}`;
    const imageUrl = story.mainImage.startsWith("http")
        ? story.mainImage
        : `${BASE_URL}${story.mainImage}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
        },
        twitter: { card: "summary_large_image", title, description },
    };
}

export default function CasoExitoPage({ params }: { params: { slug: string } }) {
    const story = storiesData.find((s) => s.slug === params.slug);
    if (!story) notFound();

    const imageUrl = story.mainImage.startsWith("http")
        ? story.mainImage
        : `${BASE_URL}${story.mainImage}`;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: story.title.es,
        description: story.challenge.es,
        datePublished: `${story.year}-01-01`,
        dateModified: `${story.year}-12-31`,
        author: {
            "@type": "Organization",
            name: "Beinsen",
            url: BASE_URL,
        },
        publisher: {
            "@type": "Organization",
            name: "Beinsen",
            logo: { "@type": "ImageObject", url: `${BASE_URL}/brand/logo.png` },
        },
        image: imageUrl,
        url: `${BASE_URL}/casos-exito/${story.slug}`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/casos-exito/${story.slug}`,
        },
        about: {
            "@type": "Organization",
            name: story.client,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <StoryDetailClient story={story} />
        </>
    );
}
