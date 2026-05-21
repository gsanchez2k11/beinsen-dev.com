"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Menu, X, ChevronDown, Zap, Box, Package, ArrowRight, Settings } from "lucide-react";
import { useState, useRef, useEffect, Suspense } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { GlobalSearch } from "./GlobalSearch";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

function NavbarContent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const megaWrapperRef = useRef<HTMLDivElement>(null);
    const megaButtonRef = useRef<HTMLButtonElement>(null);
    const { locale } = useLanguage();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!isMegaMenuOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsMegaMenuOpen(false);
                megaButtonRef.current?.focus();
            }
        };
        const onPointerDown = (e: MouseEvent) => {
            if (megaWrapperRef.current && !megaWrapperRef.current.contains(e.target as Node)) {
                setIsMegaMenuOpen(false);
            }
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onPointerDown);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onPointerDown);
        };
    }, [isMegaMenuOpen]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };
    const isCatalogActive = pathname === "/planchas" || pathname.startsWith("/planchas/") || pathname === "/accesorios" || pathname.startsWith("/accesorios/");

    const d = {
        es: {
            inicio: "Inicio",
            catalogo: "Catálogo",
            asesor: "Asesor",
            comparar: "Comparar",
            aprende: "Aprende",
            soporte: "Soporte Técnico",
            machines: "Máquinas Transfer",
            machines_desc: "Soluciones industriales de alta producción.",
            accs: "Accesorios Pro",
            accs_desc: "Complementos para optimizar tu flujo.",
            cons: "Consumibles",
            cons_desc: "Vinilos, teflón y repuestos originales.",
            view_all: "Ver todo el catálogo"
        },
        en: {
            inicio: "Home",
            catalogo: "Catalog",
            asesor: "Advisor",
            comparar: "Compare",
            aprende: "Learn",
            soporte: "Technical Support",
            machines: "Heat Presses",
            machines_desc: "High production industrial solutions.",
            accs: "Pro Accessories",
            accs_desc: "Add-ons to optimize your workflow.",
            cons: "Consumables",
            cons_desc: "Vinyls, teflon and original parts.",
            view_all: "View full catalog"
        },
        pt: {
            inicio: "Início",
            catalogo: "Catálogo",
            asesor: "Assessor",
            comparar: "Comparar",
            aprende: "Aprender",
            soporte: "Suporte Técnico",
            machines: "Prensas Térmicas",
            machines_desc: "Soluções industriais de alta produção.",
            accs: "Acessórios Pro",
            accs_desc: "Complementos para otimizar o seu fluxo.",
            cons: "Consumíveis",
            cons_desc: "Vinis, teflon e peças originais.",
            view_all: "Ver todo o catálogo"
        },
        it: {
            inicio: "Home",
            catalogo: "Catalogo",
            asesor: "Consulente",
            comparar: "Confronta",
            aprende: "Impara",
            soporte: "Supporto Tecnico",
            machines: "Presse a Caldo",
            machines_desc: "Soluzioni industriali ad alta produzione.",
            accs: "Accessori Pro",
            accs_desc: "Complementi per ottimizzare il tuo flusso.",
            cons: "Consumabili",
            cons_desc: "Vinili, teflon e ricambi originali.",
            view_all: "Vedi l'intero catalogo"
        }
    }[locale] || { es: {} }.es;

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsMegaMenuOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsMegaMenuOpen(false);
        }, 150);
    };

    const menuItems = [
        { title: d.machines, desc: d.machines_desc, href: "/planchas?type=planchas", icon: Zap, color: "text-[#FF6600]" },
        { title: d.accs, desc: d.accs_desc, href: "/planchas?type=accessories", icon: Settings, color: "text-blue-500" },
        { title: d.cons, desc: d.cons_desc, href: "/planchas?type=consumables", icon: Package, color: "text-emerald-500" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${inter.className} border-b border-border/40`}>
            {/* Glossy Backdrop */}
            <div className="absolute inset-0 bg-background/60 backdrop-blur-2xl -z-10" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="group flex items-center gap-3">
                            <Image
                                src="/brand/logo.png"
                                alt="Beinsen Logo"
                                width={120}
                                height={40}
                                className="w-auto h-8 lg:h-9 object-contain group-hover:scale-105 transition-transform"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        {/* Mega Menu Trigger */}
                        <div
                            ref={megaWrapperRef}
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                ref={megaButtonRef}
                                type="button"
                                aria-expanded={isMegaMenuOpen}
                                aria-haspopup="true"
                                aria-controls="catalog-mega-menu"
                                onClick={() => setIsMegaMenuOpen(v => !v)}
                                className={`flex items-center gap-2 px-4 py-2 text-sm font-black uppercase tracking-widest transition-all rounded-xl ${isMegaMenuOpen || isCatalogActive ? 'text-[#FF6600] bg-[#FF6600]/5' : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'}`}
                            >
                                {d.catalogo}
                                <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isMegaMenuOpen && (
                                    <motion.div
                                        id="catalog-mega-menu"
                                        role="region"
                                        aria-label={d.catalogo}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                                    >
                                        <div className="bg-card/95 backdrop-blur-3xl rounded-[2rem] border border-border/40 shadow-2xl overflow-hidden p-8">
                                            <div className="grid grid-cols-1 gap-4">
                                                {menuItems.map((item, i) => (
                                                    <Link
                                                        key={i}
                                                        href={item.href}
                                                        onClick={() => setIsMegaMenuOpen(false)}
                                                        className="group flex items-center gap-6 p-6 rounded-2xl hover:bg-muted/50 transition-all border border-transparent hover:border-border/40"
                                                    >
                                                        <div className={`w-14 h-14 rounded-2xl bg-muted flex items-center justify-center ${item.color} group-hover:bg-background transition-colors shadow-sm`}>
                                                            <item.icon size={28} />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="text-lg font-black italic">{item.title}</div>
                                                            <div className="text-sm text-muted-foreground font-light">{item.desc}</div>
                                                        </div>
                                                        <ArrowRight size={20} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                                                    </Link>
                                                ))}
                                            </div>
                                            
                                            <div className="mt-6 pt-6 border-t border-border/40 text-center">
                                                <Link 
                                                    href="/planchas"
                                                    onClick={() => setIsMegaMenuOpen(false)}
                                                    className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF6600] hover:scale-105 transition-transform inline-block"
                                                >
                                                    {d.view_all}
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/asesor"
                            className={`px-4 py-2 text-sm font-black uppercase tracking-widest rounded-xl transition-all ${isActive("/asesor") ? "text-[#FF6600] bg-[#FF6600]/5" : "text-foreground/70 hover:text-foreground hover:bg-muted/50"}`}
                        >
                            {d.asesor}
                        </Link>

                        <Link
                            href="/comparar"
                            className={`px-4 py-2 text-sm font-black uppercase tracking-widest rounded-xl transition-all ${isActive("/comparar") ? "text-[#FF6600] bg-[#FF6600]/5" : "text-foreground/70 hover:text-foreground hover:bg-muted/50"}`}
                        >
                            {d.comparar}
                        </Link>

                        <Link
                            href="/aprende"
                            className={`px-4 py-2 text-sm font-black uppercase tracking-widest rounded-xl transition-all ${isActive("/aprende") ? "text-[#FF6600] bg-[#FF6600]/5" : "text-foreground/70 hover:text-foreground hover:bg-muted/50"}`}
                        >
                            {d.aprende}
                        </Link>

                        <Link
                            href="/contacto?tab=book"
                            className={`px-4 py-2 text-sm font-black uppercase tracking-widest rounded-xl transition-all ${pathname === "/contacto" && searchParams.get('tab') === 'book' ? "text-[#FF6600] bg-[#FF6600]/5" : "text-foreground/70 hover:text-foreground hover:bg-muted/50"}`}
                        >
                            Citas
                        </Link>

                        <a
                            href="https://soporte.beinsen.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 rounded-xl bg-[#FF6600] text-white text-xs font-black uppercase tracking-widest whitespace-nowrap hover:bg-[#cc5200] transition-all shadow-lg shadow-[#FF6600]/20 transform hover:-translate-y-0.5 ml-4"
                        >
                            {d.soporte}
                        </a>

                        <div className="flex items-center gap-2 border-l border-border/40 pl-6 ml-2">
                            <LanguageSelector />
                            <GlobalSearch />
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <LanguageSelector />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-3 rounded-xl transition-all ${isOpen ? 'bg-[#FF6600] text-white' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-card absolute top-20 left-0 w-full border-t border-border/40 bg-card/95 backdrop-blur-3xl overflow-hidden shadow-2xl z-40"
                    >
                        <div className="p-6 flex flex-col gap-2">
                            <Link
                                href="/"
                                className="px-6 py-4 text-sm font-black uppercase tracking-widest text-foreground/70 hover:text-[#FF6600] hover:bg-muted/50 rounded-xl transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {d.inicio}
                            </Link>

                            <div className="bg-muted/30 rounded-[2rem] p-4 flex flex-col gap-2">
                                <span className="px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">{d.catalogo}</span>
                                {menuItems.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.href}
                                        className="px-6 py-4 text-sm font-bold flex items-center justify-between group"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`${item.color}`}><item.icon size={20} /></div>
                                            {item.title}
                                        </div>
                                        <ArrowRight size={16} className="text-muted-foreground" />
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="/asesor"
                                className="mt-4 px-6 py-5 text-center rounded-2xl border border-border/40 bg-muted/30 text-foreground text-xs font-black uppercase tracking-widest hover:bg-muted"
                                onClick={() => setIsOpen(false)}
                            >
                                {d.asesor}
                            </Link>

                            <Link
                                href="/comparar"
                                className="mt-2 px-6 py-5 text-center rounded-2xl border border-border/40 bg-muted/30 text-foreground text-xs font-black uppercase tracking-widest hover:bg-muted"
                                onClick={() => setIsOpen(false)}
                            >
                                {d.comparar}
                            </Link>

                            <Link
                                href="/aprende"
                                className="mt-2 px-6 py-5 text-center rounded-2xl border border-border/40 bg-muted/30 text-foreground text-xs font-black uppercase tracking-widest hover:bg-muted"
                                onClick={() => setIsOpen(false)}
                            >
                                {d.aprende}
                            </Link>

                            <Link
                                href="/contacto?tab=book"
                                className="mt-2 px-6 py-5 text-center rounded-2xl border border-border/40 bg-muted/30 text-foreground text-xs font-black uppercase tracking-widest hover:bg-muted"
                                onClick={() => setIsOpen(false)}
                            >
                                Agendar Cita
                            </Link>

                            <a
                                href="https://soporte.beinsen.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 px-6 py-5 text-center rounded-2xl bg-[#FF6600] text-white text-xs font-black uppercase tracking-widest"
                                onClick={() => setIsOpen(false)}
                            >
                                {d.soporte}
                            </a>

                            <div className="flex justify-between items-center pt-8 mt-4 border-t border-border/40 px-6">
                                <ThemeToggle />
                                <GlobalSearch />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export function Navbar() {
    return (
        <Suspense fallback={null}>
            <NavbarContent />
        </Suspense>
    );
}
