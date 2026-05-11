"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shirt, Coffee, HardHat, Layers, Sparkles, Gauge, ArrowRight, ArrowLeft, RotateCcw, CheckCircle2, Calendar as CalendarIcon } from "lucide-react";
import { planchasData } from "@/data/products";
import { getLocalized } from "@/lib/i18n";
import { CatalogProductCard } from "@/components/CatalogProductCard";
import { useLanguage } from "@/context/LanguageContext";

type CategoryKey = "textil" | "tazas" | "gorras" | "especializadas" | "cualquiera";
type VolumeKey = "bajo" | "medio" | "alto";
type FormatKey = "compacta" | "estandar" | "industrial";

const CATEGORY_MAP: Record<CategoryKey, string | null> = {
    textil: "Textil",
    tazas: "Tazas y Botellas",
    gorras: "Gorras",
    especializadas: "Especializadas",
    cualquiera: null,
};

// Volume → preferred opening systems (in order of preference)
const VOLUME_PREFS: Record<VolumeKey, string[]> = {
    bajo: ["Manual", "Electromagnética"],
    medio: ["Electromagnética", "Eléctrica"],
    alto: ["Neumática", "Eléctrica"],
};

const FORMAT_MAP: Record<FormatKey, string[]> = {
    compacta: ["Compacta", "Estándar"],
    estandar: ["Estándar"],
    industrial: ["Industrial", "Estación de trabajo"],
};

export default function AsesorPage() {
    const { locale } = useLanguage();
    const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
    const [category, setCategory] = useState<CategoryKey | null>(null);
    const [volume, setVolume] = useState<VolumeKey | null>(null);
    const [format, setFormat] = useState<FormatKey | null>(null);

    const d = {
        es: {
            tag: "Asesor Beinsen",
            title: "¿Qué plancha necesitas?",
            subtitle: "Tres preguntas rápidas. Te recomendamos el modelo ideal para tu taller.",
            q1: "¿Qué vas a personalizar principalmente?",
            q2: "¿Qué volumen de producción esperas?",
            q3: "¿Qué espacio y formato necesitas?",
            next: "Siguiente",
            back: "Atrás",
            restart: "Empezar de nuevo",
            results: "Recomendación para ti",
            resultsSubtitle: "Hemos cruzado tus respuestas con el catálogo. Empezar por:",
            noResults: "No encontramos un match exacto",
            noResultsText: "Prueba a relajar algún criterio o contacta con un especialista.",
            contactSpecialist: "Hablar con un especialista",
            whyMatch: "Por qué encaja",
            cat: {
                textil: "Ropa y textil",
                tazas: "Tazas y botellas",
                gorras: "Gorras",
                especializadas: "Zapatos, balones, espinilleras…",
                cualquiera: "Varias cosas / no lo tengo claro",
            },
            vol: {
                bajo: "Bajo (<20 piezas/día)",
                medio: "Medio (20–100 piezas/día)",
                alto: "Alto (+100 piezas/día)",
            },
            volDesc: {
                bajo: "Hobby, pedidos esporádicos, taller pequeño",
                medio: "Taller profesional con demanda constante",
                alto: "Producción industrial, series largas",
            },
            fmt: {
                compacta: "Compacto",
                estandar: "Estándar profesional",
                industrial: "Industrial / gran formato",
            },
            fmtDesc: {
                compacta: "Taller en casa, poco espacio",
                estandar: "Taller profesional medio",
                industrial: "Nave, alta productividad",
            },
        },
        en: {
            tag: "Beinsen Advisor",
            title: "Which heat press do you need?",
            subtitle: "Three quick questions. We'll match you with the right model.",
            q1: "What will you mainly customize?",
            q2: "Expected production volume?",
            q3: "What space and format do you need?",
            next: "Next",
            back: "Back",
            restart: "Start over",
            results: "Our recommendation",
            resultsSubtitle: "We matched your answers against the catalog. Start here:",
            noResults: "No exact match found",
            noResultsText: "Try relaxing a criterion or talk to a specialist.",
            contactSpecialist: "Talk to a specialist",
            whyMatch: "Why it fits",
            cat: {
                textil: "Apparel & textile",
                tazas: "Mugs & bottles",
                gorras: "Caps",
                especializadas: "Shoes, balls, shin guards…",
                cualquiera: "Various / not sure",
            },
            vol: {
                bajo: "Low (<20 pcs/day)",
                medio: "Medium (20–100 pcs/day)",
                alto: "High (100+ pcs/day)",
            },
            volDesc: {
                bajo: "Hobby, occasional orders, small workshop",
                medio: "Professional workshop, constant demand",
                alto: "Industrial production, long runs",
            },
            fmt: {
                compacta: "Compact",
                estandar: "Standard pro",
                industrial: "Industrial / large format",
            },
            fmtDesc: {
                compacta: "Home workshop, limited space",
                estandar: "Mid-size professional workshop",
                industrial: "Factory floor, high throughput",
            },
        }
    }[locale === "pt" || locale === "it" ? "es" : locale] || { es: {} }.es;

    const recommendations = useMemo(() => {
        if (step !== 3 || !category || !volume || !format) return [];

        const catTarget = CATEGORY_MAP[category];
        const prefSystems = VOLUME_PREFS[volume];
        const prefFormats = FORMAT_MAP[format];

        const scored = planchasData.map((p: any) => {
            const pCat = typeof p.category === "object" ? p.category.es : p.category;
            const pOpen = typeof p.openingType === "object" ? p.openingType.es : p.openingType;
            const pSize = typeof p.size === "object" ? p.size.es : p.size;

            let score = 0;
            const reasons: string[] = [];

            if (!catTarget || pCat === catTarget) {
                score += catTarget ? 3 : 0;
                if (catTarget) reasons.push(`Categoría: ${pCat}`);
            } else {
                score -= 2;
            }

            const sysIdx = prefSystems.indexOf(pOpen);
            if (sysIdx === 0) { score += 3; reasons.push(`Sistema ideal: ${pOpen}`); }
            else if (sysIdx === 1) { score += 2; reasons.push(`Sistema compatible: ${pOpen}`); }

            if (prefFormats.includes(pSize)) {
                score += 2;
                reasons.push(`Formato: ${pSize}`);
            }

            return { product: p, score, reasons };
        });

        return scored
            .filter(s => s.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 3);
    }, [step, category, volume, format]);

    const restart = () => {
        setStep(0);
        setCategory(null);
        setVolume(null);
        setFormat(null);
    };

    const CATEGORY_OPTIONS: { key: CategoryKey; icon: any }[] = [
        { key: "textil", icon: Shirt },
        { key: "tazas", icon: Coffee },
        { key: "gorras", icon: HardHat },
        { key: "especializadas", icon: Layers },
        { key: "cualquiera", icon: Sparkles },
    ];
    const VOLUME_OPTIONS: VolumeKey[] = ["bajo", "medio", "alto"];
    const FORMAT_OPTIONS: FormatKey[] = ["compacta", "estandar", "industrial"];

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 selection:bg-[#FF6600] selection:text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-[#FF6600]/10 text-[#FF6600] text-xs font-black uppercase tracking-[0.2em] mb-8 border border-[#FF6600]/20"
                    >
                        <Gauge size={14} /> {d.tag}
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic">
                        {d.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                        {d.subtitle}
                    </p>
                </div>

                {/* Step indicator */}
                {step < 3 && (
                    <div className="flex justify-center items-center gap-3 mb-12">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all ${i === step ? "w-16 bg-[#FF6600]" : i < step ? "w-8 bg-[#FF6600]/60" : "w-8 bg-border"}`}
                            />
                        ))}
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {/* Step 0: category */}
                    {step === 0 && (
                        <motion.div
                            key="step0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-black mb-10 text-center">{d.q1}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {CATEGORY_OPTIONS.map((opt) => {
                                    const Icon = opt.icon;
                                    const selected = category === opt.key;
                                    return (
                                        <button
                                            key={opt.key}
                                            onClick={() => { setCategory(opt.key); setStep(1); }}
                                            className={`group p-8 rounded-3xl border-2 transition-all text-left flex flex-col gap-4 ${selected ? "border-[#FF6600] bg-[#FF6600]/5" : "border-border/40 bg-card hover:border-[#FF6600]/40 hover:bg-muted/30"}`}
                                        >
                                            <div className="w-12 h-12 rounded-2xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                                                <Icon size={24} />
                                            </div>
                                            <span className="font-bold text-lg">{(d.cat as any)[opt.key]}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 1: volume */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-black mb-10 text-center">{d.q2}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {VOLUME_OPTIONS.map((opt) => {
                                    const selected = volume === opt;
                                    return (
                                        <button
                                            key={opt}
                                            onClick={() => { setVolume(opt); setStep(2); }}
                                            className={`group p-8 rounded-3xl border-2 transition-all text-left flex flex-col gap-3 ${selected ? "border-[#FF6600] bg-[#FF6600]/5" : "border-border/40 bg-card hover:border-[#FF6600]/40 hover:bg-muted/30"}`}
                                        >
                                            <span className="text-2xl font-black text-[#FF6600]">{(d.vol as any)[opt]}</span>
                                            <span className="text-sm text-muted-foreground font-light">{(d.volDesc as any)[opt]}</span>
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="flex justify-start mt-8">
                                <button onClick={() => setStep(0)} className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
                                    <ArrowLeft size={16} /> {d.back}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: format */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-black mb-10 text-center">{d.q3}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {FORMAT_OPTIONS.map((opt) => {
                                    const selected = format === opt;
                                    return (
                                        <button
                                            key={opt}
                                            onClick={() => { setFormat(opt); setStep(3); }}
                                            className={`group p-8 rounded-3xl border-2 transition-all text-left flex flex-col gap-3 ${selected ? "border-[#FF6600] bg-[#FF6600]/5" : "border-border/40 bg-card hover:border-[#FF6600]/40 hover:bg-muted/30"}`}
                                        >
                                            <span className="text-2xl font-black text-[#FF6600]">{(d.fmt as any)[opt]}</span>
                                            <span className="text-sm text-muted-foreground font-light">{(d.fmtDesc as any)[opt]}</span>
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="flex justify-start mt-8">
                                <button onClick={() => setStep(1)} className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
                                    <ArrowLeft size={16} /> {d.back}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: results */}
                    {step === 3 && (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-xs font-black uppercase tracking-widest mb-6">
                                    <CheckCircle2 size={14} /> {d.results}
                                </div>
                                <p className="text-lg text-muted-foreground font-light">{d.resultsSubtitle}</p>
                            </div>

                            {recommendations.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                                    {recommendations.map((r, index) => (
                                        <div key={r.product.id} className="flex flex-col gap-3">
                                            <CatalogProductCard item={r.product as any} locale={locale} index={index} />
                                            {r.reasons.length > 0 && (
                                                <div className="px-4">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 block mb-2">{d.whyMatch}</span>
                                                    <ul className="space-y-1">
                                                        {r.reasons.map((reason, i) => (
                                                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                                                <CheckCircle2 size={12} className="text-[#FF6600] mt-0.5 shrink-0" />
                                                                {reason}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <h3 className="text-2xl font-black mb-3">{d.noResults}</h3>
                                    <p className="text-muted-foreground mb-8">{d.noResultsText}</p>
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                                <button
                                    onClick={restart}
                                    className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-border/60 bg-muted/30 hover:bg-muted text-sm font-black uppercase tracking-widest transition-all"
                                >
                                    <RotateCcw size={14} /> {d.restart}
                                </button>
                                <Link
                                    href="/contacto?tab=book"
                                    className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-border/60 bg-[#FF6600]/10 text-[#FF6600] hover:bg-[#FF6600]/20 text-sm font-black uppercase tracking-widest transition-all"
                                >
                                    <CalendarIcon size={14} /> Agendar Cita
                                </Link>
                                <Link
                                    href="/contacto"
                                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#FF6600] text-white hover:scale-105 text-sm font-black uppercase tracking-widest transition-transform shadow-lg shadow-[#FF6600]/30"
                                >
                                    {d.contactSpecialist} <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
