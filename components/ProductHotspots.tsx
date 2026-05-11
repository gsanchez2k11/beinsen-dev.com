"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Info } from "lucide-react";
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
        <div className="relative w-full max-w-3xl mx-auto bg-card rounded-[2.5rem] border border-border overflow-hidden shadow-2xl" style={{ aspectRatio: "1 / 1" }}>
            {/* Center image wrapper inside square card */}
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                {/* Inner div keeps exact image aspect ratio — hotspot % coords map 1:1 */}
                <div
                    className="relative"
                    style={{ aspectRatio, ...(ratio <= 1 ? { height: "100%" } : { width: "100%" }) }}
                >
                    <Image
                        src={imageSrc}
                        alt="Product interactive features"
                        fill
                        unoptimized
                        className="object-contain"
                    />

                    {/* Hotspot overlay */}
                    <div className="absolute inset-0">
                        {hotspots.map((hotspot, index) => {
                            const isActive = activeHotspot === index;
                            const title = getLocalized(hotspot.title, locale);
                            const description = getLocalized(hotspot.description, locale);

                            // Positioning logic to prevent overflow
                            const isOnRightSide = hotspot.x > 50;
                            const isOnBottomSide = hotspot.y > 50;

                            return (
                                <div
                                    key={index}
                                    className="absolute"
                                    style={{ 
                                        left: `${hotspot.x}%`, 
                                        top: `${hotspot.y}%`,
                                        zIndex: isActive ? 100 : 20
                                    }}
                                >
                                    <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                                        <motion.div
                                            animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                            className={`absolute w-10 h-10 rounded-full ${isActive ? 'bg-[#FF6600]' : 'bg-[#FF6600]/60'}`}
                                        />
                                        <button
                                            onMouseEnter={() => setActiveHotspot(index)}
                                            onMouseLeave={() => setActiveHotspot(null)}
                                            onClick={() => setActiveHotspot(isActive ? null : index)}
                                            className={`relative w-7 h-7 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 border-2 ${isActive ? 'bg-[#FF6600] border-white text-white scale-110' : 'bg-background border-[#FF6600] text-[#FF6600] hover:scale-110 hover:bg-[#FF6600] hover:text-white'}`}
                                            aria-label={`Ver detalles de ${title}`}
                                        >
                                            <Plus size={10} className={`transition-transform duration-500 ${isActive ? 'rotate-45' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ 
                                                        opacity: 0, 
                                                        scale: 0.9, 
                                                        y: isOnBottomSide ? -10 : 10,
                                                        x: isOnRightSide ? -20 : 20
                                                    }}
                                                    animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                                    className={`absolute z-[110] w-72 md:w-80 bg-card/95 backdrop-blur-2xl border border-border shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-3xl p-6 pointer-events-none
                                                        ${isOnBottomSide ? 'bottom-[calc(100%+20px)]' : 'top-[calc(100%+20px)]'}
                                                        ${isOnRightSide ? 'right-0' : 'left-0'}
                                                    `}
                                                >
                                                    {/* Decorative background glow */}
                                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6600]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                                    
                                                    {/* Pointer Arrow */}
                                                    <div className={`absolute w-4 h-4 bg-card border-border rotate-45 
                                                        ${isOnBottomSide ? '-bottom-2 border-b border-r' : '-top-2 border-t border-l'}
                                                        ${isOnRightSide ? 'right-1.5' : 'left-1.5'}
                                                    `} />

                                                    <div className="relative z-10">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className="w-8 h-8 rounded-xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                                                                <Info size={16} />
                                                            </div>
                                                            <h5 className="font-black text-foreground text-sm uppercase tracking-[0.15em] leading-tight">
                                                                {title}
                                                            </h5>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                                                            {description}
                                                        </p>
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
