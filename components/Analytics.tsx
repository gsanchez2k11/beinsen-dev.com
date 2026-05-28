"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsent, subscribeConsent, type Consent } from "@/lib/consent";

/**
 * Carga Google Analytics SOLO si:
 *   - hay `NEXT_PUBLIC_GA_ID` configurado, Y
 *   - el usuario ha aceptado todas las cookies (consent === "all").
 *
 * Cumple LSSI art. 22.2 — bloqueo previo hasta consentimiento explícito.
 */
export function Analytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    const [consent, setConsentState] = useState<Consent>(null);

    useEffect(() => {
        setConsentState(getConsent());
        return subscribeConsent(setConsentState);
    }, []);

    if (!gaId || consent !== "all") return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaId}', { anonymize_ip: true });
                `}
            </Script>
        </>
    );
}
