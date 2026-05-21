"use client";

import Link from "next/link";
import { Mail, Phone, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SupportContactCTA() {
    const { locale } = useLanguage();

    const d = {
        es: {
            title: "¿No encuentras lo que buscas?",
            desc: "Nuestro equipo de ingeniería está disponible para asistencia remota personalizada.",
            bookBtn: "Agendar Cita Técnica",
            contactBtn: "Contactar con Soporte",
        },
        en: {
            title: "Can't find what you are looking for?",
            desc: "Our engineering team is available for personalized remote assistance.",
            bookBtn: "Book Technical Appointment",
            contactBtn: "Contact Support",
        },
        pt: {
            title: "Não encontra o que procura?",
            desc: "A nossa equipa de engenharia está disponível para assistência remota personalizada.",
            bookBtn: "Agendar Visita Técnica",
            contactBtn: "Contactar o Suporte",
        },
        it: {
            title: "Non trovi quello che cerchi?",
            desc: "Il nostro team di ingegneria è disponibile per assistenza remota personalizzata.",
            bookBtn: "Prenota Appuntamento Tecnico",
            contactBtn: "Contatta il Supporto",
        },
    }[locale] || { es: {} }.es;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <div className="p-12 md:p-20 rounded-[4rem] bg-black text-white relative overflow-hidden text-center md:text-left">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6600]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8 leading-[0.9]">
                            {d.title}
                        </h2>
                        <p className="text-xl text-white/50 font-light mb-12 max-w-xl">{d.desc}</p>
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
                    <div className="flex flex-col items-center lg:items-end gap-6">
                        <Link
                            href="/contacto?tab=book"
                            className="w-full sm:w-auto px-12 py-6 bg-white text-black rounded-[2rem] font-black uppercase tracking-widest text-sm hover:scale-[1.05] transition-all shadow-2xl flex items-center justify-center gap-3"
                        >
                            <Calendar size={18} /> {d.bookBtn}
                        </Link>
                        <Link
                            href="/contacto"
                            className="w-full sm:w-auto px-12 py-6 border border-white/20 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
                        >
                            {d.contactBtn}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
