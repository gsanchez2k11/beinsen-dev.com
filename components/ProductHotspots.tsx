"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";
import type { Hotspot } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";

interface ProductHotspotsProps {
    imageSrc: string;
    hotspots: Hotspot[];
}

export function ProductHotspots({ imageSrc, hotspots }: ProductHotspotsProps) {
    const { locale } = useLanguage();
    const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

    if (!hotspots || hotspots.length === 0) return null;

    return (
        <div className="relative w-full max-w-5xl mx-auto bg-card rounded-[2rem] border border-border overflow-hidden shadow-2xl">
            {/* Base Machine Image */}
            <div className="relative aspect-square md:aspect-[16/10] w-full">
                <Image
                    src={imageSrc}
                    alt="Product with interactive features"
                    fill
                    className="object-contain p-8 md:p-12"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                />

                {/* Floating Hotspot Markers */}
                {hotspots.map((hotspot, index) => {
                    const isActive = activeHotspot === index;
                    const title = getLocalized(hotspot.title, locale);
                    const description = getLocalized(hotspot.description, locale);

                    return (
                        <div
                            key={index}
                            className="absolute z-20"
                            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                            onMouseEnter={() => setActiveHotspot(index)}
                            onMouseLeave={() => setActiveHotspot(null)}
                            onClick={() => setActiveHotspot(isActive ? null : index)}
                        >
                            {/* Outer Pulsing Ring */}
                            <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group">
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className={`absolute w-12 h-12 rounded-full ${isActive ? 'bg-[#FF6600]' : 'bg-[#FF6600]/80'}`}
                                />

                                {/* Core Dot */}
                                <button
                                    className={`relative w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg transition-colors border-2 ${isActive ? 'bg-[#FF6600] border-white' : 'bg-background border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white'}`}
                                    aria-label={`Ver detalles de ${title}`}
                                >
                                    <Plus size={16} className={`transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`} />
                                </button>

                                {/* Floating Tooltip Card */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                            className="absolute left-1/2 -translate-x-1/2 mt-6 top-full w-64 bg-background/90 backdrop-blur-xl border border-border shadow-2xl rounded-2xl p-5 pointer-events-none z-50"
                                        >
                                            {/* Triangle Pointer */}
                                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-sm bg-background border-t border-l border-border rotate-45" />

                                            <div className="relative z-10">
                                                <h5 className="font-bold text-foreground mb-2 text-sm uppercase tracking-wider">{title}</h5>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
