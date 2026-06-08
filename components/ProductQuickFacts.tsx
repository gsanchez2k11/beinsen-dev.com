"use client";

import { motion } from "framer-motion";
import { Target, Maximize2, Tag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";
import type { Plancha } from "@/data/products";

interface ProductQuickFactsProps {
    plancha: Plancha;
}

const dictionary = {
    es: {
        opening: "Apertura",
        size: "Tamaño",
        category: "Categoría",
        notSpec: "—",
    },
    en: {
        opening: "Opening",
        size: "Size",
        category: "Category",
        notSpec: "—",
    },
    pt: {
        opening: "Abertura",
        size: "Tamanho",
        category: "Categoria",
        notSpec: "—",
    },
    it: {
        opening: "Apertura",
        size: "Dimensione",
        category: "Categoria",
        notSpec: "—",
    },
};

export function ProductQuickFacts({ plancha }: ProductQuickFactsProps) {
    const { locale } = useLanguage();
    const d = dictionary[locale] || dictionary.es;

    const opening = getLocalized(plancha.openingType, locale) || d.notSpec;
    const size = getLocalized(plancha.size, locale) || d.notSpec;
    const category = getLocalized(plancha.category, locale) || d.notSpec;

    const facts = [
        { Icon: Target, label: d.opening, value: opening },
        { Icon: Maximize2, label: d.size, value: size },
        { Icon: Tag, label: d.category, value: category },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                {facts.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card via-card to-muted/30 border border-border/40 p-6 lg:p-8 hover:border-[#FF6600]/40 hover:shadow-xl hover:shadow-[#FF6600]/10 transition-all"
                    >
                        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#FF6600]/0 group-hover:bg-[#FF6600]/10 blur-2xl transition-all duration-500" />

                        <div className="relative">
                            <div className="w-12 h-12 rounded-2xl bg-[#FF6600]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF6600]/20 transition-colors">
                                <f.Icon className="text-[#FF6600]" size={22} />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-2">
                                {f.label}
                            </div>
                            <div className="text-xl lg:text-2xl font-black text-foreground leading-tight">
                                {f.value}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
