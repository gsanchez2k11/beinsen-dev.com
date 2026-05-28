"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getConsent, setConsent } from "@/lib/consent";

export default function CookieConsent() {
    const { locale } = useLanguage();
    const [showBanner, setShowBanner] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (getConsent() === null) {
            setShowBanner(true);
            // Pequeño retardo para que el usuario perciba la transición.
            const t = setTimeout(() => setIsVisible(true), 600);
            return () => clearTimeout(t);
        }
    }, []);

    const close = (choice: "all" | "necessary") => {
        setConsent(choice);
        setIsVisible(false);
        setTimeout(() => setShowBanner(false), 500);
    };

    const d = {
        es: {
            title: "Control de Cookies",
            text: "Utilizamos cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia. Puedes aceptar todas o quedarte solo con las estrictamente necesarias.",
            acceptAll: "Aceptar todas",
            necessary: "Solo necesarias",
            close: "Cerrar (equivale a solo necesarias)",
            privacy: "Política de Privacidad",
            cookies: "Política de Cookies",
        },
        en: {
            title: "Cookie Control",
            text: "We use first and third-party cookies to analyse traffic and improve your experience. You can accept all or keep only the strictly necessary ones.",
            acceptAll: "Accept all",
            necessary: "Necessary only",
            close: "Close (counts as necessary only)",
            privacy: "Privacy Policy",
            cookies: "Cookie Policy",
        },
        pt: {
            title: "Controlo de Cookies",
            text: "Utilizamos cookies próprios e de terceiros para analisar tráfego e melhorar a sua experiência. Pode aceitar todos ou ficar apenas com os estritamente necessários.",
            acceptAll: "Aceitar todos",
            necessary: "Apenas necessárias",
            close: "Fechar (equivale a apenas necessárias)",
            privacy: "Política de Privacidade",
            cookies: "Política de Cookies",
        },
        it: {
            title: "Controllo dei Cookie",
            text: "Utilizziamo cookie propri e di terze parti per analizzare il traffico e migliorare la tua esperienza. Puoi accettare tutti o mantenere solo quelli strettamente necessari.",
            acceptAll: "Accetta tutti",
            necessary: "Solo necessari",
            close: "Chiudi (equivale a solo necessari)",
            privacy: "Informativa sulla Privacy",
            cookies: "Informativa Cookie",
        },
    }[locale] || { es: {} }.es;

    if (!showBanner) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    role="dialog"
                    aria-labelledby="cookie-banner-title"
                    aria-describedby="cookie-banner-text"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[9999]"
                >
                    <div className="bg-card/95 backdrop-blur-xl border border-border shadow-2xl rounded-[2rem] p-6 md:p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-[#FF6600]/10 rounded-full blur-3xl group-hover:bg-[#FF6600]/20 transition-colors duration-500" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                                    <Cookie size={20} />
                                </div>
                                <h3 id="cookie-banner-title" className="font-bold text-lg text-foreground tracking-tight">
                                    {d.title}
                                </h3>
                            </div>

                            <p id="cookie-banner-text" className="text-muted-foreground text-sm leading-relaxed mb-8">
                                {d.text}
                            </p>

                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => close("all")}
                                    className="w-full py-3.5 px-6 rounded-xl bg-[#FF6600] text-white font-bold text-sm hover:bg-[#cc5200] transition-all shadow-lg shadow-[#FF6600]/20 flex items-center justify-center gap-2 group/btn"
                                >
                                    <Check size={18} className="group-hover/btn:scale-110 transition-transform" />
                                    {d.acceptAll}
                                </button>

                                <button
                                    onClick={() => close("necessary")}
                                    className="w-full py-3 px-6 rounded-xl bg-muted/50 text-foreground font-semibold text-sm hover:bg-muted transition-all"
                                >
                                    {d.necessary}
                                </button>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
                                <Link href="/cookies" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/80 hover:text-[#FF6600] transition-colors">
                                    {d.cookies}
                                </Link>
                                <span className="text-muted-foreground/40">·</span>
                                <Link href="/privacidad" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/80 hover:text-[#FF6600] transition-colors">
                                    {d.privacy}
                                </Link>
                            </div>
                        </div>

                        <button
                            onClick={() => close("necessary")}
                            aria-label={d.close}
                            className="absolute top-4 right-4 p-2 text-muted-foreground/60 hover:text-foreground transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
