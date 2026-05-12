import type { Metadata } from "next";
import PlanchasClient from "./planchas-client";

export const metadata: Metadata = {
    title: "Catálogo de Planchas Transfer y Prensas Térmicas Industriales | Beinsen",
    description: "Catálogo completo de planchas transfer profesionales: sublimación textil, tazas, gorras, DTF y vinilo. Máquinas industriales y accesorios originales Beinsen. Solicita presupuesto.",
    alternates: {
        canonical: "https://beinsen.com/planchas",
    },
    openGraph: {
        title: "Catálogo Planchas Transfer Industriales | Beinsen",
        description: "Catálogo completo: planchas transfer para sublimación textil, tazas, gorras y DTF. Equipos industriales y accesorios originales.",
        url: "https://beinsen.com/planchas",
        siteName: "Beinsen",
        images: [
            {
                url: "https://beinsen.com/brand/og-catalog.jpg",
                width: 1200,
                height: 630,
                alt: "Catálogo Beinsen — Planchas Transfer Profesionales",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Catálogo Planchas Transfer Industriales | Beinsen",
        description: "Planchas transfer para sublimación, DTF y vinilo textil. Equipos industriales.",
        images: ["https://beinsen.com/brand/og-catalog.jpg"],
    },
};

export default function PlanchasCatalogPage() {
    return <PlanchasClient />;
}
