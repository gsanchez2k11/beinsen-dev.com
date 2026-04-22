"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Mail, 
    Phone, 
    MapPin, 
    Send, 
    CheckCircle2, 
    MessageSquare, 
    Briefcase, 
    Globe,
    ArrowRight,
    ChevronDown,
    ShieldCheck
} from "lucide-react";
import { planchasData } from "@/data/products";
import { getLocalized } from "@/lib/i18n";

export default function ContactPage() {
    const { locale } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formStep, setFormStep] = useState(1);
    
    const d = {
        es: {
            title: "Contacto Técnico",
            subtitle: "Hablemos de ingeniería. Nuestro equipo de expertos está listo para asesorarle sobre la mejor solución para su producción.",
            formTitle: "Solicitar Presupuesto",
            name: "Nombre Completo",
            email: "Correo Electrónico",
            company: "Empresa",
            country: "País",
            machine: "Máquina de Interés",
            message: "¿Cómo podemos ayudarle?",
            send: "Enviar Solicitud",
            thanks: "¡Gracias por contactar!",
            thanksDesc: "Su solicitud ha sido recibida. Un asesor técnico se pondrá en contacto con usted en menos de 24 horas laborables.",
            step1: "Información Básica",
            step2: "Detalles del Proyecto",
            next: "Siguiente Paso",
            back: "Volver",
            infoTitle: "Sede Central",
            infoAddress: "Av. Alto de las Atalayas, 18",
            infoCity: "30110 Cabezo de Torres, Murcia",
            infoPhone: "+34 968 902 300",
            infoEmail: "info@beinsen.com"
        },
        en: {
            title: "Technical Contact",
            subtitle: "Let's talk engineering. Our team of experts is ready to advise you on the best solution for your production.",
            formTitle: "Request a Quote",
            name: "Full Name",
            email: "Email Address",
            company: "Company",
            country: "Country",
            machine: "Machine of Interest",
            message: "How can we help you?",
            send: "Send Request",
            thanks: "Thank you for contacting us!",
            thanksDesc: "Your request has been received. A technical advisor will contact you within 24 business hours.",
            step1: "Basic Information",
            step2: "Project Details",
            next: "Next Step",
            back: "Back",
            infoTitle: "Headquarters",
            infoAddress: "Av. Alto de las Atalayas, 18",
            infoCity: "30110 Cabezo de Torres, Murcia, Spain",
            infoPhone: "+34 968 902 300",
            infoEmail: "info@beinsen.com"
        }
    }[locale === 'pt' || locale === 'it' ? 'es' : locale] || { es: {} }.es;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-background pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                
                {/* Header Section */}
                <div className="mb-20">
                    <ScrollReveal>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-[#FF6600]" />
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FF6600]">
                                Premium Support
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic leading-[0.8] mb-8">
                            {d.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
                            {d.subtitle}
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Contact Info Column */}
                    <div className="lg:col-span-4 space-y-12">
                        <ScrollReveal delay={0.1}>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-[#FF6600]/10 group-hover:text-[#FF6600] transition-colors duration-500 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{d.infoTitle}</h3>
                                        <p className="text-muted-foreground font-light">{d.infoAddress}</p>
                                        <p className="text-muted-foreground font-light">{d.infoCity}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-[#FF6600]/10 group-hover:text-[#FF6600] transition-colors duration-500 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Direct Line</h3>
                                        <p className="text-muted-foreground font-light">{d.infoPhone}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-[#FF6600]/10 group-hover:text-[#FF6600] transition-colors duration-500 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email</h3>
                                        <p className="text-muted-foreground font-light">{d.infoEmail}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge / Cert */}
                            <div className="mt-16 p-8 rounded-[2rem] bg-muted/50 border border-white/5">
                                <ShieldCheck size={32} className="text-[#FF6600] mb-4" />
                                <h4 className="font-bold mb-2">Garantía del Fabricante</h4>
                                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                                    Al contactar directamente con Beinsen, se asegura de recibir asesoramiento oficial y piezas certificadas originales.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Form Column */}
                    <div className="lg:col-span-8">
                        <ScrollReveal delay={0.2}>
                            <div className="glass-card rounded-[3rem] p-8 md:p-12 border border-white/5 relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {!isSubmitted ? (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                        >
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className={`h-1 flex-1 rounded-full transition-colors duration-500 ${formStep >= 1 ? 'bg-[#FF6600]' : 'bg-muted'}`} />
                                                <div className={`h-1 flex-1 rounded-full transition-colors duration-500 ${formStep >= 2 ? 'bg-[#FF6600]' : 'bg-muted'}`} />
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-8">
                                                {formStep === 1 ? (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">{d.name}</label>
                                                            <input required type="text" className="w-full bg-muted/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#FF6600]/20 transition-all font-light" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">{d.email}</label>
                                                            <input required type="email" className="w-full bg-muted/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#FF6600]/20 transition-all font-light" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">{d.company}</label>
                                                            <input required type="text" className="w-full bg-muted/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#FF6600]/20 transition-all font-light" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">{d.country}</label>
                                                            <input required type="text" className="w-full bg-muted/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#FF6600]/20 transition-all font-light" />
                                                        </div>
                                                        <div className="md:col-span-2 pt-4">
                                                            <button 
                                                                type="button" 
                                                                onClick={() => setFormStep(2)}
                                                                className="w-full md:w-auto px-12 py-5 bg-[#FF6600] text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                                                            >
                                                                {d.next} <ArrowRight size={18} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="space-y-8">
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">{d.machine}</label>
                                                            <select className="w-full bg-muted/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#FF6600]/20 transition-all font-light appearance-none">
                                                                {planchasData.map(p => (
                                                                    <option key={p.id} value={p.id}>{getLocalized(p.name, locale)}</option>
                                                                ))}
                                                                <option value="other">Otro / Consultoría General</option>
                                                            </select>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">{d.message}</label>
                                                            <textarea rows={4} className="w-full bg-muted/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#FF6600]/20 transition-all font-light resize-none" />
                                                        </div>
                                                        <div className="flex flex-col md:flex-row gap-4 pt-4">
                                                            <button 
                                                                type="button" 
                                                                onClick={() => setFormStep(1)}
                                                                className="px-8 py-5 border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all text-muted-foreground"
                                                            >
                                                                {d.back}
                                                            </button>
                                                            <button 
                                                                type="submit" 
                                                                className="flex-1 px-12 py-5 bg-[#FF6600] text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#FF6600]/20"
                                                            >
                                                                {d.send} <Send size={18} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </form>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="thanks"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-center py-12"
                                        >
                                            <div className="w-24 h-24 rounded-full bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] mx-auto mb-8">
                                                <CheckCircle2 size={48} />
                                            </div>
                                            <h2 className="text-4xl font-black italic mb-4">{d.thanks}</h2>
                                            <p className="text-xl text-muted-foreground font-light max-w-sm mx-auto leading-relaxed">
                                                {d.thanksDesc}
                                            </p>
                                            <button 
                                                onClick={() => setIsSubmitted(false)}
                                                className="mt-10 text-xs font-black uppercase tracking-[0.2em] text-[#FF6600] hover:underline"
                                            >
                                                Enviar otro mensaje
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>

            {/* Global Map Section Mockup */}
            <section className="bg-muted/10 py-32 border-y border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-black italic mb-20 tracking-tighter">
                            Presencia Global de Fabricación
                        </h2>
                        <div className="aspect-[21/9] rounded-[3rem] bg-card border border-white/5 overflow-hidden group shadow-2xl relative">
                            {/* Abstract Map Background Placeholder */}
                            <div className="absolute inset-0 grayscale opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            
                            {/* Animated Location Pins Mockup */}
                            <div className="absolute top-[40%] left-[48%] transform -translate-x-1/2 -translate-y-1/2">
                                <div className="relative">
                                    <div className="absolute inset-0 animate-ping rounded-full bg-[#FF6600]/40" />
                                    <div className="w-4 h-4 rounded-full bg-[#FF6600] border-4 border-background relative z-10" />
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap bg-card/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-black uppercase tracking-widest shadow-xl">
                                        Murcia HQ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
