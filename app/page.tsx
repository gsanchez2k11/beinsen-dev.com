import type { Metadata } from "next";
import HomeClient from "./home-client";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
    title: "Beinsen | Fabricante de Planchas Transfer y Prensas Térmicas Profesionales",
    description: "Fabricante líder de planchas transfer y prensas térmicas industriales para sublimación, DTF y vinilo textil. Calidad certificada, presencia en 50+ países. Solicita presupuesto.",
    alternates: {
        canonical: "https://beinsen.com",
    },
    openGraph: {
        title: "Beinsen | Fabricante de Planchas Transfer Profesionales",
        description: "Planchas transfer e industriales para sublimación, DTF y vinilo textil. Más de 50 países. Solicita presupuesto.",
        url: "https://beinsen.com",
        siteName: "Beinsen",
        images: [
            {
                url: "https://beinsen.com/brand/og-home.jpg",
                width: 1200,
                height: 630,
                alt: "Beinsen — Planchas Transfer Industriales",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Beinsen | Fabricante de Planchas Transfer Profesionales",
        description: "Planchas transfer e industriales para sublimación, DTF y vinilo textil. Más de 50 países.",
        images: ["https://beinsen.com/brand/og-home.jpg"],
    },
};

export default function Home() {
    const articles = getAllArticles().slice(0, 3);
    return <HomeClient articles={articles} />;
}
