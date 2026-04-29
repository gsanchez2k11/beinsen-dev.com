export type Locale = 'es' | 'en' | 'pt' | 'it';
export type Localized<T> = { [key in Locale]?: T };

export interface CompatibleItem {
  id: string;
  name: Localized<string> | string;
  price: number | string;
  pvp?: number | string;
  image?: string;
  description?: Localized<string> | string;
  reference?: string;
  tiendaSublimacionUrl?: string;
}

export interface Accessory extends CompatibleItem {
  slug?: string;
  technicalSpecs?: TechnicalSpec[];
  gallery?: string[];
}
export interface Consumable extends CompatibleItem {
  slug?: string;
  technicalSpecs?: TechnicalSpec[];
  gallery?: string[];
}

export interface TechnicalSpec {
  label: Localized<string> | string;
  value: Localized<string> | string;
}

export interface Benefit {
  title: Localized<string> | string;
  description: Localized<string> | string;
  icon: string;
  image?: string;
  objectFit?: "cover" | "contain" | "cover-zoom";
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
  heroVideo?: string;
  size: Localized<string> | string;
  price: number | string;
  pvp?: number | string;
  reference?: string;
  tiendaSublimacionUrl?: string;
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
  hotspotImage?: string;
  downloads?: { label: Localized<string> | string; url: string }[];
  storySegments?: { title: Localized<string> | string; description: Localized<string> | string; image: string }[];
  maintenanceTips?: Localized<string[]>;
  distributors?: { name: string; url: string; logo?: string }[];
  hidden?: boolean;
}
const rawPlanchasData: Plancha[] = [
  {
    "id": "chinela-plancha-transfer-zapatillas",
    "name": {
      "es": "Chinela Plancha Térmica Para Zapatillas",
      "en": "Chinela Heat Press For Sneakers",
      "pt": "Chinela Prensa Térmica Para Sapatilhas",
      "it": "Chinela Pressa Termica Per Scarpe"
    },
    "description": {
      "es": "La plancha transfer para zapatillas Beinsen Chinela es la especialización llevada al mundo de la sublimación. Podrás personalizar comodamente hasta 2 pares de zapatillas en cada planchado , y gracias al sistema giratorio pasar rapidamente al siguiente planchado.",
      "en": "The Beinsen Chinela heat press for sneakers is specialization brought to the world of sublimation. You can comfortably customize up to 2 pairs of sneakers in each press, and thanks to the rotating system, quickly move to the next press.",
      "pt": "A prensa térmica para sapatilhas Beinsen Chinela é a especialização levada ao mundo da sublimação. Poderá personalizar confortavelmente até 2 pares de sapatilhas em cada prensagem.",
      "it": "La pressa termica per scarpe da ginnastica Beinsen Chinela è la specializzazione portata nel mondo della sublimazione. Potrai personalizzare comodamente fino a 2 paia di scarpe."
    },
    "image": "https://beinsen.com/wp-content/uploads/2019/11/zapas.jpg",
    "price": "Consultar PVP",
    "slug": "chinela-plancha-transfer-zapatillas",
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
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "almohadilla-silicona-38x38" },
      { "id": "mesa-universal-grande" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Manual-Chinela", "en": "User Manual - Manual-Chinela" }, "url": "/downloads/chinela-plancha-transfer-zapatillas/Manual-Chinela.pdf" }
    ],
        "category": { "es": "Especializadas", "en": "Specialized", "pt": "Especializadas", "it": "Specializzate" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Giratoria" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Automático y manual" },
      { "label": { "es": "Grosor máximo del personalizable", "en": "Max Customizable Thickness" }, "value": "40 mm" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-04" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "38 x 38 cm" },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✗" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800 W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225 ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "43 kg" },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "69 x 53 x 55 cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "✗" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "✗" }
    ],
    "hotspots": [
      { "x": 56.1, "y": 4.2, "title": { "es": "Asa ergonómica", "en": "Ergonomic handle" }, "description": { "es": "Diseñada para aplicar la presión de forma cómoda y controlada en cada ciclo de transfer.", "en": "Designed for comfortable and controlled pressure application in every transfer cycle." } },
      { "x": 89.4, "y": 34.4, "title": { "es": "Botón de encendido", "en": "Power button" }, "description": { "es": "Enciende y apaga el equipo de forma rápida y segura.", "en": "Turns the machine on and off quickly and safely." } },
      { "x": 77.6, "y": 35.0, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "Programa la temperatura y el tiempo con precisión para conseguir transfers perfectos en zapatillas y chinelas.", "en": "Set temperature and time precisely for perfect transfers on shoes and flip-flops." } },
      { "x": 28.5, "y": 57.6, "title": { "es": "Placa de transfer para zapatillas", "en": "Shoe transfer plate" }, "description": { "es": "Superficie de trabajo específica para sublimar zapatillas, chinelas y artículos de calzado de distintos tamaños.", "en": "Work surface specifically designed for sublimating sneakers, flip-flops, and footwear of various sizes." } },
      { "x": 26.5, "y": 71.9, "title": { "es": "Base estabilizadora", "en": "Stabilizing base" }, "description": { "es": "Estructura robusta que mantiene la máquina firme y nivelada durante el proceso de prensado.", "en": "Robust structure that keeps the machine stable and level throughout the pressing process." } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después para dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately; the heating plate is still too hot.",
        "If you turn off the compressor, the hot plate may close and press against the lower plate, which could burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    },
    "benefits": [
      {
        "title": { "es": "Alta Especialización", "en": "High Specialization" },
        "description": { "es": "Platos diseñados específicamente para la ergonomía del calzado.", "en": "Plates designed specifically for footwear ergonomics." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Simple pero Efectiva", "en": "Simple but Effective" },
        "description": { "es": "En la plancha transfer Beinsen Chinela todo está pensado con el mismo fin: zapatillas. Un plato especial con diseño ergonómico en una plancha giratoria para que tengas todo el espacio necesario para trabajar.", "en": "Everything in the Beinsen Chinela transfer press is designed with one goal: sneakers. A special ergonomic plate on a rotating press gives you all the workspace you need." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Flujo de Trabajo Más Ágil", "en": "Faster Workflow" },
        "description": { "es": "El sistema giratorio permite pasar rápidamente al siguiente planchado, mejorando tiempos de producción sin perder control.", "en": "The rotating system lets you move quickly to the next press, improving production times without losing control." },
        "icon": "Clock"
      },
      {
        "title": { "es": "Espacio Óptimo de Trabajo", "en": "Optimized Workspace" },
        "description": { "es": "Diseñada para trabajar con comodidad y precisión en calzado, incluso en tiradas continuas.", "en": "Designed to work comfortably and precisely on footwear, even during continuous runs." },
        "icon": "Ruler"
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
    "accessories": [
      { "id": "mesa-universal-grande" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "resistencia-tazas-6-10oz" },
      { "id": "resistencia-tazas-11oz-b" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" },
      { "id": "resistencia-cilindrica-tazas-11oz-tipo-a" }
    ],
    "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "gallery": [
      "https://beinsen.com/wp-content/uploads/2025/03/beinsen-sore.jpg"
    ],
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Para Tazas" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-06" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-480 seg." },
      { "label": { "es": "Número de resistencias", "en": "Number of Heating Elements" }, "value": "5" },
      { "label": { "es": "Tazas admitidas", "en": "Supported Mug Sizes" }, "value": "entre 11 y 15oz." },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "5 x 300 W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225 ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "47 kg" },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "93 x 49 x 39 cm" }
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
        "icon": "Settings",
        "image": "/products/maquinas/sore-plancha-profesional-tazas/06.JPG"
      },
      {
        "title": { "es": "Diseño Ergonómico", "en": "Ergonomic Design" },
        "description": { "es": "Estructura optimizada para un cambio rápido de resistencias y fácil colocación.", "en": "Optimized structure for quick element change and easy placement." },
        "icon": "MousePointer2",
        "image": "/products/maquinas/sore-plancha-profesional-tazas/05.JPG"
      }
    ],
    "hotspots": [
      { "x": 81.1, "y": 22.7, "title": { "es": "Resistencia de alta calidad para tazas entre 11 y 15oz", "en": "High-quality heating element for 11–15oz mugs" }, "description": { "es": "", "en": "" } },
      { "x": 12.6, "y": 43.3, "title": { "es": "Botones de encendido independientes", "en": "Independent power buttons" }, "description": { "es": "", "en": "" } },
      { "x": 58.0, "y": 67.6, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 8.9,  "y": 71.9, "title": { "es": "Estructura robusta y duradera", "en": "Robust and durable structure" }, "description": { "es": "", "en": "" } }
    ],
    "downloads": [
      { "label": { "es": "Manual de Usuario", "en": "User Manual" }, "url": "/downloads/sore-manual.pdf" },
      { "label": { "es": "Guía de Sublimación", "en": "Sublimation Guide" }, "url": "/downloads/guia-tazas.pdf" }
    ],
    "maintenanceTips": {
      "es": [
        "Limpiar las resistencias después de cada jornada",
        "Revisar el estado de los cables térmicos mensualmente",
        "Evitar el contacto directo de las placas sin taza",
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después para dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Clean elements after each working day",
        "Check thermal cable status monthly",
        "Avoid direct contact of plates without a mug"
      ]
    }
  },
  {
    "id": "dorian-plancha-termica-platos",
    "slug": "dorian-plancha-termica-platos",
    "name": {
      "es": "Dorian prensa térmica para platos",
      "en": "Dorian heat press for plates",
      "pt": "Dorian prensa térmica para pratos",
      "it": "Dorian pressa termica per piatti"
    },
    "description": {
      "es": "Con la plancha para platos se pueden realizar todos los métodos comunes de transferencia en caliente (flock, flex, sublimación, etc.). Funciona con una resistencia de 155 mm intercambiable, de acero sólido resistente a los arañazos, con temperatura, tiempo ajustable y alarma.",
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
    "accessories": [
      { "id": "resistencia-platos-6-1-gen" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "resistencia-platos-5-dorian" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

    "category": { "es": "Especializadas", "en": "Specialized", "pt": "Especializadas", "it": "Specializzate" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-04" },
      { "label": { "es": "Precisión del controlador", "en": "Controller Precision" }, "value": "±0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0º-225º" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "15 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "55 x 46 x 26 cm" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "300 W" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Fija" },
      { "label": { "es": "Tamaño de resistencia", "en": "Heating Element Size" }, "value": "Ø155 mm" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Manual" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Automático" },
      { "label": { "es": "Modelo", "en": "Model" }, "value": "Dorian" }
    ],
    "hotspots": [
      { "x": 34.7, "y": 12.3, "title": { "es": "Asa ergonómica", "en": "Ergonomic handle" }, "description": { "es": "Mango antideslizante que permite bajar y subir el plato superior con precisión y comodidad en cada ciclo.", "en": "Non-slip handle for precise and comfortable upper plate movement in every cycle." } },
      { "x": 39.2, "y": 58.5, "title": { "es": "Resistencia circular", "en": "Circular heating element" }, "description": { "es": "Resistencia de forma circular diseñada para distribuir el calor de manera uniforme sobre toda la superficie del plato cerámico.", "en": "Circular heating element designed to distribute heat evenly across the entire ceramic plate surface." } },
      { "x": 42.2, "y": 75.8, "title": { "es": "Placa de trabajo", "en": "Work plate" }, "description": { "es": "Superficie inferior donde se coloca el plato cerámico. Compatible con platos de hasta 15,2 cm de diámetro.", "en": "Lower surface where the ceramic plate is placed. Compatible with plates up to 15.2 cm in diameter." } },
      { "x": 32.2, "y": 85.7, "title": { "es": "Controlador digital GY-04", "en": "GY-04 digital controller" }, "description": { "es": "Permite programar con precisión la temperatura y el tiempo de cada sublimación para obtener resultados profesionales y consistentes.", "en": "Precisely programs temperature and time for each sublimation to achieve professional and consistent results." } }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    },
    "benefits": [
      {
        "title": { "es": "Precisión en Cerámica", "en": "Ceramic Precision" },
        "description": { "es": "Presión uniforme para evitar roturas en soportes rígidos.", "en": "Uniform pressure to avoid breakage on rigid supports." },
        "icon": "Zap",
        "image": "/products/maquinas/dorian-plancha-termica-platos/02.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Versátil y Robusta", "en": "Versatile and Robust" },
        "description": { "es": "Fácil de montar y desmontar, con controlador digital GY-04 para ajustar tiempo y temperatura con precisión. Su estructura de acero sólido y acabado naranja Beinsen aportan durabilidad y estilo.", "en": "Easy to assemble and disassemble, with GY-04 digital controller for precise time and temperature settings. Solid steel structure and Beinsen orange finish provide durability and style." },
        "icon": "Settings",
        "image": "/products/maquinas/dorian-plancha-termica-platos/04.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Personalización Integral de Platos", "en": "Full Plate Customization" },
        "description": { "es": "Permite personalizar tanto el fondo como los bordes de platos cerámicos, ideal para frases, imágenes y diseños creativos en vajilla.", "en": "Lets you personalize both the center and edges of ceramic plates, ideal for phrases, images, and creative tableware designs." },
        "icon": "Layers",
        "image": "/products/maquinas/dorian-plancha-termica-platos/01.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Sublimación Hasta 15,2 cm", "en": "Sublimation Up to 15.2 cm" },
        "description": { "es": "Perfecta para sublimar platos de hasta 15,2 cm, logrando acabados profesionales con resultados consistentes.", "en": "Perfect for sublimating plates up to 15.2 cm, delivering professional and consistent results." },
        "icon": "Target",
        "image": "/products/maquinas/dorian-plancha-termica-platos/03.png",
        "objectFit": "contain"
      }
    ]
  },
  {
    "id": "barahona-plancha-para-tazas-6-en-1",
    "slug": "barahona-plancha-para-tazas-6-en-1",
    "name": {
      "es": "Barahona Plancha Térmica Para Tazas 6 en 1",
      "en": "Barahona Mug Heat Press 6-in-1",
      "pt": "Barahona Prensa Térmica Para Canecas 6 em 1",
      "it": "Barahona Pressa Termica Per Tazze 6 in 1"
    },
    "description": {
      "es": "Imagina poder crear tus propias tazas personalizadas con resultados profesionales, ¿no sería genial? Con la plancha térmica Barahona, eso es posible. Esta plancha es perfecta para aquellos que buscan una solución eficiente y práctica para personalizar tazas.",
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
    "accessories": [
      { "id": "mesa-universal-grande" },
      { "id": "laser-posicionamiento" }
    ],
    "consumables": [
      { "id": "teflon-40x50" },
      { "id": "neopreno-base" },
      { "id": "limpiador-plato" }
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Manual-Barahona", "en": "User Manual - Manual-Barahona" }, "url": "/downloads/barahona-plancha-para-tazas-6-en-1/Manual-Barahona.pdf" }
    ],
        "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Modelo", "en": "Model" }, "value": "Barahona" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Para tazas" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Manual" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Cambiable" },
      { "label": { "es": "Tamaño de resistencia", "en": "Heating Element Size" }, "value": "1.5oz / 2.5oz / 6oz-10oz / 12oz / 17oz / 11oz-15oz" },
      { "label": { "es": "Máximo volumen imprimible", "en": "Maximum Printable Volume" }, "value": "1.5oz / 2.5oz / 6oz-10oz / 12oz / 17oz / 11oz-15oz" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "130 W / 260 W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "13 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "60 x 42 x 30 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-04" },
      { "label": { "es": "Precisión del controlador", "en": "Controller Precision" }, "value": "±0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0º-225º" }
    ],
    "benefits": [
      {
        "title": { "es": "No habrá taza, termo o botella que se te resista", "en": "No mug, tumbler, or bottle can resist it" },
        "description": { "es": "Con sus 6 resistencias intercambiables, podrás personalizar cualquier tipo de taza con facilidad. Ya no tendrás que preocuparte por tamaños diferentes al estándar.", "en": "With 6 interchangeable heating elements, you can customize almost any mug format with ease, including non-standard sizes." },
        "icon": "Layers",
        "image": "/products/maquinas/barahona-plancha-para-tazas-6-en-1/02.png"
      },
      {
        "title": { "es": "Sencilla pero eficaz", "en": "Simple but effective" },
        "description": { "es": "Su diseño ergonómico y fácil de usar te permitirá cambiar las resistencias a mano fácilmente, sin necesidad de herramientas adicionales.", "en": "Its ergonomic, user-friendly design lets you change elements by hand without extra tools." },
        "icon": "Settings",
        "image": "/products/maquinas/barahona-plancha-para-tazas-6-en-1/03.png"
      },
      {
        "title": { "es": "Barahona será tu amiga fiel a la hora de sublimar", "en": "Barahona is your trusted sublimation ally" },
        "description": { "es": "Es la solución perfecta para los amantes de la personalización de tazas. No pierdas más tiempo con soluciones obsoletas y descubre todo lo que esta herramienta puede ofrecerte.", "en": "It is the perfect solution for mug customization lovers. Stop wasting time with outdated solutions and unlock everything this tool can offer." },
        "icon": "ShieldCheck",
        "image": "/products/maquinas/barahona-plancha-para-tazas-6-en-1/04.png"
      },
      {
        "title": { "es": "Versatilidad total", "en": "Total versatility" },
        "description": { "es": "El diseño de la plancha facilita sublimar tazas, botellas y termos de distintos tamaños: 1.5oz, 2.5oz, 6oz-10oz, 12oz, 17oz y 11oz-15oz.", "en": "Designed to sublimate mugs, bottles, and tumblers in multiple sizes: 1.5oz, 2.5oz, 6oz-10oz, 12oz, 17oz, and 11oz-15oz." },
        "icon": "Ruler",
        "image": "/products/maquinas/barahona-plancha-para-tazas-6-en-1/01.png"
      },
      {
        "title": { "es": "Presión perfecta", "en": "Perfect pressure" },
        "description": { "es": "Gracias a sus 4 perillas de ajuste de presión podrás regular la presión en cada momento para lograr impresiones de alta calidad.", "en": "Its 4 pressure adjustment knobs help you fine-tune pressure at any moment for high-quality prints." },
        "icon": "Target"
      },
      {
        "title": { "es": "Controlador digital de alta calidad", "en": "High-quality digital controller" },
        "description": { "es": "Gracias al mango de soporte, podrás presionar fácilmente hacia abajo la máquina de prensado en caliente para tazas y mantener una buena presión de contacto.", "en": "The support handle makes it easy to press down the mug heat press while maintaining strong contact pressure." },
        "icon": "Cpu"
      }
    ],
    "hotspots": [
      { "x": 51.8, "y": 22.1, "title": { "es": "Asa", "en": "Handle" }, "description": { "es": "Permite abrir y cerrar la prensa con comodidad y control en cada ciclo.", "en": "Allows opening and closing the press comfortably and with control in every cycle." } },
      { "x": 56.1, "y": 50.8, "title": { "es": "Resistencia cilíndrica", "en": "Cylindrical heating element" }, "description": { "es": "Envuelve la taza para distribuir el calor de forma uniforme en toda la superficie.", "en": "Wraps the mug to distribute heat evenly across the entire surface." } },
      { "x": 97.0, "y": 51.5, "title": { "es": "Botón de encendido", "en": "Power button" }, "description": { "es": "Enciende y apaga el equipo de forma rápida y segura.", "en": "Turns the machine on and off quickly and safely." } },
      { "x": 81.8, "y": 52.5, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "Programa la temperatura y el tiempo con precisión para cada trabajo.", "en": "Program temperature and time precisely for each job." } },
      { "x": 33.0, "y": 75.7, "title": { "es": "Perilla de ajuste", "en": "Adjustment knob" }, "description": { "es": "Regula la presión de prensado para adaptarse a distintos grosores de taza.", "en": "Adjusts pressing pressure to accommodate different mug thicknesses." } }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
  },
  {
    "id": "alina-plancha-para-tazas",
    "slug": "alina-plancha-para-tazas",
    "name": {
      "es": "Alina Plancha Para Tazas 4 en 1",
      "en": "Alina Mug Heat Press 4-in-1",
      "pt": "Alina Prensa Para Canecas 4 em 1",
      "it": "Alina Pressa Per Tazze 4 in 1"
    },
    "description": {
      "es": "Alina es la compañera ideal para personalizar tazas. Con ella podrás personalizar tazas de diferentes formas y capacidades gracias a sus 4 resistencias intercambiables para tazas cilíndricas de 6-10oz y 11-15oz, y cónicas de 12oz y 17oz.",
      "en": "Alina is the perfect companion for mug customization. With 4 interchangeable heating elements for cylindrical mugs (6-10oz, 11-15oz) and conical (12oz, 17oz), it adapts to any format.",
      "pt": "Alina é a companheira ideal para personalizar canecas. Com 4 resistências intercambiáveis para canecas cilíndricas de 6-10oz e 11-15oz, e cónicas de 12oz e 17oz.",
      "it": "Alina è la compagna ideale per personalizzare tazze. Con 4 elementi riscaldanti intercambiabili per tazze cilindriche 6-10oz e 11-15oz, e coniche 12oz e 17oz."
    },
    "image": "https://beinsen.com/wp-content/uploads/2019/11/alina-beinsen.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "4 resistencias intercambiables (6-10oz, 11-15oz, 12oz cónica, 17oz cónica)",
        "Estructura soldada de acero sólido con acabado naranja Beinsen",
        "Controlador digital GY-04 con ajuste de tiempo y temperatura"
      ],
      "en": [
        "4 interchangeable elements (6-10oz, 11-15oz, 12oz conical, 17oz conical)",
        "Welded solid steel structure with Beinsen orange finish",
        "GY-04 digital controller with time and temperature adjustment"
      ],
      "pt": [
        "4 resistências intercambiáveis (6-10oz, 11-15oz, 12oz cónica, 17oz cónica)",
        "Estrutura soldada de aço sólido com acabamento laranja Beinsen",
        "Controlador digital GY-04 com ajuste de tempo e temperatura"
      ],
      "it": [
        "4 elementi intercambiabili (6-10oz, 11-15oz, 12oz conico, 17oz conico)",
        "Struttura in acciaio saldato con finitura arancione Beinsen",
        "Controller digitale GY-04 con regolazione di tempo e temperatura"
      ]
    },
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "resistencia-tazas-6-10oz" },
      { "id": "resistencia-doble-taza-11-15oz" },
      { "id": "resistencia-conica-tazas-12oz" },
      { "id": "resistencia-para-tazas-conicas-17oz" },
      { "id": "almohadilla-silicona-40x50" },
      { "id": "mesa-universal-grande" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],
"downloads": [
      { "label": { "es": "Manual de Usuario - Manual-Alina-4en1 (1)", "en": "User Manual - Manual-Alina-4en1 (1)" }, "url": "/downloads/alina-plancha-para-tazas/Manual-Alina-4en1-(1).pdf" }
    ],
        "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Modelo", "en": "Model" }, "value": "Alina" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Para tazas" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Manual" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-04" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Resistencias incluidas", "en": "Included Elements" }, "value": "4 (6-10oz, 11-15oz, 12oz cónica, 17oz cónica)" },
      { "label": { "es": "Resistencias intercambiables", "en": "Interchangeable Elements" }, "value": "✓" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225 ℃" },
      { "label": { "es": "Precisión de temperatura", "en": "Temperature Precision" }, "value": "±0.5%" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V / 110V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "130W / 260W" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "12,75 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "60,4 x 42,6 x 29,7 cm" }
    ],
    "benefits": [
      {
        "title": { "es": "La compañera ideal para personalizar tazas", "en": "The ideal companion for mug customization" },
        "description": { "es": "Alina está diseñada desde cero para la personalización de tazas. Con ella podrás abordar pedidos de cualquier formato sin necesidad de cambiar de máquina.", "en": "Alina is purpose-built for mug customization. Take on orders of any format without switching machines." },
        "icon": "CupSoda",
        "image": "/products/maquinas/alina-plancha-para-tazas/02.png"
      },
      {
        "title": { "es": "4 resistencias para cubrir todos los formatos", "en": "4 elements to cover all formats" },
        "description": { "es": "Incluye resistencias para tazas cilíndricas de 6 a 10oz y de 11 a 15oz, más cónicas de 12oz y 17oz. Podrás personalizar prácticamente cualquier taza del mercado.", "en": "Includes elements for cylindrical mugs 6-10oz and 11-15oz, plus conical 12oz and 17oz. Covers virtually any mug on the market." },
        "icon": "Layers",
        "image": "/products/maquinas/alina-plancha-para-tazas/03.png"
      },
      {
        "title": { "es": "Compatible con todos los métodos de transferencia", "en": "Compatible with all transfer methods" },
        "description": { "es": "Con la Alina podrás realizar flock, flex, sublimación y cualquier otro método común de transferencia en caliente sobre tazas.", "en": "With Alina you can perform flock, flex, sublimation and any other common heat transfer method on mugs." },
        "icon": "Zap",
        "image": "/products/maquinas/alina-plancha-para-tazas/04.png"
      },
      {
        "title": { "es": "Fácil montaje y desmontaje", "en": "Easy assembly and disassembly" },
        "description": { "es": "Las resistencias se cambian a mano sin herramientas adicionales, reduciendo el tiempo entre pedidos de diferentes tamaños.", "en": "Elements swap by hand without extra tools, reducing turnaround time between orders of different sizes." },
        "icon": "Wrench",
        "image": "/products/maquinas/alina-plancha-para-tazas/05.png"
      },
      {
        "title": { "es": "Control digital preciso", "en": "Precise digital control" },
        "description": { "es": "El controlador GY-04 permite programar tiempo y temperatura con precisión, garantizando resultados homogéneos en cada ciclo.", "en": "The GY-04 controller lets you program time and temperature precisely, ensuring consistent results every cycle." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Alarma automática al finalizar", "en": "Automatic end-cycle alarm" },
        "description": { "es": "La alarma sonora avisa al terminar cada ciclo para que nunca sobreprenses un trabajo.", "en": "The sound alarm signals the end of each cycle so you never over-press a job." },
        "icon": "Bell"
      },
      {
        "title": { "es": "Bajo consumo de energía", "en": "Low energy consumption" },
        "description": { "es": "Con 130W-260W según la resistencia activa, Alina es eficiente energéticamente sin sacrificar temperatura ni velocidad de calentamiento.", "en": "At 130W-260W depending on the active element, Alina is energy-efficient without sacrificing temperature or warm-up speed." },
        "icon": "BatteryCharging"
      },
      {
        "title": { "es": "Estructura robusta y duradera", "en": "Robust and durable structure" },
        "description": { "es": "Su estructura soldada de acero sólido y acabado naranja Beinsen garantizan resistencia a largas jornadas de producción continuada.", "en": "Its welded solid steel frame with Beinsen orange finish withstands long continuous production sessions." },
        "icon": "ShieldCheck"
      }
    ],
    "hotspots": [
      { "x": 37.7, "y": 15.6, "title": { "es": "Asa", "en": "Handle" }, "description": { "es": "Permite abrir y cerrar la prensa con comodidad y control en cada ciclo.", "en": "Allows opening and closing the press comfortably and with control in every cycle." } },
      { "x": 49.6, "y": 53.9, "title": { "es": "Resistencia cilíndrica", "en": "Cylindrical heating element" }, "description": { "es": "Envuelve la taza para distribuir el calor de forma uniforme en toda la superficie.", "en": "Wraps the mug to distribute heat evenly across the entire surface." } },
      { "x": 89.4, "y": 55.1, "title": { "es": "Botón de encendido", "en": "Power button" }, "description": { "es": "Enciende y apaga el equipo de forma rápida y segura.", "en": "Turns the machine on and off quickly and safely." } },
      { "x": 73.1, "y": 55.3, "title": { "es": "Controlador digital GY-04", "en": "GY-04 digital controller" }, "description": { "es": "Programa la temperatura y el tiempo con precisión para cada trabajo.", "en": "Program temperature and time precisely for each job." } },
      { "x": 18.8, "y": 63.3, "title": { "es": "Perilla de ajuste", "en": "Adjustment knob" }, "description": { "es": "Regula la presión de prensado para adaptarse a distintos grosores de taza.", "en": "Adjusts pressing pressure to accommodate different mug thicknesses." } }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las resistencias y superficie de contacto.",
        "Reemplazo de láminas de teflón protectoras cuando se deterioren.",
        "Inspección periódica del cable de alimentación y conexiones.",
        "Verificación y calibración de la temperatura con termómetro.",
        "Guardar en lugar seco y libre de polvo cuando no esté en uso."
      ],
      "en": [
        "Regular cleaning of elements and contact surfaces.",
        "Replacement of protective teflon sheets when worn.",
        "Periodic inspection of power cable and connections.",
        "Temperature verification and calibration with thermometer.",
        "Store in a dry, dust-free place when not in use."
      ]
    }
  },
  {
    "id": "horno-para-sublimacion",
    "slug": "horno-para-sublimacion",
    "hidden": true,
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
    "accessories": [
      { "id": "molde-3d-silicona-tazas-conicas-jarras" },
      { "id": "molde-3d-silicona-platos" }
    ],
    "consumables": [],

    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de apertura", "en": "Opening Type" }, "value": "Manual" },
      { "label": { "es": "Transferencia", "en": "Transfer" }, "value": "Presión de vacio" },
      { "label": { "es": "Filtro de aire", "en": "Air Filter" }, "value": "Sí" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "Sí" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Área de trabajo", "en": "Working Area" }, "value": "300 x 420 x 110 cm" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "280 ºC" },
      { "label": { "es": "Precisión de la temperatura", "en": "Temperature Precision" }, "value": "±0.5%" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "120 V / 220 V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "2800 W" },
      { "label": { "es": "Peso Bruto", "en": "Gross Weight" }, "value": "25 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "590 x 470 x 320 mm" }
    ],
    "benefits": [
      {
        "title": { "es": "Kit completo para empezar", "en": "Complete starter kit" },
        "description": { "es": "Incluye 2 abrazaderas de 11oz, 1 abrazadera de 15oz, 1 lámina de silicona para platos y guantes de algodón para trabajar con seguridad.", "en": "Includes 2 clamps for 11oz, 1 clamp for 15oz, 1 silicone sheet for plates, and cotton gloves for safer handling." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Impresión tridimensional", "en": "Three-dimensional printing" },
        "description": { "es": "Diseñado para sublimación 3D con resultados uniformes en piezas de distintas formas.", "en": "Built for 3D sublimation with uniform results across differently shaped items." },
        "icon": "Target"
      },
      {
        "title": { "es": "Control digital preciso", "en": "Precise digital control" },
        "description": { "es": "Controlador digital con ajuste de tiempo y temperatura, además de alarma automática para mayor control en cada ciclo.", "en": "Digital controller with time and temperature adjustment, plus automatic alarm for better cycle control." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Estructura sólida y eficiente", "en": "Solid and efficient structure" },
        "description": { "es": "Estructura robusta, filtro de aire y bajo consumo de energía para un uso más estable y eficiente.", "en": "Robust structure, air filter, and low energy consumption for more stable and efficient operation." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Diseño práctico y profesional", "en": "Practical professional design" },
        "description": { "es": "Acabado en color negro, fácil de montar y desmontar para adaptarse a tu ritmo de trabajo.", "en": "Black finish and easy assembly/disassembly to match your workflow." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Compatible con más moldes", "en": "Compatible with more molds" },
        "description": { "es": "Podrás adquirir diferentes moldes para tazas, jarras, platos y más aplicaciones de personalización.", "en": "You can add different molds for mugs, jugs, plates, and more personalization applications." },
        "icon": "Zap"
      }
    ]
  },
  {
    "id": "plancha-para-tazas",
    "slug": "andra-prensa-automatica-tazas",
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
    "heroVideo": "https://beinsen.com/wp-content/uploads/2025/04/andra.webm",
    "hotspotImage": "https://beinsen.com/wp-content/uploads/2024/01/description_barein.png",
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
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [
      { "id": "resistencia-cilindrica-tazas-11oz-tipo-a" },
      { "id": "cinta-termica-10mm" }
    ],
    "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Eléctrica", "en": "Electric", "pt": "Elétrica", "it": "Elettrica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tazas" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Automático" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-05N" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de\nresistencias", "en": "Number of Heating Elements" }, "value": "1" },
      { "label": { "es": "Tazas compatibles", "en": "Compatible Mug Sizes" }, "value": "11 oz y 15 oz" },
      { "label": { "es": "Resistencias intercambiables", "en": "Interchangeable Elements" }, "value": "✓" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "260 W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "230 ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "5 kg" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "6.5 kg" },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "38 x 27 x 25 cm" }
    ],
    "benefits": [
      {
        "title": { "es": "Producción sin Esfuerzo", "en": "Effortless Production" },
        "description": { "es": "El sistema automático garantiza una presión perfecta sin intervención manual.", "en": "The automatic system ensures perfect pressure without manual intervention." },
        "icon": "Zap",
        "image": "/products/maquinas/andra-prensa-automatica-tazas/04.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Despreocúpate", "en": "Worry-free personalization" },
        "description": { "es": "Tú, que conoces mejor que nadie la presión del día a día, mereces que personalizar tus tazas sea algo divertido. Tú sólo pon el tiempo y la temperatura y despreocúpate durante unos segundos aunque sea.", "en": "Set the time and temperature, then let the press handle the cycle so mug personalization feels easier and more enjoyable." },
        "icon": "Clock",
        "image": "/products/maquinas/andra-prensa-automatica-tazas/05.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Más fuerte que nunca", "en": "Stronger than ever" },
        "description": { "es": "Esta nueva generación de Beinsen Andra incorpora mejoras en componentes clave como el motor, la resistencia y el botón de reset para ofrecer mayor fiabilidad.", "en": "This new Beinsen Andra generation improves key components such as the motor, heating element, and reset button for greater reliability." },
        "icon": "ShieldCheck",
        "image": "/products/maquinas/andra-prensa-automatica-tazas/012.JPG"
      }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately; the heating plate is too hot.",
        "If you turn off the compressor, the hot plate may close and press down onto the lower plate, which could burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    },
    "hotspots": [
      { "x": 68,   "y": 20,   "title": { "es": "Nuevo botón de reset elegante",          "en": "New elegant reset button" },            "description": { "es": "", "en": "" } },
      { "x": 27,   "y": 35.9, "title": { "es": "Nueva resistencia más eficaz y duradera", "en": "New more efficient and durable element" }, "description": { "es": "", "en": "" } },
      { "x": 49.5, "y": 37.4, "title": { "es": "Controlador digital GY05N",               "en": "GY05N digital controller" },             "description": { "es": "", "en": "" } },
      { "x": 48.6, "y": 52.1, "title": { "es": "Adaptador para tazas de 11 o 15oz",       "en": "Adapter for 11 or 15oz mugs" },           "description": { "es": "", "en": "" } }
    ]
  },
  {
    "id": "caen-plancha-neumatica-doble-estacion",
    "slug": "caen-plancha-neumatica-doble-estacion",
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
    "accessories": [
      { "id": "almohadilla-silicona-40x50" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "almohadilla-silicona-38x38" },
      { "id": "lamina-teflon-40x50" },
      { "id": "guantes-protectores-algodon" },
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Guia-de-Usuario-Caen", "en": "User Manual - Guia-de-Usuario-Caen" }, "url": "/downloads/caen-plancha-neumatica-doble-estacion/Guia-de-Usuario-Caen.pdf" }
    ],
        "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Neumática", "en": "Pneumatic", "pt": "Pneumática", "it": "Pneumatica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Neumática, estación de trabajo" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Automático" },
      { "label": { "es": "Grosor máximo del personalizable", "en": "Max Customizable Thickness" }, "value": "50mm." },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-06" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "2" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✗" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "295Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "395Kg." },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "115x112x160cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Mesa con 4 ruedas universales y altura ajustable a 3 niveles" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "2, en una estructura sobre la estación" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "Cubierta anti quemaduras" }
    ],
    "benefits": [
      {
        "title": { "es": "Más velocidad, más eficiencia", "en": "More speed, more efficiency" },
        "description": { "es": "Gracias a su doble estación y mecanismo de lanzadera, puedes trabajar en dos artículos al mismo tiempo, duplicando la producción. Su funcionamiento neumático distribuye la presión de manera uniforme y asegura resultados impecables en cada prensado.", "en": "Thanks to its double station and shuttle mechanism, you can work on two items at once, doubling output with uniform pneumatic pressure on every press." },
        "icon": "Zap",
        "image": "/products/maquinas/caen-plancha-neumatica-doble-estacion/07.png"
      },
      {
        "title": { "es": "Precisión digital y posicionamiento perfecto", "en": "Digital precision and perfect positioning" },
        "description": { "es": "Incorpora un dispositivo de posicionamiento por infrarrojos para alinear cada diseño al milímetro y un sistema digital para controlar tiempo y temperatura con total precisión.", "en": "Includes infrared positioning for millimeter-perfect alignment and a digital system to control time and temperature with high precision." },
        "icon": "Target"
      },
      {
        "title": { "es": "Detalles que marcan diferencias", "en": "Details that make the difference" },
        "description": { "es": "Cuenta con dos bandejas laterales para organizar mejor el flujo de trabajo y un display digital GY-06 fácil e intuitivo. Además, el control de presión neumática en el frontal te ayuda a trabajar sin distracciones.", "en": "It features two side trays for better workflow, an intuitive GY-06 digital display, and front pneumatic pressure control for distraction-free operation." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Construcción robusta", "en": "Robust construction" },
        "description": { "es": "La Beinsen Caén está construida con materiales de alta calidad para uso intensivo e incluye soporte con ruedas para una estación de trabajo estable y práctica.", "en": "Beinsen Caén is built with high-quality materials for intensive use and includes a wheeled stand for a stable, practical workstation." },
        "icon": "ShieldCheck",
        "image": "/products/maquinas/caen-plancha-neumatica-doble-estacion/05.png"
      },
      {
        "title": { "es": "Ajuste al milímetro", "en": "Millimeter adjustment" },
        "description": { "es": "Ajusta la cruz láser con máxima precisión y reduce errores de colocación para evitar impresiones fuera de lugar.", "en": "Fine-tune the cross laser with high precision and reduce placement errors to avoid off-position prints." },
        "icon": "Ruler"
      }
    ],
    "hotspots": [
      { "x": 48.2, "y": 35.8, "title": { "es": "Cabeza movible", "en": "Movable head" }, "description": { "es": "", "en": "" } },
      { "x": 54.5, "y": 40.3, "title": { "es": "Pantalla digital", "en": "Digital display" }, "description": { "es": "", "en": "" } },
      { "x": 68.4, "y": 42.9, "title": { "es": "Botón de activación", "en": "Activation button" }, "description": { "es": "", "en": "" } },
      { "x": 55.7, "y": 43.6, "title": { "es": "Regulador de presión", "en": "Pressure regulator" }, "description": { "es": "", "en": "" } },
      { "x": 45.2, "y": 48.5, "title": { "es": "Botón activación láser", "en": "Laser activation button" }, "description": { "es": "", "en": "" } },
      { "x": 52.7, "y": 51.1, "title": { "es": "Difusor de calor", "en": "Heat diffuser" }, "description": { "es": "", "en": "" } },
      { "x": 78.3, "y": 53.9, "title": { "es": "Doble plato de 40x50", "en": "Double 40x50 plate" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar que se enfríe.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately; the heating plate is still too hot.",
        "If you turn off the compressor, the hot plate may close and press against the lower plate, which could burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
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
    "accessories": [
      { "id": "resistencia-gorras-beinsen-obrei" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "plato-gorras-beinsen-obrei" },
      { "id": "resistencia-15x15-beinsen-obrei" },
      { "id": "plato-base-15x15-beinsen-obrei" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Guia-de-usuario-Obrei", "en": "User Manual - Guia-de-usuario-Obrei" }, "url": "/downloads/obrei-plancha-gorras-apertura-automatica/Guia-de-usuario-Obrei.pdf" },
      { "label": { "es": "Manual de Usuario - Plancha-Obrei", "en": "User Manual - Plancha-Obrei" }, "url": "/downloads/obrei-plancha-gorras-apertura-automatica/Plancha-Obrei.pdf" }
    ],
        "category": { "es": "Gorras", "en": "Caps", "pt": "Bonés", "it": "Cappelli" },
    "openingType": { "es": "Electromagnética", "en": "Electromagnetic", "pt": "Eletromagnética", "it": "Elettromagnetica" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Modelo Obrei" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Semiautomática" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Automático" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Cambiable" },
      { "label": { "es": "Tamaño de resistencia", "en": "Heating Element Size" }, "value": "15 x 15 cm y 10 x 20 cm (gorra)" },
      { "label": { "es": "Máximo grosor imprimible", "en": "Maximum Printable Thickness" }, "value": "20 mm" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "120 / 220 V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "500 W / 1000 W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "25 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "70 x 60 x 35 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-06" },
      { "label": { "es": "Precisión del controlador", "en": "Controller Precision" }, "value": "±0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0º-225º" }
    ],
    "benefits": [
      {
        "title": { "es": "Sublima gorras y artículos pequeños", "en": "Sublimate caps and small items" },
        "description": { "es": "Gracias a su formato 2 en 1 podrás intercambiar platos y trabajar tanto gorras como artículos pequeños con su plato plano de 15 x 15.", "en": "Its 2-in-1 format lets you swap plates to sublimate both caps and small items using the 15 x 15 flat plate." },
        "icon": "Zap",
        "image": "/products/maquinas/obrei-plancha-gorras-apertura-automatica/06.png"
      },
      {
        "title": { "es": "Preparada para todos", "en": "Ready for every workshop" },
        "description": { "es": "La termofijadora Obrei está pensada para talleres con poco espacio, permitiendo sublimar distintos productos sin sacrificar comodidad.", "en": "Obrei is designed for compact workshops, letting you sublimate multiple product types without sacrificing comfort." },
        "icon": "Layers",
        "image": "/products/maquinas/obrei-plancha-gorras-apertura-automatica/05.png"
      },
      {
        "title": { "es": "Versátil en múltiples técnicas", "en": "Versatile across transfer methods" },
        "description": { "es": "Nada se te va a resistir: permite realizar métodos comunes de transferencia en caliente (flock, flex, sublimación), además de apoyar trabajos de pedrería, vinilo y transfer.", "en": "Handle common heat transfer methods (flock, flex, sublimation) and support rhinestone, vinyl, and transfer applications." },
        "icon": "Settings",
        "image": "/products/maquinas/obrei-plancha-gorras-apertura-automatica/01.JPG"
      },
      {
        "title": { "es": "Control total con apertura automática", "en": "Total control with automatic opening" },
        "description": { "es": "Su apertura y cierre automático te permite trabajar en otro plato mientras se sublima una pieza. Incluye alarma al finalizar el prensado para mantener la cadena de producción sin pausas.", "en": "Automatic opening and closing lets you work on another plate while one item is pressing. An end-cycle alarm keeps production flowing without pauses." },
        "icon": "Clock"
      }
    ],
    "hotspots": [
      { "x": 50.2, "y": 10.6, "title": { "es": "Asa", "en": "Handle" }, "description": { "es": "", "en": "" } },
      { "x": 49.1, "y": 30.3, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 50.6, "y": 50.7, "title": { "es": "Electroimán", "en": "Electromagnet" }, "description": { "es": "", "en": "" } },
      { "x": 54.3, "y": 58.6, "title": { "es": "Plato para gorras", "en": "Cap plate" }, "description": { "es": "", "en": "" } },
      { "x": 50.0, "y": 79.6, "title": { "es": "Base de trabajo", "en": "Work base" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
  },
  {
    "id": "planchas-transfer-con-apertura-neumatica",
    "slug": "doha-plancha-transfer-gran-formato",
    "name": {
      "es": "Doha Plancha transfer de gran formato",
      "en": "Pneumatic opening heat presses",
      "pt": "Prensas térmicas de abertura pneumática",
      "it": "Presse termiche ad apertura pneumatica"
    },
    "description": {
      "es": "Personaliza a lo grande con la plancha transfer de gran formato Beinsen Doha. Gracias al plato de 80x50cm podrás llevar doónde no lo hace el resto y ofrecer a tus clientes personalizaciones más espectaculares, y sin renunciar a la precisión, comodidad y robustez de una plancha sandwich tradicional.",
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
    "accessories": [
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "mesa-universal-grande" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Neumática", "en": "Pneumatic", "pt": "Pneumática", "it": "Pneumatica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Cierre manual y apertura automática" },
      { "label": { "es": "Ángulo de apertura", "en": "Opening Angle" }, "value": "25 grados" },
      { "label": { "es": "Grosor máximo del personalizable", "en": "Max Customizable Thickness" }, "value": "8mm." },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "✓" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "80x50cm." },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "3.600W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "110Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "163Kg." },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "105x97x95cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "✗" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "✗" }
    ],
    "benefits": [
      {
        "title": { "es": "Electromagnética y preparada para producir", "en": "Electromagnetic and production-ready" },
        "description": { "es": "La Doha integra cierre electromagnético, controlador digital y bandeja extraíble para una operación fluida, precisa y cómoda en trabajos continuos.", "en": "Doha combines electromagnetic closure, digital control, and a pull-out tray for smooth, precise, and comfortable continuous production." },
        "icon": "Settings",
        "image": "/products/maquinas/doha-plancha-transfer-gran-formato/05.jpg"
      },
      {
        "title": { "es": "Plato de 80 x 50 cm", "en": "80 x 50 cm platen" },
        "description": { "es": "Su plato de 80 x 50 cm te permite trabajar piezas de mayor tamaño en una sola planchada con acabado profesional.", "en": "Its 80 x 50 cm platen lets you handle larger pieces in a single press with professional finish." },
        "icon": "Ruler",
        "image": "/products/maquinas/doha-plancha-transfer-gran-formato/01.jpg"
      },
      {
        "title": { "es": "Amplía tus límites", "en": "Expand your limits" },
        "description": { "es": "Incluye en tu catálogo camisetas XXL, sudaderas, bolsas, banderas o paneles textiles de una sola planchada, con resultados limpios y consistentes.", "en": "Add XXL shirts, hoodies, bags, flags, or textile panels to your catalog in one press with clean, consistent results." },
        "icon": "Layers",
        "image": "/products/maquinas/doha-plancha-transfer-gran-formato/02.jpg"
      },
      {
        "title": { "es": "Confort al máximo", "en": "Maximum comfort" },
        "description": { "es": "La bandeja extraíble, el cierre electromagnético y la empuñadura ergonómica están pensados para que planchar sea más cómodo durante toda la jornada.", "en": "The pull-out tray, electromagnetic closure, and ergonomic handle are designed to keep pressing comfortable throughout the day." },
        "icon": "Zap",
        "image": "/products/maquinas/doha-plancha-transfer-gran-formato/09.png"
      }
    ],
    "hotspots": [
      { "x": 58.1, "y": 29.4, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 35.2, "y": 31.7, "title": { "es": "Apertura automática con electroimán", "en": "Automatic opening with electromagnet" }, "description": { "es": "", "en": "" } },
      { "x": 14.6, "y": 55.4, "title": { "es": "Alfombrilla extra gruesa de algodón reciclado", "en": "Extra thick recycled cotton pad" }, "description": { "es": "", "en": "" } },
      { "x": 34.4, "y": 70.4, "title": { "es": "Bandeja inferior deslizable", "en": "Sliding lower tray" }, "description": { "es": "", "en": "" } },
      { "x": 61.9, "y": 74.9, "title": { "es": "Patas con protección de goma", "en": "Rubber-protected feet" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately; the heating plate is still too hot.",
        "If you turn off the compressor, the hot plate may close and press against the lower plate, which could burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
  },
  {
    "id": "jamaica-planchas-transfer-multifuncion-para-sublimacion",
    "slug": "jamaica-planchas-transfer-multifuncion-para-sublimacion",
    "name": {
      "es": "Jamaica Plancha Térmica",
      "en": "Jamaica Heat Press",
      "pt": "Jamaica Prensa Térmica",
      "it": "Jamaica Pressa Termica"
    },
    "description": {
      "es": "Descubre la plancha térmica Jamaica de Beinsen, una herramienta de personalización versátil y de alta calidad. Con sus accesorios intercambiables y su amplia superficie de trabajo, podrás sublimar una amplia gama de objetos y dar rienda suelta a tu creatividad.",
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
    "accessories": [
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "mesa-universal-grande" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "plato-resistencia-combo-38x38" },
      { "id": "resistencia-gorras-combo-beinsen" },
      { "id": "almohadilla-silicona-40x50" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Manual-Jamaica", "en": "User Manual - Manual-Jamaica" }, "url": "/downloads/jamaica-planchas-transfer-multifuncion-para-sublimacion/Manual-Jamaica.pdf" }
    ],
        "category": { "es": "Multifunción", "en": "Multi-function", "pt": "Multifunções", "it": "Multifunzione" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Modelo Jamaica" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tipo giratoria" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Manual" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Cambiable" },
      { "label": { "es": "Tamaño de resistencia", "en": "Heating Element Size" }, "value": "40 x 50cm" },
      { "label": { "es": "Máximo grosor imprimible", "en": "Maximum Printable Thickness" }, "value": "70mm" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "120/220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1800W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "54 Kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "89 x 543 x 61 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-04" },
      { "label": { "es": "Precisión del controlador", "en": "Controller Precision" }, "value": "±0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0º-225º" }
    ],
    "benefits": [
      {
        "title": { "es": "Explora nuevas posibilidades de personalización", "en": "Explore new personalization possibilities" },
        "description": { "es": "La plancha térmica Jamaica 8 en 1 de Beinsen te brinda la oportunidad de expandir tus horizontes en la personalización. Con resistencias especializadas para platos, gorras y tazas, podrás personalizar una variedad de objetos, desde textiles hasta artículos de vajilla.", "en": "The Beinsen Jamaica 8-in-1 heat press helps you expand your personalization options with specialized elements for plates, caps, and mugs." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Sistema de calentamiento rápido", "en": "Fast heating system" },
        "description": { "es": "Cuenta con un sistema de calentamiento rápido que te permite iniciar tus proyectos de personalización en poco tiempo, ahorrando tiempo y aumentando la eficiencia.", "en": "Its fast heating system lets you start personalization projects quickly, saving time and increasing efficiency." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Calidad y rendimiento excepcionales", "en": "Exceptional quality and performance" },
        "description": { "es": "La plancha térmica Jamaica destaca por su calidad y rendimiento superiores. Con una superficie de trabajo de 40 cm x 50 cm en su plato base, garantiza resultados profesionales en cada aplicación.", "en": "Jamaica stands out for superior quality and performance. Its 40 x 50 cm base plate delivers professional results in every application." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Modo eco y precalentamiento", "en": "Eco mode and preheating" },
        "description": { "es": "Incluye modo eco y función de precalentamiento para optimizar el consumo y agilizar el flujo de trabajo.", "en": "Includes eco mode and preheating to optimize energy usage and speed up workflow." },
        "icon": "Leaf"
      },
      {
        "title": { "es": "Pantalla digital y programable", "en": "Digital and programmable control" },
        "description": { "es": "Su pantalla digital y sistema programable facilitan una configuración precisa y repetible en trabajos continuos.", "en": "Its digital display and programmable system provide precise, repeatable setup for continuous jobs." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencia duradera", "en": "Durable heating element" },
        "description": { "es": "Diseñada para una larga vida útil y estabilidad térmica en producciones exigentes.", "en": "Designed for long service life and thermal stability in demanding production runs." },
        "icon": "Gauge"
      },
      {
        "title": { "es": "Resistencias para gorras (9 x 15.5 cm)", "en": "Cap elements (9 x 15.5 cm)" },
        "description": { "es": "Personaliza gorras con facilidad y precisión utilizando las resistencias para crear diseños únicos y originales.", "en": "Personalize caps with ease and precision using dedicated elements for unique designs." },
        "icon": "Target"
      },
      {
        "title": { "es": "Resistencias para platos (12.6 cm y 15.2 cm)", "en": "Plate elements (12.6 cm and 15.2 cm)" },
        "description": { "es": "Transforma platos comunes en piezas de arte para que cada comida sea un momento memorable.", "en": "Transform regular plates into art pieces so every meal becomes memorable." },
        "icon": "Disc"
      },
      {
        "title": { "es": "Resistencias para vasos (6 oz, 9 oz, 12 oz y 15 oz)", "en": "Mug elements (6 oz, 9 oz, 12 oz, and 15 oz)" },
        "description": { "es": "Agrega un toque personal a tus bebidas para que cada sorbo sea especial y único.", "en": "Add a personal touch to your drinkware so every sip feels special and unique." },
        "icon": "CupSoda"
      }
    ],
    "hotspots": [
      {
        "x": 51, "y": 3,
        "title": { "es": "Asa de transporte", "en": "Carrying handle" },
        "description": { "es": "Asa integrada en la estructura superior que facilita el transporte y reposicionamiento de la máquina en el taller sin esfuerzo adicional.", "en": "Integrated handle on the upper frame for easy transport and repositioning of the machine in the workshop." }
      },
      {
        "x": 70, "y": 30,
        "title": { "es": "Controlador digital GY-04", "en": "GY-04 Digital Controller" },
        "description": { "es": "Panel digital con temporizador 0-999 seg., rango de temperatura 0-225°C y precisión ±0,5%. Permite programar y repetir configuraciones con exactitud para trabajos en serie.", "en": "Digital panel with 0-999 sec. timer, 0-225°C temperature range and ±0.5% accuracy. Program and repeat settings precisely for batch jobs." }
      },
      {
        "x": 77, "y": 32,
        "title": { "es": "Botón ON/OFF", "en": "ON/OFF button" },
        "description": { "es": "Interruptor principal de encendido y apagado con acceso directo y ergonómico. Corta completamente la alimentación de la máquina para un uso seguro.", "en": "Main power on/off switch with direct ergonomic access. Fully cuts the machine's power supply for safe operation." }
      },
      {
        "x": 31, "y": 34,
        "title": { "es": "Sistema de apertura giratoria", "en": "Rotary opening system" },
        "description": { "es": "Mecanismo de apertura giratoria manual que desplaza la platina superior hacia un lado, dejando la superficie de trabajo completamente libre para colocar y retirar objetos con comodidad.", "en": "Manual rotary opening mechanism that swings the upper platen to the side, leaving the work surface completely free for comfortable object placement and removal." }
      },
      {
        "x": 31, "y": 70,
        "title": { "es": "Base y estructura robusta", "en": "Robust base and frame" },
        "description": { "es": "Estructura de acero resistente que garantiza estabilidad durante el prensado. El diseño compacto la hace ideal para talleres con espacio reducido sin renunciar a la potencia de 1.800 W.", "en": "Resistant steel frame ensures stability during pressing. The compact design makes it ideal for small workshops without sacrificing 1,800 W of power." }
      }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
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
      "es": "Con tu nueva prensa térmica neumática Beinsen Esparta no podrás parar de personalizar. Porque este nuevo modelo incorpora un montón de novedades que la hacen más cómoda, más sencilla, más precisa e incluso más bonita. Podrás tener en tus manos el modelo más cómodo y avanzado que hemos lanzado hasta la fecha. Y todo esto aumentando aún más tu producción para hacerla también más rentable.",
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
    "accessories": [
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "plato-base-18x18-cambio-rapido" },
      { "id": "plato-base-18x38-cambio-rapido" },
      { "id": "plato-base-18x45-cambio-rapido" },
      { "id": "plato-base-30x35-cambio-rapido" },
      { "id": "plato-base-zapatillas-cambio-rapido" },
      { "id": "plato-base-redondo-24-cambio-rapido" },
      { "id": "plato-base-gorras-cambio-rapido" },
      { "id": "plato-base-camisetas-cambio-rapido" },
      { "id": "plato-base-40x50-2mangas-cambio-rapido" },
      { "id": "mesa-universal-grande" },
      { "id": "plato-base-12x45-mangas-cambio-rapido" },
      { "id": "plato-base-15x50-pantalones-cambio-rapido" },
      { "id": "plato-base-15-5x25-5-cambio-rapido" },
      { "id": "plato-base-15x25-cambio-rapido" },
      { "id": "plato-base-25x30-cambio-rapido" },
      { "id": "plato-base-15x15-cambio-rapido" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [
    ],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Neumática", "en": "Pneumatic", "pt": "Pneumática", "it": "Pneumatica" },
    "gallery": [
      "https://beinsen.com/wp-content/uploads/2025/02/esparta-002-1.jpg"
    ],
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Neumática" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Automático" },
      { "label": { "es": "Grosor máximo del personalizable", "en": "Max Customizable Thickness" }, "value": "40mm." },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-13" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✓" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "3" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✗" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "90Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "125Kg." },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "115×86.5x58cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "✗" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "✗" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "Cubierta anti quemaduras" }
    ],
    "benefits": [
      {
        "title": { "es": "Neumática", "en": "Pneumatic" },
        "description": { "es": "El sistema neumático aporta presión uniforme y constante para personalizaciones más precisas y cómodas en tiradas continuas.", "en": "The pneumatic system provides uniform, constant pressure for more precise and comfortable continuous personalization." },
        "icon": "Wind",
        "image": "/products/maquinas/esparta-prensa-termica-neumatica/05.jpg"
      },
      {
        "title": { "es": "Bandeja extraíble", "en": "Pull-out tray" },
        "description": { "es": "Facilita la colocación de prendas y mejora el flujo de trabajo para una operación más rápida y segura.", "en": "Makes garment placement easier and improves workflow for faster, safer operation." },
        "icon": "PanelBottom",
        "image": "/products/maquinas/esparta-prensa-termica-neumatica/08.png"
      },
      {
        "title": { "es": "Pantalla táctil", "en": "Touch display" },
        "description": { "es": "Todo controlado: configura temperatura y temporizadores de forma intuitiva con su nuevo controlador digital.", "en": "Keep everything under control by setting temperature and timers intuitively with the new digital controller." },
        "icon": "MousePointer2",
        "image": "/products/maquinas/esparta-prensa-termica-neumatica/07.png"
      },
      {
        "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" },
        "description": { "es": "Incluye sistema de intercambio rápido del plato inferior para adaptarse al ritmo de tu producción y reducir tiempos de inactividad.", "en": "Includes a quick-change lower plate system to match production needs and reduce downtime." },
        "icon": "Layers",
        "image": "/products/maquinas/esparta-prensa-termica-neumatica/04.png"
      },
      {
        "title": { "es": "Cubierta antiquemaduras", "en": "Anti-burn cover" },
        "description": { "es": "Incorpora una cubierta de seguridad anti quemaduras para un trabajo más protegido durante jornadas intensivas.", "en": "Includes an anti-burn safety cover for safer operation during intensive workdays." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Comodidad ante todo", "en": "Comfort first" },
        "description": { "es": "Desde la experiencia adquirida con nuestro anterior modelo, hemos avanzado hasta lograr un nuevo nivel de confort sin perder un ápice de eficiencia.", "en": "Based on experience from the previous model, this version reaches a new comfort level without sacrificing efficiency." },
        "icon": "Sofa"
      },
      {
        "title": { "es": "Controlador digital GY-08", "en": "GY-08 digital controller" },
        "description": { "es": "El nuevo controlador digital te lo pone fácil: configura temperatura y tiempos para tener todo bajo control.", "en": "The new digital controller makes it easy to configure temperature and timing and keep everything under control." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Que el ritmo no pare", "en": "Keep the pace going" },
        "description": { "es": "Tu Beinsen Esparta incorpora intercambio rápido del plato inferior para cambiar tan rápido como lo exija tu producción, mejorando productividad, confort y resultados.", "en": "Your Beinsen Esparta includes quick-change lower plate support so you can switch as fast as production demands, improving productivity and comfort." },
        "icon": "Zap"
      }
    ],
    "hotspots": [
      { "x": 33.2, "y": 18.7, "title": { "es": "Controlador digital GY-08", "en": "GY-08 digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 24.2, "y": 52.6, "title": { "es": "Cubierta anti quemaduras", "en": "Anti-burn cover" }, "description": { "es": "", "en": "" } },
      { "x": 22.5, "y": 55.4, "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" }, "description": { "es": "", "en": "" } },
      { "x": 38.6, "y": 67.6, "title": { "es": "Amplio espacio para colocar las prendas", "en": "Wide garment placement area" }, "description": { "es": "", "en": "" } },
      { "x": 25.7, "y": 78.1, "title": { "es": "Bandeja extraíble con rueda", "en": "Pull-out tray with wheel" }, "description": { "es": "", "en": "" } }
    ],
    "downloads": [
      { "label": { "es": "Manual Esparta", "en": "Esparta Manual" }, "url": "/downloads/esparta-manual.pdf" }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately, the heating plate is too hot.",
        "If you turn off the compressor, the hot heating plate may close and press against the lower plate, which can burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
  },
  {
    "id": "planchas-transfer-para-tazas-y-platos-descatalogadas",
    "slug": "barein-plancha-termica",
    "name": {
      "es": "Barein Plancha Térmica",
      "en": "Barein Heat Press",
      "pt": "Barein Prensa Térmica",
      "it": "Barein Pressa Termica"
    },
    "description": {
      "es": "¡Personaliza tus tazas con la plancha térmica Barein! Con resistencias intercambiables para tazas de 6-9oz y controlador digital preciso, obtén resultados increíbles en solo 5 minutos.",
      "en": "Check our previous mug and plate press models.",
      "pt": "Consulte os nossos modelos anteriores.",
      "it": "Consulta i nostri modelli precedenti."
    },
    "image": "https://beinsen.com/wp-content/uploads/2022/03/IMG_0383-1024x768-removebg-preview.png",
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
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "resistencia-tazas-6-10oz" },
      { "id": "resistencia-tazas-11oz-b" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

    "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "gallery": [
      "https://beinsen.com/wp-content/uploads/2022/03/IMG_0383-1024x768-removebg-preview.png",
      "https://beinsen.com/wp-content/uploads/2022/04/28.jpg",
      "https://beinsen.com/wp-content/uploads/2022/04/repbeires11a.jpg",
      "https://beinsen.com/wp-content/uploads/2022/03/IMG_0383-1024x768-removebg-preview.png"
    ],
    "hotspotImage": "https://beinsen.com/wp-content/uploads/2024/01/description_barein.png",
    "videoUrl": "https://www.youtube.com/embed/r1fMuXcRomk",
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Modelo Barein" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tipo para tazas" },
      { "label": { "es": "Compresor", "en": "Compressor" }, "value": "No incluido" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Manual" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Cambiable" },
      { "label": { "es": "Tamaño de resistencia", "en": "Heating Element Size" }, "value": "11oz" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "300W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "13 Kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "30 x 31 x 26 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-04" },
      { "label": { "es": "Precisión del controlador", "en": "Controller Precision" }, "value": "±0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0º-225º" }
    ],
    "benefits": [
      {
        "title": { "es": "¿Quieres personalizar tus tazas de forma fácil y rápida?", "en": "Customize mugs quickly and easily" },
        "description": { "es": "La plancha térmica Barein es la herramienta que necesitas. Con su resistencia intercambiable para tazas de 11oz y controlador digital GY-10, podrás ajustar la temperatura y el tiempo de forma precisa para cada trabajo.", "en": "Barein is the tool you need. With its interchangeable 11oz mug element and GY-10 digital controller, you can set temperature and time precisely for each job." },
        "icon": "CupSoda",
        "image": "/products/maquinas/barein-plancha-termica/04.png"
      },
      {
        "title": { "es": "Haz tu vida más sencilla", "en": "Make life easier" },
        "description": { "es": "Podrás cambiar la resistencia a mano sin necesidad de herramientas adicionales, y su estructura soldada de acero sólido garantiza una larga durabilidad.", "en": "You can swap the heating element by hand without extra tools, and its welded solid steel structure ensures long durability." },
        "icon": "Wrench",
        "image": "/products/maquinas/barein-plancha-termica/06.png"
      },
      {
        "title": { "es": "Todo al alcance de tu mano", "en": "Everything at your fingertips" },
        "description": { "es": "Podrás realizar todos los métodos comunes de transferencia en caliente, como flock, flex y sublimación. Solo necesitarás esperar 5 minutos para que esté lista y empezar a trabajar.", "en": "You can perform common heat transfer methods such as flock, flex, and sublimation. Wait 5 minutes and start working." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Modo eco y precalentamiento", "en": "Eco mode and preheating" },
        "description": { "es": "Incluye modo eco y función de precalentamiento para optimizar el uso energético y agilizar cada ciclo de trabajo.", "en": "Includes eco mode and preheating to optimize energy use and speed up each production cycle." },
        "icon": "Leaf"
      },
      {
        "title": { "es": "Pantalla digital y programable", "en": "Digital and programmable display" },
        "description": { "es": "Su pantalla digital y programación facilitan ajustar parámetros y repetir configuraciones de forma cómoda.", "en": "Its digital display and programmable controls make parameter setup and repeat jobs easier." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencia duradera", "en": "Durable heating element" },
        "description": { "es": "Diseñada para mantener rendimiento constante durante jornadas largas de producción.", "en": "Built to maintain consistent performance through long production sessions." },
        "icon": "Gauge"
      },
      {
        "title": { "es": "Alarma sonora", "en": "Sound alarm" },
        "description": { "es": "Olvídate de abrir tarde la plancha: la alarma sonora te avisa al finalizar el ciclo.", "en": "Forget delayed openings: the sound alarm notifies you at the end of each cycle." },
        "icon": "Bell"
      },
      {
        "title": { "es": "Bajo consumo de energía", "en": "Low energy consumption" },
        "description": { "es": "Su diseño simple y eficiente evita consumos energéticos excesivos.", "en": "Its simple, efficient design avoids excessive energy consumption." },
        "icon": "BatteryCharging"
      },
      {
        "title": { "es": "Estructura sólida", "en": "Solid structure" },
        "description": { "es": "Desde la base hasta el mango, está pensada para resistir largas horas de trabajo en cadena sin desgastes prematuros.", "en": "From base to handle, it is designed to withstand long production runs without premature wear." },
        "icon": "ShieldCheck"
      }
    ],
    "hotspots": [
      {
        "x": 46.1,
        "y": 4.6,
        "title": { "es": "Asa", "en": "Handle" },
        "description": { "es": "Empuñadura principal para apertura y cierre manual de la plancha.", "en": "Main grip used for manual opening and closing of the press." }
      },
      {
        "x": 37.9,
        "y": 23.9,
        "title": { "es": "Ajuste de presión", "en": "Pressure adjustment" },
        "description": { "es": "Perilla para ajustar la presión de trabajo según el tipo de taza y transfer.", "en": "Knob used to adjust working pressure based on mug type and transfer." }
      },
      {
        "x": 34,
        "y": 51.9,
        "title": { "es": "Resistencia", "en": "Heating element" },
        "description": { "es": "Zona calefactora para transferencia térmica sobre tazas.", "en": "Heating zone used for thermal transfer on mugs." }
      },
      {
        "x": 60.8,
        "y": 58.5,
        "title": { "es": "Pantalla digital", "en": "Digital display" },
        "description": { "es": "Pantalla para configurar tiempo y temperatura de trabajo.", "en": "Display used to configure working time and temperature." }
      },
      {
        "x": 86.8,
        "y": 60.3,
        "title": { "es": "Botón ON / OFF", "en": "ON / OFF button" },
        "description": { "es": "Interruptor principal de encendido y apagado del equipo.", "en": "Main power switch for turning the machine on and off." }
      }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
  },
  {
    "id": "maine-plancha-para-tazas",
    "slug": "maine-plancha-para-tazas",
    "name": {
      "es": "Maine Plancha Para Tazas",
      "en": "Maine Mug Heat Press",
      "pt": "Maine Prensa Para Canecas",
      "it": "Maine Pressa Per Tazze"
    },
    "description": {
      "es": "Imagina poder crear tus propias tazas personalizadas con resultados profesionales, ¿no sería genial? Con la plancha térmica Maine, eso es posible. Esta plancha es perfecta para aquellos que buscan una solución eficiente y práctica para personalizar tazas.",
      "en": "Mug heat press focused on agile personalization and consistent results.",
      "pt": "Prensa térmica para canecas focada em personalização ágil e resultados consistentes.",
      "it": "Pressa termica per tazze orientata a personalizzazione agile e risultati consistenti."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/09/maine-featured-768x768.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Compacta y fácil de configurar",
        "Control preciso de tiempo y temperatura",
        "Ideal para producción de tazas personalizada"
      ],
      "en": [
        "Compact and easy to set up",
        "Precise time and temperature control",
        "Ideal for personalized mug production"
      ]
    },
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "resistencia-tazas-2-5oz" },
      { "id": "resistencia-chupitos-1-5oz" },
      { "id": "resistencia-cilindrica-20-30oz" },
      { "id": "resistencia-conica-tazas-12oz" },
      { "id": "resistencia-tazas-conicas-17oz" },
      { "id": "resistencia-doble-taza-11-15oz" },
      { "id": "resistencia-tazas-6-10oz" },
      { "id": "resistencia-tazas-11oz-b" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Guia-de-Usuario-Maine", "en": "User Manual - Guia-de-Usuario-Maine" }, "url": "/downloads/maine-plancha-para-tazas/Guia-de-Usuario-Maine.pdf" }
    ],
        "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Para tazas" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "NTTH-2000" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Resistencias incluidas", "en": "Included Elements" }, "value": "6 (chupito, taza mini, 6-10oz, 11-15oz, 12oz cónica, 17oz cónica)" },
      { "label": { "es": "Resistencias opcionales", "en": "Optional Elements" }, "value": "Resistencia de 20-30oz para tumblers y botellas" },
      { "label": { "es": "Resistencias intercambiables", "en": "Interchangeable Elements" }, "value": "✓" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "130W-260W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "220 ℃ (437 ℉)" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "14Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "16,6Kg." },
      { "label": { "es": "Tamaño de la máquina", "en": "Machine Size" }, "value": "43x41x32cm" },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "59x52x36cm." },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "✗" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "✗" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "Cubierta anti quemaduras" }
    ],
    "benefits": [
      {
        "title": { "es": "Control manual", "en": "Manual control" },
        "description": { "es": "Gestiona cada ciclo de personalización con precisión y control total en una operación manual confiable.", "en": "Manage each personalization cycle with precision and full control through reliable manual operation." },
        "icon": "Settings",
        "image": "/products/maquinas/maine-plancha-para-tazas/05.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Doble controlador", "en": "Dual controller" },
        "description": { "es": "La plancha transfer Beinsen Maine incorpora un doble controlador digital para que tengas el mayor control a la hora de personalizar. Gracias a este sistema puedes multiplicar por 2 la producción o utilizar solo la parte que necesites, ahorrando tiempo y dinero.", "en": "Beinsen Maine includes dual digital control so you can maximize precision. This system lets you double production or run only the side you need to save time and cost." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencias intercambiables", "en": "Interchangeable elements" },
        "description": { "es": "Cambia resistencias de forma rápida para adaptarte a distintos formatos de taza y vaso según tus pedidos.", "en": "Swap elements quickly to adapt to different mug and cup formats based on your orders." },
        "icon": "Layers",
        "image": "/products/maquinas/maine-plancha-para-tazas/06.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Un universo de posibilidades", "en": "A universe of possibilities" },
        "description": { "es": "Sus 6 resistencias incluidas te permitirán personalizar todo tipo de tazas y vasos, desde pequeños vasos de chupito hasta tazas grandes. Y con la resistencia opcional de 20 a 30oz podrás añadir termos y botellas a tu portfolio.", "en": "Its 6 included elements let you customize all kinds of mugs and cups, from shot glasses to larger mugs. With the optional 20-30oz element, you can also add tumblers and bottles to your portfolio." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Nada escapa a tu control", "en": "Nothing escapes your control" },
        "description": { "es": "Configura temperatura y tiempo con total precisión para mantener resultados consistentes y profesionales en cada lote.", "en": "Set temperature and time with full precision to keep consistent, professional results in every batch." },
        "icon": "Target"
      }
    ],
    "hotspots": [
      { "x": 56.0, "y": 32.1, "title": { "es": "Diseño ergonómico", "en": "Ergonomic design" }, "description": { "es": "", "en": "" } },
      { "x": 48.3, "y": 42.4, "title": { "es": "Regulación sencilla", "en": "Easy adjustment" }, "description": { "es": "", "en": "" } },
      { "x": 57.3, "y": 47.4, "title": { "es": "Intercambio fácil de resistencia", "en": "Easy element swap" }, "description": { "es": "", "en": "" } },
      { "x": 29.0, "y": 51.2, "title": { "es": "Doble controlador digital", "en": "Dual digital controller" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately, the heating plate is too hot.",
        "If you turn off the compressor, the hot heating plate may close and press against the lower plate, which can burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
  },
  {
    "id": "aruba-plancha-para-tazas",
    "slug": "aruba-plancha-para-tazas",
    "name": {
      "es": "Aruba Plancha Para Tazas",
      "en": "Aruba Mug Heat Press",
      "pt": "Aruba Prensa Para Canecas",
      "it": "Aruba Pressa Per Tazze"
    },
    "description": {
      "es": "La plancha térmica para la personalización de tazas puede ser un trabajo laborioso y limitado en cantidad si se usa el método manual. Pero con la plancha térmica Aruba, todo eso se convierte en cosa del pasado. ¡Personaliza dos tazas a la vez de diferentes formas y capacidades!",
      "en": "Mug heat press designed for workshops needing speed and stability.",
      "pt": "Prensa térmica para canecas pensada para oficinas que exigem velocidade e estabilidade.",
      "it": "Pressa termica per tazze pensata per laboratori che richiedono velocità e stabilità."
    },
    "image": "https://beinsen.com/wp-content/uploads/2022/03/IMG_0535-1024x768-removebg-preview.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Construcción robusta para uso continuo",
        "Ajuste rápido de parámetros",
        "Resultados uniformes en cada ciclo"
      ],
      "en": [
        "Robust build for continuous use",
        "Fast parameter adjustment",
        "Uniform results in every cycle"
      ]
    },
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "resistencia-tazas-6-10oz" },
      { "id": "resistencia-tazas-11oz-b" },
      { "id": "resistencia-conica-tazas-12oz" },
      { "id": "resistencia-conica-tazas-17oz" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Manual-Aruba", "en": "User Manual - Manual-Aruba" }, "url": "/downloads/aruba-plancha-para-tazas/Manual-Aruba.pdf" }
    ],
        "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Modelo", "en": "Model" }, "value": "Aruba" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tipo manual" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Manual" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Cambiable" },
      { "label": { "es": "Tamaño de resistencia", "en": "Heating Element Size" }, "value": "6 a 10 oz, 11oz a 15oz, 12oz y 17oz" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "300W x 2" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "13 Kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "55 x 51 x 27 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-04" },
      { "label": { "es": "Precisión del controlador", "en": "Controller Precision" }, "value": "±0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0º-225º" }
    ],
    "benefits": [
      {
        "title": { "es": "No dudes, y sublima", "en": "Do not hesitate, sublimate" },
        "description": { "es": "Cuenta con resistencias para tazas cilíndricas de 6 a 10 oz y 11 a 15 oz, y cónicas de 12 oz y 17 oz. Además, podrás utilizar métodos comunes de transferencia en caliente como flock, flex y sublimación.", "en": "It includes elements for 6-10 oz and 11-15 oz cylindrical mugs, plus 12 oz and 17 oz conical mugs, and supports common transfer methods like flock, flex, and sublimation." },
        "icon": "Zap"
      },
      {
        "title": { "es": "La cantidad es importante", "en": "Quantity matters" },
        "description": { "es": "Con 2 estaciones de trabajo independientes, podrás ajustar la plancha al tamaño y forma de cada taza y sublimar una taza y un termo a la vez sin preocupaciones.", "en": "With 2 independent workstations, you can adjust to each size and shape and sublimate a mug and a tumbler at the same time." },
        "icon": "Layers",
        "image": "/products/maquinas/aruba-plancha-para-tazas/05.png"
      },
      {
        "title": { "es": "La calidad es imprescindible", "en": "Quality is essential" },
        "description": { "es": "No solo aumentará la cantidad de tazas personalizadas que puedas hacer, también elevará la calidad de tus diseños sublimados gracias a sus altos estándares de construcción.", "en": "It not only increases output but also improves sublimation quality thanks to high construction standards." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Resistencia duradera y programable", "en": "Durable and programmable heating" },
        "description": { "es": "Integra resistencia duradera, pantalla digital y funciones programables para mantener estabilidad y repetibilidad durante toda la producción.", "en": "It combines durable heating, digital display, and programmable functions for stable, repeatable production." },
        "icon": "Gauge"
      },
      {
        "title": { "es": "Controlador digital avanzado", "en": "Advanced digital controller" },
        "description": { "es": "Podrás ajustar la temperatura y el tiempo de manera precisa para que nada salga mal en el proceso de sublimación.", "en": "You can adjust temperature and time precisely to keep sublimation workflows under control." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Presión precisa", "en": "Precise pressure" },
        "description": { "es": "Incluye 4 perillas para ajustar presión y generar un cierre compacto en cada trabajo, preservando la calidad final.", "en": "It includes 4 pressure knobs to create a compact closure in every job and preserve final quality." },
        "icon": "Target"
      },
      {
        "title": { "es": "Fácil de usar", "en": "Easy to use" },
        "description": { "es": "Es fácil de operar incluso para quienes no tienen experiencia previa en personalización de tazas.", "en": "It is easy to operate even for users without previous mug personalization experience." },
        "icon": "Settings"
      }
    ],
    "storySegments": [
      {
        "title": { "es": "Rendimiento profesional", "en": "Professional performance" },
        "description": { "es": "Aruba Plancha Para Tazas ha sido diseñada para ofrecer resultados consistentes y alta productividad.", "en": "Aruba Mug Heat Press is designed to deliver consistent results and high productivity." },
        "image": "/products/maquinas/aruba-plancha-para-tazas/03.png"
      }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    },
    "hotspots": [
      { "x": 73.8, "y": 10.4, "title": { "es": "Asa",                                  "en": "Handle" },                               "description": { "es": "", "en": "" } },
      { "x": 31.5, "y": 18.2, "title": { "es": "Sensor de activación",                  "en": "Activation sensor" },                    "description": { "es": "", "en": "" } },
      { "x": 52,   "y": 28.9, "title": { "es": "Pantalla digital",                      "en": "Digital display" },                      "description": { "es": "", "en": "" } },
      { "x": 28.8, "y": 39,   "title": { "es": "Resistencia",                           "en": "Heating element" },                      "description": { "es": "", "en": "" } },
      { "x": 61,   "y": 87.8, "title": { "es": "Tuercas para ajustar la presión",       "en": "Pressure adjustment knobs" },             "description": { "es": "", "en": "" } }
    ]
  },
  {
    "id": "sicilia-plancha-para-tazas",
    "slug": "sicilia-plancha-para-tazas",
    "name": {
      "es": "Sicilia Plancha Para Tazas 8 en 1",
      "en": "Sicilia Mug Heat Press 8-in-1",
      "pt": "Sicilia Prensa Para Canecas 8 em 1",
      "it": "Sicilia Pressa Per Tazze 8 in 1"
    },
    "description": {
      "es": "Con la plancha térmica Sicilia podrás personalizar cualquier tipo de taza con facilidad. Sus 8 resistencias intercambiables cubren todos los formatos del mercado: desde chupitos de 1.5oz hasta termos de 20-30oz. Una sola máquina para todas tus tazas.",
      "en": "With the Sicilia heat press you can customize any type of mug with ease. Its 8 interchangeable elements cover every format on the market: from 1.5oz shot glasses to 20-30oz tumblers. One machine for all your mugs.",
      "pt": "Com a prensa térmica Sicilia poderás personalizar qualquer tipo de caneca com facilidade. As suas 8 resistências intercambiáveis cobrem todos os formatos do mercado: desde copos de 1.5oz até termos de 20-30oz.",
      "it": "Con la pressa termica Sicilia potrai personalizzare qualsiasi tipo di tazza con facilità. I suoi 8 elementi intercambiabili coprono tutti i formati del mercato: dai bicchierini da 1.5oz ai tumbler da 20-30oz."
    },
    "image": "https://beinsen.com/wp-content/uploads/2024/01/sicilia-beinsen.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "8 resistencias intercambiables: 1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz cónica, 17oz cónica, 20-30oz",
        "4 perillas de ajuste de presión para impresión de alta calidad",
        "Controlador digital GY-04 con modo eco y precalentamiento"
      ],
      "en": [
        "8 interchangeable elements: 1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz conical, 17oz conical, 20-30oz",
        "4 pressure adjustment knobs for high-quality printing",
        "GY-04 digital controller with eco mode and preheating"
      ],
      "pt": [
        "8 resistências intercambiáveis: 1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz cónica, 17oz cónica, 20-30oz",
        "4 manípulos de ajuste de pressão para impressão de alta qualidade",
        "Controlador digital GY-04 com modo eco e pré-aquecimento"
      ],
      "it": [
        "8 elementi intercambiabili: 1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz conico, 17oz conico, 20-30oz",
        "4 manopole di regolazione pressione per stampa di alta qualità",
        "Controller digitale GY-04 con modalità eco e preriscaldamento"
      ]
    },
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "resistencia-tazas-2-5oz" },
      { "id": "resistencia-chupitos-1-5oz" },
      { "id": "resistencia-cilindrica-20-30oz" },
      { "id": "resistencia-conica-tazas-12oz" },
      { "id": "resistencia-para-tazas-conicas-17oz" },
      { "id": "resistencia-doble-taza-11-15oz" },
      { "id": "resistencia-tazas-6-10oz" },
      { "id": "resistencia-cilindrica-tazas-11oz-tipo-a" },
      { "id": "mesa-universal-grande" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],
    "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Sicilia" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Para tazas" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Manual" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Cambiable" },
      { "label": { "es": "Resistencias incluidas", "en": "Included Elements" }, "value": "8 (1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz cónica, 17oz cónica, 20-30oz)" },
      { "label": { "es": "Resistencias intercambiables", "en": "Interchangeable Elements" }, "value": "✓" },
      { "label": { "es": "Ajuste de presión", "en": "Pressure Adjustment" }, "value": "4 perillas manuales" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-04" },
      { "label": { "es": "Precisión del controlador", "en": "Controller Precision" }, "value": "±0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 seg." },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225 ℃" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "0.6 kW" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "16 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "51 x 50 x 37 cm" }
    ],
    "benefits": [
      {
        "title": { "es": "No habrá taza, termo o botella que se te resista", "en": "No mug, tumbler, or bottle can resist it" },
        "description": { "es": "Con sus 8 resistencias intercambiables, Sicilia cubre todos los formatos del mercado: chupitos, tazas mini, cilíndricas de varios tamaños, cónicas y termos grandes. Sin excepciones.", "en": "With 8 interchangeable elements, Sicilia covers every market format: shot glasses, mini mugs, various cylindrical sizes, conical mugs, and large tumblers. No exceptions." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Cambio de resistencias sin herramientas", "en": "Element swap without tools" },
        "description": { "es": "Su diseño ergonómico permite cambiar las resistencias a mano en segundos, sin necesidad de destornilladores ni herramientas adicionales. Más tiempo produciendo, menos tiempo configurando.", "en": "Its ergonomic design lets you swap elements by hand in seconds, without screwdrivers or extra tools. More time producing, less time setting up." },
        "icon": "Wrench"
      },
      {
        "title": { "es": "Versatilidad total: de 1.5oz a 20-30oz", "en": "Total versatility: from 1.5oz to 20-30oz" },
        "description": { "es": "Desde chupitos de 1.5oz hasta termos y botellas de 20-30oz, pasando por tazas cilíndricas de 6-9oz y 11-15oz, y cónicas de 12oz y 17oz. Una sola máquina para todo tu catálogo.", "en": "From 1.5oz shot glasses to 20-30oz tumblers and bottles, plus 6-9oz and 11-15oz cylindrical mugs and 12oz and 17oz conical. One machine for your entire catalog." },
        "icon": "Ruler"
      },
      {
        "title": { "es": "4 perillas de ajuste de presión", "en": "4 pressure adjustment knobs" },
        "description": { "es": "Las cuatro perillas de ajuste permiten regular la presión con precisión para cada formato, garantizando una impresión de alta calidad independientemente del tamaño o forma de la taza.", "en": "Four adjustment knobs allow precise pressure control for each format, guaranteeing high-quality printing regardless of mug size or shape." },
        "icon": "Target"
      },
      {
        "title": { "es": "Controlador digital GY-04", "en": "GY-04 digital controller" },
        "description": { "es": "Programa temperatura y tiempo con precisión milimétrica. Incluye modo eco para ahorro energético y precalentamiento para reducir el tiempo de espera al inicio de la jornada.", "en": "Program temperature and time with precision. Includes eco mode for energy savings and preheating to reduce warm-up time at the start of the day." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencia duradera y programable", "en": "Durable and programmable element" },
        "description": { "es": "Las resistencias de Sicilia están diseñadas para mantener un rendimiento constante durante largas jornadas de producción. Su pantalla digital facilita repetir configuraciones de forma consistente.", "en": "Sicilia's elements are designed to maintain consistent performance through long production sessions. The digital display makes it easy to repeat settings consistently." },
        "icon": "Gauge"
      },
      {
        "title": { "es": "La aliada perfecta para el negocio de tazas", "en": "The perfect ally for the mug business" },
        "description": { "es": "Sicilia es la solución definitiva para quien quiere ofrecer el catálogo más amplio de tazas personalizadas. Compacta, potente y versátil: todo lo que necesitas en una sola máquina.", "en": "Sicilia is the definitive solution for anyone wanting to offer the widest catalog of personalized mugs. Compact, powerful, and versatile: everything you need in one machine." },
        "icon": "ShieldCheck"
      }
    ],
    "hotspots": [
      {
        "x": 65.2, "y": 8.6,
        "title": { "es": "Asa de transporte", "en": "Carrying handle" },
        "description": { "es": "Asa integrada en la parte superior que facilita el transporte y reposicionamiento de la máquina en el taller sin esfuerzo adicional.", "en": "Integrated handle on the top that makes transporting and repositioning the machine in the workshop effortless." }
      },
      {
        "x": 57.8, "y": 49.8,
        "title": { "es": "Resistencia intercambiable (8 formatos)", "en": "Interchangeable element (8 formats)" },
        "description": { "es": "Sistema de 8 resistencias intercambiables sin herramientas: 1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz cónica, 17oz cónica y 20-30oz. Cubre todos los formatos del mercado con una sola máquina.", "en": "System of 8 tool-free interchangeable elements: 1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz conical, 17oz conical and 20-30oz. Covers every market format with a single machine." }
      },
      {
        "x": 27.2, "y": 56.8,
        "title": { "es": "Controlador digital GY-04", "en": "GY-04 Digital Controller" },
        "description": { "es": "Panel digital con temporizador 0-999 seg., temperatura máxima 225°C, precisión ±0,5%, modo eco y precalentamiento. Programa y repite configuraciones con exactitud para trabajos en serie.", "en": "Digital panel with 0-999 sec. timer, 225°C maximum temperature, ±0.5% accuracy, eco mode and preheating. Program and repeat settings precisely for batch jobs." }
      },
      {
        "x": 43.2, "y": 73.6,
        "title": { "es": "Botón ON/OFF", "en": "ON/OFF button" },
        "description": { "es": "Interruptor principal de encendido y apagado que corta completamente la alimentación de la máquina. Acceso directo y ergonómico para un uso seguro.", "en": "Main power on/off switch that fully cuts the machine's power supply. Direct ergonomic access for safe operation." }
      }
    ],
    "downloads": [
      { "label": { "es": "Manual de Usuario Sicilia", "en": "Sicilia User Manual" }, "url": "/downloads/sicilia-manual.pdf" },
      { "label": { "es": "Ficha Técnica Sicilia", "en": "Sicilia Technical Sheet" }, "url": "/downloads/sicilia-ficha-tecnica.pdf" }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos cuando se deterioren.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings when worn.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
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
      "es": "La plancha transfer compacta Beinsen Pocola con plato de 15 x 20 cm está diseñada especialmente para trabajos de sublimación en formato pequeño. Perfecta para personalizar artículos como bodies, camisetas infantiles, parches o detalles en prendas, combina tamaño reducido con alto rendimiento.",
      "en": "Simple, compact, and economical. 15 x 20 cm plate ideal for keychains and cases.",
      "pt": "Simples, compacta e económica.",
      "it": "Semplice, compatta ed economica."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/03/Diseno-sin-titulo-13.png",
    "price": "Consultar PVP",
    "size": { "es": "Compacta", "en": "Compact", "pt": "Compacta", "it": "Compatta" },
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
    "accessories": [
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "plato-gorras-beinsen-riad" },
      { "id": "resistencia-gorras-beinsen-riad" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [],

"downloads": [
      { "label": { "es": "Manual de Usuario - Guia-de-usuario-Pocola-v1.0", "en": "User Manual - Guia-de-usuario-Pocola-v1.0" }, "url": "/downloads/pocola-plancha-transfer-manual-pequena/Guia-de-usuario-Pocola-v1.0.pdf" }
    ],
        "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-04" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "15x20cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✗" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "500W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "16,15Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "18Kg." },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "58x45x48cm" }
    ],
    "benefits": [
      {
        "title": { "es": "Ligera", "en": "Lightweight" },
        "description": { "es": "Diseñada para ofrecer una experiencia de uso ágil y cómoda en tareas de personalización de pequeño formato.", "en": "Designed to provide an agile and comfortable experience for small-format personalization tasks." },
        "icon": "Feather"
      },
      {
        "title": { "es": "Controlador digital", "en": "Digital controller" },
        "description": { "es": "Controla tiempo y temperatura de forma sencilla con su display GY-04 para trabajar con precisión en cada planchado.", "en": "Easily control time and temperature through its GY-04 display for precise results on every press." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" },
        "description": { "es": "Su sistema de platos intercambiables amplía tus posibilidades para personalizar diferentes tipos de artículos con una sola máquina.", "en": "Its interchangeable plate system expands your options to customize different items with a single machine." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Contigo al fin del mundo", "en": "Built to go the distance" },
        "description": { "es": "Nos hemos desprendido de lo supérfluo para conseguir una herramienta sencilla, compacta y económica pero capaz de dar grandes resultados. El versátil plato plano de 15 x 20 cm te permite utilizarla para bodys, llaveros, fundas para móvil y casi todo lo que se te ocurra.", "en": "We removed the unnecessary to deliver a simple, compact, and affordable tool that still offers great results. Its versatile 15 x 20 cm flat plate lets you personalize bodysuits, keychains, phone cases, and almost anything you can imagine." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Precisa y robusta", "en": "Precise and robust" },
        "description": { "es": "La nueva prensa térmica Beinsen Pocola te lo pone fácil durante todo el proceso de personalización. Comienza regulando la presión necesaria con su nuevo mando regulador mejorado, utiliza el controlador digital para seleccionar tiempo y temperatura y al acabar separa la placa calefactora de manera sencilla y elegante con el resorte de gas.", "en": "The new Beinsen Pocola simplifies your full personalization process. Start by setting pressure with its improved regulator, use the digital controller to select time and temperature, and finish by separating the heating plate smoothly with the gas spring." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Amplía tus horizontes", "en": "Expand your horizons" },
        "description": { "es": "Y si todo lo anterior no es suficiente para ti, solo tienes que añadir a tu Beinsen Pocola el kit para gorras. Es facilísimo de quitar y poner y te permite personalizar estos artículos tan demandados.", "en": "And if all of the above is not enough, just add the cap kit to your Beinsen Pocola. It is very easy to install and remove, and lets you personalize these highly demanded items." },
        "icon": "Target"
      }
    ],
    "hotspots": [
      { "x": 36.1, "y": 33.5, "title": { "es": "Regulador manual de presión", "en": "Manual pressure regulator" }, "description": { "es": "", "en": "" } },
      { "x": 84.6, "y": 40.3, "title": { "es": "Resorte de gas", "en": "Gas spring" }, "description": { "es": "", "en": "" } },
      { "x": 58.9, "y": 40.6, "title": { "es": "Controlador digital GY-04", "en": "GY-04 digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 31.8, "y": 43.6, "title": { "es": "Placa calefactora de 15×20 cm", "en": "15×20 cm heating plate" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately, the heating plate is too hot.",
        "If you turn off the compressor, the hot heating plate may close and press against the lower plate, which can burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
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
      "es": "La plancha transfer compacta Beinsen Gante con plato para gorras está diseñada especialmente para la iniciación en el mercado de las gorras personalizadas, o para pequeñas producciones o eventos ocasionales.",
      "en": "The perfect tool to get started in cap personalization. Includes attachment support.",
      "pt": "A ferramenta perfeita para começar a personalizar bonés.",
      "it": "Lo strumento perfetto per iniziare la personalizzazione dei cappelli."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/03/riad.png",
    "price": "Consultar PVP",
    "size": { "es": "Compacta", "en": "Compact", "pt": "Compacta", "it": "Compatta" },
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
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "plato-15x20-beinsen-riad" },
      { "id": "resistencia-15x20-beinsen-riad" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Guia-de-usuario-Gante", "en": "User Manual - Guia-de-usuario-Gante" }, "url": "/downloads/gante-plancha-manual-gorras/Guia-de-usuario-Gante.pdf" }
    ],
        "category": { "es": "Gorras", "en": "Caps", "pt": "Bonés", "it": "Cappelli" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-04" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "Plato para gorras" },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✓" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "300W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "16,15Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "18Kg." },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "58x45x48cm" }
    ],
    "benefits": [
      {
        "title": { "es": "Ligera", "en": "Lightweight" },
        "description": { "es": "Su diseño ligero facilita el trabajo diario y el transporte en producciones pequeñas o eventos.", "en": "Its lightweight design makes daily operation and transport easier for small productions or events." },
        "icon": "Feather",
        "image": "/products/maquinas/gante-plancha-manual-gorras/01.png"
      },
      {
        "title": { "es": "Controlador digital", "en": "Digital controller" },
        "description": { "es": "Configura tiempo y temperatura de forma sencilla con su controlador digital GY-04.", "en": "Set time and temperature easily with its GY-04 digital controller." },
        "icon": "Cpu",
        "image": "/products/maquinas/gante-plancha-manual-gorras/02.png"
      },
      {
        "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" },
        "description": { "es": "Gracias a sus platos intercambiables podrás adaptar la plancha a distintas aplicaciones según tus necesidades.", "en": "Its interchangeable plates let you adapt the press to different applications as needed." },
        "icon": "Layers",
        "image": "/products/maquinas/gante-plancha-manual-gorras/04.png"
      },
      {
        "title": { "es": "Contigo al fin del mundo", "en": "Built to go the distance" },
        "description": { "es": "Nos hemos desprendido de lo supérfluo para conseguir una herramienta sencilla, compacta y económica pero capaz de dar grandes resultados. El plato especial para gorras, junto con el soporte para sujetarlas, te ofrece la herramienta perfecta para iniciarte en esto.", "en": "We removed everything unnecessary to create a simple, compact, and affordable tool that still delivers great results. The special cap plate, together with the cap holder, gives you the perfect setup to get started." },
        "icon": "Zap",
        "image": "/products/maquinas/gante-plancha-manual-gorras/03.png"
      },
      {
        "title": { "es": "Precisa y robusta", "en": "Precise and robust" },
        "description": { "es": "La nueva prensa térmica Beinsen Gante te lo pone fácil durante todo el proceso de personalización. Comienza regulando la presión necesaria con su nuevo mando regulador mejorado, utiliza el controlador digital para seleccionar tiempo y temperatura y al acabar separa la placa calefactora de manera sencilla y elegante con el resorte de gas.", "en": "The new Beinsen Gante makes the full personalization process easier. Start by adjusting pressure with its improved regulator, use the digital controller to set time and temperature, and finish by separating the heating plate smoothly with the gas spring." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Amplía tus horizontes", "en": "Expand your horizons" },
        "description": { "es": "Y si todo lo anterior no es suficiente para ti, solo tienes que añadir a tu Beinsen Gante el kit plano de 15 x 20. Es facilísimo de quitar y poner y su versatilidad te abrirá un nuevo mundo de posibilidades.", "en": "And if all of the above is not enough, simply add the 15 x 20 flat kit to your Beinsen Gante. It is very easy to install and remove, and its versatility opens a new world of possibilities." },
        "icon": "Target"
      }
    ],
    "hotspots": [
      { "x": 42.2, "y": 34.3, "title": { "es": "Regulador manual de presión", "en": "Manual pressure regulator" }, "description": { "es": "", "en": "" } },
      { "x": 73.9, "y": 43.5, "title": { "es": "Controlador digital GY04", "en": "GY04 digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 55.7, "y": 50.1, "title": { "es": "Resorte de gas", "en": "Gas spring" }, "description": { "es": "", "en": "" } },
      { "x": 33.6, "y": 53.2, "title": { "es": "Plato especial para gorras", "en": "Special cap plate" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately, the heating plate is too hot.",
        "If you turn off the compressor, the hot heating plate may close and press against the lower plate, which can burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
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
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "plato-base-18x18-cambio-rapido" },
      { "id": "plato-base-18x38-cambio-rapido" },
      { "id": "plato-base-18x45-cambio-rapido" },
      { "id": "plato-base-30x35-cambio-rapido" },
      { "id": "plato-base-zapatillas-cambio-rapido" },
      { "id": "plato-base-redondo-24-cambio-rapido" },
      { "id": "plato-base-gorras-cambio-rapido" },
      { "id": "plato-base-camisetas-cambio-rapido" },
      { "id": "plato-base-40x50-2mangas-cambio-rapido" },
      { "id": "plato-base-12x45-mangas-cambio-rapido" },
      { "id": "plato-base-15x50-pantalones-cambio-rapido" },
      { "id": "plato-base-15-5x25-5-cambio-rapido" },
      { "id": "plato-base-15x25-cambio-rapido" },
      { "id": "plato-base-25x30-cambio-rapido" },
      { "id": "plato-base-15x15-cambio-rapido" }
    ],
    "consumables": [
    ],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Neumática", "en": "Pneumatic", "pt": "Pneumática", "it": "Pneumatica" },
    "gallery": [
      "https://beinsen.com/wp-content/uploads/2025/07/Sin-titulo-1000-x-1000-px-1.png",
      "https://beinsen.com/wp-content/uploads/2023/09/2.jpg"
    ],
    "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "benefits": [
      {
        "title": { "es": "Automatización Industrial", "en": "Industrial Automation" },
        "description": { "es": "Sistema de desplazamiento eléctrico de doble plato que elimina la fatiga del operario y dobla la capacidad de producción.", "en": "Electric double-plate displacement system that eliminates operator fatigue and doubles production capacity." },
        "icon": "Zap",
        "image": "/products/maquinas/trinidad-prensa-termica-automatica/05.png"
      },
      {
        "title": { "es": "Precisión Láser Ultra", "en": "Ultra Laser Precision" },
        "description": { "es": "Doble proyector láser en cruz ajustable para un posicionamiento milimétrico de logos y diseños en cada prenda.", "en": "Adjustable cross-laser dual projectors for millimeter-perfect positioning of logos and designs on every garment." },
        "icon": "Target",
        "image": "/products/maquinas/trinidad-prensa-termica-automatica/03.png"
      },
      {
        "title": { "es": "Control Inteligente PLC", "en": "Intelligent PLC Control" },
        "description": { "es": "Cerebro electrónico avanzado que gestiona presión, tiempo y temperatura con una estabilidad inigualable.", "en": "Advanced electronic brain that manages pressure, time, and temperature with unmatched stability." },
        "icon": "Cpu",
        "image": "/products/maquinas/trinidad-prensa-termica-automatica/04.png"
      },
      {
        "title": { "es": "Seguridad de Vanguardia", "en": "Cutting-edge Safety" },
        "description": { "es": "Sensores de proximidad y botones de emergencia duales para garantizar la protección total del operario.", "en": "Proximity sensors and dual emergency buttons to ensure total operator protection." },
        "icon": "ShieldCheck",
        "image": "/products/maquinas/trinidad-prensa-termica-automatica/01.png"
      }
    ],
    "hotspots": [
      { "x": 26.9, "y": 8.9,  "title": { "es": "Pantalla táctil", "en": "Touch screen" }, "description": { "es": "", "en": "" } },
      { "x": 41.9, "y": 13.5, "title": { "es": "Botón de desplazamiento horizontal", "en": "Horizontal displacement button" }, "description": { "es": "", "en": "" } },
      { "x": 24.7, "y": 14.2, "title": { "es": "Láser de ayuda", "en": "Positioning laser" }, "description": { "es": "", "en": "" } },
      { "x": 52.8, "y": 14.9, "title": { "es": "Regulador de velocidad de bajada", "en": "Lowering speed regulator" }, "description": { "es": "", "en": "" } },
      { "x": 22.9, "y": 20.7, "title": { "es": "Controlador digital de desplazamiento", "en": "Digital displacement controller" }, "description": { "es": "", "en": "" } },
      { "x": 54.4, "y": 42.6, "title": { "es": "Platos intercambiables con sistema de cambio rápido", "en": "Quick-change interchangeable plates" }, "description": { "es": "", "en": "" } },
      { "x": 70.4, "y": 49.4, "title": { "es": "Amplio espacio de trabajo", "en": "Wide work area" }, "description": { "es": "", "en": "" } },
      { "x": 55.3, "y": 87.1, "title": { "es": "Mesa de trabajo con ruedas con freno", "en": "Work table with locking wheels" }, "description": { "es": "", "en": "" } }
    ],
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Neumática, estación de trabajo" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Automático, manual" },
      { "label": { "es": "Grosor máximo del personalizable", "en": "Max Customizable Thickness" }, "value": "32mm." },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-13" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✓" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "3" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "2" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✗" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "180Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "301Kg." },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "102x115x150cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Mesa con 4 ruedas universales" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "2, uno a cada lado la unidad principal" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "Cierre de seguridad, sensor detector de manos integrado" }
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
    }
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
      "es": "Tu nueva plancha térmica automática eléctrica es todo lo que necesitas en una única estación de trabajo. Incorpora las últimas novedades del sector, dice adiós al compresor y lo hace todo sola. El futuro ya está aquí.",
      "en": "Your new electric automatic heat press is everything you need in a single workstation. It incorporates the latest industry innovations, says goodbye to the compressor, and does everything on its own. The future is already here.",
      "pt": "A tua nova prensa térmica automática elétrica é tudo o que precisas numa única estação de trabalho. Incorpora as últimas novidades do sector, dispensa o compressor e trabalha de forma totalmente autónoma.",
      "it": "La tua nuova pressa termica automatica elettrica è tutto ciò di cui hai bisogno in un'unica stazione di lavoro. Incorpora le ultime novità del settore, elimina il compressore e lavora in modo completamente autonomo."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/07/miranda-principal.png",
    "price": "Consultar PVP",
    "size": { "es": "Estación de trabajo", "en": "Workstation", "pt": "Estação de trabalho", "it": "Stazione di lavoro" },
    "features": {
      "es": [
        "100% eléctrica — sin compresor, sin ruido",
        "Doble plato 40x50cm con cambio rápido y funcionamiento autónomo",
        "Pantalla táctil GY-13 con 3 memorias y láseres de posicionamiento dobles"
      ],
      "en": [
        "100% electric — no compressor, no noise",
        "Double 40x50cm plate with quick-change and autonomous operation",
        "GY-13 touch display with 3 memories and dual positioning lasers"
      ],
      "pt": [
        "100% elétrica — sem compressor, sem ruído",
        "Duplo prato 40x50cm com troca rápida e funcionamento autónomo",
        "Ecrã táctil GY-13 com 3 memórias e dois lasers de posicionamento"
      ],
      "it": [
        "100% elettrica — senza compressore, senza rumore",
        "Doppia piastra 40x50cm con cambio rapido e funzionamento autonomo",
        "Schermo tattile GY-13 con 3 memorie e doppi laser di posizionamento"
      ]
    },
    "accessories": [
      { "id": "plato-base-camisetas-cambio-rapido" },
      { "id": "plato-base-40x50-2mangas-cambio-rapido" },
      { "id": "plato-base-30x35-cambio-rapido" },
      { "id": "plato-base-18x45-cambio-rapido" },
      { "id": "plato-base-18x38-cambio-rapido" },
      { "id": "plato-base-18x18-cambio-rapido" },
      { "id": "plato-base-15x25-cambio-rapido" },
      { "id": "plato-base-15-5x25-5-cambio-rapido" },
      { "id": "plato-base-12x45-mangas-cambio-rapido" },
      { "id": "plato-base-15x50-pantalones-cambio-rapido" },
      { "id": "plato-base-zapatillas-cambio-rapido" },
      { "id": "plato-base-redondo-24-cambio-rapido" },
      { "id": "plato-base-gorras-cambio-rapido" },
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "almohadilla-silicona-40x50" },
      { "id": "lamina-teflon-40x50" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Eléctrica", "en": "Electric", "pt": "Elétrica", "it": "Elettrica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Eléctrica, estación de trabajo" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Automático, semiautomático, manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-13" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✓" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "3" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "2" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "40 x 50 cm" },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✓ (sistema cambio rápido)" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800 W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225 ℃" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Mesa con 4 ruedas universales (incluida)" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "2 (uno junto a cada plato)" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "Cierre de seguridad + sensor detector de manos integrado" }
    ],
    "benefits": [
      {
        "title": { "es": "100% eléctrica: di adiós al compresor", "en": "100% electric: say goodbye to the compressor" },
        "description": { "es": "Miranda no necesita compresor de aire. Funciona completamente con electricidad, lo que significa menos ruido, menos mantenimiento y total libertad de instalación en cualquier espacio.", "en": "Miranda needs no air compressor. It runs entirely on electricity — less noise, less maintenance, and total freedom to install it anywhere." },
        "icon": "Zap",
        "image": "/products/maquinas/miranda-prensa-termica-automatica-electrica/05.png"
      },
      {
        "title": { "es": "Funcionamiento totalmente autónomo", "en": "Fully autonomous operation" },
        "description": { "es": "Miranda hace el trabajo duro sola. Se mueve de un plato a otro y completa el proceso de planchado sin intervención. Tú solo colocas la siguiente prenda, con la ayuda de los láseres, y listo.", "en": "Miranda does the hard work on its own. It moves from one plate to the other and completes the pressing cycle without intervention. You just place the next garment — the lasers help you do it perfectly." },
        "icon": "Bot",
        "image": "/products/maquinas/miranda-prensa-termica-automatica-electrica/04.jpg"
      },
      {
        "title": { "es": "Doble plato con cambio rápido: que el ritmo no pare", "en": "Double plate with quick-change: keep the pace going" },
        "description": { "es": "Mientras un plato se plancha, preparas el siguiente. El sistema de intercambio rápido te permite cambiar de plato inferior tan rápido como lo exija tu producción, sin tiempo de inactividad.", "en": "While one plate is pressing, you prepare the next. The quick-change system lets you swap the lower plate as fast as your production demands, with no downtime." },
        "icon": "Layers",
        "image": "/products/maquinas/miranda-prensa-termica-automatica-electrica/05.png"
      },
      {
        "title": { "es": "Láseres de posicionamiento de nueva generación", "en": "Next-generation positioning lasers" },
        "description": { "es": "Dos láseres en cruz, uno junto a cada plato, para un registro milimétrico de cada diseño. Olvídate de las impresiones fuera de lugar y trabaja con la precisión de un experto.", "en": "Two cross lasers, one next to each plate, for millimeter-perfect registration of every design. Say goodbye to misaligned prints and work with expert-level precision." },
        "icon": "Target"
      },
      {
        "title": { "es": "Pantalla táctil GY-13 con 3 memorias", "en": "GY-13 touch display with 3 memories" },
        "description": { "es": "Configura tiempo y temperatura con un toque. Guarda hasta 3 perfiles de producción en memoria para cambiar de trabajo en segundos. Sin botones, sin complicaciones.", "en": "Set time and temperature with a touch. Save up to 3 production profiles in memory to switch jobs in seconds. No buttons, no complications." },
        "icon": "MousePointer2"
      },
      {
        "title": { "es": "Mesa con ruedas incluida", "en": "Wheeled table included" },
        "description": { "es": "Miranda viene integrada en un mueble de gran calidad con 4 ruedas universales con freno. Trabaja cómodamente y mueve la estación al lugar donde esté la acción.", "en": "Miranda comes integrated in a high-quality cabinet with 4 universal wheels with brakes. Work comfortably and move the workstation wherever the action is." },
        "icon": "Package"
      },
      {
        "title": { "es": "Seguridad total: cierre + sensor detector de manos", "en": "Total safety: lock + hand detection sensor" },
        "description": { "es": "La potencia sin control no sirve de nada. Miranda integra un cierre de seguridad y un sensor detector de manos para proteger al operario en todo momento durante el ciclo de producción.", "en": "Power without control is worthless. Miranda integrates a security lock and a hand detection sensor to protect the operator at all times during the production cycle." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Modo manual y semiautomático disponibles", "en": "Manual and semi-automatic modes available" },
        "description": { "es": "Para tus diseños más complejos, activa el modo manual o semiautomático y trabaja con total precisión. Miranda se adapta a tu ritmo y a la naturaleza de cada trabajo.", "en": "For your most complex designs, activate manual or semi-automatic mode and work with full precision. Miranda adapts to your pace and the nature of each job." },
        "icon": "Settings"
      }
    ],
    "hotspots": [
      {
        "x": 75.1, "y": 10.4,
        "title": { "es": "Láser de posicionamiento", "en": "Positioning laser" },
        "description": { "es": "Dos láseres en cruz integrados para alinear diseños con precisión milimétrica. Garantizan la colocación exacta de la prenda en cada ciclo sin necesidad de marcas físicas.", "en": "Two integrated cross lasers for millimeter-precise design alignment. Guarantee exact garment placement every cycle without physical marks." }
      },
      {
        "x": 26.5, "y": 18.3,
        "title": { "es": "Controlador táctil GY-13", "en": "GY-13 Touch Controller" },
        "description": { "es": "Control táctil con 3 memorias de producción, ajuste de velocidad de transición y modos automático, semiautomático y manual.", "en": "Touch control with 3 production memories, transition speed adjustment, and automatic, semi-automatic and manual modes." }
      },
      {
        "x": 22.6, "y": 24.0,
        "title": { "es": "Botón de desplazamiento", "en": "Scroll button" },
        "description": { "es": "Controla el movimiento horizontal de la prensa de un plato al otro para gestionar el ciclo de producción de forma rápida y precisa.", "en": "Controls the horizontal movement of the press from one plate to the other to manage the production cycle quickly and precisely." }
      },
      {
        "x": 34.3, "y": 24.3,
        "title": { "es": "Botón", "en": "Button" },
        "description": { "es": "Botón de control integrado en el panel de operación para gestionar funciones de ciclo y seguridad durante la producción.", "en": "Control button integrated in the operation panel for managing cycle and safety functions during production." }
      },
      {
        "x": 32.8, "y": 43.6,
        "title": { "es": "Platos intercambiables con cambio rápido", "en": "Interchangeable quick-change plates" },
        "description": { "es": "Dos platos de 40×50 cm con sistema de cambio rápido. Mientras uno plancha, preparas el siguiente para maximizar la productividad y reducir el tiempo de inactividad.", "en": "Two 40×50 cm plates with quick-change system. While one presses, you prepare the next to maximize productivity and reduce downtime." }
      },
      {
        "x": 67.6, "y": 47.5,
        "title": { "es": "Amplio espacio de trabajo", "en": "Large workspace" },
        "description": { "es": "Superficie de trabajo generosa que facilita la colocación y preparación de prendas con total comodidad, reduciendo la fatiga en jornadas largas de producción continua.", "en": "Generous workspace that makes garment placement and preparation fully comfortable, reducing fatigue during long continuous production sessions." }
      },
      {
        "x": 47.6, "y": 52.9,
        "title": { "es": "Modo manual y semiautomático", "en": "Manual and semi-automatic mode" },
        "description": { "es": "Selecciona el modo de operación según el trabajo: automático para producción en serie, semiautomático para mayor control o manual para trabajos que requieren atención especial.", "en": "Select the operating mode to suit the job: automatic for batch production, semi-automatic for greater control, or manual for jobs requiring special attention." }
      }
    ],
    "storySegments": [
      {
        "title": { "es": "Funcionamiento totalmente autónomo", "en": "Fully autonomous operation" },
        "description": { "es": "Miranda hace el trabajo duro. Se mueve sola de plato en plato, plancha sin intervención y te deja libre para colocar la siguiente prenda. Con los láseres lo harás con precisión absoluta.", "en": "Miranda does the hard work. It moves on its own from plate to plate, presses without intervention, and leaves you free to place the next garment. The lasers let you do it with absolute precision." },
        "image": "https://beinsen.com/wp-content/uploads/2025/07/miranda-principal.png"
      },
      {
        "title": { "es": "Que el ritmo no pare", "en": "Keep the pace going" },
        "description": { "es": "El sistema de intercambio rápido de platos inferiores te permite cambiar de formato tan rápido como lo exige tu producción. Reduce el tiempo de inactividad al mínimo y maximiza la productividad.", "en": "The quick-change lower plate system lets you switch formats as fast as your production demands. Minimize downtime and maximize productivity." },
        "image": "https://beinsen.com/wp-content/uploads/2025/07/miranda-principal.png"
      },
      {
        "title": { "es": "Todo controlado al milímetro", "en": "Everything controlled to the millimeter" },
        "description": { "es": "La pantalla táctil GY-13 con 3 memorias y los dos láseres de posicionamiento garantizan que cada prenda salga perfecta. Y cuando el trabajo lo requiere, el modo manual te da control total.", "en": "The GY-13 touch display with 3 memories and the two positioning lasers ensure every garment comes out perfect. And when the job requires it, manual mode gives you total control." },
        "image": "https://beinsen.com/wp-content/uploads/2025/07/miranda-principal.png"
      }
    ],
    "downloads": [
      { "label": { "es": "Manual de Usuario Miranda", "en": "Miranda User Manual" }, "url": "/downloads/miranda-manual.pdf" },
      { "label": { "es": "Ficha Técnica Miranda", "en": "Miranda Technical Sheet" }, "url": "/downloads/miranda-ficha-tecnica.pdf" }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues la máquina inmediatamente: la placa de calor está demasiado caliente, deja que enfríe.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos cuando se deterioren.",
        "Verificación y ajuste de la presión periódicamente.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura con termómetro externo.",
        "Revisión de los sensores de seguridad y del detector de manos."
      ],
      "en": [
        "Do not turn off the machine immediately: the heating plate is too hot, let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings when worn.",
        "Periodic pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration with external thermometer.",
        "Inspection of safety sensors and hand detection sensor."
      ]
    }
  },
  {
    "id": "chicago-plancha-termica-automatica",
    "slug": "chicago-plancha-termica-automatica",
    "name": {
      "es": "Chicago Plancha Térmica Automática",
      "en": "Chicago Automatic Heat Press",
      "pt": "Chicago Prensa Térmica Automática",
      "it": "Chicago Pressa Termica Automatica"
    },
    "description": {
      "es": "Chicago es una plancha térmica automática profesional con un tamaño idóneo: compacta para que el espacio no sea un problema, con características premium que te ofrecen un aliado potente y preciso perfecto para usuarios exigentes que buscan resultados consistentes.",
      "en": "Chicago is a professional automatic heat press with an ideal size — compact so space is never an issue, with premium features that make it a powerful and precise ally for demanding users seeking consistent results.",
      "pt": "Chicago é uma prensa térmica automática profissional com tamanho ideal: compacta para que o espaço não seja um problema, com características premium que a tornam uma aliada poderosa e precisa.",
      "it": "Chicago è una pressa termica automatica professionale di dimensioni ideali: compatta per non avere problemi di spazio, con caratteristiche premium che la rendono un'alleata potente e precisa."
    },
    "image": "https://beinsen.com/wp-content/uploads/2024/01/chicago-beinsen.png",
    "price": "Consultar PVP",
    "size": { "es": "Compacta", "en": "Compact", "pt": "Compacta", "it": "Compatta" },
    "features": {
      "es": [
        "Apertura y cierre automático neumático",
        "Placa fija de 40x50cm con grosor imprimible hasta 35mm",
        "Controlador digital GY-06 con modo eco y precalentamiento"
      ],
      "en": [
        "Pneumatic automatic opening and closing",
        "Fixed 40x50cm plate with up to 35mm printable thickness",
        "GY-06 digital controller with eco mode and preheating"
      ],
      "pt": [
        "Abertura e fecho automático pneumático",
        "Placa fixa de 40x50cm com espessura imprimível até 35mm",
        "Controlador digital GY-06 com modo eco e pré-aquecimento"
      ],
      "it": [
        "Apertura e chiusura automatica pneumatica",
        "Piastra fissa 40x50cm con spessore stampabile fino a 35mm",
        "Controller digitale GY-06 con modalità eco e preriscaldamento"
      ]
    },
    "accessories": [
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-silicona-40x50" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "mesa-universal-grande" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Automática", "en": "Automatic", "pt": "Automática", "it": "Automatica" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Chicago" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Eléctrico" },
      { "label": { "es": "Ángulo de apertura", "en": "Opening Angle" }, "value": "60°" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Automático" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Automático" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Fija" },
      { "label": { "es": "Tamaño de resistencia", "en": "Heating Element Size" }, "value": "40 x 50 cm" },
      { "label": { "es": "Grosor máximo imprimible", "en": "Max Printable Thickness" }, "value": "35 mm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-06" },
      { "label": { "es": "Precisión del controlador", "en": "Controller Precision" }, "value": "±0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-99 seg." },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225 ℃" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.8 kW" },
      { "label": { "es": "Amperaje", "en": "Amperage" }, "value": "22 A" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "43 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "63 x 40 x 42 cm" }
    ],
    "benefits": [
      {
        "title": { "es": "Compacta sin renunciar a la potencia", "en": "Compact without sacrificing power" },
        "description": { "es": "Chicago combina un tamaño reducido con unas prestaciones de nivel profesional. Ideal para talleres donde el espacio es limitado pero la exigencia de calidad no lo es.", "en": "Chicago combines a compact footprint with professional-level performance. Ideal for workshops where space is limited but quality demands are not." },
        "icon": "Maximize",
        "image": "/products/maquinas/chicago-plancha-termica-automatica/02.png"
      },
      {
        "title": { "es": "Apertura y cierre automático", "en": "Automatic opening and closing" },
        "description": { "es": "Su sistema neumático de apertura y cierre automático elimina errores de operador y mantiene una presión perfectamente uniforme en cada ciclo.", "en": "Its pneumatic automatic opening and closing system eliminates operator errors and maintains perfectly uniform pressure every cycle." },
        "icon": "Zap",
        "image": "/products/maquinas/chicago-plancha-termica-automatica/03.png"
      },
      {
        "title": { "es": "Sublima materiales de hasta 35mm de grosor", "en": "Sublimate materials up to 35mm thick" },
        "description": { "es": "Gracias a su placa de gran recorrido, Chicago puede trabajar con prácticamente cualquier material: camisetas, sudaderas, mochilas, artículos rígidos y mucho más.", "en": "Thanks to its wide-travel plate, Chicago can handle virtually any material: t-shirts, hoodies, backpacks, rigid items, and much more." },
        "icon": "Layers",
        "image": "/products/maquinas/chicago-plancha-termica-automatica/05.png"
      },
      {
        "title": { "es": "Base deslizante para mayor comodidad", "en": "Sliding base for greater comfort" },
        "description": { "es": "La base deslizante permite cargar y descargar prendas sin esfuerzo y con total comodidad, reduciendo la fatiga durante las jornadas largas de producción.", "en": "The sliding base allows you to load and unload garments effortlessly and comfortably, reducing fatigue during long production sessions." },
        "icon": "ArrowRight",
        "image": "/products/maquinas/chicago-plancha-termica-automatica/01.png"
      },
      {
        "title": { "es": "Ajuste automático de presión", "en": "Automatic pressure adjustment" },
        "description": { "es": "Chicago regula la presión de forma automática, evitando fallos por exceso o defecto y garantizando resultados perfectos en cada artículo independientemente de su grosor.", "en": "Chicago adjusts pressure automatically, preventing failures from excess or insufficient pressure and guaranteeing perfect results on every item regardless of thickness." },
        "icon": "Target"
      },
      {
        "title": { "es": "Controlador GY-06 de última generación", "en": "Next-generation GY-06 controller" },
        "description": { "es": "Gestiona toda la plancha desde el controlador GY-06: temperatura, tiempo, modo eco, precalentamiento y pantalla digital, todo en una interfaz fácil e intuitiva.", "en": "Manage the entire press from the GY-06 controller: temperature, time, eco mode, preheating, and digital display, all in an easy and intuitive interface." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Botón de parada de emergencia", "en": "Emergency stop button" },
        "description": { "es": "La seguridad es primordial en Chicago. El botón de parada de emergencia te permite detener el proceso al instante si fuera necesario, protegiendo tanto al operario como al material.", "en": "Safety is paramount in Chicago. The emergency stop button lets you halt the process instantly if needed, protecting both the operator and the material." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Certificación CE", "en": "CE certification" },
        "description": { "es": "La calidad y seguridad de Chicago están garantizadas por los estándares CE, asegurando un funcionamiento confiable, duradero y alineado con la normativa europea.", "en": "Chicago's quality and safety are guaranteed by CE standards, ensuring reliable, durable operation aligned with European regulations." },
        "icon": "BadgeCheck"
      }
    ],
    "hotspots": [
      { "x": 40.5, "y": 11.4, "title": { "es": "Controlador digital GY-06", "en": "GY-06 digital controller" }, "description": { "es": "Pantalla digital con control de tiempo, temperatura, modo eco y precalentamiento para una producción precisa y eficiente.", "en": "Digital display with time, temperature, eco mode, and preheating controls for precise and efficient production." } },
      { "x": 43.1, "y": 62.8, "title": { "es": "Placa calefactora 40x50cm", "en": "40x50cm heating plate" }, "description": { "es": "Resistencia fija de gran superficie con distribución de calor uniforme. Permite trabajar con materiales de hasta 35mm de grosor.", "en": "Large fixed heating element with uniform heat distribution. Works with materials up to 35mm thick." } },
      { "x": 28.9, "y": 83.1, "title": { "es": "Asa de la base deslizante", "en": "Sliding base handle" }, "description": { "es": "Permite desplazar la base de trabajo fácilmente para cargar y descargar prendas con total comodidad y sin esfuerzo.", "en": "Allows sliding the work base easily to load and unload garments comfortably and effortlessly." } }
    ],
    "downloads": [
      { "label": { "es": "Manual de Usuario", "en": "User Manual" }, "url": "/downloads/chicago-manual.pdf" },
      { "label": { "es": "Ficha Técnica", "en": "Technical Sheet" }, "url": "/downloads/chicago-ficha-tecnica.pdf" }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos cuando se deterioren.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura con termómetro externo.",
        "Revisión periódica del sistema neumático y sus conexiones."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings when worn.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration with external thermometer.",
        "Periodic inspection of the pneumatic system and its connections."
      ]
    }
  },
  {
    "id": "luanda-plancha-termica-automatica",
    "slug": "luanda-plancha-termica-automatica",
    "name": {
      "es": "Luanda Plancha Térmica Automática",
      "en": "Luanda Automatic Heat Press",
      "pt": "Luanda Prensa Térmica Automática",
      "it": "Luanda Pressa Termica Automatica"
    },
    "description": {
      "es": "Luanda es una plancha térmica automática profesional con un tamaño idóneo: compacta para que el espacio no sea un problema, con características premium que te ofrecen un aliado potente y preciso perfecto para usuarios exigentes que buscan resultados consistentes.",
      "en": "Luanda is a professional automatic heat press with an ideal size — compact so space is never an issue, with premium features that make it a powerful and precise ally for demanding users seeking consistent results.",
      "pt": "Luanda é uma prensa térmica automática profissional com tamanho ideal: compacta para que o espaço não seja um problema, com características premium que a tornam uma aliada poderosa e precisa.",
      "it": "Luanda è una pressa termica automatica professionale di dimensioni ideali: compatta per non avere problemi di spazio, con caratteristiche premium che la rendono un'alleata potente e precisa."
    },
    "image": "https://beinsen.com/wp-content/uploads/2024/01/luanda-beinsen.png",
    "price": "Consultar PVP",
    "size": { "es": "Compacta", "en": "Compact", "pt": "Compacta", "it": "Compatta" },
    "features": {
      "es": [
        "Apertura y cierre automático neumático con ángulo de 25°",
        "Placa fija de 40x50cm con grosor imprimible hasta 68mm",
        "Controlador digital GY-06 con modo eco, precalentamiento y base deslizante"
      ],
      "en": [
        "Pneumatic automatic opening and closing at 25° angle",
        "Fixed 40x50cm plate with up to 68mm printable thickness",
        "GY-06 digital controller with eco mode, preheating and sliding base"
      ],
      "pt": [
        "Abertura e fecho automático pneumático com ângulo de 25°",
        "Placa fixa de 40x50cm com espessura imprimível até 68mm",
        "Controlador digital GY-06 com modo eco, pré-aquecimento e base deslizante"
      ],
      "it": [
        "Apertura e chiusura automatica pneumatica con angolo di 25°",
        "Piastra fissa 40x50cm con spessore stampabile fino a 68mm",
        "Controller digitale GY-06 con modalità eco, preriscaldamento e base scorrevole"
      ]
    },
    "accessories": [
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-silicona-40x50" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "mesa-universal-grande" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Automática", "en": "Automatic", "pt": "Automática", "it": "Automatica" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Luanda" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Neumática" },
      { "label": { "es": "Ángulo de apertura", "en": "Opening Angle" }, "value": "25°" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Automático" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Automático" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Fija" },
      { "label": { "es": "Tamaño de resistencia", "en": "Heating Element Size" }, "value": "40 x 50 cm" },
      { "label": { "es": "Grosor máximo imprimible", "en": "Max Printable Thickness" }, "value": "68 mm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-06" },
      { "label": { "es": "Precisión del controlador", "en": "Controller Precision" }, "value": "±0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-99 seg." },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225 ℃" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "110V / 220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "2.500 W" },
      { "label": { "es": "Amperaje", "en": "Amperage" }, "value": "22 A" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "62,75 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "77 x 53 x 75 cm" }
    ],
    "benefits": [
      {
        "title": { "es": "Compacta sin renunciar a la potencia", "en": "Compact without sacrificing power" },
        "description": { "es": "Luanda combina un tamaño reducido con unas prestaciones de nivel profesional. Ideal para talleres donde el espacio es limitado pero la exigencia de calidad no lo es.", "en": "Luanda combines a compact footprint with professional-level performance. Ideal for workshops where space is limited but quality demands are not." },
        "icon": "Maximize"
      },
      {
        "title": { "es": "Apertura y cierre automático neumático", "en": "Pneumatic automatic opening and closing" },
        "description": { "es": "Su sistema neumático de apertura y cierre automático elimina errores de operador y mantiene una presión perfectamente uniforme en cada ciclo de producción.", "en": "Its pneumatic automatic opening and closing system eliminates operator errors and maintains perfectly uniform pressure every production cycle." },
        "icon": "Wind"
      },
      {
        "title": { "es": "Sublima materiales de hasta 68mm de grosor", "en": "Sublimate materials up to 68mm thick" },
        "description": { "es": "Gracias a su gran recorrido de placa, Luanda puede personalizar prácticamente cualquier material: camisetas, sudaderas, mochilas, artículos rígidos y objetos voluminosos.", "en": "Thanks to its wide plate travel, Luanda can customize virtually any material: t-shirts, hoodies, backpacks, rigid items, and bulky objects." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Base deslizante para mayor comodidad", "en": "Sliding base for greater comfort" },
        "description": { "es": "La base deslizante permite cargar y descargar prendas sin esfuerzo, reduciendo la fatiga durante las jornadas largas de producción continua.", "en": "The sliding base allows you to load and unload garments effortlessly, reducing fatigue during long continuous production sessions." },
        "icon": "ArrowRight"
      },
      {
        "title": { "es": "Ajuste automático de presión", "en": "Automatic pressure adjustment" },
        "description": { "es": "Luanda regula la presión de forma automática, evitando fallos por exceso o defecto y garantizando resultados perfectos en cada artículo independientemente de su grosor.", "en": "Luanda automatically adjusts pressure, preventing failures from excess or insufficient pressure and guaranteeing perfect results on every item regardless of thickness." },
        "icon": "Target"
      },
      {
        "title": { "es": "Controlador GY-06 con modo eco y precalentamiento", "en": "GY-06 controller with eco mode and preheating" },
        "description": { "es": "Gestiona temperatura, tiempo, modo eco y precalentamiento desde una interfaz fácil e intuitiva. Ahorra energía y reduce tiempos de espera entre ciclos.", "en": "Manage temperature, time, eco mode and preheating from an easy, intuitive interface. Save energy and reduce wait times between cycles." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Botón de parada de emergencia", "en": "Emergency stop button" },
        "description": { "es": "La seguridad es primordial en Luanda. El botón de parada de emergencia detiene el proceso al instante si fuera necesario, protegiendo al operario y al material.", "en": "Safety is paramount in Luanda. The emergency stop button halts the process instantly if needed, protecting both the operator and the material." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Certificación CE", "en": "CE certification" },
        "description": { "es": "La calidad y seguridad de Luanda están garantizadas por los estándares CE, asegurando un funcionamiento confiable, duradero y alineado con la normativa europea.", "en": "Luanda's quality and safety are guaranteed by CE standards, ensuring reliable, durable operation aligned with European regulations." },
        "icon": "BadgeCheck"
      }
    ],
    "hotspots": [
      {
        "x": 40, "y": 14,
        "title": { "es": "Controlador digital GY-06", "en": "GY-06 Digital Controller" },
        "description": { "es": "Panel digital con temporizador 0-99 seg., temperatura máxima 225°C, precisión ±0,5%, modo eco y función de precalentamiento. Gestión intuitiva de todos los parámetros de producción.", "en": "Digital panel with 0-99 sec. timer, 225°C maximum temperature, ±0.5% accuracy, eco mode and preheating function. Intuitive management of all production parameters." }
      },
      {
        "x": 41, "y": 23,
        "title": { "es": "Botón de parada de emergencia", "en": "Emergency stop button" },
        "description": { "es": "Detiene el proceso al instante en caso de emergencia, protegiendo al operario y al material. Componente de seguridad certificado bajo estándar CE.", "en": "Halts the process instantly in an emergency, protecting both operator and material. Safety component certified to CE standard." }
      },
      {
        "x": 31, "y": 26,
        "title": { "es": "Botón ON/OFF", "en": "ON/OFF button" },
        "description": { "es": "Interruptor principal de encendido y apagado que corta completamente la alimentación de la máquina. Acceso directo y ergonómico para un uso seguro.", "en": "Main power on/off switch that fully cuts the machine's power supply. Direct ergonomic access for safe operation." }
      },
      {
        "x": 79, "y": 42,
        "title": { "es": "Sistema de gas neumático", "en": "Pneumatic gas system" },
        "description": { "es": "Sistema neumático de apertura y cierre automático con ángulo de 25°. Garantiza una presión perfectamente uniforme en cada ciclo y elimina la variabilidad del operario.", "en": "Pneumatic automatic opening and closing system with a 25° angle. Guarantees perfectly uniform pressure every cycle and eliminates operator variability." }
      },
      {
        "x": 27, "y": 46,
        "title": { "es": "Difusor de calor", "en": "Heat diffuser" },
        "description": { "es": "Sistema de distribución uniforme del calor que asegura una temperatura homogénea en toda la superficie de la placa, evitando puntos fríos o calientes que afecten la calidad del transfer.", "en": "Uniform heat distribution system that ensures a homogeneous temperature across the entire plate surface, avoiding cold or hot spots that affect transfer quality." }
      },
      {
        "x": 33, "y": 63,
        "title": { "es": "Placa calefactora 40×50 cm", "en": "40×50 cm heating plate" },
        "description": { "es": "Resistencia fija de 40×50 cm con distribución de calor uniforme y potencia de 2.500 W. Admite materiales de hasta 68 mm de grosor para versatilidad máxima.", "en": "Fixed 40×50 cm heating element with uniform heat distribution and 2,500 W power. Handles materials up to 68 mm thick for maximum versatility." }
      },
      {
        "x": 32, "y": 82,
        "title": { "es": "Bandeja extraíble", "en": "Removable tray" },
        "description": { "es": "Bandeja inferior extraíble y deslizante que facilita la colocación precisa de prendas y materiales. Reduce la fatiga en jornadas largas y mejora la eficiencia del flujo de trabajo.", "en": "Removable sliding lower tray that enables precise garment and material placement. Reduces fatigue during long sessions and improves workflow efficiency." }
      }
    ],
    "downloads": [
      { "label": { "es": "Manual de Usuario Luanda", "en": "Luanda User Manual" }, "url": "/downloads/luanda-manual.pdf" },
      { "label": { "es": "Ficha Técnica Luanda", "en": "Luanda Technical Sheet" }, "url": "/downloads/luanda-ficha-tecnica.pdf" }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos cuando se deterioren.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura.",
        "Revisión periódica del sistema neumático y sus conexiones."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings when worn.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration.",
        "Periodic inspection of the pneumatic system and its connections."
      ]
    }
  },
  {
    "id": "belice-plancha-termica-textil",
    "slug": "belice-plancha-termica-textil",
    "name": {
      "es": "Belice Plancha Térmica Textil",
      "en": "Belice Heat Press",
      "pt": "Belice Prensa Térmica Textil",
      "it": "Belice Pressa Termica Tessile"
    },
    "description": {
      "es": "Adéntrate en el mundo de la personalización con nuestra plancha transfer manual Beinsen Belice. Encuentra la belleza de la simplicidad y la satisfacción de las cosas que hacen exactamente lo que tienen que hacer. Cortita y al pie, para todos los públicos y todos los bolsillos. Y en versión de 38×38 y de 40x50cm.",
      "en": "Belice textile heat press designed for daily jobs with consistent results and simple operation.",
      "pt": "Prensa térmica têxtil Belice desenhada para trabalhos diários com resultados consistentes.",
      "it": "Pressa termica tessile Belice progettata per lavori quotidiani con risultati costanti."
    },
    "image": "https://beinsen.com/wp-content/uploads/2023/11/Belice-Sin-Fondo-5.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Formato textil versátil",
        "Control preciso de tiempo y temperatura",
        "Ideal para producción diaria"
      ],
      "en": [
        "Versatile textile format",
        "Precise time and temperature control",
        "Ideal for daily production"
      ]
    },
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "mesa-universal-grande" },
      { "id": "guantes-protectores-algodon" },
      { "id": "lamina-teflon-38x38" },
      { "id": "almohadilla-silicona-38x38" },
      { "id": "lamina-teflon-40x50" },
      { "id": "almohadilla-silicona-40x50" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Plancha-Belice", "en": "User Manual - Plancha-Belice" }, "url": "/downloads/belice-plancha-termica-textil/Plancha-Belice.pdf" }
    ],
        "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Manual" },
      { "label": { "es": "Grosor máximo del personalizable", "en": "Max Customizable Thickness" }, "value": "20mm." },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-06" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "38×38 o 40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✗" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "43Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "49Kg." },
      { "label": { "es": "Tamaño de la máquina", "en": "Machine Size" }, "value": "71x40x50cm" },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "94x57x57cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "✗" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "✗" }
    ],
    "benefits": [
      {
        "title": { "es": "Plancha sin parar", "en": "Press without stopping" },
        "description": { "es": "La simplicidad no significa fragilidad sino todo lo contrario. Con tu nueva plancha transfer Beinsen Belice no querrás dejar de planchar todo lo que se ponga a tu alcance, y gracias a su construcción robusta, además, no tendrás que hacerlo.", "en": "Simplicity does not mean fragility. With your new Beinsen Belice transfer press, robust construction supports continuous pressing jobs." },
        "icon": "Zap",
        "image": "/products/maquinas/belice-plancha-termica-textil/03.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Esas pequeñas cosas", "en": "Those little details" },
        "description": { "es": "Tu plancha es una compañera de trabajo de vital importancia para ti. Precisamente por eso necesitas que sea una herramienta cómoda que te permita centrarte en el resto de aspectos de la personalización.", "en": "Your press is a key work companion, so it is designed to be comfortable and let you focus on the rest of the personalization workflow." },
        "icon": "Settings",
        "objectFit": "contain"
      }
    ],
    "hotspots": [
      { "x": 41.9, "y": 8.2,  "title": { "es": "Mango ergonómico",                                        "en": "Ergonomic handle" },                                      "description": { "es": "", "en": "" } },
      { "x": 26.1, "y": 51.5, "title": { "es": "Controlador digital avanzado GY-06",                      "en": "Advanced digital controller GY-06" },                     "description": { "es": "", "en": "" } },
      { "x": 47.3, "y": 66.9, "title": { "es": "Amplio ángulo de apertura",                               "en": "Wide opening angle" },                                    "description": { "es": "", "en": "" } },
      { "x": 33.2, "y": 71.5, "title": { "es": "Resorte de gas",                                          "en": "Gas spring" },                                            "description": { "es": "", "en": "" } },
      { "x": 71.0, "y": 86.3, "title": { "es": "Platos intercambiables con sistema de cambio rápido",    "en": "Interchangeable plates with quick-change system" },        "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately, the heating plate is too hot.",
        "If you turn off the compressor, the hot heating plate may close and press against the lower plate, which can burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
  },
  {
    "id": "barbados-plancha-termica-textil",
    "slug": "barbados-plancha-termica-textil",
    "name": {
      "es": "Barbados Plancha Térmica Textil",
      "en": "Barbados Heat Press",
      "pt": "Barbados Prensa Térmica Textil",
      "it": "Barbados Pressa Termica Tessile"
    },
    "description": {
      "es": "La plancha transfer para camisetas Beinsen Barbados es la amiga que nunca falla. Desarrollada desde la experiencia y con el objetivo de ofrecer un producto robusto, duradero, fiable y equilibrado, esta prensa térmica disponible con platos de 38×38 y de 40x50cm. extraibles e intercambiables te permite hacer de todo y para todos los públicos.",
      "en": "Barbados textile heat press aimed at workshops seeking stability and performance.",
      "pt": "Prensa térmica têxtil Barbados para oficinas que procuram estabilidade e desempenho.",
      "it": "Pressa termica tessile Barbados pensata per laboratori che cercano stabilità e rendimento."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/02/barbadiss-1.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Construcción robusta",
        "Uso continuo en textil",
        "Resultados uniformes"
      ],
      "en": [
        "Robust construction",
        "Continuous textile use",
        "Uniform results"
      ]
    },
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "mesa-universal-grande" },
      { "id": "plato-intercambiable-18x18-barbados" },
      { "id": "plato-intercambiable-zapatillas-barbados" },
      { "id": "plato-intercambiable-18x38-barbados" },
      { "id": "plato-intercambiable-redondo-24-barbados" },
      { "id": "plato-intercambiable-30x35-barbados" },
      { "id": "lamina-teflon-38x38" },
      { "id": "almohadilla-silicona-38x38" },
      { "id": "lamina-teflon-40x50" },
      { "id": "almohadilla-silicona-40x50" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Manual-Barbados", "en": "User Manual - Manual-Barbados" }, "url": "/downloads/barbados-plancha-termica-textil/Manual-Barbados.pdf" }
    ],
        "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Electromagnética", "en": "Electromagnetic", "pt": "Eletromagnética", "it": "Elettromagnetica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Apertura automática y cierre manual" },
      { "label": { "es": "Ángulo de apertura", "en": "Opening Angle" }, "value": "45º" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-06" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "38×38 o 40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✓" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "27,40Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "43,40Kg." },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "92x52x51cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "✗" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "✗" }
    ],
    "benefits": [
      {
        "title": { "es": "Electromagnética", "en": "Electromagnetic" },
        "description": { "es": "Su sistema electromagnético simplifica la apertura al terminar el ciclo y mejora la experiencia de uso en producción continua.", "en": "Its electromagnetic system simplifies opening at cycle end and improves continuous production workflow." },
        "icon": "Zap",
        "image": "/products/maquinas/barbados-plancha-termica-textil/06.png"
      },
      {
        "title": { "es": "Contador de presión", "en": "Pressure counter" },
        "description": { "es": "Aplica presión con mayor precisión gracias al contador manual para repetir configuraciones con seguridad.", "en": "Apply pressure more precisely with the manual counter to repeat settings reliably." },
        "icon": "Gauge",
        "image": "/products/maquinas/barbados-plancha-termica-textil/09.png"
      },
      {
        "title": { "es": "Bandeja extraíble", "en": "Pull-out tray" },
        "description": { "es": "Desliza la bandeja inferior hacia ti y gana espacio para colocar prendas en segundos con mayor comodidad.", "en": "Slide the lower tray toward you to gain space and place garments in seconds more comfortably." },
        "icon": "PanelBottom",
        "image": "/products/maquinas/barbados-plancha-termica-textil/010.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" },
        "description": { "es": "Incluye sistema de intercambio rápido para el plato inferior, reduciendo tiempos muertos y mejorando productividad.", "en": "Includes a quick-change lower plate system that reduces downtime and boosts productivity." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Controlador digital", "en": "Digital controller" },
        "description": { "es": "Controla tiempo y temperatura de forma precisa con el controlador digital para mantener resultados consistentes.", "en": "Control time and temperature precisely with the digital controller for consistent outcomes." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Pensada para perdurar", "en": "Built to last" },
        "description": { "es": "Sus materiales de alta calidad y duración te garantizan un rendimiento superior durante años.", "en": "High-quality, long-lasting materials ensure superior performance for years." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Comodidad ante todo", "en": "Comfort first" },
        "description": { "es": "Fiabilidad y comodidad van de la mano en tu Beinsen Barbados para que te centres en personalizar sin complicaciones.", "en": "Reliability and comfort go hand in hand so you can focus on personalization without friction." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Que el ritmo no pare", "en": "Keep the pace going" },
        "description": { "es": "Trabaja más, mejor y más cómodo gracias a su diseño orientado a una producción textil ágil.", "en": "Work more, better, and more comfortably with a design focused on agile textile production." },
        "icon": "Target"
      },
      {
        "title": { "es": "Dale una vuelta", "en": "Give it a turn" },
        "description": { "es": "Ajusta presión de forma rápida y abre fácilmente al finalizar gracias al electroimán incorporado.", "en": "Adjust pressure quickly and open effortlessly at cycle end thanks to the built-in electromagnet." },
        "icon": "RotateCw"
      }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components."
      ]
    },
    "hotspots": [
      { "x": 52.6, "y": 37.6, "title": { "es": "Apertura automática con electroimán",                      "en": "Automatic opening with electromagnet" },            "description": { "es": "", "en": "" } },
      { "x": 55.2, "y": 47.9, "title": { "es": "Contador manual de presión",                                "en": "Manual pressure gauge" },                          "description": { "es": "", "en": "" } },
      { "x": 33.2, "y": 52.6, "title": { "es": "Controlador digital avanzado GY-06",                        "en": "Advanced GY-06 digital controller" },               "description": { "es": "", "en": "" } },
      { "x": 59.3, "y": 73.9, "title": { "es": "Platos intercambiables con sistema de cambio rápido",       "en": "Interchangeable plates with quick-change system" },  "description": { "es": "", "en": "" } },
      { "x": 41.9, "y": 81.7, "title": { "es": "Amortiguador neumático",                                     "en": "Pneumatic damper" },                                "description": { "es": "", "en": "" } },
      { "x": 69.1, "y": 82.2, "title": { "es": "Bandeja deslizable",                                         "en": "Sliding tray" },                                    "description": { "es": "", "en": "" } }
    ]
  },
  {
    "id": "alaska-plancha-termica-textil",
    "slug": "alaska-plancha-termica-textil",
    "name": {
      "es": "Alaska Plancha Térmica Textil",
      "en": "Alaska Heat Press",
      "pt": "Alaska Prensa Térmica Textil",
      "it": "Alaska Pressa Termica Tessile"
    },
    "description": {
      "es": "Olvídate de palancas, olvídate de girar roscas, olvídate de hacer raros escorzos para colocar una prenda, y olvídate también de que tu prensa térmica ocupe un espacio innecesario, tu nueva plancha transfer Beinsen Alaska está pensada para ofrecerte versatilidad de la manera más cómoda. Y ahora disponible en tamaño 38×38 y 40x50cm.",
      "en": "Alaska textile heat press ready for custom production with agile workflow.",
      "pt": "Prensa térmica têxtil Alaska pronta para produção personalizada com fluxo ágil.",
      "it": "Pressa termica tessile Alaska pronta per produzioni personalizzate con flusso agile."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/04/alaska-featured-final.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Diseño compacto y funcional",
        "Configuración rápida",
        "Adaptada a múltiples prendas"
      ],
      "en": [
        "Compact and functional design",
        "Fast setup",
        "Adapted to multiple garments"
      ]
    },
    "accessories": [
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "mesa-universal-grande" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Guia-de-usuario-Alaska-v1.0-", "en": "User Manual - Guia-de-usuario-Alaska-v1.0-" }, "url": "/downloads/alaska-plancha-termica-textil/Guia-de-usuario-Alaska-v1.0-.pdf" }
    ],
        "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Eléctrica", "en": "Electric", "pt": "Elétrica", "it": "Elettrica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Automático con energía eléctrica" },
      { "label": { "es": "Presión", "en": "Pressure" }, "value": "Automática" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-13" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✓" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "3" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "38×38 o 40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✗" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "230ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "39Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "46Kg." },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "75x52x50cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "✗" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "✗" }
    ],
    "benefits": [
      {
        "title": { "es": "Calor uniforme", "en": "Uniform heat" },
        "description": { "es": "Hemos mejorado la placa calefactora con una nueva resistencia más avanzada, gruesa y pesada que mejora el reparto de presión y calor. Esta innovación, junto con la alfombrilla de última generación, hace que tu Beinsen Alaska sea más eficiente y económica que nunca.", "en": "We have upgraded the heating plate with a new, more advanced, thicker and heavier element that significantly improves pressure and heat distribution. This innovation, combined with the latest-generation pad, makes your Beinsen Alaska more efficient and economical than ever." },
        "icon": "Target",
        "image": "/products/maquinas/alaska-plancha-termica-textil/02.png"
      },
      {
        "title": { "es": "Cómoda y compacta", "en": "Comfortable and compact" },
        "description": { "es": "Todo pensado para tu comodidad. Aprovecha la bandeja inferior deslizante para colocar la prenda con facilidad gracias al gran espacio de maniobra y luego… nada de palancas… pulsa los botones laterales y tu nueva Beinsen Alaska hará lo suyo. Como tener una plancha neumática pero sin compresor.", "en": "Everything designed for your comfort. Use the sliding lower tray to place garments easily with plenty of maneuvering space — then no levers, just press the side buttons and let the Beinsen Alaska do its job. Like having a pneumatic press but without the compressor." },
        "icon": "Settings",
        "image": "/products/maquinas/alaska-plancha-termica-textil/07.png"
      },
      {
        "title": { "es": "Pantalla táctil", "en": "Touch display" },
        "description": { "es": "El nuevo controlador táctil simplifica la configuración y el control de cada trabajo.", "en": "The new touch controller simplifies setup and job control." },
        "icon": "MousePointer2",
        "image": "/products/maquinas/alaska-plancha-termica-textil/03.png"
      },
      {
        "title": { "es": "Eléctrica", "en": "Electric" },
        "description": { "es": "Disfruta de funcionamiento automático eléctrico con una experiencia de uso cómoda y sin complicaciones.", "en": "Enjoy electric automatic operation with a smooth and hassle-free user experience." },
        "icon": "Zap",
        "image": "/products/maquinas/alaska-plancha-termica-textil/06.png"
      }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately, the heating plate is too hot.",
        "If you turn off the compressor, the hot heating plate may close and press against the lower plate, which can burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    },
    "hotspots": [
      { "x": 45.7, "y": 24.5, "title": { "es": "Pantalla táctil", "en": "Touch screen" }, "description": { "es": "", "en": "" } },
      { "x": 54.2, "y": 26.6, "title": { "es": "Bajada automática con botones laterales", "en": "Automatic lowering with side buttons" }, "description": { "es": "", "en": "" } },
      { "x": 48.9, "y": 42.2, "title": { "es": "Nueva resistencia de alta tecnología", "en": "New high-technology heating element" }, "description": { "es": "", "en": "" } },
      { "x": 52.1, "y": 57.7, "title": { "es": "Transferencia de imagen más precisa", "en": "More precise image transfer" }, "description": { "es": "", "en": "" } },
      { "x": 43.6, "y": 71.8, "title": { "es": "Bandeja extraíble", "en": "Removable tray" }, "description": { "es": "", "en": "" } }
    ]
  },
  {
    "id": "malvinas-plancha-termica-textil",
    "slug": "malvinas-plancha-termica-textil",
    "name": {
      "es": "Malvinas Plancha Térmica Textil",
      "en": "Malvinas Heat Press",
      "pt": "Malvinas Prensa Térmica Textil",
      "it": "Malvinas Pressa Termica Tessile"
    },
    "description": {
      "es": "Descubre la evolución natural de las prensas térmicas con nuestra nueva plancha transfer profesional Beinsen Malvinas. Su diseño plagado de novedades hará el proceso de planchado más ágil, preciso y seguro para que tú te puedas preocupar de lo realmente importante.",
      "en": "Malvinas textile heat press focused on pressing precision and reliable operation.",
      "pt": "Prensa térmica têxtil Malvinas focada na precisão e fiabilidade de uso.",
      "it": "Pressa termica tessile Malvinas focalizzata su precisione di pressatura e affidabilità."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/04/malvinas-principal.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Presión estable",
        "Control intuitivo",
        "Pensada para trabajos exigentes"
      ],
      "en": [
        "Stable pressure",
        "Intuitive control",
        "Designed for demanding jobs"
      ]
    },
    "accessories": [
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "plato-base-18x18-cambio-rapido" },
      { "id": "plato-base-18x38-cambio-rapido" },
      { "id": "plato-base-18x45-cambio-rapido" },
      { "id": "plato-base-30x35-cambio-rapido" },
      { "id": "plato-base-zapatillas-cambio-rapido" },
      { "id": "plato-base-redondo-24-cambio-rapido" },
      { "id": "plato-base-gorras-cambio-rapido" },
      { "id": "plato-base-camisetas-cambio-rapido" },
      { "id": "plato-base-40x50-2mangas-cambio-rapido" },
      { "id": "mesa-universal-grande" },
      { "id": "plato-base-12x45-mangas-cambio-rapido" },
      { "id": "plato-base-15x50-pantalones-cambio-rapido" },
      { "id": "plato-base-15-5x25-5-cambio-rapido" },
      { "id": "plato-base-15x25-cambio-rapido" },
      { "id": "plato-base-25x30-cambio-rapido" },
      { "id": "plato-base-15x15-cambio-rapido" },
      { "id": "termometro-digital-infrarrojos-it122" }
    ],
    "consumables": [
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Guia-de-usuario-Malvinas-v1.2.1", "en": "User Manual - Guia-de-usuario-Malvinas-v1.2.1" }, "url": "/downloads/malvinas-plancha-termica-textil/Guia-de-usuario-Malvinas-v1.2.1.pdf" },
      { "label": { "es": "Manual de Usuario - Guia-de-usuario-Malvinas-v1.2.1Gabi", "en": "User Manual - Guia-de-usuario-Malvinas-v1.2.1Gabi" }, "url": "/downloads/malvinas-plancha-termica-textil/Guia-de-usuario-Malvinas-v1.2.1Gabi.pdf" },
      { "label": { "es": "Manual de Usuario - Guia-di-utente-Malvinas-v1.2.1", "en": "User Manual - Guia-di-utente-Malvinas-v1.2.1" }, "url": "/downloads/malvinas-plancha-termica-textil/Guia-di-utente-Malvinas-v1.2.1.pdf" },
      { "label": { "es": "Manual de Usuario - Guia-do-usuario-Malvinas-v1.2.1", "en": "User Manual - Guia-do-usuario-Malvinas-v1.2.1" }, "url": "/downloads/malvinas-plancha-termica-textil/Guia-do-usuario-Malvinas-v1.2.1.pdf" },
      { "label": { "es": "Manual de Usuario - User-Guide-Malvinas-v1.2.1", "en": "User Manual - User-Guide-Malvinas-v1.2.1" }, "url": "/downloads/malvinas-plancha-termica-textil/User-Guide-Malvinas-v1.2.1.pdf" }
    ],
        "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Electromagnética", "en": "Electromagnetic", "pt": "Eletromagnética", "it": "Elettromagnetica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Automático y manual" },
      { "label": { "es": "Grosor máximo del personalizable", "en": "Max Customizable Thickness" }, "value": "20mm." },
      { "label": { "es": "Presión", "en": "Pressure" }, "value": "Manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-13" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✓" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "3" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "40x50 cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✗" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "61,4Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "78Kg." },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "94x57x57cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "✗" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "✗" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "Cubierta anti quemaduras" }
    ],
    "benefits": [
      {
        "title": { "es": "Electromagnética", "en": "Electromagnetic" },
        "description": { "es": "Su sistema electromagnético mejora la ergonomía de apertura y cierre para un flujo de trabajo más eficiente.", "en": "Its electromagnetic system improves opening and closing ergonomics for a more efficient workflow." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Modo manual/auto", "en": "Manual/auto mode" },
        "description": { "es": "Alterna entre modo automático y manual para adaptarte a distintos tipos de producción y acabados.", "en": "Switch between automatic and manual modes to adapt to different production needs and finishes." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Pantalla táctil", "en": "Touch display" },
        "description": { "es": "El controlador táctil GY-13 permite ajustar y supervisar todos los parámetros con rapidez y precisión.", "en": "The GY-13 touch controller lets you adjust and monitor all parameters quickly and precisely." },
        "icon": "MousePointer2"
      },
      {
        "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" },
        "description": { "es": "Incluye sistema de intercambio rápido del plato inferior para minimizar tiempos de inactividad y aumentar productividad.", "en": "Includes quick lower plate exchange to reduce downtime and increase productivity." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Cubierta antiquemaduras", "en": "Anti-burn cover" },
        "description": { "es": "Aporta seguridad extra durante la operación para trabajar con más confianza en jornadas largas.", "en": "Adds extra safety during operation so you can work with more confidence in long shifts." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Calor uniforme", "en": "Uniform heat" },
        "description": { "es": "La nueva resistencia, más avanzada, gruesa y pesada, mejora de forma notable el reparto de presión y calor.", "en": "The newer, thicker, heavier heating element significantly improves pressure and heat distribution." },
        "icon": "Target"
      },
      {
        "title": { "es": "Confort al máximo", "en": "Maximum comfort" },
        "description": { "es": "Empuñadura auxiliar, plato extraíble/intercambiable y electroimán desconectable se combinan para un manejo más cómodo.", "en": "Auxiliary handle, removable/interchangeable plate, and disconnectable electromagnet combine for more comfortable use." },
        "icon": "Sofa"
      },
      {
        "title": { "es": "Todo controlado", "en": "Everything under control" },
        "description": { "es": "Controla 9 niveles de presión y guarda hasta 3 memorias de tiempo y temperatura. Todo al alcance de tu dedo índice.", "en": "Control 9 pressure levels and save up to 3 time/temperature memories, all at your fingertips." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Que el ritmo no pare", "en": "Keep the pace going" },
        "description": { "es": "Su diseño agiliza cambios de plato, reduce tiempos muertos y te permite trabajar más y mejor.", "en": "Its design speeds plate changes, reduces downtime, and helps you work faster and better." },
        "icon": "Gauge"
      }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately, the heating plate is too hot.",
        "If you turn off the compressor, the hot heating plate may close and press against the lower plate, which can burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    },
    "hotspots": [
      { "x": 61.8, "y": 14.9, "title": { "es": "Nueva empuñadura con mando auxiliar", "en": "New handle with auxiliary control" }, "description": { "es": "", "en": "" } },
      { "x": 37.1, "y": 35.3, "title": { "es": "Cubierta antiquemaduras", "en": "Anti-burn cover" }, "description": { "es": "", "en": "" } },
      { "x": 67.7, "y": 36.3, "title": { "es": "Regulador de presión y electroimán reversible", "en": "Pressure regulator and reversible electromagnet" }, "description": { "es": "", "en": "" } },
      { "x": 65.6, "y": 41,   "title": { "es": "Botón de apagado de emergencia", "en": "Emergency stop button" }, "description": { "es": "", "en": "" } },
      { "x": 79.4, "y": 45.8, "title": { "es": "Pantalla táctil", "en": "Touch screen" }, "description": { "es": "", "en": "" } },
      { "x": 57.7, "y": 51.8, "title": { "es": "Nueva resistencia de alta tecnología", "en": "New high-technology heating element" }, "description": { "es": "", "en": "" } },
      { "x": 19.2, "y": 72.8, "title": { "es": "Sistema de platos intercambiables", "en": "Interchangeable plate system" }, "description": { "es": "", "en": "" } },
      { "x": 18.2, "y": 85.3, "title": { "es": "Bandeja extraíble", "en": "Removable tray" }, "description": { "es": "", "en": "" } },
      { "x": 36.1, "y": 88.9, "title": { "es": "Espacio extra grande para sudaderas o tejidos gruesos", "en": "Extra large space for hoodies or thick fabrics" }, "description": { "es": "", "en": "" } }
    ]
  },
  {
    "id": "guyana-plancha-termica-textil",
    "slug": "guyana-plancha-termica-textil",
    "name": {
      "es": "Guyana Plancha Térmica Textil",
      "en": "Guyana Heat Press",
      "pt": "Guyana Prensa Térmica Textil",
      "it": "Guyana Pressa Termica Tessile"
    },
    "description": {
      "es": "Reinventa tu forma de trabajar con la plancha transfer de doble plato Beinsen Guyana. Tan robusta y fiable como el modelo Barbados pero con el doble de diversión.",
      "en": "Guyana textile heat press focused on productivity and consistency in production runs.",
      "pt": "Prensa térmica têxtil Guyana com foco em produtividade e consistência.",
      "it": "Pressa termica tessile Guyana con focus su produttività e costanza."
    },
    "image": "https://beinsen.com/wp-content/uploads/2019/11/frontal-768x768.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Operación sencilla",
        "Alto rendimiento diario",
        "Resultados repetibles"
      ],
      "en": [
        "Simple operation",
        "High daily output",
        "Repeatable results"
      ]
    },
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "mesa-universal-grande" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Plancha-Guyana", "en": "User Manual - Plancha-Guyana" }, "url": "/downloads/guyana-plancha-termica-textil/Plancha-Guyana.pdf" }
    ],
        "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Electromagnética", "en": "Electromagnetic", "pt": "Eletromagnética", "it": "Elettromagnetica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Automático y manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-06" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "2" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✗" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "151 Kg." },
      { "label": { "es": "Embalaje (cuerpo de la máquina)", "en": "Packaging (Machine Body)" }, "value": "92x65x67 cm." },
      { "label": { "es": "Embalaje (Placa base)", "en": "Packaging (Base Plate)" }, "value": "110x62x25 cm." }
    ],
    "benefits": [
      {
        "title": { "es": "Electromagnética", "en": "Electromagnetic" },
        "description": { "es": "Integra sistema electromagnético para facilitar la operación y mantener ritmo de trabajo constante.", "en": "Includes an electromagnetic system to simplify operation and maintain consistent workflow pace." },
        "icon": "Zap",
        "image": "/products/maquinas/guyana-plancha-termica-textil/04.png"
      },
      {
        "title": { "es": "Modo manual/auto", "en": "Manual/auto mode" },
        "description": { "es": "Permite alternar entre funcionamiento manual y automático según el tipo de producción.", "en": "Lets you switch between manual and automatic operation depending on production needs." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Controlador digital", "en": "Digital controller" },
        "description": { "es": "Controla tiempo y temperatura con precisión para repetir resultados de forma fiable.", "en": "Control time and temperature precisely for reliable repeatable results." },
        "icon": "Cpu",
        "image": "/products/maquinas/guyana-plancha-termica-textil/05.JPG"
      },
      {
        "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" },
        "description": { "es": "El sistema de intercambio rápido para el plato inferior reduce tiempos de inactividad y agiliza cambios de trabajo.", "en": "The quick lower plate exchange system reduces downtime and speeds up job changes." },
        "icon": "Layers",
        "image": "/products/maquinas/guyana-plancha-termica-textil/01.png"
      },
      {
        "title": { "es": "Doble plato", "en": "Double plate" },
        "description": { "es": "Su configuración de doble plato te permite mejorar flujo de trabajo y productividad en series continuas.", "en": "Its double-plate setup improves workflow and productivity in continuous runs." },
        "icon": "Copy"
      },
      {
        "title": { "es": "Pensada para perdurar", "en": "Built to last" },
        "description": { "es": "Sus materiales de alta calidad y duración te garantizan un rendimiento superior durante años.", "en": "High-quality long-lasting materials ensure superior performance for years." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Comodidad ante todo", "en": "Comfort first" },
        "description": { "es": "Desliza la bandeja inferior hacia ti y coloca prendas en segundos con más espacio y comodidad.", "en": "Slide the lower tray toward you and place garments in seconds with more room and comfort." },
        "icon": "PanelBottom"
      },
      {
        "title": { "es": "Que el ritmo no pare", "en": "Keep the pace going" },
        "description": { "es": "Su diseño innovador agiliza el proceso, reduce el tiempo de inactividad y mejora la productividad para trabajar más y mejor.", "en": "Its innovative design speeds up work, reduces downtime, and improves productivity so you can work more and better." },
        "icon": "Gauge"
      }
    ],
    "hotspots": [
      { "x": 61.5, "y": 20.2, "title": { "es": "Sistema de agarre secundario", "en": "Secondary grip system" }, "description": { "es": "", "en": "" } },
      { "x": 49.1, "y": 31.6, "title": { "es": "Cierre y apertura con electroimán", "en": "Electromagnetic opening and closing" }, "description": { "es": "", "en": "" } },
      { "x": 41.5, "y": 41.1, "title": { "es": "Controlador digital avanzado GY-06", "en": "Advanced GY-06 digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 69.3, "y": 82.4, "title": { "es": "Bandeja extraíble", "en": "Pull-out tray" }, "description": { "es": "", "en": "" } },
      { "x": 40.9, "y": 83.6, "title": { "es": "Platos desplazables lateralmente", "en": "Laterally sliding plates" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately, the heating plate is too hot.",
        "If you turn off the compressor, the hot heating plate may close and press against the lower plate, which can burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
  },
  {
    "id": "kenia-plancha-termica-textil",
    "slug": "kenia-plancha-termica-textil",
    "name": {
      "es": "Kenia Plancha Térmica Textil",
      "en": "Kenia Heat Press",
      "pt": "Kenia Prensa Térmica Textil",
      "it": "Kenia Pressa Termica Tessile"
    },
    "description": {
      "es": "¡Descubre la calidad y versatilidad de la plancha térmica Kenia de Beinsen para crear sus lanyards!",
      "en": "Kenia textile heat press developed for professional personalization with comfortable handling.",
      "pt": "Prensa térmica têxtil Kenia desenvolvida para personalização profissional.",
      "it": "Pressa termica tessile Kenia sviluppata per personalizzazione professionale."
    },
    "image": "https://beinsen.com/wp-content/uploads/2023/11/Kenia-2-1024x1024.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Enfoque profesional",
        "Manejo cómodo",
        "Buen equilibrio entre calidad y productividad"
      ],
      "en": [
        "Professional focus",
        "Comfortable handling",
        "Strong quality-productivity balance"
      ]
    },
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "mesa-universal-grande" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

"downloads": [
      { "label": { "es": "Manual de Usuario - Manual-Kenia", "en": "User Manual - Manual-Kenia" }, "url": "/downloads/kenia-plancha-termica-textil/Manual-Kenia.pdf" }
    ],
        "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Modelo Kenia" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tipo sandwich (semiautomática)" },
      { "label": { "es": "Ángulo de apertura", "en": "Opening Angle" }, "value": "25º" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Automático" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Fija" },
      { "label": { "es": "Tamaño de resistencia", "en": "Heating Element Size" }, "value": "100 x 25 cm" },
      { "label": { "es": "Máximo grosor imprimible", "en": "Maximum Printable Thickness" }, "value": "20mm" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "4850W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "90 Kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "210 x 80 x 84 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-06" },
      { "label": { "es": "Precisión del controlador", "en": "Controller Precision" }, "value": "±0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0º-225º" }
    ],
    "benefits": [
      {
        "title": { "es": "Una máquina para sublimar polivalente", "en": "A versatile sublimation machine" },
        "description": { "es": "Con nuestra plancha térmica Kenia, diseñada especialmente para la sublimación de objetos de formas y dimensiones variadas, obtendrás resultados profesionales y duraderos.", "en": "With our Kenia heat press, specially designed for objects with varied shapes and dimensions, you get durable professional results." },
        "icon": "Layers",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Una plancha con un diseño único", "en": "A press with unique design" },
        "description": { "es": "Con una base especial de 100 x 25 cm, la plancha Kenia te permite trabajar llaveros, placas, cintas, pulseras, bandas, corbatas y más productos.", "en": "With a special 100 x 25 cm base, Kenia lets you work on keychains, plates, ribbons, bracelets, bands, ties, and more." },
        "icon": "Ruler"
      },
      {
        "title": { "es": "Rodillo para lanyards", "en": "Lanyard roller" },
        "description": { "es": "Hemos desarrollado un rodillo especializado para cintas que facilita la elaboración de lanyards de forma casi automática, más rápida y uniforme.", "en": "We developed a specialized ribbon roller for near-automatic lanyard production, faster and more uniform." },
        "icon": "RotateCw",
        "image": "/products/maquinas/kenia-plancha-termica-textil/05.png"
      },
      {
        "title": { "es": "Modo eco y precalentamiento", "en": "Eco mode and preheating" },
        "description": { "es": "Incluye modo eco y precalentamiento para optimizar tiempos y consumo en la producción diaria.", "en": "Includes eco mode and preheating to optimize production time and energy usage." },
        "icon": "Leaf"
      },
      {
        "title": { "es": "Pantalla digital y programable", "en": "Digital and programmable display" },
        "description": { "es": "La pantalla digital y el sistema programable facilitan el ajuste de parámetros para repetir trabajos con precisión.", "en": "Digital display and programmable controls simplify parameter setup for precise repeat jobs." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencia duradera", "en": "Durable heating element" },
        "description": { "es": "Su resistencia avanzada está diseñada para un rendimiento estable durante jornadas intensivas.", "en": "Its advanced heating element is designed for stable performance in intensive workflows." },
        "icon": "Gauge"
      },
      {
        "title": { "es": "Cierre manual y magnético", "en": "Manual and magnetic closure" },
        "description": { "es": "Cierra la plancha y deja que se abra automáticamente gracias a su cierre magnético, reduciendo errores y mejorando comodidad.", "en": "Close the press and let it open automatically with magnetic closure for fewer mistakes and better comfort." },
        "icon": "Magnet"
      },
      {
        "title": { "es": "Sistema de amortiguación", "en": "Damping system" },
        "description": { "es": "Sus dos fuertes amortiguadores ayudan a distribuir calor y presión de forma uniforme en todo el área de trabajo.", "en": "Its two strong dampers help distribute heat and pressure uniformly across the working area." },
        "icon": "Target"
      },
      {
        "title": { "es": "Plato inferior de calidad", "en": "High-quality lower plate" },
        "description": { "es": "El plato inferior está cubierto con una almohadilla de silicona de alta calidad para un contacto fiable y constante.", "en": "The lower plate is covered with high-quality silicone padding for reliable, consistent contact." },
        "icon": "ShieldCheck"
      }
    ],
    "hotspots": [
      { "x": 56.7, "y": 22.8, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 26.5, "y": 28.7, "title": { "es": "Perilla ajuste de presión", "en": "Pressure adjustment knob" }, "description": { "es": "", "en": "" } },
      { "x": 19.6, "y": 40.3, "title": { "es": "Sistema de presión preciso", "en": "Precise pressure system" }, "description": { "es": "", "en": "" } },
      { "x": 72.8, "y": 45.1, "title": { "es": "Botón de emergencia", "en": "Emergency button" }, "description": { "es": "", "en": "" } },
      { "x": 83.9, "y": 50.8, "title": { "es": "Difusor de calor", "en": "Heat diffuser" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
  },
  {
    "id": "tobago-estacion-planchado-continuo",
    "slug": "tobago-estacion-planchado-continuo",
    "name": {
      "es": "Tobago Estación de Planchado Continuo",
      "en": "Tobago Continuous Press Station",
      "pt": "Tobago Estação de Prensagem Contínua",
      "it": "Tobago Stazione di Pressatura Continua"
    },
    "description": {
      "es": "La nueva estación de planchado contínuo Beinsen Tobago es toda una revolución en la personalización de camisetas. Cómo si de un eficiente ayudante se tratara, sólo tienes que alimentarlo de camisetas y ver como se apilan en la salida.",
      "en": "The new Beinsen Tobago continuous pressing station is a revolution in T-shirt personalization. Just feed garments and watch them stack on output.",
      "pt": "A nova estação de prensagem contínua Beinsen Tobago é uma revolução na personalização de camisetas.",
      "it": "La nuova stazione di pressatura continua Beinsen Tobago è una rivoluzione nella personalizzazione delle magliette."
    },
    "image": "https://beinsen.com/wp-content/uploads/2024/11/tobago2-768x768.webp",
    "price": "Consultar PVP",
    "size": { "es": "Industrial", "en": "Industrial", "pt": "Industrial", "it": "Industriale" },
    "features": {
      "es": [
        "Sistema de planchado continuo para alto rendimiento",
        "Control total de velocidad, presión y temperatura",
        "Diseño móvil con mueble de 4 ruedas"
      ],
      "en": [
        "Continuous pressing system for high throughput",
        "Full speed, pressure, and temperature control",
        "Mobile design with 4-wheel cabinet"
      ]
    },
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" }
    ],
    "consumables": [],

"downloads": [
      { "label": { "es": "Manual de Usuario - manual-tobago", "en": "User Manual - manual-tobago" }, "url": "/downloads/tobago-estacion-planchado-continuo/manual-tobago.pdf" }
    ],
        "category": { "es": "Especializadas", "en": "Specialized", "pt": "Especializadas", "it": "Specializzate" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Calandra" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Automático" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "Control digital móvil REX-C400" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "7.000W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "200ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "249Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "407Kg." },
      { "label": { "es": "Tamaño de la máquina", "en": "Machine Size" }, "value": "236x110x140cm." },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "183x119x163cm." },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Mueble con 4 ruedas universales" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "✓" }
    ],
    "benefits": [
      {
        "title": { "es": "Electromagnética", "en": "Electromagnetic" },
        "description": { "es": "Integra soluciones electromagnéticas para una operación continua más estable y segura.", "en": "Integrates electromagnetic solutions for more stable and safe continuous operation." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Modo manual/auto", "en": "Manual/auto mode" },
        "description": { "es": "Alterna entre modos manual y automático para adaptar el ritmo de producción a cada necesidad.", "en": "Switch between manual and automatic modes to adapt production pace to each need." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Controlador digital", "en": "Digital controller" },
        "description": { "es": "Controla temperaturas, velocidades y presiones de forma directa desde su controlador digital.", "en": "Control temperature, speed, and pressure directly from its digital controller." },
        "icon": "Cpu",
        "image": "/products/maquinas/tobago-estacion-planchado-continuo/04.png"
      },
      {
        "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" },
        "description": { "es": "El sistema modular facilita adaptar la estación a diferentes formatos de trabajo.", "en": "Its modular system makes adapting the station to different job formats easier." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Cubierta antiquemaduras", "en": "Anti-burn cover" },
        "description": { "es": "Aumenta la seguridad del operario en jornadas largas de producción continua.", "en": "Improves operator safety in long continuous production sessions." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "La fusión perfecta entre una prensa térmica y una calandra", "en": "The perfect fusion of heat press and calender" },
        "description": { "es": "Descubre la personalización coral gracias al sistema de planchado contínuo. Configura las temperaturas, ajusta la velocidad de desplazamiento y la presión y coge carrerilla. Di adiós a los periodos de inactividad.", "en": "Discover continuous-flow personalization with a pressing system that lets you set temperature, travel speed, and pressure while reducing downtime." },
        "icon": "Gauge"
      },
      {
        "title": { "es": "Calor por todas partes", "en": "Heat everywhere" },
        "description": { "es": "Su sistema de resistencias dual con calefactor superior e inferior y ajuste independiente garantiza una distribución uniforme del calor para DTF y HTV.", "en": "Its dual upper/lower heater system with independent adjustment ensures even heat distribution for DTF and HTV." },
        "icon": "Target"
      },
      {
        "title": { "es": "Se adapta a ti", "en": "Adapts to you" },
        "description": { "es": "Ajusta inclinación de bandeja, altura de rodillos, velocidad, presiones y temperaturas. Mueve y gira el controlador hasta 90º y desplaza la estación con su mueble con ruedas.", "en": "Adjust tray angle, roller height, speed, pressure, and temperature; move and rotate the controller up to 90º and reposition the station with its wheeled cabinet." },
        "icon": "Move"
      }
    ],
    "hotspots": [
      { "x": 54.8, "y": 7.2,  "title": { "es": "Regulador de velocidad", "en": "Speed regulator" }, "description": { "es": "", "en": "" } },
      { "x": 48.6, "y": 12.4, "title": { "es": "Pantalla desplazable", "en": "Sliding display" }, "description": { "es": "", "en": "" } },
      { "x": 40.3, "y": 28.7, "title": { "es": "Presión ajustable", "en": "Adjustable pressure" }, "description": { "es": "", "en": "" } },
      { "x": 65.8, "y": 29.4, "title": { "es": "Láser de ayuda al posicionamiento", "en": "Positioning laser guide" }, "description": { "es": "", "en": "" } },
      { "x": 34.9, "y": 40.0, "title": { "es": "-", "en": "-" }, "description": { "es": "", "en": "" } },
      { "x": 78.3, "y": 41.1, "title": { "es": "Bandeja de entrada abatible", "en": "Folding input tray" }, "description": { "es": "", "en": "" } },
      { "x": 13.6, "y": 51.4, "title": { "es": "Bandeja de salida regulable", "en": "Adjustable output tray" }, "description": { "es": "", "en": "" } }
    ]
  },
  {
    "id": "normandia-i-plancha-termica-textil",
    "slug": "normandia-i-plancha-termica-textil",
    "name": {
      "es": "Normandía I Plancha Térmica Textil",
      "en": "Normandia I Heat Press",
      "pt": "Normandia I Prensa Térmica Textil",
      "it": "Normandia I Pressa Termica Tessile"
    },
    "description": {
      "es": "¿Necesitas multiplicar tu producción sin perder un ápice de precisión? Entonces la prensa neumático doble Beinsen Normandia I es tu mejor opción. Su sistema de apertura y cierre neumáticos, su doble plato de gran tamaño y tu destreza formarán un tridente capaz de superar cualquier reto.",
      "en": "Need to multiply production without losing precision? Beinsen Normandia I double pneumatic press is your best option.",
      "pt": "Precisa multiplicar a produção sem perder precisão? A prensa pneumática dupla Beinsen Normandia I é a melhor opção.",
      "it": "Hai bisogno di aumentare la produzione senza perdere precisione? La pressa pneumatica doppia Beinsen Normandia I è la scelta migliore."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/02/IMG_9570-e1738773692422-768x518.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Formato textil versátil",
        "Control estable de tiempo y temperatura",
        "Pensada para producción continua"
      ],
      "en": [
        "Versatile textile format",
        "Stable time and temperature control",
        "Designed for continuous production"
      ]
    },
    "accessories": [
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "mesa-universal-grande" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "guantes-protectores-algodon" },
      { "id": "almohadilla-silicona-40x50" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Neumática", "en": "Pneumatic", "pt": "Pneumática", "it": "Pneumatica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Neumática" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Automático" },
      { "label": { "es": "Grosor máximo del personalizable", "en": "Max Customizable Thickness" }, "value": "32mm." },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-06" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "✗" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "2" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✗" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "97Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "160Kg." },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "120x97x74cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "✗" },
      { "label": { "es": "Láser de posicionamiento", "en": "Positioning Laser" }, "value": "2, uno a cada lado la unidad principal" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "-" }
    ],
    "benefits": [
      {
        "title": { "es": "Neumática", "en": "Pneumatic" },
        "description": { "es": "Aporta una presión constante y uniforme para personalizaciones precisas en series continuas.", "en": "Delivers constant, even pressure for precise personalization in continuous runs." },
        "icon": "Wind",
        "image": "/products/maquinas/normandia-i-plancha-termica-textil/03.png"
      },
      {
        "title": { "es": "Doble plato", "en": "Double plate" },
        "description": { "es": "Su doble plato de gran tamaño multiplica el ritmo de producción sin perder precisión.", "en": "Its large double-plate setup multiplies production pace without sacrificing precision." },
        "icon": "Layers",
        "image": "/products/maquinas/normandia-i-plancha-termica-textil/02.png"
      },
      {
        "title": { "es": "Controlador digital", "en": "Digital controller" },
        "description": { "es": "Controla tiempos y temperatura de forma fácil e intuitiva con su display GY-06.", "en": "Control timing and temperature easily and intuitively with its GY-06 display." },
        "icon": "Cpu",
        "image": "/products/maquinas/normandia-i-plancha-termica-textil/04.png"
      },
      {
        "title": { "es": "Guías láser", "en": "Laser guides" },
        "description": { "es": "Ajusta la cruz del láser al milímetro y evita impresiones fuera de lugar.", "en": "Set the laser crosshair with millimeter precision and avoid off-position prints." },
        "icon": "Target",
        "image": "/products/maquinas/normandia-i-plancha-termica-textil/05.png"
      },
      {
        "title": { "es": "Tan compacta como versátil", "en": "Compact yet versatile" },
        "description": { "es": "Prensa neumática de sobremesa para camisetas, artículos deportivos, paneles fotográficos, pancartas, cojines, alfombrillas y puzzles.", "en": "Desktop pneumatic press for T-shirts, sportswear, photo panels, banners, cushions, mousepads, and puzzles." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Tan suave como delicada", "en": "Smooth and delicate" },
        "description": { "es": "La presión vertical y la silicona de los platos consiguen estampaciones uniformes y cuidadas.", "en": "Vertical pressure and silicone platens provide uniform and well-cared transfers." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Detalles que importan", "en": "Details that matter" },
        "description": { "es": "Incluye visor de presión, botón de emergencia, ventilador, filtro de aire y reguladores de velocidad para control total.", "en": "Includes pressure viewer, emergency button, fan, air filter, and speed regulators for full control." },
        "icon": "Settings"
      }
    ],
    "hotspots": [
      { "x": 81.7, "y": 9.7,  "title": { "es": "Ventilador", "en": "Fan" }, "description": { "es": "", "en": "" } },
      { "x": 45.6, "y": 20.8, "title": { "es": "Medidor de presión y botón de emergencia", "en": "Pressure gauge and emergency button" }, "description": { "es": "", "en": "" } },
      { "x": 81.0, "y": 21.9, "title": { "es": "Regulador de velocidad", "en": "Speed regulator" }, "description": { "es": "", "en": "" } },
      { "x": 51.1, "y": 27.6, "title": { "es": "Controlador digital GY-06", "en": "GY-06 digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 70.8, "y": 31.1, "title": { "es": "Guías láser de ayuda", "en": "Laser positioning guides" }, "description": { "es": "", "en": "" } },
      { "x": 97.1, "y": 47.8, "title": { "es": "Filtro de aire", "en": "Air filter" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately, the heating plate is too hot.",
        "If you turn off the compressor, the hot heating plate may close and press against the lower plate, which can burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
  },
  {
    "id": "normandia-iii-plancha-termica-textil",
    "slug": "normandia-iii-plancha-termica-textil",
    "name": {
      "es": "Normandía III Plancha Térmica Textil",
      "en": "Normandia III Heat Press",
      "pt": "Normandia III Prensa Térmica Textil",
      "it": "Normandia III Pressa Termica Tessile"
    },
    "description": {
      "es": "Si eres un profesional de la sublimación, entonces sabes lo importante que es tener una plancha térmica de alta calidad que pueda sublimar una gran cantidad de productos y que se fácil de usar. Ahí es donde entra nuestra plancha Normandia III, la herramienta perfecta para tus necesidades de sublimación.",
      "en": "Normandia III textile heat press built for advanced personalization in demanding production runs.",
      "pt": "Prensa térmica têxtil Normandia III criada para personalização avançada em produção exigente.",
      "it": "Pressa termica tessile Normandia III pensata per personalizzazione avanzata in produzioni impegnative."
    },
    "image": "https://beinsen.com/wp-content/uploads/2024/01/Normandia_2_3_-rigth.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Enfoque en productividad textil",
        "Control preciso para trabajos continuos",
        "Construcción robusta para uso profesional"
      ],
      "en": [
        "Textile productivity focus",
        "Precise control for continuous jobs",
        "Robust build for professional use"
      ]
    },
    "accessories": [
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "mesa-universal-grande" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "guantes-protectores-algodon" },
      { "id": "almohadilla-silicona-80x100" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Neumática", "en": "Pneumatic", "pt": "Pneumática", "it": "Pneumatica" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Modelo Normandia III" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tipo neumática" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Automático" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Automático" },
      { "label": { "es": "Tipo de base", "en": "Base Type" }, "value": "Desplazable" },
      { "label": { "es": "Tamaño de resistencia", "en": "Heating Element Size" }, "value": "80 x 110cm" },
      { "label": { "es": "Máximo grosor imprimible", "en": "Maximum Printable Thickness" }, "value": "65mm" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "5100W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "370 Kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "137 x 121 x 120 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-06" },
      { "label": { "es": "Precisión del controlador", "en": "Controller Precision" }, "value": "±0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0º-225º" }
    ],
    "benefits": [
      {
        "title": { "es": "El tamaño sí importa", "en": "Size does matter" },
        "description": { "es": "Con su superficie de trabajo de 80 x 110 cm y potencia de 5100W, podrás sublimar desde prendas y toallas hasta bolsas, carcasas y productos de gran formato.", "en": "With its 80 x 110 cm work area and 5100W power, you can sublimate garments, towels, bags, cases, and large-format items." },
        "icon": "Ruler"
      },
      {
        "title": { "es": "Imagina y la Normandia III lo sublima", "en": "Imagine it, Normandia III sublimates it" },
        "description": { "es": "Incluye regulador de presión para resultados consistentes, dos botones de seguridad y capacidad para sublimar objetos de hasta 65 mm de grosor.", "en": "It includes pressure regulation for consistent results, two safety buttons, and support for items up to 65 mm thick." },
        "icon": "Target"
      },
      {
        "title": { "es": "Donde otros fallan, Normandia III lo logra", "en": "Where others fail, Normandia III succeeds" },
        "description": { "es": "Desde prendas de vestir hasta tableros de aluminio, no hay nada que se le resista a esta plancha térmica de uso profesional.", "en": "From garments to aluminum boards, this professional heat press handles what others cannot." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Modo eco y precalentamiento", "en": "Eco mode and preheating" },
        "description": { "es": "Optimiza tiempos de trabajo y consumo energético con sus funciones de modo eco y precalentamiento.", "en": "Optimize workflow timing and energy usage with eco mode and preheating functions." },
        "icon": "Leaf"
      },
      {
        "title": { "es": "Pantalla digital y programable", "en": "Digital and programmable display" },
        "description": { "es": "La pantalla digital y su configuración programable te ayudan a repetir parámetros con precisión y mantener calidad constante.", "en": "The digital display and programmable settings help repeat parameters accurately and maintain consistent quality." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencia duradera", "en": "Durable heating element" },
        "description": { "es": "Su resistencia está diseñada para soportar jornadas intensivas con estabilidad térmica y alto rendimiento.", "en": "Its heating element is built for intensive schedules with thermal stability and high output." },
        "icon": "Gauge"
      }
    ],
    "hotspots": [
      { "x": 36.9, "y": 22.6, "title": { "es": "Botón on/off", "en": "On/Off button" }, "description": { "es": "", "en": "" } },
      { "x": 58.7, "y": 23.9, "title": { "es": "Filtro de aire", "en": "Air filter" }, "description": { "es": "", "en": "" } },
      { "x": 41.5, "y": 24.2, "title": { "es": "Botón de emergencia", "en": "Emergency button" }, "description": { "es": "", "en": "" } },
      { "x": 49.8, "y": 24.3, "title": { "es": "Pantalla digital", "en": "Digital display" }, "description": { "es": "", "en": "" } },
      { "x": 36.7, "y": 32.0, "title": { "es": "Botón de activación", "en": "Activation button" }, "description": { "es": "", "en": "" } },
      { "x": 62.7, "y": 53.8, "title": { "es": "Difusor de calor", "en": "Heat diffuser" }, "description": { "es": "", "en": "" } },
      { "x": 53.1, "y": 67.2, "title": { "es": "Almohadilla", "en": "Pad" }, "description": { "es": "", "en": "" } },
      { "x": 36.3, "y": 83.6, "title": { "es": "Cajón extraíble", "en": "Sliding drawer" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately, the heating plate is too hot.",
        "If you turn off the compressor, the hot heating plate may close and press against the lower plate, which can burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
  },
  {
    "id": "normandia-ii-plancha-termica-textil",
    "slug": "normandia-ii-plancha-termica-textil",
    "name": {
      "es": "Normandía II Plancha Térmica Textil",
      "en": "Normandia II Heat Press",
      "pt": "Normandia II Prensa Térmica Textil",
      "it": "Normandia II Pressa Termica Tessile"
    },
    "description": {
      "es": "Si eres un profesional de la sublimación, sabes lo crucial que es contar con una plancha neumática profesional de calidad superior, que pueda sublimar una amplia gama de productos de manera sencilla. Ahí es donde entra en juego nuestra plancha Normadia II, la herramienta perfecta para todas tus necesidades de sublimación.",
      "en": "Normandia II textile heat press designed for stable personalization and consistent results.",
      "pt": "Prensa térmica têxtil Normandia II pensada para personalização estável e resultados consistentes.",
      "it": "Pressa termica tessile Normandia II pensata per personalizzazione stabile e risultati costanti."
    },
    "image": "https://beinsen.com/wp-content/uploads/2024/01/Normandia_2_3_head.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Operación textil equilibrada",
        "Control fiable de parámetros",
        "Apta para producción diaria"
      ],
      "en": [
        "Balanced textile operation",
        "Reliable parameter control",
        "Suitable for daily production"
      ]
    },
    "accessories": [
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-teflon-termorresistente-38x38" },
      { "id": "almohadilla-teflon-termorresistente-25x25" },
      { "id": "almohadilla-teflon-termorresistente-15x15" },
      { "id": "mesa-universal-grande" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "guantes-protectores-algodon" },
      { "id": "almohadilla-silicona-80x100" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Neumática", "en": "Pneumatic", "pt": "Pneumática", "it": "Pneumatica" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Modelo Normandia II" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tipo neumática" },
      { "label": { "es": "Compresor", "en": "Compressor" }, "value": "No incluido" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Automático" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Automático" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Fija" },
      { "label": { "es": "Tamaño de resistencia", "en": "Heating Element Size" }, "value": "80 x 100cm" },
      { "label": { "es": "Máximo grosor imprimible", "en": "Maximum Printable Thickness" }, "value": "65mm" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "5100W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "480 Kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "137 x 121 x 120 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-06" },
      { "label": { "es": "Precisión del controlador", "en": "Controller Precision" }, "value": "±0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0º-225º" }
    ],
    "benefits": [
      {
        "title": { "es": "Tamaño sin limitaciones", "en": "Size without limits" },
        "description": { "es": "Con su generosa superficie de trabajo de 80 x 100 cm podrás sublimar desde camisetas y prendas deportivas hasta toallas, bolsas y carcasas sin dificultad.", "en": "Its generous 80 x 100 cm working area lets you sublimate everything from garments to towels, bags, and cases without difficulty." },
        "icon": "Ruler"
      },
      {
        "title": { "es": "Imagínalo y la Normandia II lo sublimará", "en": "Imagine it, Normandia II sublimates it" },
        "description": { "es": "Incluye regulador de presión y dos botones laterales de seguridad para una sublimación precisa y segura, incluso en objetos de hasta 65 mm de grosor.", "en": "Includes pressure regulation and two lateral safety buttons for precise, safe sublimation, even on items up to 65 mm thick." },
        "icon": "Target"
      },
      {
        "title": { "es": "Donde otros fracasan, la Normandia II triunfa", "en": "Where others fail, Normandia II succeeds" },
        "description": { "es": "Desde prendas de vestir hasta tableros de aluminio, esta plancha está preparada para una amplia gama de aplicaciones con uso profesional.", "en": "From garments to aluminum boards, this press is built for a broad range of professional applications." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Modo eco y precalentamiento", "en": "Eco mode and preheating" },
        "description": { "es": "Optimiza tiempos y consumo en trabajos continuos gracias al modo eco y la función de precalentamiento.", "en": "Optimize timing and consumption in continuous jobs with eco mode and preheating." },
        "icon": "Leaf"
      },
      {
        "title": { "es": "Pantalla digital y programable", "en": "Digital and programmable display" },
        "description": { "es": "La pantalla digital y su programación te permiten repetir parámetros de trabajo con precisión.", "en": "Its digital display and programmable controls let you repeat job settings accurately." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencia duradera", "en": "Durable heating element" },
        "description": { "es": "Su resistencia está diseñada para mantener estabilidad térmica y rendimiento en jornadas exigentes.", "en": "Its heating element is designed for thermal stability and performance in demanding sessions." },
        "icon": "Gauge"
      }
    ],
    "hotspots": [
      { "x": 41.7, "y": 19.0, "title": { "es": "Botón on/off", "en": "On/Off button" }, "description": { "es": "", "en": "" } },
      { "x": 36.9, "y": 21.8, "title": { "es": "Filtro de aire", "en": "Air filter" }, "description": { "es": "", "en": "" } },
      { "x": 58.7, "y": 24.7, "title": { "es": "Botón de emergencia", "en": "Emergency button" }, "description": { "es": "", "en": "" } },
      { "x": 49.4, "y": 25.0, "title": { "es": "Pantalla digital", "en": "Digital display" }, "description": { "es": "", "en": "" } },
      { "x": 36.5, "y": 31.5, "title": { "es": "Botón de activación", "en": "Activation button" }, "description": { "es": "", "en": "" } },
      { "x": 60.2, "y": 54.3, "title": { "es": "Difusor de calor", "en": "Heat diffuser" }, "description": { "es": "", "en": "" } },
      { "x": 52.9, "y": 66.5, "title": { "es": "Almohadilla", "en": "Pad" }, "description": { "es": "", "en": "" } },
      { "x": 36.5, "y": 85.4, "title": { "es": "Cajón extraíble", "en": "Sliding drawer" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor está demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrará y presionará hasta la placa inferior, lo que quemaría la almohadilla de algodón.",
        "Mantén el compresor durante unos minutos después dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos.",
        "Verificación y ajuste de la presión.",
        "Inspección y limpieza de los componentes internos.",
        "Verificación y calibración de la temperatura."
      ],
      "en": [
        "Do not turn off the compressor immediately, the heating plate is too hot.",
        "If you turn off the compressor, the hot heating plate may close and press against the lower plate, which can burn the cotton pad.",
        "Keep the compressor running for a few minutes to let it cool down.",
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components.",
        "Temperature verification and calibration."
      ]
    }
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
      "es": "Con tu nueva prensa térmica para espinilleras Beinsen Estambul podrás sublimar sobre este material tan específico y especial. Tu nueva compañera incluye 3 platos base con sistema de intercambio rápido para que sea cual sea el tamaño de la espinillera puedas personalizarla.",
      "en": "With the Beinsen Estambul shin guard heat press you can sublimate on this specific and special material. It includes 3 base plates with a quick-change system so you can customize any shin guard regardless of its size.",
      "pt": "Com a tua nova prensa térmica para caneleiras Beinsen Estambul poderás sublimar neste material tão específico e especial. Inclui 3 pratos base com sistema de troca rápida para personalizar caneleiras de qualquer tamanho.",
      "it": "Con la tua nuova pressa termica per parastinchi Beinsen Estambul potrai sublimare su questo materiale così specifico e speciale. Include 3 piastre base con sistema di cambio rapido per personalizzare qualsiasi parastinchi."
    },
    "image": "https://beinsen.com/wp-content/uploads/2025/07/Diseno-sin-titulo.webp",
    "price": "Consultar PVP",
    "size": { "es": "Compacta", "en": "Compact", "pt": "Compacta", "it": "Compatta" },
    "features": {
      "es": [
        "3 platos intercambiables: 205×171×218 mm / 114×132×179 mm / 97×115×115 mm",
        "Diseño compacto, robusto y fácil de usar",
        "Controlador digital GY-04 con sistema de intercambio rápido"
      ],
      "en": [
        "3 interchangeable plates: 205×171×218 mm / 114×132×179 mm / 97×115×115 mm",
        "Compact, robust and easy-to-use design",
        "GY-04 digital controller with quick-change system"
      ],
      "pt": [
        "3 pratos intercambiáveis: 205×171×218 mm / 114×132×179 mm / 97×115×115 mm",
        "Design compacto, robusto e fácil de usar",
        "Controlador digital GY-04 com sistema de troca rápida"
      ],
      "it": [
        "3 piastre intercambiabili: 205×171×218 mm / 114×132×179 mm / 97×115×115 mm",
        "Design compatto, robusto e facile da usare",
        "Controller digitale GY-04 con sistema di cambio rapido"
      ]
    },
    "accessories": [
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "guantes-protectores-algodon" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],

    "category": { "es": "Especializadas", "en": "Specialized", "pt": "Especializadas", "it": "Specializzate" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Giratoria" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Manual" },
      { "label": { "es": "Grosor máximo del personalizable", "en": "Max Customizable Thickness" }, "value": "–" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-04" },
      { "label": { "es": "Táctil", "en": "Touch" }, "value": "✗" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "–" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Número de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tamaño del plato", "en": "Plate Size" }, "value": "205*171*218 mm/114*132*179 mm/97*115*115 mm" },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "✓" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "900W" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225ºC" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "21Kg" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "25Kg" },
      { "label": { "es": "Tamaño de la máquina", "en": "Machine Size" }, "value": "36×31,4×37,2 cm" },
      { "label": { "es": "Tamaño del embalaje", "en": "Package Size" }, "value": "52x52x52cm" }
    ],
    "benefits": [
      {
        "title": { "es": "No habrá espinillera que se te resista", "en": "No shin guard can resist it" },
        "description": { "es": "Con sus 3 platos de diferentes tamaños (205×171×218 mm / 114×132×179 mm / 97×115×115 mm) puedes personalizar cualquier espinillera del mercado, sin importar su tamaño o forma.", "en": "With its 3 different-sized plates (205×171×218 mm / 114×132×179 mm / 97×115×115 mm) you can customize any shin guard on the market, regardless of size or shape." },
        "icon": "Target",
        "image": "/products/maquinas/estambul-prensa-termica-para-espinilleras/03.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Compacta: llévala a todas partes", "en": "Compact: take it anywhere" },
        "description": { "es": "Su diseño compacto hace de Estambul la compañera ideal para talleres con poco espacio o para llevarla a eventos y competiciones deportivas donde personalizas en el momento.", "en": "Its compact design makes Estambul the ideal companion for small workshops or for taking to sports events and competitions where you personalize on the spot." },
        "icon": "Move",
        "image": "/products/maquinas/estambul-prensa-termica-para-espinilleras/04.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Robusta y duradera", "en": "Robust and durable" },
        "description": { "es": "Construida para soportar jornadas continuas de producción. Su estructura sólida garantiza resultados fiables sesión tras sesión.", "en": "Built to withstand continuous production sessions. Its solid structure guarantees reliable results session after session." },
        "icon": "ShieldCheck",
        "image": "/products/maquinas/estambul-prensa-termica-para-espinilleras/06.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Sencilla desde el primer uso", "en": "Simple from the very first use" },
        "description": { "es": "Utilizar Estambul te resultará tan fácil como el resto de la gama Beinsen. La placa calefactora y los platos permiten una colocación cómoda y una transferencia del diseño profesional desde el minuto uno.", "en": "Using Estambul is as easy as the rest of the Beinsen range. The heating plate and platens allow comfortable placement and professional design transfer from minute one." },
        "icon": "Settings",
        "image": "/products/maquinas/estambul-prensa-termica-para-espinilleras/02.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Sistema de intercambio rápido de platos", "en": "Quick-change plate system" },
        "description": { "es": "Cambia entre los tres tamaños de plato en segundos sin herramientas. Adaptarte a cada espinillera es cuestión de un momento, sin interrumpir el ritmo de producción.", "en": "Switch between the three plate sizes in seconds without tools. Adapting to each shin guard takes just a moment, without interrupting production flow." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Controlador digital GY-04", "en": "GY-04 digital controller" },
        "description": { "es": "Programa temperatura y tiempo con precisión. Con un rango de 0-999 segundos y temperatura máxima de 225°C, tienes el control total sobre cada personalización.", "en": "Program temperature and time precisely. With a 0-999 second range and maximum temperature of 225°C, you have full control over every customization." },
        "icon": "Cpu"
      }
    ],
    "downloads": [
      { "label": { "es": "Manual de Usuario Estambul", "en": "Estambul User Manual" }, "url": "/downloads/estambul-manual.pdf" },
      { "label": { "es": "Ficha Técnica Estambul", "en": "Estambul Technical Sheet" }, "url": "/downloads/estambul-ficha-tecnica.pdf" }
    ],
    "hotspots": [
      { "x": 56.8, "y": 11.8, "title": { "es": "Asa ergonómica", "en": "Ergonomic handle" }, "description": { "es": "Permite abrir y cerrar la prensa con comodidad y precisión en cada ciclo de sublimación.", "en": "Allows opening and closing the press comfortably and precisely in every sublimation cycle." } },
      { "x": 63.3, "y": 26.5, "title": { "es": "Sistema de ajuste de presión", "en": "Pressure adjustment system" }, "description": { "es": "Regula la presión para adaptarse al grosor y forma de cada espinillera, garantizando un contacto perfecto.", "en": "Adjusts pressure to suit the thickness and shape of each shin guard for perfect contact." } },
      { "x": 18.5, "y": 36.7, "title": { "es": "Perilla de ajuste", "en": "Adjustment knob" }, "description": { "es": "Facilita el posicionamiento y la sujeción de la espinillera para asegurar un transfer preciso y sin desplazamientos.", "en": "Facilitates positioning and securing the shin guard for precise transfer without shifting." } },
      { "x": 79.7, "y": 36.9, "title": { "es": "Botón de encendido", "en": "Power button" }, "description": { "es": "Enciende y apaga el equipo de forma rápida y segura.", "en": "Turns the machine on and off quickly and safely." } },
      { "x": 68.3, "y": 38.1, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "Programa la temperatura y el tiempo de sublimación con precisión para obtener resultados profesionales en cada espinillera.", "en": "Programs sublimation temperature and time precisely for professional results on every shin guard." } },
      { "x": 52.6, "y": 58.8, "title": { "es": "Plato intercambiable", "en": "Interchangeable plate" }, "description": { "es": "Sistema de cambio rápido de platos sin herramientas. Compatible con 3 tamaños para cubrir cualquier espinillera del mercado.", "en": "Tool-free quick-change plate system. Compatible with 3 sizes to cover any shin guard on the market." } }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimación.",
        "Reemplazo de láminas protectoras o revestimientos cuando presenten desgaste.",
        "Verificación y ajuste de la presión antes de cada sesión.",
        "Inspección y limpieza de los componentes internos periódicamente.",
        "Verificación y calibración de la temperatura con termómetro externo.",
        "Guardar los platos intercambiables en un lugar seco y limpio cuando no se usen."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings when worn.",
        "Pressure verification and adjustment before each session.",
        "Periodic inspection and cleaning of internal components.",
        "Temperature verification and calibration with external thermometer.",
        "Store interchangeable plates in a dry, clean place when not in use."
      ]
    }
  },
  {
    "id": "felina-prensa-swing-away-electrica",
    "slug": "felina-prensa-swing-away-electrica",
    "name": {
      "es": "Felina Prensa Swing-Away Eléctrica",
      "en": "Felina Electric Swing-Away Heat Press",
      "pt": "Felina Prensa Swing-Away Elétrica",
      "it": "Felina Pressa Swing-Away Elettrica"
    },
    "description": {
      "es": "Felina es una prensa de calor eléctrica de apertura giratoria (swing-away) de nivel profesional con pantalla táctil GY-13. Su sistema de apertura giratoria a 180° maximiza el espacio de trabajo y facilita la carga y descarga de materiales, mientras que sus avanzados sistemas de seguridad —protección anti-pellizco, operación de doble mano y programación en dos etapas— la convierten en una máquina tan potente como segura.",
      "en": "Felina is a professional electric swing-away heat press with a GY-13 touch screen. Its 180° swing-away opening maximizes workspace and simplifies material loading and unloading, while advanced safety systems — pinch protection, two-hand operation, and two-stage programming — make it as powerful as it is safe.",
      "pt": "Felina é uma prensa de calor elétrica de abertura giratória (swing-away) de nível profissional com ecrã tátil GY-13. A sua abertura giratória a 180° maximiza o espaço de trabalho e facilita o carregamento e descarregamento de materiais, enquanto os sistemas avançados de segurança a tornam tão potente quanto segura.",
      "it": "Felina è una pressa termica elettrica swing-away di livello professionale con touch screen GY-13. L'apertura girevole a 180° massimizza lo spazio di lavoro e semplifica il carico e scarico dei materiali, mentre i sistemi avanzati di sicurezza la rendono potente quanto sicura."
    },
    "image": "https://beinsen.com/wp-content/uploads/2024/01/felina-beinsen.png",
    "price": "Consultar PVP",
    "size": { "es": "Estándar", "en": "Standard", "pt": "Padrão", "it": "Standard" },
    "features": {
      "es": [
        "Apertura giratoria swing-away 180° con base de cambio rápido y deslizamiento",
        "Controlador táctil GY-13 con 3 memorias, contador de producción y ajuste de presión 0-8",
        "Protección anti-pellizco, operación de doble mano y parada de emergencia"
      ],
      "en": [
        "180° swing-away opening with quick-change sliding base",
        "GY-13 touch screen controller with 3 memories, production counter and 0-8 pressure adjustment",
        "Pinch protection, two-hand operation and emergency stop"
      ],
      "pt": [
        "Abertura giratória swing-away 180° com base de mudança rápida e deslizamento",
        "Controlador tátil GY-13 com 3 memórias, contador de produção e ajuste de pressão 0-8",
        "Proteção anti-aperto, operação de duas mãos e paragem de emergência"
      ],
      "it": [
        "Apertura girevole swing-away 180° con base a cambio rapido e scorrimento",
        "Controller touch GY-13 con 3 memorie, contatore di produzione e regolazione pressione 0-8",
        "Protezione anti-pizzico, operazione a due mani e arresto di emergenza"
      ]
    },
    "accessories": [
      { "id": "almohadilla-teflon-termorresistente-40x50" },
      { "id": "almohadilla-silicona-40x50" },
      { "id": "termometro-digital-infrarrojos-it122" },
      { "id": "mesa-universal-grande" },
      { "id": "guantes-protectores-algodon" },
      { "id": "lamina-teflon-40x50" }
    ],
    "consumables": [
      { "id": "cinta-termica-10mm" }
    ],
    "category": { "es": "Textil", "en": "Textile", "pt": "Têxtil", "it": "Tessile" },
    "openingType": { "es": "Swing-Away Eléctrica", "en": "Electric Swing-Away", "pt": "Swing-Away Elétrica", "it": "Swing-Away Elettrica" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Felina" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": { "es": "Eléctrica, swing-away automático", "en": "Electric, automatic swing-away" } },
      { "label": { "es": "Tamaño de platina", "en": "Platen Size" }, "value": "40×50 cm / 40×60 cm (16\"×20\" / 16\"×24\")" },
      { "label": { "es": "Apertura de platina inferior", "en": "Lower platen opening" }, "value": { "es": "Cambio rápido y deslizamiento", "en": "Quick-change and sliding" } },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-13 (pantalla táctil)" },
      { "label": { "es": "Memorias de configuración", "en": "Settings memories" }, "value": "3" },
      { "label": { "es": "Ajuste de presión", "en": "Pressure adjustment" }, "value": "0-8" },
      { "label": { "es": "Contador de producción", "en": "Production counter" }, "value": { "es": "Sí (automático)", "en": "Yes (automatic)" } },
      { "label": { "es": "Grosor máximo imprimible", "en": "Max Printable Thickness" }, "value": "35 mm" },
      { "label": { "es": "Botón de parada de emergencia", "en": "Emergency stop button" }, "value": { "es": "Sí", "en": "Yes" } },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "120V / 220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.8 kW (120V) / 2 kW (220V)" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 seg." },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature" }, "value": "225 °C" },
      { "label": { "es": "Dimensiones de embalaje", "en": "Packaging Dimensions" }, "value": "95×58×82 cm" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "95 kg (40×50) / 99 kg (40×60)" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "132.5 kg (40×50) / 136.5 kg (40×60)" }
    ],
    "benefits": [
      {
        "title": { "es": "Apertura giratoria 180° para mayor comodidad", "en": "180° swing-away opening for greater comfort" },
        "description": { "es": "La platina superior giratoria de 180° maximiza el espacio de trabajo, lo que permite cargar y descargar materiales con total facilidad y eficiencia, reduciendo la fatiga en jornadas largas.", "en": "The 180° swing-away upper platen maximizes workspace, making it easy to load and unload materials with total efficiency, reducing fatigue during long sessions." },
        "icon": "RotateCcw",
        "image": "/products/maquinas/felina-prensa-swing-away-electrica/02.png"
      },
      {
        "title": { "es": "Protección anti-pellizco inteligente", "en": "Smart pinch protection" },
        "description": { "es": "Los sensores inteligentes detectan obstrucciones e inmediatamente detienen y levantan la placa de calefacción, protegiendo al operario y al material en todo momento.", "en": "Smart sensors detect obstructions and immediately stop and lift the heating plate, protecting the operator and materials at all times." },
        "icon": "ShieldCheck",
        "image": "/products/maquinas/felina-prensa-swing-away-electrica/03.png"
      },
      {
        "title": { "es": "Operación de doble mano para mayor seguridad", "en": "Two-hand operation for enhanced safety" },
        "description": { "es": "El diseño ergonómico exige presiones simultáneas en ambos mandos para activar la prensa, eliminando la posibilidad de activación accidental y garantizando un entorno de trabajo seguro.", "en": "The ergonomic design requires simultaneous pressure on both controls to activate the press, eliminating accidental activation and ensuring a safe working environment." },
        "icon": "Hand",
        "image": "/products/maquinas/felina-prensa-swing-away-electrica/04.png"
      },
      {
        "title": { "es": "Programación de transferencia en dos etapas", "en": "Two-stage transfer programming" },
        "description": { "es": "Incluye ciclos de precalentamiento y transferencia preprogramados para eliminar la humedad y fijar los diseños a la perfección. También puedes omitir el precalentamiento para agilizar el proceso con materiales secos.", "en": "Includes preprogrammed preheating and transfer cycles to remove moisture and set designs perfectly. You can also skip preheating for faster processing with dry materials." },
        "icon": "Layers",
        "image": "/products/maquinas/felina-prensa-swing-away-electrica/01.png"
      },
      {
        "title": { "es": "Ajuste automático de presión por material", "en": "Automatic pressure adjustment by material" },
        "description": { "es": "El sensor inteligente de presión ajusta automáticamente la fuerza según el grosor del material, asegurando una distribución uniforme del calor para transferencias vibrantes y consistentes.", "en": "The smart pressure sensor automatically adjusts force based on material thickness, ensuring even heat distribution for vibrant and consistent transfers." },
        "icon": "Target"
      },
      {
        "title": { "es": "Controlador táctil GY-13 avanzado", "en": "Advanced GY-13 touch screen controller" },
        "description": { "es": "Gestiona todos los parámetros desde el panel táctil GY-13: guarda hasta 3 configuraciones, ajusta la presión de 0 a 8 y controla el contador de producción automático.", "en": "Manage all parameters from the GY-13 touch panel: save up to 3 settings, adjust pressure from 0 to 8, and control the automatic production counter." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Parada de emergencia con reinicio instantáneo", "en": "Emergency stop with instant restart" },
        "description": { "es": "En caso de emergencia, el sistema detiene y levanta la platina al instante. La función de reinicio con un toque permite reanudar rápidamente el flujo de trabajo sin pérdida de configuración.", "en": "In an emergency, the system stops and lifts the platen instantly. The one-touch restart function lets you quickly resume workflow without losing settings." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Base de cambio rápido y deslizante", "en": "Quick-change sliding base" },
        "description": { "es": "La platina inferior con sistema de cambio rápido y deslizamiento facilita la colocación precisa de prendas y materiales, aumentando la eficiencia y reduciendo errores de posicionamiento.", "en": "The lower platen with quick-change and sliding system makes precise garment and material placement easy, boosting efficiency and reducing positioning errors." },
        "icon": "ArrowRight"
      }
    ],
    "hotspots": [
      {
        "x": 79, "y": 24,
        "title": { "es": "Controlador táctil GY-13", "en": "GY-13 Touch Controller" },
        "description": { "es": "Panel táctil con 3 memorias de configuración, contador de producción automático y ajuste de presión 0-8. Temporizador 0-999 seg. y temperatura máxima de 225°C.", "en": "Touch panel with 3 configuration memories, automatic production counter and 0-8 pressure adjustment. Timer 0-999 sec. and maximum temperature of 225°C." }
      },
      {
        "x": 67, "y": 36,
        "title": { "es": "Botón de activación (doble mano)", "en": "Activation button (two-hand)" },
        "description": { "es": "Parte del sistema de seguridad de doble mano: ambos botones deben pulsarse simultáneamente para cerrar la prensa, garantizando que las manos del operario estén alejadas del área de riesgo.", "en": "Part of the two-hand safety system: both buttons must be pressed simultaneously to close the press, keeping the operator's hands away from the hazard area." }
      },
      {
        "x": 62, "y": 39,
        "title": { "es": "Brazo swing-away 180°", "en": "180° swing-away arm" },
        "description": { "es": "El brazo giratorio desplaza la platina superior 180° hacia un lado, dejando el área de trabajo completamente libre para colocar y retirar materiales con total comodidad.", "en": "The swing arm moves the upper platen 180° to the side, leaving the work area completely free to place and remove materials with ease." }
      },
      {
        "x": 79, "y": 38,
        "title": { "es": "Botón de emergencia", "en": "Emergency stop button" },
        "description": { "es": "Detiene y levanta la platina al instante en caso de emergencia. La función de reinicio con un toque permite reanudar el flujo de trabajo rápidamente sin pérdida de configuración.", "en": "Instantly stops and lifts the platen in an emergency. The one-touch restart function lets you quickly resume workflow without losing settings." }
      },
      {
        "x": 77, "y": 53,
        "title": { "es": "Ajuste de presión 0-8", "en": "Pressure adjustment 0-8" },
        "description": { "es": "Regulación precisa de la presión en 8 niveles para adaptarse al grosor de cada material. El sensor inteligente asegura una distribución uniforme del calor.", "en": "Precise pressure regulation in 8 levels to adapt to the thickness of each material. The smart sensor ensures even heat distribution." }
      },
      {
        "x": 80, "y": 64,
        "title": { "es": "Sistema de refrigeración", "en": "Cooling system" },
        "description": { "es": "Sistema de disipación de calor que mantiene la temperatura de los componentes internos dentro de los rangos seguros de operación, prolongando la vida útil de la máquina.", "en": "Heat dissipation system that keeps internal component temperatures within safe operating ranges, extending the machine's service life." }
      },
      {
        "x": 16, "y": 79,
        "title": { "es": "Placa calefactora 40×50 / 40×60 cm", "en": "40×50 / 40×60 cm heating plate" },
        "description": { "es": "Distribución de calor uniforme para sublimar materiales de hasta 35 mm de grosor. Disponible en dos tamaños para adaptarse a tus necesidades de producción.", "en": "Uniform heat distribution for sublimating materials up to 35 mm thick. Available in two sizes to suit your production needs." }
      }
    ],
    "downloads": [
      { "label": { "es": "Manual de Usuario Felina", "en": "Felina User Manual" }, "url": "/downloads/felina-manual.pdf" },
      { "label": { "es": "Ficha Técnica Felina", "en": "Felina Technical Sheet" }, "url": "/downloads/felina-ficha-tecnica.pdf" }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de la placa calefactora y la platina inferior tras cada jornada.",
        "Reemplazo de láminas protectoras o revestimientos cuando presenten desgaste.",
        "Verificación y calibración de la temperatura con termómetro externo periódicamente.",
        "Comprobación de los sensores de protección anti-pellizco y del sistema de doble mano.",
        "Inspección visual del sistema eléctrico y del cableado en busca de daños.",
        "Verificación del correcto funcionamiento del botón de parada de emergencia."
      ],
      "en": [
        "Regular cleaning of the heating plate and lower platen after each session.",
        "Replacement of protective sheets or coatings when worn.",
        "Periodic temperature verification and calibration with external thermometer.",
        "Check pinch protection sensors and two-hand system functionality.",
        "Visual inspection of the electrical system and wiring for damage.",
        "Verify the correct operation of the emergency stop button."
      ]
    }
  }
];

function uniqueStrings(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean)));
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

  const defaultStorySegments = [
    {
      title: { es: "Rendimiento profesional", en: "Professional performance" },
      description: {
        es: `${esName} ha sido diseñada para ofrecer resultados consistentes y alta productividad.`,
        en: `${enName} is designed to deliver consistent results and high productivity.`
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
      url: `/downloads/${plancha.slug}.pdf`
    }
  ];

  return {
    ...plancha,
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

export const planchasData: Plancha[] = rawPlanchasData.map(enrichPlancha).filter(p => !p.hidden).sort((a, b) => getSortName(a).localeCompare(getSortName(b), 'es'));
export const allPlanchasData: Plancha[] = rawPlanchasData.map(enrichPlancha).sort((a, b) => getSortName(a).localeCompare(getSortName(b), 'es'));

const rawAccessoriesData: Accessory[] = [
  {
    id: "laser-posicionamiento",
    slug: "laser-posicionamiento",
    name: { es: "Láser de Posicionamiento Extra", en: "Extra Positioning Laser" },
    price: 120,
    image: "https://beinsen.com/wp-content/uploads/2025/07/Sin-titulo-1000-x-1000-px-1.png",
    description: { es: "Diodo láser de alta visibilidad para repuesto.", en: "High-visibility laser diode for replacement." }
  },
  {
    "reference": "BPLAN159",
    id: "plato-resistencia-combo-38x38",
    slug: "plato-resistencia-combo-38x38",
    name: {
      es: "Plato y resistencia planchas para planchas combo Beinsen 38x38",
      en: "Plate and heating element for Beinsen combo 38x38 heat press",
      pt: "Prato e resistência para prensas combo Beinsen 38x38",
      it: "Piastra e resistenza per presse combo Beinsen 38x38"
    },
    price: "Consultar PVP",
    image: "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-resiplana_1.webp",
    description: {
      es: "Repuesto de plato y resistencia. Plato superior con resistencia incorporada, para todos los modelos combo 38X38 de 1ªGeneración. Este plato es el que aplica el calor sobre el objeto a planchar. Características: Dimensiones plato: 38 cm x 38 cm. Fundición a presión. Calor plano y uniforme. Material de aluminio fino. Fácil montaje.",
      en: "Replacement plate and heating element. Upper plate with built-in heating element, for all 1st Generation 38X38 combo models. Dimensions: 38x38cm. Die-cast. Flat and uniform heat. Thin aluminum material. Easy assembly.",
      pt: "Prato e resistência de substituição. Prato superior com resistência incorporada, para todos os modelos combo 38X38 de 1ª Geração. Dimensões: 38x38cm. Fundição sob pressão. Calor plano e uniforme. Material de alumínio fino. Fácil montagem.",
      it: "Piastra e resistenza di ricambio. Piastra superiore con resistenza incorporata, per tutti i modelli combo 38X38 di 1ª Generazione. Dimensioni: 38x38cm. Pressofusione. Calore piatto e uniforme. Sottile materiale in alluminio. Facile montaggio."
    },
    technicalSpecs: [
      { label: { es: "Compatibilidad", en: "Compatibility", pt: "Compatibilidade", it: "Compatibilità" }, value: "Planchas Combo Beinsen 1ªGen (38x38)" },
      { label: { es: "Dimensiones", en: "Dimensions", pt: "Dimensões", it: "Dimensioni" }, value: "38 x 38 cm" },
      { label: { es: "Material", en: "Material", pt: "Material", it: "Materiale" }, value: "Aluminio fundido" }
    ]
  },
  {
    "reference": "PLAACCA38",
    id: "almohadilla-silicona-38x38",
    slug: "almohadilla-silicona-38x38",
    name: {
      es: "Almohadilla de silicona de 38x38",
      en: "38x38 silicone pad",
      pt: "Almofada de silicone de 38x38",
      it: "Cuscinetto in silicone 38x38"
    },
    price: "Consultar PVP",
    image: "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-61-fucn8ygl._ac_uf894_1000_ql80_.webp",
    description: {
      es: "Almohadilla de silicona de 38x38 cm diseñada para proteger las prendas y garantizar una presión uniforme durante el transfer. Resistente al calor hasta 220ºC con espesor de 10mm.",
      en: "38x38 cm silicone pad designed to protect garments and ensure uniform pressure during transfer. Heat resistant up to 220ºC with 10mm thickness.",
      pt: "Almofada de silicone de 38x38 cm para proteger as peças e garantir pressão uniforme durante a transferência. Resistente ao calor até 220ºC com 10mm de espessura.",
      it: "Cuscinetto in silicone 38x38 cm per proteggere i capi e garantire una pressione uniforme durante il trasferimento. Resistente al calore fino a 220ºC con spessore di 10mm."
    },
    technicalSpecs: [
      { label: { es: "Material", en: "Material", pt: "Material", it: "Materiale" }, value: "Silicona de grado industrial / Industrial grade silicone" },
      { label: { es: "Dimensiones", en: "Dimensions", pt: "Dimensões", it: "Dimensioni" }, value: "38 x 38 cm" },
      { label: { es: "Espesor", en: "Thickness", pt: "Espessura", it: "Spessore" }, value: "10 mm" },
      { label: { es: "Temperatura máxima", en: "Maximum Temperature", pt: "Temperatura máxima", it: "Temperatura massima" }, value: "220ºC" }
    ],
    gallery: [
      "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/a/l/almohadilla_38x38.webp",
      "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-61-fucn8ygl._ac_uf894_1000_ql80_.webp",
      "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/7/1/71kmkhpeqol._ac_sl1500_-removebg-preview_2.webp"
    ]
  },
  {
    "reference": "BTEFL155",
    "id": "lamina-teflon-38x38",
    "slug": "lamina-teflon-38x38",
    "name": {
      "es": "Lámina de teflón de 38x38 cm",
      "en": "38x38 cm Teflon sheet",
      "pt": "Folha de teflon de 38x38 cm",
      "it": "Foglio di teflon 38x38 cm"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/p/t/ptfe-teflon-sheets-933-p-removebg-preview.webp",
    "description": {
      "es": "Lámina de teflón para proteger las planchas térmicas. Esta delgada lámina de material aislante influye más de lo que imaginamos tanto en los resultados como en la calidad de los productos sublimados y en la vida útil de las planchas térmicas.",
      "en": "Teflon sheet to protect heat plates. This thin insulating material has more impact than we imagine on results, quality of sublimated products and lifespan of heat plates.",
      "pt": "Folha de teflon para proteger as planchas térmicas. Esta fina lâmina de material isolante influencia mais do que imaginamos nos resultados, na qualidade dos produtos sublimados e na vida útil das planchas térmicas.",
      "it": "Foglio di teflon per proteggere le piastre termiche. Questo sottile materiale isolante ha più impatto di quanto immaginiamo sui risultati, sulla qualità dei prodotti sublimati e sulla durata delle piastre termiche."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Lámina de teflón PTFE / PTFE Teflon sheet" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "38 x 38 cm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "PTFE (Politetrafluoroetileno) / PTFE (Polytetrafluoroethylene)" },
      { "label": { "es": "Función principal", "en": "Main function", "pt": "Função principal", "it": "Funzione principale" }, "value": "Proteger planchas y prendas / Protect plates and garments" },
      { "label": { "es": "Beneficios", "en": "Benefits", "pt": "Benefícios", "it": "Vantaggi" }, "value": "Evita manchas de tintas, previene quemaduras, extiende vida útil de planchas" }
    ]
  },
  {
    "reference": "BTEFL156",
    "id": "lamina-teflon-40x50",
    "slug": "lamina-teflon-40x50",
    "name": {
      "es": "Lámina de teflón de 40x50 cm",
      "en": "40x50 cm Teflon sheet",
      "pt": "Folha de teflon de 40x50 cm",
      "it": "Foglio di teflon 40x50 cm"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-laminad_de_teflon.webp",
    "description": {
      "es": "Lámina de teflón para proteger las planchas térmicas. Esta delgada lámina de material aislante influye más de lo que imaginamos tanto en los resultados como en la calidad de los productos sublimados y en la vida útil de las planchas térmicas.",
      "en": "Teflon sheet to protect heat plates. This thin insulating material has more impact than we imagine on results, quality of sublimated products and lifespan of heat plates.",
      "pt": "Folha de teflon para proteger as planchas térmicas. Esta fina lâmina de material isolante influencia mais do que imaginamos nos resultados, na qualidade dos produtos sublimados e na vida útil das planchas térmicas.",
      "it": "Foglio di teflon per proteggere le piastre termiche. Questo sottile materiale isolante ha più impatto di quanto immaginiamo sui risultati, sulla qualità dei prodotti sublimati e sulla durata delle piastre termiche."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Lámina de teflón PTFE / PTFE Teflon sheet" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "40 x 50 cm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "PTFE (Politetrafluoroetileno) / PTFE (Polytetrafluoroethylene)" },
      { "label": { "es": "Función principal", "en": "Main function", "pt": "Função principal", "it": "Funzione principale" }, "value": "Proteger planchas y prendas / Protect plates and garments" },
      { "label": { "es": "Beneficios", "en": "Benefits", "pt": "Benefícios", "it": "Vantaggi" }, "value": "Evita manchas de tintas, previene quemaduras, extiende vida útil de planchas" }
    ]
  },
  {
    "reference": "REPBEIRES11B",
    "id": "resistencia-tazas-11oz-b",
    "slug": "resistencia-tazas-11oz-b",
    "name": {
      "es": "Resistencia cilíndrica para tazas de 11oz tipo B",
      "en": "Cylindrical heating element for 11oz mugs type B",
      "pt": "Resistência cilíndrica para canecas de 11oz tipo B",
      "it": "Resistenza cilindrica per tazze da 11oz tipo B"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/r/e/resistencia_11oz_01.webp",
    "description": {
      "es": "Para planchas de tazas Beinsen , ya sea como repuesto o accesorio, podrás personalizar tazas de 11 onzas con nuestra resistencia. Solo necesitas apretar unos tornillos y enchufar el conector a la plancha, ¡Listo, ya tienes conectada tu resistencia para empezar a funcionar con ella!. Recuerda dejarla unos minutos calentando en el primer uso.",
      "en": "For Beinsen mug presses, whether as a spare part or accessory, you can personalize 11-ounce mugs with our heating element. Just tighten some screws and plug the connector into the press. Remember to let it heat up for a few minutes on first use.",
      "pt": "Para prensas de canecas Beinsen, seja como peça de reposição ou acessório, pode personalizar canecas de 11 onças com nossa resistência. Lembre-se de deixá-la aquecer por alguns minutos na primeira utilização.",
      "it": "Per le presse per tazze Beinsen, come pezzo di ricambio o accessorio, puoi personalizzare tazze da 11 once con la nostra resistenza. Ricordati di lasciarla riscaldare per qualche minuto al primo utilizzo."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "B (Conector hembra flotante / Floating female connector)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Alina, Aruba, Barein, Sicilia, Maine, Clara, Sore, Barahona" }
    ]
  },
  {
    "reference": "PLAACCRBE",
    "id": "resistencia-tazas-6-10oz",
    "slug": "resistencia-tazas-6-10oz",
    "name": {
      "es": "Resistencia cilíndrica para tazas de 6-10oz",
      "en": "Cylindrical heating element for 6-10oz mugs",
      "pt": "Resistência cilíndrica para canecas de 6-10oz",
      "it": "Resistenza cilindrica per tazze da 6-10oz"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/r/e/resistencia_11oz_01_1_1.webp",
    "description": {
      "es": "Para planchas de tazas Beinsen , ya sea como repuesto o accesorio, podrás personalizar tazas de 6 a 10 onzas con nuestra resistencia. Solo necesitas apretar unos tornillos y enchufar el conector a la plancha, ¡Listo, ya tienes conectada tu resistencia para empezar a funcionar con ella!. Recuerda dejarla unos minutos calentando en el primer uso.",
      "en": "For Beinsen mug presses, whether as a spare part or accessory, you can personalize 6 to 10-ounce mugs with our heating element. Just tighten some screws and plug the connector into the press. Remember to let it heat up for a few minutes on first use.",
      "pt": "Para prensas de canecas Beinsen, seja como peça de reposição ou acessório, pode personalizar canecas de 6 a 10 onças com nossa resistência. Lembre-se de deixá-la aquecer por alguns minutos na primeira utilização.",
      "it": "Per le presse per tazze Beinsen, come pezzo di ricambio o accessorio, puoi personalizzare tazze da 6 a 10 once con la nostra resistenza. Ricordati di lasciarla riscaldare per qualche minuto al primo utilizzo."
    },
    "technicalSpecs": [
      { "label": { "es": "Capacidad", "en": "Capacity", "pt": "Capacidade", "it": "Capacità" }, "value": "6 a 10 onzas" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Alina, Aruba, Barahona, Barein, Sore, Maine" }
    ]
  },
  {
    "reference": "REPBEIRES11A",
    "id": "resistencia-tazas-11oz-a",
    "slug": "resistencia-tazas-11oz-a",
    "name": {
      "es": "Resistencia cilíndrica para tazas de 11oz tipo A",
      "en": "Cylindrical heating element for 11oz mugs type A",
      "pt": "Resistência cilíndrica para canecas de 11oz tipo A",
      "it": "Resistenza cilindrica per tazze da 11oz tipo A"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/r/e/resistencia_11oz_01_1.webp",
    "description": {
      "es": "Para planchas de tazas Beinsen , ya sea como repuesto o accesorio, podrás personalizar tazas de 11 onzas con nuestra resistencia. Solo necesitas apretar unos tornillos y enchufar el conector a la plancha, ¡Listo, ya tienes conectada tu resistencia para empezar a funcionar con ella!. Recuerda dejarla unos minutos calentando en el primer uso.",
      "en": "For Beinsen mug presses, whether as a spare part or accessory, you can personalize 11-ounce mugs with our heating element. Just tighten some screws and plug the connector into the press. Remember to let it heat up for a few minutes on first use.",
      "pt": "Para prensas de canecas Beinsen, seja como peça de reposição ou acessório, pode personalizar canecas de 11 onças com nossa resistência. Lembre-se de deixá-la aquecer por alguns minutos na primeira utilização.",
      "it": "Per le presse per tazze Beinsen, come pezzo di ricambio o accessorio, puoi personalizzare tazze da 11 once con la nostra resistenza. Ricordati di lasciarla riscaldare per qualche minuto al primo utilizzo."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "A (Conector macho / Male connector)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Sore, Andra" }
    ]
  },
  {
    "reference": "REPBEIRES17C",
    "id": "resistencia-tazas-conicas-17oz",
    "slug": "resistencia-tazas-conicas-17oz",
    "name": {
      "es": "Resistencia para tazas Cónicas de 17oz",
      "en": "17oz Conical mug heating element",
      "pt": "Resistência para canecas cónicas de 17oz",
      "it": "Resistenza per tazze coniche da 17oz"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/1/6/16_5cm..webp",
    "description": {
      "es": "Para planchas de tazas Beinsen , ya sea como repuesto o accesorio, podrás personalizar tazas cónicas de 17 onzas con nuestra resistencia. Solo necesitas apretar unos tornillos y enchufar el conector a la plancha, ¡Listo, ya tienes conectada tu resistencia para empezar a funcionar con ella!. Recuerda dejarla unos minutos calentando en el primer uso.",
      "en": "For Beinsen mug presses, whether as a spare part or accessory, you can personalize 17-ounce conical mugs with our heating element. Just tighten some screws and plug the connector into the press. Remember to let it heat up for a few minutes on first use.",
      "pt": "Para prensas de canecas Beinsen, seja como peça de reposição ou acessório, pode personalizar canecas cónicas de 17 onças com nossa resistência. Lembre-se de deixá-la aquecer por alguns minutos na primeira utilização.",
      "it": "Per le presse per tazze Beinsen, come pezzo di ricambio o accessorio, puoi personalizzare tazze coniche da 17 once con la nostra resistenza. Ricordati di lasciarla riscaldare per qualche minuto al primo utilizzo."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "16.5cm largo / 17oz" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Alina, Sicilia, Aruba, Maine" }
    ]
  },
  {
    "reference": "REPBEIRSBMHB",
    "id": "resistencia-doble-taza-11-15oz",
    "slug": "resistencia-doble-taza-11-15oz",
    "name": {
      "es": "Resistencia cilíndrica para 2 tazas de 11oz-15oz",
      "en": "Cylindrical heating element for 2 mugs 11oz-15oz",
      "pt": "Resistência cilíndrica para 2 canecas de 11oz-15oz",
      "it": "Resistenza cilindrica per 2 tazze 11oz-15oz"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/3/-/3-4_1_.webp",
    "description": {
      "es": "Amplía tus capacidades de personalización en esta resistencia para tazas para planchas transfer Beinsen. Este modelo está especialmente ideado para sublimar a la vez dos tazas de 11 onzas de capacidad, aunque seguro que le encuentras múltiples utilidades gracias a su tamaño.",
      "en": "Expand your personalization capabilities with this mug heating element for Beinsen transfer presses. This model is specially designed to sublimate two 11 ounce mugs at the same time, although surely you will find multiple uses thanks to its size.",
      "pt": "Expanda suas capacidades de personalização nesta resistência para canecas para prensas de transferência Beinsen. Especialmente projetado para sublimar duas canecas de 11 onças ao mesmo tempo.",
      "it": "Espandi le tue capacità di personalizzazione con questa resistenza per tazze per le presse transfer Beinsen. Appositamente progettato per sublimare due tazze da 11 once contemporaneamente."
    },
    "technicalSpecs": [
      { "label": { "es": "Altura", "en": "Height", "pt": "Altura", "it": "Altezza" }, "value": "22 cm" },
      { "label": { "es": "Diámetro", "en": "Diameter", "pt": "Diâmetro", "it": "Diametro" }, "value": "7.5 - 10 cm" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Alina, Sicilia, Maine, Barahona" }
    ]
  },
  {
    "reference": "90004029",
    "id": "plato-gorras-beinsen-riad",
    "slug": "plato-gorras-beinsen-riad",
    "name": {
      "es": "Plato para gorras para Beinsen Riad",
      "en": "Cap plate for Beinsen Riad",
      "pt": "Prato para bonés para Beinsen Riad",
      "it": "Piastra per cappellini per Beinsen Riad"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-img_1522.webp",
    "description": {
      "es": "Optimiza tu prensa térmica modelo Beinsen Riad con nuestro plato inferior para gorras. Diseñado específicamente para este modelo, nuestro plato inferior intercambiable te permite adaptar tu prensa térmica a diferentes tamaños de productos. Sea cual sea el tamaño que necesitas, nuestro plato inferior intercambiable te ofrece versatilidad y facilidad de uso. Fabricado con materiales de alta calidad, garantiza una distribución uniforme del calor y resultados de sublimación precisos. Mejora tu experiencia de personalización con nuestro plato inferior intercambiable para la prensa térmica Beinsen Riad. ¡Aprovecha al máximo tu equipo y crea productos personalizados de calidad excepcional!",
      "en": "Optimize your Beinsen Riad heat press with our lower cap plate. Specifically designed for this model, our interchangeable lower plate allows you to adapt your heat press to different product sizes. Manufactured with high quality materials, it guarantees uniform heat distribution and precise sublimation results.",
      "pt": "Otimize a sua prensa térmica modelo Beinsen Riad com nosso prato inferior para bonés. Projetado especificamente para este modelo, nosso prato inferior intercambiável permite adaptar a sua prensa térmica a diferentes tamanhos de produtos. Fabricado com materiais de alta qualidade para garantir distribuição uniforme e resultados precisos.",
      "it": "Ottimizza la tua pressa termica modello Beinsen Riad con la nostra piastra inferiore per cappellini. Progettata specificatamente per questo modello, la nostra piastra inferiore intercambiabile ti consente di adattare la tua pressa termica a diverse dimensioni di prodotti."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Riad, Pocola" }
    ]
  },
  {
    "reference": "90005119",
    "id": "resistencia-15x20-beinsen-riad",
    "slug": "resistencia-15x20-beinsen-riad",
    "name": {
      "es": "Resistencia de 15x20cm para plancha Beinsen Riad",
      "en": "15x20cm heating element for Beinsen Riad press",
      "pt": "Resistência de 15x20cm para prensa Beinsen Riad",
      "it": "Resistenza 15x20cm per pressa Beinsen Riad"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-img_1579.webp",
    "description": {
      "es": "Resistencia de 15x20cm. para prensa térmica de etiquetas y gorras Beinsen Riad. Permite cambiar el módulo de gorras a un plato plano pequeño ideal para etiquetas o diseños en bolsillos.",
      "en": "15x20cm heating element for Beinsen Riad label and cap heat press. Allows changing the cap module to a small flat plate ideal for labels or pocket designs.",
      "pt": "Resistência de 15x20cm. para prensa térmica de etiquetas e bonés Beinsen Riad. Ideal para logotipos e designs em bolsos.",
      "it": "Resistenza 15x20cm. per pressa termica per etichette e cappellini Beinsen Riad. Ideale per loghi e design su tasche."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Riad, Gante" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "15 x 20 cm" }
    ]
  },
  {
    "reference": "90006134",
    "id": "resistencia-gorras-beinsen-riad",
    "slug": "resistencia-gorras-beinsen-riad",
    "name": {
      "es": "Resistencia para gorras para Beinsen Riad",
      "en": "Cap heating element for Beinsen Riad",
      "pt": "Resistência para bonés para Beinsen Riad",
      "it": "Resistenza per cappellini per Beinsen Riad"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-img_1848_1_.webp",
    "description": {
      "es": "Resistencia para sublimar gorras para prensa térmica Beinsen Riad.",
      "en": "Cap sublimation heating element for Beinsen Riad heat press.",
      "pt": "Resistência para sublimar bonés para prensa térmica Beinsen Riad.",
      "it": "Resistenza per sublimare cappellini per pressa termica Beinsen Riad."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Riad, Pocola" }
    ]
  },
  {
    "reference": "90006380",
    "id": "plato-gorras-beinsen-obrei",
    "slug": "plato-gorras-beinsen-obrei",
    "name": {
      "es": "Plato para gorras para Beinsen Obrei",
      "en": "Cap plate for Beinsen Obrei",
      "pt": "Prato para bonés para Beinsen Obrei",
      "it": "Piastra per cappellini per Beinsen Obrei"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-20190422112715700.webp.webp",
    "description": {
      "es": "Optimiza tu prensa térmica modelo Beinsen Obrei con nuestro plato inferior para gorras. Diseñado específicamente para este modelo, nuestro plato inferior intercambiable te permite adaptar tu prensa térmica a diferentes tamaños de productos. Sea cual sea el tamaño que necesitas, nuestro plato inferior intercambiable te ofrece versatilidad y facilidad de uso. Fabricado con materiales de alta calidad, garantiza una distribución uniforme del calor y resultados de sublimación precisos. Mejora tu experiencia de personalización con nuestro plato inferior intercambiable para la prensa térmica Beinsen Obrei. ¡Aprovecha al máximo tu equipo y crea productos personalizados de calidad excepcional!",
      "en": "Optimize your Beinsen Obrei heat press with our lower cap plate. Specifically designed for this model, our interchangeable lower plate allows you to adapt your heat press to different product sizes. Manufactured with high quality materials, it guarantees uniform heat distribution and precise sublimation results.",
      "pt": "Otimize a sua prensa térmica modelo Beinsen Obrei com nosso prato inferior para bonés. Projetado especificamente para este modelo, nosso prato inferior intercambiável permite adaptar a sua prensa térmica a diferentes tamanhos de produtos. Fabricado com materiais de alta qualidade para garantir distribuição uniforme e resultados precisos.",
      "it": "Ottimizza la tua pressa termica modello Beinsen Obrei con la nostra piastra inferiore per cappellini. Progettata specificatamente per questo modello, la nostra piastra inferiore intercambiabile ti consente di adattare la tua pressa termica a diverse dimensioni di prodotti."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Obrei" }
    ]
  },
  {
    "reference": "PLAACRGOR",
    "id": "resistencia-gorras-combo-beinsen",
    "slug": "resistencia-gorras-combo-beinsen",
    "name": {
      "es": "Resistencia para gorras para plancha combo Beinsen",
      "en": "Cap heating element for Beinsen combo press",
      "pt": "Resistência para bonés para prensa combo Beinsen",
      "it": "Resistenza per cappellini per pressa combo Beinsen"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/t/r/transparent-jamaica5_1_1.webp",
    "description": {
      "es": "Resistencia de calor para gorras para plancha Combo de 1ª generación. Pieza de repuesto de metal. Superficie aproximada de planchado: 120 x 70 mm. Medidas del cable de conexión: 310 mm de largo.",
      "en": "Cap heating element for 1st generation Combo heat press. Metal replacement part. Approximate ironing surface: 120 x 70 mm. Connection cable measurements: 310 mm long.",
      "pt": "Resistência de calor para bonés para prensa Combo de 1ª geração. Peça de reposição de metal. Superfície de engomadoria aproximada: 120 x 70 mm. Medidas do cabo de ligação: 310 mm de comprimento.",
      "it": "Resistenza di calore per cappellini per pressa Combo di 1ª generazione. Pezzo di ricambio in metallo. Superficie di stiratura approssimativa: 120 x 70 mm. Misure cavo di collegamento: 310 mm di lunghezza."
    },
    "technicalSpecs": [
      { "label": { "es": "Medidas", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "122x150x100mm" },
      { "label": { "es": "Potencia", "en": "Power", "pt": "Potência", "it": "Potenza" }, "value": "300 W (220V)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Jamaica" }
    ]
  },
  {
    "reference": "90005081",
    "id": "resistencia-gorras-beinsen-obrei",
    "slug": "resistencia-gorras-beinsen-obrei",
    "name": {
      "es": "Resistencia para gorras para plancha Beinsen Obrei",
      "en": "Cap heating element for Beinsen Obrei press",
      "pt": "Resistência para bonés para prensa Beinsen Obrei",
      "it": "Resistenza per cappellini per pressa Beinsen Obrei"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/t/r/transparent-jamaica5_1_1_1.webp",
    "description": {
      "es": "Resistencia de calor para gorras para plancha Beinsen Obrei. Pieza de repuesto compuesta de metal. Superficie aproximada de planchado: 120 x 70 mm.",
      "en": "Cap heating element for Beinsen Obrei heat press. Metal replacement part. Approximate ironing surface: 120 x 70 mm.",
      "pt": "Resistência de calor para bonés para prensa Beinsen Obrei. Peça de reposição de metal. Superfície de engomadoria aproximada: 120 x 70 mm.",
      "it": "Resistenza di calore per cappellini per pressa Beinsen Obrei. Pezzo di ricambio in metallo. Superficie di stiratura approssimativa: 120 x 70 mm."
    },
    "technicalSpecs": [
      { "label": { "es": "Medidas", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "122x150x100mm" },
      { "label": { "es": "Potencia", "en": "Power", "pt": "Potência", "it": "Potenza" }, "value": "300 W (220V)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Obrei" }
    ]
  },
  {
    "reference": "REPBEIRESPL1",
    "id": "resistencia-15x15-beinsen-obrei",
    "slug": "resistencia-15x15-beinsen-obrei",
    "name": {
      "es": "Resistencia de 15x15cm para plancha Beinsen Obrei",
      "en": "15x15cm heating element for Beinsen Obrei press",
      "pt": "Resistência de 15x15cm para prensa Beinsen Obrei",
      "it": "Resistenza 15x15cm per pressa Beinsen Obrei"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-20190327163426731.webp.webp",
    "description": {
      "es": "Resistencia de 15x15cm. para prensa térmica Beinsen Obrei.",
      "en": "15x15cm heating element for Beinsen Obrei heat press.",
      "pt": "Resistência de 15x15cm. para prensa térmica Beinsen Obrei.",
      "it": "Resistenza 15x15cm. per pressa termica Beinsen Obrei."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "15 x 15 cm" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Obrei" }
    ]
  },
  {
    "reference": "90006402",
    "id": "plato-15x20-beinsen-riad",
    "slug": "plato-15x20-beinsen-riad",
    "name": {
      "es": "Plato de 15x20cm para Beinsen Riad",
      "en": "15x20cm plate for Beinsen Riad",
      "pt": "Prato de 15x20cm para Beinsen Riad",
      "it": "Piastra 15x20cm per Beinsen Riad"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-img_1786.webp",
    "description": {
      "es": "Optimiza tu prensa térmica modelo Beinsen Riad con nuestro plato inferior de 15x20cm. Diseñado específicamente para este modelo, nuestro plato inferior intercambiable te permite adaptar tu prensa térmica a diferentes tamaños de productos. Sea cual sea el tamaño que necesitas, nuestro plato inferior intercambiable te ofrece versatilidad y facilidad de uso. Fabricado con materiales de alta calidad, garantiza una distribución uniforme del calor y resultados de sublimación precisos. Mejora tu experiencia de personalización con nuestro plato inferior intercambiable para la prensa térmica Beinsen Riad. ¡Aprovecha al máximo tu equipo y crea productos personalizados de calidad excepcional!",
      "en": "Optimize your Beinsen Riad heat press with our 15x20cm lower plate. Specifically designed for this model, our interchangeable lower plate allows you to adapt your heat press to different product sizes.",
      "pt": "Otimize a sua prensa térmica modelo Beinsen Riad com nosso prato inferior de 15x20cm. Projetado especificamente para este modelo, nosso prato inferior intercambiável permite adaptar a sua prensa térmica a diferentes tamanhos de produtos.",
      "it": "Ottimizza la tua pressa termica modello Beinsen Riad con la nostra piastra inferiore da 15x20cm. Progettata specificatamente per questo modello, la nostra piastra inferiore intercambiabile ti consente di adattare la tua pressa termica a diverse dimensioni di prodotti."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Riad, Gante" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "15 x 20 cm" }
    ]
  },
  {
    "reference": "90006379",
    "id": "plato-base-15x15-beinsen-obrei",
    "slug": "plato-base-15x15-beinsen-obrei",
    "name": {
      "es": "Plato base de 15x15cm para plancha Beinsen Obrei",
      "en": "15x15cm base plate for Beinsen Obrei press",
      "pt": "Prato base de 15x15cm para prensa Beinsen Obrei",
      "it": "Piastra base 15x15cm per pressa Beinsen Obrei"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/t/r/transparent-20190327163533864.webp.webp",
    "description": {
      "es": "Plato base de 15x15 cm. para prensa térmica Beinsen Obrei. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa.",
      "en": "15x15 cm base plate for Beinsen Obrei heat press. Made of tough, high-quality materials to ensure uniform and precise application.",
      "pt": "Prato base de 15x15 cm para prensa térmica Beinsen Obrei. Fabricado com materiais resistentes e de alta qualidade para garantir uma aplicação uniforme e precisa.",
      "it": "Piastra base 15x15 cm per pressa termica Beinsen Obrei. Fabbricata con materiali resistenti e di alta qualità per garantire un'applicazione uniforme e precisa."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Obrei" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "15 x 15 cm" }
    ]
  },
  {
    "reference": "90020103",
    "id": "plato-intercambiable-18x18-barbados",
    "slug": "plato-intercambiable-18x18-barbados",
    "name": {
      "es": "Plato intercambiable de 18x18cm para Beinsen Barbados",
      "en": "18x18cm interchangeable plate for Beinsen Barbados",
      "pt": "Prato intercambiável de 18x18cm para Beinsen Barbados",
      "it": "Piastra intercambiabile 18x18cm per Beinsen Barbados"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/1/8/18cm._1.webp",
    "description": {
      "es": "Plato base intercambiable de 18 x 18 cm para tu plancha transfer Beinsen Barbados. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Perfecto para logos y pequeños diseños.",
      "en": "Interchangeable 18 x 18 cm base plate for your Beinsen Barbados transfer press. Made of tough, high-quality materials to ensure uniform and precise application. Perfect for logos and small designs.",
      "pt": "Prato base intercambiável de 18 x 18 cm para a sua prensa de transferência Beinsen Barbados. Fabricado com materiais resistentes e de alta qualidade para garantir uma aplicação uniforme e precisa. Perfeito para logótipos e designs pequenos.",
      "it": "Piastra base intercambiabile da 18 x 18 cm per la tua pressa transfer Beinsen Barbados. Fabbricata con materiali resistenti e di alta qualità per garantire un'applicazione uniforme e precisa. Perfetta per loghi e piccoli disegni."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Barbados" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "18 x 18 cm" }
    ]
  },
  {
    "reference": "90020104",
    "id": "plato-intercambiable-redondo-24-barbados",
    "slug": "plato-intercambiable-redondo-24-barbados",
    "name": {
      "es": "Plato intercambiable redondo de 24cm para Beinsen Barbados",
      "en": "24cm round interchangeable plate for Beinsen Barbados",
      "pt": "Prato intercambiável redondo de 24cm para Beinsen Barbados",
      "it": "Piastra intercambiabile tonda 24cm per Beinsen Barbados"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/2/4/24cm._1.webp",
    "description": {
      "es": "Plato base redondo de 24cm de diámetro para tu plancha transfer Beinsen Barbados. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Perfecto para platos, cojines y diseños circulares.",
      "en": "24cm diameter round base plate for your Beinsen Barbados transfer press. Made of tough, high-quality materials to ensure uniform and precise application. Perfect for plates, cushions and circular designs.",
      "pt": "Prato base redondo de 24cm de diâmetro para a sua prensa de transferência Beinsen Barbados. Fabricado com materiais resistentes e de alta qualidade para garantir uma aplicação uniforme e precisa. Perfeito para pratos, almofadas e designs circulares.",
      "it": "Piastra base rotonda da 24 cm di diametro per la tua pressa transfer Beinsen Barbados. Fabbricata con materiali resistenti e di alta qualità per garantire un'applicazione uniforme e precisa. Perfetta per piatti, cuscini e disegni circolari."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Barbados" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "24 cm diámetro" }
    ]
  },
  {
    "reference": "90020107",
    "id": "plato-intercambiable-zapatillas-barbados",
    "slug": "plato-intercambiable-zapatillas-barbados",
    "name": {
      "es": "Plato intercambiable para zapatillas para Barbados",
      "en": "Interchangeable shoe plate for Barbados",
      "pt": "Prato intercambiável para sapatilhas para Barbados",
      "it": "Piastra intercambiabile per scarpe per Barbados"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/3/6/36cm._1.webp",
    "description": {
      "es": "Plato base para zapatillas para tu plancha transfer Beinsen Barbados. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Si te dedicas a la personalización de productos, un plato para zapatillas puede ser una excelente inversión para ampliar tu catálogo y atraer más clientes.",
      "en": "Shoe base plate for your Beinsen Barbados transfer press. Made of tough, high-quality materials to ensure uniform and precise application. If you personalize products, a shoe plate can be an excellent investment to expand your catalog and attract more customers.",
      "pt": "Prato base para sapatilhas para a sua prensa de transferência Beinsen Barbados. Fabricado com materiais resistentes e de alta qualidade para garantir uma aplicação uniforme e precisa. Se você personaliza produtos, um prato para sapatilhas pode ser uma excelente expansão de catálogo.",
      "it": "Piastra base per scarpe per la tua pressa transfer Beinsen Barbados. Fabbricata con materiali resistenti e di alta qualità per garantire un'applicazione uniforme e precisa. Se personalizzi prodotti, una piastra per scarpe è un eccellente investimento."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Barbados" }
    ]
  },
  {
    "reference": "90020100",
    "id": "plato-intercambiable-18x38-barbados",
    "slug": "plato-intercambiable-18x38-barbados",
    "name": {
      "es": "Plato intercambiable de 18x38cm para Beinsen Barbados",
      "en": "18x38cm interchangeable plate for Beinsen Barbados",
      "pt": "Prato intercambiável de 18x38cm para Beinsen Barbados",
      "it": "Piastra intercambiabile 18x38cm per Beinsen Barbados"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/3/8/38cm._2.webp",
    "description": {
      "es": "Plato base de 18 x 38 cm para tu plancha transfer Beinsen Barbados. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Perfecto para camisetas infantiles y de tallas pequeñas.",
      "en": "18 x 38 cm base plate for your Beinsen Barbados transfer press. Made of tough, high-quality materials to ensure uniform and precise application. Perfect for children's and small size t-shirts.",
      "pt": "Prato base de 18 x 38 cm para a sua prensa de transferência Beinsen Barbados. Fabricado com materiais resistentes e de alta qualidade para garantir aplicação uniforme e precisa. Perfeito para t-shirts infantis e tamanhos pequenos.",
      "it": "Piastra base da 18 x 38 cm per la tua pressa transfer Beinsen Barbados. Fabbricata con materiali resistenti e di alta qualità per garantire un'applicazione uniforme e precisa. Perfetta per magliette da bambino e taglie piccole."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Barbados" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "18 x 38 cm" }
    ]
  },
  {
    "reference": "90020102",
    "id": "plato-intercambiable-18x45-barbados",
    "slug": "plato-intercambiable-18x45-barbados",
    "name": {
      "es": "Plato intercambiable de 18x45cm para Beinsen Barbados",
      "en": "18x45cm interchangeable plate for Beinsen Barbados",
      "pt": "Prato intercambiável de 18x45cm para Beinsen Barbados",
      "it": "Piastra intercambiabile 18x45cm per Beinsen Barbados"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/4/5/45cm._1.webp",
    "description": {
      "es": "Plato base de 18 x 45 cm para tu plancha transfer Beinsen Barbados. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Perfecto para prendas y textiles estrechos de gran longitud.",
      "en": "18 x 45 cm base plate for your Beinsen Barbados transfer press. Made of tough, high-quality materials to ensure uniform and precise application. Perfect for narrow and long textiles or garments.",
      "pt": "Prato base de 18 x 45 cm para a sua prensa de transferência Beinsen Barbados. Fabricado com materiais resistentes e de alta qualidade para garantir aplicação uniforme e precisa. Perfeito para peças de vestuário e têxteis estreitos e longos.",
      "it": "Piastra base da 18 x 45 cm per la tua pressa transfer Beinsen Barbados. Fabbricata con materiali resistenti e di alta qualità per garantire un'applicazione uniforme e precisa. Perfetta per capi e tessuti stretti e molto lunghi."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Barbados" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "18 x 45 cm" }
    ]
  },
  {
    "reference": "90020101",
    "id": "plato-intercambiable-30x35-barbados",
    "slug": "plato-intercambiable-30x35-barbados",
    "name": {
      "es": "Plato intercambiable de 30x35cm para Beinsen Barbados",
      "en": "30x35cm interchangeable plate for Beinsen Barbados",
      "pt": "Prato intercambiável de 30x35cm para Beinsen Barbados",
      "it": "Piastra intercambiabile 30x35cm per Beinsen Barbados"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/3/5/35cm._1.webp",
    "description": {
      "es": "Plato base de 30 x 35 cm para tu plancha transfer Beinsen Barbados. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Perfecto para materiales de tamaño mediano que requieren tensión.",
      "en": "30 x 35 cm base plate for your Beinsen Barbados transfer press. Made of tough, high-quality materials to ensure uniform and precise application. Perfect for medium-sized materials that require tension.",
      "pt": "Prato base de 30 x 35 cm para a sua prensa de transferência Beinsen Barbados. Fabricado com materiais resistentes e de alta qualidade para garantir aplicação uniforme e precisa. Perfeito para materiais de tamanho médio que requerem tensão.",
      "it": "Piastra base da 30 x 35 cm per la tua pressa transfer Beinsen Barbados. Fabbricata con materiali resistenti e di alta qualità per garantire un'applicazione uniforme e precisa. Perfetta per materiali di medie dimensioni che richiedono tensione."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Barbados" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "30 x 35 cm" }
    ]
  },
  {
    "reference": "MOLPLHOR",
    "id": "placa-polimero-platos-horno",
    "slug": "placa-polimero-platos-horno",
    "name": {
      "es": "Placa de polímero para platos de 6 a 10\" para horno",
      "en": "Polymer plate for 6 to 10\" plates for oven",
      "pt": "Placa de polímero para pratos de 6 a 10\" para forno",
      "it": "Piastra in polimero per piatti da 6 a 10\" per forno"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/3/d/3d-10.webp",
    "description": {
      "es": "Este molde de placa de polímero de sublimación se utiliza en una prensa térmica al vacío 3D para evitar que las placas de polímero se deformen durante el proceso de sublimación. El molde está dividido en varios círculos de diferentes tamaños, lo que le permite ajustar el molde para adaptarse a platos de distintos tamaños.",
      "en": "This sublimation polymer plate mold is used in a 3D vacuum heat press to prevent polymer plates from deforming during the sublimation process. The mold is divided into several circles of different sizes, allowing you to adjust the mold to fit different plate sizes.",
      "pt": "Este molde de placa de polímero de sublimação é utilizado em uma prensa térmica a vácuo 3D para evitar que as placas de polímero se deformem durante o processo de sublimação. O molde é dividido em vários círculos de diferentes tamanhos, permitindo ajustar o molde para caber em pratos de diferentes tamanhos.",
      "it": "Questo stampo per lastra in polimero a sublimazione viene utilizzato in una termopressa sottovuoto 3D per impedire la deformazione delle lastre in polimero durante il processo di sublimazione. Lo stampo è diviso in diversi cerchi di diverse dimensioni, consentendo di regolare lo stampo per adattarsi a piatti di diverse dimensioni."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Platos de 15 cm - 25 cm (6\"-10\") / 15 cm - 25 cm (6\"-10\") plates" },
      { "label": { "es": "Diámetros internos", "en": "Internal diameters", "pt": "Diâmetros internos", "it": "Diametri interni" }, "value": "13,5 cm, 15,5 cm, 17 cm, 20 cm" }
    ]
  },
  {
    "reference": "molplato3d",
    "id": "molde-3d-silicona-platos",
    "slug": "molde-3d-silicona-platos",
    "name": {
      "es": "Moldes 3D de silicona para platos en horno 3D",
      "en": "3D silicone molds for plates in 3D oven",
      "pt": "Moldes 3D de silicone para pratos em forno 3D",
      "it": "Stampi 3D in silicone per piatti in forno 3D"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-molplato3d.webp",
    "description": {
      "es": "Moldes 3D de silicona para platos en horno 3D. Estos moldes son el accesorio que se utiliza para personalizar platos en el horno de sublimación. Mediante su utilización, podrás conseguir y garantizar que el papel de sublimación se quede firmemente sujeto, y a su vez, conseguir una impresión perfecta especialmente en los bordes con el molde cuadrado universal.",
      "en": "3D silicone molds for plates in 3D oven. These molds are the accessory used to customize plates in the sublimation oven. By using them, you can ensure that the sublimation paper stays firmly attached and achieve a perfect print, especially at the edges with the universal square mold.",
      "pt": "Moldes 3D de silicone para pratos em forno 3D. Esses moldes são o acessório usado para personalizar pratos no forno de sublimação. Ao usá-los, você pode garantir que o papel de sublimação fique firmemente preso e obter uma impressão perfeita, especialmente nas bordas com o molde quadrado universal.",
      "it": "Stampi 3D in silicone per piatti in forno 3D. Questi stampi sono l'accessorio utilizzato per personalizzare i piatti nel forno di sublimazione. Utilizzandoli, puoi garantire che la carta di sublimazione rimanga saldamente fissata e ottenere una stampa perfetta, specialmente ai bordi con lo stampo quadrato universale."
    },
    "technicalSpecs": [
      { "label": { "es": "Molde redondo", "en": "Round mold", "pt": "Molde redondo", "it": "Stampo rotondo" }, "value": "Hasta 21 cm de diámetro / Up to 21 cm diameter" },
      { "label": { "es": "Molde cuadrado", "en": "Square mold", "pt": "Molde quadrado", "it": "Stampo quadrato" }, "value": "Universal para todos los tamaños de platos / Universal for all plate sizes" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Silicona de alta calidad / High quality silicone" },
      { "label": { "es": "Características", "en": "Features", "pt": "Características", "it": "Caratteristiche" }, "value": "Gran resistencia, tubo de enganche para vacío, fijación firmemente sujeta" },
      { "label": { "es": "Temperatura sublimación", "en": "Sublimation temperature", "pt": "Temperatura sublimação", "it": "Temperatura sublimazione" }, "value": "200ºC" },
      { "label": { "es": "Tiempo de curado", "en": "Curing time", "pt": "Tempo de cura", "it": "Tempo di polimerizzazione" }, "value": "7 minutos" }
    ]
  },
  {
    "reference": "MOLTAZCO",
    "id": "molde-3d-silicona-tazas-conicas-jarras",
    "slug": "molde-3d-silicona-tazas-conicas-jarras",
    "name": {
      "es": "Molde 3D de silicona para tazas cónicas y jarras de cerveza",
      "en": "3D silicone mold for conical mugs and beer steins",
      "pt": "Molde 3D de silicone para canecas cónicas e canecas de cerveja",
      "it": "Stampo 3D in silicone per tazze coniche e boccali di birra"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/3/1/31bgfw2l1dl._ac_.jpg",
    "description": {
      "es": "Molde 3D de silicona para tazas cónicas y jarras de cerveza de 12 y 17oz para Horno 3D. Este accesorio se utiliza para personalizar tazas cónicas y jarras de cerveza en el horno de sublimación, garantizando que el papel de sublimación se quede firmemente sujeto para una impresión perfecta. También se puede utilizar para cualquier otro tipo de tazas, incluyendo asas y partes inferiores.",
      "en": "3D silicone mold for conical mugs and beer steins 12 and 17oz for 3D oven. This accessory is used to personalize conical mugs and beer steins in the sublimation oven, ensuring that the sublimation paper stays firmly attached for perfect printing. Can also be used for any other type of mugs, including handles and bottoms.",
      "pt": "Molde 3D de silicone para canecas cónicas e canecas de cerveja de 12 e 17oz para Forno 3D. Este acessório é usado para personalizar canecas cónicas e canecas de cerveja no forno de sublimação, garantindo que o papel de sublimação fique firmemente preso para impressão perfeita. Também pode ser usado para qualquer outro tipo de caneca, incluindo alças e fundos.",
      "it": "Stampo 3D in silicone per tazze coniche e boccali di birra 12 e 17oz per forno 3D. Questo accessorio viene utilizzato per personalizzare tazze coniche e boccali di birra nel forno di sublimazione, garantendo che la carta di sublimazione rimanga saldamente fissata per una stampa perfetta. Può essere utilizzato anche per qualsiasi altro tipo di tazza, inclusi manici e fondi."
    },
    "technicalSpecs": [
      { "label": { "es": "Capacidad", "en": "Capacity", "pt": "Capacidade", "it": "Capacità" }, "value": "Tazas cónicas y jarras 12-17oz" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "145 x 110 x 175 mm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Silicona de alta calidad / High quality silicone" },
      { "label": { "es": "Características", "en": "Features", "pt": "Características", "it": "Caratteristiche" }, "value": "Tapa hermética, tubo de vacío integrado, fácil acoplamiento" },
      { "label": { "es": "Función", "en": "Function", "pt": "Função", "it": "Funzione" }, "value": "Personalización de tazas, asas, interiores y exteriores" },
      { "label": { "es": "Temperatura sublimación", "en": "Sublimation temperature", "pt": "Temperatura sublimação", "it": "Temperatura sublimazione" }, "value": "200ºC" },
      { "label": { "es": "Tiempo de curado", "en": "Curing time", "pt": "Tempo de cura", "it": "Tempo di polimerizzazione" }, "value": "7 minutos" }
    ]
  },
  {
    "reference": "MOLTAZRE",
    "id": "molde-3d-silicona-tazas-rectas",
    "slug": "molde-3d-silicona-tazas-rectas",
    "name": {
      "es": "Molde 3D de silicona para tazas rectas",
      "en": "3D silicone mold for straight mugs",
      "pt": "Molde 3D de silicone para canecas retas",
      "it": "Stampo 3D in silicone per tazze dritte"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/d/i/dise_o_sin_t_tulo_12__3.webp",
    "description": {
      "es": "Molde 3D de silicona para tazas rectas personalizables en Horno 3D. Este accesorio se utiliza para personalizar tazas rectas en el horno de sublimación, garantizando que el papel de sublimación se quede firmemente sujeto para una impresión perfecta. También se puede utilizar para cualquier otro tipo de tazas, incluyendo asas e interiores.",
      "en": "3D silicone mold for straight mugs customizable in 3D oven. This accessory is used to personalize straight mugs in the sublimation oven, ensuring that the sublimation paper stays firmly attached for perfect printing. Can also be used for any other type of mugs, including handles and interiors.",
      "pt": "Molde 3D de silicone para canecas retas personalizáveis em Forno 3D. Este acessório é usado para personalizar canecas retas no forno de sublimação, garantindo que o papel de sublimação fique firmemente preso para impressão perfeita. Também pode ser usado para qualquer outro tipo de caneca, incluindo alças e interiores.",
      "it": "Stampo 3D in silicone per tazze dritte personalizzabili in forno 3D. Questo accessorio viene utilizzato per personalizzare tazze dritte nel forno di sublimazione, garantendo che la carta di sublimazione rimanga saldamente fissata per una stampa perfetta. Può essere utilizzato anche per qualsiasi altro tipo di tazza, inclusi manici e interni."
    },
    "technicalSpecs": [
      { "label": { "es": "Altura", "en": "Height", "pt": "Altura", "it": "Altezza" }, "value": "17,8 cm" },
      { "label": { "es": "Diámetro superior", "en": "Top diameter", "pt": "Diâmetro superior", "it": "Diametro superiore" }, "value": "11 cm" },
      { "label": { "es": "Diámetro inferior", "en": "Bottom diameter", "pt": "Diâmetro inferior", "it": "Diametro inferiore" }, "value": "9 cm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Silicona de alta calidad / High quality silicone" },
      { "label": { "es": "Características", "en": "Features", "pt": "Características", "it": "Caratteristiche" }, "value": "Tapa hermética, tubo de vacío integrado, fácil acoplamiento" },
      { "label": { "es": "Temperatura sublimación", "en": "Sublimation temperature", "pt": "Temperatura sublimação", "it": "Temperatura sublimazione" }, "value": "220ºC" },
      { "label": { "es": "Tiempo de curado", "en": "Curing time", "pt": "Tempo de cura", "it": "Tempo di polimerizzazione" }, "value": "7 minutos" }
    ]
  },
  {
    "reference": "MOLTAZNR",
    "id": "molde-silicona-3-tazas-11oz",
    "slug": "molde-silicona-3-tazas-11oz",
    "name": {
      "es": "Molde de silicona para 3 tazas de 11oz MJ-LH11",
      "en": "Silicone mold for 3 mugs 11oz MJ-LH11",
      "pt": "Molde de silicone para 3 canecas de 11oz MJ-LH11",
      "it": "Stampo in silicone per 3 tazze da 11oz MJ-LH11"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/m/u/multipurpose-mug-clamp.front_.webp",
    "description": {
      "es": "Abrazadera multiusos que le permite sublimar hasta 3 tazas de 11oz a la vez, especialmente diseñada para optimizar el flujo de trabajo al transferir diseños a tazas mediante un horno 3D. Gracias a su fabricación con materiales de silicona ecológicos y su facilidad de uso, este producto permite obtener un producto final más preciso y mejorado. Proporciona un contacto más estrecho entre la taza y el papel de transferencia de sublimación al vacío, lo que garantiza un efecto de impresión impresionante.",
      "en": "Multipurpose clamp that allows you to sublimate up to 3 mugs of 11oz at once, specially designed to optimize workflow when transferring designs to mugs using a 3D oven. Thanks to its manufacture with ecological silicone materials and ease of use, this product allows you to obtain a more precise and improved final product. Provides closer contact between the mug and the sublimation transfer paper under vacuum, guaranteeing an impressive printing effect.",
      "pt": "Grampo multiuso que permite sublimar até 3 canecas de 11oz de uma só vez, especialmente projetado para otimizar o fluxo de trabalho ao transferir designs para canecas usando um forno 3D. Graças à sua fabricação com materiais de silicone ecológicos e facilidade de uso, este produto permite obter um produto final mais preciso e melhorado. Proporciona contato mais próximo entre a caneca e o papel de transferência de sublimação sob vácuo, garantindo um efeito de impressão impressionante.",
      "it": "Morsetto multipurpose che consente di sublimare fino a 3 tazze da 11oz contemporaneamente, appositamente progettato per ottimizzare il flusso di lavoro nel trasferimento di design su tazze utilizzando un forno 3D. Grazie alla sua realizzazione con materiali in silicone ecologico e facilità d'uso, questo prodotto consente di ottenere un prodotto finale più preciso e migliorato. Fornisce un contatto più stretto tra la tazza e la carta per il trasferimento di sublimazione sottovuoto, garantendo un effetto di stampa impressionante."
    },
    "technicalSpecs": [
      { "label": { "es": "Capacidad", "en": "Capacity", "pt": "Capacidade", "it": "Capacità" }, "value": "Hasta 3 tazas de 11oz / Up to 3 mugs 11oz" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Silicona ecológica de alta calidad / High quality ecological silicone" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Botellas 200/300/400ml, tazas 11oz, huchas 11oz" },
      { "label": { "es": "Características", "en": "Features", "pt": "Características", "it": "Caratteristiche" }, "value": "Resistente a altas temperaturas, respetuoso con el medio ambiente, fácil de usar" },
      { "label": { "es": "Uso recomendado", "en": "Recommended use", "pt": "Uso recomendado", "it": "Uso consigliato" }, "value": "Evite usar objetos afilados. Asegúrese de fijar firmemente el papel de sublimación antes de usar." }
    ]
  },
  {
    "reference": "MOLVOTAL",
    "id": "molde-3d-silicona-3-botellas-aluminio",
    "slug": "molde-3d-silicona-3-botellas-aluminio",
    "name": {
      "es": "Molde 3D de silicona para 3 botellas de aluminio",
      "en": "3D silicone mold for 3 aluminum bottles",
      "pt": "Molde 3D de silicone para 3 garrafas de alumínio",
      "it": "Stampo 3D in silicone per 3 bottiglie di alluminio"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-molvotal.webp",
    "description": {
      "es": "Molde de transferencia térmica con abrazadera multiusos para horno 3D. Permite sublimar hasta 3 botellas de aluminio a la vez, optimizando el flujo de trabajo. Proporciona un contacto más estrecho entre la botella y el papel de transferencia de sublimación al vacío, garantizando un efecto de impresión impresionante.",
      "en": "Heat transfer mold with multi-purpose clamp for 3D oven. Allows you to sublimate up to 3 aluminum bottles at once, optimizing workflow. Provides closer contact between the bottle and sublimation transfer paper under vacuum, guaranteeing stunning print effects.",
      "pt": "Molde de transferência térmica com grampo multiusos para forno 3D. Permite sublimar até 3 garrafas de alumínio por vez, otimizando o fluxo de trabalho. Oferece contato mais próximo entre a garrafa e o papel de transferência de sublimação a vácuo, garantindo efeitos de impressão impressionantes.",
      "it": "Stampo di trasferimento termico con morsa multiuso per forno 3D. Consente di sublimare fino a 3 bottiglie di alluminio contemporaneamente, ottimizzando il flusso di lavoro. Fornisce un contatto più stretto tra la bottiglia e la carta di trasferimento per sublimazione sottovuoto, garantendo effetti di stampa straordinari."
    },
    "technicalSpecs": [
      { "label": { "es": "Capacidad", "en": "Capacity", "pt": "Capacidade", "it": "Capacità" }, "value": "3 botellas / 3 bottles" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Botellas de aluminio 400/500/600/750ml" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Silicona ecológica / Eco-friendly silicone" },
      { "label": { "es": "Características", "en": "Features", "pt": "Características", "it": "Caratteristiche" }, "value": "Resistente a altas temperaturas, fácil de usar" },
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Abrazadera multiusos / Multi-purpose clamp" },
      { "label": { "es": "Aplicación", "en": "Application", "pt": "Aplicação", "it": "Applicazione" }, "value": "Horno 3D sublimación de botellas" }
    ]
  },
  {
    "reference": "BPLAN163",
    "id": "resistencia-platos-6-1-gen",
    "slug": "resistencia-platos-6-1-gen",
    "name": {
      "es": "Resistencia para platos 6\" - 1ª Generación",
      "en": "Heating element for 6\" plates - 1st Generation",
      "pt": "Resistência para pratos 6\" - 1ª Geração",
      "it": "Resistenza per piatti 6\" - 1ª Generazione"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/t/r/transparent-sin_re.webp",
    "description": {
      "es": "Resistencia de calor para planchas de platos. Este plato es el que aplica el calor sobre el objeto a planchar. Resistencia para platos de 6\".",
      "en": "Heating element for plate presses. This plate applies heat to the object to be pressed. 6\" plate heating element.",
      "pt": "Resistência de calor para prensas de pratos. Este prato aplica calor ao objeto a ser prensado. Resistência para pratos de 6\".",
      "it": "Resistenza di calore per presse per piatti. Questa piastra applica calore all'oggetto da pressare. Resistenza per piatti da 6\"."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "6\" (15 cm)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Plancha Combo de Beinsen 1ª Generación (Dorian)" }
    ]
  },
  {
    "reference": "REPBEIRES05P",
    "id": "resistencia-platos-5-dorian",
    "slug": "resistencia-platos-5-dorian",
    "name": {
      "es": "Resistencia para Platos de 5\" Dorian",
      "en": "5\" plate heating element for Dorian",
      "pt": "Resistência para pratos de 5\" Dorian",
      "it": "Resistenza per piatti da 5\" Dorian"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/t/r/transparent-resiplat5.webp",
    "description": {
      "es": "Resistencia de calor para plancha de Platos Beinsen de 5\"(12.6cm).",
      "en": "Heat heating element for Beinsen 5\"(12.6cm) Plate press.",
      "pt": "Resistência de calor para prensa de Pratos Beinsen de 5\"(12.6cm).",
      "it": "Resistenza di calore per pressa per Piatti Beinsen da 5\"(12.6cm)."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "5\" (12.6 cm)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Dorian" }
    ]
  },
  {
    "reference": "ACMPRTKENROD",
    "id": "rodillo-cintas",
    "slug": "rodillo-cintas",
    "name": {
      "es": "Rodillo para Cintas",
      "en": "Ribbon roller",
      "pt": "Rolo para fitas",
      "it": "Rullo per nastri"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-rodillo-kenia.webp",
    "description": {
      "es": "Accesorio para sublimar cintas de manera sencilla. Rodillo donde insertar los rollos de cinta y pasarlas gracias a su manivela. Diseñado exclusivamente para adaptarse a nuestra plancha térmica Kenia de Beinsen. CE aprobado. Fácil montaje y desmontaje.",
      "en": "Accessory to easily sublimate ribbons. Roller where to insert the ribbon rolls and pass them through thanks to its crank. Exclusively designed to adapt to our Beinsen Kenia heat press. CE approved. Easy assembly and disassembly.",
      "pt": "Acessório para sublimar fitas de forma simples. Rolo onde inserir os rolos de fita e passá-los graças à sua manivela. Projetado exclusivamente para se adaptar à nossa prensa térmica Kenia da Beinsen. Aprovado CE. Fácil montagem e desmontagem.",
      "it": "Accessorio per sublimare facilmente i nastri. Rullo in cui inserire i rotoli di nastro e farli scorrere grazie alla sua manovella. Progettato esclusivamente per adattarsi alla nostra pressa termica Kenia di Beinsen. Approvato CE. Facile montaggio e smontaggio."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Kenia" }
    ]
  },
  {
    "reference": "ACCALR80X1",
    "id": "almohadilla-algodon-80x110",
    "slug": "almohadilla-algodon-80x110",
    "name": {
      "es": "Almohadilla de algodón reciclado de 80 x 110cm",
      "en": "80 x 110cm recycled cotton pad",
      "pt": "Almofada de algodão reciclado de 80 x 110cm",
      "it": "Cuscinetto in cotone riciclato 80 x 110 cm"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/a/l/almohadillas-algod_n-reciclado-planchas-d2.webp",
    "description": {
      "es": "Alfombrilla de 80x110cm para planchas transfer de gran tamaño. Aseguran una presión uniforme durante el planchado.",
      "en": "80x110cm pad for large format heat presses. Ensures uniform pressure during pressing.",
      "pt": "Almofada de 80x110cm para planchas de grande formato. Garante pressão uniforme durante o prensamento.",
      "it": "Cuscinetto 80x110cm per presse termiche di grande formato. Garantisce pressione uniforme durante la pressatura."
    },
    "technicalSpecs": [
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Algodón reciclado / Recycled Cotton / Algodão reciclado / Cotone riciclato" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "80 x 110 cm" },
      { "label": { "es": "Grosor", "en": "Thickness", "pt": "Espessura", "it": "Spessore" }, "value": "50 mm" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature", "pt": "Temperatura máxima", "it": "Temperatura massima" }, "value": "220ºC" }
    ]
  },
  {
    "reference": "140000109P2",
    "id": "filtro-hepa-sx8-sz1-tb",
    "slug": "filtro-hepa-sx8-sz1-tb",
    "name": {
      "es": "Filtro Hepa para purificador de humos para SX8 y SZ1 TB",
      "en": "Hepa filter for smoke purifier SX8 and SZ1 TB",
      "pt": "Filtro Hepa para purificador de fumos para SX8 e SZ1 TB",
      "it": "Filtro Hepa per purificatore fumi per SX8 e SZ1 TB"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/f/i/filtro-hepa-purificador-humos-ho_3__1.webp",
    "description": {
      "es": "El Filtro HEPA para purificador de humos para hornos DTF InkOne SX8 / SZ1 es un recambio esencial que captura eficazmente micropartículas durante el proceso de curado, garantizando un entorno limpio y seguro en la impresión DTF profesional.",
      "en": "The HEPA filter for smoke purifier for DTF InkOne SX8 / SZ1 ovens is an essential replacement that effectively captures microparticles during the curing process, ensuring a clean and safe environment in professional DTF printing.",
      "pt": "O Filtro HEPA para purificador de fumos para fornos DTF InkOne SX8 / SZ1 é um recambio essencial que captura eficazmente micropartículas durante o processo de cura, garantindo um ambiente limpo e seguro na impressão DTF profissional.",
      "it": "Il Filtro HEPA per purificatore fumi per forni DTF InkOne SX8 / SZ1 è un ricambio essenziale che cattura efficacemente microparticelle durante il processo di polimerizzazione, garantendo un ambiente pulito e sicuro nella stampa DTF professionale."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "HEPA - Tamaño B (posición 2)" },
      { "label": { "es": "Eficiencia de filtración", "en": "Filtration efficiency", "pt": "Eficiência de filtração", "it": "Efficienza di filtrazione" }, "value": "99,97 % de partículas 0,3 micras" },
      { "label": { "es": "Mecanismo de filtrado", "en": "Filter mechanism", "pt": "Mecanismo de filtro", "it": "Meccanismo di filtrazione" }, "value": "Impacto, intercepción y difusión" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Fibras ultra finas de vidrio" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SX8, SZ1 (tipo TB)" },
      { "label": { "es": "Instalación", "en": "Installation", "pt": "Instalação", "it": "Installazione" }, "value": "Recambio rápido sin herramientas" }
    ]
  },
  {
    "reference": "140000109",
    "id": "filtro-hepa-sx8-sz1-ta",
    "slug": "filtro-hepa-sx8-sz1-ta",
    "name": {
      "es": "Filtro Hepa para purificador de humos para SX8 y SZ1 TA",
      "en": "Hepa filter for smoke purifier SX8 and SZ1 TA",
      "pt": "Filtro Hepa para purificador de fumos para SX8 e SZ1 TA",
      "it": "Filtro Hepa per purificatore fumi per SX8 e SZ1 TA"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/f/i/filtro-hepa-purificador-humos-ho_3_.webp",
    "description": {
      "es": "El Filtro HEPA para purificador de humos para hornos DTF InkOne SX8 / SZ1 es un recambio esencial que captura eficazmente micropartículas durante el proceso de curado, garantizando un entorno limpio y seguro en la impresión DTF profesional.",
      "en": "The HEPA filter for smoke purifier for DTF InkOne SX8 / SZ1 ovens is an essential replacement that effectively captures microparticles during the curing process, ensuring a clean and safe environment in professional DTF printing.",
      "pt": "O Filtro HEPA para purificador de fumos para fornos DTF InkOne SX8 / SZ1 é um recambio essencial que captura eficazmente micropartículas durante o processo de cura, garantindo um ambiente limpo e seguro na impressão DTF profissional.",
      "it": "Il Filtro HEPA per purificatore fumi per forni DTF InkOne SX8 / SZ1 è un ricambio essenziale che cattura efficacemente microparticelle durante il processo di polimerizzazione, garantendo un ambiente pulito e sicuro nella stampa DTF professionale."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "HEPA - Tamaño A (posición 1)" },
      { "label": { "es": "Eficiencia de filtración", "en": "Filtration efficiency", "pt": "Eficiência de filtração", "it": "Efficienza di filtrazione" }, "value": "99,97 % de partículas 0,3 micras" },
      { "label": { "es": "Mecanismo de filtrado", "en": "Filter mechanism", "pt": "Mecanismo de filtro", "it": "Meccanismo di filtrazione" }, "value": "Impacto, intercepción y difusión" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Fibras ultra finas de vidrio" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SX8, SZ1 (tipo TA)" },
      { "label": { "es": "Instalación", "en": "Installation", "pt": "Instalação", "it": "Installazione" }, "value": "Recambio rápido sin herramientas" }
    ]
  },
  {
    "reference": "140000110",
    "id": "filtro-carbon-sx8-sz1",
    "slug": "filtro-carbon-sx8-sz1",
    "name": {
      "es": "Filtro de Carbón activado para purificador de humos para SX8 y SZ1",
      "en": "Activated carbon filter for smoke purifier SX8 and SZ1",
      "pt": "Filtro de carvão ativado para purificador de fumos para SX8 e SZ1",
      "it": "Filtro a carboni attivi per purificatore fumi per SX8 e SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/f/i/filtro-carbon-activado-purificad_2_.png",
    "description": {
      "es": "El Filtro de Carbón activado para purificador de humos para SX8 y SZ1 es un recambio esencial para mantener el aire libre de vapores, olores y residuos químicos durante el curado DTF, asegurando un entorno de trabajo más limpio, seguro y libre de contaminantes.",
      "en": "The Activated carbon filter for smoke purifier SX8 and SZ1 is an essential replacement to keep air free from vapors, odors and chemical residues during DTF curing, ensuring a cleaner, safer and contaminant-free work environment.",
      "pt": "O Filtro de carvão ativado para purificador de fumos para SX8 e SZ1 é um recambio essencial para manter o ar livre de vapores, odores e resíduos químicos durante a cura DTF, garantindo um ambiente de trabalho mais limpo, seguro e livre de contaminantes.",
      "it": "Il Filtro a carboni attivi per purificatore fumi per SX8 e SZ1 è un ricambio essenziale per mantenere l'aria libera da vapori, odori e residui chimici durante la polimerizzazione DTF, garantendo un ambiente di lavoro più pulito, sicuro e privo di contaminanti."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo de filtrado", "en": "Filter type", "pt": "Tipo de filtro", "it": "Tipo di filtro" }, "value": "Carbón activado / Activated carbon" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SX8 y SZ1 / InkOne SX8 and SZ1" },
      { "label": { "es": "Función principal", "en": "Main function", "pt": "Função principal", "it": "Funzione principale" }, "value": "Elimina vapores, olores y residuos químicos / Removes vapors, odors and chemical residues" },
      { "label": { "es": "Intervalo de reemplazo", "en": "Replacement interval", "pt": "Intervalo de substituição", "it": "Intervallo di sostituzione" }, "value": "Cada 6 meses (uso continuo) / Every 6 months (continuous use)" },
      { "label": { "es": "Instalación", "en": "Installation", "pt": "Instalação", "it": "Installazione" }, "value": "Sustitución sencilla sin mantenimiento / Easy replacement without maintenance" }
    ]
  },
  {
    "reference": "140000164",
    "id": "cojinete-f6904rs-sx8-sz1",
    "slug": "cojinete-f6904rs-sx8-sz1",
    "name": {
      "es": "Cojinete de borde F6904RS para horno y aplicador DTF InkOne SX8 y SZ1",
      "en": "F6904RS flange bearing for DTF InkOne SX8 and SZ1 oven",
      "pt": "Rolamento de flange F6904RS para forno DTF InkOne SX8 e SZ1",
      "it": "Cuscinetto flangiato F6904RS per forno DTF InkOne SX8 e SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/c/o/cojinete-borde-f6901rs-horno-apl_3__1.webp",
    "description": {
      "es": "El Cojinete de borde F6904RS para horno y aplicador DTF InkOne SX8 y SZ1 es un recambio de alta precisión usado en ejes de guiado y en la cinta transportadora del horno, garantizando estabilidad térmica y movimiento suave del film. Su doble sellado 2RS lo protege del polvo, la humedad y los residuos del curado.",
      "en": "The F6904RS flange bearing for DTF InkOne SX8 and SZ1 oven is a high-precision replacement used in guide shafts and conveyor belts, ensuring thermal stability and smooth film movement. Its double 2RS seal protects against dust, moisture and curing residues.",
      "pt": "O Rolamento de flange F6904RS para forno DTF InkOne SX8 e SZ1 é um recambio de alta precisão usado em eixos de guia e na correia transportadora do forno, garantindo estabilidade térmica e movimento suave do filme. Seu duplo selo 2RS protege contra poeira, umidade e resíduos de cura.",
      "it": "Il Cuscinetto flangiato F6904RS per forno DTF InkOne SX8 e SZ1 è un ricambio di alta precisione utilizzato negli assi di guida e nei nastri trasportatori del forno, garantendo stabilità termica e movimento morbido del film. La sua doppia guarnizione 2RS protegge da polvere, umidità e residui di polimerizzazione."
    },
    "technicalSpecs": [
      { "label": { "es": "Diámetro interior", "en": "Inner diameter", "pt": "Diâmetro interno", "it": "Diametro interno" }, "value": "20 mm" },
      { "label": { "es": "Diámetro exterior", "en": "Outer diameter", "pt": "Diâmetro externo", "it": "Diametro esterno" }, "value": "37 mm" },
      { "label": { "es": "Ancho", "en": "Width", "pt": "Largura", "it": "Larghezza" }, "value": "9 mm" },
      { "label": { "es": "Tipo de sellado", "en": "Seal type", "pt": "Tipo de vedação", "it": "Tipo di sigillo" }, "value": "Doble 2RS / Double 2RS" },
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Rodamiento con brida / Flange bearing" }
    ]
  },
  {
    "reference": "140000163",
    "id": "cojinete-f6901rs-sx8-sz1",
    "slug": "cojinete-f6901rs-sx8-sz1",
    "name": {
      "es": "Cojinete de borde F6901RS para horno y aplicador DTF InkOne SX8 y SZ1",
      "en": "F6901RS flange bearing for DTF InkOne SX8 and SZ1 oven",
      "pt": "Rolamento de flange F6901RS para forno DTF InkOne SX8 e SZ1",
      "it": "Cuscinetto flangiato F6901RS per forno DTF InkOne SX8 e SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/c/o/cojinete-borde-f6901rs-horno-apl_3_.webp",
    "description": {
      "es": "El Cojinete de borde F6901RS para horno y aplicador DTF InkOne SX8 y SZ1 es el recambio técnico diseñado para garantizar un movimiento estable y preciso en los ejes de guiado del film. Su sellado doble RS lo protege del polvo y la humedad, asegurando un rendimiento fiable en entornos DTF exigentes.",
      "en": "The F6901RS flange bearing for DTF InkOne SX8 and SZ1 oven is the technical replacement designed to ensure stable and precise movement in the film guide shafts. Its double RS seal protects against dust and moisture, ensuring reliable performance in demanding DTF environments.",
      "pt": "O Rolamento de flange F6901RS para forno DTF InkOne SX8 e SZ1 é a peça de substituição técnica projetada para garantir movimento estável e preciso nos eixos de guia do filme. Seu selo duplo RS protege contra poeira e umidade, garantindo desempenho confiável em ambientes DTF exigentes.",
      "it": "Il Cuscinetto flangiato F6901RS per forno DTF InkOne SX8 e SZ1 è il ricambio tecnico progettato per garantire un movimento stabile e preciso negli alberi di guida del film. La sua doppia guarnizione RS protegge da polvere e umidità, garantendo prestazioni affidabili in ambienti DTF impegnativi."
    },
    "technicalSpecs": [
      { "label": { "es": "Diámetro interior", "en": "Inner diameter", "pt": "Diâmetro interno", "it": "Diametro interno" }, "value": "12 mm" },
      { "label": { "es": "Diámetro exterior", "en": "Outer diameter", "pt": "Diâmetro externo", "it": "Diametro esterno" }, "value": "24 mm" },
      { "label": { "es": "Ancho", "en": "Width", "pt": "Largura", "it": "Larghezza" }, "value": "6 mm" },
      { "label": { "es": "Tipo de sellado", "en": "Seal type", "pt": "Tipo de vedação", "it": "Tipo di sigillo" }, "value": "Doble RS / Double RS" }
    ]
  },
  {
    "reference": "140000157",
    "id": "fuente-alimentacion-24v-sx8-sz1-b",
    "slug": "fuente-alimentacion-24v-sx8-sz1-b",
    "name": {
      "es": "Fuente de alimentación de 24 V para horno y aplicador DTF InkOne SX8 y SZ1 tipo B",
      "en": "24V Power supply for DTF InkOne SX8 and SZ1 oven type B",
      "pt": "Fonte de alimentação de 24V para forno DTF InkOne SX8 e SZ1 tipo B",
      "it": "Alimentatore 24V per forno DTF InkOne SX8 e SZ1 tipo B"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/f/u/fuente-alimentacion-24v-horno-ap_4__1.webp",
    "description": {
      "es": "La Fuente de alimentación de 24 V para horno y aplicador DTF InkOne SX8 y SZ1 es un recambio que proporciona un suministro eléctrico estable, seguro y eficiente para los sistemas de calefacción y control del horno. Diseñada para ofrecer un rendimiento fiable y continuo, protege los componentes internos del equipo y asegura un funcionamiento sin interrupciones.",
      "en": "The 24V Power supply for DTF InkOne SX8 and SZ1 oven is a replacement that provides stable, safe and efficient electrical power for heating and control systems. Designed to deliver reliable and continuous performance, it protects internal equipment components and ensures uninterrupted operation.",
      "pt": "A Fonte de alimentação de 24V para forno DTF InkOne SX8 e SZ1 é um recambio que fornece uma alimentação elétrica estável, segura e eficiente para os sistemas de aquecimento e controle do forno. Projetada para fornecer desempenho confiável e contínuo, protege os componentes internos do equipamento e garante operação ininterrupta.",
      "it": "L'Alimentatore 24V per forno DTF InkOne SX8 e SZ1 è un ricambio che fornisce un'alimentazione elettrica stabile, sicura ed efficiente per i sistemi di riscaldamento e controllo del forno. Progettato per offrire prestazioni affidabili e continue, protegge i componenti interni dell'apparecchiatura e garantisce un funzionamento ininterrotto."
    },
    "technicalSpecs": [
      { "label": { "es": "Voltaje de salida", "en": "Output voltage", "pt": "Voltagem de saída", "it": "Tensione di uscita" }, "value": "24 V" },
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "B" },
      { "label": { "es": "Protección integrada", "en": "Integrated protection", "pt": "Proteção integrada", "it": "Protezione integrata" }, "value": "Sobrecarga, sobrecalentamiento, picos de tensión" },
      { "label": { "es": "Eficiencia energética", "en": "Energy efficiency", "pt": "Eficiência energética", "it": "Efficienza energetica" }, "value": "Alta / High" },
      { "label": { "es": "Construcción", "en": "Construction", "pt": "Construção", "it": "Costruzione" }, "value": "Carcasa metálica ventilada / Ventilated metal enclosure" },
      { "label": { "es": "Certificación", "en": "Certification", "pt": "Certificação", "it": "Certificazione" }, "value": "CE" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SX8, SZ1" }
    ]
  },
  {
    "id": "fuente-alimentacion-24v-sx8-sz1",
    "slug": "fuente-alimentacion-24v-sx8-sz1",
    "name": {
      "es": "Fuente de alimentación de 24 V para horno y aplicador DTF InkOne SX8 y SZ1",
      "en": "24V Power supply for DTF InkOne SX8 and SZ1 oven",
      "pt": "Fonte de alimentação de 24V para forno DTF InkOne SX8 e SZ1",
      "it": "Alimentatore 24V per forno DTF InkOne SX8 e SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/f/u/fuente-alimentacion-24v-horno-ap_4_.webp",
    "description": {
      "es": "La Fuente de alimentación de 24 V para horno y aplicador DTF InkOne SX8 y SZ1 es un recambio que proporciona un suministro eléctrico estable, seguro y eficiente para los sistemas de calefacción y control del horno. Diseñada para ofrecer un rendimiento fiable y continuo, protege los componentes internos del equipo y asegura un funcionamiento sin interrupciones.",
      "en": "The 24V Power supply for DTF InkOne SX8 and SZ1 oven is a replacement that provides stable, safe and efficient electrical power for heating and control systems. Designed to deliver reliable and continuous performance, it protects internal equipment components and ensures uninterrupted operation.",
      "pt": "A Fonte de alimentação de 24V para forno DTF InkOne SX8 e SZ1 é um recambio que fornece uma alimentação elétrica estável, segura e eficiente para os sistemas de aquecimento e controle do forno. Projetada para fornecer desempenho confiável e contínuo, protege os componentes internos do equipamento e garante operação ininterrupta.",
      "it": "L'Alimentatore 24V per forno DTF InkOne SX8 e SZ1 è un ricambio che fornisce un'alimentazione elettrica stabile, sicura ed efficiente per i sistemi di riscaldamento e controllo del forno. Progettato per offrire prestazioni affidabili e continue, protegge i componenti interni dell'apparecchiatura e garantisce un funzionamento ininterrotto."
    },
    "technicalSpecs": [
      { "label": { "es": "Voltaje de salida", "en": "Output voltage", "pt": "Voltagem de saída", "it": "Tensione di uscita" }, "value": "24 V" },
      { "label": { "es": "Protección integrada", "en": "Integrated protection", "pt": "Proteção integrada", "it": "Protezione integrata" }, "value": "Sobrecarga, sobrecalentamiento, picos de tensión" },
      { "label": { "es": "Eficiencia energética", "en": "Energy efficiency", "pt": "Eficiência energética", "it": "Efficienza energetica" }, "value": "Alta / High" },
      { "label": { "es": "Construcción", "en": "Construction", "pt": "Construção", "it": "Costruzione" }, "value": "Carcasa metálica ventilada / Ventilated metal enclosure" },
      { "label": { "es": "Certificación", "en": "Certification", "pt": "Certificação", "it": "Certificazione" }, "value": "CE" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SX8, SZ1" },
      { "label": { "es": "Instalación", "en": "Installation", "pt": "Instalação", "it": "Installazione" }, "value": "Sustitución directa sin adaptaciones" }
    ]
  },
  {
    "reference": "140000150",
    "id": "sensor-placa-calefactora-sx8-sz1",
    "slug": "sensor-placa-calefactora-sx8-sz1",
    "name": {
      "es": "Sensor de la placa calefactora delantera para horno y aplicador DTF InkOne SX8 y SZ1",
      "en": "Front heating plate sensor for DTF InkOne SX8 and SZ1 oven",
      "pt": "Sensor da placa de aquecimento frontal para forno DTF InkOne SX8 e SZ1",
      "it": "Sensore piastra riscaldante anteriore per forno DTF InkOne SX8 e SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/s/e/sensor-placa-calefactora-delante_3_.webp",
    "description": {
      "es": "El Sensor de la placa calefactora delantera para horno y aplicador DTF InkOne SX8 y SZ1 mide con precisión la temperatura del sistema de precalentamiento del film. Este repuesto diseñado para InkOne garantiza un control térmico estable, rendimiento constante y una instalación rápida y segura. Cable térmico protegido con funda aislante y conectores rápidos (quick-plug).",
      "en": "The Front heating plate sensor for DTF InkOne SX8 and SZ1 oven accurately measures the temperature of the film preheating system. This replacement designed for InkOne ensures stable thermal control, consistent performance and quick, safe installation. Protected thermal cable with insulating sleeve and quick-plug connectors.",
      "pt": "O Sensor da placa de aquecimento frontal para forno DTF InkOne SX8 e SZ1 mede com precisão a temperatura do sistema de pré-aquecimento do filme. Este recambio projetado para InkOne garante controle térmico estável, desempenho constante e instalação rápida e segura. Cabo térmico protegido com manga isolante e conectores rápidos.",
      "it": "Il Sensore della piastra riscaldante anteriore per forno DTF InkOne SX8 e SZ1 misura con precisione la temperatura del sistema di preriscaldamento del film. Questo ricambio progettato per InkOne garantisce un controllo termico stabile, prestazioni costanti e un'installazione rapida e sicura. Cavo termico protetto con guaina isolante e connettori rapidi."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Sensor tipo K" },
      { "label": { "es": "Rango", "en": "Range", "pt": "Gama", "it": "Gamma" }, "value": "0-800 °C" },
      { "label": { "es": "Sistema de conexión", "en": "Connection system", "pt": "Sistema de conexão", "it": "Sistema di connessione" }, "value": "Quick-plug" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SX8, SZ1" }
    ]
  },
  {
    "reference": "140000149",
    "id": "contactor-ca-220v-sx8-sz1",
    "slug": "contactor-ca-220v-sx8-sz1",
    "name": {
      "es": "Contactor de CA 220 V para horno y aplicador DTF InkOne SX8 y SZ1",
      "en": "220V AC Contactor for DTF InkOne SX8 and SZ1 oven",
      "pt": "Contator AC 220V para forno DTF InkOne SX8 e SZ1",
      "it": "Contattore AC 220V per forno DTF InkOne SX8 e SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/s/e/sensor-temperatura-horno-aplicad_1.webp",
    "description": {
      "es": "El Contactor de CA 220 V para horno y aplicador DTF InkOne SX8 y SZ1 es un recambio del sistema eléctrico de estos equipos, responsable de controlar y proteger la alimentación principal, garantizando un funcionamiento estable y seguro durante los procesos de curado DTF.",
      "en": "The 220V AC Contactor for DTF InkOne SX8 and SZ1 oven is an electrical system replacement responsible for controlling and protecting the main power supply, ensuring stable and safe operation during DTF curing processes.",
      "pt": "O Contator AC 220V para forno DTF InkOne SX8 e SZ1 é um recambio do sistema elétrico destes equipamentos, responsável por controlar e proteger a alimentação principal, garantindo funcionamento estável e seguro durante os processos de cura DTF.",
      "it": "Il Contattore AC 220V per forno DTF InkOne SX8 e SZ1 è un ricambio del sistema elettrico di questi apparecchi, responsabile del controllo e della protezione dell'alimentazione principale, garantendo un funzionamento stabile e sicuro durante i processi di polimerizzazione DTF."
    },
    "technicalSpecs": [
      { "label": { "es": "Función", "en": "Function", "pt": "Função", "it": "Funzione" }, "value": "Interruptor diferencial / Differential switch" },
      { "label": { "es": "Tensión nominal", "en": "Rated voltage", "pt": "Tensão nominal", "it": "Tensione nominale" }, "value": "230–400 V" },
      { "label": { "es": "Frecuencia", "en": "Frequency", "pt": "Frequência", "it": "Frequenza" }, "value": "50 Hz" },
      { "label": { "es": "Capacidad de corriente", "en": "Current capacity", "pt": "Capacidade de corrente", "it": "Capacità di corrente" }, "value": "40 A" },
      { "label": { "es": "Tiempo de respuesta", "en": "Response time", "pt": "Tempo de resposta", "it": "Tempo di risposta" }, "value": "≤ 0,1 s" },
      { "label": { "es": "Norma", "en": "Standard", "pt": "Norma", "it": "Norma" }, "value": "GB/T16917.22" }
    ]
  },
  {
    "reference": "140000129",
    "id": "sensor-temperatura-sz1",
    "slug": "sensor-temperatura-sz1",
    "name": {
      "es": "Sensor de temperatura para horno y aplicador DTF InkOne SZ1",
      "en": "Temperature sensor for DTF InkOne SZ1 oven",
      "pt": "Sensor de temperatura para forno DTF InkOne SZ1",
      "it": "Sensore di temperatura per forno DTF InkOne SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/s/e/sensor-temperatura-horno-aplicad.webp",
    "description": {
      "es": "El Sensor de temperatura para horno y aplicador DTF InkOne SZ1 es el recambio del dispositivo que mide con precisión la temperatura interna del equipo durante el curado de transfers. Función clave para asegurar una fusión homogénea del polvo de poliamida. Conectores rápidos tipo quick-plug y cable térmico protegido con funda aislante resistente al calor.",
      "en": "The Temperature sensor for DTF InkOne SZ1 oven is the replacement device that accurately measures the internal temperature of the equipment during transfer curing. Key function to ensure uniform fusion of polyamide powder. Quick-plug connectors and thermal cable protected with heat-resistant insulating sleeve.",
      "pt": "O Sensor de temperatura para forno DTF InkOne SZ1 é o recambio do dispositivo que mede com precisão a temperatura interna do equipamento durante a cura dos transfers. Função chave para garantir a fusão homogênea do pó de poliamida. Conectores rápidos e cabo térmico protegido com manga isolante resistente ao calor.",
      "it": "Il Sensore di temperatura per forno DTF InkOne SZ1 è il ricambio del dispositivo che misura con precisione la temperatura interna dell'apparecchiatura durante la polimerizzazione dei transfer. Funzione chiave per garantire una fusione omogenea della polvere di poliammide. Connettori rapidi e cavo termico protetto con guaina isolante termoresistente."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SZ1" },
      { "label": { "es": "Instalación", "en": "Installation", "pt": "Instalação", "it": "Installazione" }, "value": "Plug-and-play" }
    ]
  },
  {
    "reference": "140000147",
    "id": "motor-deposito-polvo-sx8",
    "slug": "motor-deposito-polvo-sx8",
    "name": {
      "es": "Motor del depósito del polvo DTF para horno y aplicador DTF InkOne SX8",
      "en": "DTF powder tank motor for DTF InkOne SX8 oven",
      "pt": "Motor do tanque de pó DTF para forno DTF InkOne SX8",
      "it": "Motore serbatoio polvere DTF per forno DTF InkOne SX8"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/m/o/motor-deposito-polvo-dtf-horno-a_3_.webp",
    "description": {
      "es": "El Motor del depósito del polvo DTF para horno y aplicador DTF InkOne SX8 es una pieza de recambio del sistema de aplicación de polvo, responsable de regular la velocidad de aplicación del polvo adhesivo antes de que el film pase a la cámara de sacudida. Garantiza una dispensación constante y uniforme del polvo DTF para obtener resultados óptimos en cada impresión.",
      "en": "The DTF powder tank motor for DTF InkOne SX8 oven is a replacement part of the powder application system, responsible for regulating the speed of adhesive powder application before the film passes to the shake chamber. Ensures constant and uniform DTF powder dispensing for optimal results in every print.",
      "pt": "O Motor do tanque de pó DTF para forno DTF InkOne SX8 é uma peça de reposição do sistema de aplicação de pó, responsável por regular a velocidade de aplicação do pó adesivo antes do filme passar para a câmara de agitação. Garante dispensação constante e uniforme do pó DTF para resultados ótimos em cada impressão.",
      "it": "Il Motore serbatoio polvere DTF per forno DTF InkOne SX8 è una parte di ricambio del sistema di applicazione della polvere, responsabile della regolazione della velocità di applicazione della polvere adesiva prima che il film passi nella camera di agitazione. Garantisce un'erogazione costante e uniforme della polvere DTF per risultati ottimali in ogni stampa."
    },
    "technicalSpecs": [
      { "label": { "es": "Función", "en": "Function", "pt": "Função", "it": "Funzione" }, "value": "Controla velocidad y flujo del polvo en el depósito de aplicación" },
      { "label": { "es": "Rendimiento", "en": "Performance", "pt": "Desempenho", "it": "Prestazioni" }, "value": "Dispensación constante y uniforme del polvo DTF" },
      { "label": { "es": "Instalación", "en": "Installation", "pt": "Instalação", "it": "Installazione" }, "value": "Sustitución sencilla sin necesidad de herramientas especiales" },
      { "label": { "es": "Construcción", "en": "Construction", "pt": "Construção", "it": "Costruzione" }, "value": "Diseño robusto fabricado para soportar uso continuo en producción DTF" },
      { "label": { "es": "Aplicación", "en": "Application", "pt": "Aplicação", "it": "Applicazione" }, "value": "Sistema de aplicación de polvo adhesivo DTF / DTF adhesive powder application system" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SX8" }
    ]
  },
  {
    "reference": "140000170",
    "id": "rele-intermedio-24v-sz1",
    "slug": "rele-intermedio-24v-sz1",
    "name": {
      "es": "Relé intermedio de 24V + base para horno y aplicador InkOne SZ1",
      "en": "24V intermediate relay + base for InkOne SZ1 oven",
      "pt": "Relé intermediário 24V + base para forno InkOne SZ1",
      "it": "Relè intermedio 24V + base per forno InkOne SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/r/e/rele-intermedio-24v-base-horno-a_3_.webp",
    "description": {
      "es": "El Relé intermedio de 24 V + base para horno y aplicador DTF InkOne SZ1 es el recambio del dispositivo que permite, a la señal de control de 24 V, accionar el contactor de potencia de CA, asegurando una conmutación fiable y segura del sistema de secado. Conjunto con socket/soporte para montaje en carril DIN incluido.",
      "en": "The 24V intermediate relay + base for DTF InkOne SZ1 applicator oven is the replacement device that allows the 24V control signal to actuate the AC power contactor, ensuring reliable and safe switching of the drying system. Set with socket/support for DIN rail mounting included.",
      "pt": "O Relé intermediário de 24V + base para forno e aplicador DTF InkOne SZ1 é a peça de reposição que permite à sinal de controle de 24V acionar o contator de potência de CA, garantindo uma comutação confiável e segura do sistema de secagem. Conjunto com soquete para montagem em trilho DIN incluído.",
      "it": "Il Relè intermedio 24V + base per forno e applicatore DTF InkOne SZ1 è il dispositivo di ricambio che consente al segnale di controllo 24V di azionare il contattore di potenza CA, garantendo una commutazione affidabile e sicura del sistema di essiccazione. Set con zoccolo/supporto per montaggio su guida DIN incluso."
    },
    "technicalSpecs": [
      { "label": { "es": "Tensión de control", "en": "Control voltage", "pt": "Tensão de controle", "it": "Tensione di controllo" }, "value": "Bobina de 24 V DC" },
      { "label": { "es": "Capacidad de conmutación", "en": "Switching capacity", "pt": "Capacidade de comutação", "it": "Capacità di commutazione" }, "value": "5A a 250V AC o 5A a 28V DC (IEC255)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SZ1" }
    ]
  },
  {
    "reference": "140000146",
    "id": "rele-estado-solido-sz1",
    "slug": "rele-estado-solido-sz1",
    "name": {
      "es": "Relé de estado sólido CDSSR-1DA 15DA para horno aplicador DTF InkOne SZ1",
      "en": "CDSSR-1DA 15DA Solid state relay for DTF InkOne SZ1 oven",
      "pt": "Relé de estado sólido CDSSR-1DA 15DA para forno DTF InkOne SZ1",
      "it": "Relè a stato solido CDSSR-1DA 15DA per forno DTF InkOne SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/r/e/rele-estado-solido-cdssr-1da-15d_4_.webp",
    "description": {
      "es": "El Relé de estado sólido CDSSR-1DA 15DA para horno aplicador DTF InkOne SZ1 es una pieza de recambio esencial para el control de corriente alterna. Este componente garantiza un funcionamiento continuo, estable y silencioso, ideal para equipos que operan en procesos de curado térmico prolongado. Tipo SSR sin partes móviles, ofrece mayor durabilidad. Eficiencia energética y conmutación rápida y segura.",
      "en": "The CDSSR-1DA 15DA Solid state relay for DTF InkOne SZ1 applicator oven is an essential replacement part for AC control. This component guarantees continuous, stable and silent operation. SSR type with no moving parts, energy efficient and fast switching.",
      "pt": "O Relé de estado sólido CDSSR-1DA 15DA para forno DTF InkOne SZ1 é uma peça de reposição essencial para o controle CA. Este componente garante um funcionamento contínuo, estável e silencioso. Tipo SSR sem partes móveis, eficiente em energia e comutação rápida.",
      "it": "Il relè a stato solido CDSSR-1DA 15DA per forno DTF InkOne SZ1 è una parte di ricambio essenziale per il controllo CA. Questo componente garantisce un funzionamento continuo, stabile e silenzioso. Tipo SSR senza parti mobili, alta efficienza e commutazione veloce."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "SSR (Solid State Relay)" },
      { "label": { "es": "Modelo", "en": "Model", "pt": "Modelo", "it": "Modello" }, "value": "CDSSR-DA-4815" },
      { "label": { "es": "Entrada / Salida", "en": "Input / Output", "pt": "Entrada / Saída", "it": "Ingresso / Uscita" }, "value": "INPUT 3-32 VDC | OUTPUT 15A 24-480VAC" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SZ1" }
    ]
  },
  {
    "reference": "140000114",
    "id": "rele-hornos-sx8-sz1",
    "slug": "rele-hornos-sx8-sz1",
    "name": {
      "es": "Relé para hornos DTF InkOne SX8 / SZ1",
      "en": "Relay for DTF InkOne SX8 / SZ1 ovens",
      "pt": "Relé para fornos DTF InkOne SX8 / SZ1",
      "it": "Relè per forni DTF InkOne SX8 / SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/r/e/rele-hornos-dtf-inkone-sx8-sz1_2_.webp",
    "description": {
      "es": "El Relé para hornos DTF InkOne SZ1 es una pieza de recambio esencial para el control de corriente alterna en estos equipos. Se trata de un relé de estado sólido, silencioso, seguro y eficiente, diseñado para garantizar un funcionamiento continuo y sin interrupciones. Aislamiento eléctrico mediante optoacoplador.",
      "en": "The Relay for DTF InkOne SZ1 ovens is an essential replacement part for alternating current control in these devices. It is a solid state relay, silent, safe and efficient, designed to ensure continuous operation without interruptions. Electrical isolation by optocoupler.",
      "pt": "O Relé para fornos DTF InkOne SZ1 é uma peça de reposição essencial para controle de corrente alternada nestes equipamentos. É um relé de estado sólido, silencioso, seguro e eficiente, projetado para garantir operação contínua e sem interrupções. Isolamento elétrico via optoacoplador.",
      "it": "Il Relè per forni DTF InkOne SZ1 è una parte di ricambio essenziale per il controllo della corrente alternata in queste apparecchiature. Si tratta di un relè a stato solido, silenzioso, sicuro ed efficiente, progettato per garantire un funzionamento continuo e senza interruzioni. Isolamento elettrico tramite optoisolatore."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Relé de estado sólido (SSR)" },
      { "label": { "es": "Modelo", "en": "Model", "pt": "Modelo", "it": "Modello" }, "value": "SSR-40DAH" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SX8, SZ1" }
    ]
  },
  {
    "reference": "140000115",
    "id": "placa-base-hornos-sx8-sz1",
    "slug": "placa-base-hornos-sx8-sz1",
    "name": {
      "es": "Placa base para hornos DTF InkOne SX8 / SZ1",
      "en": "Motherboard for DTF InkOne SX8 / SZ1 ovens",
      "pt": "Placa principal para fornos DTF InkOne SX8 / SZ1",
      "it": "Scheda madre per forni DTF InkOne SX8 / SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/p/l/placa-base-hornos-dtf-inkone-sx8.png",
    "description": {
      "es": "La Placa base para hornos DTF InkOne SX8 / SZ1 es el componente clave que gestiona todos los procesos electrónicos del horno, garantizando un funcionamiento preciso, seguro y coordinado. Asegura el control eficiente del curado, el avance del film y los sistemas de enfriamiento.",
      "en": "The Motherboard for DTF InkOne SX8 / SZ1 ovens is the key component that manages all electronic processes of the oven, ensuring precise, safe and coordinated operation. Ensures efficient control of curing, film advancement and cooling systems.",
      "pt": "A Placa principal para fornos DTF InkOne SX8 / SZ1 é o componente-chave que gerencia todos os processos eletrônicos do forno, garantindo operação precisa, segura e coordenada. Garante controle eficiente da cura, avanço do filme e sistemas de resfriamento.",
      "it": "La Scheda madre per forni DTF InkOne SX8 / SZ1 è il componente chiave che gestisce tutti i processi elettronici del forno, garantendo un funzionamento preciso, sicuro e coordinato. Assicura il controllo efficiente della polimerizzazione, dell'avanzamento del film e dei sistemi di raffreddamento."
    },
    "technicalSpecs": [
      { "label": { "es": "Función principal", "en": "Main function", "pt": "Função principal", "it": "Funzione principale" }, "value": "Control central del horno que coordina todas las funciones electrónicas" },
      { "label": { "es": "Gestión del proceso", "en": "Process management", "pt": "Gestão do processo", "it": "Gestione del processo" }, "value": "Supervisa temperatura, avance del film, agitación de polvo y ventiladores de enfriamiento" },
      { "label": { "es": "Características", "en": "Features", "pt": "Características", "it": "Caratteristiche" }, "value": "Estabilidad y precisión, respuesta rápida, diseño optimizado" },
      { "label": { "es": "Rendimiento", "en": "Performance", "pt": "Desempenho", "it": "Prestazioni" }, "value": "Garantiza funcionamiento sincronizado y sin fallos en condiciones de alta exigencia" },
      { "label": { "es": "Instalación", "en": "Installation", "pt": "Instalação", "it": "Installazione" }, "value": "Sustitución sencilla y rápida con conexión directa a sistemas integrados" },
      { "label": { "es": "Protección", "en": "Protection", "pt": "Proteção", "it": "Protezione" }, "value": "Minimiza riesgo de fallos eléctricos con componentes de alta calidad" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SX8 / SZ1" }
    ]
  },
  {
    "reference": "140000113",
    "id": "pantalla-hornos-sz1",
    "slug": "pantalla-hornos-sz1",
    "name": {
      "es": "Pantalla para hornos DTF InkOne SZ1",
      "en": "Display for DTF InkOne SZ1 ovens",
      "pt": "Ecrã para fornos DTF InkOne SZ1",
      "it": "Display per forni DTF InkOne SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/p/a/pantalla-hornos-dtf-inkone-sx8-s.webp",
    "description": {
      "es": "La Pantalla para hornos DTF InkOne SZ1 es un recambio que incluye el panel táctil con la placa de control integrada. Permite gestionar con precisión todos los parámetros del horno: temperatura, velocidad, polvo, succión y más, garantizando una operación controlada y eficiente.",
      "en": "The Display for DTF InkOne SZ1 ovens is a replacement that includes the touchscreen panel with integrated control board. Allows you to manage precisely all oven parameters: temperature, speed, powder, suction and more, ensuring controlled and efficient operation.",
      "pt": "A Ecrã para fornos DTF InkOne SZ1 é um recambio que inclui o painel sensível ao toque com placa de controle integrada. Permite gerenciar com precisão todos os parâmetros do forno: temperatura, velocidade, pó, sucção e muito mais, garantindo operação controlada e eficiente.",
      "it": "Il Display per forni DTF InkOne SZ1 è un ricambio che include il pannello touchscreen con scheda di controllo integrata. Consente di gestire con precisione tutti i parametri del forno: temperatura, velocità, polvere, aspirazione e altro, garantendo un funzionamento controllato ed efficiente."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo de pantalla", "en": "Display type", "pt": "Tipo de ecrã", "it": "Tipo di display" }, "value": "Panel táctil integrado / Integrated touchscreen panel" },
      { "label": { "es": "Características", "en": "Features", "pt": "Características", "it": "Caratteristiche" }, "value": "Panel digital avanzado que unifica visualización y control en una única interfaz" },
      { "label": { "es": "Parámetros controlables", "en": "Controllable parameters", "pt": "Parâmetros controláveis", "it": "Parametri controllabili" }, "value": "Temperatura, velocidad de cinta, pre-calentamiento, aplicación y agitación de polvo" },
      { "label": { "es": "Precisión", "en": "Precision", "pt": "Precisão", "it": "Precisione" }, "value": "Alta precisión para ajustes finos y mantener calidad constante" },
      { "label": { "es": "Instalación", "en": "Installation", "pt": "Instalação", "it": "Installazione" }, "value": "Estructura compacta con conexiones estándar para sustitución rápida y segura" },
      { "label": { "es": "Construcción", "en": "Construction", "pt": "Construção", "it": "Costruzione" }, "value": "Materiales duraderos preparados para uso intensivo en producción" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SZ1" }
    ]
  },
  {
    "reference": "140000128",
    "id": "lampara-horno-sz1",
    "slug": "lampara-horno-sz1",
    "name": {
      "es": "Lámpara para horno y aplicador DTF InkOne SZ1",
      "en": "Lamp for DTF InkOne SZ1 oven",
      "pt": "Lâmpada para forno DTF InkOne SZ1",
      "it": "Lampada per forno DTF InkOne SZ1"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/l/a/lampara-horno-aplicador-dtf-inko.png",
    "description": {
      "es": "La Lámpara para horno y aplicador DTF InkOne SZ1 es un repuesto original diseñado para garantizar un calentamiento uniforme y estable en los procesos de curado del polvo de poliamida. Mantiene el rendimiento óptimo del equipo y asegura una fusión perfecta en cada impresión DTF.",
      "en": "The Lamp for DTF InkOne SZ1 oven is an original replacement designed to ensure uniform and stable heating in polyamide powder curing processes. Maintains optimal equipment performance and ensures perfect adhesive fusion in each DTF print.",
      "pt": "A Lâmpada para forno DTF InkOne SZ1 é um recambio original projetado para garantir aquecimento uniforme e estável nos processos de cura do pó de poliamida. Mantém o desempenho ideal do equipamento e garante fusão perfeita do adesivo em cada impressão DTF.",
      "it": "La Lampada per forno DTF InkOne SZ1 è un ricambio originale progettato per garantire un riscaldamento uniforme e stabile nei processi di polimerizzazione della polvere di poliammide. Mantiene le prestazioni ottimali dell'apparecchiatura e garantisce una fusione perfetta dell'adesivo in ogni stampa DTF."
    },
    "technicalSpecs": [
      { "label": { "es": "Función", "en": "Function", "pt": "Função", "it": "Funzione" }, "value": "Calentamiento uniforme y estable / Uniform and stable heating" },
      { "label": { "es": "Aplicación", "en": "Application", "pt": "Aplicação", "it": "Applicazione" }, "value": "Curado de polvo de poliamida DTF / DTF polyamide powder curing" },
      { "label": { "es": "Conexión", "en": "Connection", "pt": "Conexão", "it": "Connessione" }, "value": "Cable con conector en ambos extremos / Cable with connectors at both ends" },
      { "label": { "es": "Instalación", "en": "Installation", "pt": "Instalação", "it": "Installazione" }, "value": "Sustitución rápida sin herramientas especiales" },
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Elemento calefactor original / Original heating element" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "InkOne SZ1" }
    ]
  },
  {
    "reference": "90006268",
    "id": "resistencia-tazas-2-5oz",
    "slug": "resistencia-tazas-2-5oz",
    "name": {
      "es": "Resistencia cilíndrica de 2.5oz para mini tazas",
      "en": "2.5oz Cylindrical heating element for mini mugs",
      "pt": "Resistência cilíndrica de 2.5oz para mini canecas",
      "it": "Resistenza cilindrica da 2.5oz per mini tazze"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/r/e/resistencia_de_2.5oz.webp",
    "description": {
      "es": "Resistencia de 18 x 8.5 cm compatible con planchas transfer para tazas. Ideal para personalizar tazas pequeñas con resultados precisos y profesionales.",
      "en": "18 x 8.5 cm heating element compatible with transfer presses for mugs. Ideal for personalizing small mugs with precise and professional results.",
      "pt": "Resistência de 18 x 8.5 cm compatível com prensas térmicas para canecas. Ideal para personalizar canecas pequenas com resultados precisos e profissionais.",
      "it": "Resistenza da 18 x 8.5 cm compatibile con presse transfer per tazze. Ideale per personalizzare tazze piccole con risultati precisi e professionali."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "18 x 8.5 cm (2.5oz)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Sicilia, Maine" }
    ]
  },
  {
    "reference": "90006264",
    "id": "resistencia-chupitos-1-5oz",
    "slug": "resistencia-chupitos-1-5oz",
    "name": {
      "es": "Resistencia cónica de 1.5oz para chupitos",
      "en": "1.5oz Conical heating element for shot glasses",
      "pt": "Resistência cónica de 1.5oz para copos de shot",
      "it": "Resistenza conica da 1.5oz per bicchierini da shot"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/r/e/resistencia_1.5oz_principal.webp",
    "description": {
      "es": "Resistencia de 12 x 8 cm compatible con planchas transfer para tazas. Ideal para personalizar tazas de café espresso y vasos de chupito de 1.5 oz con resultados precisos y profesionales.",
      "en": "12 x 8 cm heating element compatible with heat presses for mugs. Ideal for personalizing espresso coffee cups and 1.5 oz shot glasses with precise and professional results.",
      "pt": "Resistência de 12 x 8 cm compatível com prensas térmicas para canecas. Ideal para personalizar chávenas de café expresso e copos de shot de 1.5 oz com resultados precisos e profissionais.",
      "it": "Resistenza da 12 x 8 cm compatibile con presse transfer per tazze. Ideale per personalizzare tazzine da caffè espresso e bicchierini da shot da 1.5 oz con risultati precisi e professionali."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "12 x 8 cm (1.5oz cónica)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Sicilia, Maine" }
    ]
  },
  {
    "reference": "REPBEIRES20",
    "id": "resistencia-cilindrica-20-30oz",
    "slug": "resistencia-cilindrica-20-30oz",
    "name": {
      "es": "Resistencia cilíndrica de 20 a 30 onzas",
      "en": "20 to 30 oz cylindrical heating element",
      "pt": "Resistência cilíndrica de 20 a 30 onças",
      "it": "Resistenza cilindrica da 20 a 30 once"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/r/e/resistencia_20-30oz_1_.webp",
    "description": {
      "es": "Resistencia cilíndrica de 20 a 30 onzas – Compatible con plancha Maine. Da un salto de calidad en tus diseños cilíndricos con esta resistencia especializada para sublimar botellas, termos u otros recipientes de gran tamaño. Distribución uniforme del calor gracias a su construcción robusta.",
      "en": "20 to 30 ounce cylindrical heating element - Compatible with Maine press. Take a leap in quality in your cylindrical designs with this specialized heating element for sublimating large bottles, thermoses or other large containers. Uniform heat distribution due to its robust construction.",
      "pt": "Resistência cilíndrica de 20 a 30 onças – Compatível com prensa Maine. Dê um salto de qualidade em seus designs cilíndricos com esta resistência especializada para sublimar garrafas, copos térmicos ou outros recipientes grandes. Distribuição uniforme do calor graças à sua construção robusta.",
      "it": "Resistenza cilindrica da 20 a 30 once – Compatibile con la pressa Maine. Fai un salto di qualità nei tuoi disegni cilindrici con questa resistenza specializzata per sublimare bottiglie, thermos o altri grandi contenitori. Distribuzione uniforme del calore grazie alla sua costruzione robusta."
    },
    "technicalSpecs": [
      { "label": { "es": "Altura", "en": "Height", "pt": "Altura", "it": "Altezza" }, "value": "27 cm" },
      { "label": { "es": "Diámetro", "en": "Diameter", "pt": "Diâmetro", "it": "Diametro" }, "value": "Ajustable 9,5 - 12 cm" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Maine" }
    ]
  },
  {
    "reference": "90020154",
    "id": "plato-base-18x18-cambio-rapido",
    "slug": "plato-base-18x18-cambio-rapido",
    "name": {
      "es": "Plato base de 18x18cm para intercambio rápido",
      "en": "18x18cm base plate for quick change",
      "pt": "Prato base de 18x18cm para troca rápida",
      "it": "Piastra base 18x18cm per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/i/m/img_20250709_105209-removebg-preview_1_.webp",
    "description": {
      "es": "Plato base de 18 x 18 centímetros compatible con el sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Este tamaño resulta ideal para la personalización de pequeños objetos de manera sencilla.",
      "en": "18 x 18 cm base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing small objects.",
      "pt": "Prato base de 18 x 18 cm compatível com o sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar objetos pequenos.",
      "it": "Piastra base 18 x 18 cm compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Ideale per personalizzare oggetti piccoli."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "18 x 18 cm" }
    ]
  },
  {
    "reference": "90020155",
    "id": "plato-base-18x38-cambio-rapido",
    "slug": "plato-base-18x38-cambio-rapido",
    "name": {
      "es": "Plato base de 18x38cm para intercambio rápido",
      "en": "18x38cm base plate for quick change",
      "pt": "Prato base de 18x38cm para troca rápida",
      "it": "Piastra base 18x38cm per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/i/m/img_20250709_102718-removebg-preview_1_.webp",
    "description": {
      "es": "Plato base de 18 x 38 centímetros compatible con el sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Ideal para la personalización de mangas de manera sencilla.",
      "en": "18 x 38 cm base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing sleeves easily.",
      "pt": "Prato base de 18 x 38 cm compatível com o sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar mangas.",
      "it": "Piastra base 18 x 38 cm compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Ideale per personalizzare le maniche."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "18 x 38 cm" }
    ]
  },
  {
    "reference": "90020152",
    "id": "plato-base-18x45-cambio-rapido",
    "slug": "plato-base-18x45-cambio-rapido",
    "name": {
      "es": "Plato base de 18x45cm para intercambio rápido",
      "en": "18x45cm base plate for quick change",
      "pt": "Prato base de 18x45cm para troca rápida",
      "it": "Piastra base 18x45cm per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-img_20250709_094912-removebg-preview_1_.webp",
    "description": {
      "es": "Plato base de 18 x 45 centímetros compatible con el sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Este tamaño resulta ideal para la personalización de pantalones de manera sencilla.",
      "en": "18 x 45 cm base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing pants easily.",
      "pt": "Prato base de 18 x 45 cm compatível com o sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar calças de forma simples.",
      "it": "Piastra base 18 x 45 cm compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Ideale per personalizzare pantaloni in modo semplice."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "18 x 45 cm" }
    ]
  },
  {
    "reference": "90020151",
    "id": "plato-base-30x35-cambio-rapido",
    "slug": "plato-base-30x35-cambio-rapido",
    "name": {
      "es": "Plato base de 30x35cm para intercambio rápido",
      "en": "30x35cm base plate for quick change",
      "pt": "Prato base de 30x35cm para troca rápida",
      "it": "Piastra base 30x35cm per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/i/m/img_20250709_091112-removebg-preview_1_.webp",
    "description": {
      "es": "Plato base 30 x 35 centimetros compatible con el sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Este tamaño resulta ideal para la personalización de prendas infantiles u objetos de tamaño mediano de manera sencilla.",
      "en": "30 x 35 cm base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing children's garments or medium-sized objects easily.",
      "pt": "Prato base de 30 x 35 cm compatível com o sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar roupas infantis ou objetos de tamanho médio de forma simples.",
      "it": "Piastra base 30 x 35 cm compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Ideale per personalizzare indumenti per bambini o oggetti di medie dimensioni in modo semplice."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "30 x 35 cm" }
    ]
  },
  {
    "reference": "90020158",
    "id": "plato-base-zapatillas-cambio-rapido",
    "slug": "plato-base-zapatillas-cambio-rapido",
    "name": {
      "es": "Plato base de 18x38cm especial zapatillas para intercambio rápido",
      "en": "18x38cm special shoe base plate for quick change",
      "pt": "Prato base de 18x38cm especial sapatilhas para troca rápida",
      "it": "Piastra base 18x38cm speciale scarpe per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/i/m/img_20250709_083659-removebg-preview_1_.webp",
    "description": {
      "es": "Plato base especial para zapatillas de 18 x 38 centímetros compatible con el sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Ideal para la personalización de zapatillas de manera sencilla.",
      "en": "Special 18 x 38 cm shoe base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing sneakers easily.",
      "pt": "Prato base especial para sapatilhas de 18 x 38 cm compatível com o sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar sapatilhas.",
      "it": "Piastra base speciale per scarpe da 18 x 38 cm compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Ideale per personalizzare scarpe da ginnastica."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "18 x 38 cm" }
    ]
  },
  {
    "reference": "90020156",
    "id": "plato-base-redondo-24-cambio-rapido",
    "slug": "plato-base-redondo-24-cambio-rapido",
    "name": {
      "es": "Plato base redondo de 24cm para intercambio rápido",
      "en": "24cm round base plate for quick change",
      "pt": "Prato base redondo de 24cm para troca rápida",
      "it": "Piastra base tonda 24cm per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/i/m/img_20250708_174147-removebg-preview_1_.webp",
    "description": {
      "es": "Plato base redondo de 24 centimetros de diámetro compatible con el sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Este tamaño resulta ideal para la personalización de objetos redondo o sin bordes.",
      "en": "24cm diameter round base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing round or borderless objects.",
      "pt": "Prato base redondo de 24 centímetros de diâmetro compatível com o sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar objetos redondos ou sem bordas.",
      "it": "Piastra base rotonda da 24 centimetri di diametro compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Ideale per personalizzare oggetti rotondi o senza bordi."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "24 cm diámetro" }
    ]
  },
  {
    "reference": "90020157",
    "id": "plato-base-gorras-cambio-rapido",
    "slug": "plato-base-gorras-cambio-rapido",
    "name": {
      "es": "Plato base especial gorras para sistema de cambio rápido",
      "en": "Special cap base plate for quick change system",
      "pt": "Prato base especial bonés para sistema de troca rápida",
      "it": "Piastra base speciale cappellini per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/i/m/img_20250708_163906-removebg-preview_1_1_.webp",
    "description": {
      "es": "Plato base especial para gorras compatible con el sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Este tamaño resulta ideal para la personalización de hasta 4 gorras de manera simultánea.",
      "en": "Special cap base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing up to 4 caps simultaneously.",
      "pt": "Prato base especial para bonés compatível com o sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar até 4 bonés em simultâneo.",
      "it": "Piastra base speciale per cappellini compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Ideale per personalizzare fino a 4 cappellini contemporaneamente."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" }
    ]
  },
  {
    "reference": "90020172",
    "id": "plato-base-camisetas-cambio-rapido",
    "slug": "plato-base-camisetas-cambio-rapido",
    "name": {
      "es": "Plato base especial camisetas para sistema de cambio rápido",
      "en": "Special t-shirt base plate for quick change system",
      "pt": "Prato base especial camisetas para sistema de troca rápida",
      "it": "Piastra base speciale magliette per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/i/m/img_20250708_133150-removebg-preview_1_.webp",
    "description": {
      "es": "Plato base especial para camisetas compatible con el sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Este tamaño resulta ideal para la personalización de camisetas con su etiqueta interior.",
      "en": "Special t-shirt base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing t-shirts with their inner label.",
      "pt": "Prato base especial para camisetas compatível com o sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar camisetas com a sua etiqueta interna.",
      "it": "Piastra base speciale per magliette compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Ideale per personalizzare magliette con la loro etichetta interna."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" }
    ]
  },
  {
    "reference": "90020160",
    "id": "plato-base-40x50-2mangas-cambio-rapido",
    "slug": "plato-base-40x50-2mangas-cambio-rapido",
    "name": {
      "es": "Plato base de 40x50cm para 2 mangas para sistema de cambio rápido",
      "en": "40x50cm base plate for 2 sleeves for quick change system",
      "pt": "Prato base de 40x50cm para 2 mangas para sistema de troca rápida",
      "it": "Piastra base 40x50cm per 2 maniche per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/i/m/img_20250708_122504-removebg-preview_1_.webp",
    "description": {
      "es": "Plato base de 40 x 50 cm. especial para mangas con sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Este tamaño resulta ideal para la personalización de 2 mangas a la vez.",
      "en": "40 x 50 cm base plate special for sleeves with quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. This size is ideal for customizing 2 sleeves at once.",
      "pt": "Prato base de 40 x 50 cm especial para mangas com sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Este tamanho é ideal para a personalização de 2 mangas ao mesmo tempo.",
      "it": "Piastra base da 40 x 50 cm speciale per maniche con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Questa dimensione è ideale per la personalizzazione di 2 maniche contemporaneamente."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "40 x 50 cm" }
    ]
  },
  {
    "reference": "90020171",
    "id": "plato-base-12x45-mangas-cambio-rapido",
    "slug": "plato-base-12x45-mangas-cambio-rapido",
    "name": {
      "es": "Plato base de 12 x 45cm especial mangas para intercambio rápido",
      "en": "12 x 45cm special sleeve base plate for quick change",
      "pt": "Prato base de 12 x 45cm especial mangas para troca rápida",
      "it": "Piastra base 12 x 45cm speciale maniche per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/c/a/canva_export_-_x33adn7.webp",
    "description": {
      "es": "Plato base de 12 x 45 cm. con sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Este tamaño resulta ideal para la personalización de mangas.",
      "en": "12 x 45 cm base plate with quick change system for your Beinsen transfer press. Made of tough, high-quality materials to ensure precise and even application. This size is ideal for personalizing sleeves.",
      "pt": "Prato base de 12 x 45 cm com sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado em materiais resistentes e de alta qualidade para garantir uma aplicação uniforme e precisa. Este tamanho é ideal para personalização de mangas.",
      "it": "Piastra base 12 x 45 cm con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità per garantire un'applicazione uniforme e precisa. Questa dimensione è ideale per la personalizzazione delle maniche."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "12 x 45 cm" }
    ]
  },
  {
    "reference": "90020164",
    "id": "plato-base-15x50-pantalones-cambio-rapido",
    "slug": "plato-base-15x50-pantalones-cambio-rapido",
    "name": {
      "es": "Plato base de 15 x 50cm especial pantalones para intercambio rápido",
      "en": "15 x 50cm special pants base plate for quick change",
      "pt": "Prato base de 15 x 50cm especial calças para troca rápida",
      "it": "Piastra base 15 x 50cm speciale pantaloni per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/c/a/canva_export_-_kpjawn7.webp",
    "description": {
      "es": "Plato base de 15 x 50 cm. con sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Este tamaño resulta ideal para la personalización de pantalones.",
      "en": "15 x 50 cm base plate with quick change system for your Beinsen transfer press. Made of tough, high-quality materials to ensure precise and even application. This size is ideal for personalizing pants.",
      "pt": "Prato base de 15 x 50 cm com sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado em materiais resistentes e de alta qualidade para garantir uma aplicação uniforme e precisa. Este tamanho é ideal para personalização de calças.",
      "it": "Piastra base 15 x 50 cm con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità per garantire un'applicazione uniforme e precisa. Questa dimensione è ideale per la personalizzazione dei pantaloni."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "15 x 50 cm" }
    ]
  },
  {
    "reference": "90020170",
    "id": "plato-base-15-5x25-5-cambio-rapido",
    "slug": "plato-base-15-5x25-5-cambio-rapido",
    "name": {
      "es": "Plato base de 15,5x25,5cm para sistema de cambio rápido",
      "en": "15.5x25.5cm base plate for quick change system",
      "pt": "Prato base de 15,5x25,5cm para sistema de troca rápida",
      "it": "Piastra base 15,5x25,5cm per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/c/a/canva_export_-_ivlqna5_1.webp",
    "description": {
      "es": "Plato base de 15,5 x 25,5 cm. con sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Perfecto para mangas, pantalones, bufandas, bolsos y fundas.",
      "en": "15.5 x 25.5 cm base plate with quick change system for your Beinsen transfer press. Made of tough, high-quality materials for precise and even application. Perfect for sleeves, pants, scarves, bags and cases.",
      "pt": "Prato base de 15,5 x 25,5 cm com sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Perfeito para mangas, calças, lenços, bolsas e capas.",
      "it": "Piastra base 15,5 x 25,5 cm con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Perfetta per maniche, pantaloni, sciarpe, borse e custodie."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "15,5 x 25,5 cm" }
    ]
  },
  {
    "reference": "90020163",
    "id": "plato-base-15x25-cambio-rapido",
    "slug": "plato-base-15x25-cambio-rapido",
    "name": {
      "es": "Plato base de 15x25cm para sistema de cambio rápido",
      "en": "15x25cm base plate for quick change system",
      "pt": "Prato base de 15x25cm para sistema de troca rápida",
      "it": "Piastra base 15x25cm per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/c/a/canva_export_-_ivlqna5.webp",
    "description": {
      "es": "Plato base de 15 x 25 cm. con sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Perfecto para mangas, pantalones, bufandas, bolsos y fundas.",
      "en": "15 x 25 cm base plate with quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Perfect for sleeves, pants, scarves, bags and cases.",
      "pt": "Prato base de 15 x 25 cm com sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Perfeito para mangas, calças, lenços, bolsas e capas.",
      "it": "Piastra base 15 x 25 cm con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Perfetta per maniche, pantaloni, sciarpe, borse e custodie."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "15 x 25 cm" }
    ]
  },
  {
    "reference": "90020169",
    "id": "plato-base-25x30-cambio-rapido",
    "slug": "plato-base-25x30-cambio-rapido",
    "name": {
      "es": "Plato base de 25x30cm para sistema de cambio rápido",
      "en": "25x30cm base plate for quick change system",
      "pt": "Prato base de 25x30cm para sistema de troca rápida",
      "it": "Piastra base 25x30cm per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/c/a/canva_export_-_lmlbsyq.webp",
    "description": {
      "es": "Plato base de 25 x 30 cm con sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Perfecto para camisetas infantiles, cojines, toallas, manteles, etc.",
      "en": "25 x 30 cm base plate with quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Perfect for children's t-shirts, cushions, towels, tablecloths, etc.",
      "pt": "Prato base de 25 x 30 cm com sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Perfeito para t-shirts infantis, almofadas, toalhas, toalhas de mesa, etc.",
      "it": "Piastra base da 25 x 30 cm con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Perfetta per magliette bambino, cuscini, asciugamani, tovaglie, ecc."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "25 x 30 cm" }
    ]
  },
  {
    "reference": "90020162",
    "id": "plato-base-15x15-cambio-rapido",
    "slug": "plato-base-15x15-cambio-rapido",
    "name": {
      "es": "Plato base de 15x15cm para sistema de cambio rápido",
      "en": "15x15cm base plate for quick change system",
      "pt": "Prato base de 15x15cm para sistema de troca rápida",
      "it": "Piastra base 15x15cm per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/c/a/canva_export_-_grambbx.webp",
    "description": {
      "es": "Plato base de 15 x 15 cm con sistema de intercambio rápido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicación uniforme y precisa. Perfecto para parches, logos, posavasos y otros materiales pequeños.",
      "en": "15 x 15 cm base plate with quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Perfect for patches, logos, coasters and other small items.",
      "pt": "Prato base de 15 x 15 cm com sistema de troca rápida para a sua prensa de transferência Beinsen. Fabricado com materiais resistentes e de alta qualidade. Perfeito para patches, logos, apoios de copos e outros artigos pequenos.",
      "it": "Piastra base 15 x 15 cm con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualità. Perfetta per patch, loghi, sottobicchieri e altri articoli piccoli."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "15 x 15 cm" }
    ]
  },
  {
    "reference": "30050047",
    "id": "almohadilla-silicona-80x100",
    "slug": "almohadilla-silicona-80x100",
    "name": {
      "es": "Almohadilla de silicona de 80 x 100cm para plato base",
      "en": "80 x 100cm silicone pad for base plate",
      "pt": "Almofada de silicone de 80 x 100cm para prato base",
      "it": "Cuscinetto in silicone 80 x 100 cm per piastra base"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-61z1xwc-uul._ac_sl1500__1.webp",
    "description": {
      "es": "Almohadilla de silicona de 80 x 100cm para plato base. Resistente al calor hasta 220ºC y con un espesor de 10mm, asegura una impresión uniforme y perfecta en cualquier prensa de calor.",
      "en": "80 x 100cm silicone pad for base plate. Heat resistant up to 220ºC with 10mm thickness, ensures uniform and perfect printing on any heat press.",
      "pt": "Almofada de silicone de 80 x 100cm para prato base. Resistente ao calor até 220ºC com 10mm de espessura, garante impressão uniforme e perfeita em qualquer prensa térmica.",
      "it": "Cuscinetto in silicone 80 x 100 cm per piastra base. Resistente al calore fino a 220ºC con spessore di 10mm, garantisce una stampa uniforme e perfetta su qualsiasi pressa termica."
    },
    "technicalSpecs": [
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Silicona de grado industrial / Industrial grade silicone" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "80 x 100 cm" },
      { "label": { "es": "Espesor", "en": "Thickness", "pt": "Espessura", "it": "Spessore" }, "value": "10 mm" },
      { "label": { "es": "Temperatura máxima", "en": "Maximum Temperature", "pt": "Temperatura máxima", "it": "Temperatura massima" }, "value": "220ºC" }
    ]
  },
  {
    "reference": "ACC001903",
    "id": "plato-38x38-beinsen-chinela",
    "slug": "plato-38x38-beinsen-chinela",
    "name": {
      "es": "Plato de 38x38cm para Beinsen Chinela",
      "en": "38x38cm plate for Beinsen Chinela",
      "pt": "Prato de 38x38cm para Beinsen Chinela",
      "it": "Piastra 38x38cm per Beinsen Chinela"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-beinsen-logo2019-150x150-1_1__2.webp",
    "description": {
      "es": "Optimiza tu prensa térmica modelo Beinsen Chinela con nuestro plato inferior de 38x38cm. Diseñado específicamente para este modelo, nuestro plato inferior intercambiable te permite adaptar tu prensa térmica a diferentes tamaños de productos. Sea cual sea el tamaño que necesitas, nuestro plato inferior intercambiable te ofrece versatilidad y facilidad de uso. Fabricado con materiales de alta calidad, garantiza una distribución uniforme del calor y resultados de sublimación precisos. Mejora tu experiencia de personalización con nuestro plato inferior intercambiable para la prensa térmica Beinsen Chinela. ¡Aprovecha al máximo tu equipo y crea productos personalizados de calidad excepcional!",
      "en": "Optimize your Beinsen Chinela heat press with our 38x38cm lower plate. Designed specifically for this model, our interchangeable lower plate allows you to adapt your heat press to different product sizes. Made with high quality materials, it guarantees an even heat distribution.",
      "pt": "Otimize a sua prensa térmica modelo Beinsen Chinela com nosso prato inferior de 38x38cm. Projetado especificamente para este modelo, nosso prato inferior intercambiável permite adaptar a sua prensa térmica a diferentes tamanhos de produtos.",
      "it": "Ottimizza la tua pressa termica modello Beinsen Chinela con la nostra piastra inferiore da 38x38cm. Progettata specificatamente per questo modello, la nostra piastra inferiore intercambiabile ti consente di adattare la tua pressa termica a diverse dimensioni di prodotti."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Chinela" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "38 x 38 cm" }
    ]
  },
  {
    "reference": "BHORN066",
    "id": "fusible-termico-3d-16",
    "slug": "fusible-termico-3d-16",
    "name": {
      "es": "Fusible térmico 3D-16",
      "en": "3D-16 Thermal fuse",
      "pt": "Fusível térmico 3D-16",
      "it": "Fusibile termico 3D-16"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/4d459db0e065797d06d3da0b8aac83aa/w/h/white-beinsen-logo2019-150x150-1_1__1_11.jpg",
    "description": {
      "es": "Filtro de aire para nuestro horno de sublimación 3D. Esta pieza es fundamental para el horno ya que sin ella no podemos realizar el vacío. Compatible también con la plancha térmica Beinsen para tazas Delia.",
      "en": "Air filter for our 3D sublimation oven. This part is essential for the oven as we cannot create a vacuum without it. Also compatible with our Beinsen thermal plate for Delia mugs.",
      "pt": "Filtro de ar para nosso forno de sublimação 3D. Esta peça é essencial para o forno, pois sem ela não podemos realizar o vácuo. Também compatível com nossa placa térmica Beinsen para canecas Delia.",
      "it": "Filtro dell'aria per il nostro forno di sublimazione 3D. Questo componente è essenziale per il forno poiché senza di esso non possiamo creare il vuoto. Compatibile anche con la nostra piastra termica Beinsen per tazze Delia."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Filtro de aire / Air filter" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "40 x 105 x 40 mm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Metal / Plástico / Metal / Plastic" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Horno 3D, Plancha Delia" },
      { "label": { "es": "Función", "en": "Function", "pt": "Função", "it": "Funzione" }, "value": "Filtro de aire para realizar vacío / Air filter for vacuum creation" }
    ]
  },
  {
    "reference": "90950104",
    "id": "almohadilla-teflon-termorresistente-40x50",
    "slug": "almohadilla-teflon-termorresistente-40x50",
    "name": {
      "es": "Almohadilla de teflón termorresistente negra de 40 x 50 cm. tp-20-bk",
      "en": "Black heat-resistant Teflon pad 40 x 50 cm. tp-20-bk",
      "pt": "Almofada de teflon termorresistente preta 40 x 50 cm. tp-20-bk",
      "it": "Cuscinetto in teflon termoresistente nero 40 x 50 cm. tp-20-bk"
    },
    "price": 30,
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/3/8/38cm._1_.webp",
    "description": {
      "es": "Ideal para salvar los salientes de los botones, dobladillos, cremalleras, etc. Evita las rayas en la placa metálica superior de la plancha. Antiadherente. Fácil de limpiar.",
      "en": "Ideal for protecting buttons, hems, zippers, etc. Prevents scratches on the upper metal plate of the heat press. Non-stick. Easy to clean.",
      "pt": "Ideal para proteger botões, bainhas, fechos, etc. Evita riscos na placa metálica superior da prensa. Antiaderente. Fácil de limpar.",
      "it": "Ideale per proteggere bottoni, orli, cerniere, ecc. Previene i graffi sulla piastra metallica superiore della pressa. Antiaderente. Facile da pulire."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "40 x 50 cm" },
      { "label": { "es": "Referencia", "en": "Reference", "pt": "Referência", "it": "Riferimento" }, "value": "TP-20-BK" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Teflón termorresistente / Heat-resistant Teflon" }
    ]
  },
  {
    "reference": "BSNALMTFL38",
    "id": "almohadilla-teflon-termorresistente-38x38",
    "slug": "almohadilla-teflon-termorresistente-38x38",
    "name": {
      "es": "Almohadilla de teflón termorresistente de 38x38 cm.",
      "en": "Heat-resistant Teflon pad 38x38 cm.",
      "pt": "Almofada de teflon termorresistente 38x38 cm.",
      "it": "Cuscinetto in teflon termoresistente 38x38 cm."
    },
    "price": 25,
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/3/8/38cm._1.webp",
    "description": {
      "es": "Ideal para salvar los salientes de los botones, dobladillos, cremalleras, etc. Evita las rayas en la placa metálica superior de la plancha. Antiadherente. Fácil de limpiar.",
      "en": "Ideal for protecting buttons, hems, zippers, etc. Prevents scratches on the upper metal plate of the heat press. Non-stick. Easy to clean.",
      "pt": "Ideal para proteger botões, bainhas, fechos, etc. Evita riscos na placa metálica superior da prensa. Antiaderente. Fácil de limpar.",
      "it": "Ideale per proteggere bottoni, orli, cerniere, ecc. Previene i graffi sulla piastra metallica superiore della pressa. Antiaderente. Facile da pulire."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "38 x 38 cm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Teflón termorresistente / Heat-resistant Teflon" }
    ]
  },
  {
    "reference": "BSNALMTFL25",
    "id": "almohadilla-teflon-termorresistente-25x25",
    "slug": "almohadilla-teflon-termorresistente-25x25",
    "name": {
      "es": "Almohadilla de teflón termorresistente de 25x25 cm.",
      "en": "Heat-resistant Teflon pad 25x25 cm.",
      "pt": "Almofada de teflon termorresistente 25x25 cm.",
      "it": "Cuscinetto in teflon termoresistente 25x25 cm."
    },
    "price": 15,
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/2/5/25cm..webp",
    "description": {
      "es": "Ideal para salvar los salientes de los botones, dobladillos, cremalleras, etc. Evita las rayas en la placa metálica superior de la plancha. Antiadherente. Fácil de limpiar.",
      "en": "Ideal for protecting buttons, hems, zippers, etc. Prevents scratches on the upper metal plate of the heat press. Non-stick. Easy to clean.",
      "pt": "Ideal para proteger botões, bainhas, fechos, etc. Evita riscos na placa metálica superior da prensa. Antiaderente. Fácil de limpar.",
      "it": "Ideale per proteggere bottoni, orli, cerniere, ecc. Previene i graffi sulla piastra metallica superiore della pressa. Antiaderente. Facile da pulire."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "25 x 25 cm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Teflón termorresistente / Heat-resistant Teflon" }
    ]
  },
  {
    "reference": "BSNALMTFL15",
    "id": "almohadilla-teflon-termorresistente-15x15",
    "slug": "almohadilla-teflon-termorresistente-15x15",
    "name": {
      "es": "Almohadilla de teflón termorresistente de 15x15 cm.",
      "en": "Heat-resistant Teflon pad 15x15 cm.",
      "pt": "Almofada de teflon termorresistente 15x15 cm.",
      "it": "Cuscinetto in teflon termoresistente 15x15 cm."
    },
    "price": 10.70,
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/1/5/15cm..webp",
    "description": {
      "es": "Ideal para salvar los salientes de los botones, dobladillos, cremalleras, etc. Evita las rayas en la placa metálica superior de la plancha. Antiadherente. Fácil de limpiar.",
      "en": "Ideal for protecting buttons, hems, zippers, etc. Prevents scratches on the upper metal plate of the heat press. Non-stick. Easy to clean.",
      "pt": "Ideal para proteger botões, bainhas, fechos, etc. Evita riscos na placa metálica superior da prensa. Antiaderente. Fácil de limpiar.",
      "it": "Ideale per proteggere bottoni, orli, cerniere, ecc. Previene i graffi sulla piastra metallica superiore della pressa. Antiaderente. Facile da pulire."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "15 x 15 cm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Teflón termorresistente / Heat-resistant Teflon" }
    ]
  },
  {
    "reference": "S12253",
    "id": "termometro-digital-infrarrojos-it122",
    "slug": "termometro-digital-infrarrojos-it122",
    "name": {
      "es": "Termómetro digital de infrarrojos IT-122",
      "en": "Digital Infrared Thermometer IT-122",
      "pt": "Termómetro digital infravermelho IT-122",
      "it": "Termometro digitale a infrarossi IT-122"
    },
    "price": 24.90,
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/t/e/termometro-digital-1.webp",
    "description": {
      "es": "Termómetro infrarrojo digital portátil sin contacto. Permite medir la temperatura de una habitación o de una taza al momento mientras se presiona el botón de modo de objeto. Ideal para controlar la temperatura con rapidez y precisión desde una distancia de seguridad.",
      "en": "Portable non-contact digital infrared thermometer. Allows measuring room or object temperature instantly. Ideal for monitoring temperature quickly and accurately from a safety distance.",
      "pt": "Termômetro infravermelho digital portátil sem contato. Permite medir a temperatura de uma sala ou objeto instantaneamente. Ideal para monitorar a temperatura com rapidez e precisão a uma distância de segurança.",
      "it": "Termometro digitale a infrarossi portatile senza contatto. Consente di misurare istantaneamente la temperatura di una stanza o di un oggetto. Ideale per monitorare la temperatura in modo rapido e accurato da una distanza di sicurezza."
    },
    "technicalSpecs": [
      { "label": { "es": "Modelo", "en": "Model", "pt": "Modelo", "it": "Modello" }, "value": "IT-122" },
      { "label": { "es": "Alimentación", "en": "Power", "pt": "Alimentação", "it": "Alimentazione" }, "value": "2 pilas AA (3V) - No incluidas" },
      { "label": { "es": "Funciones", "en": "Functions", "pt": "Funções", "it": "Funzioni" }, "value": "Medición rápida, Alarma de fiebre, Retroiluminación tricolor" }
    ]
  },
  {
    "reference": "3DGWST",
    "id": "guantes-protectores-algodon",
    "slug": "guantes-protectores-algodon",
    "name": {
      "es": "Guantes protectores de algodón",
      "en": "Protective cotton gloves",
      "pt": "Luvas protetoras de algodão",
      "it": "Guanti protettivi in cotone"
    },
    "price": 8.65,
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/3/d/3d-gwst.webp",
    "description": {
      "es": "Guantes protectores de algodón para trabajar con total seguridad. Permiten manipular sin peligro planchas transfer y soportes impresos. Con textura de nitrilo para mejor adherencia y resistencia térmica hasta 250ºC.",
      "en": "Protective cotton gloves for working with total safety. They allow handling transfer presses and printed supports without danger. Featuring nitrile texture for better grip and heat resistance up to 250ºC.",
      "pt": "Luvas protetoras de algodão para trabalhar com total segurança. Permitem manipular prensas de transfer e suportes impressos sem perigo. Com textura de nitrilo para melhor aderência e resistência térmica até 250ºC.",
      "it": "Guanti protettivi in cotone per lavorare in totale sicurezza. Consentono di maneggiare presse transfer e supporti stampati senza pericoli. Con trama in nitrile per una migliore presa e resistenza termica fino a 250ºC."
    },
    "technicalSpecs": [
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Algodón y Nitrilo / Cotton and Nitrile" },
      { "label": { "es": "Resistencia Térmica", "en": "Heat Resistance", "pt": "Resistência Térmica", "it": "Resistenza Termica" }, "value": "Hasta 250ºC (periodos cortos) / Up to 250ºC (short periods)" },
      { "label": { "es": "Talla", "en": "Size", "pt": "Tamanho", "it": "Taglia" }, "value": "Única (15 x 27 cm)" }
    ]
  },
  {
    "reference": "REPBEISOPMOV",
    "id": "mesa-universal-grande",
    "slug": "mesa-universal-grande-ruedas",
    "name": {
      "es": "Mesa universal grande con ruedas para plancha térmica",
      "en": "Large universal table with wheels for heat press",
      "pt": "Mesa universal grande com rodas para prensa térmica",
      "it": "Carrello universale grande con ruote per pressa termica"
    },
    "price": 265,
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/m/e/mesa_universal_para_planchas_transfer.webp",
    "description": {
      "es": "Soporte Móvil Universal para planchas transfer Beinsen. Con una superficie de 98x88 cm y una altura de 71 cm, aguanta prensas de todo tipo. Sus cuatro ruedas giratorias con freno permiten moverlo con facilidad. Incluye un estante inferior para organizar herramientas y materiales.",
      "en": "Universal Mobile Stand for Beinsen transfer presses. With a surface of 98x88 cm and a height of 71 cm, it supports all types of presses. Its four rotating wheels with brakes allow for easy movement. Includes a bottom shelf to organize tools and materials.",
      "pt": "Suporte Móvel Universal para prensas de transfer Beinsen. Com uma superfície de 98x88 cm e uma altura de 71 cm, suporta todos os tipos de prensas. As suas quatro rodas giratórias com travões permitem uma movimentação fácil. Inclui uma prateleira inferior para organizar ferramentas e materiais.",
      "it": "Supporto mobile universale per presse transfer Beinsen. Con una superficie di 98x88 cm e un'altezza di 71 cm, supporta tutti i tipi di presse. Le quattro ruote piroettanti con freno ne consentono un facile spostamento. Include un ripiano inferiore per organizzare strumenti e materiali."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones Superficie", "en": "Surface Dimensions", "pt": "Dimensões da Superfície", "it": "Dimensioni Superficie" }, "value": "98 x 88 cm" },
      { "label": { "es": "Altura", "en": "Height", "pt": "Altura", "it": "Altezza" }, "value": "71 cm" },
      { "label": { "es": "Peso", "en": "Weight", "pt": "Peso", "it": "Peso" }, "value": "25 kg" },
      { "label": { "es": "Ruedas", "en": "Wheels", "pt": "Rodas", "it": "Ruote" }, "value": "4 giratorias con freno / 4 rotating with brakes" },
      { "label": { "es": "Características", "en": "Features", "pt": "Características", "it": "Caratteristiche" }, "value": "Estante inferior incluido / Lower shelf included" }
    ]
  },
  {
    "reference": "REPBEIRES12C",
    "id": "resistencia-conica-tazas-12oz",
    "slug": "resistencia-conica-tazas-12oz",
    "name": {
      "es": "Resistencia cónica para tazas de 12oz",
      "en": "Conical heating element for 12oz mugs",
      "pt": "Resistência cónica para canecas 12oz",
      "it": "Resistenza conica per tazze da 12oz"
    },
    "price": 52,
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/t/a/taza_conica_de_12_onzas.webp",
    "description": {
      "es": "Diseñada para tazas cónicas de 12 onzas. Fácil instalación mediante tornillos y conector rápido. Ideal como repuesto o accesorio para ampliar las capacidades de tu plancha Beinsen.",
      "en": "Designed for 12oz conical mugs. Easy installation via screws and quick connector. Ideal as a replacement or accessory to expand the capabilities of your Beinsen press.",
      "pt": "Projetada para canecas cónicas de 12 onças. Fácil instalação através de parafusos e conector rápido. Ideal como substituição ou acessório para expandir as capacidades da sua prensa Beinsen.",
      "it": "Progettata per tazze coniche da 12 once. Facile installazione tramite viti e connettore rapido. Ideale come ricambio o accessorio per ampliare le capacità della tua pressa Beinsen."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Cónica 12oz / Conical 12oz" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Alina, Aruba, Sicilia, Maine" }
    ]
  },
  {
    "reference": "REPBEIRES17C",
    "id": "resistencia-conica-tazas-17oz",
    "slug": "resistencia-para-tazas-conicas-17oz",
    "name": {
      "es": "Resistencia para tazas Cónicas de 17oz",
      "en": "Heating element for 17oz Conical mugs",
      "pt": "Resistência para canecas Cónicas 17oz",
      "it": "Resistenza per tazze Coniche da 17oz"
    },
    "price": 52,
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/1/6/16_5cm..webp",
    "description": {
      "es": "Resistencia de alta calidad para tazas cónicas de 17 onzas. Permite una transferencia de calor uniforme. Fácil de montar y desmontar, asegurando una producción eficiente.",
      "en": "High-quality heating element for 17oz conical mugs. Allows uniform heat transfer. Easy to assemble and disassemble, ensuring efficient production.",
      "pt": "Resistência de alta qualidade para canecas cónicas de 17 onças. Permite uma transferência de calor uniforme. Fácil de montar e desmontar, garantindo uma produção eficiente.",
      "it": "Resistenza di alta qualità per tazze coniche da 17 once. Consente un trasferimento di calore uniforme. Facile da montare e smontare, garantendo una produzione efficiente."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Cónica 17oz / Conical 17oz" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Alina, Sicilia, Aruba, Maine" }
    ]
  }
];
export const allAccessoriesData: Accessory[] = [...rawAccessoriesData].sort((a, b) => getSortName(a).localeCompare(getSortName(b), 'es'));


const rawConsumablesData: Consumable[] = [
  {
    "reference": "CONSUBCIN10M",
    id: "cinta-termica-10mm",
    slug: "cinta-termica-sublimacion-10mm",
    name: {
      "es": "Cinta térmica adhesiva para sublimación - 10mm x 33m",
      "en": "Sublimation thermal adhesive tape - 10mm x 33m",
      "pt": "Fita térmica adesiva para sublimação - 10mm x 33m",
      "it": "Nastro termico adesivo per sublimazione - 10mm x 33m"
    },
    price: 4.15,
    image: "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/c/i/cinta-termica-tipo-kapton-de-0-4.webp",
    description: {
      "es": "Cinta térmica de alta calidad idónea para aplicar sobre tazas, textiles y cerámica. Resiste altas temperaturas sin derretirse y asegura que el papel de sublimación se mantenga firme sin dejar marcas.",
      "en": "High-quality thermal tape ideal for mugs, textiles, and ceramics. Withstands high temperatures without melting and ensures sublimation paper stays firm without leaving marks.",
      "pt": "Fita térmica de alta qualidade ideal para canecas, têxteis e cerâmicas. Resiste a altas temperaturas sem derreter e garante que o papel de sublimação permaneça firme sem deixar marcas.",
      "it": "Nastro termico di alta qualità ideale per tazze, tessuti e ceramica. Resiste alle alte temperature senza sciogliersi e assicura che la carta sublimatica rimanga salda senza lasciare segni."
    },
    technicalSpecs: [
      { "label": { "es": "Ancho", "en": "Width", "pt": "Largura", "it": "Larghezza" }, "value": "10 mm" },
      { "label": { "es": "Largo", "en": "Length", "pt": "Comprimento", "it": "Lunghezza" }, "value": "33 m" },
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Kapton / Térmica" }
    ]
  },
  {
    "reference": "PLAACCA50",
    id: "almohadilla-silicona-40x50",
    slug: "almohadilla-silicona-40x50",
    name: {
      "es": "Almohadilla de silicona de 40 x 50 cm para plato base",
      "en": "Silicone pad 40 x 50 cm for base plate",
      "pt": "Almofada de silicone de 40 x 50 cm para prato base",
      "it": "Tappetino in silicone 40 x 50 cm per piastra base"
    },
    price: "Consultar PVP",
    image: "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/w/h/white-61z1xwc-uul._ac_sl1500_.webp",
    description: {
      "es": "Mejora tus impresiones de sublimación con nuestra almohadilla de silicona. Resistente al calor hasta 220ºC y con un espesor de 10mm, asegura una impresión uniforme y perfecta.",
      "en": "Improve your sublimation prints with our silicone pad. Heat resistant up to 220ºC and 10mm thick, it ensures uniform and perfect printing.",
      "pt": "Melhore as suas impressões de sublimação com a nossa almofada de silicone. Resistente ao calor até 220ºC e com 10mm de espessura, garante uma impressão uniforme e perfeita.",
      "it": "Migliora le tue stampe a sublimazione con il nostro tappetino in silicone. Resistente al calore fino a 220ºC e con uno spessore di 10 mm, assicura una stampa uniforme e perfetta."
    },
    technicalSpecs: [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimensões", "it": "Dimensioni" }, "value": "40 x 50 cm" },
      { "label": { "es": "Espesor", "en": "Thickness", "pt": "Espessura", "it": "Spessore" }, "value": "10 mm" },
      { "label": { "es": "Resistencia Térmica", "en": "Heat Resistance", "pt": "Resistência Térmica", "it": "Resistenza Termica" }, "value": "Hasta 220ºC / Up to 220ºC" }
    ]
  },
  {
    id: "teflon-40x50",
    slug: "lamina-teflon-40x50",
    name: { es: "Lámina de Teflón 40x50", en: "Teflon Sheet 40x50" },
    price: 15,
    image: "https://beinsen.com/wp-content/uploads/2019/11/grecia6.jpg",
    description: { es: "Protege tus prendas y el plato de calor.", en: "Protects your garments and the heat plate." }
  },
  {
    id: "neopreno-base",
    slug: "goma-neopreno-base",
    name: { es: "Goma de Neopreno Base", en: "Neoprene Base Rubber" },
    price: 45,
    image: "https://beinsen.com/wp-content/uploads/2019/11/zapas.jpg",
    description: { es: "Amortiguación perfecta para una presión uniforme.", en: "Perfect cushioning for uniform pressure." }
  },
  {
    id: "limpiador-plato",
    slug: "limpiador-platos-ez-off",
    name: { es: "Limpiador de plato", en: "Plate Cleaner (EZ-Off)" },
    price: 12,
    image: "https://beinsen.com/wp-content/uploads/2019/11/limpiador-plato.jpg",
    description: { es: "Elimina residuos del plato calentador.", en: "Removes residues from the heating plate." }
  },
  {
    "reference": "REPBEIRES11A",
    "id": "resistencia-cilindrica-tazas-11oz-tipo-a",
    "slug": "resistencia-cilindrica-tazas-11oz-tipo-a",
    "name": {
      "es": "Resistencia cilíndrica para tazas de 11oz tipo A",
      "en": "Cylindrical heating element for 11oz mugs type A",
      "pt": "Resistência cilíndrica para canecas 11oz tipo A",
      "it": "Resistenza cilindrica per tazze da 11oz tipo A"
    },
    "price": 52,
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/r/e/resistencia_11oz_01_1.webp",
    "description": {
      "es": "Resistencia de repuesto o accesorio para planchas de tazas Beinsen. Permite personalizar tazas de 11 onzas de forma sencilla: solo conectar y empezar a trabajar. Se recomienda precalentar unos minutos en el primer uso.",
      "en": "Replacement or accessory heating element for Beinsen mug presses. Allows easy personalization of 11oz mugs: just connect and start working. Preheating for a few minutes on first use is recommended.",
      "pt": "Resistência de substituição ou acessório para prensas de canecas Beinsen. Permite personalizar canecas de 11 onças de forma simples: basta ligar e começar a trabalhar. Recomenda-se pré-aquecer alguns minutos na primeira utilização.",
      "it": "Resistenza di ricambio o accessoria per presse per tazze Beinsen. Permette di personalizzare tazze da 11 once in modo semplice: basta collegare e iniziare a lavorare. Si consiglia di preriscaldare per alcuni minuti al primo utilizzo."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Cilíndrica 11oz / Cylindrical 11oz" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilità" }, "value": "Andra, Sore (A)" }
    ]
  }
];
export const allConsumablesData: Consumable[] = [...rawConsumablesData].sort((a, b) => getSortName(a).localeCompare(getSortName(b), 'es'));

