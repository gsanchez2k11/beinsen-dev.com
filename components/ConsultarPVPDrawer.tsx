"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Euro, Send, CheckCircle2 } from "lucide-react";

interface ConsultarPVPDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
}

export function ConsultarPVPDrawer({ isOpen, onClose, productName }: ConsultarPVPDrawerProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => {
                onClose();
                setTimeout(() => setStatus("idle"), 500);
            }, 3000);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                        style={{ position: "fixed" }}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%", opacity: 0.5 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0.5 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-background border-l border-border/50 shadow-2xl z-50 overflow-y-auto"
                        style={{ position: "fixed" }}
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-border/50 bg-muted/20">
                                <div>
                                    <h2 className="text-2xl font-black text-foreground flex items-center gap-2">
                                        <Euro className="text-[#FF6600]" size={24} /> Consultar PVP
                                    </h2>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Solicita precio para: <span className="font-bold text-foreground">{productName}</span>
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    aria-label="Cerrar"
                                    className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="flex-1 p-6 lg:p-8">
                                {status === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-4"
                                    >
                                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle2 size={40} className="text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold">¡Solicitud Enviada!</h3>
                                        <p className="text-muted-foreground">
                                            Nuestro equipo comercial se pondrá en contacto contigo en la mayor brevedad posible con el PVP para la máquina {productName}.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-sm font-bold text-foreground mb-1 block">Nombre completo *</label>
                                                <input
                                                    required
                                                    type="text"
                                                    className="w-full px-4 py-3 bg-muted/40 border-2 border-transparent rounded-xl focus:outline-none focus:border-[#FF6600]/30 focus:bg-background transition-all font-medium"
                                                    placeholder="Ej. Juan Pérez"
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-sm font-bold text-foreground mb-1 block">Email *</label>
                                                    <input
                                                        required
                                                        type="email"
                                                        className="w-full px-4 py-3 bg-muted/40 border-2 border-transparent rounded-xl focus:outline-none focus:border-[#FF6600]/30 focus:bg-background transition-all font-medium"
                                                        placeholder="correo@empresa.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-sm font-bold text-foreground mb-1 block">Teléfono *</label>
                                                    <input
                                                        required
                                                        type="tel"
                                                        className="w-full px-4 py-3 bg-muted/40 border-2 border-transparent rounded-xl focus:outline-none focus:border-[#FF6600]/30 focus:bg-background transition-all font-medium"
                                                        placeholder="+34 600 000 000"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-sm font-bold text-foreground mb-1 block">Empresa</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 bg-muted/40 border-2 border-transparent rounded-xl focus:outline-none focus:border-[#FF6600]/30 focus:bg-background transition-all font-medium"
                                                    placeholder="Nombre comercial o empresa"
                                                />
                                            </div>

                                            <div>
                                                <label className="text-sm font-bold text-foreground mb-1 block">Mensaje (Opcional)</label>
                                                <textarea
                                                    className="w-full px-4 py-3 bg-muted/40 border-2 border-transparent rounded-xl focus:outline-none focus:border-[#FF6600]/30 focus:bg-background transition-all font-medium min-h-[120px] resize-y"
                                                    placeholder="Cualquier duda o especificación sobre tu taller..."
                                                    defaultValue={`Hola equipo de Beinsen, me gustaría consultar el PVP y la disponibilidad de la máquina ${productName}.`}
                                                />
                                            </div>
                                        </div>

                                        <div className="bg-[#FF6600]/10 border border-[#FF6600]/20 rounded-xl p-4 text-sm text-[#FF6600] mt-4">
                                            Venta exclusiva a profesionales. Consultaremos tus datos para ofrecerte la tarifa adecuada.
                                        </div>

                                        <div className="mt-8">
                                            <button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className="w-full py-4 bg-foreground text-background rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#FF6600] hover:text-white transition-colors disabled:opacity-70 shadow-xl"
                                            >
                                                {status === "loading" ? (
                                                    <div className="w-6 h-6 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        Enviar Solicitud <Send size={18} />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
