export type Locale = 'es' | 'en' | 'pt' | 'it';
export type Localized<T> = { [key in Locale]?: T };

export interface CompatibleItem {
  id: string;
  name: Localized<string> | string;
  price: number | string;
  image?: string;
  description?: Localized<string> | string;
}

export interface Accessory extends CompatibleItem {}
export interface Consumable extends CompatibleItem {}

export interface TechnicalSpec { 
  label: Localized<string> | string; 
  value: Localized<string> | string; 
}

export interface Benefit { 
  title: Localized<string> | string; 
  description: Localized<string> | string; 
  icon: string; 
}

export interface Hotspot { 
  x: number; 
  y: number; 
  title: Localized<string> | string; 
  description: Localized<string> | string; 
}

export interface Plancha {
  id: string;
  slug: string;
  name: Localized<string>;
  description: Localized<string>;
  image: string;
  size: Localized<string> | string;
  price: number | string;
  category: Localized<string> | string;
  openingType?: Localized<string> | string;
  features: Localized<string[]>;
  accessories: { id: string; price?: number | string }[];
  consumables?: { id: string; price?: number | string }[];

  // New Rich Content Fields
  gallery?: string[];
  videoUrl?: string;
  technicalSpecs?: TechnicalSpec[];
  benefits?: Benefit[];
  hotspots?: Hotspot[];
  downloads?: { label: Localized<string> | string; url: string }[];
  storySegments?: { title: Localized<string> | string; description: Localized<string> | string; image: string }[];
  maintenanceTips?: Localized<string[]>;
  distributors?: { name: string; url: string; logo?: string }[];
}
export const planchasData: Plancha[] = [
  {
    "id": "plancha-transfer-zapatillas-chinela",
    "name": {
      "es": "Plancha térmica para zapatillas Chinela",
      "en": "Chinela heat press for sneakers",
      "pt": "Prensa térmica para sapatilhas Chinela",
      "it": "Pressa termica per scarpe da ginnastica Chinela"
    },
    "description": {
      "es": "La plancha transfer para zapatillas Beinsen Chinela es la especialización llevada al mundo de la sublimación. Podrás personalizar comodamente hasta 2 pares de zapatillas en cada planchado , y gracias al sistema giratorio pasar rapidamente al siguiente planchado.",
      "en": "The Beinsen Chinela heat press for sneakers is specialization brought to the world of sublimation. You can comfortably customize up to 2 pairs of sneakers in each press, and thanks to the rotating system, quickly move to the next press.",
      "pt": "A prensa térmica para sapatilhas Beinsen Chinela é a especialização levada ao mundo da sublimação. Poderá personalizar confortavelmente até 2 pares de sapatilhas em cada prensagem.",
      "it": "La pressa termica per scarpe da ginnastica Beinsen Chinela è la specializzazione portata nel mondo della sublimazione. Potrai personalizzare comodamente fino a 2 paia di scarpe."
    },
    "image": "https://beinsen.com/wp-content/uploads/2019/11/zapas.jpg",
    "price": "Consultar PVP",
    "slug": "plancha-transfer-zapatillas-chinela",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "La plancha transfer para zapatillas Beinsen Chinela es la especialización llevada al mundo de la sublimación",
        "Podrás personalizar comodamente hasta 2 pares de zapatillas en cada planchado , y gracias al sistema giratorio pasar rapidamente al siguiente planchado",
        "En la plancha transfer Beinsen Chinela todo está pensado con el mismo fin: zapatillas",
        "Un plato especial con diseño ergonómico en una plancha giratoria para que tengas todo el espacio necesario para trabajar"
      ],
      "en": [
        "The Beinsen Chinela heat press for sneakers is specialization brought to the world of sublimation",
        "You can comfortably customize up to 2 pairs of sneakers in each press",
        "In the Beinsen Chinela heat press, everything is designed with one goal: sneakers",
        "A special plate with ergonomic design on a rotating press for ample workspace"
      ]
    },
    "accessories": [],
    "category": { "es": "Especializadas", "en": "Specialized", "pt": "Especializadas", "it": "Specializzate" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Capacidad", "en": "Capacity" }, "value": "2 pares simultáneos / 2 pairs simultaneously" },
      { "label": { "es": "Sistema", "en": "System" }, "value": "Giratorio / Rotating" },
      { "label": { "es": "Temp. Máxima", "en": "Max Temp" }, "value": "225 ºC" }
    ],
    "benefits": [
      {
        "title": { "es": "Alta Especialización", "en": "High Specialization" },
        "description": { "es": "Platos diseñados específicamente para la ergonomía del calzado.", "en": "Plates designed specifically for footwear ergonomics." },
        "icon": "Settings"
      }
    ]
  },
  {
    "id": "sore-plancha-profesional-tazas",
    "slug": "sore-plancha-profesional-tazas",
    "name": {
      "es": "Sore plancha profesional para tazas",
      "en": "Sore professional mug press",
      "pt": "Sore prensa profissional para canecas",
      "it": "Sore pressa professionale per tazze"
    },
    "description": {
      "es": "Acaba con las tazas aburridas a golpe de personalización. La plancha transfer profesional para tazas Beinsen Sore es nuestra especialista en tazas. Puedes incrementar la producción x5 o bien utilizar cada resistencia como si fuera una plancha individual.",
      "en": "End boring mugs with personalization. The Beinsen Sore professional mug press is our specialist for mugs. You can increase production x5 or use each element as if it were an individual press.",
      "pt": "Acabe com as canecas aborrecidas com a personalização. A prensa profissional Beinsen Sore é a nossa especialista em canecas.",
      "it": "Basta con le tazze noiose grazie alla personalizzazione. La pressa professionale Beinsen Sore è la nostra specialista per le tazze."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/03/beinsen-sore.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Acaba con las tazas aburridas a golpe de personalización",
        "La plancha transfer profesional para tazas Beinsen Sore es nuestra especialista en tazas",
        "Puedes incrementar la producción x5 o bien utilizar cada resistencia como si fuera una plancha individual",
        "Tu plancha profesional para tazas Beinsen Sore no es una plancha dónde hacer 5 tazas de manera simultánea, es mucho más"
      ],
      "en": [
        "End boring mugs with personalization",
        "The Beinsen Sore professional mug press is our specialist for mugs",
        "You can increase production x5 or use each element as if it were an individual press",
        "Your Beinsen Sore professional press is not just for 5 mugs simultaneously, it's much more"
      ]
    },
    "accessories": [],
    "consumables": [
      { "id": "limpiador-plauto" },
      { "id": "neopreno-base" }
    ],
    "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "gallery": [
      "https://beinsen.com/wp-content/uploads/2025/03/beinsen-sore.jpg"
    ],
    "technicalSpecs": [
      { "label": { "es": "Capacidad", "en": "Capacity" }, "value": "5 tazas simultáneas / 5 mugs simultaneously" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1500W" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V / 110V" },
      { "label": { "es": "Rango Tiempo", "en": "Time Range" }, "value": "0 - 999 s" },
      { "label": { "es": "Temp. Máxima", "en": "Max Temp" }, "value": "225 ºC" }
    ],
    "benefits": [
      {
        "title": { "es": "Producción Industrial", "en": "Industrial Production" },
        "description": { "es": "Multiplica por 5 tu capacidad de entrega diaria con una sola estación de trabajo.", "en": "Multiply your daily delivery capacity by 5 with a single workstation." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Control Independiente", "en": "Independent Control" },
        "description": { "es": "Cada resistencia cuenta con su propio controlador digital para máxima versatilidad.", "en": "Each element has its own digital controller for maximum versatility." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Diseño Ergonómico", "en": "Ergonomic Design" },
        "description": { "es": "Estructura optimizada para un cambio rápido de resistencias y fácil colocación.", "en": "Optimized structure for quick element change and easy placement." },
        "icon": "MousePointer2"
      }
    ],
    "hotspots": [
      { "x": 50, "y": 30, "title": { "es": "Resistencias de Alta Densidad", "en": "High-Density Elements" }, "description": { "es": "Distribución de calor uniforme para una sublimación perfecta de borde a borde.", "en": "Uniform heat distribution for perfect edge-to-edge sublimation." } },
      { "x": 20, "y": 70, "title": { "es": "Controladores Digitales", "en": "Digital Controllers" }, "description": { "es": "Programación precisa de tiempo y temperatura por separado.", "en": "Precise separate time and temperature programming." } }
    ],
    "downloads": [
      { "label": { "es": "Manual de Usuario", "en": "User Manual" }, "url": "/downloads/sore-manual.pdf" },
      { "label": { "es": "Guía de Sublimación", "en": "Sublimation Guide" }, "url": "/downloads/guia-tazas.pdf" }
    ],
    "maintenanceTips": {
      "es": [
        "Limpiar las resistencias después de cada jornada",
        "Revisar el estado de los cables térmicos mensualmente",
        "Evitar el contacto directo de las placas sin taza"
      ],
      "en": [
        "Clean elements after each working day",
        "Check thermal cable status monthly",
        "Avoid direct contact of plates without a mug"
      ]
    }
  },
  {
    "id": "plancha-termica-dorian-platos",
    "slug": "plancha-termica-dorian-platos",
    "name": {
      "es": "Dorian prensa térmica para platos",
      "en": "Dorian heat press for plates",
      "pt": "Dorian prensa térmica para pratos",
      "it": "Dorian pressa termica per piatti"
    },
    "description": {
      "es": "Para solicitar más información puedes contactar con nosotros en el horario de atención al cliente. Consulta cuál es el servicio técnico mas cercano a tu domicilio.",
      "en": "To request more information, you can contact us during our customer service hours. Check which is the nearest technical service to your address.",
      "pt": "Para mais informações, contacte-nos durante o horário de atendimento ao cliente.",
      "it": "Per richiedere maggiori informazioni, puoi contattarci durante l'orario di assistenza clienti."
    },
    "image": "https://beinsen.com/wp-content/uploads/2019/11/Diseño-sin-título-1.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Para solicitar más información puedes contactar con nosotros en el horario de atención al cliente",
        "Consulta cuál es el servicio técnico mas cercano a tu domicilio",
        "Ideal para personalización profesional de platos"
      ],
      "en": [
        "To request more information, you can contact us during our customer service hours",
        "Check which is the nearest technical service to your address",
        "Ideal for professional plate personalization"
      ]
    },
    "accessories": [],
    "category": { "es": "Especializadas", "en": "Specialized", "pt": "Especializadas", "it": "Specializzate" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Aplicación", "en": "Application" }, "value": "Platos / Plates" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V / 110V" },
      { "label": { "es": "Controlador", "en": "Controller" }, "value": "Digital" }
    ],
    "benefits": [
      {
        "title": { "es": "Precisión en Cerámica", "en": "Ceramic Precision" },
        "description": { "es": "Presión uniforme para evitar roturas en soportes rígidos.", "en": "Uniform pressure to avoid breakage on rigid supports." },
        "icon": "Zap"
      }
    ]
  },
  {
    "id": "plancha-termica-para-tazas-4-en-1-alina",
    "slug": "plancha-termica-para-tazas-4-en-1-alina",
    "name": {
      "es": "Alina prensa térmica para tazas 4 en 1",
      "en": "Alina 4-in-1 mug heat press",
      "pt": "Alina prensa térmica para canecas 4 em 1",
      "it": "Alina pressa termica per tazze 4 in 1"
    },
    "description": {
      "es": "Versatilidad en la palma de tu mano. Con la prensa Alina podrás personalizar tazas de diferentes tamaños gracias a sus resistencias intercambiables.",
      "en": "Versatility in the palm of your hand. With the Alina press you can customize mugs of different sizes thanks to its interchangeable elements.",
      "pt": "Versatilidade na palma da sua mão. Com a prensa Alina poderá personalizar canecas de diferentes tamanhos.",
      "it": "Versatilità nel palmo della tua mano. Con la pressa Alina potrai personalizzare tazze di diverse dimensioni."
    },
    "image": "https://beinsen.com/wp-content/uploads/2019/11/alina-beinsen.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Prensa térmica 4 en 1 para máxima versatilidad",
        "Ideal para tazas de diferentes diámetros y formas",
        "Controlador digital preciso para tiempo y temperatura"
      ],
      "en": [
        "4-in-1 heat press for maximum versatility",
        "Ideal for mugs of different diameters and shapes",
        "Precise digital controller for time and temperature"
      ]
    },
    "accessories": [],
    "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Versatilidad", "en": "Versatility" }, "value": "4 en 1 / 4-in-1" },
      { "label": { "es": "Resistencias", "en": "Elements" }, "value": "Intercambiables / Interchangeable" },
      { "label": { "es": "Controlador", "en": "Controller" }, "value": "Digital GY-04" }
    ],
    "benefits": [
      {
        "title": { "es": "Máxima Versatilidad", "en": "Maximum Versatility" },
        "description": { "es": "Personaliza desde tazas pequeñas hasta botellas con una sola máquina.", "en": "Personalize everything from small mugs to bottles with a single machine." },
        "icon": "Settings"
      }
    ]
  },
  {
    "id": "horno-para-sublimacion",
    "slug": "horno-para-sublimacion",
    "name": {
      "es": "Horno sublimación 3D",
      "en": "3D Sublimation Oven",
      "pt": "Forno de sublimação 3D",
      "it": "Forno per sublimazione 3D"
    },
    "description": {
      "es": "El Horno 3D es la solución perfecta para personalizar varios objetos pequeños a la vez. Es el compañero perfecto para iniciarse en el arte de la personalización.",
      "en": "The 3D Oven is the perfect solution for customizing several small objects at once. It is the perfect companion to start in the art of personalization.",
      "pt": "O Forno 3D é a solução perfeita para personalizar vários objetos pequenos ao mesmo tempo.",
      "it": "Il Forno 3D è la soluzione perfetta per personalizzare diversi piccoli oggetti contemporaneamente."
    },
    "image": "https://beinsen.com/wp-content/uploads/2019/11/horn3d.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "El Horno 3D es la solución perfecta para personalizar varios objetos pequeños a la vez",
        "Es el compañero perfecto para iniciarse en el arte de la personalización",
        "Puedes utilizarla para sublimar pequeños objetos como llaveros, placas, colgantes, cristal etc"
      ],
      "en": [
        "The 3D Oven is the perfect solution for customizing several small objects at once",
        "It is the perfect companion to start in the art of personalization",
        "You can use it to sublimate small objects like keychains, plates, pendants, glass etc"
      ]
    },
    "accessories": [],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" }
  },
  {
    "id": "plancha-para-tazas",
    "slug": "plancha-para-tazas",
    "name": {
      "es": "Andra prensa automática para tazas",
      "en": "Andra automatic mug press",
      "pt": "Andra prensa automática para canecas",
      "it": "Andra pressa automatica per tazze"
    },
    "description": {
      "es": "Personalizar tazas nunca resultó tan sencillo como con la prensa automática Beinsen Andra. El sistema de envoltura automática hara que plasmar tus diseños sea un auténtico juego de niños.",
      "en": "Personalizing mugs has never been so easy as with the Beinsen Andra automatic press. The automatic wrapping system makes printing your designs child's play.",
      "pt": "Personalizar canecas nunca foi tão simples como com a prensa automática Beinsen Andra.",
      "it": "Personalizzare le tazze non è mai stato così simple come con la pressa automatica Beinsen Andra."
    },
    "image": "https://beinsen.com/wp-content/uploads/2022/04/28.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Personalizar tazas nunca resultó tan sencillo como con la prensa automática Beinsen Andra",
        "El sistema de envoltura automática y el preciso controlador digital hará que plasmar tus diseños sea un auténtico juego de niños",
        "Puedes cambiar facilmente la presión para personalizar tazas tanto de 11 como de 15 onzas"
      ],
      "en": [
        "Personalizing mugs has never been so easy as with the Beinsen Andra automatic press",
        "The automatic wrapping system and precise digital controller make printing your designs child's play",
        "You can easily change the pressure to customize both 11 and 15 oz mugs"
      ]
    },
    "accessories": [],
    "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Operación", "en": "Operation" }, "value": "Automática / Automatic" },
      { "label": { "es": "Sistema", "en": "System" }, "value": "Auto-wrapping / Envoltura automática" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" }
    ],
    "benefits": [
      {
        "title": { "es": "Producción sin Esfuerzo", "en": "Effortless Production" },
        "description": { "es": "El sistema automático garantiza una presión perfecta sin intervención manual.", "en": "The automatic system ensures perfect pressure without manual intervention." },
        "icon": "Zap"
      }
    ]
  },
  {
    "id": "plancha-neumatica-doble-estacion-caen",
    "slug": "plancha-neumatica-doble-estacion-caen",
    "name": {
      "es": "Caen estación de trabajo doble neumática",
      "en": "Caen double station pneumatic heat press",
      "pt": "Caen estação de trabalho dupla pneumática",
      "it": "Caen stazione di lavoro doppia pneumatica"
    },
    "description": {
      "es": "¡Descubre la nueva era de la transferencia de calor y sublimación con Caén! La plancha térmica de doble estación neumática que revolucionará tu experiencia de impresión.",
      "en": "Discover the new era of heat transfer and sublimation with Caén! The double station pneumatic heat press that will revolutionize your printing experience.",
      "pt": "Descubra a nova era da transferência de calor e sublimação com Caén!",
      "it": "Scopri la nuova era del trasferimento di calore e della sublimazione con Caén!"
    },
    "image": "https://beinsen.com/wp-content/uploads/2023/09/2.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Funcionamiento neumático para presión uniforme",
        "Doble estación para duplicar la producción",
        "Dispositivo de posicionamiento por infrarrojos incluido",
        "Control digital de precisión para tiempo y temperatura"
      ],
      "en": [
        "Pneumatic operation for uniform pressure",
        "Double station to double production",
        "Infrared positioning device included",
        "Precision digital control for time and temperature"
      ]
    },
    "accessories": [],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Neumática", "en": "Pneumatic", "pt": "Pneumática", "it": "Pneumatica" },
    "technicalSpecs": [
      { "label": { "es": "Estaciones", "en": "Stations" }, "value": "Doble Estación / Double Station" },
      { "label": { "es": "Posicionamiento", "en": "Positioning" }, "value": "Láser Cruz / Cross Laser" },
      { "label": { "es": "Cierre", "en": "Closure" }, "value": "Neumático / Pneumatic" }
    ],
    "benefits": [
      {
        "title": { "es": "Productividad Duplicada", "en": "Double Productivity" },
        "description": { "es": "Prepara una prenda mientras la otra se plancha para un flujo de trabajo continuo.", "en": "Prepare one garment while the other is pressing for a continuous workflow." },
        "icon": "Zap"
      }
    ]
  },
  {
    "id": "obrei-plancha-gorras-apertura-automatica",
    "slug": "obrei-plancha-gorras-apertura-automatica",
    "name": {
      "es": "Obrei plancha para gorras con apertura automática",
      "en": "Obrei cap press with automatic opening",
      "pt": "Obrei prensa para bonés com abertura automática",
      "it": "Obrei pressa per cappelli con apertura automatica"
    },
    "description": {
      "es": "La precisión y comodidad se unen en la Beinsen Obrei. Diseñada específicamente para gorras, su apertura automática te permite trabajar con total libertad.",
      "en": "Precision and comfort meet in the Beinsen Obrei. Designed specifically for caps, its automatic opening allows you to work with total freedom.",
      "pt": "Precisão e conforto unem-se na Beinsen Obrei. Concebida especificamente para bonés.",
      "it": "Precisione e comfort si incontrano nella Beinsen Obrei. Progettata specificamente per i cappelli."
    },
    "image": "https://beinsen.com/wp-content/uploads/2019/11/obrei-gorras.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Apertura automática para mayor comodidad",
        "Diseño específico para el curvado de gorras",
        "Control digital de tiempo y temperatura",
        "Plato intercambiable para diferentes tamaños de gorras"
      ],
      "en": [
        "Automatic opening for greater comfort",
        "Specific design for cap curvature",
        "Digital time and temperature control",
        "Interchangeable plate for different cap sizes"
      ]
    },
    "accessories": [],
    "category": { "es": "Gorras", "en": "Caps", "pt": "Bonés", "it": "Cappelli" },
    "openingType": { "es": "Automática", "en": "Automatic", "pt": "Automática", "it": "Automatica" },
    "technicalSpecs": [
      { "label": { "es": "Cierre", "en": "Closure" }, "value": "Automático / Automatic" },
      { "label": { "es": "Aplicación", "en": "Application" }, "value": "Gorras / Caps" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" }
    ],
    "benefits": [
      {
        "title": { "es": "Apertura Inteligente", "en": "Smart Opening" },
        "description": { "es": "Ahorra tiempo y evita sobrecalentamientos con la apertura automática al finalizar el ciclo.", "en": "Save time and avoid overheating with the automatic opening at the end of the cycle." },
        "icon": "Zap"
      }
    ]
  },
  {
    "id": "planchas-transfer-con-apertura-neumatica",
    "slug": "planchas-transfer-con-apertura-neumatica",
    "name": {
      "es": "Planchas transfer con apertura neumática",
      "en": "Pneumatic opening heat presses",
      "pt": "Prensas térmicas de abertura pneumática",
      "it": "Presse termiche ad apertura pneumatica"
    },
    "description": {
      "es": "Máquinas industriales de sublimación con cierre y apertura neumática para alta producción.",
      "en": "Industrial sublimation machines with pneumatic closure and opening for high production.",
      "pt": "Máquinas industriais pneumáticas de alta produção.",
      "it": "Macchine industriali pneumatiche ad alta produzione."
    },
    "image": "https://beinsen.com/wp-content/uploads/2023/11/Doha-Sin-Fondo-1.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Sistema neumático de alto rendimiento",
        "Control preciso de presión y temperatura",
        "Ideal para entornos de producción industrial"
      ],
      "en": [
        "High-performance pneumatic system",
        "Precise pressure and temperature control",
        "Ideal for industrial production environments"
      ]
    },
    "accessories": [],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Neumática", "en": "Pneumatic", "pt": "Pneumática", "it": "Pneumatica" },
    "technicalSpecs": [
      { "label": { "es": "Sistema", "en": "System" }, "value": "Neumático / Pneumatic" },
      { "label": { "es": "Aplicación", "en": "Application" }, "value": "Producción Industrial / Industrial Production" },
      { "label": { "es": "Cierre", "en": "Closure" }, "value": "Automático" }
    ],
    "benefits": [
      {
        "title": { "es": "Poder Neumático", "en": "Pneumatic Power" },
        "description": { "es": "Presión constante y uniforme para los trabajos más exigentes de sublimación.", "en": "Constant and uniform pressure for the most demanding sublimation jobs." },
        "icon": "Wind"
      }
    ]
  },
  {
    "id": "planchas-termica-para-gorras",
    "slug": "planchas-termica-para-gorras",
    "name": {
      "es": "Planchas transfer para gorras",
      "en": "Cap heat presses",
      "pt": "Prensas térmicas para bonés",
      "it": "Presse termiche per cappelli"
    },
    "description": {
      "es": "Herramientas esenciales para personalizar tus gorras con diseños únicos. Modelos diseñados para adaptarse a la curvatura de la gorra.",
      "en": "Essential tools for personalizing your caps with unique designs. Models designed to fit the cap's curvature.",
      "pt": "Ferramentas essenciais para personalizar os seus bonés.",
      "it": "Strumenti essenziali per personalizzare i tuoi cappelli."
    },
    "image": "https://beinsen.com/wp-content/uploads/2023/02/screenshotAtUploadCC_1574853026382-removebg-preview.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Planchas diseñadas específicamente para gorras",
        "Diseño ergonómico para facilitar la colocación",
        "Resultados profesionales y duraderos"
      ],
      "en": [
        "Presses specifically designed for caps",
        "Ergonomic design for easy placement",
        "Professional and durable results"
      ]
    },
    "accessories": [],
    "category": { "es": "Gorras", "en": "Caps", "pt": "Bonés", "it": "Cappelli" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" }
  },
  {
    "id": "planchas-transfer-multifuncion-para-sublimacion",
    "slug": "planchas-transfer-multifuncion-para-sublimacion",
    "name": {
      "es": "Planchas transfer multifunción",
      "en": "Multi-function heat presses",
      "pt": "Prensas térmicas multifunções",
      "it": "Presse termiche multifunzione"
    },
    "description": {
      "es": "La solución versátil para tu taller. Personaliza tazas, gorras, platos y textiles con una sola máquina.",
      "en": "The versatile solution for your workshop. Personalize mugs, caps, plates, and textiles with a single machine.",
      "pt": "A solução versátil para a sua oficina.",
      "it": "La soluzione versatile per il tuo laboratorio."
    },
    "image": "https://beinsen.com/wp-content/uploads/2019/11/grecia6.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Múltiples platos intercambiables",
        "Ideal para emprendedores y talleres con poco espacio",
        "Fácil configuración y uso"
      ],
      "en": [
        "Multiple interchangeable plates",
        "Ideal for entrepreneurs and small workshops",
        "Easy configuration and use"
      ]
    },
    "accessories": [],
    "category": { "es": "Multifunción", "en": "Multi-function", "pt": "Multifunções", "it": "Multifunzione" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" }
  },
  {
    "id": "esparta-prensa-termica-neumatica",
    "slug": "esparta-prensa-termica-neumatica",
    "name": {
      "es": "Esparta prensa térmica neumática",
      "en": "Esparta pneumatic heat press",
      "pt": "Esparta prensa térmica pneumática",
      "it": "Esparta pressa termica pneumatica"
    },
    "description": {
      "es": "Nuevo nivel de confort sin perder eficiencia. Control táctil avanzado y memoria para tus mejores ajustes.",
      "en": "New level of comfort without losing efficiency. Advanced touch control and memory for your best settings.",
      "pt": "Novo nível de conforto sem perder eficiência.",
      "it": "Nuovo livello di comfort senza perdere efficienza."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/02/esparta-002-1.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Controlador táctil intuitivo",
        "Memoria para 3 perfiles de configuración",
        "Funcionamiento neumático suave",
        "Diseño optimizado para colocación de prendas"
      ],
      "en": [
        "Intuitive touch controller",
        "Memory for 3 configuration profiles",
        "Smooth pneumatic operation",
        "Optimized design for garment placement"
      ]
    },
    "accessories": [],
    "consumables": [
      { "id": "teflon-40x50" },
      { "id": "neopreno-base" }
    ],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Neumática", "en": "Pneumatic", "pt": "Pneumática", "it": "Pneumatica" },
    "gallery": [
      "https://beinsen.com/wp-content/uploads/2025/02/esparta-002-1.jpg"
    ],
    "technicalSpecs": [
      { "label": { "es": "Tamaño Placa", "en": "Plate Size" }, "value": "40 x 50 cm" },
      { "label": { "es": "Sistema", "en": "System" }, "value": "Pneumatic / Neumático" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "2.5 KW" },
      { "label": { "es": "Controlador", "en": "Controller" }, "value": "Tactile / Táctil" },
      { "label": { "es": "Presión Máx.", "en": "Max Pressure" }, "value": "6 bar" }
    ],
    "benefits": [
      {
        "title": { "es": "Confort Neumático", "en": "Pneumatic Comfort" },
        "description": { "es": "Olvídate del esfuerzo físico. El sistema neumático garantiza presión constante sin fatiga.", "en": "Forget physical effort. The pneumatic system ensures constant pressure without fatigue." },
        "icon": "Wind"
      },
      {
        "title": { "es": "Interfaz Táctil", "en": "Touch Interface" },
        "description": { "es": "Control total con un toque. Configura tiempos y temperaturas con precisión milimétrica.", "en": "Total control with a touch. Configure times and temperatures with millimeter precision." },
        "icon": "MousePointer2"
      },
      {
        "title": { "es": "Productividad Ágil", "en": "Agile Productivity" },
        "description": { "es": "Ideal para producciones medias-altas donde la repetibilidad es clave.", "en": "Ideal for mid-high productions where repeatability is key." },
        "icon": "Zap"
      }
    ],
    "hotspots": [
      { "x": 45, "y": 20, "title": { "es": "Pantalla Táctil", "en": "Touch Screen" }, "description": { "es": "Visualización clara de parámetros y contador de ciclos.", "en": "Clear visualization of parameters and cycle counter." } },
      { "x": 70, "y": 60, "title": { "es": "Cilindro Neumático", "en": "Pneumatic Cylinder" }, "description": { "es": "Mecánica robusta para una presión uniforme de larga duración.", "en": "Robust mechanics for long-lasting uniform pressure." } }
    ],
    "downloads": [
      { "label": { "es": "Manual Esparta", "en": "Esparta Manual" }, "url": "/downloads/esparta-manual.pdf" }
    ],
    "maintenanceTips": {
      "es": [
        "Lubricar el cilindro neumático trimestralmente",
        "Drenar el filtro del compresor semanalmente",
        "Limpiar la pantalla táctil solo con paño seco"
      ],
      "en": [
        "Lubricate the pneumatic cylinder quarterly",
        "Drain the compressor filter weekly",
        "Clean the touch screen only with a dry cloth"
      ]
    }
  },
  {
    "id": "planchas-transfer-para-tazas-y-platos-descatalogadas",
    "slug": "planchas-transfer-para-tazas-y-platos-descatalogadas",
    "name": {
      "es": "Planchas descatalogadas para tazas y platos",
      "en": "Discontinued mug and plate presses",
      "pt": "Prensas descontinuadas para canecas e pratos",
      "it": "Presse fuori produzione per tazze e piatti"
    },
    "description": {
      "es": "Consulta nuestros modelos anteriores de prensas para tazas y platos.",
      "en": "Check our previous mug and plate press models.",
      "pt": "Consulte os nossos modelos anteriores.",
      "it": "Consulta i nostri modelli precedenti."
    },
    "image": "https://beinsen.com/wp-content/uploads/2022/04/28.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Modelos históricos de alta durabilidad",
        "Información técnica de referencia",
        "Guías de personalización clásicas"
      ],
      "en": [
        "Historic high-durability models",
        "Technical reference information",
        "Classic personalization guides"
      ]
    },
    "accessories": [],
    "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" }
  },
  {
    "id": "planchas-transfer-sandwich-descatalogadas",
    "slug": "planchas-transfer-sandwich-descatalogadas",
    "name": {
      "es": "Planchas descatalogadas tipo sandwich",
      "en": "Discontinued sandwich presses",
      "pt": "Prensas descontinuadas tipo sanduíche",
      "it": "Presse fuori produzione tipo sandwich"
    },
    "description": {
      "es": "Modelos anteriores con cierre tipo sandwich para una presión uniforme.",
      "en": "Previous models with sandwich closure for uniform pressure.",
      "pt": "Modelos anteriores com fecho tipo sanduíche.",
      "it": "Modelli precedenti con chiusura a sandwich."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/02/barbadiss-1.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Cierre tipo sandwich clásico",
        "Dos placas de calor para mayor estabilidad",
        "Regulación manual de presión y temperatura"
      ],
      "en": [
        "Classic sandwich closure",
        "Two heat plates for greater stability",
        "Manual pressure and temperature regulation"
      ]
    },
    "accessories": [],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" }
  },
  {
    "id": "planchas-transfer-neumaticas-descatalogadas",
    "slug": "planchas-transfer-neumaticas-descatalogadas",
    "name": {
      "es": "Planchas neumáticas descatalogadas",
      "en": "Discontinued pneumatic presses",
      "pt": "Prensas pneumáticas descontinuadas",
      "it": "Presse pneumatiche fuori produzione"
    },
    "description": {
      "es": "Máquinas industriales de sublimación con apertura neumática de catálogos anteriores.",
      "en": "Industrial sublimation machines with pneumatic opening from previous catalogs.",
      "pt": "Máquinas industriais pneumáticas descontinuadas.",
      "it": "Macchine industriali pneumatiche fuori produzione."
    },
    "image": "https://beinsen.com/wp-content/uploads/2023/11/Luanda-Sin-Fondo-5.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Sistema neumático de alto rendimiento",
        "Alta precisión en la transferencia",
        "Eficiencia de producción industrial"
      ],
      "en": [
        "High-performance pneumatic system",
        "High transfer precision",
        "Industrial production efficiency"
      ]
    },
    "accessories": [],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Neumática", "en": "Pneumatic", "pt": "Pneumática", "it": "Pneumatica" }
  },
  {
    "id": "planchas-transfer-de-pequeno-formato",
    "slug": "planchas-transfer-de-pequeno-formato",
    "name": {
      "es": "Planchas de pequeño formato",
      "en": "Small format presses",
      "pt": "Prensas de pequeno formato",
      "it": "Presse di piccolo formato"
    },
    "description": {
      "es": "Precisión y versatilidad en tamaño reducido. Ideales para etiquetas, parches y prendas infantiles.",
      "en": "Precision and versatility in reduced size. Ideal for labels, patches, and children's clothing.",
      "pt": "Precisão e versatilidade em tamanho reduzido.",
      "it": "Precisione e versatilità in dimensioni ridotte."
    },
    "image": "https://beinsen.com/wp-content/uploads/2023/11/Belice-Sin-Fondo-5.png",
    "price": "Consultar PVP",
    "size": { "es": "Pequeño", "en": "Small", "pt": "Pequeno", "it": "Piccolo" },
    "features": {
      "es": [
        "Tamaño compacto menos de 38x38 cm",
        "Menor consumo energético",
        "Excelente portabilidad"
      ],
      "en": [
        "Compact size under 38x38 cm",
        "Lower energy consumption",
        "Excellent portability"
      ]
    },
    "accessories": [],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" }
  },
  {
    "id": "pocola-plancha-transfer-manual-pequena",
    "slug": "pocola-plancha-transfer-manual-pequena",
    "name": {
      "es": "Pocola plancha transfer manual pequeña",
      "en": "Pocola small manual heat press",
      "pt": "Pocola prensa manual pequena",
      "it": "Pocola pressa manuale piccola"
    },
    "description": {
      "es": "Sencilla, compacta y económica. Plato de 15 x 20 cm ideal para llaveros y fundas.",
      "en": "Simple, compact, and economical. 15 x 20 cm plate ideal for keychains and cases.",
      "pt": "Simples, compacta e económica.",
      "it": "Semplice, compatta ed economica."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/03/Diseno-sin-titulo-13.png",
    "price": "Consultar PVP",
    "size": { "es": "Pequeño", "en": "Small", "pt": "Pequeno", "it": "Piccolo" },
    "features": {
      "es": [
        "Estructura compacta de grandes resultados",
        "Mando regulador de presión mejorado",
        "Resorte de gas para apertura elegante"
      ],
      "en": [
        "Compact structure with great results",
        "Improved pressure regulating knob",
        "Gas spring for elegant opening"
      ]
    },
    "accessories": [],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" }
  },
  {
    "id": "gante-plancha-manual-gorras",
    "slug": "gante-plancha-manual-gorras",
    "name": {
      "es": "Gante plancha manual para gorras",
      "en": "Gante manual cap press",
      "pt": "Gante prensa manual para bonés",
      "it": "Gante pressa manuale per cappelli"
    },
    "description": {
      "es": "La herramienta perfecta para iniciarte en la personalización de gorras. Incluye soporte para sujeción.",
      "en": "The perfect tool to get started in cap personalization. Includes attachment support.",
      "pt": "A ferramenta perfeita para começar a personalizar bonés.",
      "it": "Lo strumento perfetto per iniziare la personalizzazione dei cappelli."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/03/Diseno-sin-titulo-13.png",
    "price": "Consultar PVP",
    "size": { "es": "Pequeño", "en": "Small", "pt": "Pequeno", "it": "Piccolo" },
    "features": {
      "es": [
        "Plato especial para gorras incluido",
        "Fácil control de tiempo y temperatura",
        "Sistema de apertura asistida"
      ],
      "en": [
        "Special cap plate included",
        "Easy time and temperature control",
        "Assisted opening system"
      ]
    },
    "accessories": [],
    "category": { "es": "Gorras", "en": "Caps", "pt": "Bonés", "it": "Cappelli" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Aplicación", "en": "Application" }, "value": "Gorras y Sombreros / Caps & Hats" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Operación", "en": "Operation" }, "value": "Manual" }
    ],
    "benefits": [
      {
        "title": { "es": "Ideal para Iniciarse", "en": "Ideal for Beginners" },
        "description": { "es": "Sencilla, robusta y con resultados profesionales desde el primer día.", "en": "Simple, robust, and with professional results from day one." },
        "icon": "Zap"
      }
    ]
  },
  {
    "id": "mesa-universal-con-ruedas-para-plancha-transfer",
    "slug": "mesa-universal-con-ruedas-para-plancha-transfer",
    "name": {
      "es": "Mesa universal con ruedas",
      "en": "Universal table with wheels",
      "pt": "Mesa universal com rodas",
      "it": "Tavolo universale con ruote"
    },
    "description": {
      "es": "Base resistente y funcional para tu prensa térmica. Estabilidad y comodidad para tu taller.",
      "en": "Stable and functional base for your heat press. Stability and comfort for your workshop.",
      "pt": "Base resistente e funcional para a sua prensa.",
      "it": "Base resistente e funzionale per la tua pressa."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/04/mesa_universal_para_planchas_tra.jpg",
    "price": "Consultar PVP",
    "size": { "es": "98x88 cm", "en": "98x88 cm", "pt": "98x88 cm", "it": "98x88 cm" },
    "features": {
      "es": [
        "Estructura robusta de alta calidad",
        "Soporta prensas de doble plato",
        "Ruedas con freno para movilidad segura"
      ],
      "en": [
        "High-quality robust structure",
        "Supports double plate presses",
        "Wheels with brakes for safe mobility"
      ]
    },
    "accessories": [],
    "category": { "es": "Especializadas", "en": "Specialized", "pt": "Especializadas", "it": "Specializzate" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Aplicación", "en": "Application" }, "value": "Espinilleras / Shin Guards" },
      { "label": { "es": "Platos", "en": "Plates" }, "value": "3 Intercambiables / 3 Interchangeable" },
      { "label": { "es": "Operación", "en": "Operation" }, "value": "Manual" }
    ],
    "benefits": [
      {
        "title": { "es": "Especialista Deportiva", "en": "Sports Specialist" },
        "description": { "es": "La única prensa diseñada específicamente para la anatomía de las espinilleras.", "en": "The only press specifically designed for the anatomy of shin guards." },
        "icon": "Settings"
      }
    ]
  },
  {
    "id": "trinidad-prensa-termica-automatica",
    "slug": "trinidad-prensa-termica-automatica",
    "name": {
      "es": "Trinidad prensa térmica automática",
      "en": "Trinidad automatic heat press",
      "pt": "Trinidad prensa térmica automática",
      "it": "Trinidad pressa termica automatica"
    },
    "description": {
      "es": "Eleva tus proyectos a nuevos niveles de eficiencia con esta prensa de doble plato automática.",
      "en": "Elevate your projects to new levels of efficiency with this automatic double-plate press.",
      "pt": "Eleve os seus projetos com esta prensa automática de prato duplo.",
      "it": "Eleva i tuoi progetti con questa pressa automatica a doppio piatto."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/07/Sin-titulo-1000-x-1000-px-1.png",
    "price": 5490,
    "size": { "es": "Industrial", "en": "Industrial", "pt": "Industrial", "it": "Industriale" },
    "features": {
      "es": [
        "Aumenta la producción con su sistema automático de doble plato",
        "Láseres integrados para un posicionamiento perfecto",
        "Modo manual disponible para diseños complejos"
      ],
      "en": [
        "Increase production with its automatic double-plate system",
        "Integrated lasers for perfect positioning",
        "Manual mode available for complex designs"
      ]
    },
    "accessories": [
      { "id": "mesa-trinidad" },
      { "id": "laser-posicionamiento" }
    ],
    "consumables": [
      { "id": "teflon-40x50" },
      { "id": "neopreno-base" },
      { "id": "limpiador-plato" }
    ],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Automática", "en": "Automatic", "pt": "Automática", "it": "Automatica" },
    "gallery": [
      "https://beinsen.com/wp-content/uploads/2025/07/Sin-titulo-1000-x-1000-px-1.png",
      "https://beinsen.com/wp-content/uploads/2023/09/2.jpg"
    ],
    "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "benefits": [
      {
        "title": { "es": "Automatización Industrial", "en": "Industrial Automation" },
        "description": { "es": "Sistema de desplazamiento eléctrico de doble plato que elimina la fatiga del operario y dobla la capacidad de producción.", "en": "Electric double-plate displacement system that eliminates operator fatigue and doubles production capacity." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Precisión Láser Ultra", "en": "Ultra Laser Precision" },
        "description": { "es": "Doble proyector láser en cruz ajustable para un posicionamiento milimétrico de logos y diseños en cada prenda.", "en": "Adjustable cross-laser dual projectors for millimeter-perfect positioning of logos and designs on every garment." },
        "icon": "Target"
      },
      {
        "title": { "es": "Control Inteligente PLC", "en": "Intelligent PLC Control" },
        "description": { "es": "Cerebro electrónico avanzado que gestiona presión, tiempo y temperatura con una estabilidad inigualable.", "en": "Advanced electronic brain that manages pressure, time, and temperature with unmatched stability." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Seguridad de Vanguardia", "en": "Cutting-edge Safety" },
        "description": { "es": "Sensores de proximidad y botones de emergencia duales para garantizar la protección total del operario.", "en": "Proximity sensors and dual emergency buttons to ensure total operator protection." },
        "icon": "ShieldCheck"
      }
    ],
    "hotspots": [
      { "x": 38, "y": 12, "title": { "es": "Panel Táctil PLC", "en": "PLC Touch Panel" }, "description": { "es": "Interfaz intuitiva para controlar cada parámetro de producción y memorizar perfiles.", "en": "Intuitive interface to control every production parameter and store profiles." } },
      { "x": 55, "y": 45, "title": { "es": "Doble Plato 40x50", "en": "Double 40x50 Plate" }, "description": { "es": "Platos rectificados para una distribución de calor perfecta. Permite preparar una prenda mientras la otra se plancha.", "en": "Ground plates for perfect heat distribution. Allows preparing one garment while the other is being pressed." } },
      { "x": 15, "y": 30, "title": { "es": "Láseres de Cruz", "en": "Cross Lasers" }, "description": { "es": "Guías visuales de alta visibilidad para un registro exacto.", "en": "High-visibility visual guides for exact registration." } },
      { "x": 80, "y": 60, "title": { "es": "Motorización Silenciosa", "en": "Silent Motorization" }, "description": { "es": "Sistema electromecánico que evita el ruido y mantenimiento de los compresores de aire.", "en": "Electromechanical system that avoids the noise and maintenance of air compressors." } }
    ],
    "technicalSpecs": [
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V - 240V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "3.5 KW" },
      { "label": { "es": "Temperatura Máxima", "en": "Max Temperature" }, "value": "225 ºC / 437 ºF" },
      { "label": { "es": "Tamaño Placa", "en": "Plate Size" }, "value": "40 x 50 cm" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "1100 x 850 x 800 mm" },
      { "label": { "es": "Peso Neto", "en": "Net Weight" }, "value": "145 Kg" },
      { "label": { "es": "Presión Máxima", "en": "Max Pressure" }, "value": "800 Kg / cm²" }
    ],
    "downloads": [
      { "label": { "es": "Manual de Usuario", "en": "User Manual" }, "url": "/downloads/trinidad-manual.pdf" },
      { "label": { "es": "Ficha Técnica", "en": "Technical Sheet" }, "url": "/downloads/trinidad-ficha-tecnica.pdf" }
    ],
    "storySegments": [
      {
        "title": { "es": "Doble productividad", "en": "Double Productivity" },
        "description": { "es": "El sistema de doble plato permite una carga continua. Mientras uno se plancha, preparas el siguiente sin pausas.", "en": "The double-plate system allows continuous loading. While one is pressing, you prepare the next without pauses." },
        "image": "https://beinsen.com/wp-content/uploads/2023/09/2.jpg"
      },
      {
        "title": { "es": "Precisión Milimétrica", "en": "Millimeter Precision" },
        "description": { "es": "Nuestros proyectores láser aseguran que cada logotipo esté exactamente donde debe estar, eliminando errores de producción.", "en": "Our laser projectors ensure every logo is exactly where it should be, eliminating production errors." },
        "image": "https://beinsen.com/wp-content/uploads/2025/07/Sin-titulo-1000-x-1000-px-1.png"
      },
      {
        "title": { "es": "Fuerza Industrial", "en": "Industrial Strength" },
        "description": { "es": "Construida para durar. Su estructura de acero reforzado y motorización eléctrica garantizan décadas de servicio sin problemas.", "en": "Built to last. Its reinforced steel structure and electric motorization guarantee decades of trouble-free service." },
        "image": "https://beinsen.com/wp-content/uploads/2025/07/Sin-titulo-1000-x-1000-px-1.png"
      }
    ],
    "maintenanceTips": {
      "es": [
        "Limpiar el plato de calor semanalmente para evitar acumulación de residuos.",
        "Lubricar los ejes de desplazamiento cada 6 meses con grasa de silicona.",
        "Verificar la alineación de los láseres trimestralmente.",
        "Mantener el panel táctil alejado de la humedad directa."
      ],
      "en": [
        "Clean the heat plate weekly to avoid residue buildup.",
        "Lubricate displacement axes every 6 months with silicone grease.",
        "Check laser alignment quarterly.",
        "Keep the touch panel away from direct moisture."
      ]
    },
    "distributors": [
        { "name": "Beinsen Direct", "url": "https://beinsen.com", "logo": "https://beinsen.com/wp-content/uploads/2023/02/logo-beinsen-1.png" },
        { "name": "Amazon Business", "url": "https://amazon.es", "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" }
    ]
  },
  {
    "id": "miranda-prensa-termica-automatica-electrica",
    "slug": "miranda-prensa-termica-automatica-electrica",
    "name": {
      "es": "Miranda prensa térmica automática eléctrica",
      "en": "Miranda electric automatic heat press",
      "pt": "Miranda prensa elétrica automática",
      "it": "Miranda pressa automatica elettrica"
    },
    "description": {
      "es": "Dile adiós a los compresores con esta prensa 100% eléctrica y silenciosa.",
      "en": "Say goodbye to compressors with this 100% electric and silent press.",
      "pt": "Diga adeus aos compressores com esta prensa 100% elétrica.",
      "it": "Dì addio ai compressori con questa pressa 100% elettrica."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/07/miranda-principal.png",
    "price": "Consultar PVP",
    "size": { "es": "Industrial", "en": "Industrial", "pt": "Industrial", "it": "Industriale" },
    "features": {
      "es": [
        "Funcionamiento sin compresor de aire",
        "Ajuste de presión inteligente",
        "Alta eficiencia energética"
      ],
      "en": [
        "Compressor-free operation",
        "Intelligent pressure adjustment",
        "High energy efficiency"
      ]
    },
    "accessories": [],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Automática", "en": "Automatic", "pt": "Automática", "it": "Automatica" },
    "technicalSpecs": [
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "3.2 KW" },
      { "label": { "es": "Peso Neto", "en": "Net Weight" }, "value": "95 Kg" }
    ],
    "benefits": [
      {
        "title": { "es": "100% Eléctrica", "en": "100% Electric" },
        "description": { "es": "Sin ruidos de compresores.", "en": "No compressor noise." },
        "icon": "Zap"
      }
    ]
  },
  {
    "id": "estambul-prensa-termica-para-espinilleras",
    "slug": "estambul-prensa-termica-para-espinilleras",
    "name": {
      "es": "Estambul prensa térmica para espinilleras",
      "en": "Estambul shin guard heat press",
      "pt": "Estambul prensa para caneleiras",
      "it": "Estambul pressa per parastinchi"
    },
    "description": {
      "es": "Especializada en espinilleras, incluye 3 platos intercambiables.",
      "en": "Specialized in shin guards, includes 3 interchangeable plates.",
      "pt": "Especializada para caneleiras com 3 pratos.",
      "it": "Specializzata in parastinchi con 3 piatti."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/07/Diseno-sin-titulo.webp",
    "price": "Consultar PVP",
    "size": { "es": "Pequeño", "en": "Small", "pt": "Pequeno", "it": "Piccolo" },
    "features": {
      "es": [
        "Incluye 3 platos de diferentes tamaños",
        "Diseño robusto y duradero",
        "Fácil sistema de intercambio rápido"
      ],
      "en": [
        "Includes 3 plates of different sizes",
        "Robust and durable design",
        "Easy quick-change system"
      ]
    },
    "accessories": [],
    "category": { "es": "Especializadas", "en": "Specialized", "pt": "Especializadas", "it": "Specializzate" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" }
  }
];
export const allAccessoriesData: Accessory[] = [
  {
    id: "mesa-trinidad",
    name: { es: "Mesa Industrial Pro", en: "Pro Industrial Table" },
    price: 450,
    image: "https://beinsen.com/wp-content/uploads/2025/04/mesa_universal_para_planchas_tra.jpg",
    description: { es: "Soporte reforzado con ruedas de alta carga.", en: "Reinforced support with heavy-duty wheels." }
  },
  {
    id: "laser-posicionamiento",
    name: { es: "Láser de Posicionamiento Extra", en: "Extra Positioning Laser" },
    price: 120,
    image: "https://beinsen.com/wp-content/uploads/2025/07/Sin-titulo-1000-x-1000-px-1.png",
    description: { es: "Diodo láser de alta visibilidad para repuesto.", en: "High-visibility laser diode for replacement." }
  }
];

export const allConsumablesData: Consumable[] = [
  {
    id: "teflon-40x50",
    name: { es: "Lámina de Teflón 40x50", en: "Teflon Sheet 40x50" },
    price: 15,
    image: "https://beinsen.com/wp-content/uploads/2019/11/grecia6.jpg",
    description: { es: "Protege tus prendas y el plato de calor.", en: "Protects your garments and the heat plate." }
  },
  {
    id: "neopreno-base",
    name: { es: "Goma de Neopreno Base", en: "Neoprene Base Rubber" },
    price: 45,
    image: "https://beinsen.com/wp-content/uploads/2019/11/zapas.jpg",
    description: { es: "Amortiguación perfecta para una presión uniforme.", en: "Perfect cushioning for uniform pressure." }
  },
  {
    id: "limpiador-plato",
    name: { es: "Limpiador de Platos EZ-OFF", en: "EZ-OFF Plate Cleaner" },
    price: 12,
    image: "https://beinsen.com/wp-content/uploads/2023/11/Belice-Sin-Fondo-5.png",
    description: { es: "Elimina residuos de tinta y pegamento fácilmente.", en: "Easily removes ink and glue residue." }
  }
];
