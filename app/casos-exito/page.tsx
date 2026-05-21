import type { Metadata } from "next";
import CasosExitoClient from "./casos-exito-client";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Casos de Éxito — Planchas Transfer Beinsen en el Mundo | Beinsen",
    description: "Descubre cómo talleres y empresas de personalización en 50+ países han escalado su producción con planchas transfer Beinsen. Resultados reales, casos verificados.",
    alternates: {
        canonical: `${SITE_URL}/casos-exito`,
    },
    openGraph: {
        title: "Casos de Éxito — Beinsen en el Mundo",
        description: "Talleres y empresas de 50+ países confían en Beinsen para su producción de sublimación y transfer textil. Casos reales.",
        url: `${SITE_URL}/casos-exito`,
        siteName: "Beinsen",
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Casos de Éxito — Beinsen en el Mundo",
        description: "Cómo 5000+ clientes en 50+ países producen con maquinaria Beinsen.",
    },
};

export default function CasosExitoPage() {
    return <CasosExitoClient />;
}
