"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ChevronRight, Euro, Maximize, FileText, Download, PlayCircle, Wrench, Store, ExternalLink, Globe, Package, Zap, ShoppingCart } from "lucide-react";
import { ContactSpecialistButton } from "@/components/ContactSpecialistButton";
import { TiltImage } from "@/components/TiltImage";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProductGallery } from "@/components/ProductGallery";
import { TechSpecs } from "@/components/TechSpecs";
import { ProductBenefits } from "@/components/ProductBenefits";
import { StickyProductNav } from "@/components/StickyProductNav";
import { ProductHotspots } from "@/components/ProductHotspots";
import { RoiCalculator } from "@/components/RoiCalculator";
import { InmersiveScroller } from "@/components/InmersiveScroller";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";
import type { Plancha, CompatibleItem } from "@/data/products";

interface ProductDetailViewProps {
    plancha: Plancha;
    fullAccessories?: CompatibleItem[];
    fullConsumables?: CompatibleItem[];
}

export function ProductDetailView({ plancha, fullAccessories = [], fullConsumables = [] }: ProductDetailViewProps) {
    const { locale } = useLanguage();
    const [activeTab, setActiveTab] = useState<"accessories" | "consumables">("accessories");

    const name = getLocalized(plancha.name, locale);
    const description = getLocalized(plancha.description, locale);
    const category = getLocalized(plancha.category, locale);
    const size = getLocalized(plancha.size, locale);
    const openingType = getLocalized(plancha.openingType, locale);
    const features = getLocalized(plancha.features, locale) || [];
    const maintenanceTips = getLocalized(plancha.maintenanceTips, locale) || [];

    const dictionary = {
        es: {
            inicio: "Inicio",
            planchas: "Planchas",
            back: "Volver al catálogo",
            investment: "Inversión Directa",
            checkPrice: "Consultar PVP",
            galleryTitle: "Galería de Detalles",
            engineeringTitle: "Ingeniería al Detalle",
            engineeringDesc: `Explora los componentes industriales de alta precisión que hacen de la ${name} una herramienta superior.`,
            descTitle: "Descripción Profesional",
            sizeLabel: "Tamaño",
            catLabel: "Categoría",
            techTitle: "Especificaciones Técnicas",
            whyBuy: "Por qué comprarla",
            benefitsTitle: "Beneficios Exclusivos",
            supportTitle: "¿Dudas antes de decidir?",
            supportDesc: "Un especialista técnico te asesorará sobre qué modelo se ajusta mejor a tu volumen de producción.",
            ecosystem: "Ecosistema Compatible",
            ecosystemDesc: "Todo lo que necesitas para optimizar tu producción y mantener tu equipo al 100%.",
            accessoriesTab: "Accesorios",
            consumablesTab: "Consumibles",
            downloadsTitle: "Centro de Recursos",
            downloadsDesc: "Descarga la documentación técnica oficial para tu departamento de ingeniería.",
            storyTitle: "La Experiencia",
            videoLabel: "Ver en acción",
            maintenanceTitle: "Consejos de Mantenimiento",
            maintenanceDesc: "Siga estas pautas para prolongar la vida útil de tu inversión industrial.",
            distributorsTitle: "Dónde Comprar",
            distributorsDesc: "Adquiere tu máquina a través de nuestros distribuidores autorizados.",
            buyNow: "Comprar ahora",
            visitWeb: "Visitar web",
            certified: "Componente industrial certificado",
            essential: "Consumible esencial Beinsen"
        },
        en: {
            inicio: "Home",
            planchas: "Heat Presses",
            back: "Back to catalog",
            investment: "Direct Investment",
            checkPrice: "Check Price",
            galleryTitle: "Detail Gallery",
            engineeringTitle: "Engineering in Detail",
            engineeringDesc: `Explore the high-precision industrial components that make the ${name} a superior tool.`,
            descTitle: "Professional Description",
            sizeLabel: "Size",
            catLabel: "Category",
            techTitle: "Technical Specifications",
            whyBuy: "Why buy it",
            benefitsTitle: "Exclusive Benefits",
            supportTitle: "Questions before deciding?",
            supportDesc: "A technical specialist will advise you on which model best fits your production volume.",
            ecosystem: "Compatible Ecosystem",
            ecosystemDesc: "Everything you need to optimize your production and keep your equipment at 100%.",
            accessoriesTab: "Accessories",
            consumablesTab: "Consumables",
            downloadsTitle: "Resource Center",
            downloadsDesc: "Download official technical documentation for your engineering department.",
            storyTitle: "The Experience",
            videoLabel: "Watch in action",
            maintenanceTitle: "Maintenance Tips",
            maintenanceDesc: "Follow these guidelines to prolong the lifespan of your industrial investment.",
            distributorsTitle: "Where to Buy",
            distributorsDesc: "Acquire your machine through our authorized distributors.",
            buyNow: "Buy now",
            visitWeb: "Visit website",
            certified: "Certified industrial component",
            essential: "Essential Beinsen consumable"
        },
        pt: {
            inicio: "Início",
            planchas: "Prensas Térmicas",
            back: "Voltar ao catálogo",
            investment: "Investimento Direto",
            checkPrice: "Consultar PVP",
            galleryTitle: "Galeria de Detalhes",
            engineeringTitle: "Engenharia ao Detalhe",
            engineeringDesc: `Explore os componentes industriais de alta precisión que tornam a ${name} uma ferramenta superior.`,
            descTitle: "Descrição Profissional",
            sizeLabel: "Tamanho",
            catLabel: "Categoria",
            techTitle: "Especificações Técnicas",
            whyBuy: "Por que comprar",
            benefitsTitle: "Benefícios Exclusivos",
            supportTitle: "Dúvidas antes de decidir?",
            supportDesc: "Um especialista técnico irá aconselhá-lo sobre qual modelo melhor se adapta ao seu volume de produção.",
            ecosystem: "Ecosistema Compatível",
            ecosystemDesc: "Tudo o que você precisa para otimizar sua produção.",
            accessoriesTab: "Acessórios",
            consumablesTab: "Consumíveis",
            downloadsTitle: "Centro de Recursos",
            downloadsDesc: "Descarregue a documentação técnica oficial.",
            storyTitle: "A Experiência",
            videoLabel: "Ver em acción",
            maintenanceTitle: "Conselhos de Manutenção",
            maintenanceDesc: "Siga estas diretrizes para prolongar a vida útil.",
            distributorsTitle: "Onde Comprar",
            distributorsDesc: "Adquira a sua máquina através dos nossos distribuidores.",
            buyNow: "Comprar agora",
            visitWeb: "Visitar web",
            certified: "Componente industrial certificado",
            essential: "Consumível essencial Beinsen"
        },
        it: {
            inicio: "Inizio",
            planchas: "Presse a Caldo",
            back: "Torna al catalogo",
            investment: "Investimento Diretto",
            checkPrice: "Consultare PVP",
            galleryTitle: "Galleria dei Dettagli",
            engineeringTitle: "Ingegneria nei Dettagli",
            engineeringDesc: `Esplora i componenti industriali di alta precisione che rendono la ${name} uno strumento superiore.`,
            descTitle: "Descrizione Professionale",
            sizeLabel: "Dimensione",
            catLabel: "Categoria",
            techTitle: "Specifiche Tecniche",
            whyBuy: "Perché acquistarla",
            benefitsTitle: "Vantaggi Esclusivi",
            supportTitle: "Dubbi prima di decidere?",
            supportDesc: "Uno specialista tecnico ti consiglierà su quale modello si adatta meglio al tuo volume de produzione.",
            ecosystem: "Ecosistema Compatibile",
            ecosystemDesc: "Tutto il necessario per ottimizzare la tua produzione.",
            accessoriesTab: "Accessori",
            consumablesTab: "Consumabili",
            downloadsTitle: "Centro Risorse",
            downloadsDesc: "Scarica la documentazione tecnica ufficiale.",
            storyTitle: "L'Esperienza",
            videoLabel: "Guarda in azione",
            maintenanceTitle: "Consigli di Manutenzione",
            maintenanceDesc: "Segui queste linee guida per prolungare la vita utile.",
            distributorsTitle: "Dove Acquistare",
            distributorsDesc: "Acquista la tua macchina tramite i nostri distributori autorizzati.",
            buyNow: "Acquista ora",
            visitWeb: "Visita il sito",
            certified: "Componente industriale certificato",
            essential: "Consumabile essenziale Beinsen"
        }
    };
    const d = dictionary[locale] || dictionary.es;

    const activeItems = activeTab === "accessories" ? fullAccessories : fullConsumables;

    return (
        <div className="bg-background min-h-screen pt-24 pb-24 overflow-x-hidden selection:bg-[#FF6600] selection:text-white">
            <StickyProductNav productName={plancha.name} price={plancha.price} />
           
            {/* Dynamic Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <nav className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                    <Link href="/" className="hover:text-[#FF6600] transition-colors">{d.inicio}</Link>
                    <ChevronRight size={14} className="text-border" />
                    <Link href="/planchas" className="hover:text-[#FF6600] transition-colors">{d.planchas}</Link>
                    <ChevronRight size={14} className="text-border" />
                    <span className="text-foreground">{name}</span>
                </nav>
            </div>

            <div className="w-full">
                {/* 1. Cinematic Full-Screen Hero */}
                <div className="relative w-full min-h-[95vh] flex flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 pb-20 pt-10">
                    <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] rounded-full bg-[#FF6600]/5 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

                    <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center">
                        <ScrollReveal delay={0}>
                            <Link
                                href="/planchas"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-[#FF6600] transition-colors mb-8"
                            >
                                <ArrowLeft size={16} /> {d.back}
                            </Link>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground tracking-tighter leading-[0.9] mb-8 max-w-6xl mx-auto drop-shadow-sm">
                                {name}
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2} className="mb-14">
                            <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
                                {description}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-col sm:flex-row items-center gap-10 mt-4 justify-center">
                                <div className="p-[2.5px] rounded-2xl bg-gradient-to-r from-[#FF6600] to-[#FF9900] shadow-2xl shadow-[#FF6600]/30 transform hover:scale-105 transition-transform duration-300">
                                    <ContactSpecialistButton productName={name || ""} size="lg" className="w-full sm:w-auto text-xl h-16 px-12 rounded-2xl bg-background text-foreground hover:bg-transparent hover:text-white transition-all border-none" />
                                </div>
                                
                                <div className="flex flex-col items-center sm:items-start text-foreground">
                                    <span className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-black mb-1 opacity-50">{d.investment}</span>
                                    {plancha.price !== 'Consultar PVP' ? (
                                        <span className="text-5xl font-black text-foreground flex items-center gap-1 leading-none tracking-tighter">
                                            {typeof plancha.price === 'number' ? plancha.price.toLocaleString(locale === 'en' ? 'en-GB' : 'es-ES') : plancha.price}
                                            <span className="text-[#FF6600] ml-1">€</span>
                                        </span>
                                    ) : (
                                        <span className="text-2xl font-black text-muted-foreground">{d.checkPrice}</span>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.4} className="relative z-10 w-full max-w-[85rem] mx-auto mt-20 h-[50vh] lg:h-[75vh] perspective-[2500px]">
                        {plancha.heroVideo ? (
                            <video
                                src={plancha.heroVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="pointer-events-none h-full w-full rounded-3xl border border-border/50 bg-card object-contain"
                            />
                        ) : (
                            <TiltImage src={plancha.image} alt={name || ""} />
                        )}
                    </ScrollReveal>
                </div>

                {/* 2. Immersive Storytelling (Scroll Sections) */}
                {plancha.storySegments && plancha.storySegments.length > 0 && (
                    <div className="mt-32">
                        <ScrollReveal className="text-center mb-16">
                            <span className="text-[#FF6600] font-black uppercase tracking-[0.4em] text-sm">{d.storyTitle}</span>
                            <h2 className="text-5xl md:text-7xl font-black mt-6 tracking-tight">Redefiniendo el flujo de trabajo</h2>
                        </ScrollReveal>
                        <InmersiveScroller segments={plancha.storySegments} />
                    </div>
                )}

                {/* 3. Detailed Engineering (Hotspots) */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-56">
                    {plancha.hotspots && plancha.hotspots.length > 0 && (
                        <ScrollReveal className="w-full">
                            <div className="text-center mb-20">
                                <h3 className="text-5xl md:text-6xl font-black flex flex-col items-center gap-8 tracking-tight">
                                    {d.engineeringTitle} <span className="w-32 h-2.5 bg-[#FF6600] rounded-full" />
                                </h3>
                                <p className="text-2xl text-muted-foreground mt-8 max-w-4xl mx-auto font-light leading-relaxed">
                                    {d.engineeringDesc}
                                </p>
                            </div>
                            <ProductHotspots imageSrc={plancha.hotspotImage || plancha.image} hotspots={plancha.hotspots} />
                        </ScrollReveal>
                    )}

                    {/* Rich Key Benefits Grid */}
                    {plancha.benefits && plancha.benefits.length > 0 && (
                        <ScrollReveal className="w-full">
                            <div className="text-center mb-20">
                                <h3 className="text-4xl md:text-5xl font-black flex flex-col items-center gap-6">
                                    {d.benefitsTitle} <span className="w-24 h-2 bg-[#FF6600] rounded-full" />
                                </h3>
                            </div>
                            <ProductBenefits benefits={plancha.benefits} gallery={plancha.gallery} />
                        </ScrollReveal>
                    )}

                    {/* Maintenance Section */}
                    {maintenanceTips.length > 0 && (
                        <ScrollReveal className="max-w-5xl mx-auto w-full bg-muted/20 border border-border/50 rounded-[3.5rem] p-12 lg:p-20 relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF6600]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
                             
                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] mb-8">
                                        <Wrench size={32} />
                                    </div>
                                    <h3 className="text-4xl font-black mb-6 tracking-tight">{d.maintenanceTitle}</h3>
                                    <p className="text-xl text-muted-foreground font-light mb-8">{d.maintenanceDesc}</p>
                                </div>
                                <div className="space-y-4 max-h-[28rem] overflow-y-auto pr-2">
                                    {maintenanceTips.map((tip, i) => (
                                        <div
                                            key={i}
                                            className="flex gap-4 p-5 bg-background/50 backdrop-blur-sm border border-border/40 rounded-2xl shadow-sm hover:border-[#FF6600]/30 transition-colors"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-[#FF6600]/20 flex items-center justify-center shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-[#FF6600]" />
                                            </div>
                                            <p className="text-foreground/80 font-medium leading-relaxed">{tip}</p>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </ScrollReveal>
                    )}

                    {/* Distributors Section */}
                    {plancha.distributors && plancha.distributors.length > 0 && (
                         <ScrollReveal className="w-full py-12">
                            <div className="text-center mb-16">
                                <h3 className="text-4xl font-black mb-4 tracking-tight">{d.distributorsTitle}</h3>
                                <p className="text-muted-foreground text-lg">{d.distributorsDesc}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {plancha.distributors.map((dist, i) => (
                                    <a 
                                        key={i} 
                                        href={dist.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group p-8 bg-card border border-border/50 rounded-[2.5rem] hover:border-[#FF6600] transition-all flex flex-col items-center text-center gap-6 hover:shadow-2xl hover:shadow-[#FF6600]/10"
                                    >
                                        <div className="relative w-full h-16 opacity-70 group-hover:opacity-100 transition-opacity">
                                            {dist.logo ? (
                                                <Image src={dist.logo} alt={dist.name} fill className="object-contain" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <Globe className="text-muted-foreground" size={40} />
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{dist.name}</h4>
                                            <span className="inline-flex items-center gap-2 text-[#FF6600] font-bold text-sm uppercase tracking-wider group-hover:underline">
                                                {d.visitWeb} <ExternalLink size={14} />
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                         </ScrollReveal>
                    )}

                    {/* Video / Action Section */}
                    {plancha.videoUrl && (
                        <ScrollReveal className="max-w-6xl mx-auto w-full aspect-video rounded-[3.5rem] overflow-hidden border border-border shadow-2xl relative group">
                            <iframe
                                src={plancha.videoUrl}
                                title={name}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors pointer-events-none flex items-center justify-center">
                                <div className="flex flex-col items-center gap-6 text-white">
                                    <div className="relative">
                                         <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150 animate-pulse" />
                                         <PlayCircle size={80} className="stroke-1 relative z-10" />
                                    </div>
                                    <span className="font-bold uppercase tracking-[0.4em] text-sm opacity-90">{d.videoLabel}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Technical World (Specs & Downloads) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
                        <ScrollReveal>
                             <h3 className="text-4xl font-black mb-12 flex flex-col gap-5 tracking-tight">
                                {d.techTitle} <span className="w-20 h-2 bg-[#FF6600] rounded-full" />
                            </h3>
                            <TechSpecs specs={plancha.technicalSpecs || []} />
                        </ScrollReveal>

                        <ScrollReveal>
                            <h3 className="text-4xl font-black mb-12 flex flex-col gap-5 tracking-tight">
                                {d.downloadsTitle} <span className="w-20 h-2 bg-[#FF6600] rounded-full" />
                            </h3>
                            <p className="text-xl text-muted-foreground mb-10 font-light italic leading-relaxed">{d.downloadsDesc}</p>
                            <div className="space-y-6">
                                {plancha.downloads?.map((download, i) => (
                                    <a 
                                        key={i} 
                                        href={download.url} 
                                        className="flex items-center justify-between p-8 bg-card border border-border/50 rounded-3xl hover:border-[#FF6600] hover:bg-[#FF6600]/5 transition-all group shadow-sm hover:shadow-xl hover:shadow-[#FF6600]/5"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 rounded-2xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                                                <FileText size={28} />
                                            </div>
                                            <span className="font-bold text-xl group-hover:text-foreground">{getLocalized(download.label, locale)}</span>
                                        </div>
                                        <Download size={24} className="text-muted-foreground group-hover:text-[#FF6600] transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* ROI Calculator for Automatics */}
                    {openingType === 'Automática' && typeof plancha.price === 'number' && (
                        <ScrollReveal className="w-full py-20">
                            <RoiCalculator machineName={name || ""} machinePrice={plancha.price} />
                        </ScrollReveal>
                    )}

                    {/* Enhanced Ecosystem (Accessories & Consumables) */}
                    {(fullAccessories.length > 0 || fullConsumables.length > 0) && (
                        <ScrollReveal className="pt-32 border-t border-border">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl font-black mb-6 tracking-tight">{d.ecosystem}</h2>
                                <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">{d.ecosystemDesc}</p>
                            </div>

                            {/* Custom Tab Switcher */}
                            <div className="flex justify-center mb-16">
                                <div className="bg-muted p-2 rounded-2xl flex gap-1">
                                    <button 
                                        onClick={() => setActiveTab("accessories")}
                                        className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === "accessories" ? "bg-background text-[#FF6600] shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                                    >
                                        <Package size={20} />
                                        {d.accessoriesTab}
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab("consumables")}
                                        className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === "consumables" ? "bg-background text-[#FF6600] shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                                    >
                                        <Zap size={20} />
                                        {d.consumablesTab}
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                 {activeItems.map((item: any) => (
                                    <div key={item.id} className="group p-6 rounded-[2.5rem] bg-card border border-border/50 hover:border-[#FF6600] hover:shadow-2xl hover:shadow-[#FF6600]/10 transition-all flex flex-col gap-6 relative">
                                        {item.slug && (
                                            <Link href={`/planchas/${item.slug}`} className="absolute inset-0 z-10" aria-label={getLocalized(item.name, locale)} />
                                        )}
                                        <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-muted">
                                            {item.image ? (
                                                <Image 
                                                    src={item.image} 
                                                    alt={getLocalized(item.name, locale) || ""} 
                                                    fill 
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <Package className="text-muted-foreground opacity-20" size={64} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col flex-1 px-2">
                                            <div className="flex justify-between items-start mb-4">
                                                <h4 className="font-black text-xl tracking-tight leading-tight group-hover:text-[#FF6600] transition-colors">
                                                    {getLocalized(item.name, locale)}
                                                </h4>
                                                <div className="text-right shrink-0">
                                                    <span className="text-foreground font-black text-2xl tracking-tighter">
                                                        {typeof item.price === 'number' ? item.price.toLocaleString(locale === 'en' ? 'en-GB' : 'es-ES') : item.price} 
                                                        <span className="text-[#FF6600] ml-1">{item.price !== 'Consultar PVP' ? '€' : ''}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-muted-foreground italic mb-6 line-clamp-2">
                                                {getLocalized(item.description, locale)}
                                            </p>
                                            <div className="mt-auto flex items-center justify-between">
                                                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black opacity-60">
                                                    {activeTab === "accessories" ? d.certified : d.essential}
                                                </span>
                                                <button className="w-10 h-10 rounded-full bg-muted group-hover:bg-[#FF6600] group-hover:text-white flex items-center justify-center transition-colors relative z-20">
                                                    <ShoppingCart size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Final Support Banner */}
                    <ScrollReveal>
                        <div className="bg-gradient-to-br from-card to-[#FF6600]/5 border border-border rounded-[4rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl text-center">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6600]/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6600]/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
                            
                            <h3 className="text-4xl md:text-6xl font-black mb-10 relative z-10 tracking-tight">{d.supportTitle}</h3>
                            <p className="text-2xl text-muted-foreground mb-14 max-w-3xl mx-auto font-light relative z-10 leading-relaxed italic">
                                "{d.supportDesc}"
                            </p>
                            <ContactSpecialistButton productName={name || ""} size="lg" className="h-20 px-16 text-xl rounded-2.5xl shadow-2xl shadow-[#FF6600]/30 transform hover:scale-105 transition-all" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
