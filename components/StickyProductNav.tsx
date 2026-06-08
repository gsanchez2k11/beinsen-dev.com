"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Euro, ChevronRight, ArrowLeft } from "lucide-react";
import { ContactSpecialistButton } from "./ContactSpecialistButton";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";
import { PRICES_VISIBLE } from "@/lib/pricing";
import { Localized, Locale } from "@/data/products";

interface StickyProductNavProps {
    productName: Localized<string> | string;
    price: string | number;
    /** Etiqueta de la categoría (Prensas / Accesorios / Consumibles) ya traducida. */
    kindLabel: string;
    /** Destino del enlace de categoría (p. ej. /catalogo?type=planchas). */
    kindHref: string;
}

export function StickyProductNav({ productName, price, kindLabel, kindHref }: StickyProductNavProps) {
    const { locale } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    const d = ({
        es: { inicio: "Inicio", checkPrice: "Consultar PVP", back: "Volver al catálogo" },
        en: { inicio: "Home", checkPrice: "Check Price", back: "Back to catalog" },
        pt: { inicio: "Início", checkPrice: "Consultar PVP", back: "Voltar ao catálogo" },
        it: { inicio: "Inizio", checkPrice: "Consultare PVP", back: "Torna al catalogo" },
    } as Record<string, { inicio: string; checkPrice: string; back: string }>)[locale]
        || { inicio: "Inicio", checkPrice: "Consultar PVP", back: "Volver al catálogo" };

    // Aparece en cuanto el breadcrumb natural sale de viewport (~200 px),
    // para que el usuario siempre tenga contexto de navegación.
    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsVisible(latest > 200);
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
                    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                        {/* Volver al catalogo */}
                        <Link
                            href="/catalogo"
                            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-[#FF6600] transition-colors shrink-0 mr-2"
                        >
                            <ArrowLeft size={15} /> {d.back}
                        </Link>

                        {/* Breadcrumb (siempre visible) */}
                        <nav
                            aria-label="Breadcrumb"
                            className="flex items-center gap-2 text-sm font-medium min-w-0 flex-1"
                        >
                            <Link
                                href="/"
                                className="text-muted-foreground hover:text-[#FF6600] transition-colors hidden sm:inline shrink-0"
                            >
                                {d.inicio}
                            </Link>
                            <ChevronRight size={14} className="text-border hidden sm:inline shrink-0" />
                            <Link
                                href={kindHref}
                                className="text-muted-foreground hover:text-[#FF6600] transition-colors shrink-0"
                            >
                                {kindLabel}
                            </Link>
                            <ChevronRight size={14} className="text-border shrink-0" />
                            <span className="text-foreground font-bold truncate">{localizedName}</span>
                        </nav>

                        {/* Precio + CTA */}
                        <div className="flex items-center gap-4 shrink-0">
                            {PRICES_VISIBLE && (
                                <span className="hidden md:flex items-center gap-1 font-bold text-foreground text-base mr-2">
                                    {price !== 'Consultar PVP' ? (
                                        <>
                                            <Euro size={18} className="text-[#FF6600]" />
                                            {typeof price === 'number' ? price.toLocaleString(locale === 'en' ? 'en-GB' : 'es-ES') : price}
                                        </>
                                    ) : (
                                        <span className="text-muted-foreground text-sm">{d.checkPrice}</span>
                                    )}
                                </span>
                            )}
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
