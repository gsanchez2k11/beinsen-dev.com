"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CaseStudy } from "@/data/stories";
import { getLocalized } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, MapPin, Calendar, Factory, ChevronLeft } from "lucide-react";

export default function StoryDetailClient({ story }: { story: CaseStudy }) {
    const { locale } = useLanguage();

    const title = getLocalized(story.title, locale);
    const industry = getLocalized(story.industry, locale);
    const challenge = getLocalized(story.challenge, locale);
    const solution = getLocalized(story.solution, locale);
    const results = (story.results as Record<string, string[]>)[locale] || story.results['es'] || [];

    const d = ({
        es: {
            back: "Casos de Éxito",
            challenge: "El Desafío",
            solution: "La Solución",
            results: "Resultados Clave",
            relatedMachine: "Máquina utilizada",
            viewMachine: "Ver Máquina",
            client: "Cliente",
        },
        en: {
            back: "Success Stories",
            challenge: "The Challenge",
            solution: "The Solution",
            results: "Key Results",
            relatedMachine: "Machine used",
            viewMachine: "View Machine",
            client: "Client",
        },
    } as Record<string, typeof esLabels>)[locale === 'pt' || locale === 'it' ? 'es' : locale] || esLabels;

    return (
        <div className="min-h-screen bg-background pt-32 pb-32">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link
                    href="/casos-exito"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-[#FF6600] transition-colors mb-12"
                >
                    <ChevronLeft size={14} /> {d.back}
                </Link>

                <ScrollReveal>
                    <div className="mb-16">
                        <div className="text-[#FF6600] text-xs font-black uppercase tracking-[0.3em] mb-4">{industry}</div>
                        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[1.1] mb-8">{title}</h1>
                        <div className="flex flex-wrap gap-4">
                            <div className="px-4 py-2 rounded-xl bg-muted flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                                <Factory size={14} className="text-[#FF6600]" /> {d.client}: {story.client}
                            </div>
                            <div className="px-4 py-2 rounded-xl bg-muted flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                                <MapPin size={14} className="text-[#FF6600]" /> {story.location}
                            </div>
                            <div className="px-4 py-2 rounded-xl bg-muted flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                                <Calendar size={14} className="text-[#FF6600]" /> {story.year}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-muted/20 mb-20">
                        <Image
                            src={story.mainImage}
                            alt={title || ""}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">

                        <ScrollReveal>
                            <div>
                                <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">{d.challenge}</h2>
                                <p className="text-xl text-muted-foreground font-light leading-relaxed">{challenge}</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div>
                                <h2 className="text-xs font-black uppercase tracking-widest text-[#FF6600] mb-4">{d.solution}</h2>
                                <p className="text-xl text-muted-foreground font-light leading-relaxed">{solution}</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div>
                                <h2 className="text-xs font-black uppercase tracking-widest text-[#FF6600] flex items-center gap-2 mb-6">
                                    <BarChart3 size={16} /> {d.results}
                                </h2>
                                <ul className="space-y-4">
                                    {results.map((res: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-[#FF6600]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-[#FF6600]" />
                                            </div>
                                            <span className="text-muted-foreground font-light text-lg">{res}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div>
                        <ScrollReveal>
                            <div className="p-8 rounded-[2rem] bg-muted/30 border border-border/40 space-y-6 sticky top-32">
                                <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">{d.relatedMachine}</div>
                                <Link
                                    href={`/planchas/${story.relatedMachineId}`}
                                    className="flex items-center justify-between gap-4 px-6 py-4 bg-[#FF6600] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all"
                                >
                                    {d.viewMachine} <ArrowRight size={16} />
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
}

const esLabels = {
    back: "Casos de Éxito",
    challenge: "El Desafío",
    solution: "La Solución",
    results: "Resultados Clave",
    relatedMachine: "Máquina utilizada",
    viewMachine: "Ver Máquina",
    client: "Cliente",
};
