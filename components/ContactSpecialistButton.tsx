"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactSpecialistButtonProps {
    productName: string;
    className?: string;
    variant?: "default" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    panelPosition?: "above" | "below";
}

export function ContactSpecialistButton({
    productName,
    className = "",
    variant = "default",
    size = "lg",
    panelPosition = "above"
}: ContactSpecialistButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (!containerRef.current) return;
            if (!containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isOpen]);

    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, "");
        
        // Limit to 9 digits (standard Spanish number)
        const truncated = input.slice(0, 9);
        
        // Apply formatting: XXX XXX XXX
        let formatted = "";
        if (truncated.length > 0) {
            formatted += truncated.slice(0, 3);
        }
        if (truncated.length > 3) {
            formatted += " " + truncated.slice(3, 6);
        }
        if (truncated.length > 6) {
            formatted += " " + truncated.slice(6, 9);
        }
        
        setPhone(formatted);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone: `+34 ${phone}`,
                    product: productName,
                    recipient: "web@futura.es"
                }),
            });

            if (response.ok) {
                setIsSubmitting(false);
                setIsSuccess(true);

                // Auto close after showing success message
                setTimeout(() => {
                    setIsOpen(false);
                    setTimeout(() => {
                        setIsSuccess(false);
                        setName("");
                        setPhone("");
                    }, 500);
                }, 2500);
            } else {
                console.error("Failed to send lead");
                setIsSubmitting(false);
                alert("Hubo un error al enviar tus datos. Por favor, inténtalo de nuevo.");
            }
        } catch (error) {
            console.error("Error sending lead:", error);
            setIsSubmitting(false);
            alert("Hubo un error de conexión. Por favor, inténtalo de nuevo.");
        }
    };

    return (
        <div ref={containerRef} className="relative inline-flex">
            <Button
                variant={variant}
                size={size}
                className={`group font-bold ${variant === 'default' ? 'bg-[#FF6600] hover:bg-[#FF6600]/90 text-white' : ''} ${className}`}
                onClick={() => setIsOpen(true)}
            >
                <MessageSquare className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                Hablar con un Especialista
                <ArrowRight className="ml-2 w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: panelPosition === "above" ? 10 : -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: panelPosition === "above" ? 10 : -10 }}
                        transition={{ type: "spring", duration: 0.35 }}
                        className={`absolute left-1/2 z-[120] w-[min(92vw,28rem)] -translate-x-1/2 rounded-3xl border border-border bg-card p-6 shadow-2xl overflow-hidden ${panelPosition === "above" ? "bottom-[calc(100%+12px)]" : "top-[calc(100%+12px)]"}`}
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6600]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        {!isSuccess ? (
                            <>
                                <div className="mb-5 relative z-10">
                                    <h3 className="text-xl font-black text-foreground mb-1">
                                        ¿Interesado en la {productName}?
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Déjanos tu teléfono y un ingeniero de Beinsen te llamará en 15 minutos.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Tu Nombre"
                                        className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FF6600]/50 transition-all font-medium"
                                    />
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value="+34"
                                            disabled
                                            className="w-20 bg-muted/50 border border-border rounded-xl px-3 py-2.5 text-center text-muted-foreground font-medium"
                                        />
                                        <input
                                            type="tel"
                                            required
                                            value={phone}
                                            onChange={handlePhoneChange}
                                            placeholder="Tu Teléfono"
                                            className="flex-1 bg-background border border-border rounded-xl px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FF6600]/50 transition-all font-medium"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#FF6600] hover:bg-[#FF6600]/90 text-white h-11 rounded-xl text-base font-bold"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Conectando...
                                            </>
                                        ) : (
                                            "Solicitar Llamada Inmediata"
                                        )}
                                    </Button>
                                </form>
                            </>
                        ) : (
                            <div className="py-6 flex flex-col items-center justify-center text-center relative z-10">
                                <div className="w-14 h-14 bg-[#FF6600]/10 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle2 className="w-7 h-7 text-[#FF6600]" />
                                </div>
                                <h3 className="text-xl font-black text-foreground mb-1">¡Petición Recibida!</h3>
                                <p className="text-sm text-muted-foreground">Un especialista técnico te llamará en breve.</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
