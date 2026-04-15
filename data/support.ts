import { Localized } from "./products";

export type ResourceType = 'manual' | 'video' | 'cert' | 'firmware';

export interface SupportResource {
    id: string;
    title: Localized<string>;
    type: ResourceType;
    category: 'machine' | 'safety' | 'maintenance';
    url: string; // PDF link, YouTube ID, etc.
    machineId?: string;
    version?: string;
    date: string;
}

export const resourcesData: SupportResource[] = [
    {
        id: "trinidad-manual-es",
        title: {
            es: "Manual de Usuario - Beinsen Trinidad",
            en: "User Manual - Beinsen Trinidad",
            pt: "Manual do Usuário - Beinsen Trinidad",
            it: "Manuale Utente - Beinsen Trinidad"
        },
        type: 'manual',
        category: 'machine',
        url: "/docs/trinidad-manual.pdf",
        machineId: "trinidad-prensa-termica-automatica",
        version: "v2.4",
        date: "2024-01-15"
    },
    {
        id: "safety-cert-ce",
        title: {
            es: "Certificado de Seguridad CE - Gama Pro",
            en: "CE Safety Certificate - Pro Range",
            pt: "Certificado de Segurança CE - Linha Pro",
            it: "Certificato di Sicurezza CE - Gamma Pro"
        },
        type: 'cert',
        category: 'safety',
        url: "/docs/ce-certification.pdf",
        date: "2023-11-20"
    },
    {
        id: "maintenance-video-plates",
        title: {
            es: "Calibración de Platos y Presión",
            en: "Plate and Pressure Calibration",
            pt: "Calibração de Pratos e Pressão",
            it: "Calibrazione Piastre e Pressione"
        },
        type: 'video',
        category: 'maintenance',
        url: "dQw4w9WgXcQ", // YouTube ID demo
        machineId: "trinidad-prensa-termica-automatica",
        date: "2024-02-10"
    }
];
