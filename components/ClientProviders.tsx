"use client";

import dynamic from "next/dynamic";
import { LanguageProvider } from "@/context/LanguageContext";
import type { ReactNode } from "react";

const MagneticCursor = dynamic(
    () => import("@/components/MagneticCursor").then((m) => ({ default: m.MagneticCursor })),
    { ssr: false }
);
const CookieConsent = dynamic(
    () => import("@/components/CookieConsent"),
    { ssr: false }
);

export function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <LanguageProvider>
            <MagneticCursor />
            {children}
            <CookieConsent />
        </LanguageProvider>
    );
}
