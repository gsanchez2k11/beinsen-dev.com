"use client";

import { motion } from "framer-motion";
import type { TechnicalSpec } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";

interface TechSpecsProps {
    specs: TechnicalSpec[];
}

export function TechSpecs({ specs }: TechSpecsProps) {
    const { locale } = useLanguage();
    
    if (!specs || specs.length === 0) return null;

    return (
        <div className="w-full bg-card rounded-3xl border border-border/50 overflow-hidden shadow-sm">
            <div className="divide-y divide-border/30">
                {specs.map((spec, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex flex-col sm:flex-row sm:items-center py-5 px-6 sm:px-8 hover:bg-muted/30 transition-colors group"
                    >
                        <div className="sm:w-1/3 mb-1 sm:mb-0">
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                {getLocalized(spec.label, locale)}
                            </span>
                        </div>
                        <div className="sm:w-2/3">
                            <span className="text-base font-bold text-foreground">
                                {getLocalized(spec.value, locale)}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
