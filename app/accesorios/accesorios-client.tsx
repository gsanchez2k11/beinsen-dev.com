"use client";

import { useState, useMemo } from "react";
import { allAccessoriesData } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { CatalogProductCard } from "@/components/CatalogProductCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Info, Settings, Filter, ShieldCheck } from "lucide-react";

export default function AccesoriosClient() {
    const { locale } = useLanguage();
    const [searchQuery, setSearchQuery] = useState("");

    const d = {
        es: {
            title: "Ingeniería en Accesorios",
            subtitle: "Cada detalle cuenta. Potencia la versatilidad de tus equipos con componentes originales.",
            infoTitle: "Soporte de Accesorios",
            infoText: "Todos los accesorios Beinsen cuentan con certificación de compatibilidad y están diseñados para el uso rudo industrial.",
            distribution: "Distribución Oficial",
            distributionDesc: "Consulte con su distribuidor autorizado para disponibilidad inmediata.",
            noResults: "No se encontraron accesorios."
        },
        en: {
            title: "Accessory Engineering",
            subtitle: "Every detail matters. Enhance your machines' versatility with original components.",
            infoTitle: "Accessory Support",
            infoText: "All Beinsen accessories are compatibility certified and designed for rugged industrial use.",
            distribution: "Official Distribution",
            distributionDesc: "Consult your authorized dealer for immediate availability.",
            noResults: "No accessories found."
        }
    }[locale === 'pt' || locale === 'it' ? 'es' : locale] || { es: {} }.es;

    const filteredItems = useMemo(() => {
        return allAccessoriesData
            .filter(item => {
                if (!item.name) return false;
                const nameObj = item.name as any;
                const nameStr = typeof nameObj === 'string'
                    ? nameObj
                    : (nameObj[locale] || nameObj['es'] || '');

                return nameStr.toLowerCase().includes(searchQuery.toLowerCase());
            })
            .sort((a, b) => {
                const nameA = (typeof a.name === 'string' ? a.name : (a.name[locale] || a.name['es'] || '')).toLowerCase();
                const nameB = (typeof b.name === 'string' ? b.name : (b.name[locale] || b.name['es'] || '')).toLowerCase();
                return nameA.localeCompare(nameB, locale);
            });
    }, [searchQuery, locale]);

    return (
        <div className="min-h-screen bg-background">
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5 bg-muted/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/5 to-transparent -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                                <Settings size={20} />
                            </div>
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FF6600]">
                                Beinsen Ecosystem
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic leading-[0.9]">
                            {d.title}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl font-light">
                            {d.subtitle}
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row gap-12">

                    <aside className="lg:w-80 shrink-0 space-y-6">
                        <div className="glass-card rounded-[2rem] p-8 border border-white/5">
                            <div className="flex items-center gap-3 mb-6 text-[#FF6600]">
                                <ShieldCheck size={20} />
                                <h3 className="font-black text-sm uppercase tracking-widest">{d.infoTitle}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">
                                {d.infoText}
                            </p>
                            <div className="pt-6 border-t border-white/5">
                                <h4 className="font-bold text-sm mb-2">{d.distribution}</h4>
                                <p className="text-xs text-muted-foreground italic">{d.distributionDesc}</p>
                            </div>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-card/50 border border-white/5 rounded-2xl px-12 py-4 text-sm focus:outline-none focus:border-[#FF6600]/40 transition-all font-light"
                            />
                            <Filter size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-[#FF6600] transition-colors" />
                        </div>
                    </aside>

                    <div className="flex-1">
                        <AnimatePresence mode="popLayout">
                            {filteredItems.length > 0 ? (
                                <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    layout
                                >
                                    {filteredItems.map((item, i) => (
                                        <ScrollReveal key={item.id} delay={i * 0.05}>
                                            <CatalogProductCard
                                                item={item}
                                                locale={locale}
                                                index={i}
                                                // @ts-ignore
                                                onClick={() => {}}
                                            />
                                        </ScrollReveal>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center justify-center py-40 text-center opacity-40"
                                >
                                    <Info size={48} className="mb-4" />
                                    <p className="text-lg font-black uppercase tracking-widest">{d.noResults}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
}
