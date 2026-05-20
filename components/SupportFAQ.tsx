"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { faqData } from "@/data/faq";

export function SupportFAQ() {
    const { locale } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const heading = {
        es: "Preguntas frecuentes",
        en: "Frequently Asked Questions",
        pt: "Perguntas frequentes",
        it: "Domande frequenti",
    }[locale] || "Preguntas frecuentes";

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <div className="flex items-center gap-3 mb-12">
                <div className="w-10 h-10 rounded-2xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                    <HelpCircle size={20} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black italic tracking-tight">{heading}</h2>
            </div>
            <div className="space-y-4">
                {faqData.map((item, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div
                            key={i}
                            className="bg-card border border-border/50 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FF6600]/5 transition-colors"
                                aria-expanded={isOpen}
                            >
                                <span className="font-black text-lg pr-4">
                                    {item.question[locale as "es" | "en" | "pt" | "it"] || item.question.es}
                                </span>
                                <ChevronDown
                                    size={22}
                                    className={`text-[#FF6600] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                />
                            </button>
                            {isOpen && (
                                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                    {item.answer[locale as "es" | "en" | "pt" | "it"] || item.answer.es}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
