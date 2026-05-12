"use client";

import Link from "next/link";
import { ArrowRight, Shield, Zap, Target, Settings, Box, Package, Globe2, Users2, Building2, Trophy, BookOpen } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TrustedBrands } from "@/components/TrustedBrands";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { storiesData } from "@/data/stories";
import { getLocalized } from "@/lib/i18n";
import type { Article } from "@/lib/articles";

export default function HomeClient({ articles }: { articles: Article[] }) {
    const { locale } = useLanguage();

    const d = {
        es: {
            hero: {
                tag: "Beinsen Engineering",
                title: "Planchas Transfer Profesionales",
                accent: "Resultados Impecables",
                desc: "Diseñamos y fabricamos maquinaria de transferencia térmica de alta gama para los talleres más exigentes del mundo.",
                cta_main: "Explorar Catálogo",
                cta_presupuesto: "Solicitar Presupuesto",
                cta_sec: "Nuestra Tecnología"
            },
            categories: {
                title: "Nuestras Soluciones",
                machines: "Máquinas Transfer",
                accs: "Accesorios Profesionales",
                cons: "Insumos y Consumibles"
            },
            leadership: {
                title: "Liderazgo en Ingeniería",
                precision: "Precisión Absoluta",
                precision_desc: "Control digital PID que mantiene la temperatura con una variación mínima de ±0.5°C.",
                durability: "Construcción Blindada",
                durability_desc: "Chasis de acero estructural diseñado para operar 24/7 sin pérdida de presión.",
                safety: "Seguridad Certificada",
                safety_desc: "Sistemas de protección activa contra atrapamientos y gestión térmica avanzada."
            },
            trinidad_teaser: {
                badge: "Flagship series",
                title: "Trinidad Pro",
                desc: "Descubre la máquina que está redefiniendo los estándares de la industria textil global."
            },
            global: {
                title: "Presencia Global",
                desc: "Desde Barcelona para el mundo. Exportamos tecnología de vanguardia a más de 50 países.",
                stats: [
                    { label: "Países", value: "50+", icon: Globe2 },
                    { label: "Distribuidores", value: "120+", icon: Building2 },
                    { label: "Clientes", value: "5000+", icon: Users2 }
                ]
            },
            stories: {
                title: "Impacto Real",
                subtitle: "Nuestra ingeniería en funcionamiento en las fábricas más exigentes.",
                cta: "Ver todos los casos",
                results: "Resultados clave"
            }
        },
        en: {
            hero: {
                tag: "Beinsen Engineering",
                title: "Industrial Power",
                accent: "Flawless Results",
                desc: "We design and manufacture high-end thermal transfer machinery for the world's most demanding workshops.",
                cta_main: "Explore Catalog",
                cta_presupuesto: "Request a Quote",
                cta_sec: "Our Technology"
            },
            categories: {
                title: "Our Solutions",
                machines: "Transfer Machines",
                accs: "Professional Accessories",
                cons: "Supplies & Consumables"
            },
            leadership: {
                title: "Engineering Leadership",
                precision: "Absolute Precision",
                precision_desc: "Digital PID control maintaining temperature with minimal ±0.5°C variation.",
                durability: "Armored Construction",
                durability_desc: "Structural steel chassis designed to operate 24/7 without pressure loss.",
                safety: "Certified Safety",
                safety_desc: "Active entrapment protection systems and advanced thermal management."
            },
            trinidad_teaser: {
                badge: "Flagship series",
                title: "Trinidad Pro",
                desc: "Discover the machine redefining standards for the global textile industry."
            },
            global: {
                title: "Global Presence",
                desc: "From Barcelona to the world. We export cutting-edge technology to more than 50 countries.",
                stats: [
                    { label: "Countries", value: "50+", icon: Globe2 },
                    { label: "Distributors", value: "120+", icon: Building2 },
                    { label: "Clients", value: "5000+", icon: Users2 }
                ]
            },
            stories: {
                title: "Real Impact",
                subtitle: "Our engineering at work in the most demanding factories.",
                cta: "View all cases",
                results: "Key results"
            }
        }
    }[locale === 'pt' || locale === 'it' ? 'es' : locale] || { es: {} }.es;

    return (
        <div className="flex flex-col w-full bg-background">

            {/* Cinematic Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-border/40">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_#FF660020,_transparent_60%)]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square opacity-20 blur-[100px] bg-[#FF6600]/30 rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <div
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#FF6600]/30 bg-[#FF6600]/10 text-[#FF6600] text-xs font-black uppercase tracking-[0.3em] mb-12 backdrop-blur-md"
                        style={{ animation: "fadeInScale 1s cubic-bezier(0.16,1,0.3,1) both" }}
                    >
                        <Zap size={14} className="animate-pulse" /> {d.hero.tag}
                    </div>

                    <h1
                        className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9] italic"
                        style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
                    >
                        {d.hero.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-[#FF8533]">{d.hero.accent}</span>
                    </h1>

                    <p
                        className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-16"
                        style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
                    >
                        {d.hero.desc}
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
                    >
                        <Link
                            href="/contacto"
                            className="group relative px-10 py-5 bg-[#FF6600] text-white rounded-2xl font-black uppercase tracking-widest text-xs overflow-hidden shadow-2xl shadow-[#FF6600]/30 transform hover:scale-105 transition-all"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {d.hero.cta_presupuesto} <ArrowRight size={18} />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        </Link>
                        <Link
                            href="/planchas"
                            className="px-10 py-5 bg-background border border-border/60 text-foreground rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-muted transition-all flex items-center gap-2"
                        >
                            {d.hero.cta_main} <ArrowRight size={18} className="text-[#FF6600]" />
                        </Link>
                    </div>
                </div>

                <div
                    className="absolute bottom-10 left-1/2 flex flex-col items-center gap-2 opacity-40"
                    style={{ animation: "bounceY 2s ease-in-out infinite" }}
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF6600] to-transparent" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                </div>
            </section>

            {/* Trusted Brands */}
            <div className="bg-background py-12">
                <TrustedBrands />
            </div>

            {/* Visual Category Entry Points */}
            <section className="py-32 px-4 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-20 text-center lg:text-left">
                            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#FF6600] whitespace-nowrap">
                                {d.categories.title}
                            </h2>
                            <div className="h-px w-full bg-[#FF6600]/20" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: d.categories.machines,
                                link: "/planchas?type=planchas",
                                img: "/categories/cat-maquinas.png",
                                icon: Settings,
                                tag: "High Production"
                            },
                            {
                                title: d.categories.accs,
                                link: "/planchas?type=accessories",
                                img: "/categories/cat-accesorios.png",
                                icon: Box,
                                tag: "Pro Hardware"
                            },
                            {
                                title: d.categories.cons,
                                link: "/planchas?type=consumables",
                                img: "/categories/cat-consumibles-v2.png",
                                icon: Package,
                                tag: "Original Supplies"
                            }
                        ].map((cat, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <Link
                                    href={cat.link}
                                    className="group relative h-[600px] flex flex-col justify-end p-10 rounded-[3rem] overflow-hidden bg-card border border-border/40 hover:border-[#FF6600]/40 transition-all duration-700"
                                >
                                    <Image
                                        src={cat.img}
                                        alt={cat.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white mb-6 group-hover:bg-[#FF6600] group-hover:border-[#FF6600] transition-all duration-500">
                                            <cat.icon size={28} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6600] mb-3 block">
                                            {cat.tag}
                                        </span>
                                        <h3 className="text-4xl font-black text-white mb-8 group-hover:translate-x-2 transition-transform duration-500 italic">
                                            {cat.title}
                                        </h3>
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Leadership (Dark Section) */}
            <section className="py-40 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6600]/30 to-transparent" />

                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <ScrollReveal>
                            <span className="text-[#FF6600] text-xs font-black uppercase tracking-[0.4em] mb-10 block">
                                Beyond the surface
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-12 italic leading-tight">
                                {d.leadership.title}
                            </h2>
                        </ScrollReveal>

                        <div className="space-y-12">
                            {[
                                { title: d.leadership.precision, desc: d.leadership.precision_desc, icon: Target },
                                { title: d.leadership.durability, desc: d.leadership.durability_desc, icon: Shield },
                                { title: d.leadership.safety, desc: d.leadership.safety_desc, icon: Zap }
                            ].map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className="flex gap-8 group">
                                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#FF6600]/10 border border-[#FF6600]/20 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-500">
                                            <item.icon size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black mb-4 group-hover:text-[#FF6600] transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/60 font-light text-lg leading-relaxed max-w-md">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    <ScrollReveal delay={0.3}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#FF6600]/20 rounded-full blur-[120px] animate-pulse" />
                            <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10 p-4">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6600]/20 to-transparent" />
                                <Image
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Engineering Detail"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover opacity-60 mix-blend-overlay"
                                />
                                <div className="absolute bottom-12 left-12 right-12 p-10 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10">
                                    <span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.2em] block mb-4">
                                        {d.trinidad_teaser.badge}
                                    </span>
                                    <h3 className="text-3xl font-black mb-6 italic">{d.trinidad_teaser.title}</h3>
                                    <p className="text-white/50 font-light mb-8">
                                        {d.trinidad_teaser.desc}
                                    </p>
                                    <Link
                                        href="/planchas/trinidad-prensa-termica-automatica"
                                        className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6600] flex items-center gap-2 group/btn"
                                    >
                                        Explorar Ingeniería <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Success Stories Preview */}
            <section className="py-32 px-4 bg-muted/20 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                            <div className="max-w-2xl">
                                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#FF6600] mb-6">
                                    {d.stories.title}
                                </h2>
                                <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-[0.9]">
                                    Engineering in <span className="text-[#FF6600]">Action</span>
                                </h3>
                                <p className="text-xl text-muted-foreground font-light mt-8">
                                    {d.stories.subtitle}
                                </p>
                            </div>
                            <Link
                                href="/casos-exito"
                                className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest hover:text-[#FF6600] transition-colors"
                            >
                                {d.stories.cta} <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                            </Link>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {storiesData.slice(0, 2).map((story, i) => (
                            <ScrollReveal key={story.id} delay={i * 0.1}>
                                <div className="group relative rounded-[2.5rem] overflow-hidden bg-card border border-border/40 hover:border-[#FF6600]/30 transition-all duration-500 h-[500px]">
                                    <Image
                                        src={story.mainImage}
                                        alt={getLocalized(story.title, locale) || ""}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover opacity-60 group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />

                                    <div className="absolute inset-0 p-10 flex flex-col justify-end z-30">
                                        <div className="space-y-4">
                                            <span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.2em]">
                                                {getLocalized(story.industry, locale)}
                                            </span>
                                            <h4 className="text-3xl font-black text-white italic tracking-tighter group-hover:text-[#FF6600] transition-colors">
                                                {getLocalized(story.title, locale)}
                                            </h4>
                                            <div className="pt-4 flex flex-wrap gap-2">
                                                {(story.results[locale] || story.results['es'] || []).slice(0, 1).map((res, idx) => (
                                                    <div key={idx} className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                                        <Trophy size={12} className="text-[#FF6600]" /> {res}
                                                    </div>
                                                ))}
                                            </div>
                                            <Link
                                                href={`/casos-exito/${story.slug}`}
                                                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-[#FF6600] transition-colors pt-6"
                                            >
                                                Ver detalle <ArrowRight size={12} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Aprende Section */}
            {articles.length > 0 && (
                <section className="py-32 px-4 border-t border-border/40">
                    <div className="max-w-7xl mx-auto">
                        <ScrollReveal>
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                                <div>
                                    <div className="inline-flex items-center gap-2 text-[#FF6600] text-xs font-black uppercase tracking-[0.4em] mb-4">
                                        <BookOpen size={14} /> Centro de Aprendizaje
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">
                                        Domina la <span className="text-[#FF6600]">Técnica</span>
                                    </h2>
                                </div>
                                <Link
                                    href="/aprende"
                                    className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest hover:text-[#FF6600] transition-colors shrink-0"
                                >
                                    Ver todas las guías <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                                </Link>
                            </div>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {articles.map((a, i) => (
                                <ScrollReveal key={a.slug} delay={i * 0.1}>
                                    <Link
                                        href={`/aprende/${a.slug}`}
                                        className="group flex flex-col h-full p-8 bg-card border border-border/40 rounded-[2rem] hover:border-[#FF6600]/40 transition-all duration-300"
                                    >
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6600] mb-4">{a.category}</span>
                                        <h3 className="font-black text-xl mb-3 group-hover:text-[#FF6600] transition-colors leading-tight">{a.title}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-3 mb-6 font-light flex-1">{a.excerpt}</p>
                                        <span className="inline-flex items-center gap-2 text-[#FF6600] text-xs font-black uppercase tracking-widest mt-auto">
                                            Leer guía <ArrowRight size={12} />
                                        </span>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Global Presence Section */}
            <section className="py-32 bg-background relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FF6600]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 italic">
                            <span className="text-[#FF6600]">{d.global.title}</span>
                        </h2>
                        <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-20">
                            {d.global.desc}
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {d.global.stats.map((stat, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-3xl bg-muted flex items-center justify-center text-[#FF6600] mb-6 shadow-sm">
                                        <stat.icon size={40} />
                                    </div>
                                    <div className="text-5xl font-black mb-2 tracking-tighter">{stat.value}</div>
                                    <div className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
