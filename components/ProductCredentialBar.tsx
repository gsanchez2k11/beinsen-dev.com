"use client";

import { motion } from "framer-motion";
import { MapPin, Headphones, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const dictionary = {
    es: {
        stock: { title: "Stock en España", sub: "envío en 24-72 h" },
        support: { title: "Soporte técnico", sub: "en español incluido" },
        advice: { title: "Asesoramiento", sub: "gratuito antes y después" },
    },
    en: {
        stock: { title: "Stocked in Spain", sub: "ships in 24-72 h" },
        support: { title: "Technical support", sub: "Spanish included" },
        advice: { title: "Free guidance", sub: "before and after purchase" },
    },
    pt: {
        stock: { title: "Stock em Espanha", sub: "envio em 24-72 h" },
        support: { title: "Apoio técnico", sub: "em espanhol incluído" },
        advice: { title: "Aconselhamento", sub: "gratuito antes e depois" },
    },
    it: {
        stock: { title: "Disponibile in Spagna", sub: "spedizione in 24-72 h" },
        support: { title: "Supporto tecnico", sub: "in spagnolo incluso" },
        advice: { title: "Consulenza", sub: "gratuita prima e dopo" },
    },
};

export function ProductCredentialBar() {
    const { locale } = useLanguage();
    const d = dictionary[locale] || dictionary.es;

    const items = [
        { Icon: MapPin, ...d.stock },
        { Icon: Headphones, ...d.support },
        { Icon: Wrench, ...d.advice },
    ];

    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16 z-30">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-[#1a0a02] border border-[#FF6600]/30 shadow-2xl shadow-[#FF6600]/10">
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#FF6600]/20 blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#FF6600]/10 blur-[100px] pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF9900] to-transparent" />

                <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                            className="flex items-center gap-4 p-6 lg:p-8 bg-gradient-to-br from-zinc-900 via-black to-[#1a0a02] hover:from-zinc-800 transition-colors"
                        >
                            <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#FF6600]/15 border border-[#FF6600]/30 flex items-center justify-center">
                                <item.Icon className="text-[#FF9900]" size={22} />
                            </div>
                            <div className="min-w-0">
                                <div className="font-black text-white text-base lg:text-lg leading-tight">{item.title}</div>
                                <div className="text-[11px] lg:text-xs text-white/60 leading-tight mt-1">{item.sub}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
