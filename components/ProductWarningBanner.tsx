"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getProductWarning } from "@/lib/productWarnings";

const labels = {
    es: "Importante antes de imprimir",
    en: "Important before printing",
    pt: "Importante antes de imprimir",
    it: "Importante prima di stampare",
};

interface ProductWarningBannerProps {
    slug?: string;
}

export function ProductWarningBanner({ slug }: ProductWarningBannerProps) {
    const { locale } = useLanguage();
    const warning = getProductWarning(slug);
    if (!warning) return null;

    const heading = labels[locale] || labels.es;
    const body = warning[locale] || warning.es;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                role="alert"
                className="relative overflow-hidden rounded-2xl border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20 p-5 lg:p-6 shadow-sm"
            >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                        <AlertTriangle className="text-amber-600 dark:text-amber-400" size={20} />
                    </div>
                    <div className="min-w-0">
                        <div className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-700 dark:text-amber-400 mb-1.5">
                            {heading}
                        </div>
                        <p className="text-sm lg:text-base text-amber-900 dark:text-amber-100 leading-relaxed">
                            {body}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
