"use client";

import { motion } from "framer-motion";
import { Zap, Target, Layers, Settings, ShieldCheck, Thermometer, Clock, Ruler, Cpu } from "lucide-react";
import Image from "next/image";
import type { Benefit } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";

// Map string icon names from JSON to actual Lucide components
const iconMap: Record<string, React.ElementType> = {
    Zap,
    Target,
    Layers,
    Settings,
    ShieldCheck,
    Thermometer,
    Clock,
    Ruler,
    Cpu
};

interface ProductBenefitsProps {
    benefits: Benefit[];
    gallery?: string[]; // We use the gallery images to illustrate the zig-zag if available
}

export function ProductBenefits({ benefits, gallery }: ProductBenefitsProps) {
    const { locale } = useLanguage();

    if (!benefits || benefits.length === 0) return null;

    return (
        <div className="w-full space-y-24 md:space-y-32">
            {benefits.slice(0, 4).map((benefit, index) => {
                const Icon = iconMap[benefit.icon] || ShieldCheck;
                // Alternate layout direction: even = left text, odd = right text
                const isReversed = index % 2 !== 0;

                const title = getLocalized(benefit.title, locale);
                const description = getLocalized(benefit.description, locale);

                // Pick an image from the gallery based on the index (or fallback to a nice abstract gradient)
                const blockImage = gallery && gallery[index % gallery.length]
                    ? gallery[index % gallery.length]
                    : null;

                return (
                    <div
                        key={index}
                        className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                    >

                        {/* Core Text & Iconography Content */}
                        <motion.div
                            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="w-full lg:w-1/2 flex flex-col justify-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#FF6600]/10 flex items-center justify-center mb-8">
                                <Icon className="text-[#FF6600]" size={32} />
                            </div>

                            <h4 className="text-3xl md:text-4xl font-black text-foreground mb-6 leading-tight">
                                {title}
                            </h4>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                        </motion.div>

                        {/* Expansive Visual Canvas */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-card border border-border pb-10 shadow-2xl">
                                {blockImage ? (
                                    <Image
                                        src={blockImage}
                                        alt={typeof title === 'string' ? title : "Benefit"}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                ) : (
                                    // Elegant fallback if no enough images exist for the zig-zag
                                    <div className="absolute inset-0 bg-gradient-to-br from-card to-muted flex items-center justify-center p-12 overflow-hidden">
                                        <Icon className="text-border/40 w-full h-full max-h-64 drop-shadow-xl" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                                    </div>
                                )}
                            </div>
                        </motion.div>

                    </div>
                );
            })}
        </div>
    );
}
