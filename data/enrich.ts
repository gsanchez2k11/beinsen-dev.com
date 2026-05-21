import type { Plancha, TechnicalSpec, Benefit, Hotspot } from "./types";

// Necesitamos uniqueStrings (usado por enrichPlancha) — re-declarado si no existe en raw
function uniqueStrings(arr: (string | undefined)[]): string[] {
    return Array.from(new Set(arr.filter((v): v is string => typeof v === "string")));
}

function enrichPlancha(plancha: Plancha): Plancha {
  const esName = plancha.name.es || plancha.name.en || "Beinsen";
  const enName = plancha.name.en || plancha.name.es || "Beinsen";

  const featureEs = plancha.features.es || [];
  const featureEn = plancha.features.en || featureEs;

  const defaultBenefits: Benefit[] = featureEs.slice(0, 3).map((feature, index) => ({
    title: {
      es: `Beneficio ${index + 1}`,
      en: `Benefit ${index + 1}`
    },
    description: {
      es: feature,
      en: featureEn[index] || feature
    },
    icon: "Zap"
  }));

  const defaultTechnicalSpecs: TechnicalSpec[] = [
    { label: { es: "Categoría", en: "Category" }, value: plancha.category },
    { label: { es: "Sistema", en: "System" }, value: plancha.openingType || { es: "Manual", en: "Manual" } },
    { label: { es: "Formato", en: "Format" }, value: plancha.size }
  ];

  const storyPool = [
    { headline: "Precisión y Control", title: "Acabados impecables", desc: "está diseñada para garantizar estampados precisos con una facilidad de uso inigualable", enDesc: "is designed to guarantee precise prints with unmatched ease of use" },
    { headline: "Potencia Industrial", title: "Máxima durabilidad", desc: "ha sido construida para soportar largas jornadas de trabajo sin comprometer la calidad", enDesc: "is built to withstand long workdays without compromising quality" },
    { headline: "Innovación Térmica", title: "Calor uniforme", desc: "asegura una distribución de temperatura perfecta para transferencias sin fallos", enDesc: "ensures perfect temperature distribution for flawless transfers" },
    { headline: "Versatilidad Sin Límites", title: "Adaptable a todo", desc: "es la herramienta definitiva para quienes buscan diversificar su oferta de productos", enDesc: "is the ultimate tool for those looking to diversify their product offerings" },
    { headline: "Eficiencia Comprobada", title: "Rendimiento superior", desc: "ha sido optimizada para reducir los tiempos de ciclo y maximizar tu producción diaria", enDesc: "has been optimized to reduce cycle times and maximize your daily production" },
    { headline: "Trabajo Inteligente", title: "Flujo continuo", desc: "te permite trabajar reduciendo el esfuerzo manual en cada ciclo de planchado", enDesc: "allows you to work by reducing manual effort in every pressing cycle" },
    { headline: "Diseño Ergonómico", title: "Comodidad total", desc: "está pensada para el bienestar del operador, haciendo que el proceso sea rápido y seguro", enDesc: "is designed for operator comfort, making the process fast and safe" },
    { headline: "Alto Rendimiento", title: "Resultados profesionales", desc: "te ofrece el control exacto necesario para trabajos que requieren la mayor exigencia", enDesc: "offers the exact control needed for highly demanding jobs" }
  ];
  const hash = plancha.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const selectedStory = storyPool[hash % storyPool.length];

  const defaultStorySegments = [
    {
      title: { es: selectedStory.title, en: "Professional performance" },
      description: {
        es: `${esName} ${selectedStory.desc}.`,
        en: `${enName} ${selectedStory.enDesc}.`
      },
      image: plancha.image
    }
  ];

  const defaultMaintenanceTips = {
    es: [
      "Limpia la superficie del plato después de cada jornada de trabajo.",
      "Verifica periódicamente presión, temperatura y estado del cableado."
    ],
    en: [
      "Clean the platen surface after each working day.",
      "Periodically verify pressure, temperature and wiring condition."
    ]
  };

  const defaultHotspots: Hotspot[] = [
    {
      x: 50,
      y: 50,
      title: { es: "Zona de trabajo", en: "Work area" },
      description: {
        es: "Componente principal optimizado para transferencias uniformes y seguras.",
        en: "Main component optimized for uniform and safe transfers."
      }
    }
  ];

  const defaultDownloads = [
    {
      label: { es: "Ficha Técnica", en: "Technical Sheet" },
      url: `/manuales/${plancha.slug}.pdf`
    }
  ];

  return {
    ...plancha,
    storyHeadline: plancha.storyHeadline || { es: selectedStory.headline, en: "Redefining the workflow" },
    gallery: uniqueStrings([plancha.image, ...(plancha.gallery || [])]),
    technicalSpecs: plancha.technicalSpecs && plancha.technicalSpecs.length > 0 ? plancha.technicalSpecs : defaultTechnicalSpecs,
    benefits: plancha.benefits && plancha.benefits.length > 0 ? plancha.benefits : defaultBenefits,
    hotspots: plancha.hotspots && plancha.hotspots.length > 0 ? plancha.hotspots : defaultHotspots,
    hotspotImage: plancha.hotspotImage || plancha.image,
    downloads: plancha.downloads && plancha.downloads.length > 0 ? plancha.downloads : defaultDownloads,
    storySegments: plancha.storySegments && plancha.storySegments.length > 0 ? plancha.storySegments : defaultStorySegments,
    maintenanceTips: plancha.maintenanceTips || defaultMaintenanceTips,
    distributors: plancha.distributors
  };
}

const getSortName = (item: any) => {
  const name = typeof item.name === 'object' ? (item.name.es || item.name.en || "") : (item.name || "");
  return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export { enrichPlancha, getSortName };
