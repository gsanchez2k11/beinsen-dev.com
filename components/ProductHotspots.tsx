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
    imageWidth?: number;
    imageHeight?: number;
    hotspots: Hotspot[];
}

export function ProductHotspots({ imageSrc, imageWidth = 800, imageHeight = 800, hotspots }: ProductHotspotsProps) {
    const { locale } = useLanguage();
    const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

    if (!hotspots || hotspots.length === 0) return null;

    const aspectRatio = `${imageWidth} / ${imageHeight}`;

    const ratio = imageWidth / imageHeight;

    return (
        <div className="relative w-full max-w-3xl mx-auto bg-card rounded-[2rem] border border-border overflow-hidden shadow-2xl" style={{ aspectRatio: "1 / 1" }}>
            {/* Center image wrapper inside square card */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Inner div keeps exact image aspect ratio — hotspot % coords map 1:1 */}
                <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio, ...(ratio <= 1 ? { height: "100%" } : { width: "100%" }) }}
                >
                <Image
                    src={imageSrc}
                    alt="Product with interactive features"
                    fill
                    unoptimized
                    className="object-cover"
                />

                {/* Hotspot overlay */}
                <div className="absolute inset-0">
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
                                <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                                    <motion.div
                                        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className={`absolute w-7 h-7 rounded-full ${isActive ? 'bg-[#FF6600]' : 'bg-[#FF6600]/70'}`}
                                    />
                                    <button
                                        className={`relative w-4 h-4 rounded-full flex items-center justify-center shadow-lg transition-colors border ${isActive ? 'bg-[#FF6600] border-white text-white' : 'bg-background border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white'}`}
                                        aria-label={`Ver detalles de ${title}`}
                                    >
                                        <Plus size={8} className={`transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                className="absolute left-1/2 -translate-x-1/2 mt-6 top-full w-64 bg-background/90 backdrop-blur-xl border border-border shadow-2xl rounded-2xl p-5 pointer-events-none z-50"
                                            >
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
            </div>
        </div>
    );
}
