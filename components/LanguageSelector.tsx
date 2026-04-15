"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/data/products";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

export function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-foreground/80 hover:text-primary"
        aria-label="Select Language"
      >
        <Globe size={20} />
        <span className="hidden lg:inline text-sm font-medium">{currentLang.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 glass shadow-xl rounded-xl border border-border/50 py-2 z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-primary/10 transition-colors ${
                locale === lang.code ? 'text-primary font-bold bg-primary/5' : 'text-foreground/70'
              }`}
            >
              <span>{lang.label}</span>
              <span>{lang.flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
