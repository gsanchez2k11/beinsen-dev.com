import type { Metadata } from "next";
import AccesoriosClient from "./accesorios-client";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Accesorios para Prensas Transfer Profesionales | Beinsen",
    description: "Accesorios originales Beinsen para planchas transfer: almohadillas, adaptadores y componentes de repuesto certificados para sublimación y DTF. Compatibilidad garantizada.",
    alternates: {
        canonical: `${SITE_URL}/accesorios`,
    },
    openGraph: {
        title: "Accesorios Originales para Prensas Transfer | Beinsen",
        description: "Accesorios y componentes originales Beinsen para planchas transfer profesionales. Compatibilidad certificada.",
        url: `${SITE_URL}/accesorios`,
        siteName: "Beinsen",
        // images dinámicas vía app/accesorios/opengraph-image.tsx
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Accesorios Originales para Prensas Transfer | Beinsen",
        description: "Accesorios y componentes originales para equipos Beinsen. Compatibilidad certificada.",
    },
};

export default function AccessoriesCatalogPage() {
    return <AccesoriosClient />;
}
