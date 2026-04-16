"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, X, MonitorPlay, Settings2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { planchasData, allAccessoriesData, allConsumablesData, Locale } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";

export function GlobalSearch() {
    const { locale } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const router = useRouter();

    // Dictionary for search
    const dictionary = {
        es: {
            btnLabel: "Buscar...",
            placeholder: "Busca máquinas, accesorios o características...",
            empty: "Busca cualquier modelo de plancha o recambio.",
            noResults: "No hay resultados para",
            groupPlanchas: "Planchas Industriales",
            groupAcc: "Accesorios y Recambios",
            kbdClose: "para cerrar",
            navHint: "Navega con",
            openBtn: "Abrir buscador",
            checkPrice: "Consultar PVP"
        },
        en: {
            btnLabel: "Search...",
            placeholder: "Search machines, accessories or features...",
            empty: "Search any heat press model or spare part.",
            noResults: "No results for",
            groupPlanchas: "Industrial Presses",
            groupAcc: "Accessories & Spares",
            kbdClose: "to close",
            navHint: "Navigate with",
            openBtn: "Open search",
            checkPrice: "Check Price"
        },
        pt: {
            btnLabel: "Buscar...",
            placeholder: "Procure máquinas, acessórios ou características...",
            empty: "Procure qualquer modelo de prensa ou peça de reposição.",
            noResults: "Sem resultados para",
            groupPlanchas: "Prensas Industriais",
            groupAcc: "Acessórios e Peças",
            kbdClose: "para fechar",
            navHint: "Navegue com",
            openBtn: "Abrir pesquisa",
            checkPrice: "Consultar PVP"
        },
        it: {
            btnLabel: "Cerca...",
            placeholder: "Cerca macchine, accessori o caratteristiche...",
            empty: "Cerca qualsiasi modello di pressa o ricambio.",
            noResults: "Nessun risultato per",
            groupPlanchas: "Presse Industriali",
            groupAcc: "Accessori e Ricambi",
            kbdClose: "per chiudere",
            navHint: "Naviga con",
            openBtn: "Apri ricerca",
            checkPrice: "Consultare PVP"
        }
    };
    const d = dictionary[locale] || dictionary.es;

    // Handle Cmd+K / Ctrl+K keyboard shortcut
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    // Generate Search Results
    const getResults = useCallback(() => {
        if (!query) return [];

        const lowerQuery = query.toLowerCase();
        const results = [];

        // Search Planchas
        const matchedPlanchas = planchasData.filter(
            (p) => {
                const names = Object.values(p.name).join(" ").toLowerCase();
                const descriptions = Object.values(p.description).join(" ").toLowerCase();
                return names.includes(lowerQuery) || descriptions.includes(lowerQuery);
            }
        );

        // Search Accessories
        const matchedAccessories = allAccessoriesData.filter(
            (a) => {
                const names = Object.values(a.name as any).join(" ").toLowerCase();
                return names.includes(lowerQuery);
            }
        );

        // Search Consumables
        const matchedConsumables = allConsumablesData.filter(
            (c) => {
                const names = Object.values(c.name as any).join(" ").toLowerCase();
                return names.includes(lowerQuery);
            }
        );

        if (matchedPlanchas.length > 0) {
            results.push({
                group: d.groupPlanchas,
                items: matchedPlanchas
                    .map((p) => ({
                        id: p.id,
                        name: getLocalized(p.name, locale),
                        href: `/planchas/${p.slug}`,
                        icon: <MonitorPlay size={16} className="text-[#FF6600]" />,
                        price: p.price
                    }))
                    .sort((a, b) => (a.name || "").localeCompare(b.name || "", locale)),
            });
        }

        if (matchedAccessories.length > 0) {
            results.push({
                group: d.groupAcc,
                items: matchedAccessories
                    .map((a) => ({
                        id: a.id,
                        name: getLocalized(a.name as any, locale),
                        href: a.slug ? `/planchas/${a.slug}` : "/planchas?type=accessories", 
                        icon: <Settings2 size={16} className="text-[#FF6600]" />,
                        price: a.price
                    }))
                    .sort((a, b) => (a.name || "").localeCompare(b.name || "", locale)),
            });
        }

        if (matchedConsumables.length > 0) {
            const consumableItems = matchedConsumables.map((c) => ({
                id: c.id,
                name: getLocalized(c.name as any, locale),
                href: c.slug ? `/planchas/${c.slug}` : "/planchas?type=consumables",
                icon: <MonitorPlay size={16} className="text-[#FF6600]/80" />,
                price: c.price
            }));
            
            const accGroup = results.find(r => r.group === d.groupAcc);
            if (accGroup) {
                accGroup.items = [...accGroup.items, ...consumableItems].sort((a, b) => (a.name || "").localeCompare(b.name || "", locale));
            } else {
                results.push({
                    group: d.groupAcc,
                    items: consumableItems.sort((a, b) => (a.name || "").localeCompare(b.name || "", locale)),
                });
            }
        }

        return results;
    }, [query, locale, d]);

    const results = getResults();

    const handleSelect = (href: string) => {
        setIsOpen(false);
        setQuery("");
        router.push(href);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-muted/50 hover:bg-muted border border-border rounded-lg transition-colors"
            >
                <Search size={16} />
                <span>{d.btnLabel}</span>
                <kbd className="hidden lg:inline-flex items-center gap-1 font-sans text-xs bg-background border border-border rounded px-1.5 ml-8">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
                aria-label={d.openBtn}
            >
                <Search size={24} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-card border border-border/50 shadow-2xl rounded-2xl z-50 overflow-hidden flex flex-col max-h-[70vh]"
                        >
                            <div className="flex items-center px-4 py-4 border-b border-border/50">
                                <Search size={20} className="text-muted-foreground shrink-0" />
                                <input
                                    type="text"
                                    autoFocus
                                    placeholder={d.placeholder}
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-foreground text-lg px-4 placeholder:text-muted-foreground/50"
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 rounded-md text-muted-foreground hover:bg-muted transition-colors shrink-0"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-2">
                                {query.length === 0 ? (
                                    <div className="px-4 py-12 text-center text-muted-foreground">
                                        <p>{d.empty}</p>
                                    </div>
                                ) : results.length > 0 ? (
                                    <div className="space-y-6 p-2">
                                        {results.map((group) => (
                                            <div key={group.group}>
                                                <h4 className="px-3 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                                    {group.group}
                                                </h4>
                                                <div className="space-y-1">
                                                    {group.items.map((item) => (
                                                        <button
                                                            key={item.id}
                                                            onClick={() => handleSelect(item.href)}
                                                            className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-muted/50 group transition-colors text-left"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div className="p-2 rounded-lg bg-background border border-border/50 group-hover:border-[#FF6600]/30 transition-colors">
                                                                    {item.icon}
                                                                </div>
                                                                <div>
                                                                    <p className="font-semibold text-foreground group-hover:text-[#FF6600] transition-colors">
                                                                        {item.name}
                                                                    </p>
                                                                    <p className="text-xs text-muted-foreground">
                                                                        {item.price === 'Consultar PVP' ? d.checkPrice : `${item.price} €`}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <ArrowRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="px-4 py-12 text-center text-muted-foreground">
                                        <p>{d.noResults} "{query}"</p>
                                    </div>
                                )}
                            </div>

                            <div className="px-4 py-3 bg-muted/30 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    {d.navHint} <span className="px-1.5 py-0.5 rounded bg-background border border-border">↑</span> <span className="px-1.5 py-0.5 rounded bg-background border border-border">↓</span>
                                </div>
                                <div>
                                    <span className="px-1.5 py-0.5 rounded bg-background border border-border mr-1">esc</span> {d.kbdClose}
                                </div>
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
