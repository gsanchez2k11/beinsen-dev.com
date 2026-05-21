import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Aviso Legal",
    description: "Aviso legal de Beinsen: información del titular, condiciones de uso del sitio y limitación de responsabilidad.",
    alternates: { canonical: `${SITE_URL}/legal` },
    robots: { index: false, follow: true },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return children;
}
