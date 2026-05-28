"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Tag, Maximize2, Target, Box, Sparkles } from "lucide-react";
import { getLocalized } from "@/lib/i18n";
import { enrichWithLocalImages } from "@/lib/productImages";
import { PRICES_VISIBLE } from "@/lib/pricing";
import type { Locale } from "@/data/products";

interface CatalogProductCardProps {
    item: any;
    locale: Locale;
    index: number;
    isFeatureCard?: boolean;
    onClick?: () => void;
}

export const CatalogProductCard = memo(function CatalogProductCard({ item: rawItem, locale, index, isFeatureCard, onClick }: CatalogProductCardProps) {
    const item = enrichWithLocalImages(rawItem);
    const name = getLocalized(item.name, locale);
    const desc = getLocalized(item.description, locale);
    const category = getLocalized(item.category, locale);
    const openingType = item.openingType ? getLocalized(item.openingType, locale) : null;
    const size = item.size ? getLocalized(item.size, locale) : null;

    const dictionary = {
        es: { details: "Ver Detalles", consultPvP: "Consultar PVP", highProd: "Alta Producción", industrial: "Industrial Pro", isNew: "Novedad" },
        en: { details: "View Details", consultPvP: "Check Price", highProd: "High Production", industrial: "Industrial Pro", isNew: "New" },
        pt: { details: "Ver Detalhes", consultPvP: "Consultar PVP", highProd: "Alta Produção", industrial: "Industrial Pro", isNew: "Novidade" },
        it: { details: "Vedi Dettagli", consultPvP: "Richiedi Prezzo", highProd: "Alta Produzione", industrial: "Industrial Pro", isNew: "Novità" },
    }[locale] || { es: {} }.es;

    const isIndustrial = item.openingType === "Automática" || item.openingType === "Neumática";
    const isNew = !!item.isNew;
    const href = item.slug ? `/catalogo/${item.slug}` : "#";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3), ease: "easeOut" }}
            className={`group h-full ${isFeatureCard ? 'md:col-span-2' : ''}`}
            onClick={onClick}
        >
            <Link
                href={href}
                aria-label={`${dictionary.details}: ${name}`}
                className={`flex flex-col h-full bg-card rounded-[2.5rem] overflow-hidden border shadow-sm transition-all duration-500 relative ring-1 ${
                    isNew
                        ? "border-[#FF6600] ring-[#FF6600]/30 shadow-xl shadow-[#FF6600]/20 hover:shadow-2xl hover:shadow-[#FF6600]/40"
                        : "border-border/40 ring-border/5 hover:border-[#FF6600]/40 hover:shadow-2xl hover:shadow-[#FF6600]/10"
                }`}
            >
                {/* Image Container */}
                <div className={`relative overflow-hidden bg-muted ${isFeatureCard ? 'aspect-[21/9]' : 'aspect-square md:aspect-[4/3]'}`}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full relative"
                    >
                        {item.image ? (
                            <Image
                                src={item.image}
                                alt={name || ""}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                                <Box size={48} className="opacity-20" />
                            </div>
                        )}
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* NEW Badge */}
                    {isNew && (
                        <div className="absolute top-6 left-6 z-10">
                            <div className="bg-[#FF6600] text-white px-3 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-lg shadow-[#FF6600]/40 flex items-center gap-1.5">
                                <Sparkles size={12} />
                                {dictionary.isNew}
                            </div>
                        </div>
                    )}

                    {/* Industrial Badge (top-right) */}
                    {isIndustrial && (
                        <div className="absolute top-6 right-6 bg-[#FF6600] text-white px-3 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-lg shadow-[#FF6600]/20 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                            {dictionary.industrial}
                        </div>
                    )}

                    {/* Price Badge (bottom-right) */}
                    <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-xl px-4 py-2 rounded-2xl text-sm font-black flex items-center gap-2 shadow-xl border border-border/20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <Tag size={16} className="text-[#FF6600]" />
                        {(() => {
                            if (!PRICES_VISIBLE) return dictionary.consultPvP;
                            const shown = item.pvp ?? item.price;
                            if (shown === undefined || shown === "Consultar PVP") return dictionary.consultPvP;
                            return typeof shown === 'number' ? `${shown.toLocaleString(locale === 'en' ? 'en-GB' : 'es-ES')} €` : shown;
                        })()}
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-8 lg:p-10 flex flex-col flex-1 relative bg-gradient-to-br from-card via-card to-muted/10">
                    <div className="flex justify-between items-start mb-4 gap-4">
                        <div className="flex flex-col gap-2 text-left">
                             <div className="flex items-center gap-2 flex-wrap">
                                <span className="w-8 h-0.5 bg-[#FF6600]/40 rounded-full group-hover:w-12 transition-all duration-500" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/70">{category || "General"}</span>
                                {item._type !== 'planchas' && item.reference && (
                                    <span className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground/60 bg-muted px-2 py-0.5 rounded">
                                        Ref. {item.reference}
                                    </span>
                                )}
                             </div>
                             <h2 className={`font-black text-foreground group-hover:text-[#FF6600] transition-colors leading-[1.1] tracking-tight ${isFeatureCard ? 'text-3xl md:text-5xl' : 'text-2xl lg:text-3xl'}`}>
                                {name}
                            </h2>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-[#FF6600]/10 flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shrink-0 border border-[#FF6600]/20 shadow-lg shadow-[#FF6600]/5">
                            <ArrowUpRight className="text-[#FF6600]" size={24} />
                        </div>
                    </div>

                    <p className="text-muted-foreground text-left text-base lg:text-lg line-clamp-2 md:line-clamp-3 mb-8 font-light leading-relaxed">
                        {desc}
                    </p>

                    <div className="mt-auto pt-8 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                            {openingType && (
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-muted text-muted-foreground text-[10px] font-black uppercase tracking-wider">
                                    <Target size={12} className="text-[#FF6600]" />
                                    {openingType}
                                </div>
                            )}
                            {size && size !== "Estándar" && (
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-muted text-muted-foreground text-[10px] font-black uppercase tracking-wider">
                                    <Maximize2 size={12} className="text-[#FF6600]" />
                                    {size}
                                </div>
                            )}
                        </div>

                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6600] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                            {dictionary.details}
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}, (prevProps, nextProps) => {
    return prevProps.item.id === nextProps.item.id && 
           prevProps.locale === nextProps.locale;
});
