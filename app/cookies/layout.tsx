import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Política de Cookies",
    description: "Información sobre las cookies utilizadas en beinsen.com y cómo gestionarlas, en cumplimiento de la LSSI art. 22.2 y el RGPD.",
    alternates: { canonical: `${SITE_URL}/cookies` },
    robots: { index: false, follow: true },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
