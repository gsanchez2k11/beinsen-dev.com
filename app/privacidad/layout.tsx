import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Política de Privacidad",
    description: "Política de privacidad de Beinsen: tratamiento de datos personales, derechos del usuario y contacto del responsable.",
    alternates: { canonical: `${SITE_URL}/privacidad` },
    robots: { index: false, follow: true },
};

export default function PrivacidadLayout({ children }: { children: React.ReactNode }) {
    return children;
}
