"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Clock, Euro } from "lucide-react";
import { ContactSpecialistButton } from "./ContactSpecialistButton";
import { useLanguage } from "@/context/LanguageContext";

interface RoiCalculatorProps {
    machineName: string;
    machinePrice: string | number;
}

export function RoiCalculator({ machineName, machinePrice }: RoiCalculatorProps) {
    const { locale } = useLanguage();
    
    // Dictionary for the calculator
    const dictionary = {
        es: {
            title: "Calculadora ROI",
            desc: "Descubre en cuánto tiempo amortizarás la",
            desc2: "gracias a la reducción en costes de operario frente a una prensa manual tradicional.",
            prodLabel: "Producción (Prendas/Día)",
            low: "Poca",
            high: "Alta",
            costLabel: "Coste Operario (€/Hora)",
            impactTitle: "El Impacto en tu Negocio",
            timeSaving: "Ahorro Tiempo",
            moneySaving: "Ahorro Dinero",
            day: "H/día",
            month: "€/mes",
            months: "Meses",
            impactDesc: "La máquina se paga sola en exactamente:"
        },
        en: {
            title: "ROI Calculator",
            desc: "Discover how soon you will amortize the",
            desc2: "thanks to the reduction in operator costs compared to a traditional manual press.",
            prodLabel: "Production (Garments/Day)",
            low: "Low",
            high: "High",
            costLabel: "Operator Cost (€/Hour)",
            impactTitle: "Impact on Your Business",
            timeSaving: "Time Saving",
            moneySaving: "Money Saving",
            day: "H/day",
            month: "€/month",
            months: "Months",
            impactDesc: "The machine pays for itself in exactly:"
        },
        pt: {
            title: "Calculadora ROI",
            desc: "Descubra em quanto tempo amortizará a",
            desc2: "graças à redução nos custos de operador face a uma prensa manual tradicional.",
            prodLabel: "Produção (Peças/Dia)",
            low: "Baixa",
            high: "Alta",
            costLabel: "Custo Operador (€/Hora)",
            impactTitle: "O Impacto no seu Negócio",
            timeSaving: "Poupança Tempo",
            moneySaving: "Poupança Dinheiro",
            day: "H/dia",
            month: "€/mês",
            months: "Meses",
            impactDesc: "A máquina paga-se sozinha em exatamente:"
        },
        it: {
            title: "Calcolatore ROI",
            desc: "Scopri in quanto tempo ammortizzerai la",
            desc2: "grazie alla riduzione dei costi dell'operatore rispetto a una tradizionale pressa manuale.",
            prodLabel: "Produzione (Capi/Giorno)",
            low: "Bassa",
            high: "Alta",
            costLabel: "Costo Operatore (€/Ora)",
            impactTitle: "L'Impatto sul tuo Business",
            timeSaving: "Risparmio Tempo",
            moneySaving: "Risparmio Denaro",
            day: "H/giorno",
            month: "€/mese",
            months: "Mesi",
            impactDesc: "La macchina si paga da sola in esattamente:"
        }
    };
    const d = dictionary[locale] || dictionary.es;

    // Configurable Sliders
    const [garmentsPerDay, setGarmentsPerDay] = useState(200);
    const [hourlyRate, setHourlyRate] = useState(15);

    // Constants for calculation (Estimates)
    const manualSecondsPerGarment = 45; // Handling + pressing time manually
    const autoSecondsPerGarment = 15;   // Faster auto handling

    const workingDaysPerMonth = 22;
    const numericPrice = typeof machinePrice === 'number' ? machinePrice : 5000; // Fallback

    // Calculations
    const manualHoursPerDay = (garmentsPerDay * manualSecondsPerGarment) / 3600;
    const autoHoursPerDay = (garmentsPerDay * autoSecondsPerGarment) / 3600;

    const hoursSavedPerDay = manualHoursPerDay - autoHoursPerDay;
    const moneySavedPerDay = hoursSavedPerDay * hourlyRate;
    const moneySavedPerMonth = moneySavedPerDay * workingDaysPerMonth;

    // Payback period
    const paybackMonths = moneySavedPerMonth > 0 ? (numericPrice / moneySavedPerMonth).toFixed(1) : 0;

    return (
        <div className="w-full max-w-4xl mx-auto bg-card rounded-[2rem] border border-border overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Left Side: Interactive Sliders */}
                <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border bg-muted/20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-[#FF6600]/10 flex items-center justify-center">
                            <Calculator className="text-[#FF6600]" size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-foreground">{d.title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-10 text-sm">
                        {d.desc} <strong>{machineName}</strong> {d.desc2}
                    </p>

                    <div className="space-y-10">
                        {/* Slider 1 */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-foreground text-sm uppercase tracking-wider">{d.prodLabel}</label>
                                <span className="bg-background border border-border px-3 py-1 rounded-lg font-bold text-[#FF6600]">{garmentsPerDay}</span>
                            </div>
                            <input
                                type="range"
                                min="50"
                                max="1000"
                                step="50"
                                value={garmentsPerDay}
                                onChange={(e) => setGarmentsPerDay(Number(e.target.value))}
                                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-[#FF6600]"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground font-medium">
                                <span>{d.low} (50)</span>
                                <span>{d.high} (1000)</span>
                            </div>
                        </div>

                        {/* Slider 2 */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-bold text-foreground text-sm uppercase tracking-wider">{d.costLabel}</label>
                                <span className="bg-background border border-border px-3 py-1 rounded-lg font-bold text-[#FF6600]">{hourlyRate} €</span>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="30"
                                step="1"
                                value={hourlyRate}
                                onChange={(e) => setHourlyRate(Number(e.target.value))}
                                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-[#FF6600]"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground font-medium">
                                <span>10 €</span>
                                <span>30 €</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: The Result Dashboard */}
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-background">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">{d.impactTitle}</h4>

                    <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="bg-muted border border-border rounded-2xl p-5 flex flex-col pb-6">
                            <Clock className="text-foreground mb-3" size={20} />
                            <span className="text-sm text-muted-foreground font-medium mb-1">{d.timeSaving}</span>
                            <span className="text-3xl font-black text-foreground">{hoursSavedPerDay.toFixed(1)} <span className="text-base text-muted-foreground font-medium">{d.day}</span></span>
                        </div>

                        <div className="bg-muted border border-border rounded-2xl p-5 flex flex-col pb-6">
                            <Euro className="text-foreground mb-3" size={20} />
                            <span className="text-sm text-muted-foreground font-medium mb-1">{d.moneySaving}</span>
                            <span className="text-3xl font-black text-foreground">{moneySavedPerMonth.toFixed(0)} <span className="text-base text-muted-foreground font-medium">{d.month}</span></span>
                        </div>
                    </div>

                    <div className="bg-[#FF6600]/5 border border-[#FF6600]/20 rounded-2xl p-6 flex items-start gap-5 mb-8">
                        <TrendingUp className="text-[#FF6600] shrink-0 mt-1" size={28} />
                        <div>
                            <p className="text-sm text-foreground mb-2 font-medium">{d.impactDesc}</p>
                            <p className="text-4xl font-black text-[#FF6600]">{paybackMonths} <span className="text-xl">{d.months}</span></p>
                        </div>
                    </div>

                    <ContactSpecialistButton productName={machineName} size="lg" className="w-full" />
                </div>

            </div>
        </div>
    );
}
