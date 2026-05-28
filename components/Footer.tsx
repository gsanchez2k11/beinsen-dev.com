"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { locale } = useLanguage();

    const d = {
        es: {
            desc: "Fabricante de prensas transfer para personalización de prendas. Calidad, robustez y precisión para profesionales exigentes.",
            quickLinks: "Enlaces Rápidos",
            planchas: "Prensas Transfer",
            accesorios: "Accesorios y Consumibles",
            support: "Área de Soporte",
            contact: "Contacto",
            address: "Av. Alto de las Atalayas, 18",
            city: "30110 Cabezo de Torres, Murcia",
            rights: "Todos los derechos reservados.",
            privacy: "Privacidad",
            legal: "Aviso Legal",
            conditions: "Condiciones Generales"
        },
        en: {
            desc: "Manufacturer of heat press machines for garment personalization. Quality, robustness, and precision for demanding professionals.",
            quickLinks: "Quick Links",
            planchas: "Heat Presses",
            accesorios: "Accessories & Consumables",
            support: "Support Area",
            contact: "Contact",
            address: "Av. Alto de las Atalayas, 18",
            city: "30110 Cabezo de Torres, Murcia, Spain",
            rights: "All rights reserved.",
            privacy: "Privacy Policy",
            legal: "Legal Notice",
            conditions: "General Conditions"
        },
        pt: {
            desc: "Fabricante de prensas térmicas para personalização de vestuário. Qualidade, robustez e precisão para profissionais exigentes.",
            quickLinks: "Links Rápidos",
            planchas: "Prensas Térmicas",
            accesorios: "Acessórios e Consumíveis",
            support: "Área de Suporte",
            contact: "Contacto",
            address: "Av. Alto de las Atalayas, 18",
            city: "30110 Cabezo de Torres, Múrcia, Espanha",
            rights: "Todos os direitos reservados.",
            privacy: "Privacidade",
            legal: "Aviso Legal",
            conditions: "Condições Gerais"
        },
        it: {
            desc: "Produttore di presse a caldo per la personalizzazione dei capi. Qualità, robustezza e precisione per professionisti esigenti.",
            quickLinks: "Link Rapidi",
            planchas: "Presse a Caldo",
            accesorios: "Accessori e Consumabili",
            support: "Area Supporto",
            contact: "Contattaci",
            address: "Av. Alto de las Atalayas, 18",
            city: "30110 Cabezo de Torres, Murcia, Spagna",
            rights: "Tutti i diritti riservati.",
            privacy: "Privacy",
            legal: "Note Legali",
            conditions: "Condizioni Generali"
        }
    }[locale] || { es: {} }.es;

    return (
        <footer className="bg-card border-t mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/brand/logo.png"
                                alt="Beinsen Logo"
                                width={150}
                                height={50}
                                className="w-auto h-12 object-contain"
                            />
                        </Link>
                        <p className="text-muted-foreground mt-4 text-sm leading-relaxed max-w-xs">
                            {d.desc}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">{d.quickLinks}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/catalogo?type=planchas" className="text-sm text-muted-foreground hover:text-[#FF6600] transition-colors">
                                    {d.planchas}
                                </Link>
                            </li>
                            <li>
                                <Link href="/catalogo?type=accessories" className="text-sm text-muted-foreground hover:text-[#FF6600] transition-colors">
                                    {d.accesorios}
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://soporte.beinsen.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {d.support}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">{d.contact}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                                <span>
                                    {d.address}<br />
                                    {d.city}
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone size={18} className="text-primary" />
                                <a href="tel:+34968902300" className="hover:text-primary">+34 968 902 300</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail size={18} className="text-primary" />
                                <a href="mailto:info@beinsen.com" className="hover:text-primary">info@beinsen.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Beinsen. {d.rights}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                        <Link href="/privacidad" className="text-xs text-muted-foreground hover:text-[#FF6600] transition-colors">
                            {d.privacy}
                        </Link>
                        <Link href="/condiciones" className="text-xs text-muted-foreground hover:text-[#FF6600] transition-colors">
                            {d.conditions}
                        </Link>
                        <Link href="/legal" className="text-xs text-muted-foreground hover:text-[#FF6600] transition-colors">
                            {d.legal}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
