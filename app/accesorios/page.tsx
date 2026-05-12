import type { Metadata } from "next";
import AccesoriosClient from "./accesorios-client";

export const metadata: Metadata = {
    title: "Accesorios para Planchas Transfer Profesionales | Beinsen",
    description: "Accesorios originales Beinsen para planchas transfer: almohadillas, adaptadores y componentes de repuesto certificados para sublimación y DTF. Compatibilidad garantizada.",
    alternates: {
        canonical: "https://beinsen.com/accesorios",
    },
    openGraph: {
        title: "Accesorios Originales para Planchas Transfer | Beinsen",
        description: "Accesorios y componentes originales Beinsen para planchas transfer profesionales. Compatibilidad certificada.",
        url: "https://beinsen.com/accesorios",
        siteName: "Beinsen",
        images: [
            {
                url: "https://beinsen.com/brand/og-accesorios.jpg",
                width: 1200,
                height: 630,
                alt: "Accesorios Beinsen para Planchas Transfer",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Accesorios Originales para Planchas Transfer | Beinsen",
        description: "Accesorios y componentes originales para equipos Beinsen. Compatibilidad certificada.",
        images: ["https://beinsen.com/brand/og-accesorios.jpg"],
    },
};

export default function AccessoriesCatalogPage() {
    return <AccesoriosClient />;
}
