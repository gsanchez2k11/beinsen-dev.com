"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { getLocalized } from "@/lib/i18n";
import { useLanguage } from "@/context/LanguageContext";
import type { Localized } from "@/data/products";

interface StorySegment {
    title: Localized<string> | string;
    description: Localized<string> | string;
    image?: string;
    iframe?: string;
}

interface InmersiveScrollerProps {
    segments: StorySegment[];
}

export function InmersiveScroller({ segments }: InmersiveScrollerProps) {
    const { locale } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative">
            {segments.map((segment, index) => (
                <StorySection 
                    key={index} 
                    segment={segment} 
                    index={index} 
                    total={segments.length}
                    locale={locale}
                />
            ))}
        </div>
    );
}

function StorySection({ segment, index, total, locale }: { 
    segment: StorySegment; 
    index: number; 
    total: number;
    locale: any;
}) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" });

    const title = getLocalized(segment.title, locale);
    const description = getLocalized(segment.description, locale);

    return (
        <section 
            ref={sectionRef}
            className="relative h-screen flex items-center justify-center overflow-hidden bg-background"
        >
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">
                        {title}
                    </h2>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                        {description}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative w-full ${segment.iframe ? 'aspect-video' : 'aspect-square md:aspect-[4/3]'}`}
                >
                    {segment.iframe ? (
                        <div 
                            className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-border/50 [&>iframe]:w-full [&>iframe]:h-full" 
                            dangerouslySetInnerHTML={{ __html: segment.iframe }} 
                        />
                    ) : segment.image ? (
                        <Image
                            src={segment.image}
                            alt={title || "Machine Detail"}
                            fill
                            className="object-contain drop-shadow-2xl"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    ) : null}
                    
                    {/* Decorative backglow */}
                    <div className="absolute inset-0 bg-[#FF6600]/5 blur-3xl rounded-full -z-10 animate-pulse" />
                </motion.div>
            </div>

            {/* Background number indicator */}
            <div className="absolute -bottom-10 -right-10 text-[20rem] font-black text-muted/5 select-none pointer-events-none tracking-tighter">
                0{index + 1}
            </div>
            
            {/* Scroll Progress Bar for the whole section */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: total }).map((_, i) => (
                    <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-[#FF6600]' : 'bg-muted-foreground/30'}`} 
                    />
                ))}
            </div>
        </section>
    );
}
