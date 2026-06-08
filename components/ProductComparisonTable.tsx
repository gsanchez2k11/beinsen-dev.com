"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";
import { PRICES_VISIBLE } from "@/lib/pricing";
import type { Plancha } from "@/data/products";

interface ProductComparisonTableProps {
    plancha: Plancha;
    similar: Plancha[];
}

const dictionary = {
    es: {
        title: "Comparativa rápida",
        sub: "Cómo se compara con otros modelos de la misma categoría",
        current: "Este modelo",
        opening: "Apertura",
        size: "Tamaño",
        price: "PVP",
        consult: "Consultar",
        view: "Ver",
    },
    en: {
        title: "Quick comparison",
        sub: "How it stacks up against other models in the same category",
        current: "This model",
        opening: "Opening",
        size: "Size",
        price: "Price",
        consult: "Check price",
        view: "View",
    },
    pt: {
        title: "Comparativa rápida",
        sub: "Como se compara com outros modelos da mesma categoria",
        current: "Este modelo",
        opening: "Abertura",
        size: "Tamanho",
        price: "PVP",
        consult: "Consultar",
        view: "Ver",
    },
    it: {
        title: "Confronto rapido",
        sub: "Come si confronta con altri modelli della stessa categoria",
        current: "Questo modello",
        opening: "Apertura",
        size: "Dimensione",
        price: "PVP",
        consult: "Consultare",
        view: "Vedi",
    },
};

function priceLabel(p: any, lang: string, consultLabel: string): string {
    const shown = p?.pvp ?? p?.price;
    if (!PRICES_VISIBLE) return consultLabel;
    if (shown === undefined || shown === "Consultar PVP") return consultLabel;
    if (typeof shown === "number") return `${shown.toLocaleString(lang === "en" ? "en-GB" : "es-ES")} €`;
    return String(shown);
}

export function ProductComparisonTable({ plancha, similar }: ProductComparisonTableProps) {
    const { locale } = useLanguage();
    const d = dictionary[locale] || dictionary.es;

    if (!similar || similar.length === 0) return null;

    // Limita a 3 modelos similares + el actual (4 columnas en total)
    const others = similar.slice(0, 3);
    const all: Array<{ p: Plancha; isCurrent: boolean }> = [
        { p: plancha, isCurrent: true },
        ...others.map((o) => ({ p: o, isCurrent: false })),
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
                <span className="inline-block text-[#FF6600] font-black uppercase tracking-[0.4em] text-xs mb-3">{d.title}</span>
                <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">{d.sub}</h3>
            </div>

            <div className={`grid gap-5 ${all.length === 2 ? "grid-cols-1 md:grid-cols-2" : all.length === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}`}>
                {all.map(({ p, isCurrent }, i) => {
                    const name = getLocalized(p.name, locale) || "";
                    const opening = getLocalized(p.openingType, locale) || "—";
                    const size = getLocalized(p.size, locale) || "—";
                    const price = priceLabel(p as any, locale, d.consult);

                    return (
                        <motion.div
                            key={p.slug || i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative overflow-hidden rounded-3xl border p-6 transition-all flex flex-col
                                ${isCurrent
                                    ? "bg-gradient-to-br from-[#FF6600]/5 to-[#FF9900]/5 border-[#FF6600]/40 shadow-xl shadow-[#FF6600]/15 ring-2 ring-[#FF6600]/30"
                                    : "bg-card border-border/40 hover:border-[#FF6600]/30 hover:shadow-lg"
                                }`}
                        >
                            {isCurrent && (
                                <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FF6600] text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#FF6600]/40">
                                    <Star size={11} fill="white" /> {d.current}
                                </div>
                            )}

                            <div className="relative w-full aspect-[4/3] bg-muted rounded-2xl overflow-hidden mb-5">
                                {p.image && (
                                    <Image
                                        src={p.image}
                                        alt={name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        className="object-contain p-4"
                                    />
                                )}
                            </div>

                            <h4 className={`font-black text-base leading-tight mb-4 ${isCurrent ? "text-[#FF6600]" : "text-foreground"}`}>{name}</h4>

                            <dl className="space-y-3 text-sm flex-1">
                                <div className="flex justify-between gap-2">
                                    <dt className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">{d.opening}</dt>
                                    <dd className="font-bold text-foreground text-right">{opening}</dd>
                                </div>
                                <div className="flex justify-between gap-2">
                                    <dt className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">{d.size}</dt>
                                    <dd className="font-bold text-foreground text-right">{size}</dd>
                                </div>
                                <div className="flex justify-between gap-2 pt-2 border-t border-border/40">
                                    <dt className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">{d.price}</dt>
                                    <dd className={`font-black text-right ${isCurrent ? "text-[#FF6600]" : "text-foreground"}`}>{price}</dd>
                                </div>
                            </dl>

                            {!isCurrent && p.slug && (
                                <Link
                                    href={`/catalogo/${p.slug}`}
                                    className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-muted hover:bg-[#FF6600] hover:text-white text-foreground text-xs font-black uppercase tracking-widest transition-all"
                                >
                                    {d.view} <ArrowRight size={13} />
                                </Link>
                            )}
                            {isCurrent && (
                                <div className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#FF6600]/15 text-[#FF6600] text-xs font-black uppercase tracking-widest">
                                    <Check size={13} /> {d.current}
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
