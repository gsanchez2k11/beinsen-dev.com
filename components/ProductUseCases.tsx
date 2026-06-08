"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, Store, Hammer, Trophy, Shirt, Coffee, Crown, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/i18n";
import type { Plancha } from "@/data/products";

interface ProductUseCasesProps {
    plancha: Plancha;
}

const dictionary = {
    es: { title: "Para quién es", sub: "Negocios y perfiles que más la aprovechan" },
    en: { title: "Who is it for", sub: "Businesses that get the most out of it" },
    pt: { title: "Para quem é", sub: "Negócios que mais a aproveitam" },
    it: { title: "Per chi è", sub: "Attività che la sfruttano al massimo" },
};

interface UseCase {
    Icon: React.ElementType;
    title: { es: string; en: string; pt: string; it: string };
    description: { es: string; en: string; pt: string; it: string };
}

// Casos por categoria
const CASES_BY_CATEGORY: Record<string, UseCase[]> = {
    Textil: [
        {
            Icon: Hammer,
            title: { es: "Taller textil", en: "Textile workshop", pt: "Oficina têxtil", it: "Laboratorio tessile" },
            description: { es: "Personalización de camisetas, sudaderas y tejidos al por mayor", en: "Bulk customization of t-shirts, hoodies and textiles", pt: "Personalização de t-shirts, moletons e têxteis", it: "Personalizzazione di magliette, felpe e tessuti" },
        },
        {
            Icon: Store,
            title: { es: "Tienda merchandising", en: "Merchandising store", pt: "Loja de merchandising", it: "Negozio merchandising" },
            description: { es: "Producción rápida de prendas personalizadas a clientes finales", en: "Fast production of custom garments for end customers", pt: "Produção rápida de peças personalizadas para clientes finais", it: "Produzione rapida di capi personalizzati per clienti finali" },
        },
        {
            Icon: Calendar,
            title: { es: "Eventos y ferias", en: "Events & trade fairs", pt: "Eventos e feiras", it: "Eventi e fiere" },
            description: { es: "Customización en vivo en eventos deportivos, conciertos y ferias", en: "Live customization at sports events, concerts and fairs", pt: "Personalização ao vivo em eventos desportivos e feiras", it: "Personalizzazione dal vivo a eventi sportivi e fiere" },
        },
        {
            Icon: Building2,
            title: { es: "Empresa promocional", en: "Promotional company", pt: "Empresa promocional", it: "Azienda promozionale" },
            description: { es: "Regalo corporativo y uniformes para clientes empresariales", en: "Corporate gifting and uniforms for enterprise clients", pt: "Brindes corporativos e uniformes para clientes empresariais", it: "Regalistica aziendale e uniformi per clienti enterprise" },
        },
    ],
    "Tazas y Botellas": [
        {
            Icon: Coffee,
            title: { es: "Regalos personalizados", en: "Custom gifts", pt: "Presentes personalizados", it: "Regali personalizzati" },
            description: { es: "Tazas con foto, frase o logo para clientes finales", en: "Photo, quote or logo mugs for end customers", pt: "Canecas com foto, frase ou logo para clientes finais", it: "Tazze con foto, frase o logo per clienti finali" },
        },
        {
            Icon: Calendar,
            title: { es: "Eventos especiales", en: "Special events", pt: "Eventos especiais", it: "Eventi speciali" },
            description: { es: "Bodas, cumpleaños, comuniones — tirada corta personalizada", en: "Weddings, birthdays, communions — short personalized runs", pt: "Casamentos, aniversários, comunhões — tiragem curta personalizada", it: "Matrimoni, compleanni, comunioni — piccole produzioni personalizzate" },
        },
        {
            Icon: Building2,
            title: { es: "Marketing corporativo", en: "Corporate marketing", pt: "Marketing corporativo", it: "Marketing aziendale" },
            description: { es: "Tazas y botellas con branding para empresas y clientes B2B", en: "Branded mugs and bottles for companies and B2B clients", pt: "Canecas e garrafas com branding para empresas e clientes B2B", it: "Tazze e bottiglie con branding per aziende e clienti B2B" },
        },
        {
            Icon: Store,
            title: { es: "Tienda souvenir", en: "Souvenir shop", pt: "Loja de lembranças", it: "Negozio souvenir" },
            description: { es: "Stock variable bajo demanda en zonas turísticas", en: "On-demand stock for touristy areas", pt: "Stock variável sob demanda em zonas turísticas", it: "Stock variabile su richiesta in zone turistiche" },
        },
    ],
    Gorras: [
        {
            Icon: Crown,
            title: { es: "Marca streetwear", en: "Streetwear brand", pt: "Marca streetwear", it: "Brand streetwear" },
            description: { es: "Producción propia de gorras de marca con tu identidad", en: "In-house production of branded caps with your identity", pt: "Produção própria de bonés de marca com a sua identidade", it: "Produzione interna di cappellini con la tua identità" },
        },
        {
            Icon: Trophy,
            title: { es: "Equipos deportivos", en: "Sports teams", pt: "Equipas desportivas", it: "Squadre sportive" },
            description: { es: "Gorras con escudo y nombre para clubes y federaciones", en: "Caps with crest and name for clubs and federations", pt: "Bonés com escudo e nome para clubes e federações", it: "Cappellini con stemma e nome per club e federazioni" },
        },
        {
            Icon: Store,
            title: { es: "Tienda merchandising", en: "Merch store", pt: "Loja merchandising", it: "Negozio merchandising" },
            description: { es: "Catálogo amplio sin stock parado", en: "Wide catalog with no idle stock", pt: "Catálogo amplo sem stock parado", it: "Catalogo ampio senza stock fermo" },
        },
        {
            Icon: Calendar,
            title: { es: "Eventos y festivales", en: "Events & festivals", pt: "Eventos e festivais", it: "Eventi e festival" },
            description: { es: "Personalización rápida en stands y zonas comerciales", en: "Quick customization at stands and commercial zones", pt: "Personalização rápida em stands e zonas comerciais", it: "Personalizzazione rapida a stand e zone commerciali" },
        },
    ],
    Especializadas: [
        {
            Icon: Briefcase,
            title: { es: "Nicho especializado", en: "Specialized niche", pt: "Nicho especializado", it: "Nicchia specializzata" },
            description: { es: "Resuelve formatos que ninguna prensa estándar cubre", en: "Solves formats no standard press covers", pt: "Resolve formatos que nenhuma prensa padrão cobre", it: "Risolve formati che nessuna pressa standard copre" },
        },
        {
            Icon: Trophy,
            title: { es: "Mercado deportivo", en: "Sports market", pt: "Mercado desportivo", it: "Mercato sportivo" },
            description: { es: "Personalización deportiva donde otros no llegan", en: "Sports personalization where others can't reach", pt: "Personalização desportiva onde outros não chegam", it: "Personalizzazione sportiva dove altri non arrivano" },
        },
        {
            Icon: Hammer,
            title: { es: "Producción a medida", en: "Custom production", pt: "Produção à medida", it: "Produzione su misura" },
            description: { es: "Encargos especiales y producciones únicas con margen alto", en: "Special orders and unique runs with high margin", pt: "Encomendas especiais e produções únicas com margem alta", it: "Ordini speciali e produzioni uniche ad alto margine" },
        },
        {
            Icon: Crown,
            title: { es: "Diferenciación premium", en: "Premium differentiation", pt: "Diferenciação premium", it: "Differenziazione premium" },
            description: { es: "Lo que ofrece tu negocio que la competencia no", en: "What your business offers that the competition doesn't", pt: "O que o seu negócio oferece que a concorrência não", it: "Ciò che la tua attività offre e che la concorrenza no" },
        },
    ],
    Multifunción: [
        {
            Icon: Wrench,
            title: { es: "Taller multifunción", en: "Multipurpose workshop", pt: "Oficina multifunção", it: "Laboratorio multifunzione" },
            description: { es: "Una sola máquina para textil, gorras, tazas, platos…", en: "One machine for textile, caps, mugs, plates…", pt: "Uma só máquina para têxtil, bonés, canecas, pratos…", it: "Una sola macchina per tessile, cappelli, tazze, piatti…" },
        },
        {
            Icon: Shirt,
            title: { es: "Negocio diversificado", en: "Diversified business", pt: "Negócio diversificado", it: "Attività diversificata" },
            description: { es: "Cubres muchos formatos con baja inversión inicial", en: "Cover many formats with low initial investment", pt: "Cobre vários formatos com baixo investimento inicial", it: "Copri molti formati con basso investimento iniziale" },
        },
        {
            Icon: Store,
            title: { es: "Tienda de regalos", en: "Gift store", pt: "Loja de presentes", it: "Negozio di regali" },
            description: { es: "Catálogo amplio con poco espacio físico ocupado", en: "Wide catalog using little physical space", pt: "Catálogo amplo com pouco espaço físico ocupado", it: "Catalogo ampio con poco spazio fisico occupato" },
        },
        {
            Icon: Building2,
            title: { es: "Empresa promocional", en: "Promotional company", pt: "Empresa promocional", it: "Azienda promozionale" },
            description: { es: "Atiende cualquier petición sin derivar a terceros", en: "Handle any request without outsourcing", pt: "Atende qualquer pedido sem subcontratar", it: "Gestisci ogni richiesta senza esternalizzare" },
        },
    ],
};

export function ProductUseCases({ plancha }: ProductUseCasesProps) {
    const { locale } = useLanguage();
    const d = dictionary[locale] || dictionary.es;
    const categoryEs = getLocalized(plancha.category, "es") || "";
    const cases = CASES_BY_CATEGORY[categoryEs];
    if (!cases || cases.length === 0) return null;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
                <span className="inline-block text-[#FF6600] font-black uppercase tracking-[0.4em] text-xs mb-3">{d.title}</span>
                <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">{d.sub}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {cases.map((c, i) => {
                    const title = (c.title as any)[locale] || c.title.es;
                    const description = (c.description as any)[locale] || c.description.es;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative overflow-hidden rounded-3xl bg-card border border-border/40 p-7 hover:border-[#FF6600]/40 hover:shadow-xl hover:shadow-[#FF6600]/10 transition-all"
                        >
                            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#FF6600]/0 group-hover:bg-[#FF6600]/10 blur-2xl transition-all duration-500" />
                            <div className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6600]/15 to-[#FF9900]/5 border border-[#FF6600]/20 flex items-center justify-center mb-5">
                                    <c.Icon className="text-[#FF6600]" size={26} />
                                </div>
                                <h4 className="font-black text-base lg:text-lg text-foreground mb-2 leading-tight">{title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
