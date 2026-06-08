"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const dictionary = {
    es: { cta: "Solicitar presupuesto", sub: "Respuesta en 24 h" },
    en: { cta: "Request a quote", sub: "Reply within 24 h" },
    pt: { cta: "Pedir orçamento", sub: "Resposta em 24 h" },
    it: { cta: "Richiedi preventivo", sub: "Risposta entro 24 h" },
};

export function StickyQuoteCTA() {
    const { locale } = useLanguage();
    const d = dictionary[locale] || dictionary.es;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Aparece cuando el usuario ha scrolleado mas alla del hero (~80vh).
        const onScroll = () => {
            const threshold = window.innerHeight * 0.8;
            setVisible(window.scrollY > threshold);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.a
                    href="/contacto"
                    initial={{ opacity: 0, y: 60, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 60, scale: 0.85 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="group fixed bottom-6 right-6 z-40 hidden md:inline-flex"
                    aria-label={d.cta}
                >
                    <span className="relative inline-flex items-center gap-3 pl-5 pr-6 py-4 rounded-2xl bg-gradient-to-r from-[#FF6600] to-[#FF9900] text-white font-black shadow-2xl shadow-[#FF6600]/40 hover:shadow-[#FF6600]/60 hover:scale-105 transition-all">
                        <motion.span
                            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                            className="absolute inset-0 rounded-2xl border-2 border-[#FF6600] pointer-events-none"
                        />
                        <Sparkles size={18} className="relative" />
                        <span className="relative flex flex-col leading-tight text-left">
                            <span className="text-xs uppercase tracking-widest">{d.cta}</span>
                            <span className="text-[10px] font-light opacity-80">{d.sub}</span>
                        </span>
                        <ArrowRight size={18} className="relative transition-transform group-hover:translate-x-0.5" />
                    </span>
                </motion.a>
            )}

            {/* Mobile: barra inferior fija (full width) */}
            {visible && (
                <motion.a
                    href="/contacto"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 80 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pb-4 pt-3 bg-gradient-to-t from-background via-background to-transparent"
                    aria-label={d.cta}
                >
                    <span className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF6600] to-[#FF9900] text-white font-black text-sm uppercase tracking-widest shadow-2xl shadow-[#FF6600]/40">
                        <Sparkles size={16} />
                        {d.cta}
                        <ArrowRight size={16} />
                    </span>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
