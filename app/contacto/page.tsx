import type { Metadata } from "next";
import ContactoClient from "./contacto-client";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Contacto y Presupuesto | Beinsen — Planchas Transfer Profesionales",
    description: "Solicita presupuesto personalizado, resuelve dudas técnicas o agenda una videollamada con nuestros ingenieros. Respuesta garantizada en menos de 24 horas laborables.",
    alternates: {
        canonical: `${SITE_URL}/contacto`,
    },
    openGraph: {
        title: "Contacto Técnico | Beinsen",
        description: "Habla con nuestros ingenieros, solicita presupuesto o agenda una cita. Respuesta en menos de 24 horas.",
        url: `${SITE_URL}/contacto`,
        siteName: "Beinsen",
        locale: "es_ES",
        type: "website",
    },
};

export default function ContactoPage() {
    return <ContactoClient />;
}
