"use client";

import { motion } from "framer-motion";
import { Cpu, Gauge, ShieldCheck, RefreshCw, Zap, Layers, Lock, Hand, Sparkles, Move3d, Timer, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";
import type { Plancha } from "@/data/products";

interface ProductTechBadgesProps {
    plancha: Plancha;
}

const dictionary = {
    es: { title: "Tecnologías incluidas", sub: "Lo que la hace diferente" },
    en: { title: "Built-in technology", sub: "What makes it different" },
    pt: { title: "Tecnologias incluídas", sub: "O que a faz diferente" },
    it: { title: "Tecnologie incluse", sub: "Cosa la rende diversa" },
};

// Mapea keywords del feature -> icono. La primera coincidencia gana.
const RULES: Array<{ keys: string[]; Icon: React.ElementType }> = [
    { keys: ["control", "digital", "touch", "pantalla", "display", "memor"], Icon: Cpu },
    { keys: ["presi", "pression", "pressure", "neumat", "pneuma"], Icon: Gauge },
    { keys: ["segur", "safety", "anti-pelliz", "anti pelliz", "pinch", "protect"], Icon: ShieldCheck },
    { keys: ["intercambi", "swap", "cambio rap", "quick-change", "cambio rápid", "quick change"], Icon: RefreshCw },
    { keys: ["electric", "eléctric", "elettric", "potenc", "watt", "voltaj"], Icon: Zap },
    { keys: ["plato", "platen", "doble plat", "double plate", "plat doppi"], Icon: Layers },
    { keys: ["bloqu", "lock", "cierre", "block"], Icon: Lock },
    { keys: ["doble mano", "two-hand", "two hand", "manual", "ergonom"], Icon: Hand },
    { keys: ["giratori", "swing-away", "swing away", "rotativ", "180"], Icon: Move3d },
    { keys: ["temporiz", "timer", "tiempo", "time"], Icon: Timer },
    { keys: ["manten", "maintenance", "service"], Icon: Wrench },
];

function pickIcon(text: string): React.ElementType {
    const t = text.toLowerCase();
    for (const r of RULES) {
        if (r.keys.some((k) => t.includes(k))) return r.Icon;
    }
    return Sparkles;
}

// Extrae un titulo corto del feature (primeras 5-7 palabras o hasta el primer ":")
function shortTitle(text: string): string {
    const colon = text.indexOf(":");
    const base = colon !== -1 ? text.slice(0, colon) : text;
    const words = base.split(/\s+/).slice(0, 8).join(" ");
    return words.length < base.length ? words + "…" : words;
}

export function ProductTechBadges({ plancha }: ProductTechBadgesProps) {
    const { locale } = useLanguage();
    const d = dictionary[locale] || dictionary.es;
    const features = getLocalized(plancha.features, locale) || [];
    if (!Array.isArray(features) || features.length === 0) return null;

    const items = features.slice(0, 8).map((f) => ({ text: f, Icon: pickIcon(f) }));

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
                <span className="inline-block text-[#FF6600] font-black uppercase tracking-[0.4em] text-xs mb-3">{d.title}</span>
                <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">{d.sub}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((it, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
                        className="group relative flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/40 hover:border-[#FF6600]/40 hover:shadow-lg hover:shadow-[#FF6600]/10 transition-all"
                    >
                        <div className="shrink-0 w-11 h-11 rounded-xl bg-[#FF6600]/10 flex items-center justify-center group-hover:bg-[#FF6600]/20 transition-colors">
                            <it.Icon className="text-[#FF6600]" size={20} />
                        </div>
                        <div className="min-w-0 pt-0.5">
                            <div className="font-bold text-sm text-foreground leading-snug">{shortTitle(it.text)}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
