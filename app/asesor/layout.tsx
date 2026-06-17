import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Asesor de Compra | Beinsen — Encuentra tu prensa transfer ideal",
    description: "Responde 4 preguntas rápidas y nuestro asesor te recomienda el modelo de prensa transfer Beinsen que mejor encaja con tu volumen de producción y formato.",
    alternates: {
        canonical: `${SITE_URL}/asesor`,
    },
    openGraph: {
        title: "Asesor de Compra | Beinsen",
        description: "Encuentra tu prensa transfer en 4 pasos. Recomendación personalizada según tu categoría, volumen y formato.",
        url: `${SITE_URL}/asesor`,
        siteName: "Beinsen",
        locale: "es_ES",
        type: "website",
    },
};

export default function AsesorLayout({ children }: { children: React.ReactNode }) {
    return children;
}
