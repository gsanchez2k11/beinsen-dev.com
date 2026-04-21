"use client";

import { useState, useMemo, useEffect, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { planchasData, allAccessoriesData, allConsumablesData, Locale } from "@/data/products";
import { ArrowUpRight, Maximize2, Tag, Zap, Search, Settings2, X, Package, Filter, SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";
import { CatalogProductCard } from "@/components/CatalogProductCard";

const CATEGORIES = ["Todas", "Textil", "Tazas y Botellas", "Gorras", "Especializadas", "Multifunción"];
const OPENING_TYPES = ["Cualquiera", "Manual", "Electromagnética", "Neumática", "Eléctrica"];

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



export default function PlanchasCatalog() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background pt-32 text-center font-black uppercase tracking-[0.3em] opacity-40">Cargando...</div>}>
            <PlanchasCatalogContent />
        </Suspense>
    );
}

function PlanchasCatalogContent() {
    const { locale } = useLanguage();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [activeType, setActiveType] = useState<"all" | "planchas" | "accessories" | "consumables">("all");
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeOpeningIndex, setActiveOpeningIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const prevTypeRef = useRef<string | null>(null);

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
            // Reset other filters when changing type via URL
            setActiveCategoryIndex(0);
            setActiveOpeningIndex(0);
            setSearchQuery("");
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
            filterTitle: "Búsqueda Avanzada"
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
            filterTitle: "Advanced Search"
        }
    }[locale === 'pt' || locale === 'it' ? 'es' : locale] || { es: {} }.es;

    const allItems = useMemo(() => {
        // Map everything to a common item format for the list
        const machines = planchasData.map(p => ({ ...p, _type: 'planchas' }));
        const accs = allAccessoriesData.map(a => ({ ...a, _type: 'accessories', category: { es: 'Accesorio', en: 'Accessory' }, openingType: { es: 'Hardware', en: 'Hardware' } }));
        const cons = allConsumablesData.map(c => ({ ...c, _type: 'consumables', category: { es: 'Consumible', en: 'Consumable' }, openingType: { es: 'Químico/Material', en: 'Chemical/Material' } }));
        
        const combined = [...machines, ...accs, ...cons];
        
        // Sort alphabetically by localized name
        return combined.sort((a, b) => {
            const nameA = (getLocalized(a.name, locale) || "").toLowerCase();
            const nameB = (getLocalized(b.name, locale) || "").toLowerCase();
            return nameA.localeCompare(nameB, locale);
        });
    }, [locale]);

     const filteredItems = useMemo(() => {
        const selectedCategory = CATEGORIES[activeCategoryIndex];
        const selectedOpening = OPENING_TYPES[activeOpeningIndex];
        const lowerSearchQuery = searchQuery.toLowerCase();
        const hasSearch = searchQuery.length > 0;

        const filtered = allItems.filter((item: any) => {
            const itemTypeMatches = activeType === "all" || item._type === activeType;
            
            const itemCat = typeof item.category === 'object' ? getLocalized(item.category, 'es') : item.category;
            const itemOpen = typeof item.openingType === 'object' ? getLocalized(item.openingType, 'es') : item.openingType;
            const itemName = typeof item.name === 'object' ? (getLocalized(item.name, locale) || "") : (item.name as string);
            
            const matchesCategory = activeCategoryIndex === 0 || itemCat === selectedCategory;
            const matchesOpening = activeOpeningIndex === 0 || itemOpen === selectedOpening;
            const matchesSearch = !hasSearch || itemName.toLowerCase().includes(lowerSearchQuery);

            return itemTypeMatches && matchesCategory && matchesOpening && matchesSearch;
        });
        return filtered;
    }, [activeType, activeCategoryIndex, activeOpeningIndex, searchQuery, locale, allItems]);

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
                                    setSearchQuery("");
                                    
                                    if (t.id === 'all') {
                                        router.replace('/planchas', { scroll: false });
                                    } else {
                                        router.replace(`/planchas?type=${t.id}`, { scroll: false });
                                    }
                                }}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                                    activeType === t.id 
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
                            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12">
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
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Grid Container */}
            <main className="max-w-7xl mx-auto px-4 mt-16">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-sm font-black uppercase tracking-[0.4em] text-muted-foreground/60 flex items-center gap-4">
                        {d.showing} <span className="text-foreground">{filteredItems.length}</span> {d.results}
                        <div className="h-px w-20 bg-border/40" />
                    </h2>
                </div>

                <div className="grid flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    <AnimatePresence>
                        {filteredItems.map((item: any, index: number) => (
                            <CatalogProductCard 
                                key={item.id} 
                                item={item as any} 
                                locale={locale} 
                                index={index} 
                                isFeatureCard={false}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {filteredItems.length === 0 && (
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
                                setSearchQuery("");
                                router.replace('/planchas', { scroll: false });
                            }}
                            className="bg-foreground text-background px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                        >
                            {d.clearBtn}
                        </button>
                    </motion.div>
                )}
            </main>
        </div>
    );
}
