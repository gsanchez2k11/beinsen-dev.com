"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
    const { locale } = useLanguage();

    if (!images || images.length === 0) return null;

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative aspect-square rounded-3xl overflow-hidden bg-card border border-border/50 group"
                    >
                        <Image
                            src={img}
                            alt={`${productName} thumbnail ${index + 1}`}
                            fill
                            className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
