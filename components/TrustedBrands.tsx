"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BRANDS = [
    { name: "Yoimprimo", url: "https://www.yoimprimo.com", logo: "/brands/yoimprimo.jpg" },
    { name: "Tienda Sublimación", url: "https://tiendasublimacion.com", logo: "/brands/tiendasublimacion.webp" },
    { name: "Tinta CISS", url: "https://www.tintaciss.net", logo: "/brands/tintaciss.jpg" },
    { name: "Espiral Digital", url: "https://espiraldigital.es", logo: "/brands/espiraldigital.svg" },
    { name: "APPhoto", url: "https://www.apphoto.es", logo: "/brands/apphoto.webp" },
];

const LOOP = [...BRANDS, ...BRANDS];

export function TrustedBrands() {
    return (
        <section className="py-16 border-y border-border/50 bg-muted/20 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase">
                    Confían en nuestra tecnología térmica
                </p>
            </div>

            <div className="flex w-[200%]">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    className="flex flex-none w-full justify-around items-center"
                >
                    {LOOP.map((brand, i) => (
                        <a
                            key={i}
                            href={brand.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={brand.name}
                            className="flex items-center justify-center px-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        >
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                width={180}
                                height={60}
                                className="h-12 w-auto object-contain"
                                unoptimized={brand.logo.endsWith(".svg")}
                            />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
