"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Search, Check, ArrowRight, Scale, Zap } from "lucide-react";
import { planchasData } from "@/data/products";
import { getLocalized } from "@/lib/i18n";
import { SupportContactCTA } from "@/components/SupportContactCTA";
import { enrichWithLocalImages } from "@/lib/productImages";
import { useLanguage } from "@/context/LanguageContext";
import { PRICES_VISIBLE } from "@/lib/pricing";

const MAX_SLOTS = 3;

export default function CompararClient() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background pt-32 text-center font-black uppercase tracking-[0.3em] opacity-40">Cargando...</div>}>
            <CompareContent />
        </Suspense>
    );
}

function CompareContent() {
    const { locale } = useLanguage();
    const router = useRouter();
    const searchParams = useSearchParams();

    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [pickerOpenFor, setPickerOpenFor] = useState<number | null>(null);
    const [pickerQuery, setPickerQuery] = useState("");

    // Initialize from URL
    useEffect(() => {
        const ids = searchParams.get("ids");
        if (ids) {
            const parsed = ids.split(",").filter(Boolean).slice(0, MAX_SLOTS);
            setSelectedIds(parsed);
        }
    }, [searchParams]);

    // Sync to URL
    useEffect(() => {
        const qs = selectedIds.length > 0 ? `?ids=${selectedIds.join(",")}` : "";
        router.replace(`/comparar${qs}`, { scroll: false });
    }, [selectedIds, router]);

    const d = {
        es: {
            tag: "Comparador Beinsen",
            title: "Compara modelos",
            subtitle: "Elige hasta 3 máquinas y compáralas fila a fila. Perfecto para decidir con criterio.",
            addMachine: "Añadir máquina",
            pickerTitle: "Elige una máquina",
            searchPlaceholder: "Buscar modelo...",
            empty: "Todavía no has añadido ninguna máquina.",
            emptyHint: "Pulsa un slot para empezar.",
            specCategory: "Categoría",
            specSystem: "Sistema",
            specFormat: "Formato",
            specPrice: "PVP",
            specPrice_fallback: "Consultar PVP",
            viewDetail: "Ver ficha",
            removeAll: "Quitar todo",
        },
        en: {
            tag: "Beinsen Compare",
            title: "Compare models",
            subtitle: "Pick up to 3 machines and compare them side by side. Make the call with full context.",
            addMachine: "Add machine",
            pickerTitle: "Pick a machine",
            searchPlaceholder: "Search model...",
            empty: "No machines selected yet.",
            emptyHint: "Click a slot to start.",
            specCategory: "Category",
            specSystem: "System",
            specFormat: "Format",
            specPrice: "Retail Price",
            specPrice_fallback: "Check price",
            viewDetail: "View details",
            removeAll: "Clear all",
        },
        pt: {
            tag: "Comparador Beinsen",
            title: "Comparar modelos",
            subtitle: "Escolha até 3 máquinas e compare-as linha a linha. Perfeito para decidir com critério.",
            addMachine: "Adicionar máquina",
            pickerTitle: "Escolha uma máquina",
            searchPlaceholder: "Procurar modelo...",
            empty: "Ainda não adicionou nenhuma máquina.",
            emptyHint: "Clique num espaço para começar.",
            specCategory: "Categoria",
            specSystem: "Sistema",
            specFormat: "Formato",
            specPrice: "PVP",
            specPrice_fallback: "Consultar PVP",
            viewDetail: "Ver ficha",
            removeAll: "Remover tudo",
        },
        it: {
            tag: "Comparatore Beinsen",
            title: "Confronta modelli",
            subtitle: "Scegli fino a 3 macchine e confrontale riga per riga. Perfetto per decidere con criterio.",
            addMachine: "Aggiungi macchina",
            pickerTitle: "Scegli una macchina",
            searchPlaceholder: "Cerca modello...",
            empty: "Non hai ancora aggiunto alcuna macchina.",
            emptyHint: "Clicca su uno slot per iniziare.",
            specCategory: "Categoria",
            specSystem: "Sistema",
            specFormat: "Formato",
            specPrice: "Prezzo al pubblico",
            specPrice_fallback: "Richiedi prezzo",
            viewDetail: "Vedi scheda",
            removeAll: "Rimuovi tutto",
        }
    }[locale] || { es: {} }.es;

    const machines = useMemo(() => planchasData.map(p => enrichWithLocalImages(p as any)), []);

    const selectedProducts = useMemo(() =>
        selectedIds.map(id => machines.find(m => m.id === id)).filter(Boolean) as any[],
        [selectedIds, machines]
    );

    const filteredPicker = useMemo(() => {
        const q = pickerQuery.toLowerCase();
        return machines
            .filter(m => !selectedIds.includes(m.id))
            .filter(m => {
                if (!q) return true;
                const name = (getLocalized(m.name, locale) || "").toLowerCase();
                return name.includes(q);
            })
            .sort((a, b) => (getLocalized(a.name, locale) || "").localeCompare(getLocalized(b.name, locale) || "", locale));
    }, [machines, selectedIds, pickerQuery, locale]);

    // Union of all spec labels across selected (ordered as first occurrence)
    const specRows = useMemo(() => {
        const seen = new Set<string>();
        const labels: string[] = [];
        for (const p of selectedProducts) {
            for (const spec of (p.technicalSpecs || [])) {
                const label = typeof spec.label === "object" ? getLocalized(spec.label, locale) : spec.label;
                if (label && !seen.has(label)) {
                    seen.add(label);
                    labels.push(label);
                }
            }
        }
        return labels;
    }, [selectedProducts, locale]);

    const addProduct = (id: string, slotIdx: number) => {
        setSelectedIds(prev => {
            const copy = [...prev];
            copy[slotIdx] = id;
            return copy.filter(Boolean);
        });
        setPickerOpenFor(null);
        setPickerQuery("");
    };

    const removeProduct = (id: string) => {
        setSelectedIds(prev => prev.filter(x => x !== id));
    };

    const getSpecValue = (product: any, label: string): string => {
        const spec = (product.technicalSpecs || []).find((s: any) => {
            const sLabel = typeof s.label === "object" ? getLocalized(s.label, locale) : s.label;
            return sLabel === label;
        });
        if (!spec) return "—";
        const v = typeof spec.value === "object" ? getLocalized(spec.value, locale) : spec.value;
        return v || "—";
    };

    const formatPrice = (p: any) => {
        if (!PRICES_VISIBLE) return d.specPrice_fallback;
        const shown = p.pvp ?? p.price;
        if (shown === undefined || shown === "Consultar PVP") return d.specPrice_fallback;
        return typeof shown === "number" ? `${shown.toLocaleString(locale === "en" ? "en-GB" : "es-ES")} €` : shown;
    };

    const slots = Array.from({ length: MAX_SLOTS }, (_, i) => selectedProducts[i] || null);

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 selection:bg-[#FF6600] selection:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-[#FF6600]/10 text-[#FF6600] text-xs font-black uppercase tracking-[0.2em] mb-8 border border-[#FF6600]/20"
                    >
                        <Scale size={14} /> {d.tag}
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic">
                        {d.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                        {d.subtitle}
                    </p>
                </div>

                {/* Slot row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {slots.map((product, idx) => (
                        <div key={idx} className="relative">
                            {product ? (
                                <div className="bg-card border border-border/40 rounded-3xl p-6 flex flex-col gap-4 shadow-sm">
                                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                                        {product.image && (
                                            <Image
                                                src={product.image}
                                                alt={getLocalized(product.name, locale) || ""}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-contain p-6"
                                            />
                                        )}
                                        <button
                                            onClick={() => removeProduct(product.id)}
                                            aria-label="Remove"
                                            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/90 backdrop-blur-md text-muted-foreground hover:text-[#FF6600] hover:scale-110 transition-all flex items-center justify-center shadow-lg"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>
                                    <h3 className="font-black text-lg tracking-tight text-center">
                                        {getLocalized(product.name, locale)}
                                    </h3>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setPickerOpenFor(idx)}
                                    className="w-full aspect-[4/5] md:aspect-auto md:min-h-[22rem] rounded-3xl border-2 border-dashed border-border hover:border-[#FF6600] hover:bg-[#FF6600]/5 transition-all flex flex-col items-center justify-center gap-3 text-muted-foreground hover:text-[#FF6600]"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                                        <Plus size={28} />
                                    </div>
                                    <span className="text-sm font-black uppercase tracking-widest">{d.addMachine}</span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Comparison table */}
                {selectedProducts.length > 0 ? (
                    <div className="bg-card border border-border/40 rounded-3xl overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <tbody>
                                    <ComparisonRow
                                        label={d.specPrice}
                                        values={selectedProducts.map(p => <span className="font-black text-[#FF6600]">{formatPrice(p)}</span>)}
                                        accent
                                    />
                                    <ComparisonRow
                                        label={d.specCategory}
                                        values={selectedProducts.map(p => getLocalized(p.category, locale) || "—")}
                                    />
                                    <ComparisonRow
                                        label={d.specSystem}
                                        values={selectedProducts.map(p => getLocalized(p.openingType, locale) || "—")}
                                    />
                                    <ComparisonRow
                                        label={d.specFormat}
                                        values={selectedProducts.map(p => getLocalized(p.size, locale) || "—")}
                                    />
                                    {specRows.map((label) => (
                                        <ComparisonRow
                                            key={label}
                                            label={label}
                                            values={selectedProducts.map(p => getSpecValue(p, label))}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-6 border-t border-border/40 flex flex-wrap justify-between items-center gap-4">
                            <button
                                onClick={() => setSelectedIds([])}
                                className="text-sm font-bold text-muted-foreground hover:text-foreground"
                            >
                                {d.removeAll}
                            </button>
                            <div className="flex flex-wrap gap-2">
                                {selectedProducts.map((p) => (
                                    <Link
                                        key={p.id}
                                        href={`/catalogo/${p.slug}`}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF6600]/10 hover:bg-[#FF6600] text-[#FF6600] hover:text-white text-xs font-black uppercase tracking-widest transition-all"
                                    >
                                        {getLocalized(p.name, locale)} <ArrowRight size={12} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-16 text-muted-foreground">
                        <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center">
                            <Zap size={32} className="opacity-40" />
                        </div>
                        <p className="text-lg font-bold mb-1">{d.empty}</p>
                        <p className="text-sm">{d.emptyHint}</p>
                    </div>
                )}

                {/* Picker modal */}
                <AnimatePresence>
                    {pickerOpenFor !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[200] bg-background/80 backdrop-blur-xl flex items-start justify-center p-4 pt-24"
                            onClick={() => { setPickerOpenFor(null); setPickerQuery(""); }}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="bg-card border border-border rounded-3xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-6 border-b border-border/40">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-black text-xl">{d.pickerTitle}</h3>
                                        <button
                                            onClick={() => { setPickerOpenFor(null); setPickerQuery(""); }}
                                            className="w-9 h-9 rounded-full bg-muted hover:bg-border flex items-center justify-center"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                        <input
                                            autoFocus
                                            type="text"
                                            value={pickerQuery}
                                            onChange={(e) => setPickerQuery(e.target.value)}
                                            placeholder={d.searchPlaceholder}
                                            className="w-full bg-muted/50 border border-border/60 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6600]/20"
                                        />
                                    </div>
                                </div>
                                <div className="overflow-y-auto flex-1">
                                    {filteredPicker.map((m) => (
                                        <button
                                            key={m.id}
                                            onClick={() => addProduct(m.id, pickerOpenFor)}
                                            className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-all text-left border-b border-border/20 last:border-b-0"
                                        >
                                            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-muted shrink-0">
                                                {m.image && (
                                                    <Image src={m.image} alt={getLocalized(m.name, locale) || ""} fill sizes="56px" className="object-contain p-1" />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-black text-sm truncate">{getLocalized(m.name, locale)}</div>
                                                <div className="text-xs text-muted-foreground">{getLocalized(m.category, locale)} · {getLocalized(m.openingType, locale)}</div>
                                            </div>
                                            <Check size={16} className="text-muted-foreground shrink-0" />
                                        </button>
                                    ))}
                                    {filteredPicker.length === 0 && (
                                        <div className="p-8 text-center text-sm text-muted-foreground">—</div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <SupportContactCTA />
        </div>
    );
}

function ComparisonRow({ label, values, accent }: { label: string; values: React.ReactNode[]; accent?: boolean }) {
    return (
        <tr className={`border-b border-border/20 last:border-b-0 ${accent ? "bg-[#FF6600]/5" : ""}`}>
            <th scope="row" className="text-left text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/70 p-4 w-48 align-top">
                {label}
            </th>
            {values.map((v, i) => (
                <td key={i} className="p-4 text-sm font-medium align-top">
                    {v}
                </td>
            ))}
        </tr>
    );
}
