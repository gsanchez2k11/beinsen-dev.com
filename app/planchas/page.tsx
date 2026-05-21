import type { Metadata } from "next";
import PlanchasClient from "./planchas-client";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Catálogo de Planchas Transfer y Prensas Térmicas Industriales | Beinsen",
    description: "Catálogo completo de planchas transfer profesionales: sublimación textil, tazas, gorras, DTF y vinilo. Máquinas industriales y accesorios originales Beinsen. Solicita presupuesto.",
    alternates: {
        canonical: `${SITE_URL}/planchas`,
    },
    openGraph: {
        title: "Catálogo Planchas Transfer Industriales | Beinsen",
        description: "Catálogo completo: planchas transfer para sublimación textil, tazas, gorras y DTF. Equipos industriales y accesorios originales.",
        url: `${SITE_URL}/planchas`,
        siteName: "Beinsen",
        // images dinámicas vía app/planchas/opengraph-image.tsx
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Catálogo Planchas Transfer Industriales | Beinsen",
        description: "Planchas transfer para sublimación, DTF y vinilo textil. Equipos industriales.",
    },
};

export default function PlanchasCatalogPage() {
    return <PlanchasClient />;
}
