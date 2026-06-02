"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const STORAGE_KEY = "beinsen_warranty_popup_shown";
const DELAY_MS = 6000;

export function WarrantyPopup() {
    const { locale } = useLanguage();
    const [open, setOpen] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (sessionStorage.getItem(STORAGE_KEY)) {
            setHasShown(true);
            return;
        }
        const t = setTimeout(() => {
            setOpen(true);
            setHasShown(true);
            sessionStorage.setItem(STORAGE_KEY, "1");
        }, DELAY_MS);
        return () => clearTimeout(t);
    }, []);

    const close = () => setOpen(false);
    const reopen = () => setOpen(true);

    const d = {
        es: {
            tag: "Exclusivo Beinsen",
            upTo: "HASTA",
            yearsBig: "3",
            yearsLabel: "AÑOS",
            sub: "de garantía",
            desc: "Registra tu máquina en soporte.beinsen.com en los 90 días posteriores a la compra.",
            disclaimerPrefix: "Plazo según modelo (",
            disclaimerLink: "ver condiciones",
            disclaimerSuffix: "). Modelos Alaska, Andra, Tobago, Miranda y Felina: 1 año.",
            cta: "Activar ahora",
            dismiss: "Cerrar aviso",
            reopen: "Ver oferta de garantía",
        },
        en: {
            tag: "Beinsen exclusive",
            upTo: "UP TO",
            yearsBig: "3",
            yearsLabel: "YEARS",
            sub: "warranty",
            desc: "Register your machine at soporte.beinsen.com within 90 days of purchase.",
            disclaimerPrefix: "Period varies by model (",
            disclaimerLink: "see terms",
            disclaimerSuffix: "). Alaska, Andra, Tobago, Miranda and Felina: 1 year.",
            cta: "Activate now",
            dismiss: "Close notice",
            reopen: "See warranty offer",
        },
        pt: {
            tag: "Exclusivo Beinsen",
            upTo: "ATÉ",
            yearsBig: "3",
            yearsLabel: "ANOS",
            sub: "de garantia",
            desc: "Registe a sua máquina em soporte.beinsen.com nos 90 dias seguintes à compra.",
            disclaimerPrefix: "Prazo conforme o modelo (",
            disclaimerLink: "ver condições",
            disclaimerSuffix: "). Modelos Alaska, Andra, Tobago, Miranda e Felina: 1 ano.",
            cta: "Ativar agora",
            dismiss: "Fechar aviso",
            reopen: "Ver oferta de garantia",
        },
        it: {
            tag: "Esclusiva Beinsen",
            upTo: "FINO A",
            yearsBig: "3",
            yearsLabel: "ANNI",
            sub: "di garanzia",
            desc: "Registra la tua macchina su soporte.beinsen.com entro 90 giorni dall'acquisto.",
            disclaimerPrefix: "Durata in base al modello (",
            disclaimerLink: "vedi condizioni",
            disclaimerSuffix: "). Modelli Alaska, Andra, Tobago, Miranda e Felina: 1 anno.",
            cta: "Attiva ora",
            dismiss: "Chiudi avviso",
            reopen: "Vedi offerta di garanzia",
        },
    }[locale] || { es: {} }.es;

    return (
        <>
            {/* Floating reopener button (bottom-left) — visible whenever the popup is closed
                pero ya se mostró al menos una vez en esta sesión */}
            <AnimatePresence>
                {hasShown && !open && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.6, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.6, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        onClick={reopen}
                        aria-label={d.reopen}
                        title={d.reopen}
                        className="group fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6600] to-[#cc5200] text-white flex items-center justify-center shadow-2xl shadow-[#FF6600]/40 hover:scale-110 transition-transform"
                    >
                        {/* Pulsing ring */}
                        <motion.span
                            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                            className="absolute inset-0 rounded-full border-2 border-[#FF6600]"
                        />
                        <ShieldCheck size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {open && (
                    <motion.div
                        role="complementary"
                        aria-labelledby="warranty-popup-title"
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed bottom-6 left-6 z-50 w-[calc(100vw-3rem)] max-w-[22rem] pointer-events-auto"
                    >
                        {/* Pulsing glow halo behind */}
                        <motion.div
                            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -inset-2 bg-[#FF6600]/30 blur-2xl rounded-3xl pointer-events-none"
                        />

                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-[#1a0d05] border border-[#FF6600]/40 shadow-2xl shadow-[#FF6600]/30">
                            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#FF6600]/30 blur-[80px] pointer-events-none" />
                            <div className="absolute -bottom-24 -left-16 w-40 h-40 rounded-full bg-[#FF6600]/15 blur-[70px] pointer-events-none" />

                            <div
                                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                                style={{
                                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                                    backgroundSize: "16px 16px",
                                }}
                            />

                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF9900] to-transparent" />

                            <button
                                onClick={close}
                                aria-label={d.dismiss}
                                className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white flex items-center justify-center transition-all backdrop-blur-sm"
                            >
                                <X size={14} />
                            </button>

                            <div className="relative z-10 p-6 text-white">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6600]/15 text-[#FF9900] text-[9px] font-black uppercase tracking-[0.25em] border border-[#FF6600]/30 mb-5">
                                    <Sparkles size={10} />
                                    {d.tag}
                                </div>

                                {/* HASTA + Big "3 AÑOS" */}
                                <div className="flex items-end gap-3 mb-3">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black tracking-[0.3em] text-white/50 mb-1">
                                            {d.upTo}
                                        </span>
                                        <span
                                            id="warranty-popup-title"
                                            className="text-7xl font-black italic leading-none tracking-tighter bg-gradient-to-br from-white via-white to-[#FF9900] bg-clip-text text-transparent"
                                        >
                                            {d.yearsBig}
                                        </span>
                                    </div>
                                    <div className="flex flex-col pb-2">
                                        <span className="text-xl font-black tracking-tight leading-none">{d.yearsLabel}</span>
                                        <span className="text-xs text-white/60 font-light italic leading-tight mt-1">{d.sub}</span>
                                    </div>
                                    <div className="ml-auto pb-2">
                                        <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6600] to-[#cc5200] flex items-center justify-center shadow-lg shadow-[#FF6600]/40">
                                            <ShieldCheck size={22} className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-4" />

                                <p className="text-[12px] text-white/70 font-light leading-relaxed mb-2">{d.desc}</p>

                                <p className="text-[10px] text-white/50 font-light leading-relaxed mb-5 italic">
                                    {d.disclaimerPrefix}
                                    <a href="/condiciones" className="text-[#FF9900] hover:text-white underline transition-colors">{d.disclaimerLink}</a>
                                    {d.disclaimerSuffix}
                                </p>

                                <a
                                    href="https://soporte.beinsen.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={close}
                                    className="group relative w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF6600] to-[#FF9900] text-white font-black uppercase tracking-widest text-[11px] hover:shadow-xl hover:shadow-[#FF6600]/40 transition-all"
                                >
                                    <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative">{d.cta}</span>
                                    <ArrowRight size={14} className="relative transition-transform group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
