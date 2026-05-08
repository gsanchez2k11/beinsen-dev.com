"use client";

import { useLanguage } from "@/context/LanguageContext";
import { storiesData } from "@/data/stories";
import { getLocalized } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, BarChart3, Factory, MapPin, Calendar } from "lucide-react";

export default function SuccessStoriesPage() {
    const { locale } = useLanguage();

    const d = {
        es: {
            title: "Casos de Éxito",
            tag: "Ingeniería de Campo",
            subtitle: "Descubra cómo Beinsen transforma la productividad industrial en todo el mundo a través de soluciones térmicas de precisión.",
            viewStory: "Ver Detalle",
            impact: "Impacto Industrial",
            challenge: "El Desafío",
            results: "Resultados Clave",
            location: "Ubicación",
            year: "Año"
        },
        en: {
            title: "Success Stories",
            tag: "Field Engineering",
            subtitle: "Discover how Beinsen transforms industrial productivity worldwide through precision thermal solutions.",
            viewStory: "View Details",
            impact: "Industrial Impact",
            challenge: "The Challenge",
            results: "Key Results",
            location: "Location",
            year: "Year"
        }
    }[locale === 'pt' || locale === 'it' ? 'es' : locale] || { es: {} }.es;

    return (
        <div className="min-h-screen bg-background pt-32">
            
            {/* Cinematic Header */}
            <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-xs font-black uppercase tracking-widest mb-6 border border-[#FF6600]/20">
                        <Trophy size={14} /> {d.tag}
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-8 italic">
                        Real <span className="text-[#FF6600]">Impact</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                        {d.subtitle}
                    </p>
                </ScrollReveal>
            </header>

            {/* Stories Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <div className="space-y-32">
                    {storiesData.map((story, i) => {
                        const title = getLocalized(story.title, locale);
                        const industry = getLocalized(story.industry, locale);
                        const challenge = getLocalized(story.challenge, locale);
                        const results = story.results[locale] || story.results['es'] || [];

                        return (
                            <section key={story.id} className="relative group">
                                <ScrollReveal delay={i * 0.1}>
                                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                        
                                        {/* Image Section */}
                                        <div className={`relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-muted/20 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                            <Image 
                                                src={story.verticalImage || story.mainImage} 
                                                alt={title || ""} 
                                                fill 
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            
                                            <div className="absolute bottom-10 left-10 right-10 flex flex-wrap gap-4">
                                                <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest">
                                                    <MapPin size={14} /> {story.location}
                                                </div>
                                                <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest">
                                                    <Calendar size={14} /> {story.year}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="space-y-10">
                                            <div className="space-y-4">
                                                <div className="text-[#FF6600] text-xs font-black uppercase tracking-[0.3em]">
                                                    {industry}
                                                </div>
                                                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-[1.1]">
                                                    {title}
                                                </h2>
                                                <div className="w-20 h-1 bg-[#FF6600]/40 rounded-full" />
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">{d.challenge}</h3>
                                                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                                                    {challenge}
                                                </p>
                                            </div>

                                            <div className="space-y-6">
                                                <h3 className="text-xs font-black uppercase tracking-widest text-[#FF6600] flex items-center gap-2">
                                                    <BarChart3 size={16} /> {d.results}
                                                </h3>
                                                <ul className="space-y-4">
                                                    {results.map((res: string, idx: number) => (
                                                        <li key={idx} className="flex items-start gap-4 group/item">
                                                            <div className="w-6 h-6 rounded-full bg-[#FF6600]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#FF6600] transition-colors duration-300">
                                                                <div className="w-2 h-2 rounded-full bg-[#FF6600] group-hover/item:bg-white" />
                                                            </div>
                                                            <span className="text-muted-foreground font-light">{res}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <Link 
                                                href={`/planchas/${story.relatedMachineId}`}
                                                className="inline-flex items-center gap-4 px-10 py-5 bg-muted rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-[#FF6600] hover:text-white transition-all duration-500 group/btn"
                                            >
                                                {d.viewStory} <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-2" />
                                            </Link>
                                        </div>

                                    </div>
                                </ScrollReveal>
                            </section>
                        );
                    })}
                </div>
            </main>

            {/* CTA Section */}
            <section className="bg-muted/10 py-40 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-black italic mb-10 tracking-tighter">
                            ¿Listo para optimizar su <span className="text-[#FF6600]">producción</span>?
                        </h2>
                        <Link 
                            href="/contacto"
                            className="inline-flex items-center gap-4 px-16 py-6 bg-[#FF6600] text-white rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.05] transition-all shadow-2xl shadow-[#FF6600]/20"
                        >
                            Solicitar Estudio Técnico <ArrowRight size={20} />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
