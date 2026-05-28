import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Subprocesadores",
    description: "Lista pública de los proveedores que tratan datos personales por cuenta de Futura Teck de Murcia S.L.U. en cumplimiento del art. 28 del RGPD.",
    alternates: { canonical: `${SITE_URL}/subprocesadores` },
    robots: { index: false, follow: true },
};

export default function SubprocesadoresLayout({ children }: { children: React.ReactNode }) {
    return children;
}
