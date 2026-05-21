import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Términos y Condiciones",
    description: "Términos y condiciones de uso del sitio web de Beinsen.",
    alternates: { canonical: `${SITE_URL}/condiciones` },
    robots: { index: false, follow: true },
};

export default function CondicionesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
