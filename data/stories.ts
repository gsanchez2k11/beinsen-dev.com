import { Locale, Localized } from "./products";

export interface CaseStudy {
    id: string;
    slug: string;
    title: Localized<string>;
    client: string;
    industry: Localized<string>;
    challenge: Localized<string>;
    solution: Localized<string>;
    results: Localized<string[]>;
    mainImage: string;
    gallery?: string[];
    relatedMachineId: string;
    location: string;
    year: string;
}

export const storiesData: CaseStudy[] = [
    {
        id: "sport-pro-efficiency",
        slug: "optimizacion-textil-deportiva",
        title: {
            es: "Optimización Térmica en Producción de Ropa Deportiva",
            en: "Thermal Optimization in Sportswear Production",
            pt: "Otimização Térmica na Produção de Roupas Esportivas",
            it: "Ottimizzazione Termica nella Produzione di Abbigliamento Sportivo"
        },
        client: "EuroSport Manufacturing",
        industry: {
            es: "Manufactura Textil",
            en: "Textile Manufacturing",
            pt: "Manufatura Têxtil",
            it: "Produzione Tessile"
        },
        challenge: {
            es: "La empresa necesitaba reducir los tiempos de inactividad durante el cambio de platos y asegurar una presión uniforme en tiradas de 5,000 unidades diarias.",
            en: "The company needed to reduce downtime during plate changes and ensure uniform pressure in daily runs of 5,000 units.",
            pt: "A empresa precisava reduzir tempos de inatividade durante a troca de pratos e garantir pressão uniforme em volumes de 5.000 unidades diárias.",
            it: "L'azienda aveva bisogno di ridurre i tempi morti durante il cambio piastra e garantire una pressione uniforme in cicli da 5.000 unità al giorno."
        },
        solution: {
            es: "Implementación de 4 unidades Beinsen Trinidad con sistema de doble plato automatizado y láseres de posicionamiento integrados.",
            en: "Implementation of 4 Beinsen Trinidad units with automated dual plate systems and integrated positioning lasers.",
            pt: "Implementação de 4 unidades Beinsen Trinidad com sistema de prato duplo automatizado e lasers de posicionamento integrados.",
            it: "Implementazione di 4 unità Beinsen Trinidad con sistema a doppia piastra automatizzato e laser di posizionamento integrati."
        },
        results: {
            es: [
                "Aumento del 35% en la velocidad de producción mensual",
                "Reducción del 95% en mermas por error de posicionamiento",
                "Consistencia total de color en transferencias de alta temperatura"
            ],
            en: [
                "35% increase in monthly production speed",
                "95% reduction in wasted stock due to positioning errors",
                "Total color consistency in high-temperature transfers"
            ],
            pt: [
                "Aumento de 35% na velocidade de produção mensal",
                "Redução de 95% em desperdícios por erro de posicionamento",
                "Consistência total de cores em transferências de alta temperatura"
            ],
            it: [
                "Aumento del 35% nella velocità di produzione mensile",
                "Riduzione del 95% degli scarti per errori di posizionamento",
                "Consistenza cromatica totale nei trasferimenti ad alta temperatura"
            ]
        },
        mainImage: "https://images.unsplash.com/photo-1558444479-c8485183056e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        relatedMachineId: "trinidad-prensa-termica-automatica",
        location: "Alicante, España",
        year: "2023"
    },
    {
        id: "corporate-merchandising-hub",
        slug: "hub-merchandising-corporativo",
        title: {
            es: "Escalabilidad en Merchandising Corporativo Premium",
            en: "Scalability in Premium Corporate Merchandising",
            pt: "Escalabilidade em Merchandising Corporativo Premium",
            it: "Scalabilità nel Merchandising Aziendale Premium"
        },
        client: "GlobalPromo Logistics",
        industry: {
            es: "Regalo Publicitario",
            en: "Promotional Gifts",
            pt: "Brindes Promocionais",
            it: "Regali Promozionali"
        },
        challenge: {
            es: "Requerían una solución versátil capaz de estampar tazas, textil y gorras con la misma precisión cromática para campañas globales.",
            en: "They required a versatile solution capable of printing mugs, textiles, and caps with the same color precision for global campaigns.",
            pt: "Exigiam uma solução versátil capaz de estampar canecas, têxteis e bonés com a mesma precisão de cores para campanhas globais.",
            it: "Richiedevano una soluzione versatile in grado di stampare tazze, tessuti e cappellini con la stessa precisione cromatica per campagne globali."
        },
        solution: {
            es: "Instalación de estaciones de trabajo modulares Beinsen Sore y accesorios de la gama Pro para cambios rápidos de aplicación.",
            en: "Installation of modular Beinsen Sore workstations and Pro range accessories for fast application changes.",
            pt: "Instalação de estações de trabalho modulares Beinsen Sore e acessórios da linha Pro para mudanças rápidas de aplicação.",
            it: "Installazione di stazioni di lavoro modulari Beinsen Sore e accessori della gamma Pro per rapidi cambi di applicazione."
        },
        results: {
            es: [
                "ROI alcanzado en los primeros 6 meses de operación",
                "Certificación de calidad ISO superada gracias a la precisión térmica",
                "Capacidad para gestionar pedidos multi-producto simultáneamente"
            ],
            en: [
                "ROI achieved within the first 6 months of operation",
                "ISO quality certification passed thanks to thermal precision",
                "Ability to manage multi-product orders simultaneously"
            ],
            pt: [
                "ROI alcançado nos primeiros 6 meses de operação",
                "Certificação de qualidade ISO superada graças à precisão térmica",
                "Capacidade de gerenciar pedidos multiprodutos simultaneamente"
            ],
            it: [
                "ROI raggiunto nei primi 6 mesi di attività",
                "Certificazione di qualità ISO superata grazie alla precisione termica",
                "Capacità di gestire ordini multi-prodotto simultaneamente"
            ]
        },
        mainImage: "https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        relatedMachineId: "sore-plancha-profesional-platos",
        location: "Lisboa, Portugal",
        year: "2024"
    }
];
