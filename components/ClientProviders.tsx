"use client";

import dynamic from "next/dynamic";
import { MotionConfig } from "framer-motion";
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
        // reducedMotion="user" hace que framer-motion respete la preferencia
        // del sistema operativo / navegador del usuario. Las animaciones se
        // ejecutan instantaneamente sin movimiento para quien lo prefiere.
        <MotionConfig reducedMotion="user">
            <LanguageProvider>
                <MagneticCursor />
                {children}
                <CookieConsent />
            </LanguageProvider>
        </MotionConfig>
    );
}
