import type { Metadata } from "next";
import CompararClient from "./comparar-client";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Comparar Planchas Transfer Profesionales | Beinsen",
    description: "Compara lado a lado las planchas transfer Beinsen: especificaciones técnicas, sistemas de apertura, temperaturas, potencia y precio. Encuentra la máquina ideal para tu producción.",
    alternates: {
        canonical: `${SITE_URL}/comparar`,
    },
    openGraph: {
        title: "Comparar Planchas Transfer Profesionales | Beinsen",
        description: "Comparativa técnica de planchas transfer industriales. Especificaciones, apertura, temperatura y potencia en una sola vista.",
        url: `${SITE_URL}/comparar`,
        siteName: "Beinsen",
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Comparar Planchas Transfer | Beinsen",
        description: "Comparativa técnica de planchas transfer industriales Beinsen.",
    },
};

export default function CompararPage() {
    return <CompararClient />;
}
