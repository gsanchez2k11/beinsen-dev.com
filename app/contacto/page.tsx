import type { Metadata } from "next";
import ContactoClient from "./contacto-client";
import { SITE_URL } from "@/lib/site";
import { faqData } from "@/data/faq";

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

// FAQPage schema para Google Rich Results: cada par P/R del faqData se
// expone como QAEntry en ES. Permite que las preguntas aparezcan
// directamente en SERPs de Google.
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.question.es,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.answer.es,
        },
    })),
};

export default function ContactoPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <ContactoClient />
        </>
    );
}
