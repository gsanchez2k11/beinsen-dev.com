"use client";

import { useLanguage } from "@/context/LanguageContext";
import { resourcesData, ResourceType } from "@/data/support";
import { getLocalized } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
    FileText, 
    PlayCircle, 
    ShieldCheck, 
    Cpu, 
    Download, 
    Search, 
    Settings, 
    LifeBuoy,
    HelpCircle,
    Mail,
    Phone
} from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";

const TYPE_ICONS: Record<ResourceType, any> = {
    manual: FileText,
    video: PlayCircle,
    cert: ShieldCheck,
    firmware: Cpu
};

export default function SupportPage() {
    const { locale } = useLanguage();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState<'all' | ResourceType>('all');

    const d = {
        es: {
            title: "Soporte Técnico",
            subtitle: "Acceda a la documentación oficial, manuales de usuario y recursos técnicos para su maquinaria Beinsen.",
            search: "Buscar recursos...",
            tabs: {
                all: "Todo",
                manual: "Manuales",
                video: "Vído Técnico",
                cert: "Certificaciones",
                firmware: "Firmware"
            },
            download: "Descargar",
            watch: "Ver vídeo",
            resources: "Recursos encontrados",
            contactTitle: "¿No encuentra lo que busca?",
            contactDesc: "Nuestro equipo de ingeniería está disponible para asistencia remota personalizada.",
            contactBtn: "Contactar con Soporte"
        },
        en: {
            title: "Technical Support",
            subtitle: "Access official documentation, user manuals, and technical resources for your Beinsen machinery.",
            search: "Search resources...",
            tabs: {
                all: "All",
                manual: "Manuals",
                video: "Technical Videos",
                cert: "Certifications",
                firmware: "Firmware"
            },
            download: "Download",
            watch: "Watch video",
            resources: "Resources found",
            contactTitle: "Can't find what you are looking for?",
            contactDesc: "Our engineering team is available for personalized remote assistance.",
            contactBtn: "Contact Support"
        }
    }[locale === 'pt' || locale === 'it' ? 'es' : locale] || { es: {} }.es;

    const filteredResources = useMemo(() => {
        return resourcesData.filter(r => {
            const matchesTab = activeTab === 'all' || r.type === activeTab;
            const matchesSearch = getLocalized(r.title, locale)?.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesTab && matchesSearch;
        });
    }, [activeTab, searchQuery, locale]);

    return (
        <div className="min-h-screen bg-background pt-32 pb-40">
            
            {/* Header */}
            <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <ScrollReveal>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                            <LifeBuoy size={24} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FF6600]">
                            Service & Care
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-8 italic">
                        Technical <span className="text-[#FF6600]">Hub</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
                        {d.subtitle}
                    </p>
                </ScrollReveal>
            </header>

            {/* Controls */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="flex flex-col lg:flex-row gap-8 items-center justify-between bg-muted/30 p-4 rounded-[2.5rem] border border-border/40 backdrop-blur-xl">
                    <div className="flex bg-background p-1 rounded-2xl w-full lg:w-auto overflow-x-auto no-scrollbar">
                        {(Object.keys(d.tabs) as Array<'all' | ResourceType>).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                                    activeTab === tab 
                                        ? "bg-[#FF6600] text-white shadow-lg" 
                                        : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {d.tabs[tab]}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <input 
                            type="text"
                            placeholder={d.search}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-background border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-[#FF6600]/20 transition-all font-light"
                        />
                    </div>
                </div>
            </div>

            {/* Resources List */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-sm font-black uppercase tracking-[0.4em] text-muted-foreground/60">
                        {d.resources} <span className="text-foreground">{filteredResources.length}</span>
                    </h2>
                    <div className="h-px flex-1 bg-border/40" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredResources.map((res, i) => {
                            const Icon = TYPE_ICONS[res.type];
                            return (
                                <motion.div
                                    key={res.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group bg-card border border-border/40 rounded-[2rem] p-8 hover:border-[#FF6600]/30 transition-all duration-500 flex flex-col justify-between h-full"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-[#FF6600]/10 group-hover:text-[#FF6600] transition-colors duration-500">
                                                <Icon size={28} />
                                            </div>
                                            {res.version && (
                                                <span className="px-3 py-1 rounded-full bg-muted text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                                    {res.version}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 line-clamp-2">
                                            {getLocalized(res.title, locale)}
                                        </h3>
                                        <div className="flex items-center gap-2 text-muted-foreground/60 text-xs font-medium mb-8">
                                            <Settings size={14} />
                                            <span className="capitalize">{res.category}</span>
                                            <span className="w-1 h-1 rounded-full bg-border" />
                                            <span>{res.date}</span>
                                        </div>
                                    </div>

                                    <button className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-muted font-black uppercase tracking-widest text-[10px] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-500">
                                        {res.type === 'video' ? d.watch : d.download}
                                        {res.type === 'video' ? <PlayCircle size={16} /> : <Download size={16} />}
                                    </button>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Contact Help Section */}
                <div className="mt-32 p-12 md:p-20 rounded-[4rem] bg-black text-white relative overflow-hidden text-center md:text-left">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6600]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8 leading-[0.9]">
                                {d.contactTitle}
                            </h2>
                            <p className="text-xl text-white/50 font-light mb-12 max-w-xl">
                                {d.contactDesc}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#FF6600]">
                                        <Mail size={18} />
                                    </div>
                                    <span className="text-sm font-medium">tech@beinsen.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#FF6600]">
                                        <Phone size={18} />
                                    </div>
                                    <span className="text-sm font-medium">+34 968 902 300</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <Link 
                                href="/contacto"
                                className="px-12 py-6 bg-[#FF6600] text-white rounded-[2rem] font-black uppercase tracking-widest text-sm hover:scale-[1.05] transition-all shadow-2xl shadow-[#FF6600]/20"
                            >
                                {d.contactBtn}
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
