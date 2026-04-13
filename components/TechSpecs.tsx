"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TechnicalSpec } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";

interface TechSpecsProps {
    specs: TechnicalSpec[];
}

export function TechSpecs({ specs }: TechSpecsProps) {
    const { locale } = useLanguage();
    const [specPage, setSpecPage] = useState(0);
    
    if (!specs || specs.length === 0) return null;
    const specsLimit = 8;
    const totalPages = Math.ceil(specs.length / specsLimit);
    const start = specPage * specsLimit;
    const visibleSpecs = specs.slice(start, start + specsLimit);
    const prevLabel = locale === "en" ? "Previous" : locale === "pt" ? "Anterior" : locale === "it" ? "Precedente" : "Anterior";
    const nextLabel = locale === "en" ? "Next" : locale === "pt" ? "Seguinte" : locale === "it" ? "Successivo" : "Siguiente";

    return (
        <div className="w-full bg-card rounded-3xl border border-border/50 overflow-hidden shadow-sm">
            <div className="divide-y divide-border/30">
                {visibleSpecs.map((spec, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex flex-col sm:flex-row sm:items-center py-5 px-6 sm:px-8 hover:bg-muted/30 transition-colors group"
                    >
                        <div className="sm:w-1/3 mb-1 sm:mb-0">
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-pre-line">
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
            {totalPages > 1 && (
                <div className="px-6 sm:px-8 py-5 border-t border-border/30 bg-muted/20">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => setSpecPage((prev) => Math.max(0, prev - 1))}
                            disabled={specPage === 0}
                            className="inline-flex items-center gap-1 text-sm font-bold text-[#FF6600] hover:text-[#e65c00] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            {prevLabel}
                        </button>
                        <span className="text-xs font-semibold text-muted-foreground">
                            {specPage + 1} / {totalPages}
                        </span>
                        <button
                            type="button"
                            onClick={() => setSpecPage((prev) => Math.min(totalPages - 1, prev + 1))}
                            disabled={specPage === totalPages - 1}
                            className="inline-flex items-center gap-1 text-sm font-bold text-[#FF6600] hover:text-[#e65c00] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            {nextLabel}
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
