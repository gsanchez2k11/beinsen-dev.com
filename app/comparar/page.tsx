import type { Metadata } from "next";
import CompararClient from "./comparar-client";

export const metadata: Metadata = {
    title: "Comparar Planchas Transfer Profesionales | Beinsen",
    description: "Compara lado a lado las planchas transfer Beinsen: especificaciones técnicas, sistemas de apertura, temperaturas, potencia y precio. Encuentra la máquina ideal para tu producción.",
    alternates: {
        canonical: "https://beinsen.com/comparar",
    },
    openGraph: {
        title: "Comparar Planchas Transfer Profesionales | Beinsen",
        description: "Comparativa técnica de planchas transfer industriales. Especificaciones, apertura, temperatura y potencia en una sola vista.",
        url: "https://beinsen.com/comparar",
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
