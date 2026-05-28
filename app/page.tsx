import type { Metadata } from "next";
import HomeClient from "./home-client";
import { getAllArticles } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Beinsen | Fabricante de Prensas Transfer y Prensas Térmicas Profesionales",
    description: "Fabricante líder de planchas transfer y prensas térmicas industriales para sublimación, DTF y vinilo textil. Calidad certificada, presencia en 50+ países. Solicita presupuesto.",
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        title: "Beinsen | Fabricante de Prensas Transfer Profesionales",
        description: "Prensas transfer e industriales para sublimación, DTF y vinilo textil. Más de 50 países. Solicita presupuesto.",
        url: SITE_URL,
        siteName: "Beinsen",
        // images se generan dinámicamente vía app/opengraph-image.tsx
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Beinsen | Fabricante de Prensas Transfer Profesionales",
        description: "Prensas transfer e industriales para sublimación, DTF y vinilo textil. Más de 50 países.",
        // images se generan dinámicamente vía app/twitter-image.tsx (fallback al OG)
    },
};

export default function Home() {
    const articles = getAllArticles().slice(0, 3);
    return <HomeClient articles={articles} />;
}
