"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbox } from "./Lightbox";
import { useLanguage } from "@/context/LanguageContext";

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
    const { locale } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const ampliarText = {
        es: "Ampliar",
        en: "Enlarge",
        pt: "Ampliar",
        it: "Ingrandire"
    }[locale] || "Ampliar";

    if (!images || images.length === 0) return null;

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative aspect-square rounded-3xl overflow-hidden bg-card border border-border/50 cursor-zoom-in group"
                        onClick={() => setSelectedImage(img)}
                    >
                        <Image
                            src={img}
                            alt={`${productName} thumbnail ${index + 1}`}
                            fill
                            className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        {/* Hover overlay indicator */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-foreground opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                {ampliarText}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Re-use the Lightbox for full screen viewing */}
            <AnimatePresence>
                {selectedImage && (
                    <Lightbox
                        src={selectedImage}
                        alt={`${productName} full screen`}
                        onClose={() => setSelectedImage(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
