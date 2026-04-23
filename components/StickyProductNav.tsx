"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Euro, Home } from "lucide-react";
import { ContactSpecialistButton } from "./ContactSpecialistButton";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";
import { Localized, Locale } from "@/data/products";

interface StickyProductNavProps {
    productName: Localized<string> | string;
    price: string | number;
}

export function StickyProductNav({ productName, price }: StickyProductNavProps) {
    const { locale } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    const d = {
        es: "Consultar PVP",
        en: "Check Price",
        pt: "Consultar PVP",
        it: "Consultare PVP"
    }[locale] || "Consultar PVP";

    // Show the sticky nav only after scrolling past the hero (roughly 80vh)
    useEffect(() => {
        return scrollY.on("change", (latest) => {
            const heroHeight = window.innerHeight * 0.8;
            if (latest > heroHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, [scrollY]);

    const localizedName = getLocalized(productName, locale);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-xl border-b border-border shadow-sm py-4 px-4 sm:px-6 lg:px-8"
                >
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {/* Left: Product Name + Home */}
                        <div className="flex items-center gap-4 min-w-0">
                            <Link
                                href="/"
                                aria-label="Ir a inicio"
                                className="w-12 h-12 rounded-full border border-border bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors shrink-0"
                            >
                                <Home size={20} className="text-foreground" />
                            </Link>
                            <h2 className="text-lg md:text-xl font-bold text-foreground truncate">
                                {localizedName}
                            </h2>
                        </div>

                        {/* Right: Price + CTA */}
                        <div className="flex items-center gap-4">
                            <span className="hidden md:flex items-center gap-1 font-bold text-foreground text-xl mr-2">
                                {price !== 'Consultar PVP' ? (
                                    <>
                                        <Euro size={20} className="text-[#FF6600]" />
                                        {typeof price === 'number' ? price.toLocaleString(locale === 'en' ? 'en-GB' : 'es-ES') : price}
                                    </>
                                ) : (
                                    <span className="text-muted-foreground text-base">{d}</span>
                                )}
                            </span>
                            <div className="scale-90 md:scale-100 origin-right">
                                <ContactSpecialistButton productName={localizedName || ""} panelPosition="below" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
