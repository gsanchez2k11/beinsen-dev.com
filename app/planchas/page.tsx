"use client";

import { useState, useMemo, useEffect, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { planchasData, allAccessoriesData, allConsumablesData } from "@/data/products";
import { Tag, Zap, Search, Package, Filter, SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";
import { CatalogProductCard } from "@/components/CatalogProductCard";

const CATEGORIES = ["Todas", "Textil", "Tazas y Botellas", "Gorras", "Especializadas", "Multifunción"];
const OPENING_TYPES = ["Cualquiera", "Manual", "Electromagnética", "Neumática", "Eléctrica"];
const FORMATS = ["Cualquiera", "Compacta", "Estándar", "Industrial", "Estación de trabajo"];
const PLATE_TYPES = ["Cualquiera", "Intercambiable", "Fijo"];

const CATEGORIES_LABELS = {
    es: ["Todas", "Textil", "Tazas y Botellas", "Gorras", "Especializadas", "Multifunción"],
    en: ["All", "Textile", "Mugs & Bottles", "Caps", "Specialized", "Multifunction"],
    pt: ["Todas", "Têxtil", "Canecas e Garrafas", "Bonés", "Especializadas", "Multifunção"],
    it: ["Tutte", "Tessile", "Tazze e Bottiglie", "Cappelli", "Specializzate", "Multifunzione"]
};

const OPENING_TYPES_LABELS = {
    es: ["Cualquiera", "Manual", "Electromagnética", "Neumática", "Eléctrica"],
    en: ["Any", "Manual", "Electromagnetic", "Pneumatic", "Electric"],
    pt: ["Qualquer", "Manual", "Eletromagnética", "Pneumática", "Elétrica"],
    it: ["Qualsiasi", "Manuale", "Elettromagnetica", "Pneumatica", "Elettrica"]
};

const FORMATS_LABELS = {
    es: ["Cualquiera", "Compacta", "Estándar", "Industrial", "Estación de trabajo"],
    en: ["Any", "Compact", "Standard", "Industrial", "Workstation"],
    pt: ["Qualquer", "Compacta", "Padrão", "Industrial", "Estação de trabalho"],
    it: ["Qualsiasi", "Compatta", "Standard", "Industriale", "Postazione di lavoro"]
};

const PLATE_TYPES_LABELS = {
    es: ["Cualquiera", "Intercambiable", "Fijo"],
    en: ["Any", "Interchangeable", "Fixed"],
    pt: ["Qualquer", "Intercambiável", "Fixo"],
    it: ["Qualsiasi", "Intercambiabile", "Fisso"]
};

const PAGE_SIZE = 8;

export default function PlanchasCatalog() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background pt-32 text-center font-black uppercase tracking-[0.3em] opacity-40">Cargando...</div>}>
            <PlanchasCatalogContent />
        </Suspense>
    );
}

function SectionHeader({ icon: Icon, title, count, total }: { icon: any; title: string; count: number; total: number }) {
    return (
        <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF6600]/10 flex items-center justify-center">
                    <Icon size={16} className="text-[#FF6600]" />
                </div>
                <h2 className="text-lg font-black uppercase tracking-[0.3em]">{title}</h2>
            </div>
            <div className="h-px flex-1 bg-border/40" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                {count} / {total}
            </span>
        </div>
    );
}

function LoadMoreButton({ onClick, label }: { onClick: () => void; label: string }) {
    return (
        <div className="flex justify-center mt-10 mb-4">
            <button
                onClick={onClick}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-border/60 bg-muted/40 hover:bg-[#FF6600]/10 hover:border-[#FF6600]/40 hover:text-[#FF6600] text-sm font-black uppercase tracking-widest transition-all group"
            >
                <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                {label}
            </button>
        </div>
    );
}

function PlanchasCatalogContent() {
    const { locale } = useLanguage();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [activeType, setActiveType] = useState<"all" | "planchas" | "accessories" | "consumables">("all");
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeOpeningIndex, setActiveOpeningIndex] = useState(0);
    const [activeFormatIndex, setActiveFormatIndex] = useState(0);
    const [activePlateIndex, setActivePlateIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const prevTypeRef = useRef<string | null>(null);

    // Per-section visible counts
    const [visibleMachines, setVisibleMachines] = useState(PAGE_SIZE);
    const [visibleAccessories, setVisibleAccessories] = useState(PAGE_SIZE);
    const [visibleConsumables, setVisibleConsumables] = useState(PAGE_SIZE);

    // Compatible machine filter (for accessories & consumables views)
    const [selectedMachine, setSelectedMachine] = useState("");

    // Reset visible counts when filters change
    useEffect(() => {
        setVisibleMachines(PAGE_SIZE);
        setVisibleAccessories(PAGE_SIZE);
        setVisibleConsumables(PAGE_SIZE);
    }, [activeType, activeCategoryIndex, activeOpeningIndex, activeFormatIndex, activePlateIndex, searchQuery, selectedMachine]);

    // Initialize from URL on first mount
    useEffect(() => {
        setMounted(true);
        const params = new URLSearchParams(window.location.search);
        const typeParam = params.get("type");
        if (typeParam && ["planchas", "accessories", "consumables"].includes(typeParam)) {
            setActiveType(typeParam as any);
            prevTypeRef.current = typeParam;
        }
        setIsInitialLoad(false);
    }, []);

    // Also listen to searchParams changes for client-side navigation
    useEffect(() => {
        if (!mounted) return;
        const type = searchParams.get('type');
        if (type !== prevTypeRef.current) {
            prevTypeRef.current = type;
            if (type && ["planchas", "accessories", "consumables"].includes(type)) {
                setActiveType(type as any);
            } else {
                setActiveType('all');
            }
            setActiveCategoryIndex(0);
            setActiveOpeningIndex(0);
            setActiveFormatIndex(0);
            setActivePlateIndex(0);
            setSearchQuery("");
            setSelectedMachine("");
        }
    }, [searchParams, mounted]);

    // Update URL when activeType changes (but not on initial load)
    useEffect(() => {
        if (isInitialLoad || !mounted) return;
        if (activeType === "all") {
            router.push("/planchas");
        } else {
            router.push(`/planchas?type=${activeType}`);
        }
        prevTypeRef.current = activeType === "all" ? null : activeType;
    }, [activeType, isInitialLoad, mounted, router]);

    const categoryLabels = CATEGORIES_LABELS[locale] || CATEGORIES_LABELS.es;
    const openingLabels = OPENING_TYPES_LABELS[locale] || OPENING_TYPES_LABELS.es;
    const formatLabels = FORMATS_LABELS[locale] || FORMATS_LABELS.es;
    const plateLabels = PLATE_TYPES_LABELS[locale] || PLATE_TYPES_LABELS.es;

    const d = {
        es: {
            title: "Catálogo",
            highlight: "Beinsen",
            tag: "Tecnología de Transferencia",
            subtitle: "Explora nuestra gama de soluciones industriales para sublimación y transfer textil.",
            searchPlaceholder: "Modelo, categoría o componente...",
            filters: "Filtros",
            catLabel: "Especialidad",
            openLabel: "Sistema",
            formatLabel: "Formato",
            plateLabel: "Plato",
            clear: "Limpiar",
            results: "items",
            showing: "Mostrando",
            noResults: "Sin coincidencias",
            noResultsText: "Prueba a ajustar tus filtros o busca un término más sencillo.",
            clearBtn: "Restablecer filtros",
            all: "Todo el catálogo",
            machines: "Máquinas",
            accessories: "Accesorios",
            consumables: "Consumibles",
            filterTitle: "Búsqueda Avanzada",
            loadMore: "Ver más",
            compatibleWith: "Máquina compatible",
            allMachines: "Todas las máquinas",
        },
        en: {
            title: "Catalog",
            highlight: "Beinsen",
            tag: "Transfer Technology",
            subtitle: "Explore our range of industrial solutions for sublimation and textile transfer.",
            searchPlaceholder: "Model, category or component...",
            filters: "Filters",
            catLabel: "Specialty",
            openLabel: "System",
            formatLabel: "Format",
            plateLabel: "Plate",
            clear: "Clear",
            results: "items",
            showing: "Showing",
            noResults: "No matches",
            noResultsText: "Try adjusting your filters or search for a simpler term.",
            clearBtn: "Reset filters",
            all: "All items",
            machines: "Machines",
            accessories: "Accessories",
            consumables: "Consumables",
            filterTitle: "Advanced Search",
            loadMore: "Load more",
            compatibleWith: "Compatible machine",
            allMachines: "All machines",
        }
    }[locale === 'pt' || locale === 'it' ? 'es' : locale] || { es: {} }.es;

    // Map: model name (first word of localized name) → { accIds, consIds }
    const machineCompatMap = useMemo(() => {
        const map = new Map<string, { accIds: Set<string>; consIds: Set<string> }>();
        planchasData.forEach(p => {
            const fullName = getLocalized(p.name, locale) || getLocalized(p.name, 'es') || p.id;
            const modelName = fullName.split(" ")[0]; // "Barein Plancha Térmica" → "Barein"
            map.set(modelName, {
                accIds: new Set((p.accessories || []).map((a: any) => a.id)),
                consIds: new Set((p.consumables || []).map((c: any) => c.id)),
            });
        });
        return map;
    }, [locale]);

    const machineModelNames = useMemo(() =>
        Array.from(machineCompatMap.keys()).sort((a, b) => a.localeCompare(b, 'es')),
        [machineCompatMap]
    );

    const applyCommonFilters = (items: any[]) => {
        const selectedCategory = CATEGORIES[activeCategoryIndex];
        const selectedOpening = OPENING_TYPES[activeOpeningIndex];
        const lowerSearchQuery = searchQuery.toLowerCase();
        const hasSearch = searchQuery.length > 0;

        return items.filter((item: any) => {
            const itemCat = typeof item.category === 'object' ? getLocalized(item.category, 'es') : item.category;
            const itemOpen = typeof item.openingType === 'object' ? getLocalized(item.openingType, 'es') : item.openingType;
            const itemName = typeof item.name === 'object' ? (getLocalized(item.name, locale) || "") : (item.name as string);

            const matchesCategory = activeCategoryIndex === 0 || itemCat === selectedCategory;
            const matchesOpening = activeOpeningIndex === 0 || itemOpen === selectedOpening;
            const itemRef = (item.reference || "").toString().toLowerCase();
            const matchesSearch = !hasSearch || itemName.toLowerCase().includes(lowerSearchQuery) || itemRef.includes(lowerSearchQuery);

            return matchesCategory && matchesOpening && matchesSearch;
        });
    };

    const filteredMachines = useMemo(() => {
        const base = applyCommonFilters(planchasData.map(p => ({ ...p, _type: 'planchas' })));
        const selectedFormat = FORMATS[activeFormatIndex];
        const selectedPlate = PLATE_TYPES[activePlateIndex];
        return base.filter((item: any) => {
            if (activeFormatIndex !== 0) {
                const itemSize = typeof item.size === 'object' ? getLocalized(item.size, 'es') : item.size;
                if (itemSize !== selectedFormat) return false;
            }
            if (activePlateIndex !== 0) {
                const spec = (item.technicalSpecs || []).find((s: any) => {
                    const label = typeof s.label === 'object' ? s.label.es : s.label;
                    return label && label.toLowerCase().includes("platos intercambiables");
                });
                const value = spec ? (typeof spec.value === 'object' ? spec.value.es : spec.value) : "";
                const isInterchangeable = value && value.includes("✓");
                const wantInterchangeable = selectedPlate === "Intercambiable";
                if (isInterchangeable !== wantInterchangeable) return false;
            }
            return true;
        });
    }, [activeCategoryIndex, activeOpeningIndex, activeFormatIndex, activePlateIndex, searchQuery, locale]);

    const filteredAccessories = useMemo(() => {
        const base = applyCommonFilters(allAccessoriesData.map(a => ({ ...a, _type: 'accessories', category: { es: 'Accesorio', en: 'Accessory' }, openingType: { es: 'Hardware', en: 'Hardware' } })));
        if (!selectedMachine) return base;
        const allowed = machineCompatMap.get(selectedMachine)?.accIds;
        return allowed ? base.filter((a: any) => allowed.has(a.id)) : base;
    }, [activeCategoryIndex, activeOpeningIndex, searchQuery, locale, selectedMachine, machineCompatMap]);

    const filteredConsumables = useMemo(() => {
        const base = applyCommonFilters(allConsumablesData.map(c => ({ ...c, _type: 'consumables', category: { es: 'Consumible', en: 'Consumable' }, openingType: { es: 'Químico/Material', en: 'Chemical/Material' } })));
        if (!selectedMachine) return base;
        const allowed = machineCompatMap.get(selectedMachine)?.consIds;
        return allowed ? base.filter((c: any) => allowed.has(c.id)) : base;
    }, [activeCategoryIndex, activeOpeningIndex, searchQuery, locale, selectedMachine, machineCompatMap]);

    const totalFiltered = useMemo(() => {
        if (activeType === 'all') return filteredMachines.length + filteredAccessories.length + filteredConsumables.length;
        if (activeType === 'planchas') return filteredMachines.length;
        if (activeType === 'accessories') return filteredAccessories.length;
        return filteredConsumables.length;
    }, [activeType, filteredMachines, filteredAccessories, filteredConsumables]);

    const singleList = useMemo(() => {
        if (activeType === 'planchas') return filteredMachines;
        if (activeType === 'accessories') return filteredAccessories;
        if (activeType === 'consumables') return filteredConsumables;
        return [];
    }, [activeType, filteredMachines, filteredAccessories, filteredConsumables]);

    const renderGrid = (items: any[], startIndex = 0) => (
        <div className="grid flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            <AnimatePresence>
                {items.map((item: any, index: number) => (
                    <CatalogProductCard
                        key={item.id}
                        item={item as any}
                        locale={locale}
                        index={startIndex + index}
                        isFeatureCard={false}
                    />
                ))}
            </AnimatePresence>
        </div>
    );

    const isEmpty = totalFiltered === 0;

    return (
        <div className="min-h-screen bg-background pb-32 selection:bg-[#FF6600] selection:text-white">

            {/* Cinematic Header */}
            <header className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted/30 to-background border-b border-border/40">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--background)_70%)] opacity-40" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6600]/30 to-transparent" />

                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-[#FF6600]/10 text-[#FF6600] text-xs font-black uppercase tracking-[0.2em] mb-10 border border-[#FF6600]/20"
                    >
                        <SlidersHorizontal size={14} /> {d.tag}
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">
                        {d.highlight} <span className="text-[#FF6600]">{d.title}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                        {d.subtitle}
                    </p>
                </div>
            </header>

            {/* Enhanced Control Bar */}
            <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl border-b border-border/40 py-6">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 justify-between">

                    {/* Primary Type Switcher */}
                    <div className="flex bg-muted p-1 rounded-2xl w-full lg:w-auto overflow-x-auto no-scrollbar">
                        {[
                            { id: "all", label: d.all, icon: SlidersHorizontal },
                            { id: "planchas", label: d.machines, icon: Zap },
                            { id: "accessories", label: d.accessories, icon: Package },
                            { id: "consumables", label: d.consumables, icon: Tag }
                        ].map((t) => (
                            <button
                                key={t.id}
                                onClick={() => {
                                    setActiveType(t.id as any);
                                    setActiveCategoryIndex(0);
                                    setActiveOpeningIndex(0);
                                    setActiveFormatIndex(0);
                                    setActivePlateIndex(0);
                                    setSearchQuery("");
                                    setSelectedMachine("");

                                    if (t.id === 'all') {
                                        router.replace('/planchas', { scroll: false });
                                    } else {
                                        router.replace(`/planchas?type=${t.id}`, { scroll: false });
                                    }
                                }}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeType === t.id
                                    ? "bg-background text-[#FF6600] shadow-sm transform scale-105"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                <t.icon size={14} />
                                {t.label}
                            </button>
                        ))}
                    </div>

                    {/* Search & Meta */}
                    <div className="flex items-center gap-4 w-full lg:w-auto">
                        <div className="relative flex-1 lg:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <input
                                type="text"
                                placeholder={d.searchPlaceholder}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-muted/50 border border-border/60 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6600]/20 transition-all font-medium"
                            />
                        </div>
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className={`p-3 rounded-2xl border transition-all ${isFilterOpen ? "bg-[#FF6600] text-white border-[#FF6600]" : "bg-muted/50 text-muted-foreground border-border/60 hover:text-foreground"}`}
                        >
                            <Filter size={20} />
                        </button>
                    </div>
                </div>

                {/* Expanded Filters Panel */}
                <AnimatePresence>
                    {isFilterOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-muted/30 border-t border-border/20"
                        >
                            {(activeType === "accessories" || activeType === "consumables") ? (
                                /* ── Filtro máquina compatible ── */
                                <div className="max-w-7xl mx-auto px-4 py-8 space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                                        <Zap size={12} /> {d.compatibleWith}
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setSelectedMachine("")}
                                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedMachine === "" ? "bg-[#FF6600] text-white" : "bg-background border border-border/40 text-muted-foreground hover:border-[#FF6600]/40"}`}
                                        >
                                            {d.allMachines}
                                        </button>
                                        {machineModelNames.map(name => (
                                            <button
                                                key={name}
                                                onClick={() => setSelectedMachine(selectedMachine === name ? "" : name)}
                                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedMachine === name ? "bg-[#FF6600] text-white" : "bg-background border border-border/40 text-muted-foreground hover:border-[#FF6600]/40"}`}
                                            >
                                                {name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                /* ── Filtros máquinas (categoría + sistema + formato + plato) ── */
                                <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                                            <Package size={12} /> {d.catLabel}
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {categoryLabels.map((cat, idx) => (
                                                <button
                                                    key={cat}
                                                    onClick={() => setActiveCategoryIndex(idx)}
                                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeCategoryIndex === idx ? "bg-[#FF6600] text-white" : "bg-background border border-border/40 text-muted-foreground hover:border-[#FF6600]/40"}`}
                                                >
                                                    {cat}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                                            <Zap size={12} /> {d.openLabel}
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {openingLabels.map((type, idx) => (
                                                <button
                                                    key={type}
                                                    onClick={() => setActiveOpeningIndex(idx)}
                                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeOpeningIndex === idx ? "bg-foreground text-background" : "bg-background border border-border/40 text-muted-foreground hover:border-[#FF6600]/40"}`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                                            <SlidersHorizontal size={12} /> {d.formatLabel}
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {formatLabels.map((fmt, idx) => (
                                                <button
                                                    key={fmt}
                                                    onClick={() => setActiveFormatIndex(idx)}
                                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeFormatIndex === idx ? "bg-[#FF6600] text-white" : "bg-background border border-border/40 text-muted-foreground hover:border-[#FF6600]/40"}`}
                                                >
                                                    {fmt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                                            <Tag size={12} /> {d.plateLabel}
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {plateLabels.map((pl, idx) => (
                                                <button
                                                    key={pl}
                                                    onClick={() => setActivePlateIndex(idx)}
                                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activePlateIndex === idx ? "bg-foreground text-background" : "bg-background border border-border/40 text-muted-foreground hover:border-[#FF6600]/40"}`}
                                                >
                                                    {pl}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Grid Container */}
            <main className="max-w-7xl mx-auto px-4 mt-16">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-sm font-black uppercase tracking-[0.4em] text-muted-foreground/60 flex items-center gap-4">
                        {d.showing} <span className="text-foreground">{totalFiltered}</span> {d.results}
                        <div className="h-px w-20 bg-border/40" />
                    </h2>
                </div>

                {isEmpty ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-32 text-center flex flex-col items-center"
                    >
                        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-8">
                            <Search size={40} className="text-muted-foreground/40" />
                        </div>
                        <h3 className="text-3xl font-black mb-4">{d.noResults}</h3>
                        <p className="text-xl text-muted-foreground font-light mb-10 max-w-lg mx-auto">{d.noResultsText}</p>
                        <button
                            onClick={() => {
                                setActiveType("all");
                                setActiveCategoryIndex(0);
                                setActiveOpeningIndex(0);
                                setActiveFormatIndex(0);
                                setActivePlateIndex(0);
                                setSearchQuery("");
                                router.replace('/planchas', { scroll: false });
                            }}
                            className="bg-foreground text-background px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                        >
                            {d.clearBtn}
                        </button>
                    </motion.div>
                ) : activeType === "all" ? (
                    /* ── SECCIONES separadas por tipo ── */
                    <div className="space-y-20">

                        {/* MÁQUINAS */}
                        {filteredMachines.length > 0 && (
                            <section>
                                <SectionHeader icon={Zap} title={d.machines} count={Math.min(visibleMachines, filteredMachines.length)} total={filteredMachines.length} />
                                {renderGrid(filteredMachines.slice(0, visibleMachines))}
                                {visibleMachines < filteredMachines.length && (
                                    <LoadMoreButton onClick={() => setVisibleMachines(v => v + PAGE_SIZE)} label={d.loadMore} />
                                )}
                            </section>
                        )}

                        {/* ACCESORIOS */}
                        {filteredAccessories.length > 0 && (
                            <section>
                                <SectionHeader icon={Package} title={d.accessories} count={Math.min(visibleAccessories, filteredAccessories.length)} total={filteredAccessories.length} />
                                {renderGrid(filteredAccessories.slice(0, visibleAccessories))}
                                {visibleAccessories < filteredAccessories.length && (
                                    <LoadMoreButton onClick={() => setVisibleAccessories(v => v + PAGE_SIZE)} label={d.loadMore} />
                                )}
                            </section>
                        )}

                        {/* CONSUMIBLES */}
                        {filteredConsumables.length > 0 && (
                            <section>
                                <SectionHeader icon={Tag} title={d.consumables} count={Math.min(visibleConsumables, filteredConsumables.length)} total={filteredConsumables.length} />
                                {renderGrid(filteredConsumables.slice(0, visibleConsumables))}
                                {visibleConsumables < filteredConsumables.length && (
                                    <LoadMoreButton onClick={() => setVisibleConsumables(v => v + PAGE_SIZE)} label={d.loadMore} />
                                )}
                            </section>
                        )}
                    </div>
                ) : (
                    /* ── TIPO ESPECÍFICO: todos los items sin paginación ── */
                    <section>
                        {renderGrid(singleList)}
                    </section>
                )}
            </main>
        </div>
    );
}
