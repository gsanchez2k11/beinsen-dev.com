"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check, Settings } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const COOKIE_CONSENT_KEY = "beinsen_cookie_consent";

export default function CookieConsent() {
  const { locale } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
      // Small delay to trigger animation
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    setIsVisible(false);
    localStorage.setItem(COOKIE_CONSENT_KEY, "all");
    setTimeout(() => setShowBanner(false), 500);
  };

  const handleAcceptNecessary = () => {
    setIsVisible(false);
    localStorage.setItem(COOKIE_CONSENT_KEY, "necessary");
    setTimeout(() => setShowBanner(false), 500);
  };

  const d = {
    es: {
      title: "Control de Cookies",
      text: "Utilizamos cookies propias y de terceros para mejorar su experiencia, analizar el tráfico y mostrar anuncios personalizados. Puede aceptar todas, configurar sus preferencias o rechazar las no necesarias.",
      acceptAll: "Aceptar todas",
      necessary: "Solo necesarias",
      settings: "Configurar",
      privacy: "Política de Privacidad"
    },
    en: {
      title: "Cookie Control",
      text: "We use our own and third-party cookies to improve your experience, analyze traffic and show personalized ads. You can accept all, set your preferences or reject non-necessary ones.",
      acceptAll: "Accept all",
      necessary: "Necessary only",
      settings: "Settings",
      privacy: "Privacy Policy"
    },
    pt: {
      title: "Controle de Cookies",
      text: "Utilizamos cookies próprios e de terceiros para melhorar a sua experiência, analisar o tráfego e apresentar anúncios personalizados. Pode aceitar todos, configurar as suas preferências ou rejeitar os não necessários.",
      acceptAll: "Aceitar todos",
      necessary: "Apenas necessárias",
      settings: "Configurar",
      privacy: "Política de Privacidade"
    },
    it: {
      title: "Controllo dei Cookie",
      text: "Utilizziamo cookie propri e di terze parti per migliorare la tua esperienza, analizzare il traffico e mostrare annunci personalizzati. Puoi accettare tutti, impostare le tue preferenze o rifiutare quelli non necessari.",
      acceptAll: "Accetta tutti",
      necessary: "Solo necessari",
      settings: "Configura",
      privacy: "Informativa sulla Privacy"
    }
  }[locale] || { es: {} }.es;

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[9999]"
        >
          <div className="bg-card/95 backdrop-blur-xl border border-border shadow-2xl rounded-[2rem] p-6 md:p-8 relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-[#FF6600]/10 rounded-full blur-3xl group-hover:bg-[#FF6600]/20 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600]">
                  <Cookie size={20} />
                </div>
                <h3 className="font-bold text-lg text-foreground tracking-tight">
                  {d.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {d.text}
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#FF6600] text-white font-bold text-sm hover:bg-[#cc5200] transition-all shadow-lg shadow-[#FF6600]/20 flex items-center justify-center gap-2 group/btn"
                >
                  <Check size={18} className="group-hover/btn:scale-110 transition-transform" />
                  {d.acceptAll}
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleAcceptNecessary}
                    className="py-3 px-4 rounded-xl bg-muted/50 text-muted-foreground font-semibold text-xs hover:bg-muted hover:text-foreground transition-all flex items-center justify-center gap-2"
                  >
                    {d.necessary}
                  </button>
                  <button
                    className="py-3 px-4 rounded-xl bg-muted/50 text-muted-foreground font-semibold text-xs hover:bg-muted hover:text-foreground transition-all flex items-center justify-center gap-2"
                  >
                    <Settings size={14} />
                    {d.settings}
                  </button>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/50 hover:text-[#FF6600] transition-colors">
                  {d.privacy}
                </a>
              </div>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-2 text-muted-foreground/40 hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
