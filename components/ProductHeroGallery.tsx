"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProductHeroGalleryProps {
    images: string[];
    productName: string;
}

export function ProductHeroGallery({ images, productName }: ProductHeroGalleryProps) {
    const { locale } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const isFirstRender = useRef(true);

    useEffect(() => {
        isFirstRender.current = false;
    }, []);

    if (!images || images.length === 0) return null;

    const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

    const dictionary = {
        es: { zoom: "Ampliar imagen", next: "Siguiente", prev: "Anterior" },
        en: { zoom: "Enlarge image", next: "Next", prev: "Previous" },
        pt: { zoom: "Ampliar imagem", next: "Próximo", prev: "Anterior" },
        it: { zoom: "Ingrandire immagine", next: "Successivo", prev: "Precedente" }
    }[locale] || { zoom: "Ampliar imagen", next: "Siguiente", prev: "Anterior" };

    return (
        <div className="w-full flex flex-col gap-8 h-full">
            {/* Main Stage */}
            <div className="relative flex-1 group rounded-[2.5rem] overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 shadow-2xl">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={activeIndex}
                        initial={isFirstRender.current ? false : { opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 1.05, x: -20 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={images[activeIndex]}
                            alt={`${productName} - View ${activeIndex + 1}`}
                            fill
                            className="object-contain p-8 md:p-12"
                            priority
                            sizes="(max-width: 1280px) 100vw, 85rem"
                            fetchPriority="high"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Floating Controls */}
                <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <button 
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="pointer-events-auto w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center text-foreground hover:bg-[#FF6600] hover:text-white transition-all transform hover:scale-110 shadow-xl"
                        aria-label={dictionary.prev}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="pointer-events-auto w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center text-foreground hover:bg-[#FF6600] hover:text-white transition-all transform hover:scale-110 shadow-xl"
                        aria-label={dictionary.next}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-border/20">
                    <motion.div 
                        className="h-full bg-[#FF6600]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((activeIndex + 1) / images.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Thumbnails Rail */}
            <div className="flex justify-center gap-4 px-4 overflow-x-auto pb-4 no-scrollbar">
                {images.map((img, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveIndex(index)}
                        className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-card ${
                            activeIndex === index 
                            ? "border-[#FF6600] ring-4 ring-[#FF6600]/10 shadow-lg" 
                            : "border-border/50 hover:border-[#FF6600]/50 grayscale hover:grayscale-0"
                        }`}
                    >
                        <Image
                            src={img}
                            alt={`${productName} thumbnail ${index + 1}`}
                            fill
                            className="object-contain p-2"
                            sizes="80px"
                        />
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
