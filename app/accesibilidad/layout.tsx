import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Declaración de Accesibilidad",
    description: "Declaración de accesibilidad de beinsen.com conforme al Real Decreto 1112/2018, la Directiva (UE) 2016/2102 y el European Accessibility Act (Directiva (UE) 2019/882).",
    alternates: { canonical: `${SITE_URL}/accesibilidad` },
    robots: { index: false, follow: true },
};

export default function AccesibilidadLayout({ children }: { children: React.ReactNode }) {
    return children;
}
