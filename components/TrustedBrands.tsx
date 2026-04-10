"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Factory, Building2, PackageCheck } from "lucide-react";

const BRANDS = [
    { name: "TextilPro", icon: <Building2 size={24} /> },
    { name: "PrintMasters", icon: <Factory size={24} /> },
    { name: "SubliEurope", icon: <Zap size={24} /> },
    { name: "GlobalMerch", icon: <PackageCheck size={24} /> },
    { name: "QualityTransfers", icon: <ShieldCheck size={24} /> },
    // Duplicate for seamless loop
    { name: "TextilPro", icon: <Building2 size={24} /> },
    { name: "PrintMasters", icon: <Factory size={24} /> },
    { name: "SubliEurope", icon: <Zap size={24} /> },
    { name: "GlobalMerch", icon: <PackageCheck size={24} /> },
    { name: "QualityTransfers", icon: <ShieldCheck size={24} /> },
];

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
                    transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    className="flex flex-none w-full justify-around items-center"
                >
                    {BRANDS.map((brand, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        >
                            <div className="text-muted-foreground">{brand.icon}</div>
                            <span className="text-xl font-black text-foreground/80 tracking-tight">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
