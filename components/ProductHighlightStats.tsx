"use client";

import { motion } from "framer-motion";
import {
    Thermometer, Gauge, Cpu, Ruler, Zap, Maximize2, Layers, Check, X,
    Sparkles, Hand, Move3d, Timer, ShieldCheck, RefreshCw,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";
import type { Plancha, Locale } from "@/data/products";

interface ProductHighlightStatsProps {
    plancha: Plancha;
}

const dictionary = {
    es: { title: "Datos clave", sub: "Lo más relevante de un vistazo", includes: "Incluye", not_includes: "No incluye" },
    en: { title: "Key data", sub: "What matters most, at a glance", includes: "Included", not_includes: "Not included" },
    pt: { title: "Dados principais", sub: "O mais relevante de uma vista de olhos", includes: "Inclui", not_includes: "Não inclui" },
    it: { title: "Dati chiave", sub: "Cosa conta di più, a colpo d'occhio", includes: "Incluso", not_includes: "Non incluso" },
};

const ICON_RULES: Array<{ keys: string[]; Icon: React.ElementType }> = [
    { keys: ["temp", "calor", "heat"], Icon: Thermometer },
    { keys: ["pres", "press"], Icon: Gauge },
    { keys: ["touch", "tactil", "táctil", "digital", "display", "pantalla"], Icon: Cpu },
    { keys: ["memor"], Icon: Cpu },
    { keys: ["dimen", "medid", "size", "plat", "platen", "platos"], Icon: Layers },
    { keys: ["intercambi", "swap", "quick"], Icon: RefreshCw },
    { keys: ["potenc", "power", "watt", "volt"], Icon: Zap },
    { keys: ["apertur", "opening", "abertura"], Icon: Maximize2 },
    { keys: ["giratori", "swing", "rotat"], Icon: Move3d },
    { keys: ["tiempo", "timer"], Icon: Timer },
    { keys: ["segur", "safety", "protec"], Icon: ShieldCheck },
    { keys: ["mano", "hand", "ergonom"], Icon: Hand },
    { keys: ["mm", "cm"], Icon: Ruler },
];

function pickIcon(label: string): React.ElementType {
    const l = label.toLowerCase();
    for (const r of ICON_RULES) if (r.keys.some((k) => l.includes(k))) return r.Icon;
    return Sparkles;
}

// Clasifica el value: boolean check, boolean cross, numeric, text
type StatKind = "yes" | "no" | "number" | "text";
function classify(value: string): { kind: StatKind; clean: string } {
    const v = value.trim();
    if (v === "✓" || /^(s[ií]|yes|si)$/i.test(v)) return { kind: "yes", clean: v };
    if (v === "✗" || v === "❌" || /^(no)$/i.test(v)) return { kind: "no", clean: v };
    // Numero al inicio: "3", "180°C", "2 platos", "1000 W"
    const m = v.match(/^(\d+(?:[.,]\d+)?)([^\d].*)?$/);
    if (m) return { kind: "number", clean: v };
    return { kind: "text", clean: v };
}

// Mezcla preferida: hasta 2 booleans + 2 numericos (o lo que haya). Limita a 4.
function selectTop(specs: { label: any; value: any }[], locale: Locale) {
    const items = specs
        .filter((s) => s.value !== undefined && s.value !== null && String(s.value).trim().length > 0)
        .map((s) => {
            const label = getLocalized(s.label, locale) || "";
            const c = classify(String(s.value));
            return { label, value: String(s.value), kind: c.kind };
        });
    const yes = items.filter((i) => i.kind === "yes");
    const no = items.filter((i) => i.kind === "no");
    const num = items.filter((i) => i.kind === "number");
    const text = items.filter((i) => i.kind === "text");
    // Prioridad: numericos (mas visuales), luego booleans, luego texto corto
    const ordered = [
        ...num.slice(0, 2),
        ...yes.slice(0, 1),
        ...no.slice(0, 1),
        ...num.slice(2, 3),
        ...text.filter((t) => t.value.length <= 18).slice(0, 1),
    ];
    return ordered.slice(0, 4);
}

export function ProductHighlightStats({ plancha }: ProductHighlightStatsProps) {
    const { locale } = useLanguage();
    const d = dictionary[locale] || dictionary.es;
    const specs = plancha.technicalSpecs || [];
    if (specs.length === 0) return null;

    const top = selectTop(specs as any, locale);
    if (top.length === 0) return null;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
                <span className="inline-block text-[#FF6600] font-black uppercase tracking-[0.4em] text-xs mb-3">{d.title}</span>
                <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">{d.sub}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {top.map((stat, i) => {
                    const Icon = pickIcon(stat.label);
                    const isYes = stat.kind === "yes";
                    const isNo = stat.kind === "no";
                    const isNumber = stat.kind === "number";
                    const numMatch = isNumber ? stat.value.match(/^(\d+(?:[.,]\d+)?)([^\d].*)?$/) : null;
                    const numHead = numMatch?.[1] ?? "";
                    const numTail = numMatch?.[2]?.trim() ?? "";

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-[#1a0a02] border border-[#FF6600]/20 p-7 lg:p-8 shadow-xl shadow-black/20 hover:border-[#FF6600]/50 hover:shadow-2xl hover:shadow-[#FF6600]/20 transition-all min-h-[200px] flex flex-col"
                        >
                            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#FF6600]/10 blur-3xl group-hover:bg-[#FF6600]/25 transition-all duration-500" />
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent" />

                            <div className="relative flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#FF6600]/15 border border-[#FF6600]/30 flex items-center justify-center">
                                    <Icon className="text-[#FF9900]" size={22} />
                                </div>
                                {(isYes || isNo) && (
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${isYes ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30" : "bg-red-500/15 text-red-300 border border-red-500/30"}`}>
                                        {isYes ? d.includes : d.not_includes}
                                    </span>
                                )}
                            </div>

                            {/* Valor principal */}
                            <div className="relative flex-1 flex flex-col justify-end">
                                {isYes && (
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                            <Check className="text-white" size={32} strokeWidth={3} />
                                        </div>
                                    </div>
                                )}
                                {isNo && (
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-zinc-600 to-zinc-800 flex items-center justify-center shadow-lg">
                                            <X className="text-white/70" size={32} strokeWidth={3} />
                                        </div>
                                    </div>
                                )}
                                {isNumber && (
                                    <div className="flex items-baseline gap-1.5 mb-2 leading-none">
                                        <span className="text-5xl lg:text-6xl font-black bg-gradient-to-br from-white via-white to-[#FF9900] bg-clip-text text-transparent tracking-tight">
                                            {numHead}
                                        </span>
                                        {numTail && (
                                            <span className="text-lg font-bold text-white/60">{numTail}</span>
                                        )}
                                    </div>
                                )}
                                {!isYes && !isNo && !isNumber && (
                                    <div className="text-2xl lg:text-3xl font-black text-white leading-tight mb-2 tracking-tight">
                                        {stat.value}
                                    </div>
                                )}

                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
