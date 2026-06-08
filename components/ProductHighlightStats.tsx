"use client";

import { motion } from "framer-motion";
import { Thermometer, Gauge, Cpu, Ruler, Zap, Maximize2, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";
import type { Plancha } from "@/data/products";

interface ProductHighlightStatsProps {
    plancha: Plancha;
}

const dictionary = {
    es: { title: "Datos clave", sub: "Lo más relevante de un vistazo" },
    en: { title: "Key data", sub: "What matters most, at a glance" },
    pt: { title: "Dados principais", sub: "O mais relevante de uma vista de olhos" },
    it: { title: "Dati chiave", sub: "Cosa conta di più, a colpo d'occhio" },
};

// Heuristica: por palabras clave del label asignar el icono mas adecuado
function pickIcon(label: string) {
    const l = label.toLowerCase();
    if (l.includes("temp") || l.includes("calor") || l.includes("heat")) return Thermometer;
    if (l.includes("pres") || l.includes("press")) return Gauge;
    if (l.includes("memor") || l.includes("digital") || l.includes("control") || l.includes("touch")) return Cpu;
    if (l.includes("dimen") || l.includes("medid") || l.includes("size") || l.includes("plat")) return Ruler;
    if (l.includes("potenc") || l.includes("power") || l.includes("watt") || l.includes("volt")) return Zap;
    if (l.includes("apertur") || l.includes("opening") || l.includes("abertura")) return Maximize2;
    return Layers;
}

export function ProductHighlightStats({ plancha }: ProductHighlightStatsProps) {
    const { locale } = useLanguage();
    const d = dictionary[locale] || dictionary.es;
    const specs = plancha.technicalSpecs || [];
    if (specs.length === 0) return null;

    // Selecciona las 4 specs con value mas corto (cifras o keywords) — son las que
    // visualmente quedan mejor como "data point" destacado.
    const top = [...specs]
        .filter((s) => s.value && String(s.value).length > 0)
        .sort((a, b) => String(a.value).length - String(b.value).length)
        .slice(0, 4);

    if (top.length === 0) return null;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
                <span className="inline-block text-[#FF6600] font-black uppercase tracking-[0.4em] text-xs mb-3">{d.title}</span>
                <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">{d.sub}</h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {top.map((spec, i) => {
                    const label = getLocalized(spec.label, locale) || "";
                    const Icon = pickIcon(label);
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-[#1a0a02] border border-[#FF6600]/20 p-7 lg:p-9 shadow-xl shadow-black/20 hover:border-[#FF6600]/50 hover:shadow-2xl hover:shadow-[#FF6600]/20 transition-all"
                        >
                            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#FF6600]/10 blur-3xl group-hover:bg-[#FF6600]/20 transition-all duration-500" />
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent" />

                            <div className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-[#FF6600]/15 border border-[#FF6600]/30 flex items-center justify-center mb-5">
                                    <Icon className="text-[#FF9900]" size={26} />
                                </div>
                                <div className="text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-2">
                                    {String(spec.value)}
                                </div>
                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                                    {label}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
