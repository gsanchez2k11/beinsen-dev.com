"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactSpecialistButtonProps {
    productName: string;
    className?: string;
    variant?: "default" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

export function ContactSpecialistButton({
    productName,
    className = "",
    variant = "default",
    size = "lg"
}: ContactSpecialistButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call to CRM/Lead system
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Auto close after showing success message
            setTimeout(() => {
                setIsOpen(false);
                setTimeout(() => setIsSuccess(false), 500); // Reset after close animation
            }, 2500);
        }, 1500);
    };

    return (
        <>
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

            {/* Modern Lead Capture Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-lg bg-card border border-border rounded-3xl p-8 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6600]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            {!isSuccess ? (
                                <>
                                    <div className="mb-8 relative z-10">
                                        <h3 className="text-2xl font-black text-foreground mb-2">
                                            ¿Interesado en la {productName}?
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Déjanos tu teléfono y un ingeniero de Beinsen te llamará en 15 minutos para resolver tus dudas técnicas y valorar si esta máquina encaja en tu taller.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                        <div className="space-y-4">
                                            <div>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Tu Nombre"
                                                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FF6600]/50 transition-all font-medium"
                                                />
                                            </div>
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value="+34"
                                                    disabled
                                                    className="w-20 bg-muted/50 border border-border rounded-xl px-4 py-3 text-center text-muted-foreground font-medium"
                                                />
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="Tu Teléfono"
                                                    className="flex-1 bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FF6600]/50 transition-all font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-[#FF6600] hover:bg-[#FF6600]/90 text-white h-12 rounded-xl text-lg font-bold"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                        Conectando...
                                                    </>
                                                ) : (
                                                    'Solicitar Llamada Inmediata'
                                                )}
                                            </Button>
                                            <p className="text-center text-xs text-muted-foreground mt-4">
                                                Al enviar, aceptas que procesemos tus datos para contactarte. Cero spam, solo ingeniería.
                                            </p>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className="py-12 flex flex-col items-center justify-center text-center relative z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    >
                                        <div className="w-20 h-20 bg-[#FF6600]/10 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-[#FF6600]" />
                                        </div>
                                    </motion.div>
                                    <h3 className="text-2xl font-black text-foreground mb-2">¡Petición Recibida!</h3>
                                    <p className="text-muted-foreground">Un especialista técnico te llamará en breve al teléfono indicado.</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
