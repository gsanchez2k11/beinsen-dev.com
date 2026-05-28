import type { Metadata } from "next";
import CatalogoClient from "./catalogo-client";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Catálogo de Planchas Transfer y Prensas Térmicas Industriales | Beinsen",
    description: "Catálogo completo de planchas transfer profesionales: sublimación textil, tazas, gorras, DTF y vinilo. Máquinas industriales y accesorios originales Beinsen. Solicita presupuesto.",
    alternates: {
        canonical: `${SITE_URL}/catalogo`,
    },
    openGraph: {
        title: "Catálogo Planchas Transfer Industriales | Beinsen",
        description: "Catálogo completo: planchas transfer para sublimación textil, tazas, gorras y DTF. Equipos industriales y accesorios originales.",
        url: `${SITE_URL}/catalogo`,
        siteName: "Beinsen",
        // images dinámicas vía app/catalogo/opengraph-image.tsx
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Catálogo Planchas Transfer Industriales | Beinsen",
        description: "Planchas transfer para sublimación, DTF y vinilo textil. Equipos industriales.",
    },
};

export default function CatalogoPage() {
    return <CatalogoClient />;
}
