"use client";

import { useEffect, useState, useMemo, Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useSearchParams } from "next/navigation";
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
    ShieldCheck,
    Calendar,
    Clock,
    User,
    Loader2,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { planchasData } from "@/data/products";
import { getLocalized } from "@/lib/i18n";
import { SupportFAQ } from "@/components/SupportFAQ";

// Booking Helpers
const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let current = new Date(today);
    while (dates.length < 12) {
        current.setDate(current.getDate() + 1);
        const day = current.getDay();
        if (day !== 0 && day !== 6) {
            dates.push(new Date(current));
        }
    }
    return dates;
};

const TIME_SLOTS = [
    "09:30", "10:00", "10:30", "11:00", "11:30", 
    "12:00", "12:30", "15:30", "16:00", "16:30"
];

function ContactContent() {
    const { locale } = useLanguage();
    const searchParams = useSearchParams();
    const [activeMode, setActiveMode] = useState<'message' | 'appointment'>('message');
    
    useEffect(() => {
        if (searchParams.get('tab') === 'book') {
            setActiveMode('appointment');
        }
    }, [searchParams]);

    // Message Form States
    const [isMessageSubmitted, setIsMessageSubmitted] = useState(false);
    const [isMessageSubmitting, setIsMessageSubmitting] = useState(false);
    const [messageFormStep, setMessageFormStep] = useState(1);
    const [messageFormData, setMessageFormData] = useState({
        name: "",
        email: "",
        company: "",
        country: "España",
        interestType: "machine" as "machine" | "general",
        machine: planchasData[0]?.slug || "",
        message: ""
    });

    // Booking States
    const [bookingStep, setBookingStep] = useState<1 | 2 | 3>(1);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
    const [bookingFormData, setBookingFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        notes: ""
    });

    const [error, setError] = useState<string | null>(null);
    const [bookedSlots, setBookedSlots] = useState<string[]>([]);
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        const stored = localStorage.getItem('beinsen_booked_slots');
        if (stored) {
            try {
                setBookedSlots(JSON.parse(stored));
            } catch (e) {
                console.error("Error parsing booked slots", e);
            }
        }
    }, []);

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone: string) => /^[0-9+\s-]{9,15}$/.test(phone);

    const isSlotBooked = (date: Date | null, time: string) => {
        if (!date) return false;
        const slotId = `${date.toISOString().split('T')[0]}_${time}`;
        return bookedSlots.includes(slotId);
    };

    const showError = (msg: string) => {
        setError(msg);
        setTimeout(() => setError(null), 5000);
    };

    const countries = [
        "España", "Portugal", "Francia", "Italia", "Alemania", "Reino Unido", 
        "México", "Argentina", "Chile", "Colombia", "Perú", "Ecuador", 
        "Estados Unidos", "Andorra", "Otro"
    ];
    
    const d = {
        es: {
            title: "Contacto Técnico",
            subtitle: "Hablemos de ingeniería. Nuestro equipo de expertos está listo para asesorarle sobre la mejor solución para su producción.",
            modeMessage: "Enviar Mensaje",
            modeAppointment: "Agendar Cita",
            formTitle: "Solicitar Presupuesto",
            name: "Nombre Completo",
            email: "Correo Electrónico",
            company: "Empresa",
            country: "País",
            machine: "Máquina de Interés",
            general: "Consultoría General",
            interestSelection: "Tipo de Consulta",
            message: "¿Cómo podemos ayudarle?",
            send: "Enviar Solicitud",
            sending: "Enviando...",
            thanks: "¡Gracias por contactar!",
            thanksDesc: "Su solicitud ha sido recibida. Un asesor técnico se pondrá en contacto con usted en menos de 24 horas laborables.",
            step1: "Información Básica",
            step2: "Detalles del Proyecto",
            next: "Siguiente Paso",
            back: "Volver",
            errorRequired: "Por favor, rellene todos los campos obligatorios.",
            infoTitle: "Sede Central",
            infoAddress: "Av. Alto de las Atalayas, 18",
            infoCity: "30110 Cabezo de Torres, Murcia",
            infoPhone: "+34 968 902 300",
            infoEmail: "info@beinsen.com",
            bookingTitle: "1. Selecciona fecha y hora",
            bookingContact: "2. Datos de contacto",
            bookingSuccess: "¡Cita Solicitada!",
            bookingSuccessDesc: "Hemos recibido tu solicitud. Revisaremos la agenda y te enviaremos la invitación de Google Meet en breve."
        },
        en: {
            title: "Technical Contact",
            subtitle: "Let's talk engineering. Our team of experts is ready to advise you on the best solution for your production.",
            modeMessage: "Send Message",
            modeAppointment: "Book Appointment",
            formTitle: "Request a Quote",
            name: "Full Name",
            email: "Email Address",
            company: "Company",
            country: "Country",
            machine: "Machine of Interest",
            general: "General Consultation",
            interestSelection: "Query Type",
            message: "How can we help you?",
            send: "Send Request",
            sending: "Sending...",
            thanks: "Thank you for contacting us!",
            thanksDesc: "Your request has been received. A technical advisor will contact you within 24 business hours.",
            step1: "Basic Information",
            step2: "Project Details",
            next: "Next Step",
            back: "Back",
            errorRequired: "Please fill in all required fields.",
            infoTitle: "Headquarters",
            infoAddress: "Av. Alto de las Atalayas, 18",
            infoCity: "30110 Cabezo de Torres, Murcia, Spain",
            infoPhone: "+34 968 902 300",
            infoEmail: "info@beinsen.com",
            bookingTitle: "1. Select date and time",
            bookingContact: "2. Contact details",
            bookingSuccess: "Appointment Requested!",
            bookingSuccessDesc: "We have received your request. We will review the schedule and send you the Google Meet invitation shortly."
        }
    }[locale === 'pt' || locale === 'it' ? 'es' : locale] || { es: {} }.es;

    const availableDates = useMemo(() => getAvailableDates(), []);

    const handleMessageSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors: Record<string, string> = {};
        if (!messageFormData.name.trim()) errors.name = "Requerido";
        if (!messageFormData.email.trim()) errors.email = "Requerido";
        else if (!validateEmail(messageFormData.email)) errors.email = "Email inválido";
        if (!messageFormData.company.trim()) errors.company = "Requerido";
        if (!messageFormData.message.trim()) errors.message = "Requerido";

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            showError(d.errorRequired);
            return;
        }
        setValidationErrors({});
        setIsMessageSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: messageFormData.name,
                    email: messageFormData.email,
                    company: messageFormData.company,
                    country: messageFormData.country,
                    product: messageFormData.interestType === 'machine' ? messageFormData.machine : 'Consultoría General',
                    message: messageFormData.message,
                    recipient: "web@futura.es"
                }),
            });
            if (response.ok) setIsMessageSubmitted(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsMessageSubmitting(false);
        }
    };

    const handleBookingSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors: Record<string, string> = {};
        if (!bookingFormData.name.trim()) errors.b_name = "Requerido";
        if (!bookingFormData.email.trim()) errors.b_email = "Requerido";
        else if (!validateEmail(bookingFormData.email)) errors.b_email = "Email inválido";
        if (!bookingFormData.phone.trim()) errors.b_phone = "Requerido";
        else if (!validatePhone(bookingFormData.phone)) errors.b_phone = "Teléfono inválido";
        if (!bookingFormData.company.trim()) errors.b_company = "Requerido";

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }
        setValidationErrors({});
        setIsBookingSubmitting(true);
        const appointmentInfo = {
            ...bookingFormData,
            date: selectedDate?.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            time: selectedTime
        };
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: bookingFormData.name,
                    email: bookingFormData.email,
                    phone: bookingFormData.phone,
                    company: bookingFormData.company,
                    country: "España (Cita Web)",
                    product: `RESERVA: ${appointmentInfo.date} - ${appointmentInfo.time}`,
                    message: `Cita agendada para el ${appointmentInfo.date} a las ${appointmentInfo.time}.\nNotas: ${bookingFormData.notes}`,
                    recipient: "web@futura.es"
                }),
            });
            if (response.ok || process.env.NODE_ENV === 'development') {
                // Save to booked slots locally
                if (selectedDate && selectedTime) {
                    const slotId = `${selectedDate.toISOString().split('T')[0]}_${selectedTime}`;
                    const newBooked = [...bookedSlots, slotId];
                    setBookedSlots(newBooked);
                    localStorage.setItem('beinsen_booked_slots', JSON.stringify(newBooked));
                }
                setBookingStep(3);
            }
        } catch (error) {
            console.error(error);
            setBookingStep(3); 
        } finally {
            setIsBookingSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background pt-32 selection:bg-[#FF6600] selection:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                
                <div className="mb-20">
                    <ScrollReveal>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-[#FF6600]" />
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FF6600]">
                                Premium Support
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic leading-[0.8] mb-8">
                            {activeMode === 'message' ? d.title : "Reserva Técnica"}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
                            {d.subtitle}
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
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
                                        <button 
                                            onClick={() => setActiveMode('appointment')}
                                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FF6600] hover:translate-x-2 transition-transform mt-2"
                                        >
                                            Agendar cita ahora <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <motion.div layout className={`mt-16 p-8 rounded-[2.5rem] border transition-all duration-500 ${activeMode === 'appointment' ? 'bg-muted/50 border-white/5' : 'bg-gradient-to-br from-[#FF6600]/10 to-transparent border-[#FF6600]/20 shadow-xl shadow-[#FF6600]/5'}`}>
                                {activeMode === 'appointment' ? (
                                    <>
                                        <ShieldCheck size={32} className="text-[#FF6600] mb-4" />
                                        <h4 className="font-bold mb-2">Garantía del Fabricante</h4>
                                        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">Asesoramiento oficial directo desde nuestra sede central en Murcia.</p>
                                        <button onClick={() => setActiveMode('message')} className="text-xs font-black uppercase tracking-widest text-[#FF6600] flex items-center gap-2 hover:gap-3 transition-all">Prefiero enviar un mensaje <ArrowRight size={14} /></button>
                                    </>
                                ) : (
                                    <>
                                        <Calendar size={32} className="text-[#FF6600] mb-4" />
                                        <h4 className="font-bold mb-2">¿Prefieres agendar una sesión?</h4>
                                        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">Reserva una videollamada de 20 min con nuestros ingenieros.</p>
                                        <button onClick={() => setActiveMode('appointment')} className="text-xs font-black uppercase tracking-widest text-[#FF6600] flex items-center gap-2 hover:gap-3 transition-all">Ver disponibilidad <ArrowRight size={14} /></button>
                                    </>
                                )}
                            </motion.div>
                        </ScrollReveal>
                    </div>

                    <div className="lg:col-span-8">
                        <ScrollReveal delay={0.2}>
                            <div className="glass-card rounded-[3rem] p-4 border border-white/5 relative overflow-hidden flex flex-col">
                                <div className="flex p-2 bg-muted/30 rounded-[2.5rem] mb-4 mx-4 mt-4">
                                    <button onClick={() => setActiveMode('message')} className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-[2rem] text-xs font-black uppercase tracking-widest transition-all ${activeMode === 'message' ? 'bg-background text-[#FF6600] shadow-xl' : 'text-muted-foreground hover:text-foreground'}`}>
                                        <MessageSquare size={16} /> {d.modeMessage}
                                    </button>
                                    <button onClick={() => {setActiveMode('appointment'); setIsMessageSubmitted(false);}} className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-[2rem] text-xs font-black uppercase tracking-widest transition-all ${activeMode === 'appointment' ? 'bg-background text-[#FF6600] shadow-xl' : 'text-muted-foreground hover:text-foreground'}`}>
                                        <Calendar size={16} /> {d.modeAppointment}
                                    </button>
                                </div>

                                <div className="p-8 md:p-12">
                                    <AnimatePresence mode="wait">
                                        {activeMode === 'message' ? (
                                            <motion.div key="message-form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                                                {!isMessageSubmitted ? (
                                                    <>
                                                        <div className="flex items-center gap-4 mb-10">
                                                            <div className={`h-1 flex-1 rounded-full transition-colors duration-500 ${messageFormStep >= 1 ? 'bg-[#FF6600]' : 'bg-muted'}`} />
                                                            <div className={`h-1 flex-1 rounded-full transition-colors duration-500 ${messageFormStep >= 2 ? 'bg-[#FF6600]' : 'bg-muted'}`} />
                                                        </div>
                                                        <form onSubmit={handleMessageSubmit} className="space-y-8">
                                                            {messageFormStep === 1 ? (
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                                    <div className="space-y-2">
                                                                        <label htmlFor="contact-name" className="text-xs font-black uppercase text-muted-foreground ml-2">{d.name}</label>
                                                                        <input id="contact-name" required type="text" value={messageFormData.name} onChange={(e) => setMessageFormData({...messageFormData, name: e.target.value})} className={`w-full bg-muted/50 border-2 rounded-2xl p-4 transition-all ${validationErrors.name ? 'border-red-500/50' : 'border-transparent focus:border-[#FF6600]/30'}`} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <label htmlFor="contact-email" className="text-xs font-black uppercase text-muted-foreground ml-2">{d.email}</label>
                                                                        <input id="contact-email" required type="email" value={messageFormData.email} onChange={(e) => setMessageFormData({...messageFormData, email: e.target.value})} className={`w-full bg-muted/50 border-2 rounded-2xl p-4 transition-all ${validationErrors.email ? 'border-red-500/50' : 'border-transparent focus:border-[#FF6600]/30'}`} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <label htmlFor="contact-company" className="text-xs font-black uppercase text-muted-foreground ml-2">{d.company}</label>
                                                                        <input id="contact-company" required type="text" value={messageFormData.company} onChange={(e) => setMessageFormData({...messageFormData, company: e.target.value})} className={`w-full bg-muted/50 border-2 rounded-2xl p-4 transition-all ${validationErrors.company ? 'border-red-500/50' : 'border-transparent focus:border-[#FF6600]/30'}`} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <label htmlFor="contact-country" className="text-xs font-black uppercase text-muted-foreground ml-2">{d.country}</label>
                                                                        <div className="relative">
                                                                            <select id="contact-country" required value={messageFormData.country} onChange={(e) => setMessageFormData({...messageFormData, country: e.target.value})} className="w-full bg-muted/50 border-none rounded-2xl p-4 appearance-none">
                                                                                {countries.map(c => <option key={c} value={c}>{c}</option>)}
                                                                            </select>
                                                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="md:col-span-2 pt-4"><button type="button" onClick={() => (messageFormData.name && messageFormData.email && messageFormData.company) ? setMessageFormStep(2) : showError(d.errorRequired)} className="w-full md:w-auto px-12 py-5 bg-[#FF6600] text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all flex items-center justify-center gap-3">{d.next} <ArrowRight size={18} /></button></div>
                                                                </div>
                                                            ) : (
                                                                <div className="space-y-8">
                                                                    <div className="space-y-4"><label className="text-xs font-black uppercase text-muted-foreground ml-2">{d.interestSelection}</label><div className="flex gap-4"><button type="button" onClick={() => setMessageFormData({...messageFormData, interestType: 'machine'})} className={`flex-1 p-4 rounded-2xl border transition-all text-sm font-bold flex items-center justify-center gap-2 ${messageFormData.interestType === 'machine' ? 'bg-[#FF6600] border-[#FF6600] text-white' : 'bg-muted/30 border-white/5'}`}><Briefcase size={18} /> {d.machine}</button><button type="button" onClick={() => setMessageFormData({...messageFormData, interestType: 'general'})} className={`flex-1 p-4 rounded-2xl border transition-all text-sm font-bold flex items-center justify-center gap-2 ${messageFormData.interestType === 'general' ? 'bg-[#FF6600] border-[#FF6600] text-white' : 'bg-muted/30 border-white/5'}`}><MessageSquare size={18} /> {d.general}</button></div></div>
                                                                    <div className="space-y-2"><label htmlFor="contact-message" className="text-xs font-black uppercase text-muted-foreground ml-2">{d.message}</label><textarea id="contact-message" required value={messageFormData.message} onChange={(e) => setMessageFormData({...messageFormData, message: e.target.value})} rows={4} className="w-full bg-muted/50 border-none rounded-2xl p-4 resize-none" /></div>
                                                                    <div className="flex gap-4"><button type="button" onClick={() => setMessageFormStep(1)} className="px-8 py-5 border border-white/10 rounded-2xl font-black uppercase text-xs">{d.back}</button><button type="submit" disabled={isMessageSubmitting} className="flex-1 px-12 py-5 bg-[#FF6600] text-white rounded-2xl font-black uppercase text-sm disabled:opacity-50 flex items-center justify-center gap-2">{isMessageSubmitting ? d.sending : d.send} <Send size={18} /></button></div>
                                                                </div>
                                                            )}
                                                        </form>
                                                    </>
                                                ) : (
                                                    <div className="text-center py-12"><div className="w-24 h-24 rounded-full bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] mx-auto mb-8"><CheckCircle2 size={48} /></div><h2 className="text-4xl font-black italic mb-4">{d.thanks}</h2><p className="text-xl text-muted-foreground font-light max-w-sm mx-auto">{d.thanksDesc}</p><button onClick={() => setIsMessageSubmitted(false)} className="mt-10 text-xs font-black uppercase text-[#FF6600] hover:underline">Enviar otro mensaje</button></div>
                                                )}
                                            </motion.div>
                                        ) : (
                                            <motion.div key="appointment-calendar" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                                                {bookingStep === 1 && (
                                                    <div className="flex flex-col">
                                                        <h3 className="text-2xl font-black mb-8">{d.bookingTitle}</h3>
                                                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 mb-10">
                                                            {availableDates.map((date, i) => (
                                                                <button key={i} onClick={() => setSelectedDate(date)} className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all ${selectedDate?.getTime() === date.getTime() ? 'border-[#FF6600] bg-[#FF6600]/5 text-[#FF6600]' : 'border-border/40 hover:border-[#FF6600]/40'}`}><span className="text-[10px] uppercase font-black opacity-60 mb-1">{date.toLocaleDateString("es-ES", { weekday: 'short' })}</span><span className="text-lg font-black">{date.getDate()}</span></button>
                                                            ))}
                                                        </div>
                                                        {selectedDate && (
                                                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                                                                {TIME_SLOTS.map((time) => {
                                                                    const booked = isSlotBooked(selectedDate, time);
                                                                    return (
                                                                        <button 
                                                                            key={time} 
                                                                            disabled={booked}
                                                                            onClick={() => setSelectedTime(time)} 
                                                                            className={`py-3 px-4 rounded-xl border font-bold text-sm transition-all ${
                                                                                selectedTime === time 
                                                                                    ? 'bg-[#FF6600] border-[#FF6600] text-white shadow-lg' 
                                                                                    : booked
                                                                                        ? 'bg-muted/10 border-transparent text-muted-foreground/30 cursor-not-allowed line-through'
                                                                                        : 'bg-muted/30 border-border/40 hover:border-[#FF6600]/40'
                                                                            }`}
                                                                        >
                                                                            {time}
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}
                                                        <div className="mt-12 flex justify-end"><Button disabled={!selectedDate || !selectedTime} onClick={() => setBookingStep(2)} className="bg-[#FF6600] text-white font-black px-10 h-14 rounded-2xl">{d.next} <ArrowRight size={18} className="ml-2" /></Button></div>
                                                    </div>
                                                )}
                                                {bookingStep === 2 && (
                                                    <div className="flex flex-col">
                                                        <button onClick={() => setBookingStep(1)} className="flex items-center gap-2 text-xs font-black uppercase text-muted-foreground mb-8"><ChevronLeft size={14} /> {d.back}</button>
                                                        <h3 className="text-2xl font-black mb-8">{d.bookingContact}</h3>
                                                        <form onSubmit={handleBookingSubmit} className="space-y-4">
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                <input required type="text" aria-label="Nombre completo" placeholder="Nombre completo" value={bookingFormData.name} onChange={e => setBookingFormData({...bookingFormData, name: e.target.value})} className={`bg-muted/50 rounded-xl px-5 py-3 outline-none border-2 transition-all ${validationErrors.b_name ? 'border-red-500/30' : 'border-transparent'}`} />
                                                                <input required type="text" aria-label="Empresa" placeholder="Empresa" value={bookingFormData.company} onChange={e => setBookingFormData({...bookingFormData, company: e.target.value})} className={`bg-muted/50 rounded-xl px-5 py-3 outline-none border-2 transition-all ${validationErrors.b_company ? 'border-red-500/30' : 'border-transparent'}`} />
                                                            </div>
                                                            <input required type="email" aria-label="Email" placeholder="Email" value={bookingFormData.email} onChange={e => setBookingFormData({...bookingFormData, email: e.target.value})} className={`w-full bg-muted/50 rounded-xl px-5 py-3 outline-none border-2 transition-all ${validationErrors.b_email ? 'border-red-500/30' : 'border-transparent'}`} />
                                                            <input required type="tel" aria-label="Teléfono" placeholder="Teléfono" value={bookingFormData.phone} onChange={e => setBookingFormData({...bookingFormData, phone: e.target.value})} className={`w-full bg-muted/50 rounded-xl px-5 py-3 outline-none border-2 transition-all ${validationErrors.b_phone ? 'border-red-500/30' : 'border-transparent'}`} />
                                                            <textarea rows={3} placeholder="Notas adicionales..." value={bookingFormData.notes} onChange={e => setBookingFormData({...bookingFormData, notes: e.target.value})} className="w-full bg-muted/50 rounded-xl px-5 py-3 outline-none resize-none" />
                                                            <Button type="submit" disabled={isBookingSubmitting} className="w-full bg-[#FF6600] text-white font-black h-16 rounded-2xl text-lg mt-4">{isBookingSubmitting ? <Loader2 className="animate-spin" /> : "Confirmar Cita"}</Button>
                                                        </form>
                                                    </div>
                                                )}
                                                {bookingStep === 3 && (
                                                    <div className="text-center py-12"><div className="w-24 h-24 rounded-full bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] mx-auto mb-8"><CheckCircle2 size={48} /></div><h2 className="text-4xl font-black italic mb-4">{d.bookingSuccess}</h2><p className="text-xl text-muted-foreground font-light max-w-sm mx-auto">{d.bookingSuccessDesc}</p><button onClick={() => {setBookingStep(1); setSelectedDate(null); setSelectedTime(null);}} className="mt-10 text-xs font-black uppercase text-[#FF6600] hover:underline">Solicitar otra cita</button></div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
            <SupportFAQ />
            {error && <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-full shadow-2xl z-50 font-bold">{error}</div>}
        </div>
    );
}

export default function ContactoClient() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-2 border-[#FF6600] border-t-transparent rounded-full animate-spin" />
                    <span className="text-zinc-400 text-sm">Cargando contacto…</span>
                </div>
            </div>
        }>
            <ContactContent />
        </Suspense>
    );
}
