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
  storySegments?: { title: Localized<string> | string; description: Localized<string> | string; image?: string; iframe?: string }[];
  storyHeadline?: Localized<string> | string;
  storyTitle?: Localized<string> | string;
  maintenanceTips?: Localized<string[]>;
  distributors?: { name: string; url: string; logo?: string }[];
  hidden?: boolean;
}
const rawPlanchasData: Plancha[] = [
  {
    "id": "chinela-plancha-transfer-zapatillas",
    "name": {
      "es": "Chinela Plancha T├®rmica Para Zapatillas",
      "en": "Chinela Heat Press For Sneakers",
      "pt": "Chinela Prensa T├®rmica Para Sapatilhas",
      "it": "Chinela Pressa Termica Per Scarpe"
    },
    "description": {
      "es": "La plancha transfer para zapatillas Beinsen Chinela es la especializaci├│n llevada al mundo de la sublimaci├│n. Podr├ís personalizar comodamente hasta 2 pares de zapatillas en cada planchado , y gracias al sistema giratorio pasar rapidamente al siguiente planchado.",
      "en": "The Beinsen Chinela heat press for sneakers is specialization brought to the world of sublimation. You can comfortably customize up to 2 pairs of sneakers in each press, and thanks to the rotating system, quickly move to the next press.",
      "pt": "A prensa t├®rmica para sapatilhas Beinsen Chinela ├® a especializa├º├úo levada ao mundo da sublima├º├úo. Poder├í personalizar confortavelmente at├® 2 pares de sapatilhas em cada prensagem.",
      "it": "La pressa termica per scarpe da ginnastica Beinsen Chinela ├¿ la specializzazione portata nel mondo della sublimazione. Potrai personalizzare comodamente fino a 2 paia di scarpe."
    },
    "image": "/products/maquinas/chinela-plancha-transfer-zapatillas/01.png",
    "price": "Consultar PVP",
    "slug": "chinela-plancha-transfer-zapatillas",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "La plancha transfer para zapatillas Beinsen Chinela es la especializaci├│n llevada al mundo de la sublimaci├│n",
        "Podr├ís personalizar comodamente hasta 2 pares de zapatillas en cada planchado , y gracias al sistema giratorio pasar rapidamente al siguiente planchado",
        "En la plancha transfer Beinsen Chinela todo est├í pensado con el mismo fin: zapatillas",
        "Un plato especial con dise├▒o ergon├│mico en una plancha giratoria para que tengas todo el espacio necesario para trabajar"
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


        "category": { "es": "Especializadas", "en": "Specialized", "pt": "Especializadas", "it": "Specializzate" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Giratoria" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Autom├ítico y manual" },
      { "label": { "es": "Grosor m├íximo del personalizable", "en": "Max Customizable Thickness" }, "value": "40 mm" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-04" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "Ô£ù" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "38 x 38 cm" },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ù" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800 W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225 ┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "43 kg" },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "69 x 53 x 55 cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Ô£ù" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "Ô£ù" }
    ],
    "hotspots": [
      { "x": 56.1, "y": 4.2, "title": { "es": "Asa ergon├│mica", "en": "Ergonomic handle" }, "description": { "es": "Dise├▒ada para aplicar la presi├│n de forma c├│moda y controlada en cada ciclo de transfer.", "en": "Designed for comfortable and controlled pressure application in every transfer cycle." } },
      { "x": 89.4, "y": 34.4, "title": { "es": "Bot├│n de encendido", "en": "Power button" }, "description": { "es": "Enciende y apaga el equipo de forma r├ípida y segura.", "en": "Turns the machine on and off quickly and safely." } },
      { "x": 77.6, "y": 35.0, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "Programa la temperatura y el tiempo con precisi├│n para conseguir transfers perfectos en zapatillas y chinelas.", "en": "Set temperature and time precisely for perfect transfers on shoes and flip-flops." } },
      { "x": 28.5, "y": 57.6, "title": { "es": "Placa de transfer para zapatillas", "en": "Shoe transfer plate" }, "description": { "es": "Superficie de trabajo espec├¡fica para sublimar zapatillas, chinelas y art├¡culos de calzado de distintos tama├▒os.", "en": "Work surface specifically designed for sublimating sneakers, flip-flops, and footwear of various sizes." } },
      { "x": 26.5, "y": 71.9, "title": { "es": "Base estabilizadora", "en": "Stabilizing base" }, "description": { "es": "Estructura robusta que mantiene la m├íquina firme y nivelada durante el proceso de prensado.", "en": "Robust structure that keeps the machine stable and level throughout the pressing process." } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s para dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
        "title": { "es": "Alta Especializaci├│n", "en": "High Specialization" },
        "description": { "es": "Platos dise├▒ados espec├¡ficamente para la ergonom├¡a del calzado.", "en": "Plates designed specifically for footwear ergonomics." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Simple pero Efectiva", "en": "Simple but Effective" },
        "description": { "es": "En la plancha transfer Beinsen Chinela todo est├í pensado con el mismo fin: zapatillas. Un plato especial con dise├▒o ergon├│mico en una plancha giratoria para que tengas todo el espacio necesario para trabajar.", "en": "Everything in the Beinsen Chinela transfer press is designed with one goal: sneakers. A special ergonomic plate on a rotating press gives you all the workspace you need." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Flujo de Trabajo M├ís ├ügil", "en": "Faster Workflow" },
        "description": { "es": "El sistema giratorio permite pasar r├ípidamente al siguiente planchado, mejorando tiempos de producci├│n sin perder control.", "en": "The rotating system lets you move quickly to the next press, improving production times without losing control." },
        "icon": "Clock"
      },
      {
        "title": { "es": "Espacio ├ôptimo de Trabajo", "en": "Optimized Workspace" },
        "description": { "es": "Dise├▒ada para trabajar con comodidad y precisi├│n en calzado, incluso en tiradas continuas.", "en": "Designed to work comfortably and precisely on footwear, even during continuous runs." },
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
      "es": "Acaba con las tazas aburridas a golpe de personalizaci├│n. La plancha transfer profesional para tazas Beinsen Sore es nuestra especialista en tazas. Puedes incrementar la producci├│n x5 o bien utilizar cada resistencia como si fuera una plancha individual.",
      "en": "End boring mugs with personalization. The Beinsen Sore professional mug press is our specialist for mugs. You can increase production x5 or use each element as if it were an individual press.",
      "pt": "Acabe com as canecas aborrecidas com a personaliza├º├úo. A prensa profissional Beinsen Sore ├® a nossa especialista em canecas.",
      "it": "Basta con le tazze noiose grazie alla personalizzazione. La pressa professionale Beinsen Sore ├¿ la nostra specialista per le tazze."
    },
    "image": "/products/maquinas/sore-plancha-profesional-tazas/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Acaba con las tazas aburridas a golpe de personalizaci├│n",
        "La plancha transfer profesional para tazas Beinsen Sore es nuestra especialista en tazas",
        "Puedes incrementar la producci├│n x5 o bien utilizar cada resistencia como si fuera una plancha individual",
        "Tu plancha profesional para tazas Beinsen Sore no es una plancha d├│nde hacer 5 tazas de manera simult├ínea, es mucho m├ís"
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
      { "id": "resistencia-tazas-11oz-a" },
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
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "Ô£ù" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-480 seg." },
      { "label": { "es": "N├║mero de resistencias", "en": "Number of Heating Elements" }, "value": "5" },
      { "label": { "es": "Tazas admitidas", "en": "Supported Mug Sizes" }, "value": "entre 11 y 15oz." },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "5 x 300 W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225 ┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "47 kg" },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "93 x 49 x 39 cm" }
    ],
    "benefits": [
      {
        "title": { "es": "Producci├│n Industrial", "en": "Industrial Production" },
        "description": { "es": "Multiplica por 5 tu capacidad de entrega diaria con una sola estaci├│n de trabajo.", "en": "Multiply your daily delivery capacity by 5 with a single workstation." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Control Independiente", "en": "Independent Control" },
        "description": { "es": "Cada resistencia cuenta con su propio controlador digital para m├íxima versatilidad.", "en": "Each element has its own digital controller for maximum versatility." },
        "icon": "Settings",
        "image": "/products/maquinas/sore-plancha-profesional-tazas/06.JPG"
      },
      {
        "title": { "es": "Dise├▒o Ergon├│mico", "en": "Ergonomic Design" },
        "description": { "es": "Estructura optimizada para un cambio r├ípido de resistencias y f├ícil colocaci├│n.", "en": "Optimized structure for quick element change and easy placement." },
        "icon": "MousePointer2",
        "image": "/products/maquinas/sore-plancha-profesional-tazas/05.JPG"
      }
    ],
    "hotspots": [
      { "x": 81.1, "y": 22.7, "title": { "es": "Resistencia de alta calidad para tazas entre 11 y 15oz", "en": "High-quality heating element for 11ÔÇô15oz mugs" }, "description": { "es": "", "en": "" } },
      { "x": 12.6, "y": 43.3, "title": { "es": "Botones de encendido independientes", "en": "Independent power buttons" }, "description": { "es": "", "en": "" } },
      { "x": 58.0, "y": 67.6, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 8.9,  "y": 71.9, "title": { "es": "Estructura robusta y duradera", "en": "Robust and durable structure" }, "description": { "es": "", "en": "" } }
    ],
    
    "maintenanceTips": {
      "es": [
        "Limpiar las resistencias despu├®s de cada jornada",
        "Revisar el estado de los cables t├®rmicos mensualmente",
        "Evitar el contacto directo de las placas sin taza",
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s para dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Dorian prensa t├®rmica para platos",
      "en": "Dorian heat press for plates",
      "pt": "Dorian prensa t├®rmica para pratos",
      "it": "Dorian pressa termica per piatti"
    },
    "description": {
      "es": "Con la plancha para platos se pueden realizar todos los m├®todos comunes de transferencia en caliente (flock, flex, sublimaci├│n, etc.). Funciona con una resistencia de 155 mm intercambiable, de acero s├│lido resistente a los ara├▒azos, con temperatura, tiempo ajustable y alarma.",
      "en": "To request more information, you can contact us during our customer service hours. Check which is the nearest technical service to your address.",
      "pt": "Para mais informa├º├Áes, contacte-nos durante o hor├írio de atendimento ao cliente.",
      "it": "Per richiedere maggiori informazioni, puoi contattarci durante l'orario di assistenza clienti."
    },
    "image": "/products/maquinas/dorian-plancha-termica-platos/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Para solicitar m├ís informaci├│n puedes contactar con nosotros en el horario de atenci├│n al cliente",
        "Consulta cu├íl es el servicio t├®cnico mas cercano a tu domicilio",
        "Ideal para personalizaci├│n profesional de platos"
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
      { "label": { "es": "Precisi├│n del controlador", "en": "Controller Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0┬║-225┬║" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "15 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "55 x 46 x 26 cm" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "300 W" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Fija" },
      { "label": { "es": "Tama├▒o de resistencia", "en": "Heating Element Size" }, "value": "├ÿ155 mm" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Manual" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Modelo", "en": "Model" }, "value": "Dorian" }
    ],
    "hotspots": [
      { "x": 34.7, "y": 12.3, "title": { "es": "Asa ergon├│mica", "en": "Ergonomic handle" }, "description": { "es": "Mango antideslizante que permite bajar y subir el plato superior con precisi├│n y comodidad en cada ciclo.", "en": "Non-slip handle for precise and comfortable upper plate movement in every cycle." } },
      { "x": 39.2, "y": 58.5, "title": { "es": "Resistencia circular", "en": "Circular heating element" }, "description": { "es": "Resistencia de forma circular dise├▒ada para distribuir el calor de manera uniforme sobre toda la superficie del plato cer├ímico.", "en": "Circular heating element designed to distribute heat evenly across the entire ceramic plate surface." } },
      { "x": 42.2, "y": 75.8, "title": { "es": "Placa de trabajo", "en": "Work plate" }, "description": { "es": "Superficie inferior donde se coloca el plato cer├ímico. Compatible con platos de hasta 15,2 cm de di├ímetro.", "en": "Lower surface where the ceramic plate is placed. Compatible with plates up to 15.2 cm in diameter." } },
      { "x": 32.2, "y": 85.7, "title": { "es": "Controlador digital GY-04", "en": "GY-04 digital controller" }, "description": { "es": "Permite programar con precisi├│n la temperatura y el tiempo de cada sublimaci├│n para obtener resultados profesionales y consistentes.", "en": "Precisely programs temperature and time for each sublimation to achieve professional and consistent results." } }
    ],
    
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
        "title": { "es": "Precisi├│n en Cer├ímica", "en": "Ceramic Precision" },
        "description": { "es": "Presi├│n uniforme para evitar roturas en soportes r├¡gidos.", "en": "Uniform pressure to avoid breakage on rigid supports." },
        "icon": "Zap",
        "image": "/products/maquinas/dorian-plancha-termica-platos/02.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Vers├ítil y Robusta", "en": "Versatile and Robust" },
        "description": { "es": "F├ícil de montar y desmontar, con controlador digital GY-04 para ajustar tiempo y temperatura con precisi├│n. Su estructura de acero s├│lido y acabado naranja Beinsen aportan durabilidad y estilo.", "en": "Easy to assemble and disassemble, with GY-04 digital controller for precise time and temperature settings. Solid steel structure and Beinsen orange finish provide durability and style." },
        "icon": "Settings",
        "image": "/products/maquinas/dorian-plancha-termica-platos/04.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Personalizaci├│n Integral de Platos", "en": "Full Plate Customization" },
        "description": { "es": "Permite personalizar tanto el fondo como los bordes de platos cer├ímicos, ideal para frases, im├ígenes y dise├▒os creativos en vajilla.", "en": "Lets you personalize both the center and edges of ceramic plates, ideal for phrases, images, and creative tableware designs." },
        "icon": "Layers",
        "image": "/products/maquinas/dorian-plancha-termica-platos/01.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Sublimaci├│n Hasta 15,2 cm", "en": "Sublimation Up to 15.2 cm" },
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
      "es": "Barahona Plancha T├®rmica Para Tazas 6 en 1",
      "en": "Barahona Mug Heat Press 6-in-1",
      "pt": "Barahona Prensa T├®rmica Para Canecas 6 em 1",
      "it": "Barahona Pressa Termica Per Tazze 6 in 1"
    },
    "description": {
      "es": "Imagina poder crear tus propias tazas personalizadas con resultados profesionales, ┬┐no ser├¡a genial? Con la plancha t├®rmica Barahona, eso es posible. Esta plancha es perfecta para aquellos que buscan una soluci├│n eficiente y pr├íctica para personalizar tazas.",
      "en": "Versatility in the palm of your hand. With the Alina press you can customize mugs of different sizes thanks to its interchangeable elements.",
      "pt": "Versatilidade na palma da sua m├úo. Com a prensa Alina poder├í personalizar canecas de diferentes tamanhos.",
      "it": "Versatilit├á nel palmo della tua mano. Con la pressa Alina potrai personalizzare tazze di diverse dimensioni."
    },
    "image": "/products/maquinas/barahona-plancha-para-tazas-6-en-1/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Prensa t├®rmica 4 en 1 para m├íxima versatilidad",
        "Ideal para tazas de diferentes di├ímetros y formas",
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
      ],


        "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Modelo", "en": "Model" }, "value": "Barahona" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Para tazas" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Manual" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Cambiable" },
      { "label": { "es": "Tama├▒o de resistencia", "en": "Heating Element Size" }, "value": "1.5oz / 2.5oz / 6oz-10oz / 12oz / 17oz / 11oz-15oz" },
      { "label": { "es": "M├íximo volumen imprimible", "en": "Maximum Printable Volume" }, "value": "1.5oz / 2.5oz / 6oz-10oz / 12oz / 17oz / 11oz-15oz" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "130 W / 260 W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "13 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "60 x 42 x 30 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-04" },
      { "label": { "es": "Precisi├│n del controlador", "en": "Controller Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0┬║-225┬║" }
    ],
    "benefits": [
      {
        "title": { "es": "No habr├í taza, termo o botella que se te resista", "en": "No mug, tumbler, or bottle can resist it" },
        "description": { "es": "Con sus 6 resistencias intercambiables, podr├ís personalizar cualquier tipo de taza con facilidad. Ya no tendr├ís que preocuparte por tama├▒os diferentes al est├índar.", "en": "With 6 interchangeable heating elements, you can customize almost any mug format with ease, including non-standard sizes." },
        "icon": "Layers",
        "image": "/products/maquinas/barahona-plancha-para-tazas-6-en-1/02.png"
      },
      {
        "title": { "es": "Sencilla pero eficaz", "en": "Simple but effective" },
        "description": { "es": "Su dise├▒o ergon├│mico y f├ícil de usar te permitir├í cambiar las resistencias a mano f├ícilmente, sin necesidad de herramientas adicionales.", "en": "Its ergonomic, user-friendly design lets you change elements by hand without extra tools." },
        "icon": "Settings",
        "image": "/products/maquinas/barahona-plancha-para-tazas-6-en-1/03.png"
      },
      {
        "title": { "es": "Barahona ser├í tu amiga fiel a la hora de sublimar", "en": "Barahona is your trusted sublimation ally" },
        "description": { "es": "Es la soluci├│n perfecta para los amantes de la personalizaci├│n de tazas. No pierdas m├ís tiempo con soluciones obsoletas y descubre todo lo que esta herramienta puede ofrecerte.", "en": "It is the perfect solution for mug customization lovers. Stop wasting time with outdated solutions and unlock everything this tool can offer." },
        "icon": "ShieldCheck",
        "image": "/products/maquinas/barahona-plancha-para-tazas-6-en-1/04.png"
      },
      {
        "title": { "es": "Versatilidad total", "en": "Total versatility" },
        "description": { "es": "El dise├▒o de la plancha facilita sublimar tazas, botellas y termos de distintos tama├▒os: 1.5oz, 2.5oz, 6oz-10oz, 12oz, 17oz y 11oz-15oz.", "en": "Designed to sublimate mugs, bottles, and tumblers in multiple sizes: 1.5oz, 2.5oz, 6oz-10oz, 12oz, 17oz, and 11oz-15oz." },
        "icon": "Ruler",
        "image": "/products/maquinas/barahona-plancha-para-tazas-6-en-1/01.png"
      },
      {
        "title": { "es": "Presi├│n perfecta", "en": "Perfect pressure" },
        "description": { "es": "Gracias a sus 4 perillas de ajuste de presi├│n podr├ís regular la presi├│n en cada momento para lograr impresiones de alta calidad.", "en": "Its 4 pressure adjustment knobs help you fine-tune pressure at any moment for high-quality prints." },
        "icon": "Target"
      },
      {
        "title": { "es": "Controlador digital de alta calidad", "en": "High-quality digital controller" },
        "description": { "es": "Gracias al mango de soporte, podr├ís presionar f├ícilmente hacia abajo la m├íquina de prensado en caliente para tazas y mantener una buena presi├│n de contacto.", "en": "The support handle makes it easy to press down the mug heat press while maintaining strong contact pressure." },
        "icon": "Cpu"
      }
    ],
    "hotspots": [
      { "x": 51.8, "y": 22.1, "title": { "es": "Asa", "en": "Handle" }, "description": { "es": "Permite abrir y cerrar la prensa con comodidad y control en cada ciclo.", "en": "Allows opening and closing the press comfortably and with control in every cycle." } },
      { "x": 56.1, "y": 50.8, "title": { "es": "Resistencia cil├¡ndrica", "en": "Cylindrical heating element" }, "description": { "es": "Envuelve la taza para distribuir el calor de forma uniforme en toda la superficie.", "en": "Wraps the mug to distribute heat evenly across the entire surface." } },
      { "x": 97.0, "y": 51.5, "title": { "es": "Bot├│n de encendido", "en": "Power button" }, "description": { "es": "Enciende y apaga el equipo de forma r├ípida y segura.", "en": "Turns the machine on and off quickly and safely." } },
      { "x": 81.8, "y": 52.5, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "Programa la temperatura y el tiempo con precisi├│n para cada trabajo.", "en": "Program temperature and time precisely for each job." } },
      { "x": 33.0, "y": 75.7, "title": { "es": "Perilla de ajuste", "en": "Adjustment knob" }, "description": { "es": "Regula la presi├│n de prensado para adaptarse a distintos grosores de taza.", "en": "Adjusts pressing pressure to accommodate different mug thicknesses." } }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Alina es la compa├▒era ideal para personalizar tazas. Con ella podr├ís personalizar tazas de diferentes formas y capacidades gracias a sus 4 resistencias intercambiables para tazas cil├¡ndricas de 6-10oz y 11-15oz, y c├│nicas de 12oz y 17oz.",
      "en": "Alina is the perfect companion for mug customization. With 4 interchangeable heating elements for cylindrical mugs (6-10oz, 11-15oz) and conical (12oz, 17oz), it adapts to any format.",
      "pt": "Alina ├® a companheira ideal para personalizar canecas. Com 4 resist├¬ncias intercambi├íveis para canecas cil├¡ndricas de 6-10oz e 11-15oz, e c├│nicas de 12oz e 17oz.",
      "it": "Alina ├¿ la compagna ideale per personalizzare tazze. Con 4 elementi riscaldanti intercambiabili per tazze cilindriche 6-10oz e 11-15oz, e coniche 12oz e 17oz."
    },
    "image": "/products/maquinas/alina-plancha-para-tazas/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "4 resistencias intercambiables (6-10oz, 11-15oz, 12oz c├│nica, 17oz c├│nica)",
        "Estructura soldada de acero s├│lido con acabado naranja Beinsen",
        "Controlador digital GY-04 con ajuste de tiempo y temperatura"
      ],
      "en": [
        "4 interchangeable elements (6-10oz, 11-15oz, 12oz conical, 17oz conical)",
        "Welded solid steel structure with Beinsen orange finish",
        "GY-04 digital controller with time and temperature adjustment"
      ],
      "pt": [
        "4 resist├¬ncias intercambi├íveis (6-10oz, 11-15oz, 12oz c├│nica, 17oz c├│nica)",
        "Estrutura soldada de a├ºo s├│lido com acabamento laranja Beinsen",
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
      { "id": "resistencia-tazas-11oz-a" },
      { "id": "cinta-termica-10mm" }
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
      { "label": { "es": "Resistencias incluidas", "en": "Included Elements" }, "value": "4 (6-10oz, 11-15oz, 12oz c├│nica, 17oz c├│nica)" },
      { "label": { "es": "Resistencias intercambiables", "en": "Interchangeable Elements" }, "value": "Ô£ô" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225 Ôäâ" },
      { "label": { "es": "Precisi├│n de temperatura", "en": "Temperature Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V / 110V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "130W / 260W" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "12,75 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "60,4 x 42,6 x 29,7 cm" }
    ],
    "benefits": [
      {
        "title": { "es": "La compa├▒era ideal para personalizar tazas", "en": "The ideal companion for mug customization" },
        "description": { "es": "Alina est├í dise├▒ada desde cero para la personalizaci├│n de tazas. Con ella podr├ís abordar pedidos de cualquier formato sin necesidad de cambiar de m├íquina.", "en": "Alina is purpose-built for mug customization. Take on orders of any format without switching machines." },
        "icon": "CupSoda",
        "image": "/products/maquinas/alina-plancha-para-tazas/02.png"
      },
      {
        "title": { "es": "4 resistencias para cubrir todos los formatos", "en": "4 elements to cover all formats" },
        "description": { "es": "Incluye resistencias para tazas cil├¡ndricas de 6 a 10oz y de 11 a 15oz, m├ís c├│nicas de 12oz y 17oz. Podr├ís personalizar pr├ícticamente cualquier taza del mercado.", "en": "Includes elements for cylindrical mugs 6-10oz and 11-15oz, plus conical 12oz and 17oz. Covers virtually any mug on the market." },
        "icon": "Layers",
        "image": "/products/maquinas/alina-plancha-para-tazas/03.png"
      },
      {
        "title": { "es": "Compatible con todos los m├®todos de transferencia", "en": "Compatible with all transfer methods" },
        "description": { "es": "Con la Alina podr├ís realizar flock, flex, sublimaci├│n y cualquier otro m├®todo com├║n de transferencia en caliente sobre tazas.", "en": "With Alina you can perform flock, flex, sublimation and any other common heat transfer method on mugs." },
        "icon": "Zap",
        "image": "/products/maquinas/alina-plancha-para-tazas/04.png"
      },
      {
        "title": { "es": "F├ícil montaje y desmontaje", "en": "Easy assembly and disassembly" },
        "description": { "es": "Las resistencias se cambian a mano sin herramientas adicionales, reduciendo el tiempo entre pedidos de diferentes tama├▒os.", "en": "Elements swap by hand without extra tools, reducing turnaround time between orders of different sizes." },
        "icon": "Wrench",
        "image": "/products/maquinas/alina-plancha-para-tazas/05.png"
      },
      {
        "title": { "es": "Control digital preciso", "en": "Precise digital control" },
        "description": { "es": "El controlador GY-04 permite programar tiempo y temperatura con precisi├│n, garantizando resultados homog├®neos en cada ciclo.", "en": "The GY-04 controller lets you program time and temperature precisely, ensuring consistent results every cycle." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Alarma autom├ítica al finalizar", "en": "Automatic end-cycle alarm" },
        "description": { "es": "La alarma sonora avisa al terminar cada ciclo para que nunca sobreprenses un trabajo.", "en": "The sound alarm signals the end of each cycle so you never over-press a job." },
        "icon": "Bell"
      },
      {
        "title": { "es": "Bajo consumo de energ├¡a", "en": "Low energy consumption" },
        "description": { "es": "Con 130W-260W seg├║n la resistencia activa, Alina es eficiente energ├®ticamente sin sacrificar temperatura ni velocidad de calentamiento.", "en": "At 130W-260W depending on the active element, Alina is energy-efficient without sacrificing temperature or warm-up speed." },
        "icon": "BatteryCharging"
      },
      {
        "title": { "es": "Estructura robusta y duradera", "en": "Robust and durable structure" },
        "description": { "es": "Su estructura soldada de acero s├│lido y acabado naranja Beinsen garantizan resistencia a largas jornadas de producci├│n continuada.", "en": "Its welded solid steel frame with Beinsen orange finish withstands long continuous production sessions." },
        "icon": "ShieldCheck"
      }
    ],
    "hotspots": [
      { "x": 37.7, "y": 15.6, "title": { "es": "Asa", "en": "Handle" }, "description": { "es": "Permite abrir y cerrar la prensa con comodidad y control en cada ciclo.", "en": "Allows opening and closing the press comfortably and with control in every cycle." } },
      { "x": 49.6, "y": 53.9, "title": { "es": "Resistencia cil├¡ndrica", "en": "Cylindrical heating element" }, "description": { "es": "Envuelve la taza para distribuir el calor de forma uniforme en toda la superficie.", "en": "Wraps the mug to distribute heat evenly across the entire surface." } },
      { "x": 89.4, "y": 55.1, "title": { "es": "Bot├│n de encendido", "en": "Power button" }, "description": { "es": "Enciende y apaga el equipo de forma r├ípida y segura.", "en": "Turns the machine on and off quickly and safely." } },
      { "x": 73.1, "y": 55.3, "title": { "es": "Controlador digital GY-04", "en": "GY-04 digital controller" }, "description": { "es": "Programa la temperatura y el tiempo con precisi├│n para cada trabajo.", "en": "Program temperature and time precisely for each job." } },
      { "x": 18.8, "y": 63.3, "title": { "es": "Perilla de ajuste", "en": "Adjustment knob" }, "description": { "es": "Regula la presi├│n de prensado para adaptarse a distintos grosores de taza.", "en": "Adjusts pressing pressure to accommodate different mug thicknesses." } }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las resistencias y superficie de contacto.",
        "Reemplazo de l├íminas de tefl├│n protectoras cuando se deterioren.",
        "Inspecci├│n peri├│dica del cable de alimentaci├│n y conexiones.",
        "Verificaci├│n y calibraci├│n de la temperatura con term├│metro.",
        "Guardar en lugar seco y libre de polvo cuando no est├® en uso."
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
      "es": "Horno sublimaci├│n 3D",
      "en": "3D Sublimation Oven",
      "pt": "Forno de sublima├º├úo 3D",
      "it": "Forno per sublimazione 3D"
    },
    "description": {
      "es": "El Horno 3D es la soluci├│n perfecta para personalizar varios objetos peque├▒os a la vez. Es el compa├▒ero perfecto para iniciarse en el arte de la personalizaci├│n.",
      "en": "The 3D Oven is the perfect solution for customizing several small objects at once. It is the perfect companion to start in the art of personalization.",
      "pt": "O Forno 3D ├® a solu├º├úo perfeita para personalizar v├írios objetos pequenos ao mesmo tempo.",
      "it": "Il Forno 3D ├¿ la soluzione perfetta per personalizzare diversi piccoli oggetti contemporaneamente."
    },
    "image": "https://beinsen.com/wp-content/uploads/2019/11/horn3d.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "El Horno 3D es la soluci├│n perfecta para personalizar varios objetos peque├▒os a la vez",
        "Es el compa├▒ero perfecto para iniciarse en el arte de la personalizaci├│n",
        "Puedes utilizarla para sublimar peque├▒os objetos como llaveros, placas, colgantes, cristal etc"
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

    "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de apertura", "en": "Opening Type" }, "value": "Manual" },
      { "label": { "es": "Transferencia", "en": "Transfer" }, "value": "Presi├│n de vacio" },
      { "label": { "es": "Filtro de aire", "en": "Air Filter" }, "value": "S├¡" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "S├¡" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "├ürea de trabajo", "en": "Working Area" }, "value": "300 x 420 x 110 cm" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "280 ┬║C" },
      { "label": { "es": "Precisi├│n de la temperatura", "en": "Temperature Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "120 V / 220 V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "2800 W" },
      { "label": { "es": "Peso Bruto", "en": "Gross Weight" }, "value": "25 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "590 x 470 x 320 mm" }
    ],
    "benefits": [
      {
        "title": { "es": "Kit completo para empezar", "en": "Complete starter kit" },
        "description": { "es": "Incluye 2 abrazaderas de 11oz, 1 abrazadera de 15oz, 1 l├ímina de silicona para platos y guantes de algod├│n para trabajar con seguridad.", "en": "Includes 2 clamps for 11oz, 1 clamp for 15oz, 1 silicone sheet for plates, and cotton gloves for safer handling." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Impresi├│n tridimensional", "en": "Three-dimensional printing" },
        "description": { "es": "Dise├▒ado para sublimaci├│n 3D con resultados uniformes en piezas de distintas formas.", "en": "Built for 3D sublimation with uniform results across differently shaped items." },
        "icon": "Target"
      },
      {
        "title": { "es": "Control digital preciso", "en": "Precise digital control" },
        "description": { "es": "Controlador digital con ajuste de tiempo y temperatura, adem├ís de alarma autom├ítica para mayor control en cada ciclo.", "en": "Digital controller with time and temperature adjustment, plus automatic alarm for better cycle control." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Estructura s├│lida y eficiente", "en": "Solid and efficient structure" },
        "description": { "es": "Estructura robusta, filtro de aire y bajo consumo de energ├¡a para un uso m├ís estable y eficiente.", "en": "Robust structure, air filter, and low energy consumption for more stable and efficient operation." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Dise├▒o pr├íctico y profesional", "en": "Practical professional design" },
        "description": { "es": "Acabado en color negro, f├ícil de montar y desmontar para adaptarse a tu ritmo de trabajo.", "en": "Black finish and easy assembly/disassembly to match your workflow." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Compatible con m├ís moldes", "en": "Compatible with more molds" },
        "description": { "es": "Podr├ís adquirir diferentes moldes para tazas, jarras, platos y m├ís aplicaciones de personalizaci├│n.", "en": "You can add different molds for mugs, jugs, plates, and more personalization applications." },
        "icon": "Zap"
      }
    ]
  },
  {
    "id": "plancha-para-tazas",
    "slug": "andra-prensa-automatica-tazas",
    "name": {
      "es": "Andra prensa autom├ítica para tazas",
      "en": "Andra automatic mug press",
      "pt": "Andra prensa autom├ítica para canecas",
      "it": "Andra pressa automatica per tazze"
    },
    "description": {
      "es": "Personalizar tazas nunca result├│ tan sencillo como con la prensa autom├ítica Beinsen Andra. El sistema de envoltura autom├ítica hara que plasmar tus dise├▒os sea un aut├®ntico juego de ni├▒os.",
      "en": "Personalizing mugs has never been so easy as with the Beinsen Andra automatic press. The automatic wrapping system makes printing your designs child's play.",
      "pt": "Personalizar canecas nunca foi t├úo simples como com a prensa autom├ítica Beinsen Andra.",
      "it": "Personalizzare le tazze non ├¿ mai stato cos├¼ simple come con la pressa automatica Beinsen Andra."
    },
    "image": "/products/maquinas/andra-prensa-automatica-tazas/010.JPG",
    "heroVideo": "https://beinsen.com/wp-content/uploads/2025/04/andra.webm",
    "hotspotImage": "https://beinsen.com/wp-content/uploads/2024/01/description_barein.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Personalizar tazas nunca result├│ tan sencillo como con la prensa autom├ítica Beinsen Andra",
        "El sistema de envoltura autom├ítica y el preciso controlador digital har├í que plasmar tus dise├▒os sea un aut├®ntico juego de ni├▒os",
        "Puedes cambiar facilmente la presi├│n para personalizar tazas tanto de 11 como de 15 onzas"
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
    "openingType": { "es": "El├®ctrica", "en": "Electric", "pt": "El├®trica", "it": "Elettrica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tazas" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-05N" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "Ô£ù" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de\nresistencias", "en": "Number of Heating Elements" }, "value": "1" },
      { "label": { "es": "Tazas compatibles", "en": "Compatible Mug Sizes" }, "value": "11 oz y 15 oz" },
      { "label": { "es": "Resistencias intercambiables", "en": "Interchangeable Elements" }, "value": "Ô£ô" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "260 W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "230 ┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "5 kg" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "6.5 kg" },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "38 x 27 x 25 cm" }
    ],
    "benefits": [
      {
        "title": { "es": "Producci├│n sin Esfuerzo", "en": "Effortless Production" },
        "description": { "es": "El sistema autom├ítico garantiza una presi├│n perfecta sin intervenci├│n manual.", "en": "The automatic system ensures perfect pressure without manual intervention." },
        "icon": "Zap",
        "image": "/products/maquinas/andra-prensa-automatica-tazas/04.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Despreoc├║pate", "en": "Worry-free personalization" },
        "description": { "es": "T├║, que conoces mejor que nadie la presi├│n del d├¡a a d├¡a, mereces que personalizar tus tazas sea algo divertido. T├║ s├│lo pon el tiempo y la temperatura y despreoc├║pate durante unos segundos aunque sea.", "en": "Set the time and temperature, then let the press handle the cycle so mug personalization feels easier and more enjoyable." },
        "icon": "Clock",
        "image": "/products/maquinas/andra-prensa-automatica-tazas/05.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "M├ís fuerte que nunca", "en": "Stronger than ever" },
        "description": { "es": "Esta nueva generaci├│n de Beinsen Andra incorpora mejoras en componentes clave como el motor, la resistencia y el bot├│n de reset para ofrecer mayor fiabilidad.", "en": "This new Beinsen Andra generation improves key components such as the motor, heating element, and reset button for greater reliability." },
        "icon": "ShieldCheck",
        "image": "/products/maquinas/andra-prensa-automatica-tazas/012.JPG"
      }
    ],
    
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      { "x": 68,   "y": 20,   "title": { "es": "Nuevo bot├│n de reset elegante",          "en": "New elegant reset button" },            "description": { "es": "", "en": "" } },
      { "x": 27,   "y": 35.9, "title": { "es": "Nueva resistencia m├ís eficaz y duradera", "en": "New more efficient and durable element" }, "description": { "es": "", "en": "" } },
      { "x": 49.5, "y": 37.4, "title": { "es": "Controlador digital GY05N",               "en": "GY05N digital controller" },             "description": { "es": "", "en": "" } },
      { "x": 48.6, "y": 52.1, "title": { "es": "Adaptador para tazas de 11 o 15oz",       "en": "Adapter for 11 or 15oz mugs" },           "description": { "es": "", "en": "" } }
    ]
  },
  {
    "id": "caen-plancha-neumatica-doble-estacion",
    "slug": "caen-plancha-neumatica-doble-estacion",
    "name": {
      "es": "Caen estaci├│n de trabajo doble neum├ítica",
      "en": "Caen double station pneumatic heat press",
      "pt": "Caen esta├º├úo de trabalho dupla pneum├ítica",
      "it": "Caen stazione di lavoro doppia pneumatica"
    },
    "description": {
      "es": "┬íDescubre la nueva era de la transferencia de calor y sublimaci├│n con Ca├®n! La plancha t├®rmica de doble estaci├│n neum├ítica que revolucionar├í tu experiencia de impresi├│n.",
      "en": "Discover the new era of heat transfer and sublimation with Ca├®n! The double station pneumatic heat press that will revolutionize your printing experience.",
      "pt": "Descubra a nova era da transfer├¬ncia de calor e sublima├º├úo com Ca├®n!",
      "it": "Scopri la nuova era del trasferimento di calore e della sublimazione con Ca├®n!"
    },
    "image": "/products/maquinas/caen-plancha-neumatica-doble-estacion/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Funcionamiento neum├ítico para presi├│n uniforme",
        "Doble estaci├│n para duplicar la producci├│n",
        "Dispositivo de posicionamiento por infrarrojos incluido",
        "Control digital de precisi├│n para tiempo y temperatura"
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


        "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Neum├ítica", "en": "Pneumatic", "pt": "Pneum├ítica", "it": "Pneumatica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Neum├ítica, estaci├│n de trabajo" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Grosor m├íximo del personalizable", "en": "Max Customizable Thickness" }, "value": "50mm." },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-06" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "Ô£ù" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "2" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ù" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "295Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "395Kg." },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "115x112x160cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Mesa con 4 ruedas universales y altura ajustable a 3 niveles" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "2, en una estructura sobre la estaci├│n" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "Cubierta anti quemaduras" }
    ],
    "benefits": [
      {
        "title": { "es": "M├ís velocidad, m├ís eficiencia", "en": "More speed, more efficiency" },
        "description": { "es": "Gracias a su doble estaci├│n y mecanismo de lanzadera, puedes trabajar en dos art├¡culos al mismo tiempo, duplicando la producci├│n. Su funcionamiento neum├ítico distribuye la presi├│n de manera uniforme y asegura resultados impecables en cada prensado.", "en": "Thanks to its double station and shuttle mechanism, you can work on two items at once, doubling output with uniform pneumatic pressure on every press." },
        "icon": "Zap",
        "image": "/products/maquinas/caen-plancha-neumatica-doble-estacion/07.png"
      },
      {
        "title": { "es": "Precisi├│n digital y posicionamiento perfecto", "en": "Digital precision and perfect positioning" },
        "description": { "es": "Incorpora un dispositivo de posicionamiento por infrarrojos para alinear cada dise├▒o al mil├¡metro y un sistema digital para controlar tiempo y temperatura con total precisi├│n.", "en": "Includes infrared positioning for millimeter-perfect alignment and a digital system to control time and temperature with high precision." },
        "icon": "Target"
      },
      {
        "title": { "es": "Detalles que marcan diferencias", "en": "Details that make the difference" },
        "description": { "es": "Cuenta con dos bandejas laterales para organizar mejor el flujo de trabajo y un display digital GY-06 f├ícil e intuitivo. Adem├ís, el control de presi├│n neum├ítica en el frontal te ayuda a trabajar sin distracciones.", "en": "It features two side trays for better workflow, an intuitive GY-06 digital display, and front pneumatic pressure control for distraction-free operation." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Construcci├│n robusta", "en": "Robust construction" },
        "description": { "es": "La Beinsen Ca├®n est├í construida con materiales de alta calidad para uso intensivo e incluye soporte con ruedas para una estaci├│n de trabajo estable y pr├íctica.", "en": "Beinsen Ca├®n is built with high-quality materials for intensive use and includes a wheeled stand for a stable, practical workstation." },
        "icon": "ShieldCheck",
        "image": "/products/maquinas/caen-plancha-neumatica-doble-estacion/05.png"
      },
      {
        "title": { "es": "Ajuste al mil├¡metro", "en": "Millimeter adjustment" },
        "description": { "es": "Ajusta la cruz l├íser con m├íxima precisi├│n y reduce errores de colocaci├│n para evitar impresiones fuera de lugar.", "en": "Fine-tune the cross laser with high precision and reduce placement errors to avoid off-position prints." },
        "icon": "Ruler"
      }
    ],
    "hotspots": [
      { "x": 48.2, "y": 35.8, "title": { "es": "Cabeza movible", "en": "Movable head" }, "description": { "es": "", "en": "" } },
      { "x": 54.5, "y": 40.3, "title": { "es": "Pantalla digital", "en": "Digital display" }, "description": { "es": "", "en": "" } },
      { "x": 68.4, "y": 42.9, "title": { "es": "Bot├│n de activaci├│n", "en": "Activation button" }, "description": { "es": "", "en": "" } },
      { "x": 55.7, "y": 43.6, "title": { "es": "Regulador de presi├│n", "en": "Pressure regulator" }, "description": { "es": "", "en": "" } },
      { "x": 45.2, "y": 48.5, "title": { "es": "Bot├│n activaci├│n l├íser", "en": "Laser activation button" }, "description": { "es": "", "en": "" } },
      { "x": 52.7, "y": 51.1, "title": { "es": "Difusor de calor", "en": "Heat diffuser" }, "description": { "es": "", "en": "" } },
      { "x": 78.3, "y": 53.9, "title": { "es": "Doble plato de 40x50", "en": "Double 40x50 plate" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar que se enfr├¡e.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Obrei plancha para gorras con apertura autom├ítica",
      "en": "Obrei cap press with automatic opening",
      "pt": "Obrei prensa para bon├®s com abertura autom├ítica",
      "it": "Obrei pressa per cappelli con apertura automatica"
    },
    "description": {
      "es": "La precisi├│n y comodidad se unen en la Beinsen Obrei. Dise├▒ada espec├¡ficamente para gorras, su apertura autom├ítica te permite trabajar con total libertad.",
      "en": "Precision and comfort meet in the Beinsen Obrei. Designed specifically for caps, its automatic opening allows you to work with total freedom.",
      "pt": "Precis├úo e conforto unem-se na Beinsen Obrei. Concebida especificamente para bon├®s.",
      "it": "Precisione e comfort si incontrano nella Beinsen Obrei. Progettata specificamente per i cappelli."
    },
    "image": "/products/maquinas/obrei-plancha-gorras-apertura-automatica/01.JPG",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Apertura autom├ítica para mayor comodidad",
        "Dise├▒o espec├¡fico para el curvado de gorras",
        "Control digital de tiempo y temperatura",
        "Plato intercambiable para diferentes tama├▒os de gorras"
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


        "category": { "es": "Gorras", "en": "Caps", "pt": "Bon├®s", "it": "Cappelli" },
    "openingType": { "es": "Electromagn├®tica", "en": "Electromagnetic", "pt": "Eletromagn├®tica", "it": "Elettromagnetica" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Modelo Obrei" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Semiautom├ítica" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Cambiable" },
      { "label": { "es": "Tama├▒o de resistencia", "en": "Heating Element Size" }, "value": "15 x 15 cm y 10 x 20 cm (gorra)" },
      { "label": { "es": "M├íximo grosor imprimible", "en": "Maximum Printable Thickness" }, "value": "20 mm" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "120 / 220 V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "500 W / 1000 W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "25 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "70 x 60 x 35 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-06" },
      { "label": { "es": "Precisi├│n del controlador", "en": "Controller Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0┬║-225┬║" }
    ],
    "benefits": [
      {
        "title": { "es": "Sublima gorras y art├¡culos peque├▒os", "en": "Sublimate caps and small items" },
        "description": { "es": "Gracias a su formato 2 en 1 podr├ís intercambiar platos y trabajar tanto gorras como art├¡culos peque├▒os con su plato plano de 15 x 15.", "en": "Its 2-in-1 format lets you swap plates to sublimate both caps and small items using the 15 x 15 flat plate." },
        "icon": "Zap",
        "image": "/products/maquinas/obrei-plancha-gorras-apertura-automatica/06.png"
      },
      {
        "title": { "es": "Preparada para todos", "en": "Ready for every workshop" },
        "description": { "es": "La termofijadora Obrei est├í pensada para talleres con poco espacio, permitiendo sublimar distintos productos sin sacrificar comodidad.", "en": "Obrei is designed for compact workshops, letting you sublimate multiple product types without sacrificing comfort." },
        "icon": "Layers",
        "image": "/products/maquinas/obrei-plancha-gorras-apertura-automatica/05.png"
      },
      {
        "title": { "es": "Vers├ítil en m├║ltiples t├®cnicas", "en": "Versatile across transfer methods" },
        "description": { "es": "Nada se te va a resistir: permite realizar m├®todos comunes de transferencia en caliente (flock, flex, sublimaci├│n), adem├ís de apoyar trabajos de pedrer├¡a, vinilo y transfer.", "en": "Handle common heat transfer methods (flock, flex, sublimation) and support rhinestone, vinyl, and transfer applications." },
        "icon": "Settings",
        "image": "/products/maquinas/obrei-plancha-gorras-apertura-automatica/01.JPG"
      },
      {
        "title": { "es": "Control total con apertura autom├ítica", "en": "Total control with automatic opening" },
        "description": { "es": "Su apertura y cierre autom├ítico te permite trabajar en otro plato mientras se sublima una pieza. Incluye alarma al finalizar el prensado para mantener la cadena de producci├│n sin pausas.", "en": "Automatic opening and closing lets you work on another plate while one item is pressing. An end-cycle alarm keeps production flowing without pauses." },
        "icon": "Clock"
      }
    ],
    "hotspots": [
      { "x": 50.2, "y": 10.6, "title": { "es": "Asa", "en": "Handle" }, "description": { "es": "", "en": "" } },
      { "x": 49.1, "y": 30.3, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 50.6, "y": 50.7, "title": { "es": "Electroim├ín", "en": "Electromagnet" }, "description": { "es": "", "en": "" } },
      { "x": 54.3, "y": 58.6, "title": { "es": "Plato para gorras", "en": "Cap plate" }, "description": { "es": "", "en": "" } },
      { "x": 50.0, "y": 79.6, "title": { "es": "Base de trabajo", "en": "Work base" }, "description": { "es": "", "en": "" } }
    ],
    "storyHeadline": { "es": "Precisi├│n y Control", "en": "Redefining the workflow" },
    "storySegments": [
      {
        "title": { "es": "Acabados impecables", "en": "Professional performance" },
        "description": {
          "es": "Obrei est├í dise├▒ada para garantizar estampados precisos con una facilidad de uso inigualable.",
          "en": "Obrei is designed to deliver consistent results and high productivity."
        },
        "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/GR9no1BrgI4?si=7mU8OuJ_4MX4fbpG\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
      }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "pt": "Prensas t├®rmicas de abertura pneum├ítica",
      "it": "Presse termiche ad apertura pneumatica"
    },
    "description": {
      "es": "Personaliza a lo grande con la plancha transfer de gran formato Beinsen Doha. Gracias al plato de 80x50cm podr├ís llevar do├│nde no lo hace el resto y ofrecer a tus clientes personalizaciones m├ís espectaculares, y sin renunciar a la precisi├│n, comodidad y robustez de una plancha sandwich tradicional.",
      "en": "Industrial sublimation machines with pneumatic closure and opening for high production.",
      "pt": "M├íquinas industriais pneum├íticas de alta produ├º├úo.",
      "it": "Macchine industriali pneumatiche ad alta produzione."
    },
    "image": "/products/maquinas/doha-plancha-transfer-gran-formato/01.jpg",
    "price": "Consultar PVP",
    "size": { "es": "40x50 / 50x80 cm", "en": "40x50 / 50x80 cm" },
    "features": {
      "es": [
        "Sistema neum├ítico de alto rendimiento",
        "Control preciso de presi├│n y temperatura",
        "Ideal para entornos de producci├│n industrial"
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

    "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Neum├ítica", "en": "Pneumatic", "pt": "Pneum├ítica", "it": "Pneumatica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Cierre manual y apertura autom├ítica" },
      { "label": { "es": "├üngulo de apertura", "en": "Opening Angle" }, "value": "25 grados" },
      { "label": { "es": "Grosor m├íximo del personalizable", "en": "Max Customizable Thickness" }, "value": "8 mm" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-04 Digital" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "40x50 / 50x80 cm" },
      { "label": { "es": "Placa inferior", "en": "Bottom Plate" }, "value": { "es": "Deslizable / Intercambiable", "en": "Sliding / Interchangeable" } },
      { "label": { "es": "Potencia (40x50 / 50x80)", "en": "Power (40x50 / 50x80)" }, "value": "1.6-1.8 kW / 2.4-3.6 kW" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "120V / 220V" },
      { "label": { "es": "Peso neto (40x50 / 50x80)", "en": "Net Weight (40x50 / 50x80)" }, "value": "57 kg / 110 kg" },
      { "label": { "es": "Peso bruto (40x50 / 50x80)", "en": "Gross Weight (40x50 / 50x80)" }, "value": "65 kg / 163 kg" },
      { "label": { "es": "Tama├▒o del embalaje (40x50 / 50x80)", "en": "Package Size (40x50 / 50x80)" }, "value": "89x54x75cm / 105x97x95cm" },
      { "label": { "es": "Resorte de gas", "en": "Gas Spring" }, "value": "Ô£ô" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "Ô£ù" }
    ],
    "benefits": [
      {
        "title": { "es": "Electromagn├®tica y preparada para producir", "en": "Electromagnetic and production-ready" },
        "description": { "es": "La Doha integra cierre electromagn├®tico, controlador digital y bandeja extra├¡ble para una operaci├│n fluida, precisa y c├│moda en trabajos continuos.", "en": "Doha combines electromagnetic closure, digital control, and a pull-out tray for smooth, precise, and comfortable continuous production." },
        "icon": "Settings",
        "image": "/products/maquinas/doha-plancha-transfer-gran-formato/05.jpg"
      },
      {
        "title": { "es": "Plato de 80 x 50 cm", "en": "80 x 50 cm platen" },
        "description": { "es": "Su plato de 80 x 50 cm te permite trabajar piezas de mayor tama├▒o en una sola planchada con acabado profesional.", "en": "Its 80 x 50 cm platen lets you handle larger pieces in a single press with professional finish." },
        "icon": "Ruler",
        "image": "/products/maquinas/doha-plancha-transfer-gran-formato/01.jpg"
      },
      {
        "title": { "es": "Ampl├¡a tus l├¡mites", "en": "Expand your limits" },
        "description": { "es": "Incluye en tu cat├ílogo camisetas XXL, sudaderas, bolsas, banderas o paneles textiles de una sola planchada, con resultados limpios y consistentes.", "en": "Add XXL shirts, hoodies, bags, flags, or textile panels to your catalog in one press with clean, consistent results." },
        "icon": "Layers",
        "image": "/products/maquinas/doha-plancha-transfer-gran-formato/02.jpg"
      },
      {
        "title": { "es": "Confort al m├íximo", "en": "Maximum comfort" },
        "description": { "es": "La bandeja extra├¡ble, el cierre electromagn├®tico y la empu├▒adura ergon├│mica est├ín pensados para que planchar sea m├ís c├│modo durante toda la jornada.", "en": "The pull-out tray, electromagnetic closure, and ergonomic handle are designed to keep pressing comfortable throughout the day." },
        "icon": "Zap",
        "image": "/products/maquinas/doha-plancha-transfer-gran-formato/09.png"
      }
    ],
    "hotspots": [
      { "x": 58.1, "y": 29.4, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 35.2, "y": 31.7, "title": { "es": "Apertura autom├ítica con electroim├ín", "en": "Automatic opening with electromagnet" }, "description": { "es": "", "en": "" } },
      { "x": 14.6, "y": 55.4, "title": { "es": "Alfombrilla extra gruesa de algod├│n reciclado", "en": "Extra thick recycled cotton pad" }, "description": { "es": "", "en": "" } },
      { "x": 34.4, "y": 70.4, "title": { "es": "Bandeja inferior deslizable", "en": "Sliding lower tray" }, "description": { "es": "", "en": "" } },
      { "x": 61.9, "y": 74.9, "title": { "es": "Patas con protecci├│n de goma", "en": "Rubber-protected feet" }, "description": { "es": "", "en": "" } }
    ],
    
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Jamaica Plancha T├®rmica",
      "en": "Jamaica Heat Press",
      "pt": "Jamaica Prensa T├®rmica",
      "it": "Jamaica Pressa Termica"
    },
    "description": {
      "es": "Descubre la plancha t├®rmica Jamaica de Beinsen, una herramienta de personalizaci├│n vers├ítil y de alta calidad. Con sus accesorios intercambiables y su amplia superficie de trabajo, podr├ís sublimar una amplia gama de objetos y dar rienda suelta a tu creatividad.",
      "en": "The versatile solution for your workshop. Personalize mugs, caps, plates, and textiles with a single machine.",
      "pt": "A solu├º├úo vers├ítil para a sua oficina.",
      "it": "La soluzione versatile per il tuo laboratorio."
    },
    "image": "/products/maquinas/jamaica-planchas-transfer-multifuncion-para-sublimacion/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "M├║ltiples platos intercambiables",
        "Ideal para emprendedores y talleres con poco espacio",
        "F├ícil configuraci├│n y uso"
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


        "category": { "es": "Multifunci├│n", "en": "Multi-function", "pt": "Multifun├º├Áes", "it": "Multifunzione" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Modelo Jamaica" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tipo giratoria" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Manual" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Cambiable" },
      { "label": { "es": "Tama├▒o de resistencia", "en": "Heating Element Size" }, "value": "40 x 50cm" },
      { "label": { "es": "M├íximo grosor imprimible", "en": "Maximum Printable Thickness" }, "value": "70mm" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "120/220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1800W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "54 Kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "89 x 543 x 61 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-04" },
      { "label": { "es": "Precisi├│n del controlador", "en": "Controller Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0┬║-225┬║" }
    ],
    "benefits": [
      {
        "title": { "es": "Explora nuevas posibilidades de personalizaci├│n", "en": "Explore new personalization possibilities" },
        "description": { "es": "La plancha t├®rmica Jamaica 8 en 1 de Beinsen te brinda la oportunidad de expandir tus horizontes en la personalizaci├│n. Con resistencias especializadas para platos, gorras y tazas, podr├ís personalizar una variedad de objetos, desde textiles hasta art├¡culos de vajilla.", "en": "The Beinsen Jamaica 8-in-1 heat press helps you expand your personalization options with specialized elements for plates, caps, and mugs." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Sistema de calentamiento r├ípido", "en": "Fast heating system" },
        "description": { "es": "Cuenta con un sistema de calentamiento r├ípido que te permite iniciar tus proyectos de personalizaci├│n en poco tiempo, ahorrando tiempo y aumentando la eficiencia.", "en": "Its fast heating system lets you start personalization projects quickly, saving time and increasing efficiency." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Calidad y rendimiento excepcionales", "en": "Exceptional quality and performance" },
        "description": { "es": "La plancha t├®rmica Jamaica destaca por su calidad y rendimiento superiores. Con una superficie de trabajo de 40 cm x 50 cm en su plato base, garantiza resultados profesionales en cada aplicaci├│n.", "en": "Jamaica stands out for superior quality and performance. Its 40 x 50 cm base plate delivers professional results in every application." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Modo eco y precalentamiento", "en": "Eco mode and preheating" },
        "description": { "es": "Incluye modo eco y funci├│n de precalentamiento para optimizar el consumo y agilizar el flujo de trabajo.", "en": "Includes eco mode and preheating to optimize energy usage and speed up workflow." },
        "icon": "Leaf"
      },
      {
        "title": { "es": "Pantalla digital y programable", "en": "Digital and programmable control" },
        "description": { "es": "Su pantalla digital y sistema programable facilitan una configuraci├│n precisa y repetible en trabajos continuos.", "en": "Its digital display and programmable system provide precise, repeatable setup for continuous jobs." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencia duradera", "en": "Durable heating element" },
        "description": { "es": "Dise├▒ada para una larga vida ├║til y estabilidad t├®rmica en producciones exigentes.", "en": "Designed for long service life and thermal stability in demanding production runs." },
        "icon": "Gauge"
      },
      {
        "title": { "es": "Resistencias para gorras (9 x 15.5 cm)", "en": "Cap elements (9 x 15.5 cm)" },
        "description": { "es": "Personaliza gorras con facilidad y precisi├│n utilizando las resistencias para crear dise├▒os ├║nicos y originales.", "en": "Personalize caps with ease and precision using dedicated elements for unique designs." },
        "icon": "Target"
      },
      {
        "title": { "es": "Resistencias para platos (12.6 cm y 15.2 cm)", "en": "Plate elements (12.6 cm and 15.2 cm)" },
        "description": { "es": "Transforma platos comunes en piezas de arte para que cada comida sea un momento memorable.", "en": "Transform regular plates into art pieces so every meal becomes memorable." },
        "icon": "Disc"
      },
      {
        "title": { "es": "Resistencias para vasos (6 oz, 9 oz, 12 oz y 15 oz)", "en": "Mug elements (6 oz, 9 oz, 12 oz, and 15 oz)" },
        "description": { "es": "Agrega un toque personal a tus bebidas para que cada sorbo sea especial y ├║nico.", "en": "Add a personal touch to your drinkware so every sip feels special and unique." },
        "icon": "CupSoda"
      }
    ],
    "hotspots": [
      {
        "x": 51, "y": 3,
        "title": { "es": "Asa de transporte", "en": "Carrying handle" },
        "description": { "es": "Asa integrada en la estructura superior que facilita el transporte y reposicionamiento de la m├íquina en el taller sin esfuerzo adicional.", "en": "Integrated handle on the upper frame for easy transport and repositioning of the machine in the workshop." }
      },
      {
        "x": 70, "y": 30,
        "title": { "es": "Controlador digital GY-04", "en": "GY-04 Digital Controller" },
        "description": { "es": "Panel digital con temporizador 0-999 seg., rango de temperatura 0-225┬░C y precisi├│n ┬▒0,5%. Permite programar y repetir configuraciones con exactitud para trabajos en serie.", "en": "Digital panel with 0-999 sec. timer, 0-225┬░C temperature range and ┬▒0.5% accuracy. Program and repeat settings precisely for batch jobs." }
      },
      {
        "x": 77, "y": 32,
        "title": { "es": "Bot├│n ON/OFF", "en": "ON/OFF button" },
        "description": { "es": "Interruptor principal de encendido y apagado con acceso directo y ergon├│mico. Corta completamente la alimentaci├│n de la m├íquina para un uso seguro.", "en": "Main power on/off switch with direct ergonomic access. Fully cuts the machine's power supply for safe operation." }
      },
      {
        "x": 31, "y": 34,
        "title": { "es": "Sistema de apertura giratoria", "en": "Rotary opening system" },
        "description": { "es": "Mecanismo de apertura giratoria manual que desplaza la platina superior hacia un lado, dejando la superficie de trabajo completamente libre para colocar y retirar objetos con comodidad.", "en": "Manual rotary opening mechanism that swings the upper platen to the side, leaving the work surface completely free for comfortable object placement and removal." }
      },
      {
        "x": 31, "y": 70,
        "title": { "es": "Base y estructura robusta", "en": "Robust base and frame" },
        "description": { "es": "Estructura de acero resistente que garantiza estabilidad durante el prensado. El dise├▒o compacto la hace ideal para talleres con espacio reducido sin renunciar a la potencia de 1.800 W.", "en": "Resistant steel frame ensures stability during pressing. The compact design makes it ideal for small workshops without sacrificing 1,800 W of power." }
      }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Esparta prensa t├®rmica neum├ítica",
      "en": "Esparta pneumatic heat press",
      "pt": "Esparta prensa t├®rmica pneum├ítica",
      "it": "Esparta pressa termica pneumatica"
    },
    "description": {
      "es": "Con tu nueva prensa t├®rmica neum├ítica Beinsen Esparta no podr├ís parar de personalizar. Porque este nuevo modelo incorpora un mont├│n de novedades que la hacen m├ís c├│moda, m├ís sencilla, m├ís precisa e incluso m├ís bonita. Podr├ís tener en tus manos el modelo m├ís c├│modo y avanzado que hemos lanzado hasta la fecha. Y todo esto aumentando a├║n m├ís tu producci├│n para hacerla tambi├®n m├ís rentable.",
      "en": "New level of comfort without losing efficiency. Advanced touch control and memory for your best settings.",
      "pt": "Novo n├¡vel de conforto sem perder efici├¬ncia.",
      "it": "Nuovo livello di comfort senza perdere efficienza."
    },
    "image": "/products/maquinas/esparta-prensa-termica-neumatica/01.jpg",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Controlador t├íctil intuitivo",
        "Memoria para 3 perfiles de configuraci├│n",
        "Funcionamiento neum├ítico suave",
        "Dise├▒o optimizado para colocaci├│n de prendas"
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
    "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Neum├ítica", "en": "Pneumatic", "pt": "Pneum├ítica", "it": "Pneumatica" },
    "gallery": [
      "https://beinsen.com/wp-content/uploads/2025/02/esparta-002-1.jpg"
    ],
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Neum├ítica" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Grosor m├íximo del personalizable", "en": "Max Customizable Thickness" }, "value": "40mm." },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-13" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ô" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "3" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ù" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "90Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "125Kg." },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "115├ù86.5x58cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Ô£ù" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "Ô£ù" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "Cubierta anti quemaduras" }
    ],
    "benefits": [
      {
        "title": { "es": "Neum├ítica", "en": "Pneumatic" },
        "description": { "es": "El sistema neum├ítico aporta presi├│n uniforme y constante para personalizaciones m├ís precisas y c├│modas en tiradas continuas.", "en": "The pneumatic system provides uniform, constant pressure for more precise and comfortable continuous personalization." },
        "icon": "Wind",
        "image": "/products/maquinas/esparta-prensa-termica-neumatica/05.jpg"
      },
      {
        "title": { "es": "Bandeja extra├¡ble", "en": "Pull-out tray" },
        "description": { "es": "Facilita la colocaci├│n de prendas y mejora el flujo de trabajo para una operaci├│n m├ís r├ípida y segura.", "en": "Makes garment placement easier and improves workflow for faster, safer operation." },
        "icon": "PanelBottom",
        "image": "/products/maquinas/esparta-prensa-termica-neumatica/08.png"
      },
      {
        "title": { "es": "Pantalla t├íctil", "en": "Touch display" },
        "description": { "es": "Todo controlado: configura temperatura y temporizadores de forma intuitiva con su nuevo controlador digital.", "en": "Keep everything under control by setting temperature and timers intuitively with the new digital controller." },
        "icon": "MousePointer2",
        "image": "/products/maquinas/esparta-prensa-termica-neumatica/07.png"
      },
      {
        "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" },
        "description": { "es": "Incluye sistema de intercambio r├ípido del plato inferior para adaptarse al ritmo de tu producci├│n y reducir tiempos de inactividad.", "en": "Includes a quick-change lower plate system to match production needs and reduce downtime." },
        "icon": "Layers",
        "image": "/products/maquinas/esparta-prensa-termica-neumatica/04.png"
      },
      {
        "title": { "es": "Cubierta antiquemaduras", "en": "Anti-burn cover" },
        "description": { "es": "Incorpora una cubierta de seguridad anti quemaduras para un trabajo m├ís protegido durante jornadas intensivas.", "en": "Includes an anti-burn safety cover for safer operation during intensive workdays." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Comodidad ante todo", "en": "Comfort first" },
        "description": { "es": "Desde la experiencia adquirida con nuestro anterior modelo, hemos avanzado hasta lograr un nuevo nivel de confort sin perder un ├ípice de eficiencia.", "en": "Based on experience from the previous model, this version reaches a new comfort level without sacrificing efficiency." },
        "icon": "Sofa"
      },
      {
        "title": { "es": "Controlador digital GY-08", "en": "GY-08 digital controller" },
        "description": { "es": "El nuevo controlador digital te lo pone f├ícil: configura temperatura y tiempos para tener todo bajo control.", "en": "The new digital controller makes it easy to configure temperature and timing and keep everything under control." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Que el ritmo no pare", "en": "Keep the pace going" },
        "description": { "es": "Tu Beinsen Esparta incorpora intercambio r├ípido del plato inferior para cambiar tan r├ípido como lo exija tu producci├│n, mejorando productividad, confort y resultados.", "en": "Your Beinsen Esparta includes quick-change lower plate support so you can switch as fast as production demands, improving productivity and comfort." },
        "icon": "Zap"
      }
    ],
    "hotspots": [
      { "x": 33.2, "y": 18.7, "title": { "es": "Controlador digital GY-08", "en": "GY-08 digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 24.2, "y": 52.6, "title": { "es": "Cubierta anti quemaduras", "en": "Anti-burn cover" }, "description": { "es": "", "en": "" } },
      { "x": 22.5, "y": 55.4, "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" }, "description": { "es": "", "en": "" } },
      { "x": 38.6, "y": 67.6, "title": { "es": "Amplio espacio para colocar las prendas", "en": "Wide garment placement area" }, "description": { "es": "", "en": "" } },
      { "x": 25.7, "y": 78.1, "title": { "es": "Bandeja extra├¡ble con rueda", "en": "Pull-out tray with wheel" }, "description": { "es": "", "en": "" } }
    ],
    
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Barein Plancha T├®rmica",
      "en": "Barein Heat Press",
      "pt": "Barein Prensa T├®rmica",
      "it": "Barein Pressa Termica"
    },
    "description": {
      "es": "┬íPersonaliza tus tazas con la plancha t├®rmica Barein! Con resistencias intercambiables para tazas de 6-9oz y controlador digital preciso, obt├®n resultados incre├¡bles en solo 5 minutos.",
      "en": "Check our previous mug and plate press models.",
      "pt": "Consulte os nossos modelos anteriores.",
      "it": "Consulta i nostri modelli precedenti."
    },
    "image": "/products/maquinas/barein-plancha-termica/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Modelos hist├│ricos de alta durabilidad",
        "Informaci├│n t├®cnica de referencia",
        "Gu├¡as de personalizaci├│n cl├ísicas"
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
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Modelo Barein" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tipo para tazas" },
      { "label": { "es": "Compresor", "en": "Compressor" }, "value": "No incluido" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Manual" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Cambiable" },
      { "label": { "es": "Tama├▒o de resistencia", "en": "Heating Element Size" }, "value": "11oz" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "300W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "13 Kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "30 x 31 x 26 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-04" },
      { "label": { "es": "Precisi├│n del controlador", "en": "Controller Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0┬║-225┬║" }
    ],
    "benefits": [
      {
        "title": { "es": "┬┐Quieres personalizar tus tazas de forma f├ícil y r├ípida?", "en": "Customize mugs quickly and easily" },
        "description": { "es": "La plancha t├®rmica Barein es la herramienta que necesitas. Con su resistencia intercambiable para tazas de 11oz y controlador digital GY-10, podr├ís ajustar la temperatura y el tiempo de forma precisa para cada trabajo.", "en": "Barein is the tool you need. With its interchangeable 11oz mug element and GY-10 digital controller, you can set temperature and time precisely for each job." },
        "icon": "CupSoda",
        "image": "/products/maquinas/barein-plancha-termica/04.png"
      },
      {
        "title": { "es": "Haz tu vida m├ís sencilla", "en": "Make life easier" },
        "description": { "es": "Podr├ís cambiar la resistencia a mano sin necesidad de herramientas adicionales, y su estructura soldada de acero s├│lido garantiza una larga durabilidad.", "en": "You can swap the heating element by hand without extra tools, and its welded solid steel structure ensures long durability." },
        "icon": "Wrench",
        "image": "/products/maquinas/barein-plancha-termica/06.png"
      },
      {
        "title": { "es": "Todo al alcance de tu mano", "en": "Everything at your fingertips" },
        "description": { "es": "Podr├ís realizar todos los m├®todos comunes de transferencia en caliente, como flock, flex y sublimaci├│n. Solo necesitar├ís esperar 5 minutos para que est├® lista y empezar a trabajar.", "en": "You can perform common heat transfer methods such as flock, flex, and sublimation. Wait 5 minutes and start working." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Modo eco y precalentamiento", "en": "Eco mode and preheating" },
        "description": { "es": "Incluye modo eco y funci├│n de precalentamiento para optimizar el uso energ├®tico y agilizar cada ciclo de trabajo.", "en": "Includes eco mode and preheating to optimize energy use and speed up each production cycle." },
        "icon": "Leaf"
      },
      {
        "title": { "es": "Pantalla digital y programable", "en": "Digital and programmable display" },
        "description": { "es": "Su pantalla digital y programaci├│n facilitan ajustar par├ímetros y repetir configuraciones de forma c├│moda.", "en": "Its digital display and programmable controls make parameter setup and repeat jobs easier." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencia duradera", "en": "Durable heating element" },
        "description": { "es": "Dise├▒ada para mantener rendimiento constante durante jornadas largas de producci├│n.", "en": "Built to maintain consistent performance through long production sessions." },
        "icon": "Gauge"
      },
      {
        "title": { "es": "Alarma sonora", "en": "Sound alarm" },
        "description": { "es": "Olv├¡date de abrir tarde la plancha: la alarma sonora te avisa al finalizar el ciclo.", "en": "Forget delayed openings: the sound alarm notifies you at the end of each cycle." },
        "icon": "Bell"
      },
      {
        "title": { "es": "Bajo consumo de energ├¡a", "en": "Low energy consumption" },
        "description": { "es": "Su dise├▒o simple y eficiente evita consumos energ├®ticos excesivos.", "en": "Its simple, efficient design avoids excessive energy consumption." },
        "icon": "BatteryCharging"
      },
      {
        "title": { "es": "Estructura s├│lida", "en": "Solid structure" },
        "description": { "es": "Desde la base hasta el mango, est├í pensada para resistir largas horas de trabajo en cadena sin desgastes prematuros.", "en": "From base to handle, it is designed to withstand long production runs without premature wear." },
        "icon": "ShieldCheck"
      }
    ],
    "hotspots": [
      {
        "x": 46.1,
        "y": 4.6,
        "title": { "es": "Asa", "en": "Handle" },
        "description": { "es": "Empu├▒adura principal para apertura y cierre manual de la plancha.", "en": "Main grip used for manual opening and closing of the press." }
      },
      {
        "x": 37.9,
        "y": 23.9,
        "title": { "es": "Ajuste de presi├│n", "en": "Pressure adjustment" },
        "description": { "es": "Perilla para ajustar la presi├│n de trabajo seg├║n el tipo de taza y transfer.", "en": "Knob used to adjust working pressure based on mug type and transfer." }
      },
      {
        "x": 34,
        "y": 51.9,
        "title": { "es": "Resistencia", "en": "Heating element" },
        "description": { "es": "Zona calefactora para transferencia t├®rmica sobre tazas.", "en": "Heating zone used for thermal transfer on mugs." }
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
        "title": { "es": "Bot├│n ON / OFF", "en": "ON / OFF button" },
        "description": { "es": "Interruptor principal de encendido y apagado del equipo.", "en": "Main power switch for turning the machine on and off." }
      }
    ],
    "storyHeadline": { "es": "Potencia Industrial", "en": "Redefining the workflow" },
    "storySegments": [
      {
        "title": { "es": "M├íxima durabilidad", "en": "Professional performance" },
        "description": {
          "es": "Barein ha sido construida para soportar largas jornadas de trabajo sin comprometer la calidad.",
          "en": "Barein is designed to deliver consistent results and high productivity."
        },
        "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/r1fMuXcRomk?si=sNKbdTDInM_4FfSY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
      }
    ],
    
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Imagina poder crear tus propias tazas personalizadas con resultados profesionales, ┬┐no ser├¡a genial? Con la plancha t├®rmica Maine, eso es posible. Esta plancha es perfecta para aquellos que buscan una soluci├│n eficiente y pr├íctica para personalizar tazas.",
      "en": "Mug heat press focused on agile personalization and consistent results.",
      "pt": "Prensa t├®rmica para canecas focada em personaliza├º├úo ├ígil e resultados consistentes.",
      "it": "Pressa termica per tazze orientata a personalizzazione agile e risultati consistenti."
    },
    "image": "/products/maquinas/maine-plancha-para-tazas/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Compacta y f├ícil de configurar",
        "Control preciso de tiempo y temperatura",
        "Ideal para producci├│n de tazas personalizada"
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

"storyHeadline": { "es": "Innovaci├│n T├®rmica", "en": "Redefining the workflow" },
    "storySegments": [
      {
        "title": { "es": "Calor uniforme", "en": "Professional performance" },
        "description": {
          "es": "Barein asegura una distribuci├│n de temperatura perfecta para transferencias sin fallos.",
          "en": "Barein is designed to deliver consistent results and high productivity."
        },
        "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/r1fMuXcRomk?si=sNKbdTDInM_4FfSY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
      }
    ],
    
        "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Para tazas" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "NTTH-2000" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "Ô£ù" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Resistencias incluidas", "en": "Included Elements" }, "value": "6 (chupito, taza mini, 6-10oz, 11-15oz, 12oz c├│nica, 17oz c├│nica)" },
      { "label": { "es": "Resistencias opcionales", "en": "Optional Elements" }, "value": "Resistencia de 20-30oz para tumblers y botellas" },
      { "label": { "es": "Resistencias intercambiables", "en": "Interchangeable Elements" }, "value": "Ô£ô" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "130W-260W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "220 Ôäâ (437 Ôäë)" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "14Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "16,6Kg." },
      { "label": { "es": "Tama├▒o de la m├íquina", "en": "Machine Size" }, "value": "43x41x32cm" },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "59x52x36cm." },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Ô£ù" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "Ô£ù" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "Cubierta anti quemaduras" }
    ],
    "benefits": [
      {
        "title": { "es": "Control manual", "en": "Manual control" },
        "description": { "es": "Gestiona cada ciclo de personalizaci├│n con precisi├│n y control total en una operaci├│n manual confiable.", "en": "Manage each personalization cycle with precision and full control through reliable manual operation." },
        "icon": "Settings",
        "image": "/products/maquinas/maine-plancha-para-tazas/05.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Doble controlador", "en": "Dual controller" },
        "description": { "es": "La plancha transfer Beinsen Maine incorpora un doble controlador digital para que tengas el mayor control a la hora de personalizar. Gracias a este sistema puedes multiplicar por 2 la producci├│n o utilizar solo la parte que necesites, ahorrando tiempo y dinero.", "en": "Beinsen Maine includes dual digital control so you can maximize precision. This system lets you double production or run only the side you need to save time and cost." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencias intercambiables", "en": "Interchangeable elements" },
        "description": { "es": "Cambia resistencias de forma r├ípida para adaptarte a distintos formatos de taza y vaso seg├║n tus pedidos.", "en": "Swap elements quickly to adapt to different mug and cup formats based on your orders." },
        "icon": "Layers",
        "image": "/products/maquinas/maine-plancha-para-tazas/06.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Un universo de posibilidades", "en": "A universe of possibilities" },
        "description": { "es": "Sus 6 resistencias incluidas te permitir├ín personalizar todo tipo de tazas y vasos, desde peque├▒os vasos de chupito hasta tazas grandes. Y con la resistencia opcional de 20 a 30oz podr├ís a├▒adir termos y botellas a tu portfolio.", "en": "Its 6 included elements let you customize all kinds of mugs and cups, from shot glasses to larger mugs. With the optional 20-30oz element, you can also add tumblers and bottles to your portfolio." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Nada escapa a tu control", "en": "Nothing escapes your control" },
        "description": { "es": "Configura temperatura y tiempo con total precisi├│n para mantener resultados consistentes y profesionales en cada lote.", "en": "Set temperature and time with full precision to keep consistent, professional results in every batch." },
        "icon": "Target"
      }
    ],
    "hotspots": [
      { "x": 56.0, "y": 32.1, "title": { "es": "Dise├▒o ergon├│mico", "en": "Ergonomic design" }, "description": { "es": "", "en": "" } },
      { "x": 48.3, "y": 42.4, "title": { "es": "Regulaci├│n sencilla", "en": "Easy adjustment" }, "description": { "es": "", "en": "" } },
      { "x": 57.3, "y": 47.4, "title": { "es": "Intercambio f├ícil de resistencia", "en": "Easy element swap" }, "description": { "es": "", "en": "" } },
      { "x": 29.0, "y": 51.2, "title": { "es": "Doble controlador digital", "en": "Dual digital controller" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "La plancha t├®rmica para la personalizaci├│n de tazas puede ser un trabajo laborioso y limitado en cantidad si se usa el m├®todo manual. Pero con la plancha t├®rmica Aruba, todo eso se convierte en cosa del pasado. ┬íPersonaliza dos tazas a la vez de diferentes formas y capacidades!",
      "en": "Mug heat press designed for workshops needing speed and stability.",
      "pt": "Prensa t├®rmica para canecas pensada para oficinas que exigem velocidade e estabilidade.",
      "it": "Pressa termica per tazze pensata per laboratori che richiedono velocit├á e stabilit├á."
    },
    "image": "/products/maquinas/aruba-plancha-para-tazas/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Construcci├│n robusta para uso continuo",
        "Ajuste r├ípido de par├ímetros",
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
      { "id": "resistencia-tazas-11oz-a" },
      { "id": "cinta-termica-10mm" }
    ],


        "category": { "es": "Tazas y Botellas", "en": "Mugs & Bottles", "pt": "Canecas e Garrafas", "it": "Tazze e Bottiglie" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Modelo", "en": "Model" }, "value": "Aruba" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tipo manual" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Manual" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Cambiable" },
      { "label": { "es": "Tama├▒o de resistencia", "en": "Heating Element Size" }, "value": "6 a 10 oz, 11oz a 15oz, 12oz y 17oz" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "300W x 2" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "13 Kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "55 x 51 x 27 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-04" },
      { "label": { "es": "Precisi├│n del controlador", "en": "Controller Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0┬║-225┬║" }
    ],
    "benefits": [
      {
        "title": { "es": "No dudes, y sublima", "en": "Do not hesitate, sublimate" },
        "description": { "es": "Cuenta con resistencias para tazas cil├¡ndricas de 6 a 10 oz y 11 a 15 oz, y c├│nicas de 12 oz y 17 oz. Adem├ís, podr├ís utilizar m├®todos comunes de transferencia en caliente como flock, flex y sublimaci├│n.", "en": "It includes elements for 6-10 oz and 11-15 oz cylindrical mugs, plus 12 oz and 17 oz conical mugs, and supports common transfer methods like flock, flex, and sublimation." },
        "icon": "Zap"
      },
      {
        "title": { "es": "La cantidad es importante", "en": "Quantity matters" },
        "description": { "es": "Con 2 estaciones de trabajo independientes, podr├ís ajustar la plancha al tama├▒o y forma de cada taza y sublimar una taza y un termo a la vez sin preocupaciones.", "en": "With 2 independent workstations, you can adjust to each size and shape and sublimate a mug and a tumbler at the same time." },
        "icon": "Layers",
        "image": "/products/maquinas/aruba-plancha-para-tazas/05.png"
      },
      {
        "title": { "es": "La calidad es imprescindible", "en": "Quality is essential" },
        "description": { "es": "No solo aumentar├í la cantidad de tazas personalizadas que puedas hacer, tambi├®n elevar├í la calidad de tus dise├▒os sublimados gracias a sus altos est├índares de construcci├│n.", "en": "It not only increases output but also improves sublimation quality thanks to high construction standards." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Resistencia duradera y programable", "en": "Durable and programmable heating" },
        "description": { "es": "Integra resistencia duradera, pantalla digital y funciones programables para mantener estabilidad y repetibilidad durante toda la producci├│n.", "en": "It combines durable heating, digital display, and programmable functions for stable, repeatable production." },
        "icon": "Gauge"
      },
      {
        "title": { "es": "Controlador digital avanzado", "en": "Advanced digital controller" },
        "description": { "es": "Podr├ís ajustar la temperatura y el tiempo de manera precisa para que nada salga mal en el proceso de sublimaci├│n.", "en": "You can adjust temperature and time precisely to keep sublimation workflows under control." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Presi├│n precisa", "en": "Precise pressure" },
        "description": { "es": "Incluye 4 perillas para ajustar presi├│n y generar un cierre compacto en cada trabajo, preservando la calidad final.", "en": "It includes 4 pressure knobs to create a compact closure in every job and preserve final quality." },
        "icon": "Target"
      },
      {
        "title": { "es": "F├ícil de usar", "en": "Easy to use" },
        "description": { "es": "Es f├ícil de operar incluso para quienes no tienen experiencia previa en personalizaci├│n de tazas.", "en": "It is easy to operate even for users without previous mug personalization experience." },
        "icon": "Settings"
      }
    ],
    "storyHeadline": { "es": "Versatilidad Sin L├¡mites", "en": "Redefining the workflow" },
    "storySegments": [
      {
        "title": { "es": "Adaptable a todo", "en": "Professional performance" },
        "description": {
          "es": "Aruba es la herramienta definitiva para quienes buscan diversificar su oferta de productos.",
          "en": "Aruba is designed to deliver consistent results and high productivity."
        },
        "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/iMqchcLuzXI?si=AW9EClCe08xL4s7h\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
      }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      { "x": 31.5, "y": 18.2, "title": { "es": "Sensor de activaci├│n",                  "en": "Activation sensor" },                    "description": { "es": "", "en": "" } },
      { "x": 52,   "y": 28.9, "title": { "es": "Pantalla digital",                      "en": "Digital display" },                      "description": { "es": "", "en": "" } },
      { "x": 28.8, "y": 39,   "title": { "es": "Resistencia",                           "en": "Heating element" },                      "description": { "es": "", "en": "" } },
      { "x": 61,   "y": 87.8, "title": { "es": "Tuercas para ajustar la presi├│n",       "en": "Pressure adjustment knobs" },             "description": { "es": "", "en": "" } }
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
      "es": "Con la plancha t├®rmica Sicilia podr├ís personalizar cualquier tipo de taza con facilidad. Sus 8 resistencias intercambiables cubren todos los formatos del mercado: desde chupitos de 1.5oz hasta termos de 20-30oz. Una sola m├íquina para todas tus tazas.",
      "en": "With the Sicilia heat press you can customize any type of mug with ease. Its 8 interchangeable elements cover every format on the market: from 1.5oz shot glasses to 20-30oz tumblers. One machine for all your mugs.",
      "pt": "Com a prensa t├®rmica Sicilia poder├ís personalizar qualquer tipo de caneca com facilidade. As suas 8 resist├¬ncias intercambi├íveis cobrem todos os formatos do mercado: desde copos de 1.5oz at├® termos de 20-30oz.",
      "it": "Con la pressa termica Sicilia potrai personalizzare qualsiasi tipo di tazza con facilit├á. I suoi 8 elementi intercambiabili coprono tutti i formati del mercato: dai bicchierini da 1.5oz ai tumbler da 20-30oz."
    },
    "image": "/products/maquinas/sicilia-plancha-para-tazas/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "8 resistencias intercambiables: 1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz c├│nica, 17oz c├│nica, 20-30oz",
        "4 perillas de ajuste de presi├│n para impresi├│n de alta calidad",
        "Controlador digital GY-04 con modo eco y precalentamiento"
      ],
      "en": [
        "8 interchangeable elements: 1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz conical, 17oz conical, 20-30oz",
        "4 pressure adjustment knobs for high-quality printing",
        "GY-04 digital controller with eco mode and preheating"
      ],
      "pt": [
        "8 resist├¬ncias intercambi├íveis: 1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz c├│nica, 17oz c├│nica, 20-30oz",
        "4 man├¡pulos de ajuste de press├úo para impress├úo de alta qualidade",
        "Controlador digital GY-04 com modo eco e pr├®-aquecimento"
      ],
      "it": [
        "8 elementi intercambiabili: 1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz conico, 17oz conico, 20-30oz",
        "4 manopole di regolazione pressione per stampa di alta qualit├á",
        "Controller digitale GY-04 con modalit├á eco e preriscaldamento"
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
      { "label": { "es": "Resistencias incluidas", "en": "Included Elements" }, "value": "8 (1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz c├│nica, 17oz c├│nica, 20-30oz)" },
      { "label": { "es": "Resistencias intercambiables", "en": "Interchangeable Elements" }, "value": "Ô£ô" },
      { "label": { "es": "Ajuste de presi├│n", "en": "Pressure Adjustment" }, "value": "4 perillas manuales" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-04" },
      { "label": { "es": "Precisi├│n del controlador", "en": "Controller Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 seg." },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225 Ôäâ" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "0.6 kW" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "16 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "51 x 50 x 37 cm" }
    ],
    "benefits": [
      {
        "title": { "es": "No habr├í taza, termo o botella que se te resista", "en": "No mug, tumbler, or bottle can resist it" },
        "description": { "es": "Con sus 8 resistencias intercambiables, Sicilia cubre todos los formatos del mercado: chupitos, tazas mini, cil├¡ndricas de varios tama├▒os, c├│nicas y termos grandes. Sin excepciones.", "en": "With 8 interchangeable elements, Sicilia covers every market format: shot glasses, mini mugs, various cylindrical sizes, conical mugs, and large tumblers. No exceptions." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Cambio de resistencias sin herramientas", "en": "Element swap without tools" },
        "description": { "es": "Su dise├▒o ergon├│mico permite cambiar las resistencias a mano en segundos, sin necesidad de destornilladores ni herramientas adicionales. M├ís tiempo produciendo, menos tiempo configurando.", "en": "Its ergonomic design lets you swap elements by hand in seconds, without screwdrivers or extra tools. More time producing, less time setting up." },
        "icon": "Wrench"
      },
      {
        "title": { "es": "Versatilidad total: de 1.5oz a 20-30oz", "en": "Total versatility: from 1.5oz to 20-30oz" },
        "description": { "es": "Desde chupitos de 1.5oz hasta termos y botellas de 20-30oz, pasando por tazas cil├¡ndricas de 6-9oz y 11-15oz, y c├│nicas de 12oz y 17oz. Una sola m├íquina para todo tu cat├ílogo.", "en": "From 1.5oz shot glasses to 20-30oz tumblers and bottles, plus 6-9oz and 11-15oz cylindrical mugs and 12oz and 17oz conical. One machine for your entire catalog." },
        "icon": "Ruler"
      },
      {
        "title": { "es": "4 perillas de ajuste de presi├│n", "en": "4 pressure adjustment knobs" },
        "description": { "es": "Las cuatro perillas de ajuste permiten regular la presi├│n con precisi├│n para cada formato, garantizando una impresi├│n de alta calidad independientemente del tama├▒o o forma de la taza.", "en": "Four adjustment knobs allow precise pressure control for each format, guaranteeing high-quality printing regardless of mug size or shape." },
        "icon": "Target"
      },
      {
        "title": { "es": "Controlador digital GY-04", "en": "GY-04 digital controller" },
        "description": { "es": "Programa temperatura y tiempo con precisi├│n milim├®trica. Incluye modo eco para ahorro energ├®tico y precalentamiento para reducir el tiempo de espera al inicio de la jornada.", "en": "Program temperature and time with precision. Includes eco mode for energy savings and preheating to reduce warm-up time at the start of the day." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencia duradera y programable", "en": "Durable and programmable element" },
        "description": { "es": "Las resistencias de Sicilia est├ín dise├▒adas para mantener un rendimiento constante durante largas jornadas de producci├│n. Su pantalla digital facilita repetir configuraciones de forma consistente.", "en": "Sicilia's elements are designed to maintain consistent performance through long production sessions. The digital display makes it easy to repeat settings consistently." },
        "icon": "Gauge"
      },
      {
        "title": { "es": "La aliada perfecta para el negocio de tazas", "en": "The perfect ally for the mug business" },
        "description": { "es": "Sicilia es la soluci├│n definitiva para quien quiere ofrecer el cat├ílogo m├ís amplio de tazas personalizadas. Compacta, potente y vers├ítil: todo lo que necesitas en una sola m├íquina.", "en": "Sicilia is the definitive solution for anyone wanting to offer the widest catalog of personalized mugs. Compact, powerful, and versatile: everything you need in one machine." },
        "icon": "ShieldCheck"
      }
    ],
    "hotspots": [
      {
        "x": 65.2, "y": 8.6,
        "title": { "es": "Asa de transporte", "en": "Carrying handle" },
        "description": { "es": "Asa integrada en la parte superior que facilita el transporte y reposicionamiento de la m├íquina en el taller sin esfuerzo adicional.", "en": "Integrated handle on the top that makes transporting and repositioning the machine in the workshop effortless." }
      },
      {
        "x": 57.8, "y": 49.8,
        "title": { "es": "Resistencia intercambiable (8 formatos)", "en": "Interchangeable element (8 formats)" },
        "description": { "es": "Sistema de 8 resistencias intercambiables sin herramientas: 1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz c├│nica, 17oz c├│nica y 20-30oz. Cubre todos los formatos del mercado con una sola m├íquina.", "en": "System of 8 tool-free interchangeable elements: 1.5oz, 2.5oz, 6-9oz, 11-15oz, 12oz conical, 17oz conical and 20-30oz. Covers every market format with a single machine." }
      },
      {
        "x": 27.2, "y": 56.8,
        "title": { "es": "Controlador digital GY-04", "en": "GY-04 Digital Controller" },
        "description": { "es": "Panel digital con temporizador 0-999 seg., temperatura m├íxima 225┬░C, precisi├│n ┬▒0,5%, modo eco y precalentamiento. Programa y repite configuraciones con exactitud para trabajos en serie.", "en": "Digital panel with 0-999 sec. timer, 225┬░C maximum temperature, ┬▒0.5% accuracy, eco mode and preheating. Program and repeat settings precisely for batch jobs." }
      },
      {
        "x": 43.2, "y": 73.6,
        "title": { "es": "Bot├│n ON/OFF", "en": "ON/OFF button" },
        "description": { "es": "Interruptor principal de encendido y apagado que corta completamente la alimentaci├│n de la m├íquina. Acceso directo y ergon├│mico para un uso seguro.", "en": "Main power on/off switch that fully cuts the machine's power supply. Direct ergonomic access for safe operation." }
      }
    ],
    
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos cuando se deterioren.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Pocola plancha transfer manual peque├▒a",
      "en": "Pocola small manual heat press",
      "pt": "Pocola prensa manual pequena",
      "it": "Pocola pressa manuale piccola"
    },
    "description": {
      "es": "La plancha transfer compacta Beinsen Pocola con plato de 15 x 20 cm est├í dise├▒ada especialmente para trabajos de sublimaci├│n en formato peque├▒o. Perfecta para personalizar art├¡culos como bodies, camisetas infantiles, parches o detalles en prendas, combina tama├▒o reducido con alto rendimiento.",
      "en": "Simple, compact, and economical. 15 x 20 cm plate ideal for keychains and cases.",
      "pt": "Simples, compacta e econ├│mica.",
      "it": "Semplice, compatta ed economica."
    },
    "image": "/products/maquinas/pocola-plancha-transfer-manual-pequena/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Compacta", "en": "Compact", "pt": "Compacta", "it": "Compatta" },
    "features": {
      "es": [
        "Estructura compacta de grandes resultados",
        "Mando regulador de presi├│n mejorado",
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


        "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-04" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "Ô£ù" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "15x20cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ù" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "500W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "16,15Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "18Kg." },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "58x45x48cm" }
    ],
    "benefits": [
      {
        "title": { "es": "Ligera", "en": "Lightweight" },
        "description": { "es": "Dise├▒ada para ofrecer una experiencia de uso ├ígil y c├│moda en tareas de personalizaci├│n de peque├▒o formato.", "en": "Designed to provide an agile and comfortable experience for small-format personalization tasks." },
        "icon": "Feather"
      },
      {
        "title": { "es": "Controlador digital", "en": "Digital controller" },
        "description": { "es": "Controla tiempo y temperatura de forma sencilla con su display GY-04 para trabajar con precisi├│n en cada planchado.", "en": "Easily control time and temperature through its GY-04 display for precise results on every press." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" },
        "description": { "es": "Su sistema de platos intercambiables ampl├¡a tus posibilidades para personalizar diferentes tipos de art├¡culos con una sola m├íquina.", "en": "Its interchangeable plate system expands your options to customize different items with a single machine." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Contigo al fin del mundo", "en": "Built to go the distance" },
        "description": { "es": "Nos hemos desprendido de lo sup├®rfluo para conseguir una herramienta sencilla, compacta y econ├│mica pero capaz de dar grandes resultados. El vers├ítil plato plano de 15 x 20 cm te permite utilizarla para bodys, llaveros, fundas para m├│vil y casi todo lo que se te ocurra.", "en": "We removed the unnecessary to deliver a simple, compact, and affordable tool that still offers great results. Its versatile 15 x 20 cm flat plate lets you personalize bodysuits, keychains, phone cases, and almost anything you can imagine." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Precisa y robusta", "en": "Precise and robust" },
        "description": { "es": "La nueva prensa t├®rmica Beinsen Pocola te lo pone f├ícil durante todo el proceso de personalizaci├│n. Comienza regulando la presi├│n necesaria con su nuevo mando regulador mejorado, utiliza el controlador digital para seleccionar tiempo y temperatura y al acabar separa la placa calefactora de manera sencilla y elegante con el resorte de gas.", "en": "The new Beinsen Pocola simplifies your full personalization process. Start by setting pressure with its improved regulator, use the digital controller to select time and temperature, and finish by separating the heating plate smoothly with the gas spring." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Ampl├¡a tus horizontes", "en": "Expand your horizons" },
        "description": { "es": "Y si todo lo anterior no es suficiente para ti, solo tienes que a├▒adir a tu Beinsen Pocola el kit para gorras. Es facil├¡simo de quitar y poner y te permite personalizar estos art├¡culos tan demandados.", "en": "And if all of the above is not enough, just add the cap kit to your Beinsen Pocola. It is very easy to install and remove, and lets you personalize these highly demanded items." },
        "icon": "Target"
      }
    ],
    "hotspots": [
      { "x": 36.1, "y": 33.5, "title": { "es": "Regulador manual de presi├│n", "en": "Manual pressure regulator" }, "description": { "es": "", "en": "" } },
      { "x": 84.6, "y": 40.3, "title": { "es": "Resorte de gas", "en": "Gas spring" }, "description": { "es": "", "en": "" } },
      { "x": 58.9, "y": 40.6, "title": { "es": "Controlador digital GY-04", "en": "GY-04 digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 31.8, "y": 43.6, "title": { "es": "Placa calefactora de 15├ù20 cm", "en": "15├ù20 cm heating plate" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "pt": "Gante prensa manual para bon├®s",
      "it": "Gante pressa manuale per cappelli"
    },
    "description": {
      "es": "La plancha transfer compacta Beinsen Gante con plato para gorras est├í dise├▒ada especialmente para la iniciaci├│n en el mercado de las gorras personalizadas, o para peque├▒as producciones o eventos ocasionales.",
      "en": "The perfect tool to get started in cap personalization. Includes attachment support.",
      "pt": "A ferramenta perfeita para come├ºar a personalizar bon├®s.",
      "it": "Lo strumento perfetto per iniziare la personalizzazione dei cappelli."
    },
    "image": "/products/maquinas/gante-plancha-manual-gorras/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Compacta", "en": "Compact", "pt": "Compacta", "it": "Compatta" },
    "features": {
      "es": [
        "Plato especial para gorras incluido",
        "F├ícil control de tiempo y temperatura",
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


        "category": { "es": "Gorras", "en": "Caps", "pt": "Bon├®s", "it": "Cappelli" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-04" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "Ô£ù" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "Plato para gorras" },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ô" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "300W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "16,15Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "18Kg." },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "58x45x48cm" }
    ],
    "benefits": [
      {
        "title": { "es": "Ligera", "en": "Lightweight" },
        "description": { "es": "Su dise├▒o ligero facilita el trabajo diario y el transporte en producciones peque├▒as o eventos.", "en": "Its lightweight design makes daily operation and transport easier for small productions or events." },
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
        "description": { "es": "Gracias a sus platos intercambiables podr├ís adaptar la plancha a distintas aplicaciones seg├║n tus necesidades.", "en": "Its interchangeable plates let you adapt the press to different applications as needed." },
        "icon": "Layers",
        "image": "/products/maquinas/gante-plancha-manual-gorras/04.png"
      },
      {
        "title": { "es": "Contigo al fin del mundo", "en": "Built to go the distance" },
        "description": { "es": "Nos hemos desprendido de lo sup├®rfluo para conseguir una herramienta sencilla, compacta y econ├│mica pero capaz de dar grandes resultados. El plato especial para gorras, junto con el soporte para sujetarlas, te ofrece la herramienta perfecta para iniciarte en esto.", "en": "We removed everything unnecessary to create a simple, compact, and affordable tool that still delivers great results. The special cap plate, together with the cap holder, gives you the perfect setup to get started." },
        "icon": "Zap",
        "image": "/products/maquinas/gante-plancha-manual-gorras/03.png"
      },
      {
        "title": { "es": "Precisa y robusta", "en": "Precise and robust" },
        "description": { "es": "La nueva prensa t├®rmica Beinsen Gante te lo pone f├ícil durante todo el proceso de personalizaci├│n. Comienza regulando la presi├│n necesaria con su nuevo mando regulador mejorado, utiliza el controlador digital para seleccionar tiempo y temperatura y al acabar separa la placa calefactora de manera sencilla y elegante con el resorte de gas.", "en": "The new Beinsen Gante makes the full personalization process easier. Start by adjusting pressure with its improved regulator, use the digital controller to set time and temperature, and finish by separating the heating plate smoothly with the gas spring." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Ampl├¡a tus horizontes", "en": "Expand your horizons" },
        "description": { "es": "Y si todo lo anterior no es suficiente para ti, solo tienes que a├▒adir a tu Beinsen Gante el kit plano de 15 x 20. Es facil├¡simo de quitar y poner y su versatilidad te abrir├í un nuevo mundo de posibilidades.", "en": "And if all of the above is not enough, simply add the 15 x 20 flat kit to your Beinsen Gante. It is very easy to install and remove, and its versatility opens a new world of possibilities." },
        "icon": "Target"
      }
    ],
    "hotspots": [
      { "x": 42.2, "y": 34.3, "title": { "es": "Regulador manual de presi├│n", "en": "Manual pressure regulator" }, "description": { "es": "", "en": "" } },
      { "x": 73.9, "y": 43.5, "title": { "es": "Controlador digital GY04", "en": "GY04 digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 55.7, "y": 50.1, "title": { "es": "Resorte de gas", "en": "Gas spring" }, "description": { "es": "", "en": "" } },
      { "x": 33.6, "y": 53.2, "title": { "es": "Plato especial para gorras", "en": "Special cap plate" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Trinidad prensa t├®rmica autom├ítica",
      "en": "Trinidad automatic heat press",
      "pt": "Trinidad prensa t├®rmica autom├ítica",
      "it": "Trinidad pressa termica automatica"
    },
    "description": {
      "es": "Eleva tus proyectos a nuevos niveles de eficiencia con esta prensa de doble plato autom├ítica.",
      "en": "Elevate your projects to new levels of efficiency with this automatic double-plate press.",
      "pt": "Eleve os seus projetos com esta prensa autom├ítica de prato duplo.",
      "it": "Eleva i tuoi progetti con questa pressa automatica a doppio piatto."
    },
    "image": "/products/maquinas/trinidad-prensa-termica-automatica/01.png",
    "price": 5490,
    "size": { "es": "Industrial", "en": "Industrial", "pt": "Industrial", "it": "Industriale" },
    "features": {
      "es": [
        "Aumenta la producci├│n con su sistema autom├ítico de doble plato",
        "L├íseres integrados para un posicionamiento perfecto",
        "Modo manual disponible para dise├▒os complejos"
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
    "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Neum├ítica", "en": "Pneumatic", "pt": "Pneum├ítica", "it": "Pneumatica" },
    "gallery": [
      "https://beinsen.com/wp-content/uploads/2025/07/Sin-titulo-1000-x-1000-px-1.png",
      "https://beinsen.com/wp-content/uploads/2023/09/2.jpg"
    ],
    "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "benefits": [
      {
        "title": { "es": "Automatizaci├│n Industrial", "en": "Industrial Automation" },
        "description": { "es": "Sistema de desplazamiento el├®ctrico de doble plato que elimina la fatiga del operario y dobla la capacidad de producci├│n.", "en": "Electric double-plate displacement system that eliminates operator fatigue and doubles production capacity." },
        "icon": "Zap",
        "image": "/products/maquinas/trinidad-prensa-termica-automatica/05.png"
      },
      {
        "title": { "es": "Precisi├│n L├íser Ultra", "en": "Ultra Laser Precision" },
        "description": { "es": "Doble proyector l├íser en cruz ajustable para un posicionamiento milim├®trico de logos y dise├▒os en cada prenda.", "en": "Adjustable cross-laser dual projectors for millimeter-perfect positioning of logos and designs on every garment." },
        "icon": "Target",
        "image": "/products/maquinas/trinidad-prensa-termica-automatica/03.png"
      },
      {
        "title": { "es": "Control Inteligente PLC", "en": "Intelligent PLC Control" },
        "description": { "es": "Cerebro electr├│nico avanzado que gestiona presi├│n, tiempo y temperatura con una estabilidad inigualable.", "en": "Advanced electronic brain that manages pressure, time, and temperature with unmatched stability." },
        "icon": "Cpu",
        "image": "/products/maquinas/trinidad-prensa-termica-automatica/04.png"
      },
      {
        "title": { "es": "Seguridad de Vanguardia", "en": "Cutting-edge Safety" },
        "description": { "es": "Sensores de proximidad y botones de emergencia duales para garantizar la protecci├│n total del operario.", "en": "Proximity sensors and dual emergency buttons to ensure total operator protection." },
        "icon": "ShieldCheck",
        "image": "/products/maquinas/trinidad-prensa-termica-automatica/01.png"
      }
    ],
    "hotspots": [
      { "x": 26.9, "y": 8.9,  "title": { "es": "Pantalla t├íctil", "en": "Touch screen" }, "description": { "es": "", "en": "" } },
      { "x": 41.9, "y": 13.5, "title": { "es": "Bot├│n de desplazamiento horizontal", "en": "Horizontal displacement button" }, "description": { "es": "", "en": "" } },
      { "x": 24.7, "y": 14.2, "title": { "es": "L├íser de ayuda", "en": "Positioning laser" }, "description": { "es": "", "en": "" } },
      { "x": 52.8, "y": 14.9, "title": { "es": "Regulador de velocidad de bajada", "en": "Lowering speed regulator" }, "description": { "es": "", "en": "" } },
      { "x": 22.9, "y": 20.7, "title": { "es": "Controlador digital de desplazamiento", "en": "Digital displacement controller" }, "description": { "es": "", "en": "" } },
      { "x": 54.4, "y": 42.6, "title": { "es": "Platos intercambiables con sistema de cambio r├ípido", "en": "Quick-change interchangeable plates" }, "description": { "es": "", "en": "" } },
      { "x": 70.4, "y": 49.4, "title": { "es": "Amplio espacio de trabajo", "en": "Wide work area" }, "description": { "es": "", "en": "" } },
      { "x": 55.3, "y": 87.1, "title": { "es": "Mesa de trabajo con ruedas con freno", "en": "Work table with locking wheels" }, "description": { "es": "", "en": "" } }
    ],
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Neum├ítica, estaci├│n de trabajo" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Autom├ítico, manual" },
      { "label": { "es": "Grosor m├íximo del personalizable", "en": "Max Customizable Thickness" }, "value": "32mm." },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-13" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ô" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "3" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "2" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ù" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "180Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "301Kg." },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "102x115x150cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Mesa con 4 ruedas universales" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "2, uno a cada lado la unidad principal" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "Cierre de seguridad, sensor detector de manos integrado" }
    ],
    
    "storySegments": [
      {
        "title": { "es": "Doble productividad", "en": "Double Productivity" },
        "description": { "es": "El sistema de doble plato permite una carga continua. Mientras uno se plancha, preparas el siguiente sin pausas.", "en": "The double-plate system allows continuous loading. While one is pressing, you prepare the next without pauses." },
        "image": "/products/maquinas/trinidad-prensa-termica-automatica/01.png"
      },
      {
        "title": { "es": "Precisi├│n Milim├®trica", "en": "Millimeter Precision" },
        "description": { "es": "Nuestros proyectores l├íser aseguran que cada logotipo est├® exactamente donde debe estar, eliminando errores de producci├│n.", "en": "Our laser projectors ensure every logo is exactly where it should be, eliminating production errors." },
        "image": "/products/maquinas/trinidad-prensa-termica-automatica/01.png"
      },
      {
        "title": { "es": "Fuerza Industrial", "en": "Industrial Strength" },
        "description": { "es": "Construida para durar. Su estructura de acero reforzado y motorizaci├│n el├®ctrica garantizan d├®cadas de servicio sin problemas.", "en": "Built to last. Its reinforced steel structure and electric motorization guarantee decades of trouble-free service." },
        "image": "/products/maquinas/trinidad-prensa-termica-automatica/01.png"
      }
    ],
    "maintenanceTips": {
      "es": [
        "Limpiar el plato de calor semanalmente para evitar acumulaci├│n de residuos.",
        "Lubricar los ejes de desplazamiento cada 6 meses con grasa de silicona.",
        "Verificar la alineaci├│n de los l├íseres trimestralmente.",
        "Mantener el panel t├íctil alejado de la humedad directa."
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
      "es": "Miranda prensa t├®rmica autom├ítica el├®ctrica",
      "en": "Miranda electric automatic heat press",
      "pt": "Miranda prensa el├®trica autom├ítica",
      "it": "Miranda pressa automatica elettrica"
    },
    "description": {
      "es": "Tu nueva plancha t├®rmica autom├ítica el├®ctrica es todo lo que necesitas en una ├║nica estaci├│n de trabajo. Incorpora las ├║ltimas novedades del sector, dice adi├│s al compresor y lo hace todo sola. El futuro ya est├í aqu├¡.",
      "en": "Your new electric automatic heat press is everything you need in a single workstation. It incorporates the latest industry innovations, says goodbye to the compressor, and does everything on its own. The future is already here.",
      "pt": "A tua nova prensa t├®rmica autom├ítica el├®trica ├® tudo o que precisas numa ├║nica esta├º├úo de trabalho. Incorpora as ├║ltimas novidades do sector, dispensa o compressor e trabalha de forma totalmente aut├│noma.",
      "it": "La tua nuova pressa termica automatica elettrica ├¿ tutto ci├▓ di cui hai bisogno in un'unica stazione di lavoro. Incorpora le ultime novit├á del settore, elimina il compressore e lavora in modo completamente autonomo."
    },
    "image": "/products/maquinas/miranda-prensa-termica-automatica-electrica/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Estaci├│n de trabajo", "en": "Workstation", "pt": "Esta├º├úo de trabalho", "it": "Stazione di lavoro" },
    "features": {
      "es": [
        "100% el├®ctrica ÔÇö sin compresor, sin ruido",
        "Doble plato 40x50cm con cambio r├ípido y funcionamiento aut├│nomo",
        "Pantalla t├íctil GY-13 con 3 memorias y l├íseres de posicionamiento dobles"
      ],
      "en": [
        "100% electric ÔÇö no compressor, no noise",
        "Double 40x50cm plate with quick-change and autonomous operation",
        "GY-13 touch display with 3 memories and dual positioning lasers"
      ],
      "pt": [
        "100% el├®trica ÔÇö sem compressor, sem ru├¡do",
        "Duplo prato 40x50cm com troca r├ípida e funcionamento aut├│nomo",
        "Ecr├ú t├íctil GY-13 com 3 mem├│rias e dois lasers de posicionamento"
      ],
      "it": [
        "100% elettrica ÔÇö senza compressore, senza rumore",
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
    "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "El├®ctrica", "en": "Electric", "pt": "El├®trica", "it": "Elettrica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "El├®ctrica, estaci├│n de trabajo" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Autom├ítico, semiautom├ítico, manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-13" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ô" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "3" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "2" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "40 x 50 cm" },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ô (sistema cambio r├ípido)" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800 W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225 Ôäâ" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Mesa con 4 ruedas universales (incluida)" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "2 (uno junto a cada plato)" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "Cierre de seguridad + sensor detector de manos integrado" }
    ],
    "benefits": [
      {
        "title": { "es": "100% el├®ctrica: di adi├│s al compresor", "en": "100% electric: say goodbye to the compressor" },
        "description": { "es": "Miranda no necesita compresor de aire. Funciona completamente con electricidad, lo que significa menos ruido, menos mantenimiento y total libertad de instalaci├│n en cualquier espacio.", "en": "Miranda needs no air compressor. It runs entirely on electricity ÔÇö less noise, less maintenance, and total freedom to install it anywhere." },
        "icon": "Zap",
        "image": "/products/maquinas/miranda-prensa-termica-automatica-electrica/05.png"
      },
      {
        "title": { "es": "Funcionamiento totalmente aut├│nomo", "en": "Fully autonomous operation" },
        "description": { "es": "Miranda hace el trabajo duro sola. Se mueve de un plato a otro y completa el proceso de planchado sin intervenci├│n. T├║ solo colocas la siguiente prenda, con la ayuda de los l├íseres, y listo.", "en": "Miranda does the hard work on its own. It moves from one plate to the other and completes the pressing cycle without intervention. You just place the next garment ÔÇö the lasers help you do it perfectly." },
        "icon": "Bot",
        "image": "/products/maquinas/miranda-prensa-termica-automatica-electrica/04.jpg"
      },
      {
        "title": { "es": "Doble plato con cambio r├ípido: que el ritmo no pare", "en": "Double plate with quick-change: keep the pace going" },
        "description": { "es": "Mientras un plato se plancha, preparas el siguiente. El sistema de intercambio r├ípido te permite cambiar de plato inferior tan r├ípido como lo exija tu producci├│n, sin tiempo de inactividad.", "en": "While one plate is pressing, you prepare the next. The quick-change system lets you swap the lower plate as fast as your production demands, with no downtime." },
        "icon": "Layers",
        "image": "/products/maquinas/miranda-prensa-termica-automatica-electrica/05.png"
      },
      {
        "title": { "es": "L├íseres de posicionamiento de nueva generaci├│n", "en": "Next-generation positioning lasers" },
        "description": { "es": "Dos l├íseres en cruz, uno junto a cada plato, para un registro milim├®trico de cada dise├▒o. Olv├¡date de las impresiones fuera de lugar y trabaja con la precisi├│n de un experto.", "en": "Two cross lasers, one next to each plate, for millimeter-perfect registration of every design. Say goodbye to misaligned prints and work with expert-level precision." },
        "icon": "Target"
      },
      {
        "title": { "es": "Pantalla t├íctil GY-13 con 3 memorias", "en": "GY-13 touch display with 3 memories" },
        "description": { "es": "Configura tiempo y temperatura con un toque. Guarda hasta 3 perfiles de producci├│n en memoria para cambiar de trabajo en segundos. Sin botones, sin complicaciones.", "en": "Set time and temperature with a touch. Save up to 3 production profiles in memory to switch jobs in seconds. No buttons, no complications." },
        "icon": "MousePointer2"
      },
      {
        "title": { "es": "Mesa con ruedas incluida", "en": "Wheeled table included" },
        "description": { "es": "Miranda viene integrada en un mueble de gran calidad con 4 ruedas universales con freno. Trabaja c├│modamente y mueve la estaci├│n al lugar donde est├® la acci├│n.", "en": "Miranda comes integrated in a high-quality cabinet with 4 universal wheels with brakes. Work comfortably and move the workstation wherever the action is." },
        "icon": "Package"
      },
      {
        "title": { "es": "Seguridad total: cierre + sensor detector de manos", "en": "Total safety: lock + hand detection sensor" },
        "description": { "es": "La potencia sin control no sirve de nada. Miranda integra un cierre de seguridad y un sensor detector de manos para proteger al operario en todo momento durante el ciclo de producci├│n.", "en": "Power without control is worthless. Miranda integrates a security lock and a hand detection sensor to protect the operator at all times during the production cycle." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Modo manual y semiautom├ítico disponibles", "en": "Manual and semi-automatic modes available" },
        "description": { "es": "Para tus dise├▒os m├ís complejos, activa el modo manual o semiautom├ítico y trabaja con total precisi├│n. Miranda se adapta a tu ritmo y a la naturaleza de cada trabajo.", "en": "For your most complex designs, activate manual or semi-automatic mode and work with full precision. Miranda adapts to your pace and the nature of each job." },
        "icon": "Settings"
      }
    ],
    "hotspots": [
      {
        "x": 75.1, "y": 10.4,
        "title": { "es": "L├íser de posicionamiento", "en": "Positioning laser" },
        "description": { "es": "Dos l├íseres en cruz integrados para alinear dise├▒os con precisi├│n milim├®trica. Garantizan la colocaci├│n exacta de la prenda en cada ciclo sin necesidad de marcas f├¡sicas.", "en": "Two integrated cross lasers for millimeter-precise design alignment. Guarantee exact garment placement every cycle without physical marks." }
      },
      {
        "x": 26.5, "y": 18.3,
        "title": { "es": "Controlador t├íctil GY-13", "en": "GY-13 Touch Controller" },
        "description": { "es": "Control t├íctil con 3 memorias de producci├│n, ajuste de velocidad de transici├│n y modos autom├ítico, semiautom├ítico y manual.", "en": "Touch control with 3 production memories, transition speed adjustment, and automatic, semi-automatic and manual modes." }
      },
      {
        "x": 22.6, "y": 24.0,
        "title": { "es": "Bot├│n de desplazamiento", "en": "Scroll button" },
        "description": { "es": "Controla el movimiento horizontal de la prensa de un plato al otro para gestionar el ciclo de producci├│n de forma r├ípida y precisa.", "en": "Controls the horizontal movement of the press from one plate to the other to manage the production cycle quickly and precisely." }
      },
      {
        "x": 34.3, "y": 24.3,
        "title": { "es": "Bot├│n", "en": "Button" },
        "description": { "es": "Bot├│n de control integrado en el panel de operaci├│n para gestionar funciones de ciclo y seguridad durante la producci├│n.", "en": "Control button integrated in the operation panel for managing cycle and safety functions during production." }
      },
      {
        "x": 32.8, "y": 43.6,
        "title": { "es": "Platos intercambiables con cambio r├ípido", "en": "Interchangeable quick-change plates" },
        "description": { "es": "Dos platos de 40├ù50 cm con sistema de cambio r├ípido. Mientras uno plancha, preparas el siguiente para maximizar la productividad y reducir el tiempo de inactividad.", "en": "Two 40├ù50 cm plates with quick-change system. While one presses, you prepare the next to maximize productivity and reduce downtime." }
      },
      {
        "x": 67.6, "y": 47.5,
        "title": { "es": "Amplio espacio de trabajo", "en": "Large workspace" },
        "description": { "es": "Superficie de trabajo generosa que facilita la colocaci├│n y preparaci├│n de prendas con total comodidad, reduciendo la fatiga en jornadas largas de producci├│n continua.", "en": "Generous workspace that makes garment placement and preparation fully comfortable, reducing fatigue during long continuous production sessions." }
      },
      {
        "x": 47.6, "y": 52.9,
        "title": { "es": "Modo manual y semiautom├ítico", "en": "Manual and semi-automatic mode" },
        "description": { "es": "Selecciona el modo de operaci├│n seg├║n el trabajo: autom├ítico para producci├│n en serie, semiautom├ítico para mayor control o manual para trabajos que requieren atenci├│n especial.", "en": "Select the operating mode to suit the job: automatic for batch production, semi-automatic for greater control, or manual for jobs requiring special attention." }
      }
    ],
    "storySegments": [
      {
        "title": { "es": "Funcionamiento totalmente aut├│nomo", "en": "Fully autonomous operation" },
        "description": { "es": "Miranda hace el trabajo duro. Se mueve sola de plato en plato, plancha sin intervenci├│n y te deja libre para colocar la siguiente prenda. Con los l├íseres lo har├ís con precisi├│n absoluta.", "en": "Miranda does the hard work. It moves on its own from plate to plate, presses without intervention, and leaves you free to place the next garment. The lasers let you do it with absolute precision." },
        "image": "/products/maquinas/miranda-prensa-termica-automatica-electrica/01.png"
      },
      {
        "title": { "es": "Que el ritmo no pare", "en": "Keep the pace going" },
        "description": { "es": "El sistema de intercambio r├ípido de platos inferiores te permite cambiar de formato tan r├ípido como lo exige tu producci├│n. Reduce el tiempo de inactividad al m├¡nimo y maximiza la productividad.", "en": "The quick-change lower plate system lets you switch formats as fast as your production demands. Minimize downtime and maximize productivity." },
        "image": "/products/maquinas/miranda-prensa-termica-automatica-electrica/01.png"
      },
      {
        "title": { "es": "Todo controlado al mil├¡metro", "en": "Everything controlled to the millimeter" },
        "description": { "es": "La pantalla t├íctil GY-13 con 3 memorias y los dos l├íseres de posicionamiento garantizan que cada prenda salga perfecta. Y cuando el trabajo lo requiere, el modo manual te da control total.", "en": "The GY-13 touch display with 3 memories and the two positioning lasers ensure every garment comes out perfect. And when the job requires it, manual mode gives you total control." },
        "image": "/products/maquinas/miranda-prensa-termica-automatica-electrica/01.png"
      }
    ],
    
    "maintenanceTips": {
      "es": [
        "No apagues la m├íquina inmediatamente: la placa de calor est├í demasiado caliente, deja que enfr├¡e.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos cuando se deterioren.",
        "Verificaci├│n y ajuste de la presi├│n peri├│dicamente.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura con term├│metro externo.",
        "Revisi├│n de los sensores de seguridad y del detector de manos."
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
      "es": "Chicago Plancha T├®rmica Autom├ítica",
      "en": "Chicago Automatic Heat Press",
      "pt": "Chicago Prensa T├®rmica Autom├ítica",
      "it": "Chicago Pressa Termica Automatica"
    },
    "description": {
      "es": "Chicago es una plancha t├®rmica autom├ítica profesional con un tama├▒o id├│neo: compacta para que el espacio no sea un problema, con caracter├¡sticas premium que te ofrecen un aliado potente y preciso perfecto para usuarios exigentes que buscan resultados consistentes.",
      "en": "Chicago is a professional automatic heat press with an ideal size ÔÇö compact so space is never an issue, with premium features that make it a powerful and precise ally for demanding users seeking consistent results.",
      "pt": "Chicago ├® uma prensa t├®rmica autom├ítica profissional com tamanho ideal: compacta para que o espa├ºo n├úo seja um problema, com caracter├¡sticas premium que a tornam uma aliada poderosa e precisa.",
      "it": "Chicago ├¿ una pressa termica automatica professionale di dimensioni ideali: compatta per non avere problemi di spazio, con caratteristiche premium che la rendono un'alleata potente e precisa."
    },
    "image": "/products/maquinas/chicago-plancha-termica-automatica/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Compacta", "en": "Compact", "pt": "Compacta", "it": "Compatta" },
    "features": {
      "es": [
        "Apertura y cierre autom├ítico neum├ítico",
        "Placa fija de 40x50cm con grosor imprimible hasta 35mm",
        "Controlador digital GY-06 con modo eco y precalentamiento"
      ],
      "en": [
        "Pneumatic automatic opening and closing",
        "Fixed 40x50cm plate with up to 35mm printable thickness",
        "GY-06 digital controller with eco mode and preheating"
      ],
      "pt": [
        "Abertura e fecho autom├ítico pneum├ítico",
        "Placa fixa de 40x50cm com espessura imprim├¡vel at├® 35mm",
        "Controlador digital GY-06 com modo eco e pr├®-aquecimento"
      ],
      "it": [
        "Apertura e chiusura automatica pneumatica",
        "Piastra fissa 40x50cm con spessore stampabile fino a 35mm",
        "Controller digitale GY-06 con modalit├á eco e preriscaldamento"
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
    "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Autom├ítica", "en": "Automatic", "pt": "Autom├ítica", "it": "Automatica" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Chicago" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "El├®ctrico" },
      { "label": { "es": "├üngulo de apertura", "en": "Opening Angle" }, "value": "60┬░" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Fija" },
      { "label": { "es": "Tama├▒o de resistencia", "en": "Heating Element Size" }, "value": "40 x 50 cm" },
      { "label": { "es": "Grosor m├íximo imprimible", "en": "Max Printable Thickness" }, "value": "35 mm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-06" },
      { "label": { "es": "Precisi├│n del controlador", "en": "Controller Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-99 seg." },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225 Ôäâ" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220 V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.8 kW" },
      { "label": { "es": "Amperaje", "en": "Amperage" }, "value": "22 A" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "43 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "63 x 40 x 42 cm" }
    ],
    "benefits": [
      {
        "title": { "es": "Compacta sin renunciar a la potencia", "en": "Compact without sacrificing power" },
        "description": { "es": "Chicago combina un tama├▒o reducido con unas prestaciones de nivel profesional. Ideal para talleres donde el espacio es limitado pero la exigencia de calidad no lo es.", "en": "Chicago combines a compact footprint with professional-level performance. Ideal for workshops where space is limited but quality demands are not." },
        "icon": "Maximize",
        "image": "/products/maquinas/chicago-plancha-termica-automatica/02.png"
      },
      {
        "title": { "es": "Apertura y cierre autom├ítico", "en": "Automatic opening and closing" },
        "description": { "es": "Su sistema neum├ítico de apertura y cierre autom├ítico elimina errores de operador y mantiene una presi├│n perfectamente uniforme en cada ciclo.", "en": "Its pneumatic automatic opening and closing system eliminates operator errors and maintains perfectly uniform pressure every cycle." },
        "icon": "Zap",
        "image": "/products/maquinas/chicago-plancha-termica-automatica/03.png"
      },
      {
        "title": { "es": "Sublima materiales de hasta 35mm de grosor", "en": "Sublimate materials up to 35mm thick" },
        "description": { "es": "Gracias a su placa de gran recorrido, Chicago puede trabajar con pr├ícticamente cualquier material: camisetas, sudaderas, mochilas, art├¡culos r├¡gidos y mucho m├ís.", "en": "Thanks to its wide-travel plate, Chicago can handle virtually any material: t-shirts, hoodies, backpacks, rigid items, and much more." },
        "icon": "Layers",
        "image": "/products/maquinas/chicago-plancha-termica-automatica/05.png"
      },
      {
        "title": { "es": "Base deslizante para mayor comodidad", "en": "Sliding base for greater comfort" },
        "description": { "es": "La base deslizante permite cargar y descargar prendas sin esfuerzo y con total comodidad, reduciendo la fatiga durante las jornadas largas de producci├│n.", "en": "The sliding base allows you to load and unload garments effortlessly and comfortably, reducing fatigue during long production sessions." },
        "icon": "ArrowRight",
        "image": "/products/maquinas/chicago-plancha-termica-automatica/01.png"
      },
      {
        "title": { "es": "Ajuste autom├ítico de presi├│n", "en": "Automatic pressure adjustment" },
        "description": { "es": "Chicago regula la presi├│n de forma autom├ítica, evitando fallos por exceso o defecto y garantizando resultados perfectos en cada art├¡culo independientemente de su grosor.", "en": "Chicago adjusts pressure automatically, preventing failures from excess or insufficient pressure and guaranteeing perfect results on every item regardless of thickness." },
        "icon": "Target"
      },
      {
        "title": { "es": "Controlador GY-06 de ├║ltima generaci├│n", "en": "Next-generation GY-06 controller" },
        "description": { "es": "Gestiona toda la plancha desde el controlador GY-06: temperatura, tiempo, modo eco, precalentamiento y pantalla digital, todo en una interfaz f├ícil e intuitiva.", "en": "Manage the entire press from the GY-06 controller: temperature, time, eco mode, preheating, and digital display, all in an easy and intuitive interface." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Bot├│n de parada de emergencia", "en": "Emergency stop button" },
        "description": { "es": "La seguridad es primordial en Chicago. El bot├│n de parada de emergencia te permite detener el proceso al instante si fuera necesario, protegiendo tanto al operario como al material.", "en": "Safety is paramount in Chicago. The emergency stop button lets you halt the process instantly if needed, protecting both the operator and the material." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Certificaci├│n CE", "en": "CE certification" },
        "description": { "es": "La calidad y seguridad de Chicago est├ín garantizadas por los est├índares CE, asegurando un funcionamiento confiable, duradero y alineado con la normativa europea.", "en": "Chicago's quality and safety are guaranteed by CE standards, ensuring reliable, durable operation aligned with European regulations." },
        "icon": "BadgeCheck"
      }
    ],
    "hotspots": [
      { "x": 40.5, "y": 11.4, "title": { "es": "Controlador digital GY-06", "en": "GY-06 digital controller" }, "description": { "es": "Pantalla digital con control de tiempo, temperatura, modo eco y precalentamiento para una producci├│n precisa y eficiente.", "en": "Digital display with time, temperature, eco mode, and preheating controls for precise and efficient production." } },
      { "x": 43.1, "y": 62.8, "title": { "es": "Placa calefactora 40x50cm", "en": "40x50cm heating plate" }, "description": { "es": "Resistencia fija de gran superficie con distribuci├│n de calor uniforme. Permite trabajar con materiales de hasta 35mm de grosor.", "en": "Large fixed heating element with uniform heat distribution. Works with materials up to 35mm thick." } },
      { "x": 28.9, "y": 83.1, "title": { "es": "Asa de la base deslizante", "en": "Sliding base handle" }, "description": { "es": "Permite desplazar la base de trabajo f├ícilmente para cargar y descargar prendas con total comodidad y sin esfuerzo.", "en": "Allows sliding the work base easily to load and unload garments comfortably and effortlessly." } }
    ],
    
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos cuando se deterioren.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura con term├│metro externo.",
        "Revisi├│n peri├│dica del sistema neum├ítico y sus conexiones."
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
      "es": "Luanda Plancha T├®rmica Autom├ítica",
      "en": "Luanda Automatic Heat Press",
      "pt": "Luanda Prensa T├®rmica Autom├ítica",
      "it": "Luanda Pressa Termica Automatica"
    },
    "description": {
      "es": "Luanda es una plancha t├®rmica autom├ítica profesional con un tama├▒o id├│neo: compacta para que el espacio no sea un problema, con caracter├¡sticas premium que te ofrecen un aliado potente y preciso perfecto para usuarios exigentes que buscan resultados consistentes.",
      "en": "Luanda is a professional automatic heat press with an ideal size ÔÇö compact so space is never an issue, with premium features that make it a powerful and precise ally for demanding users seeking consistent results.",
      "pt": "Luanda ├® uma prensa t├®rmica autom├ítica profissional com tamanho ideal: compacta para que o espa├ºo n├úo seja um problema, com caracter├¡sticas premium que a tornam uma aliada poderosa e precisa.",
      "it": "Luanda ├¿ una pressa termica automatica professionale di dimensioni ideali: compatta per non avere problemi di spazio, con caratteristiche premium che la rendono un'alleata potente e precisa."
    },
    "image": "/products/maquinas/luanda-plancha-termica-automatica/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Compacta", "en": "Compact", "pt": "Compacta", "it": "Compatta" },
    "features": {
      "es": [
        "Apertura y cierre autom├ítico neum├ítico con ├íngulo de 25┬░",
        "Placa fija de 40x50cm con grosor imprimible hasta 68mm",
        "Controlador digital GY-06 con modo eco, precalentamiento y base deslizante"
      ],
      "en": [
        "Pneumatic automatic opening and closing at 25┬░ angle",
        "Fixed 40x50cm plate with up to 68mm printable thickness",
        "GY-06 digital controller with eco mode, preheating and sliding base"
      ],
      "pt": [
        "Abertura e fecho autom├ítico pneum├ítico com ├óngulo de 25┬░",
        "Placa fixa de 40x50cm com espessura imprim├¡vel at├® 68mm",
        "Controlador digital GY-06 com modo eco, pr├®-aquecimento e base deslizante"
      ],
      "it": [
        "Apertura e chiusura automatica pneumatica con angolo di 25┬░",
        "Piastra fissa 40x50cm con spessore stampabile fino a 68mm",
        "Controller digitale GY-06 con modalit├á eco, preriscaldamento e base scorrevole"
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
    "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Autom├ítica", "en": "Automatic", "pt": "Autom├ítica", "it": "Automatica" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Luanda" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Neum├ítica" },
      { "label": { "es": "├üngulo de apertura", "en": "Opening Angle" }, "value": "25┬░" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Fija" },
      { "label": { "es": "Tama├▒o de resistencia", "en": "Heating Element Size" }, "value": "40 x 50 cm" },
      { "label": { "es": "Grosor m├íximo imprimible", "en": "Max Printable Thickness" }, "value": "68 mm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-06" },
      { "label": { "es": "Precisi├│n del controlador", "en": "Controller Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-99 seg." },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225 Ôäâ" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "110V / 220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "2.500 W" },
      { "label": { "es": "Amperaje", "en": "Amperage" }, "value": "22 A" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "62,75 kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "77 x 53 x 75 cm" }
    ],
    "benefits": [
      {
        "title": { "es": "Compacta sin renunciar a la potencia", "en": "Compact without sacrificing power" },
        "description": { "es": "Luanda combina un tama├▒o reducido con unas prestaciones de nivel profesional. Ideal para talleres donde el espacio es limitado pero la exigencia de calidad no lo es.", "en": "Luanda combines a compact footprint with professional-level performance. Ideal for workshops where space is limited but quality demands are not." },
        "icon": "Maximize"
      },
      {
        "title": { "es": "Apertura y cierre autom├ítico neum├ítico", "en": "Pneumatic automatic opening and closing" },
        "description": { "es": "Su sistema neum├ítico de apertura y cierre autom├ítico elimina errores de operador y mantiene una presi├│n perfectamente uniforme en cada ciclo de producci├│n.", "en": "Its pneumatic automatic opening and closing system eliminates operator errors and maintains perfectly uniform pressure every production cycle." },
        "icon": "Wind"
      },
      {
        "title": { "es": "Sublima materiales de hasta 68mm de grosor", "en": "Sublimate materials up to 68mm thick" },
        "description": { "es": "Gracias a su gran recorrido de placa, Luanda puede personalizar pr├ícticamente cualquier material: camisetas, sudaderas, mochilas, art├¡culos r├¡gidos y objetos voluminosos.", "en": "Thanks to its wide plate travel, Luanda can customize virtually any material: t-shirts, hoodies, backpacks, rigid items, and bulky objects." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Base deslizante para mayor comodidad", "en": "Sliding base for greater comfort" },
        "description": { "es": "La base deslizante permite cargar y descargar prendas sin esfuerzo, reduciendo la fatiga durante las jornadas largas de producci├│n continua.", "en": "The sliding base allows you to load and unload garments effortlessly, reducing fatigue during long continuous production sessions." },
        "icon": "ArrowRight"
      },
      {
        "title": { "es": "Ajuste autom├ítico de presi├│n", "en": "Automatic pressure adjustment" },
        "description": { "es": "Luanda regula la presi├│n de forma autom├ítica, evitando fallos por exceso o defecto y garantizando resultados perfectos en cada art├¡culo independientemente de su grosor.", "en": "Luanda automatically adjusts pressure, preventing failures from excess or insufficient pressure and guaranteeing perfect results on every item regardless of thickness." },
        "icon": "Target"
      },
      {
        "title": { "es": "Controlador GY-06 con modo eco y precalentamiento", "en": "GY-06 controller with eco mode and preheating" },
        "description": { "es": "Gestiona temperatura, tiempo, modo eco y precalentamiento desde una interfaz f├ícil e intuitiva. Ahorra energ├¡a y reduce tiempos de espera entre ciclos.", "en": "Manage temperature, time, eco mode and preheating from an easy, intuitive interface. Save energy and reduce wait times between cycles." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Bot├│n de parada de emergencia", "en": "Emergency stop button" },
        "description": { "es": "La seguridad es primordial en Luanda. El bot├│n de parada de emergencia detiene el proceso al instante si fuera necesario, protegiendo al operario y al material.", "en": "Safety is paramount in Luanda. The emergency stop button halts the process instantly if needed, protecting both the operator and the material." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Certificaci├│n CE", "en": "CE certification" },
        "description": { "es": "La calidad y seguridad de Luanda est├ín garantizadas por los est├índares CE, asegurando un funcionamiento confiable, duradero y alineado con la normativa europea.", "en": "Luanda's quality and safety are guaranteed by CE standards, ensuring reliable, durable operation aligned with European regulations." },
        "icon": "BadgeCheck"
      }
    ],
    "hotspots": [
      {
        "x": 40, "y": 14,
        "title": { "es": "Controlador digital GY-06", "en": "GY-06 Digital Controller" },
        "description": { "es": "Panel digital con temporizador 0-99 seg., temperatura m├íxima 225┬░C, precisi├│n ┬▒0,5%, modo eco y funci├│n de precalentamiento. Gesti├│n intuitiva de todos los par├ímetros de producci├│n.", "en": "Digital panel with 0-99 sec. timer, 225┬░C maximum temperature, ┬▒0.5% accuracy, eco mode and preheating function. Intuitive management of all production parameters." }
      },
      {
        "x": 41, "y": 23,
        "title": { "es": "Bot├│n de parada de emergencia", "en": "Emergency stop button" },
        "description": { "es": "Detiene el proceso al instante en caso de emergencia, protegiendo al operario y al material. Componente de seguridad certificado bajo est├índar CE.", "en": "Halts the process instantly in an emergency, protecting both operator and material. Safety component certified to CE standard." }
      },
      {
        "x": 31, "y": 26,
        "title": { "es": "Bot├│n ON/OFF", "en": "ON/OFF button" },
        "description": { "es": "Interruptor principal de encendido y apagado que corta completamente la alimentaci├│n de la m├íquina. Acceso directo y ergon├│mico para un uso seguro.", "en": "Main power on/off switch that fully cuts the machine's power supply. Direct ergonomic access for safe operation." }
      },
      {
        "x": 79, "y": 42,
        "title": { "es": "Sistema de gas neum├ítico", "en": "Pneumatic gas system" },
        "description": { "es": "Sistema neum├ítico de apertura y cierre autom├ítico con ├íngulo de 25┬░. Garantiza una presi├│n perfectamente uniforme en cada ciclo y elimina la variabilidad del operario.", "en": "Pneumatic automatic opening and closing system with a 25┬░ angle. Guarantees perfectly uniform pressure every cycle and eliminates operator variability." }
      },
      {
        "x": 27, "y": 46,
        "title": { "es": "Difusor de calor", "en": "Heat diffuser" },
        "description": { "es": "Sistema de distribuci├│n uniforme del calor que asegura una temperatura homog├®nea en toda la superficie de la placa, evitando puntos fr├¡os o calientes que afecten la calidad del transfer.", "en": "Uniform heat distribution system that ensures a homogeneous temperature across the entire plate surface, avoiding cold or hot spots that affect transfer quality." }
      },
      {
        "x": 33, "y": 63,
        "title": { "es": "Placa calefactora 40├ù50 cm", "en": "40├ù50 cm heating plate" },
        "description": { "es": "Resistencia fija de 40├ù50 cm con distribuci├│n de calor uniforme y potencia de 2.500 W. Admite materiales de hasta 68 mm de grosor para versatilidad m├íxima.", "en": "Fixed 40├ù50 cm heating element with uniform heat distribution and 2,500 W power. Handles materials up to 68 mm thick for maximum versatility." }
      },
      {
        "x": 32, "y": 82,
        "title": { "es": "Bandeja extra├¡ble", "en": "Removable tray" },
        "description": { "es": "Bandeja inferior extra├¡ble y deslizante que facilita la colocaci├│n precisa de prendas y materiales. Reduce la fatiga en jornadas largas y mejora la eficiencia del flujo de trabajo.", "en": "Removable sliding lower tray that enables precise garment and material placement. Reduces fatigue during long sessions and improves workflow efficiency." }
      }
    ],
    "storyHeadline": { "es": "Eficiencia Comprobada", "en": "Redefining the workflow" },
    "storySegments": [
      {
        "title": { "es": "Rendimiento superior", "en": "Professional performance" },
        "description": {
          "es": "Luanda ha sido optimizada para reducir los tiempos de ciclo y maximizar tu producci├│n diaria.",
          "en": "Luanda is designed to deliver consistent results and high productivity."
        },
        "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/taGyk1tr-4A?si=aisxcjHDWVBjYuR-\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
      }
    ],
    
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos cuando se deterioren.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura.",
        "Revisi├│n peri├│dica del sistema neum├ítico y sus conexiones."
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
      "es": "Belice Plancha T├®rmica Textil",
      "en": "Belice Heat Press",
      "pt": "Belice Prensa T├®rmica Textil",
      "it": "Belice Pressa Termica Tessile"
    },
    "description": {
      "es": "Ad├®ntrate en el mundo de la personalizaci├│n con nuestra plancha transfer manual Beinsen Belice. Encuentra la belleza de la simplicidad y la satisfacci├│n de las cosas que hacen exactamente lo que tienen que hacer. Cortita y al pie, para todos los p├║blicos y todos los bolsillos. Y en versi├│n de 38├ù38 y de 40x50cm.",
      "en": "Belice textile heat press designed for daily jobs with consistent results and simple operation.",
      "pt": "Prensa t├®rmica t├¬xtil Belice desenhada para trabalhos di├írios com resultados consistentes.",
      "it": "Pressa termica tessile Belice progettata per lavori quotidiani con risultati costanti."
    },
    "image": "/products/maquinas/belice-plancha-termica-textil/01.png",
    "price": "Consultar PVP",
    "size": { "es": "38x38 / 40x50 cm", "en": "38x38 / 40x50 cm" },
    "features": {
      "es": [
        "Formato textil vers├ítil",
        "Control preciso de tiempo y temperatura",
        "Ideal para producci├│n diaria"
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

"storyHeadline": { "es": "Trabajo Inteligente", "en": "Redefining the workflow" },
    "storySegments": [
      {
        "title": { "es": "Flujo continuo", "en": "Professional performance" },
        "description": {
          "es": "Belice te permite trabajar reduciendo el esfuerzo manual en cada ciclo de planchado.",
          "en": "Belice is designed to deliver consistent results and high productivity."
        },
        "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/FucxTcU6rWc?si=uozoT_LKDPHrl0Fv\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
      }
    ],
    
        "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Manual" },
      { "label": { "es": "Grosor m├íximo del personalizable", "en": "Max Customizable Thickness" }, "value": "20mm." },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-06" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "Ô£ù" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "38├ù38 o 40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ù" },
      { "label": { "es": "Potencia (38x38 / 40x50)", "en": "Power (38x38 / 40x50)" }, "value": "1.6 kW / 1.8 kW" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "120V / 220V" },
      { "label": { "es": "Peso neto (38x38 / 40x50)", "en": "Net Weight (38x38 / 40x50)" }, "value": "35Kg. / 42Kg." },
      { "label": { "es": "Peso bruto (38x38 / 40x50)", "en": "Gross Weight (38x38 / 40x50)" }, "value": "43Kg. / 49Kg." },
      { "label": { "es": "Tama├▒o de la m├íquina", "en": "Machine Size" }, "value": "71x40x50cm" },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "94x57x57cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Ô£ù" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "Ô£ù" }
    ],
    "benefits": [
      {
        "title": { "es": "Plancha sin parar", "en": "Press without stopping" },
        "description": { "es": "La simplicidad no significa fragilidad sino todo lo contrario. Con tu nueva plancha transfer Beinsen Belice no querr├ís dejar de planchar todo lo que se ponga a tu alcance, y gracias a su construcci├│n robusta, adem├ís, no tendr├ís que hacerlo.", "en": "Simplicity does not mean fragility. With your new Beinsen Belice transfer press, robust construction supports continuous pressing jobs." },
        "icon": "Zap",
        "image": "/products/maquinas/belice-plancha-termica-textil/03.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Esas peque├▒as cosas", "en": "Those little details" },
        "description": { "es": "Tu plancha es una compa├▒era de trabajo de vital importancia para ti. Precisamente por eso necesitas que sea una herramienta c├│moda que te permita centrarte en el resto de aspectos de la personalizaci├│n.", "en": "Your press is a key work companion, so it is designed to be comfortable and let you focus on the rest of the personalization workflow." },
        "icon": "Settings",
        "objectFit": "contain"
      }
    ],
    "hotspots": [
      { "x": 41.9, "y": 8.2,  "title": { "es": "Mango ergon├│mico",                                        "en": "Ergonomic handle" },                                      "description": { "es": "", "en": "" } },
      { "x": 26.1, "y": 51.5, "title": { "es": "Controlador digital avanzado GY-06",                      "en": "Advanced digital controller GY-06" },                     "description": { "es": "", "en": "" } },
      { "x": 47.3, "y": 66.9, "title": { "es": "Amplio ├íngulo de apertura",                               "en": "Wide opening angle" },                                    "description": { "es": "", "en": "" } },
      { "x": 33.2, "y": 71.5, "title": { "es": "Resorte de gas",                                          "en": "Gas spring" },                                            "description": { "es": "", "en": "" } },
      { "x": 71.0, "y": 86.3, "title": { "es": "Platos intercambiables con sistema de cambio r├ípido",    "en": "Interchangeable plates with quick-change system" },        "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Barbados Plancha T├®rmica Textil",
      "en": "Barbados Heat Press",
      "pt": "Barbados Prensa T├®rmica Textil",
      "it": "Barbados Pressa Termica Tessile"
    },
    "description": {
      "es": "La plancha transfer para camisetas Beinsen Barbados es la amiga que nunca falla. Desarrollada desde la experiencia y con el objetivo de ofrecer un producto robusto, duradero, fiable y equilibrado, esta prensa t├®rmica disponible con platos de 38├ù38 y de 40x50cm. extraibles e intercambiables te permite hacer de todo y para todos los p├║blicos.",
      "en": "Barbados textile heat press aimed at workshops seeking stability and performance.",
      "pt": "Prensa t├®rmica t├¬xtil Barbados para oficinas que procuram estabilidade e desempenho.",
      "it": "Pressa termica tessile Barbados pensata per laboratori che cercano stabilit├á e rendimento."
    },
    "image": "/products/maquinas/barbados-plancha-termica-textil/01.jpg",
    "price": "Consultar PVP",
    "size": { "es": "38x38 / 40x50 cm", "en": "38x38 / 40x50 cm" },
    "features": {
      "es": [
        "Construcci├│n robusta",
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


        "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Electromagn├®tica", "en": "Electromagnetic", "pt": "Eletromagn├®tica", "it": "Elettromagnetica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Apertura autom├ítica y cierre manual" },
      { "label": { "es": "├üngulo de apertura", "en": "Opening Angle" }, "value": "45┬║" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-06" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "Ô£ù" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "38├ù38 o 40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ô" },
      { "label": { "es": "Potencia (38x38 / 40x50)", "en": "Power (38x38 / 40x50)" }, "value": "1.6 kW / 1.8 kW" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "120V / 220V" },
      { "label": { "es": "Peso neto (38x38 / 40x50)", "en": "Net Weight (38x38 / 40x50)" }, "value": "27Kg. / 35Kg." },
      { "label": { "es": "Peso bruto (38x38 / 40x50)", "en": "Gross Weight (38x38 / 40x50)" }, "value": "43Kg. / 51Kg." },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "92x52x51cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Ô£ù" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "Ô£ù" }
    ],
    "benefits": [
      {
        "title": { "es": "Electromagn├®tica", "en": "Electromagnetic" },
        "description": { "es": "Su sistema electromagn├®tico simplifica la apertura al terminar el ciclo y mejora la experiencia de uso en producci├│n continua.", "en": "Its electromagnetic system simplifies opening at cycle end and improves continuous production workflow." },
        "icon": "Zap",
        "image": "/products/maquinas/barbados-plancha-termica-textil/06.png"
      },
      {
        "title": { "es": "Contador de presi├│n", "en": "Pressure counter" },
        "description": { "es": "Aplica presi├│n con mayor precisi├│n gracias al contador manual para repetir configuraciones con seguridad.", "en": "Apply pressure more precisely with the manual counter to repeat settings reliably." },
        "icon": "Gauge",
        "image": "/products/maquinas/barbados-plancha-termica-textil/09.png"
      },
      {
        "title": { "es": "Bandeja extra├¡ble", "en": "Pull-out tray" },
        "description": { "es": "Desliza la bandeja inferior hacia ti y gana espacio para colocar prendas en segundos con mayor comodidad.", "en": "Slide the lower tray toward you to gain space and place garments in seconds more comfortably." },
        "icon": "PanelBottom",
        "image": "/products/maquinas/barbados-plancha-termica-textil/010.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" },
        "description": { "es": "Incluye sistema de intercambio r├ípido para el plato inferior, reduciendo tiempos muertos y mejorando productividad.", "en": "Includes a quick-change lower plate system that reduces downtime and boosts productivity." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Controlador digital", "en": "Digital controller" },
        "description": { "es": "Controla tiempo y temperatura de forma precisa con el controlador digital para mantener resultados consistentes.", "en": "Control time and temperature precisely with the digital controller for consistent outcomes." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Pensada para perdurar", "en": "Built to last" },
        "description": { "es": "Sus materiales de alta calidad y duraci├│n te garantizan un rendimiento superior durante a├▒os.", "en": "High-quality, long-lasting materials ensure superior performance for years." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Comodidad ante todo", "en": "Comfort first" },
        "description": { "es": "Fiabilidad y comodidad van de la mano en tu Beinsen Barbados para que te centres en personalizar sin complicaciones.", "en": "Reliability and comfort go hand in hand so you can focus on personalization without friction." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Que el ritmo no pare", "en": "Keep the pace going" },
        "description": { "es": "Trabaja m├ís, mejor y m├ís c├│modo gracias a su dise├▒o orientado a una producci├│n textil ├ígil.", "en": "Work more, better, and more comfortably with a design focused on agile textile production." },
        "icon": "Target"
      },
      {
        "title": { "es": "Dale una vuelta", "en": "Give it a turn" },
        "description": { "es": "Ajusta presi├│n de forma r├ípida y abre f├ícilmente al finalizar gracias al electroim├ín incorporado.", "en": "Adjust pressure quickly and open effortlessly at cycle end thanks to the built-in electromagnet." },
        "icon": "RotateCw"
      }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos."
      ],
      "en": [
        "Regular cleaning of plates or sublimation surfaces.",
        "Replacement of protective sheets or coatings.",
        "Pressure verification and adjustment.",
        "Inspection and cleaning of internal components."
      ]
    },
    "hotspots": [
      { "x": 52.6, "y": 37.6, "title": { "es": "Apertura autom├ítica con electroim├ín",                      "en": "Automatic opening with electromagnet" },            "description": { "es": "", "en": "" } },
      { "x": 55.2, "y": 47.9, "title": { "es": "Contador manual de presi├│n",                                "en": "Manual pressure gauge" },                          "description": { "es": "", "en": "" } },
      { "x": 33.2, "y": 52.6, "title": { "es": "Controlador digital avanzado GY-06",                        "en": "Advanced GY-06 digital controller" },               "description": { "es": "", "en": "" } },
      { "x": 59.3, "y": 73.9, "title": { "es": "Platos intercambiables con sistema de cambio r├ípido",       "en": "Interchangeable plates with quick-change system" },  "description": { "es": "", "en": "" } },
      { "x": 41.9, "y": 81.7, "title": { "es": "Amortiguador neum├ítico",                                     "en": "Pneumatic damper" },                                "description": { "es": "", "en": "" } },
      { "x": 69.1, "y": 82.2, "title": { "es": "Bandeja deslizable",                                         "en": "Sliding tray" },                                    "description": { "es": "", "en": "" } }
    ]
  },
  {
    "id": "alaska-plancha-termica-textil",
    "slug": "alaska-plancha-termica-textil",
    "name": {
      "es": "Alaska Plancha T├®rmica Textil",
      "en": "Alaska Heat Press",
      "pt": "Alaska Prensa T├®rmica Textil",
      "it": "Alaska Pressa Termica Tessile"
    },
    "description": {
      "es": "Olv├¡date de palancas, olv├¡date de girar roscas, olv├¡date de hacer raros escorzos para colocar una prenda, y olv├¡date tambi├®n de que tu prensa t├®rmica ocupe un espacio innecesario, tu nueva plancha transfer Beinsen Alaska est├í pensada para ofrecerte versatilidad de la manera m├ís c├│moda. Y ahora disponible en tama├▒o 38├ù38 y 40x50cm.",
      "en": "Alaska textile heat press ready for custom production with agile workflow.",
      "pt": "Prensa t├®rmica t├¬xtil Alaska pronta para produ├º├úo personalizada com fluxo ├ígil.",
      "it": "Pressa termica tessile Alaska pronta per produzioni personalizzate con flusso agile."
    },
    "image": "/products/maquinas/alaska-plancha-termica-textil/01.png",
    "price": "Consultar PVP",
    "size": { "es": "38x38 / 40x50 cm", "en": "38x38 / 40x50 cm" },
    "features": {
      "es": [
        "Dise├▒o compacto y funcional",
        "Configuraci├│n r├ípida",
        "Adaptada a m├║ltiples prendas"
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


        "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "El├®ctrica", "en": "Electric", "pt": "El├®trica", "it": "Elettrica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Autom├ítico con energ├¡a el├®ctrica" },
      { "label": { "es": "Presi├│n", "en": "Pressure" }, "value": "Autom├ítica" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-13" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ô" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "3" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "38├ù38 o 40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ù" },
      { "label": { "es": "Potencia (38x38 / 40x50)", "en": "Power (38x38 / 40x50)" }, "value": "1.6 kW / 1.8 kW" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "230┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "120V / 220V" },
      { "label": { "es": "Peso neto (38x38 / 40x50)", "en": "Net Weight (38x38 / 40x50)" }, "value": "35Kg. / 42Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "46Kg." },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "75x52x50cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Ô£ù" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "Ô£ù" }
    ],
    "benefits": [
      {
        "title": { "es": "Calor uniforme", "en": "Uniform heat" },
        "description": { "es": "Hemos mejorado la placa calefactora con una nueva resistencia m├ís avanzada, gruesa y pesada que mejora el reparto de presi├│n y calor. Esta innovaci├│n, junto con la alfombrilla de ├║ltima generaci├│n, hace que tu Beinsen Alaska sea m├ís eficiente y econ├│mica que nunca.", "en": "We have upgraded the heating plate with a new, more advanced, thicker and heavier element that significantly improves pressure and heat distribution. This innovation, combined with the latest-generation pad, makes your Beinsen Alaska more efficient and economical than ever." },
        "icon": "Target",
        "image": "/products/maquinas/alaska-plancha-termica-textil/02.png"
      },
      {
        "title": { "es": "C├│moda y compacta", "en": "Comfortable and compact" },
        "description": { "es": "Todo pensado para tu comodidad. Aprovecha la bandeja inferior deslizante para colocar la prenda con facilidad gracias al gran espacio de maniobra y luegoÔÇª nada de palancasÔÇª pulsa los botones laterales y tu nueva Beinsen Alaska har├í lo suyo. Como tener una plancha neum├ítica pero sin compresor.", "en": "Everything designed for your comfort. Use the sliding lower tray to place garments easily with plenty of maneuvering space ÔÇö then no levers, just press the side buttons and let the Beinsen Alaska do its job. Like having a pneumatic press but without the compressor." },
        "icon": "Settings",
        "image": "/products/maquinas/alaska-plancha-termica-textil/07.png"
      },
      {
        "title": { "es": "Pantalla t├íctil", "en": "Touch display" },
        "description": { "es": "El nuevo controlador t├íctil simplifica la configuraci├│n y el control de cada trabajo.", "en": "The new touch controller simplifies setup and job control." },
        "icon": "MousePointer2",
        "image": "/products/maquinas/alaska-plancha-termica-textil/03.png"
      },
      {
        "title": { "es": "El├®ctrica", "en": "Electric" },
        "description": { "es": "Disfruta de funcionamiento autom├ítico el├®ctrico con una experiencia de uso c├│moda y sin complicaciones.", "en": "Enjoy electric automatic operation with a smooth and hassle-free user experience." },
        "icon": "Zap",
        "image": "/products/maquinas/alaska-plancha-termica-textil/06.png"
      }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      { "x": 45.7, "y": 24.5, "title": { "es": "Pantalla t├íctil", "en": "Touch screen" }, "description": { "es": "", "en": "" } },
      { "x": 54.2, "y": 26.6, "title": { "es": "Bajada autom├ítica con botones laterales", "en": "Automatic lowering with side buttons" }, "description": { "es": "", "en": "" } },
      { "x": 48.9, "y": 42.2, "title": { "es": "Nueva resistencia de alta tecnolog├¡a", "en": "New high-technology heating element" }, "description": { "es": "", "en": "" } },
      { "x": 52.1, "y": 57.7, "title": { "es": "Transferencia de imagen m├ís precisa", "en": "More precise image transfer" }, "description": { "es": "", "en": "" } },
      { "x": 43.6, "y": 71.8, "title": { "es": "Bandeja extra├¡ble", "en": "Removable tray" }, "description": { "es": "", "en": "" } }
    ]
  },
  {
    "id": "malvinas-plancha-termica-textil",
    "slug": "malvinas-plancha-termica-textil",
    "name": {
      "es": "Malvinas Plancha T├®rmica Textil",
      "en": "Malvinas Heat Press",
      "pt": "Malvinas Prensa T├®rmica Textil",
      "it": "Malvinas Pressa Termica Tessile"
    },
    "description": {
      "es": "Descubre la evoluci├│n natural de las prensas t├®rmicas con nuestra nueva plancha transfer profesional Beinsen Malvinas. Su dise├▒o plagado de novedades har├í el proceso de planchado m├ís ├ígil, preciso y seguro para que t├║ te puedas preocupar de lo realmente importante.",
      "en": "Malvinas textile heat press focused on pressing precision and reliable operation.",
      "pt": "Prensa t├®rmica t├¬xtil Malvinas focada na precis├úo e fiabilidade de uso.",
      "it": "Pressa termica tessile Malvinas focalizzata su precisione di pressatura e affidabilit├á."
    },
    "image": "/products/maquinas/malvinas-plancha-termica-textil/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Presi├│n estable",
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


        "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Electromagn├®tica", "en": "Electromagnetic", "pt": "Eletromagn├®tica", "it": "Elettromagnetica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Autom├ítico y manual" },
      { "label": { "es": "Grosor m├íximo del personalizable", "en": "Max Customizable Thickness" }, "value": "20mm." },
      { "label": { "es": "Presi├│n", "en": "Pressure" }, "value": "Manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-13" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ô" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "3" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "40x50 cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ù" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "61,4Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "78Kg." },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "94x57x57cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Ô£ù" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "Ô£ù" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "Cubierta anti quemaduras" }
    ],
    "benefits": [
      {
        "title": { "es": "Electromagn├®tica", "en": "Electromagnetic" },
        "description": { "es": "Su sistema electromagn├®tico mejora la ergonom├¡a de apertura y cierre para un flujo de trabajo m├ís eficiente.", "en": "Its electromagnetic system improves opening and closing ergonomics for a more efficient workflow." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Modo manual/auto", "en": "Manual/auto mode" },
        "description": { "es": "Alterna entre modo autom├ítico y manual para adaptarte a distintos tipos de producci├│n y acabados.", "en": "Switch between automatic and manual modes to adapt to different production needs and finishes." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Pantalla t├íctil", "en": "Touch display" },
        "description": { "es": "El controlador t├íctil GY-13 permite ajustar y supervisar todos los par├ímetros con rapidez y precisi├│n.", "en": "The GY-13 touch controller lets you adjust and monitor all parameters quickly and precisely." },
        "icon": "MousePointer2"
      },
      {
        "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" },
        "description": { "es": "Incluye sistema de intercambio r├ípido del plato inferior para minimizar tiempos de inactividad y aumentar productividad.", "en": "Includes quick lower plate exchange to reduce downtime and increase productivity." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Cubierta antiquemaduras", "en": "Anti-burn cover" },
        "description": { "es": "Aporta seguridad extra durante la operaci├│n para trabajar con m├ís confianza en jornadas largas.", "en": "Adds extra safety during operation so you can work with more confidence in long shifts." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Calor uniforme", "en": "Uniform heat" },
        "description": { "es": "La nueva resistencia, m├ís avanzada, gruesa y pesada, mejora de forma notable el reparto de presi├│n y calor.", "en": "The newer, thicker, heavier heating element significantly improves pressure and heat distribution." },
        "icon": "Target"
      },
      {
        "title": { "es": "Confort al m├íximo", "en": "Maximum comfort" },
        "description": { "es": "Empu├▒adura auxiliar, plato extra├¡ble/intercambiable y electroim├ín desconectable se combinan para un manejo m├ís c├│modo.", "en": "Auxiliary handle, removable/interchangeable plate, and disconnectable electromagnet combine for more comfortable use." },
        "icon": "Sofa"
      },
      {
        "title": { "es": "Todo controlado", "en": "Everything under control" },
        "description": { "es": "Controla 9 niveles de presi├│n y guarda hasta 3 memorias de tiempo y temperatura. Todo al alcance de tu dedo ├¡ndice.", "en": "Control 9 pressure levels and save up to 3 time/temperature memories, all at your fingertips." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Que el ritmo no pare", "en": "Keep the pace going" },
        "description": { "es": "Su dise├▒o agiliza cambios de plato, reduce tiempos muertos y te permite trabajar m├ís y mejor.", "en": "Its design speeds plate changes, reduces downtime, and helps you work faster and better." },
        "icon": "Gauge"
      }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      { "x": 61.8, "y": 14.9, "title": { "es": "Nueva empu├▒adura con mando auxiliar", "en": "New handle with auxiliary control" }, "description": { "es": "", "en": "" } },
      { "x": 37.1, "y": 35.3, "title": { "es": "Cubierta antiquemaduras", "en": "Anti-burn cover" }, "description": { "es": "", "en": "" } },
      { "x": 67.7, "y": 36.3, "title": { "es": "Regulador de presi├│n y electroim├ín reversible", "en": "Pressure regulator and reversible electromagnet" }, "description": { "es": "", "en": "" } },
      { "x": 65.6, "y": 41,   "title": { "es": "Bot├│n de apagado de emergencia", "en": "Emergency stop button" }, "description": { "es": "", "en": "" } },
      { "x": 79.4, "y": 45.8, "title": { "es": "Pantalla t├íctil", "en": "Touch screen" }, "description": { "es": "", "en": "" } },
      { "x": 57.7, "y": 51.8, "title": { "es": "Nueva resistencia de alta tecnolog├¡a", "en": "New high-technology heating element" }, "description": { "es": "", "en": "" } },
      { "x": 19.2, "y": 72.8, "title": { "es": "Sistema de platos intercambiables", "en": "Interchangeable plate system" }, "description": { "es": "", "en": "" } },
      { "x": 18.2, "y": 85.3, "title": { "es": "Bandeja extra├¡ble", "en": "Removable tray" }, "description": { "es": "", "en": "" } },
      { "x": 36.1, "y": 88.9, "title": { "es": "Espacio extra grande para sudaderas o tejidos gruesos", "en": "Extra large space for hoodies or thick fabrics" }, "description": { "es": "", "en": "" } }
    ]
  },
  {
    "id": "guyana-plancha-termica-textil",
    "slug": "guyana-plancha-termica-textil",
    "name": {
      "es": "Guyana Plancha T├®rmica Textil",
      "en": "Guyana Heat Press",
      "pt": "Guyana Prensa T├®rmica Textil",
      "it": "Guyana Pressa Termica Tessile"
    },
    "description": {
      "es": "Reinventa tu forma de trabajar con la plancha transfer de doble plato Beinsen Guyana. Tan robusta y fiable como el modelo Barbados pero con el doble de diversi├│n.",
      "en": "Guyana textile heat press focused on productivity and consistency in production runs.",
      "pt": "Prensa t├®rmica t├¬xtil Guyana com foco em produtividade e consist├¬ncia.",
      "it": "Pressa termica tessile Guyana con focus su produttivit├á e costanza."
    },
    "image": "/products/maquinas/guyana-plancha-termica-textil/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Operaci├│n sencilla",
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


        "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Electromagn├®tica", "en": "Electromagnetic", "pt": "Eletromagn├®tica", "it": "Elettromagnetica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Sandwich" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Autom├ítico y manual" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-06" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "Ô£ù" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "2" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ù" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "151 Kg." },
      { "label": { "es": "Embalaje (cuerpo de la m├íquina)", "en": "Packaging (Machine Body)" }, "value": "92x65x67 cm." },
      { "label": { "es": "Embalaje (Placa base)", "en": "Packaging (Base Plate)" }, "value": "110x62x25 cm." }
    ],
    "benefits": [
      {
        "title": { "es": "Electromagn├®tica", "en": "Electromagnetic" },
        "description": { "es": "Integra sistema electromagn├®tico para facilitar la operaci├│n y mantener ritmo de trabajo constante.", "en": "Includes an electromagnetic system to simplify operation and maintain consistent workflow pace." },
        "icon": "Zap",
        "image": "/products/maquinas/guyana-plancha-termica-textil/04.png"
      },
      {
        "title": { "es": "Modo manual/auto", "en": "Manual/auto mode" },
        "description": { "es": "Permite alternar entre funcionamiento manual y autom├ítico seg├║n el tipo de producci├│n.", "en": "Lets you switch between manual and automatic operation depending on production needs." },
        "icon": "Settings"
      },
      {
        "title": { "es": "Controlador digital", "en": "Digital controller" },
        "description": { "es": "Controla tiempo y temperatura con precisi├│n para repetir resultados de forma fiable.", "en": "Control time and temperature precisely for reliable repeatable results." },
        "icon": "Cpu",
        "image": "/products/maquinas/guyana-plancha-termica-textil/05.JPG"
      },
      {
        "title": { "es": "Platos intercambiables", "en": "Interchangeable plates" },
        "description": { "es": "El sistema de intercambio r├ípido para el plato inferior reduce tiempos de inactividad y agiliza cambios de trabajo.", "en": "The quick lower plate exchange system reduces downtime and speeds up job changes." },
        "icon": "Layers",
        "image": "/products/maquinas/guyana-plancha-termica-textil/01.png"
      },
      {
        "title": { "es": "Doble plato", "en": "Double plate" },
        "description": { "es": "Su configuraci├│n de doble plato te permite mejorar flujo de trabajo y productividad en series continuas.", "en": "Its double-plate setup improves workflow and productivity in continuous runs." },
        "icon": "Copy"
      },
      {
        "title": { "es": "Pensada para perdurar", "en": "Built to last" },
        "description": { "es": "Sus materiales de alta calidad y duraci├│n te garantizan un rendimiento superior durante a├▒os.", "en": "High-quality long-lasting materials ensure superior performance for years." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Comodidad ante todo", "en": "Comfort first" },
        "description": { "es": "Desliza la bandeja inferior hacia ti y coloca prendas en segundos con m├ís espacio y comodidad.", "en": "Slide the lower tray toward you and place garments in seconds with more room and comfort." },
        "icon": "PanelBottom"
      },
      {
        "title": { "es": "Que el ritmo no pare", "en": "Keep the pace going" },
        "description": { "es": "Su dise├▒o innovador agiliza el proceso, reduce el tiempo de inactividad y mejora la productividad para trabajar m├ís y mejor.", "en": "Its innovative design speeds up work, reduces downtime, and improves productivity so you can work more and better." },
        "icon": "Gauge"
      }
    ],
    "hotspots": [
      { "x": 61.5, "y": 20.2, "title": { "es": "Sistema de agarre secundario", "en": "Secondary grip system" }, "description": { "es": "", "en": "" } },
      { "x": 49.1, "y": 31.6, "title": { "es": "Cierre y apertura con electroim├ín", "en": "Electromagnetic opening and closing" }, "description": { "es": "", "en": "" } },
      { "x": 41.5, "y": 41.1, "title": { "es": "Controlador digital avanzado GY-06", "en": "Advanced GY-06 digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 69.3, "y": 82.4, "title": { "es": "Bandeja extra├¡ble", "en": "Pull-out tray" }, "description": { "es": "", "en": "" } },
      { "x": 40.9, "y": 83.6, "title": { "es": "Platos desplazables lateralmente", "en": "Laterally sliding plates" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Kenia Plancha T├®rmica Textil",
      "en": "Kenia Heat Press",
      "pt": "Kenia Prensa T├®rmica Textil",
      "it": "Kenia Pressa Termica Tessile"
    },
    "description": {
      "es": "┬íDescubre la calidad y versatilidad de la plancha t├®rmica Kenia de Beinsen para crear sus lanyards!",
      "en": "Kenia textile heat press developed for professional personalization with comfortable handling.",
      "pt": "Prensa t├®rmica t├¬xtil Kenia desenvolvida para personaliza├º├úo profissional.",
      "it": "Pressa termica tessile Kenia sviluppata per personalizzazione professionale."
    },
    "image": "/products/maquinas/kenia-plancha-termica-textil/01.png",
    "price": "Consultar PVP",
    "size": { "es": "100 x 25 cm", "en": "100 x 25 cm" },
    "features": {
      "es": [
        "Enfoque profesional",
        "Manejo c├│modo",
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


        "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Manual", "en": "Manual", "pt": "Manual", "it": "Manuale" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Kenia" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tipo sandwich (especial lanyards)" },
      { "label": { "es": "├üngulo de apertura", "en": "Opening Angle" }, "value": "25┬║" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Manual" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "100 x 25 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-06" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "110V / 220V" },
      { "label": { "es": "Amperaje", "en": "Amperage" }, "value": "20A / 11A" },
      { "label": { "es": "Frecuencia", "en": "Frequency" }, "value": "50-60 Hz" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "2.2 kW / 2.4 kW" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225 ┬║C" },
      { "label": { "es": "Precisi├│n de temperatura", "en": "Temperature Precision" }, "value": "┬▒5 ┬║C" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "90 Kg" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "138.6 Kg" },
      { "label": { "es": "Tama├▒o de la m├íquina", "en": "Machine Size" }, "value": "105 x 79 x 46 cm" },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "120 x 96 x 62 cm (Caj├│n madera)" }
    ],
    "benefits": [
      {
        "title": { "es": "Una m├íquina para sublimar polivalente", "en": "A versatile sublimation machine" },
        "description": { "es": "Con nuestra plancha t├®rmica Kenia, dise├▒ada especialmente para la sublimaci├│n de objetos de formas y dimensiones variadas, obtendr├ís resultados profesionales y duraderos.", "en": "With our Kenia heat press, specially designed for objects with varied shapes and dimensions, you get durable professional results." },
        "icon": "Layers",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Una plancha con un dise├▒o ├║nico", "en": "A press with unique design" },
        "description": { "es": "Con una base especial de 100 x 25 cm, la plancha Kenia te permite trabajar llaveros, placas, cintas, pulseras, bandas, corbatas y m├ís productos.", "en": "With a special 100 x 25 cm base, Kenia lets you work on keychains, plates, ribbons, bracelets, bands, ties, and more." },
        "icon": "Ruler"
      },
      {
        "title": { "es": "Rodillo para lanyards", "en": "Lanyard roller" },
        "description": { "es": "Hemos desarrollado un rodillo especializado para cintas que facilita la elaboraci├│n de lanyards de forma casi autom├ítica, m├ís r├ípida y uniforme.", "en": "We developed a specialized ribbon roller for near-automatic lanyard production, faster and more uniform." },
        "icon": "RotateCw",
        "image": "/products/maquinas/kenia-plancha-termica-textil/05.png"
      },
      {
        "title": { "es": "Modo eco y precalentamiento", "en": "Eco mode and preheating" },
        "description": { "es": "Incluye modo eco y precalentamiento para optimizar tiempos y consumo en la producci├│n diaria.", "en": "Includes eco mode and preheating to optimize production time and energy usage." },
        "icon": "Leaf"
      },
      {
        "title": { "es": "Pantalla digital y programable", "en": "Digital and programmable display" },
        "description": { "es": "La pantalla digital y el sistema programable facilitan el ajuste de par├ímetros para repetir trabajos con precisi├│n.", "en": "Digital display and programmable controls simplify parameter setup for precise repeat jobs." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencia duradera", "en": "Durable heating element" },
        "description": { "es": "Su resistencia avanzada est├í dise├▒ada para un rendimiento estable durante jornadas intensivas.", "en": "Its advanced heating element is designed for stable performance in intensive workflows." },
        "icon": "Gauge"
      },
      {
        "title": { "es": "Cierre manual y magn├®tico", "en": "Manual and magnetic closure" },
        "description": { "es": "Cierra la plancha y deja que se abra autom├íticamente gracias a su cierre magn├®tico, reduciendo errores y mejorando comodidad.", "en": "Close the press and let it open automatically with magnetic closure for fewer mistakes and better comfort." },
        "icon": "Magnet"
      },
      {
        "title": { "es": "Sistema de amortiguaci├│n", "en": "Damping system" },
        "description": { "es": "Sus dos fuertes amortiguadores ayudan a distribuir calor y presi├│n de forma uniforme en todo el ├írea de trabajo.", "en": "Its two strong dampers help distribute heat and pressure uniformly across the working area." },
        "icon": "Target"
      },
      {
        "title": { "es": "Plato inferior de calidad", "en": "High-quality lower plate" },
        "description": { "es": "El plato inferior est├í cubierto con una almohadilla de silicona de alta calidad para un contacto fiable y constante.", "en": "The lower plate is covered with high-quality silicone padding for reliable, consistent contact." },
        "icon": "ShieldCheck"
      }
    ],
    "hotspots": [
      { "x": 56.7, "y": 22.8, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 26.5, "y": 28.7, "title": { "es": "Perilla ajuste de presi├│n", "en": "Pressure adjustment knob" }, "description": { "es": "", "en": "" } },
      { "x": 19.6, "y": 40.3, "title": { "es": "Sistema de presi├│n preciso", "en": "Precise pressure system" }, "description": { "es": "", "en": "" } },
      { "x": 72.8, "y": 45.1, "title": { "es": "Bot├│n de emergencia", "en": "Emergency button" }, "description": { "es": "", "en": "" } },
      { "x": 83.9, "y": 50.8, "title": { "es": "Difusor de calor", "en": "Heat diffuser" }, "description": { "es": "", "en": "" } }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Tobago Estaci├│n de Planchado Continuo",
      "en": "Tobago Continuous Press Station",
      "pt": "Tobago Esta├º├úo de Prensagem Cont├¡nua",
      "it": "Tobago Stazione di Pressatura Continua"
    },
    "description": {
      "es": "La nueva estaci├│n de planchado cont├¡nuo Beinsen Tobago es toda una revoluci├│n en la personalizaci├│n de camisetas. C├│mo si de un eficiente ayudante se tratara, s├│lo tienes que alimentarlo de camisetas y ver como se apilan en la salida.",
      "en": "The new Beinsen Tobago continuous pressing station is a revolution in T-shirt personalization. Just feed garments and watch them stack on output.",
      "pt": "A nova esta├º├úo de prensagem cont├¡nua Beinsen Tobago ├® uma revolu├º├úo na personaliza├º├úo de camisetas.",
      "it": "La nuova stazione di pressatura continua Beinsen Tobago ├¿ una rivoluzione nella personalizzazione delle magliette."
    },
    "image": "/products/maquinas/tobago-estacion-planchado-continuo/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Industrial", "en": "Industrial", "pt": "Industrial", "it": "Industriale" },
    "features": {
      "es": [
        "Sistema de planchado continuo para alto rendimiento",
        "Control total de velocidad, presi├│n y temperatura",
        "Dise├▒o m├│vil con mueble de 4 ruedas"
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


        "category": { "es": "Especializadas", "en": "Specialized", "pt": "Especializadas", "it": "Specializzate" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Calandra" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "Control digital m├│vil REX-C400" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "Ô£ù" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "7.000W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "200┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "249Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "407Kg." },
      { "label": { "es": "Tama├▒o de la m├íquina", "en": "Machine Size" }, "value": "236x110x140cm." },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "183x119x163cm." },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Mueble con 4 ruedas universales" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "Ô£ô" }
    ],
    "benefits": [
      {
        "title": { "es": "Electromagn├®tica", "en": "Electromagnetic" },
        "description": { "es": "Integra soluciones electromagn├®ticas para una operaci├│n continua m├ís estable y segura.", "en": "Integrates electromagnetic solutions for more stable and safe continuous operation." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Modo manual/auto", "en": "Manual/auto mode" },
        "description": { "es": "Alterna entre modos manual y autom├ítico para adaptar el ritmo de producci├│n a cada necesidad.", "en": "Switch between manual and automatic modes to adapt production pace to each need." },
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
        "description": { "es": "El sistema modular facilita adaptar la estaci├│n a diferentes formatos de trabajo.", "en": "Its modular system makes adapting the station to different job formats easier." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Cubierta antiquemaduras", "en": "Anti-burn cover" },
        "description": { "es": "Aumenta la seguridad del operario en jornadas largas de producci├│n continua.", "en": "Improves operator safety in long continuous production sessions." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "La fusi├│n perfecta entre una prensa t├®rmica y una calandra", "en": "The perfect fusion of heat press and calender" },
        "description": { "es": "Descubre la personalizaci├│n coral gracias al sistema de planchado cont├¡nuo. Configura las temperaturas, ajusta la velocidad de desplazamiento y la presi├│n y coge carrerilla. Di adi├│s a los periodos de inactividad.", "en": "Discover continuous-flow personalization with a pressing system that lets you set temperature, travel speed, and pressure while reducing downtime." },
        "icon": "Gauge"
      },
      {
        "title": { "es": "Calor por todas partes", "en": "Heat everywhere" },
        "description": { "es": "Su sistema de resistencias dual con calefactor superior e inferior y ajuste independiente garantiza una distribuci├│n uniforme del calor para DTF y HTV.", "en": "Its dual upper/lower heater system with independent adjustment ensures even heat distribution for DTF and HTV." },
        "icon": "Target"
      },
      {
        "title": { "es": "Se adapta a ti", "en": "Adapts to you" },
        "description": { "es": "Ajusta inclinaci├│n de bandeja, altura de rodillos, velocidad, presiones y temperaturas. Mueve y gira el controlador hasta 90┬║ y desplaza la estaci├│n con su mueble con ruedas.", "en": "Adjust tray angle, roller height, speed, pressure, and temperature; move and rotate the controller up to 90┬║ and reposition the station with its wheeled cabinet." },
        "icon": "Move"
      }
    ],
    "hotspots": [
      { "x": 54.8, "y": 7.2,  "title": { "es": "Regulador de velocidad", "en": "Speed regulator" }, "description": { "es": "", "en": "" } },
      { "x": 48.6, "y": 12.4, "title": { "es": "Pantalla desplazable", "en": "Sliding display" }, "description": { "es": "", "en": "" } },
      { "x": 40.3, "y": 28.7, "title": { "es": "Presi├│n ajustable", "en": "Adjustable pressure" }, "description": { "es": "", "en": "" } },
      { "x": 65.8, "y": 29.4, "title": { "es": "L├íser de ayuda al posicionamiento", "en": "Positioning laser guide" }, "description": { "es": "", "en": "" } },
      { "x": 34.9, "y": 40.0, "title": { "es": "-", "en": "-" }, "description": { "es": "", "en": "" } },
      { "x": 78.3, "y": 41.1, "title": { "es": "Bandeja de entrada abatible", "en": "Folding input tray" }, "description": { "es": "", "en": "" } },
      { "x": 13.6, "y": 51.4, "title": { "es": "Bandeja de salida regulable", "en": "Adjustable output tray" }, "description": { "es": "", "en": "" } }
    ]
  },
  {
    "id": "normandia-i-plancha-termica-textil",
    "slug": "normandia-i-plancha-termica-textil",
    "name": {
      "es": "Normand├¡a I Plancha T├®rmica Textil",
      "en": "Normandia I Heat Press",
      "pt": "Normandia I Prensa T├®rmica Textil",
      "it": "Normandia I Pressa Termica Tessile"
    },
    "description": {
      "es": "┬┐Necesitas multiplicar tu producci├│n sin perder un ├ípice de precisi├│n? Entonces la prensa neum├ítico doble Beinsen Normandia I es tu mejor opci├│n. Su sistema de apertura y cierre neum├íticos, su doble plato de gran tama├▒o y tu destreza formar├ín un tridente capaz de superar cualquier reto.",
      "en": "Need to multiply production without losing precision? Beinsen Normandia I double pneumatic press is your best option.",
      "pt": "Precisa multiplicar a produ├º├úo sem perder precis├úo? A prensa pneum├ítica dupla Beinsen Normandia I ├® a melhor op├º├úo.",
      "it": "Hai bisogno di aumentare la produzione senza perdere precisione? La pressa pneumatica doppia Beinsen Normandia I ├¿ la scelta migliore."
    },
    "image": "/products/maquinas/normandia-i-plancha-termica-textil/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Formato textil vers├ítil",
        "Control estable de tiempo y temperatura",
        "Pensada para producci├│n continua"
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

    "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Neum├ítica", "en": "Pneumatic", "pt": "Pneum├ítica", "it": "Pneumatica" },
    "technicalSpecs": [
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Neum├ítica" },
      { "label": { "es": "Modo de funcionamiento", "en": "Operating Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Grosor m├íximo del personalizable", "en": "Max Customizable Thickness" }, "value": "32mm." },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-06" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "Ô£ù" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "2" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "40x50cm." },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ù" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.800W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "97Kg." },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "160Kg." },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "120x97x74cm" },
      { "label": { "es": "Soporte", "en": "Support" }, "value": "Ô£ù" },
      { "label": { "es": "L├íser de posicionamiento", "en": "Positioning Laser" }, "value": "2, uno a cada lado la unidad principal" },
      { "label": { "es": "Seguridad", "en": "Safety" }, "value": "-" }
    ],
    "benefits": [
      {
        "title": { "es": "Neum├ítica", "en": "Pneumatic" },
        "description": { "es": "Aporta una presi├│n constante y uniforme para personalizaciones precisas en series continuas.", "en": "Delivers constant, even pressure for precise personalization in continuous runs." },
        "icon": "Wind",
        "image": "/products/maquinas/normandia-i-plancha-termica-textil/03.png"
      },
      {
        "title": { "es": "Doble plato", "en": "Double plate" },
        "description": { "es": "Su doble plato de gran tama├▒o multiplica el ritmo de producci├│n sin perder precisi├│n.", "en": "Its large double-plate setup multiplies production pace without sacrificing precision." },
        "icon": "Layers",
        "image": "/products/maquinas/normandia-i-plancha-termica-textil/02.png"
      },
      {
        "title": { "es": "Controlador digital", "en": "Digital controller" },
        "description": { "es": "Controla tiempos y temperatura de forma f├ícil e intuitiva con su display GY-06.", "en": "Control timing and temperature easily and intuitively with its GY-06 display." },
        "icon": "Cpu",
        "image": "/products/maquinas/normandia-i-plancha-termica-textil/04.png"
      },
      {
        "title": { "es": "Gu├¡as l├íser", "en": "Laser guides" },
        "description": { "es": "Ajusta la cruz del l├íser al mil├¡metro y evita impresiones fuera de lugar.", "en": "Set the laser crosshair with millimeter precision and avoid off-position prints." },
        "icon": "Target",
        "image": "/products/maquinas/normandia-i-plancha-termica-textil/05.png"
      },
      {
        "title": { "es": "Tan compacta como vers├ítil", "en": "Compact yet versatile" },
        "description": { "es": "Prensa neum├ítica de sobremesa para camisetas, art├¡culos deportivos, paneles fotogr├íficos, pancartas, cojines, alfombrillas y puzzles.", "en": "Desktop pneumatic press for T-shirts, sportswear, photo panels, banners, cushions, mousepads, and puzzles." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Tan suave como delicada", "en": "Smooth and delicate" },
        "description": { "es": "La presi├│n vertical y la silicona de los platos consiguen estampaciones uniformes y cuidadas.", "en": "Vertical pressure and silicone platens provide uniform and well-cared transfers." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Detalles que importan", "en": "Details that matter" },
        "description": { "es": "Incluye visor de presi├│n, bot├│n de emergencia, ventilador, filtro de aire y reguladores de velocidad para control total.", "en": "Includes pressure viewer, emergency button, fan, air filter, and speed regulators for full control." },
        "icon": "Settings"
      }
    ],
    "hotspots": [
      { "x": 81.7, "y": 9.7,  "title": { "es": "Ventilador", "en": "Fan" }, "description": { "es": "", "en": "" } },
      { "x": 45.6, "y": 20.8, "title": { "es": "Medidor de presi├│n y bot├│n de emergencia", "en": "Pressure gauge and emergency button" }, "description": { "es": "", "en": "" } },
      { "x": 81.0, "y": 21.9, "title": { "es": "Regulador de velocidad", "en": "Speed regulator" }, "description": { "es": "", "en": "" } },
      { "x": 51.1, "y": 27.6, "title": { "es": "Controlador digital GY-06", "en": "GY-06 digital controller" }, "description": { "es": "", "en": "" } },
      { "x": 70.8, "y": 31.1, "title": { "es": "Gu├¡as l├íser de ayuda", "en": "Laser positioning guides" }, "description": { "es": "", "en": "" } },
      { "x": 97.1, "y": 47.8, "title": { "es": "Filtro de aire", "en": "Air filter" }, "description": { "es": "", "en": "" } }
    ],
    "storyHeadline": { "es": "Dise├▒o Ergon├│mico", "en": "Redefining the workflow" },
    "storySegments": [
      {
        "title": { "es": "Comodidad total", "en": "Professional performance" },
        "description": {
          "es": "Normandia I est├í pensada para el bienestar del operador, haciendo que el proceso sea r├ípido y seguro.",
          "en": "Normandia I is designed to deliver consistent results and high productivity."
        },
        "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/1X3zCovLJzc?si=cT6yFeAXEuSJUmDv\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
      }
    ],
    
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Normand├¡a III Plancha T├®rmica Textil",
      "en": "Normandia III Heat Press",
      "pt": "Normandia III Prensa T├®rmica Textil",
      "it": "Normandia III Pressa Termica Tessile"
    },
    "description": {
      "es": "Si eres un profesional de la sublimaci├│n, entonces sabes lo importante que es tener una plancha t├®rmica de alta calidad que pueda sublimar una gran cantidad de productos y que se f├ícil de usar. Ah├¡ es donde entra nuestra plancha Normandia III, la herramienta perfecta para tus necesidades de sublimaci├│n.",
      "en": "Normandia III textile heat press built for advanced personalization in demanding production runs.",
      "pt": "Prensa t├®rmica t├¬xtil Normandia III criada para personaliza├º├úo avan├ºada em produ├º├úo exigente.",
      "it": "Pressa termica tessile Normandia III pensata per personalizzazione avanzata in produzioni impegnative."
    },
    "image": "/products/maquinas/normandia-iii-plancha-termica-textil/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Enfoque en productividad textil",
        "Control preciso para trabajos continuos",
        "Construcci├│n robusta para uso profesional"
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

    "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Neum├ítica", "en": "Pneumatic", "pt": "Pneum├ítica", "it": "Pneumatica" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Modelo Normandia III" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tipo neum├ítica" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Tipo de base", "en": "Base Type" }, "value": "Desplazable" },
      { "label": { "es": "Tama├▒o de resistencia", "en": "Heating Element Size" }, "value": "80 x 110cm" },
      { "label": { "es": "M├íximo grosor imprimible", "en": "Maximum Printable Thickness" }, "value": "65mm" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "5100W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "370 Kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "137 x 121 x 120 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-06" },
      { "label": { "es": "Precisi├│n del controlador", "en": "Controller Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0┬║-225┬║" }
    ],
    "benefits": [
      {
        "title": { "es": "El tama├▒o s├¡ importa", "en": "Size does matter" },
        "description": { "es": "Con su superficie de trabajo de 80 x 110 cm y potencia de 5100W, podr├ís sublimar desde prendas y toallas hasta bolsas, carcasas y productos de gran formato.", "en": "With its 80 x 110 cm work area and 5100W power, you can sublimate garments, towels, bags, cases, and large-format items." },
        "icon": "Ruler"
      },
      {
        "title": { "es": "Imagina y la Normandia III lo sublima", "en": "Imagine it, Normandia III sublimates it" },
        "description": { "es": "Incluye regulador de presi├│n para resultados consistentes, dos botones de seguridad y capacidad para sublimar objetos de hasta 65 mm de grosor.", "en": "It includes pressure regulation for consistent results, two safety buttons, and support for items up to 65 mm thick." },
        "icon": "Target"
      },
      {
        "title": { "es": "Donde otros fallan, Normandia III lo logra", "en": "Where others fail, Normandia III succeeds" },
        "description": { "es": "Desde prendas de vestir hasta tableros de aluminio, no hay nada que se le resista a esta plancha t├®rmica de uso profesional.", "en": "From garments to aluminum boards, this professional heat press handles what others cannot." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Modo eco y precalentamiento", "en": "Eco mode and preheating" },
        "description": { "es": "Optimiza tiempos de trabajo y consumo energ├®tico con sus funciones de modo eco y precalentamiento.", "en": "Optimize workflow timing and energy usage with eco mode and preheating functions." },
        "icon": "Leaf"
      },
      {
        "title": { "es": "Pantalla digital y programable", "en": "Digital and programmable display" },
        "description": { "es": "La pantalla digital y su configuraci├│n programable te ayudan a repetir par├ímetros con precisi├│n y mantener calidad constante.", "en": "The digital display and programmable settings help repeat parameters accurately and maintain consistent quality." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencia duradera", "en": "Durable heating element" },
        "description": { "es": "Su resistencia est├í dise├▒ada para soportar jornadas intensivas con estabilidad t├®rmica y alto rendimiento.", "en": "Its heating element is built for intensive schedules with thermal stability and high output." },
        "icon": "Gauge"
      }
    ],
    "hotspots": [
      { "x": 36.9, "y": 22.6, "title": { "es": "Bot├│n on/off", "en": "On/Off button" }, "description": { "es": "", "en": "" } },
      { "x": 58.7, "y": 23.9, "title": { "es": "Filtro de aire", "en": "Air filter" }, "description": { "es": "", "en": "" } },
      { "x": 41.5, "y": 24.2, "title": { "es": "Bot├│n de emergencia", "en": "Emergency button" }, "description": { "es": "", "en": "" } },
      { "x": 49.8, "y": 24.3, "title": { "es": "Pantalla digital", "en": "Digital display" }, "description": { "es": "", "en": "" } },
      { "x": 36.7, "y": 32.0, "title": { "es": "Bot├│n de activaci├│n", "en": "Activation button" }, "description": { "es": "", "en": "" } },
      { "x": 62.7, "y": 53.8, "title": { "es": "Difusor de calor", "en": "Heat diffuser" }, "description": { "es": "", "en": "" } },
      { "x": 53.1, "y": 67.2, "title": { "es": "Almohadilla", "en": "Pad" }, "description": { "es": "", "en": "" } },
      { "x": 36.3, "y": 83.6, "title": { "es": "Caj├│n extra├¡ble", "en": "Sliding drawer" }, "description": { "es": "", "en": "" } }
    ],
    
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Normand├¡a II Plancha T├®rmica Textil",
      "en": "Normandia II Heat Press",
      "pt": "Normandia II Prensa T├®rmica Textil",
      "it": "Normandia II Pressa Termica Tessile"
    },
    "description": {
      "es": "Si eres un profesional de la sublimaci├│n, sabes lo crucial que es contar con una plancha neum├ítica profesional de calidad superior, que pueda sublimar una amplia gama de productos de manera sencilla. Ah├¡ es donde entra en juego nuestra plancha Normadia II, la herramienta perfecta para todas tus necesidades de sublimaci├│n.",
      "en": "Normandia II textile heat press designed for stable personalization and consistent results.",
      "pt": "Prensa t├®rmica t├¬xtil Normandia II pensada para personaliza├º├úo est├ível e resultados consistentes.",
      "it": "Pressa termica tessile Normandia II pensata per personalizzazione stabile e risultati costanti."
    },
    "image": "/products/maquinas/normandia-ii-plancha-termica-textil/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Operaci├│n textil equilibrada",
        "Control fiable de par├ímetros",
        "Apta para producci├│n diaria"
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

    "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Neum├ítica", "en": "Pneumatic", "pt": "Pneum├ítica", "it": "Pneumatica" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Modelo Normandia II" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": "Tipo neum├ítica" },
      { "label": { "es": "Compresor", "en": "Compressor" }, "value": "No incluido" },
      { "label": { "es": "Modo de apertura", "en": "Opening Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Modo de cierre", "en": "Closing Mode" }, "value": "Autom├ítico" },
      { "label": { "es": "Tipo de resistencia", "en": "Heating Element Type" }, "value": "Fija" },
      { "label": { "es": "Tama├▒o de resistencia", "en": "Heating Element Size" }, "value": "80 x 100cm" },
      { "label": { "es": "M├íximo grosor imprimible", "en": "Maximum Printable Thickness" }, "value": "65mm" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "5100W" },
      { "label": { "es": "Peso", "en": "Weight" }, "value": "480 Kg" },
      { "label": { "es": "Dimensiones", "en": "Dimensions" }, "value": "137 x 121 x 120 cm" },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-06" },
      { "label": { "es": "Precisi├│n del controlador", "en": "Controller Precision" }, "value": "┬▒0.5%" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 mm seg" },
      { "label": { "es": "Rango de temperatura", "en": "Temperature Range" }, "value": "0┬║-225┬║" }
    ],
    "benefits": [
      {
        "title": { "es": "Tama├▒o sin limitaciones", "en": "Size without limits" },
        "description": { "es": "Con su generosa superficie de trabajo de 80 x 100 cm podr├ís sublimar desde camisetas y prendas deportivas hasta toallas, bolsas y carcasas sin dificultad.", "en": "Its generous 80 x 100 cm working area lets you sublimate everything from garments to towels, bags, and cases without difficulty." },
        "icon": "Ruler"
      },
      {
        "title": { "es": "Imag├¡nalo y la Normandia II lo sublimar├í", "en": "Imagine it, Normandia II sublimates it" },
        "description": { "es": "Incluye regulador de presi├│n y dos botones laterales de seguridad para una sublimaci├│n precisa y segura, incluso en objetos de hasta 65 mm de grosor.", "en": "Includes pressure regulation and two lateral safety buttons for precise, safe sublimation, even on items up to 65 mm thick." },
        "icon": "Target"
      },
      {
        "title": { "es": "Donde otros fracasan, la Normandia II triunfa", "en": "Where others fail, Normandia II succeeds" },
        "description": { "es": "Desde prendas de vestir hasta tableros de aluminio, esta plancha est├í preparada para una amplia gama de aplicaciones con uso profesional.", "en": "From garments to aluminum boards, this press is built for a broad range of professional applications." },
        "icon": "ShieldCheck"
      },
      {
        "title": { "es": "Modo eco y precalentamiento", "en": "Eco mode and preheating" },
        "description": { "es": "Optimiza tiempos y consumo en trabajos continuos gracias al modo eco y la funci├│n de precalentamiento.", "en": "Optimize timing and consumption in continuous jobs with eco mode and preheating." },
        "icon": "Leaf"
      },
      {
        "title": { "es": "Pantalla digital y programable", "en": "Digital and programmable display" },
        "description": { "es": "La pantalla digital y su programaci├│n te permiten repetir par├ímetros de trabajo con precisi├│n.", "en": "Its digital display and programmable controls let you repeat job settings accurately." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Resistencia duradera", "en": "Durable heating element" },
        "description": { "es": "Su resistencia est├í dise├▒ada para mantener estabilidad t├®rmica y rendimiento en jornadas exigentes.", "en": "Its heating element is designed for thermal stability and performance in demanding sessions." },
        "icon": "Gauge"
      }
    ],
    "hotspots": [
      { "x": 41.7, "y": 19.0, "title": { "es": "Bot├│n on/off", "en": "On/Off button" }, "description": { "es": "", "en": "" } },
      { "x": 36.9, "y": 21.8, "title": { "es": "Filtro de aire", "en": "Air filter" }, "description": { "es": "", "en": "" } },
      { "x": 58.7, "y": 24.7, "title": { "es": "Bot├│n de emergencia", "en": "Emergency button" }, "description": { "es": "", "en": "" } },
      { "x": 49.4, "y": 25.0, "title": { "es": "Pantalla digital", "en": "Digital display" }, "description": { "es": "", "en": "" } },
      { "x": 36.5, "y": 31.5, "title": { "es": "Bot├│n de activaci├│n", "en": "Activation button" }, "description": { "es": "", "en": "" } },
      { "x": 60.2, "y": 54.3, "title": { "es": "Difusor de calor", "en": "Heat diffuser" }, "description": { "es": "", "en": "" } },
      { "x": 52.9, "y": 66.5, "title": { "es": "Almohadilla", "en": "Pad" }, "description": { "es": "", "en": "" } },
      { "x": 36.5, "y": 85.4, "title": { "es": "Caj├│n extra├¡ble", "en": "Sliding drawer" }, "description": { "es": "", "en": "" } }
    ],
    
    "maintenanceTips": {
      "es": [
        "No apagues el compresor inmediatamente, la placa de calor est├í demasiado caliente.",
        "Si apagas el compresor, la placa de calor caliente se cerrar├í y presionar├í hasta la placa inferior, lo que quemar├¡a la almohadilla de algod├│n.",
        "Mant├®n el compresor durante unos minutos despu├®s dejar enfriar.",
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos.",
        "Verificaci├│n y ajuste de la presi├│n.",
        "Inspecci├│n y limpieza de los componentes internos.",
        "Verificaci├│n y calibraci├│n de la temperatura."
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
      "es": "Estambul prensa t├®rmica para espinilleras",
      "en": "Estambul shin guard heat press",
      "pt": "Estambul prensa para caneleiras",
      "it": "Estambul pressa per parastinchi"
    },
    "description": {
      "es": "Con tu nueva prensa t├®rmica para espinilleras Beinsen Estambul podr├ís sublimar sobre este material tan espec├¡fico y especial. Tu nueva compa├▒era incluye 3 platos base con sistema de intercambio r├ípido para que sea cual sea el tama├▒o de la espinillera puedas personalizarla.",
      "en": "With the Beinsen Estambul shin guard heat press you can sublimate on this specific and special material. It includes 3 base plates with a quick-change system so you can customize any shin guard regardless of its size.",
      "pt": "Com a tua nova prensa t├®rmica para caneleiras Beinsen Estambul poder├ís sublimar neste material t├úo espec├¡fico e especial. Inclui 3 pratos base com sistema de troca r├ípida para personalizar caneleiras de qualquer tamanho.",
      "it": "Con la tua nuova pressa termica per parastinchi Beinsen Estambul potrai sublimare su questo materiale cos├¼ specifico e speciale. Include 3 piastre base con sistema di cambio rapido per personalizzare qualsiasi parastinchi."
    },
    "image": "/products/maquinas/estambul-prensa-termica-para-espinilleras/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Compacta", "en": "Compact", "pt": "Compacta", "it": "Compatta" },
    "features": {
      "es": [
        "3 platos intercambiables: 205├ù171├ù218 mm / 114├ù132├ù179 mm / 97├ù115├ù115 mm",
        "Dise├▒o compacto, robusto y f├ícil de usar",
        "Controlador digital GY-04 con sistema de intercambio r├ípido"
      ],
      "en": [
        "3 interchangeable plates: 205├ù171├ù218 mm / 114├ù132├ù179 mm / 97├ù115├ù115 mm",
        "Compact, robust and easy-to-use design",
        "GY-04 digital controller with quick-change system"
      ],
      "pt": [
        "3 pratos intercambi├íveis: 205├ù171├ù218 mm / 114├ù132├ù179 mm / 97├ù115├ù115 mm",
        "Design compacto, robusto e f├ícil de usar",
        "Controlador digital GY-04 com sistema de troca r├ípida"
      ],
      "it": [
        "3 piastre intercambiabili: 205├ù171├ù218 mm / 114├ù132├ù179 mm / 97├ù115├ù115 mm",
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
      { "label": { "es": "Grosor m├íximo del personalizable", "en": "Max Customizable Thickness" }, "value": "ÔÇô" },
      { "label": { "es": "Modelo de display", "en": "Display Model" }, "value": "GY-04" },
      { "label": { "es": "T├íctil", "en": "Touch" }, "value": "Ô£ù" },
      { "label": { "es": "Memorias", "en": "Memories" }, "value": "ÔÇô" },
      { "label": { "es": "Rango del temporizador", "en": "Timer Range" }, "value": "0-999 seg." },
      { "label": { "es": "N├║mero de platos", "en": "Number of Plates" }, "value": "1" },
      { "label": { "es": "Tama├▒o del plato", "en": "Plate Size" }, "value": "205*171*218 mm/114*132*179 mm/97*115*115 mm" },
      { "label": { "es": "Platos intercambiables", "en": "Interchangeable Plates" }, "value": "Ô£ô" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "900W" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225┬║C" },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "220V" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "21Kg" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "25Kg" },
      { "label": { "es": "Tama├▒o de la m├íquina", "en": "Machine Size" }, "value": "36├ù31,4├ù37,2 cm" },
      { "label": { "es": "Tama├▒o del embalaje", "en": "Package Size" }, "value": "52x52x52cm" }
    ],
    "benefits": [
      {
        "title": { "es": "No habr├í espinillera que se te resista", "en": "No shin guard can resist it" },
        "description": { "es": "Con sus 3 platos de diferentes tama├▒os (205├ù171├ù218 mm / 114├ù132├ù179 mm / 97├ù115├ù115 mm) puedes personalizar cualquier espinillera del mercado, sin importar su tama├▒o o forma.", "en": "With its 3 different-sized plates (205├ù171├ù218 mm / 114├ù132├ù179 mm / 97├ù115├ù115 mm) you can customize any shin guard on the market, regardless of size or shape." },
        "icon": "Target",
        "image": "/products/maquinas/estambul-prensa-termica-para-espinilleras/03.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Compacta: ll├®vala a todas partes", "en": "Compact: take it anywhere" },
        "description": { "es": "Su dise├▒o compacto hace de Estambul la compa├▒era ideal para talleres con poco espacio o para llevarla a eventos y competiciones deportivas donde personalizas en el momento.", "en": "Its compact design makes Estambul the ideal companion for small workshops or for taking to sports events and competitions where you personalize on the spot." },
        "icon": "Move",
        "image": "/products/maquinas/estambul-prensa-termica-para-espinilleras/04.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Robusta y duradera", "en": "Robust and durable" },
        "description": { "es": "Construida para soportar jornadas continuas de producci├│n. Su estructura s├│lida garantiza resultados fiables sesi├│n tras sesi├│n.", "en": "Built to withstand continuous production sessions. Its solid structure guarantees reliable results session after session." },
        "icon": "ShieldCheck",
        "image": "/products/maquinas/estambul-prensa-termica-para-espinilleras/06.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Sencilla desde el primer uso", "en": "Simple from the very first use" },
        "description": { "es": "Utilizar Estambul te resultar├í tan f├ícil como el resto de la gama Beinsen. La placa calefactora y los platos permiten una colocaci├│n c├│moda y una transferencia del dise├▒o profesional desde el minuto uno.", "en": "Using Estambul is as easy as the rest of the Beinsen range. The heating plate and platens allow comfortable placement and professional design transfer from minute one." },
        "icon": "Settings",
        "image": "/products/maquinas/estambul-prensa-termica-para-espinilleras/02.png",
        "objectFit": "contain"
      },
      {
        "title": { "es": "Sistema de intercambio r├ípido de platos", "en": "Quick-change plate system" },
        "description": { "es": "Cambia entre los tres tama├▒os de plato en segundos sin herramientas. Adaptarte a cada espinillera es cuesti├│n de un momento, sin interrumpir el ritmo de producci├│n.", "en": "Switch between the three plate sizes in seconds without tools. Adapting to each shin guard takes just a moment, without interrupting production flow." },
        "icon": "Layers"
      },
      {
        "title": { "es": "Controlador digital GY-04", "en": "GY-04 digital controller" },
        "description": { "es": "Programa temperatura y tiempo con precisi├│n. Con un rango de 0-999 segundos y temperatura m├íxima de 225┬░C, tienes el control total sobre cada personalizaci├│n.", "en": "Program temperature and time precisely. With a 0-999 second range and maximum temperature of 225┬░C, you have full control over every customization." },
        "icon": "Cpu"
      }
    ],
    
    "hotspots": [
      { "x": 56.8, "y": 11.8, "title": { "es": "Asa ergon├│mica", "en": "Ergonomic handle" }, "description": { "es": "Permite abrir y cerrar la prensa con comodidad y precisi├│n en cada ciclo de sublimaci├│n.", "en": "Allows opening and closing the press comfortably and precisely in every sublimation cycle." } },
      { "x": 63.3, "y": 26.5, "title": { "es": "Sistema de ajuste de presi├│n", "en": "Pressure adjustment system" }, "description": { "es": "Regula la presi├│n para adaptarse al grosor y forma de cada espinillera, garantizando un contacto perfecto.", "en": "Adjusts pressure to suit the thickness and shape of each shin guard for perfect contact." } },
      { "x": 18.5, "y": 36.7, "title": { "es": "Perilla de ajuste", "en": "Adjustment knob" }, "description": { "es": "Facilita el posicionamiento y la sujeci├│n de la espinillera para asegurar un transfer preciso y sin desplazamientos.", "en": "Facilitates positioning and securing the shin guard for precise transfer without shifting." } },
      { "x": 79.7, "y": 36.9, "title": { "es": "Bot├│n de encendido", "en": "Power button" }, "description": { "es": "Enciende y apaga el equipo de forma r├ípida y segura.", "en": "Turns the machine on and off quickly and safely." } },
      { "x": 68.3, "y": 38.1, "title": { "es": "Controlador digital", "en": "Digital controller" }, "description": { "es": "Programa la temperatura y el tiempo de sublimaci├│n con precisi├│n para obtener resultados profesionales en cada espinillera.", "en": "Programs sublimation temperature and time precisely for professional results on every shin guard." } },
      { "x": 52.6, "y": 58.8, "title": { "es": "Plato intercambiable", "en": "Interchangeable plate" }, "description": { "es": "Sistema de cambio r├ípido de platos sin herramientas. Compatible con 3 tama├▒os para cubrir cualquier espinillera del mercado.", "en": "Tool-free quick-change plate system. Compatible with 3 sizes to cover any shin guard on the market." } }
    ],
    "maintenanceTips": {
      "es": [
        "Limpieza regular de las placas o superficies de sublimaci├│n.",
        "Reemplazo de l├íminas protectoras o revestimientos cuando presenten desgaste.",
        "Verificaci├│n y ajuste de la presi├│n antes de cada sesi├│n.",
        "Inspecci├│n y limpieza de los componentes internos peri├│dicamente.",
        "Verificaci├│n y calibraci├│n de la temperatura con term├│metro externo.",
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
      "es": "Felina Prensa Swing-Away El├®ctrica",
      "en": "Felina Electric Swing-Away Heat Press",
      "pt": "Felina Prensa Swing-Away El├®trica",
      "it": "Felina Pressa Swing-Away Elettrica"
    },
    "description": {
      "es": "Felina es una prensa de calor el├®ctrica de apertura giratoria (swing-away) de nivel profesional con pantalla t├íctil GY-13. Su sistema de apertura giratoria a 180┬░ maximiza el espacio de trabajo y facilita la carga y descarga de materiales, mientras que sus avanzados sistemas de seguridad ÔÇöprotecci├│n anti-pellizco, operaci├│n de doble mano y programaci├│n en dos etapasÔÇö la convierten en una m├íquina tan potente como segura.",
      "en": "Felina is a professional electric swing-away heat press with a GY-13 touch screen. Its 180┬░ swing-away opening maximizes workspace and simplifies material loading and unloading, while advanced safety systems ÔÇö pinch protection, two-hand operation, and two-stage programming ÔÇö make it as powerful as it is safe.",
      "pt": "Felina ├® uma prensa de calor el├®trica de abertura girat├│ria (swing-away) de n├¡vel profissional com ecr├ú t├ítil GY-13. A sua abertura girat├│ria a 180┬░ maximiza o espa├ºo de trabalho e facilita o carregamento e descarregamento de materiais, enquanto os sistemas avan├ºados de seguran├ºa a tornam t├úo potente quanto segura.",
      "it": "Felina ├¿ una pressa termica elettrica swing-away di livello professionale con touch screen GY-13. L'apertura girevole a 180┬░ massimizza lo spazio di lavoro e semplifica il carico e scarico dei materiali, mentre i sistemi avanzati di sicurezza la rendono potente quanto sicura."
    },
    "image": "/products/maquinas/felina-prensa-swing-away-electrica/01.png",
    "price": "Consultar PVP",
    "size": { "es": "Est├índar", "en": "Standard", "pt": "Padr├úo", "it": "Standard" },
    "features": {
      "es": [
        "Apertura giratoria swing-away 180┬░ con base de cambio r├ípido y deslizamiento",
        "Controlador t├íctil GY-13 con 3 memorias, contador de producci├│n y ajuste de presi├│n 0-8",
        "Protecci├│n anti-pellizco, operaci├│n de doble mano y parada de emergencia"
      ],
      "en": [
        "180┬░ swing-away opening with quick-change sliding base",
        "GY-13 touch screen controller with 3 memories, production counter and 0-8 pressure adjustment",
        "Pinch protection, two-hand operation and emergency stop"
      ],
      "pt": [
        "Abertura girat├│ria swing-away 180┬░ com base de mudan├ºa r├ípida e deslizamento",
        "Controlador t├ítil GY-13 com 3 mem├│rias, contador de produ├º├úo e ajuste de press├úo 0-8",
        "Prote├º├úo anti-aperto, opera├º├úo de duas m├úos e paragem de emerg├¬ncia"
      ],
      "it": [
        "Apertura girevole swing-away 180┬░ con base a cambio rapido e scorrimento",
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
    "category": { "es": "Textil", "en": "Textile", "pt": "T├¬xtil", "it": "Tessile" },
    "openingType": { "es": "Swing-Away El├®ctrica", "en": "Electric Swing-Away", "pt": "Swing-Away El├®trica", "it": "Swing-Away Elettrica" },
    "technicalSpecs": [
      { "label": { "es": "Modelo de plancha", "en": "Press Model" }, "value": "Felina" },
      { "label": { "es": "Tipo de plancha", "en": "Press Type" }, "value": { "es": "El├®ctrica, swing-away autom├ítico", "en": "Electric, automatic swing-away" } },
      { "label": { "es": "Tama├▒o de platina", "en": "Platen Size" }, "value": "40├ù50 cm / 40├ù60 cm (16\"├ù20\" / 16\"├ù24\")" },
      { "label": { "es": "Apertura de platina inferior", "en": "Lower platen opening" }, "value": { "es": "Cambio r├ípido y deslizamiento", "en": "Quick-change and sliding" } },
      { "label": { "es": "Controlador digital", "en": "Digital Controller" }, "value": "GY-13 (pantalla t├íctil)" },
      { "label": { "es": "Memorias de configuraci├│n", "en": "Settings memories" }, "value": "3" },
      { "label": { "es": "Ajuste de presi├│n", "en": "Pressure adjustment" }, "value": "0-8" },
      { "label": { "es": "Contador de producci├│n", "en": "Production counter" }, "value": { "es": "S├¡ (autom├ítico)", "en": "Yes (automatic)" } },
      { "label": { "es": "Grosor m├íximo imprimible", "en": "Max Printable Thickness" }, "value": "35 mm" },
      { "label": { "es": "Bot├│n de parada de emergencia", "en": "Emergency stop button" }, "value": { "es": "S├¡", "en": "Yes" } },
      { "label": { "es": "Voltaje", "en": "Voltage" }, "value": "120V / 220V" },
      { "label": { "es": "Potencia", "en": "Power" }, "value": "1.8 kW (120V) / 2 kW (220V)" },
      { "label": { "es": "Temporizador", "en": "Timer" }, "value": "0-999 seg." },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature" }, "value": "225 ┬░C" },
      { "label": { "es": "Dimensiones de embalaje", "en": "Packaging Dimensions" }, "value": "95├ù58├ù82 cm" },
      { "label": { "es": "Peso neto", "en": "Net Weight" }, "value": "95 kg (40├ù50) / 99 kg (40├ù60)" },
      { "label": { "es": "Peso bruto", "en": "Gross Weight" }, "value": "132.5 kg (40├ù50) / 136.5 kg (40├ù60)" }
    ],
    "benefits": [
      {
        "title": { "es": "Apertura giratoria 180┬░ para mayor comodidad", "en": "180┬░ swing-away opening for greater comfort" },
        "description": { "es": "La platina superior giratoria de 180┬░ maximiza el espacio de trabajo, lo que permite cargar y descargar materiales con total facilidad y eficiencia, reduciendo la fatiga en jornadas largas.", "en": "The 180┬░ swing-away upper platen maximizes workspace, making it easy to load and unload materials with total efficiency, reducing fatigue during long sessions." },
        "icon": "RotateCcw",
        "image": "/products/maquinas/felina-prensa-swing-away-electrica/02.png"
      },
      {
        "title": { "es": "Protecci├│n anti-pellizco inteligente", "en": "Smart pinch protection" },
        "description": { "es": "Los sensores inteligentes detectan obstrucciones e inmediatamente detienen y levantan la placa de calefacci├│n, protegiendo al operario y al material en todo momento.", "en": "Smart sensors detect obstructions and immediately stop and lift the heating plate, protecting the operator and materials at all times." },
        "icon": "ShieldCheck",
        "image": "/products/maquinas/felina-prensa-swing-away-electrica/03.png"
      },
      {
        "title": { "es": "Operaci├│n de doble mano para mayor seguridad", "en": "Two-hand operation for enhanced safety" },
        "description": { "es": "El dise├▒o ergon├│mico exige presiones simult├íneas en ambos mandos para activar la prensa, eliminando la posibilidad de activaci├│n accidental y garantizando un entorno de trabajo seguro.", "en": "The ergonomic design requires simultaneous pressure on both controls to activate the press, eliminating accidental activation and ensuring a safe working environment." },
        "icon": "Hand",
        "image": "/products/maquinas/felina-prensa-swing-away-electrica/04.png"
      },
      {
        "title": { "es": "Programaci├│n de transferencia en dos etapas", "en": "Two-stage transfer programming" },
        "description": { "es": "Incluye ciclos de precalentamiento y transferencia preprogramados para eliminar la humedad y fijar los dise├▒os a la perfecci├│n. Tambi├®n puedes omitir el precalentamiento para agilizar el proceso con materiales secos.", "en": "Includes preprogrammed preheating and transfer cycles to remove moisture and set designs perfectly. You can also skip preheating for faster processing with dry materials." },
        "icon": "Layers",
        "image": "/products/maquinas/felina-prensa-swing-away-electrica/01.png"
      },
      {
        "title": { "es": "Ajuste autom├ítico de presi├│n por material", "en": "Automatic pressure adjustment by material" },
        "description": { "es": "El sensor inteligente de presi├│n ajusta autom├íticamente la fuerza seg├║n el grosor del material, asegurando una distribuci├│n uniforme del calor para transferencias vibrantes y consistentes.", "en": "The smart pressure sensor automatically adjusts force based on material thickness, ensuring even heat distribution for vibrant and consistent transfers." },
        "icon": "Target"
      },
      {
        "title": { "es": "Controlador t├íctil GY-13 avanzado", "en": "Advanced GY-13 touch screen controller" },
        "description": { "es": "Gestiona todos los par├ímetros desde el panel t├íctil GY-13: guarda hasta 3 configuraciones, ajusta la presi├│n de 0 a 8 y controla el contador de producci├│n autom├ítico.", "en": "Manage all parameters from the GY-13 touch panel: save up to 3 settings, adjust pressure from 0 to 8, and control the automatic production counter." },
        "icon": "Cpu"
      },
      {
        "title": { "es": "Parada de emergencia con reinicio instant├íneo", "en": "Emergency stop with instant restart" },
        "description": { "es": "En caso de emergencia, el sistema detiene y levanta la platina al instante. La funci├│n de reinicio con un toque permite reanudar r├ípidamente el flujo de trabajo sin p├®rdida de configuraci├│n.", "en": "In an emergency, the system stops and lifts the platen instantly. The one-touch restart function lets you quickly resume workflow without losing settings." },
        "icon": "Zap"
      },
      {
        "title": { "es": "Base de cambio r├ípido y deslizante", "en": "Quick-change sliding base" },
        "description": { "es": "La platina inferior con sistema de cambio r├ípido y deslizamiento facilita la colocaci├│n precisa de prendas y materiales, aumentando la eficiencia y reduciendo errores de posicionamiento.", "en": "The lower platen with quick-change and sliding system makes precise garment and material placement easy, boosting efficiency and reducing positioning errors." },
        "icon": "ArrowRight"
      }
    ],
    "hotspots": [
      {
        "x": 79, "y": 24,
        "title": { "es": "Controlador t├íctil GY-13", "en": "GY-13 Touch Controller" },
        "description": { "es": "Panel t├íctil con 3 memorias de configuraci├│n, contador de producci├│n autom├ítico y ajuste de presi├│n 0-8. Temporizador 0-999 seg. y temperatura m├íxima de 225┬░C.", "en": "Touch panel with 3 configuration memories, automatic production counter and 0-8 pressure adjustment. Timer 0-999 sec. and maximum temperature of 225┬░C." }
      },
      {
        "x": 67, "y": 36,
        "title": { "es": "Bot├│n de activaci├│n (doble mano)", "en": "Activation button (two-hand)" },
        "description": { "es": "Parte del sistema de seguridad de doble mano: ambos botones deben pulsarse simult├íneamente para cerrar la prensa, garantizando que las manos del operario est├®n alejadas del ├írea de riesgo.", "en": "Part of the two-hand safety system: both buttons must be pressed simultaneously to close the press, keeping the operator's hands away from the hazard area." }
      },
      {
        "x": 62, "y": 39,
        "title": { "es": "Brazo swing-away 180┬░", "en": "180┬░ swing-away arm" },
        "description": { "es": "El brazo giratorio desplaza la platina superior 180┬░ hacia un lado, dejando el ├írea de trabajo completamente libre para colocar y retirar materiales con total comodidad.", "en": "The swing arm moves the upper platen 180┬░ to the side, leaving the work area completely free to place and remove materials with ease." }
      },
      {
        "x": 79, "y": 38,
        "title": { "es": "Bot├│n de emergencia", "en": "Emergency stop button" },
        "description": { "es": "Detiene y levanta la platina al instante en caso de emergencia. La funci├│n de reinicio con un toque permite reanudar el flujo de trabajo r├ípidamente sin p├®rdida de configuraci├│n.", "en": "Instantly stops and lifts the platen in an emergency. The one-touch restart function lets you quickly resume workflow without losing settings." }
      },
      {
        "x": 77, "y": 53,
        "title": { "es": "Ajuste de presi├│n 0-8", "en": "Pressure adjustment 0-8" },
        "description": { "es": "Regulaci├│n precisa de la presi├│n en 8 niveles para adaptarse al grosor de cada material. El sensor inteligente asegura una distribuci├│n uniforme del calor.", "en": "Precise pressure regulation in 8 levels to adapt to the thickness of each material. The smart sensor ensures even heat distribution." }
      },
      {
        "x": 80, "y": 64,
        "title": { "es": "Sistema de refrigeraci├│n", "en": "Cooling system" },
        "description": { "es": "Sistema de disipaci├│n de calor que mantiene la temperatura de los componentes internos dentro de los rangos seguros de operaci├│n, prolongando la vida ├║til de la m├íquina.", "en": "Heat dissipation system that keeps internal component temperatures within safe operating ranges, extending the machine's service life." }
      },
      {
        "x": 16, "y": 79,
        "title": { "es": "Placa calefactora 40├ù50 / 40├ù60 cm", "en": "40├ù50 / 40├ù60 cm heating plate" },
        "description": { "es": "Distribuci├│n de calor uniforme para sublimar materiales de hasta 35 mm de grosor. Disponible en dos tama├▒os para adaptarse a tus necesidades de producci├│n.", "en": "Uniform heat distribution for sublimating materials up to 35 mm thick. Available in two sizes to suit your production needs." }
      }
    ],
    
    "maintenanceTips": {
      "es": [
        "Limpieza regular de la placa calefactora y la platina inferior tras cada jornada.",
        "Reemplazo de l├íminas protectoras o revestimientos cuando presenten desgaste.",
        "Verificaci├│n y calibraci├│n de la temperatura con term├│metro externo peri├│dicamente.",
        "Comprobaci├│n de los sensores de protecci├│n anti-pellizco y del sistema de doble mano.",
        "Inspecci├│n visual del sistema el├®ctrico y del cableado en busca de da├▒os.",
        "Verificaci├│n del correcto funcionamiento del bot├│n de parada de emergencia."
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
    { label: { es: "Categor├¡a", en: "Category" }, value: plancha.category },
    { label: { es: "Sistema", en: "System" }, value: plancha.openingType || { es: "Manual", en: "Manual" } },
    { label: { es: "Formato", en: "Format" }, value: plancha.size }
  ];

  const storyPool = [
    { headline: "Precisi├│n y Control", title: "Acabados impecables", desc: "est├í dise├▒ada para garantizar estampados precisos con una facilidad de uso inigualable", enDesc: "is designed to guarantee precise prints with unmatched ease of use" },
    { headline: "Potencia Industrial", title: "M├íxima durabilidad", desc: "ha sido construida para soportar largas jornadas de trabajo sin comprometer la calidad", enDesc: "is built to withstand long workdays without compromising quality" },
    { headline: "Innovaci├│n T├®rmica", title: "Calor uniforme", desc: "asegura una distribuci├│n de temperatura perfecta para transferencias sin fallos", enDesc: "ensures perfect temperature distribution for flawless transfers" },
    { headline: "Versatilidad Sin L├¡mites", title: "Adaptable a todo", desc: "es la herramienta definitiva para quienes buscan diversificar su oferta de productos", enDesc: "is the ultimate tool for those looking to diversify their product offerings" },
    { headline: "Eficiencia Comprobada", title: "Rendimiento superior", desc: "ha sido optimizada para reducir los tiempos de ciclo y maximizar tu producci├│n diaria", enDesc: "has been optimized to reduce cycle times and maximize your daily production" },
    { headline: "Trabajo Inteligente", title: "Flujo continuo", desc: "te permite trabajar reduciendo el esfuerzo manual en cada ciclo de planchado", enDesc: "allows you to work by reducing manual effort in every pressing cycle" },
    { headline: "Dise├▒o Ergon├│mico", title: "Comodidad total", desc: "est├í pensada para el bienestar del operador, haciendo que el proceso sea r├ípido y seguro", enDesc: "is designed for operator comfort, making the process fast and safe" },
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
      "Limpia la superficie del plato despu├®s de cada jornada de trabajo.",
      "Verifica peri├│dicamente presi├│n, temperatura y estado del cableado."
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
      label: { es: "Ficha T├®cnica", en: "Technical Sheet" },
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

export const planchasData: Plancha[] = rawPlanchasData.map(enrichPlancha).filter(p => !p.hidden).sort((a, b) => getSortName(a).localeCompare(getSortName(b), 'es'));
export const allPlanchasData: Plancha[] = rawPlanchasData.map(enrichPlancha).sort((a, b) => getSortName(a).localeCompare(getSortName(b), 'es'));

const rawAccessoriesData: Accessory[] = [
  {
    "reference": "BTEFL155",
    "id": "lamina-teflon-38x38",
    "slug": "lamina-teflon-38x38",
    "name": {
      "es": "L├ímina de tefl├│n de 38x38 cm",
      "en": "38x38 cm Teflon sheet",
      "pt": "Folha de teflon de 38x38 cm",
      "it": "Foglio di teflon 38x38 cm"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/lamina-teflon-38x38/01.png",
    "description": {
      "es": "L├ímina de tefl├│n para proteger las planchas t├®rmicas. Esta delgada l├ímina de material aislante influye m├ís de lo que imaginamos tanto en los resultados como en la calidad de los productos sublimados y en la vida ├║til de las planchas t├®rmicas.",
      "en": "Teflon sheet to protect heat plates. This thin insulating material has more impact than we imagine on results, quality of sublimated products and lifespan of heat plates.",
      "pt": "Folha de teflon para proteger as planchas t├®rmicas. Esta fina l├ómina de material isolante influencia mais do que imaginamos nos resultados, na qualidade dos produtos sublimados e na vida ├║til das planchas t├®rmicas.",
      "it": "Foglio di teflon per proteggere le piastre termiche. Questo sottile materiale isolante ha pi├╣ impatto di quanto immaginiamo sui risultati, sulla qualit├á dei prodotti sublimati e sulla durata delle piastre termiche."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "L├ímina de tefl├│n PTFE / PTFE Teflon sheet" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "38 x 38 cm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "PTFE (Politetrafluoroetileno) / PTFE (Polytetrafluoroethylene)" },
      { "label": { "es": "Funci├│n principal", "en": "Main function", "pt": "Fun├º├úo principal", "it": "Funzione principale" }, "value": "Proteger planchas y prendas / Protect plates and garments" },
      { "label": { "es": "Beneficios", "en": "Benefits", "pt": "Benef├¡cios", "it": "Vantaggi" }, "value": "Evita manchas de tintas, previene quemaduras, extiende vida ├║til de planchas" }
    ]
  },
  {
    "reference": "BTEFL156",
    "id": "lamina-teflon-40x50",
    "slug": "lamina-teflon-40x50",
    "name": {
      "es": "L├ímina de tefl├│n de 40x50 cm",
      "en": "40x50 cm Teflon sheet",
      "pt": "Folha de teflon de 40x50 cm",
      "it": "Foglio di teflon 40x50 cm"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/lamina-teflon-40x50/01.png",
    "description": {
      "es": "L├ímina de tefl├│n para proteger las planchas t├®rmicas. Esta delgada l├ímina de material aislante influye m├ís de lo que imaginamos tanto en los resultados como en la calidad de los productos sublimados y en la vida ├║til de las planchas t├®rmicas.",
      "en": "Teflon sheet to protect heat plates. This thin insulating material has more impact than we imagine on results, quality of sublimated products and lifespan of heat plates.",
      "pt": "Folha de teflon para proteger as planchas t├®rmicas. Esta fina l├ómina de material isolante influencia mais do que imaginamos nos resultados, na qualidade dos produtos sublimados e na vida ├║til das planchas t├®rmicas.",
      "it": "Foglio di teflon per proteggere le piastre termiche. Questo sottile materiale isolante ha pi├╣ impatto di quanto immaginiamo sui risultati, sulla qualit├á dei prodotti sublimati e sulla durata delle piastre termiche."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "L├ímina de tefl├│n PTFE / PTFE Teflon sheet" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "40 x 50 cm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "PTFE (Politetrafluoroetileno) / PTFE (Polytetrafluoroethylene)" },
      { "label": { "es": "Funci├│n principal", "en": "Main function", "pt": "Fun├º├úo principal", "it": "Funzione principale" }, "value": "Proteger planchas y prendas / Protect plates and garments" },
      { "label": { "es": "Beneficios", "en": "Benefits", "pt": "Benef├¡cios", "it": "Vantaggi" }, "value": "Evita manchas de tintas, previene quemaduras, extiende vida ├║til de planchas" }
    ]
  },
  {
    "reference": "REPBEIRES11B",
    "id": "resistencia-tazas-11oz-b",
    "slug": "resistencia-tazas-11oz-b",
    "name": {
      "es": "Resistencia cil├¡ndrica para tazas de 11oz tipo B",
      "en": "Cylindrical heating element for 11oz mugs type B",
      "pt": "Resist├¬ncia cil├¡ndrica para canecas de 11oz tipo B",
      "it": "Resistenza cilindrica per tazze da 11oz tipo B"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-tazas-11oz-b/01.png",
    "description": {
      "es": "Para planchas de tazas Beinsen , ya sea como repuesto o accesorio, podr├ís personalizar tazas de 11 onzas con nuestra resistencia. Solo necesitas apretar unos tornillos y enchufar el conector a la plancha, ┬íListo, ya tienes conectada tu resistencia para empezar a funcionar con ella!. Recuerda dejarla unos minutos calentando en el primer uso.",
      "en": "For Beinsen mug presses, whether as a spare part or accessory, you can personalize 11-ounce mugs with our heating element. Just tighten some screws and plug the connector into the press. Remember to let it heat up for a few minutes on first use.",
      "pt": "Para prensas de canecas Beinsen, seja como pe├ºa de reposi├º├úo ou acess├│rio, pode personalizar canecas de 11 on├ºas com nossa resist├¬ncia. Lembre-se de deix├í-la aquecer por alguns minutos na primeira utiliza├º├úo.",
      "it": "Per le presse per tazze Beinsen, come pezzo di ricambio o accessorio, puoi personalizzare tazze da 11 once con la nostra resistenza. Ricordati di lasciarla riscaldare per qualche minuto al primo utilizzo."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "B (Conector hembra flotante / Floating female connector)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Alina, Aruba, Barein, Sicilia, Maine, Clara, Sore, Barahona" }
    ]
  },
  {
    "reference": "PLAACCRBE",
    "id": "resistencia-tazas-6-10oz",
    "slug": "resistencia-tazas-6-10oz",
    "name": {
      "es": "Resistencia cil├¡ndrica para tazas de 6-10oz",
      "en": "Cylindrical heating element for 6-10oz mugs",
      "pt": "Resist├¬ncia cil├¡ndrica para canecas de 6-10oz",
      "it": "Resistenza cilindrica per tazze da 6-10oz"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-tazas-6-10oz/13cm._2.png",
    "description": {
      "es": "Para planchas de tazas Beinsen , ya sea como repuesto o accesorio, podr├ís personalizar tazas de 6 a 10 onzas con nuestra resistencia. Solo necesitas apretar unos tornillos y enchufar el conector a la plancha, ┬íListo, ya tienes conectada tu resistencia para empezar a funcionar con ella!. Recuerda dejarla unos minutos calentando en el primer uso.",
      "en": "For Beinsen mug presses, whether as a spare part or accessory, you can personalize 6 to 10-ounce mugs with our heating element. Just tighten some screws and plug the connector into the press. Remember to let it heat up for a few minutes on first use.",
      "pt": "Para prensas de canecas Beinsen, seja como pe├ºa de reposi├º├úo ou acess├│rio, pode personalizar canecas de 6 a 10 on├ºas com nossa resist├¬ncia. Lembre-se de deix├í-la aquecer por alguns minutos na primeira utiliza├º├úo.",
      "it": "Per le presse per tazze Beinsen, come pezzo di ricambio o accessorio, puoi personalizzare tazze da 6 a 10 once con la nostra resistenza. Ricordati di lasciarla riscaldare per qualche minuto al primo utilizzo."
    },
    "technicalSpecs": [
      { "label": { "es": "Capacidad", "en": "Capacity", "pt": "Capacidade", "it": "Capacit├á" }, "value": "6 a 10 onzas" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Alina, Aruba, Barahona, Barein, Sore, Maine" }
    ]
  },
  {
    "reference": "REPBEIRES11A",
    "id": "resistencia-tazas-11oz-a",
    "slug": "resistencia-tazas-11oz-a",
    "name": {
      "es": "Resistencia cil├¡ndrica para tazas de 11oz tipo A",
      "en": "Cylindrical heating element for 11oz mugs type A",
      "pt": "Resist├¬ncia cil├¡ndrica para canecas de 11oz tipo A",
      "it": "Resistenza cilindrica per tazze da 11oz tipo A"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-tazas-11oz-a/01.png",
    "description": {
      "es": "Para planchas de tazas Beinsen , ya sea como repuesto o accesorio, podr├ís personalizar tazas de 11 onzas con nuestra resistencia. Solo necesitas apretar unos tornillos y enchufar el conector a la plancha, ┬íListo, ya tienes conectada tu resistencia para empezar a funcionar con ella!. Recuerda dejarla unos minutos calentando en el primer uso.",
      "en": "For Beinsen mug presses, whether as a spare part or accessory, you can personalize 11-ounce mugs with our heating element. Just tighten some screws and plug the connector into the press. Remember to let it heat up for a few minutes on first use.",
      "pt": "Para prensas de canecas Beinsen, seja como pe├ºa de reposi├º├úo ou acess├│rio, pode personalizar canecas de 11 on├ºas com nossa resist├¬ncia. Lembre-se de deix├í-la aquecer por alguns minutos na primeira utiliza├º├úo.",
      "it": "Per le presse per tazze Beinsen, come pezzo di ricambio o accessorio, puoi personalizzare tazze da 11 once con la nostra resistenza. Ricordati di lasciarla riscaldare per qualche minuto al primo utilizzo."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "A (Conector macho / Male connector)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Sore, Andra" }
    ]
  },
  {
    "reference": "REPBEIRES17C",
    "id": "resistencia-tazas-conicas-17oz",
    "slug": "resistencia-tazas-conicas-17oz",
    "name": {
      "es": "Resistencia para tazas C├│nicas de 17oz",
      "en": "17oz Conical mug heating element",
      "pt": "Resist├¬ncia para canecas c├│nicas de 17oz",
      "it": "Resistenza per tazze coniche da 17oz"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-tazas-conicas-17oz/01.png",
    "description": {
      "es": "Para planchas de tazas Beinsen , ya sea como repuesto o accesorio, podr├ís personalizar tazas c├│nicas de 17 onzas con nuestra resistencia. Solo necesitas apretar unos tornillos y enchufar el conector a la plancha, ┬íListo, ya tienes conectada tu resistencia para empezar a funcionar con ella!. Recuerda dejarla unos minutos calentando en el primer uso.",
      "en": "For Beinsen mug presses, whether as a spare part or accessory, you can personalize 17-ounce conical mugs with our heating element. Just tighten some screws and plug the connector into the press. Remember to let it heat up for a few minutes on first use.",
      "pt": "Para prensas de canecas Beinsen, seja como pe├ºa de reposi├º├úo ou acess├│rio, pode personalizar canecas c├│nicas de 17 on├ºas com nossa resist├¬ncia. Lembre-se de deix├í-la aquecer por alguns minutos na primeira utiliza├º├úo.",
      "it": "Per le presse per tazze Beinsen, come pezzo di ricambio o accessorio, puoi personalizzare tazze coniche da 17 once con la nostra resistenza. Ricordati di lasciarla riscaldare per qualche minuto al primo utilizzo."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "16.5cm largo / 17oz" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Alina, Sicilia, Aruba, Maine" }
    ]
  },
  {
    "reference": "REPBEIRSBMHB",
    "id": "resistencia-doble-taza-11-15oz",
    "slug": "resistencia-doble-taza-11-15oz",
    "name": {
      "es": "Resistencia cil├¡ndrica para 2 tazas de 11oz-15oz",
      "en": "Cylindrical heating element for 2 mugs 11oz-15oz",
      "pt": "Resist├¬ncia cil├¡ndrica para 2 canecas de 11oz-15oz",
      "it": "Resistenza cilindrica per 2 tazze 11oz-15oz"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-doble-taza-11-15oz/01.png",
    "description": {
      "es": "Ampl├¡a tus capacidades de personalizaci├│n en esta resistencia para tazas para planchas transfer Beinsen. Este modelo est├í especialmente ideado para sublimar a la vez dos tazas de 11 onzas de capacidad, aunque seguro que le encuentras m├║ltiples utilidades gracias a su tama├▒o.",
      "en": "Expand your personalization capabilities with this mug heating element for Beinsen transfer presses. This model is specially designed to sublimate two 11 ounce mugs at the same time, although surely you will find multiple uses thanks to its size.",
      "pt": "Expanda suas capacidades de personaliza├º├úo nesta resist├¬ncia para canecas para prensas de transfer├¬ncia Beinsen. Especialmente projetado para sublimar duas canecas de 11 on├ºas ao mesmo tempo.",
      "it": "Espandi le tue capacit├á di personalizzazione con questa resistenza per tazze per le presse transfer Beinsen. Appositamente progettato per sublimare due tazze da 11 once contemporaneamente."
    },
    "technicalSpecs": [
      { "label": { "es": "Altura", "en": "Height", "pt": "Altura", "it": "Altezza" }, "value": "22 cm" },
      { "label": { "es": "Di├ímetro", "en": "Diameter", "pt": "Di├ómetro", "it": "Diametro" }, "value": "7.5 - 10 cm" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Alina, Sicilia, Maine, Barahona" }
    ]
  },
  {
    "reference": "90004029",
    "id": "plato-gorras-beinsen-riad",
    "slug": "plato-gorras-beinsen-riad",
    "name": {
      "es": "Plato para gorras para Beinsen Riad",
      "en": "Cap plate for Beinsen Riad",
      "pt": "Prato para bon├®s para Beinsen Riad",
      "it": "Piastra per cappellini per Beinsen Riad"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-gorras-beinsen-riad/01.png",
    "description": {
      "es": "Optimiza tu prensa t├®rmica modelo Beinsen Riad con nuestro plato inferior para gorras. Dise├▒ado espec├¡ficamente para este modelo, nuestro plato inferior intercambiable te permite adaptar tu prensa t├®rmica a diferentes tama├▒os de productos. Sea cual sea el tama├▒o que necesitas, nuestro plato inferior intercambiable te ofrece versatilidad y facilidad de uso. Fabricado con materiales de alta calidad, garantiza una distribuci├│n uniforme del calor y resultados de sublimaci├│n precisos. Mejora tu experiencia de personalizaci├│n con nuestro plato inferior intercambiable para la prensa t├®rmica Beinsen Riad. ┬íAprovecha al m├íximo tu equipo y crea productos personalizados de calidad excepcional!",
      "en": "Optimize your Beinsen Riad heat press with our lower cap plate. Specifically designed for this model, our interchangeable lower plate allows you to adapt your heat press to different product sizes. Manufactured with high quality materials, it guarantees uniform heat distribution and precise sublimation results.",
      "pt": "Otimize a sua prensa t├®rmica modelo Beinsen Riad com nosso prato inferior para bon├®s. Projetado especificamente para este modelo, nosso prato inferior intercambi├ível permite adaptar a sua prensa t├®rmica a diferentes tamanhos de produtos. Fabricado com materiais de alta qualidade para garantir distribui├º├úo uniforme e resultados precisos.",
      "it": "Ottimizza la tua pressa termica modello Beinsen Riad con la nostra piastra inferiore per cappellini. Progettata specificatamente per questo modello, la nostra piastra inferiore intercambiabile ti consente di adattare la tua pressa termica a diverse dimensioni di prodotti."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Riad, Pocola" }
    ]
  },
  {
    "reference": "90005119",
    "id": "resistencia-15x20-beinsen-riad",
    "slug": "resistencia-15x20-beinsen-riad",
    "name": {
      "es": "Resistencia de 15x20cm para plancha Beinsen Riad",
      "en": "15x20cm heating element for Beinsen Riad press",
      "pt": "Resist├¬ncia de 15x20cm para prensa Beinsen Riad",
      "it": "Resistenza 15x20cm per pressa Beinsen Riad"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-15x20-beinsen-riad/01.png",
    "description": {
      "es": "Resistencia de 15x20cm. para prensa t├®rmica de etiquetas y gorras Beinsen Riad. Permite cambiar el m├│dulo de gorras a un plato plano peque├▒o ideal para etiquetas o dise├▒os en bolsillos.",
      "en": "15x20cm heating element for Beinsen Riad label and cap heat press. Allows changing the cap module to a small flat plate ideal for labels or pocket designs.",
      "pt": "Resist├¬ncia de 15x20cm. para prensa t├®rmica de etiquetas e bon├®s Beinsen Riad. Ideal para logotipos e designs em bolsos.",
      "it": "Resistenza 15x20cm. per pressa termica per etichette e cappellini Beinsen Riad. Ideale per loghi e design su tasche."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Riad, Gante" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "15 x 20 cm" }
    ]
  },
  {
    "reference": "90006134",
    "id": "resistencia-gorras-beinsen-riad",
    "slug": "resistencia-gorras-beinsen-riad",
    "name": {
      "es": "Resistencia para gorras para Beinsen Riad",
      "en": "Cap heating element for Beinsen Riad",
      "pt": "Resist├¬ncia para bon├®s para Beinsen Riad",
      "it": "Resistenza per cappellini per Beinsen Riad"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-gorras-beinsen-riad/01.png",
    "description": {
      "es": "Resistencia para sublimar gorras para prensa t├®rmica Beinsen Riad.",
      "en": "Cap sublimation heating element for Beinsen Riad heat press.",
      "pt": "Resist├¬ncia para sublimar bon├®s para prensa t├®rmica Beinsen Riad.",
      "it": "Resistenza per sublimare cappellini per pressa termica Beinsen Riad."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Riad, Pocola" }
    ]
  },
  {
    "reference": "90006380",
    "id": "plato-gorras-beinsen-obrei",
    "slug": "plato-gorras-beinsen-obrei",
    "name": {
      "es": "Plato para gorras para Beinsen Obrei",
      "en": "Cap plate for Beinsen Obrei",
      "pt": "Prato para bon├®s para Beinsen Obrei",
      "it": "Piastra per cappellini per Beinsen Obrei"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-gorras-beinsen-obrei/01.png",
    "description": {
      "es": "Optimiza tu prensa t├®rmica modelo Beinsen Obrei con nuestro plato inferior para gorras. Dise├▒ado espec├¡ficamente para este modelo, nuestro plato inferior intercambiable te permite adaptar tu prensa t├®rmica a diferentes tama├▒os de productos. Sea cual sea el tama├▒o que necesitas, nuestro plato inferior intercambiable te ofrece versatilidad y facilidad de uso. Fabricado con materiales de alta calidad, garantiza una distribuci├│n uniforme del calor y resultados de sublimaci├│n precisos. Mejora tu experiencia de personalizaci├│n con nuestro plato inferior intercambiable para la prensa t├®rmica Beinsen Obrei. ┬íAprovecha al m├íximo tu equipo y crea productos personalizados de calidad excepcional!",
      "en": "Optimize your Beinsen Obrei heat press with our lower cap plate. Specifically designed for this model, our interchangeable lower plate allows you to adapt your heat press to different product sizes. Manufactured with high quality materials, it guarantees uniform heat distribution and precise sublimation results.",
      "pt": "Otimize a sua prensa t├®rmica modelo Beinsen Obrei com nosso prato inferior para bon├®s. Projetado especificamente para este modelo, nosso prato inferior intercambi├ível permite adaptar a sua prensa t├®rmica a diferentes tamanhos de produtos. Fabricado com materiais de alta qualidade para garantir distribui├º├úo uniforme e resultados precisos.",
      "it": "Ottimizza la tua pressa termica modello Beinsen Obrei con la nostra piastra inferiore per cappellini. Progettata specificatamente per questo modello, la nostra piastra inferiore intercambiabile ti consente di adattare la tua pressa termica a diverse dimensioni di prodotti."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Obrei" }
    ]
  },
  {
    "reference": "PLAACRGOR",
    "id": "resistencia-gorras-combo-beinsen",
    "slug": "resistencia-gorras-combo-beinsen",
    "name": {
      "es": "Resistencia para gorras para plancha combo Beinsen",
      "en": "Cap heating element for Beinsen combo press",
      "pt": "Resist├¬ncia para bon├®s para prensa combo Beinsen",
      "it": "Resistenza per cappellini per pressa combo Beinsen"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-gorras-combo-beinsen/01.png",
    "description": {
      "es": "Resistencia de calor para gorras para plancha Combo de 1┬¬ generaci├│n. Pieza de repuesto de metal. Superficie aproximada de planchado: 120 x 70 mm. Medidas del cable de conexi├│n: 310 mm de largo.",
      "en": "Cap heating element for 1st generation Combo heat press. Metal replacement part. Approximate ironing surface: 120 x 70 mm. Connection cable measurements: 310 mm long.",
      "pt": "Resist├¬ncia de calor para bon├®s para prensa Combo de 1┬¬ gera├º├úo. Pe├ºa de reposi├º├úo de metal. Superf├¡cie de engomadoria aproximada: 120 x 70 mm. Medidas do cabo de liga├º├úo: 310 mm de comprimento.",
      "it": "Resistenza di calore per cappellini per pressa Combo di 1┬¬ generazione. Pezzo di ricambio in metallo. Superficie di stiratura approssimativa: 120 x 70 mm. Misure cavo di collegamento: 310 mm di lunghezza."
    },
    "technicalSpecs": [
      { "label": { "es": "Medidas", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "122x150x100mm" },
      { "label": { "es": "Potencia", "en": "Power", "pt": "Pot├¬ncia", "it": "Potenza" }, "value": "300 W (220V)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Jamaica" }
    ]
  },
  {
    "reference": "90005081",
    "id": "resistencia-gorras-beinsen-obrei",
    "slug": "resistencia-gorras-beinsen-obrei",
    "name": {
      "es": "Resistencia para gorras para plancha Beinsen Obrei",
      "en": "Cap heating element for Beinsen Obrei press",
      "pt": "Resist├¬ncia para bon├®s para prensa Beinsen Obrei",
      "it": "Resistenza per cappellini per pressa Beinsen Obrei"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-gorras-beinsen-obrei/02.png",
    "description": {
      "es": "Resistencia de calor para gorras para plancha Beinsen Obrei. Pieza de repuesto compuesta de metal. Superficie aproximada de planchado: 120 x 70 mm.",
      "en": "Cap heating element for Beinsen Obrei heat press. Metal replacement part. Approximate ironing surface: 120 x 70 mm.",
      "pt": "Resist├¬ncia de calor para bon├®s para prensa Beinsen Obrei. Pe├ºa de reposi├º├úo de metal. Superf├¡cie de engomadoria aproximada: 120 x 70 mm.",
      "it": "Resistenza di calore per cappellini per pressa Beinsen Obrei. Pezzo di ricambio in metallo. Superficie di stiratura approssimativa: 120 x 70 mm."
    },
    "technicalSpecs": [
      { "label": { "es": "Medidas", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "122x150x100mm" },
      { "label": { "es": "Potencia", "en": "Power", "pt": "Pot├¬ncia", "it": "Potenza" }, "value": "300 W (220V)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Obrei" }
    ]
  },
  {
    "reference": "REPBEIRESPL1",
    "id": "resistencia-15x15-beinsen-obrei",
    "slug": "resistencia-15x15-beinsen-obrei",
    "name": {
      "es": "Resistencia de 15x15cm para plancha Beinsen Obrei",
      "en": "15x15cm heating element for Beinsen Obrei press",
      "pt": "Resist├¬ncia de 15x15cm para prensa Beinsen Obrei",
      "it": "Resistenza 15x15cm per pressa Beinsen Obrei"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-15x15-beinsen-obrei/01.png",
    "description": {
      "es": "Resistencia de 15x15cm. para prensa t├®rmica Beinsen Obrei.",
      "en": "15x15cm heating element for Beinsen Obrei heat press.",
      "pt": "Resist├¬ncia de 15x15cm. para prensa t├®rmica Beinsen Obrei.",
      "it": "Resistenza 15x15cm. per pressa termica Beinsen Obrei."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "15 x 15 cm" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Obrei" }
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
    "image": "/products/accesorios/plato-15x20-beinsen-riad/01.png",
    "description": {
      "es": "Optimiza tu prensa t├®rmica modelo Beinsen Riad con nuestro plato inferior de 15x20cm. Dise├▒ado espec├¡ficamente para este modelo, nuestro plato inferior intercambiable te permite adaptar tu prensa t├®rmica a diferentes tama├▒os de productos. Sea cual sea el tama├▒o que necesitas, nuestro plato inferior intercambiable te ofrece versatilidad y facilidad de uso. Fabricado con materiales de alta calidad, garantiza una distribuci├│n uniforme del calor y resultados de sublimaci├│n precisos. Mejora tu experiencia de personalizaci├│n con nuestro plato inferior intercambiable para la prensa t├®rmica Beinsen Riad. ┬íAprovecha al m├íximo tu equipo y crea productos personalizados de calidad excepcional!",
      "en": "Optimize your Beinsen Riad heat press with our 15x20cm lower plate. Specifically designed for this model, our interchangeable lower plate allows you to adapt your heat press to different product sizes.",
      "pt": "Otimize a sua prensa t├®rmica modelo Beinsen Riad com nosso prato inferior de 15x20cm. Projetado especificamente para este modelo, nosso prato inferior intercambi├ível permite adaptar a sua prensa t├®rmica a diferentes tamanhos de produtos.",
      "it": "Ottimizza la tua pressa termica modello Beinsen Riad con la nostra piastra inferiore da 15x20cm. Progettata specificatamente per questo modello, la nostra piastra inferiore intercambiabile ti consente di adattare la tua pressa termica a diverse dimensioni di prodotti."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Riad, Gante" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "15 x 20 cm" }
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
    "image": "/products/accesorios/plato-base-15x15-beinsen-obrei/01.png",
    "description": {
      "es": "Plato base de 15x15 cm. para prensa t├®rmica Beinsen Obrei. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa.",
      "en": "15x15 cm base plate for Beinsen Obrei heat press. Made of tough, high-quality materials to ensure uniform and precise application.",
      "pt": "Prato base de 15x15 cm para prensa t├®rmica Beinsen Obrei. Fabricado com materiais resistentes e de alta qualidade para garantir uma aplica├º├úo uniforme e precisa.",
      "it": "Piastra base 15x15 cm per pressa termica Beinsen Obrei. Fabbricata con materiali resistenti e di alta qualit├á per garantire un'applicazione uniforme e precisa."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Obrei" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "15 x 15 cm" }
    ]
  },
  {
    "reference": "90020103",
    "id": "plato-intercambiable-18x18-barbados",
    "slug": "plato-intercambiable-18x18-barbados",
    "name": {
      "es": "Plato intercambiable de 18x18cm para Beinsen Barbados",
      "en": "18x18cm interchangeable plate for Beinsen Barbados",
      "pt": "Prato intercambi├ível de 18x18cm para Beinsen Barbados",
      "it": "Piastra intercambiabile 18x18cm per Beinsen Barbados"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-intercambiable-18x18-barbados/01.png",
    "description": {
      "es": "Plato base intercambiable de 18 x 18 cm para tu plancha transfer Beinsen Barbados. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Perfecto para logos y peque├▒os dise├▒os.",
      "en": "Interchangeable 18 x 18 cm base plate for your Beinsen Barbados transfer press. Made of tough, high-quality materials to ensure uniform and precise application. Perfect for logos and small designs.",
      "pt": "Prato base intercambi├ível de 18 x 18 cm para a sua prensa de transfer├¬ncia Beinsen Barbados. Fabricado com materiais resistentes e de alta qualidade para garantir uma aplica├º├úo uniforme e precisa. Perfeito para log├│tipos e designs pequenos.",
      "it": "Piastra base intercambiabile da 18 x 18 cm per la tua pressa transfer Beinsen Barbados. Fabbricata con materiali resistenti e di alta qualit├á per garantire un'applicazione uniforme e precisa. Perfetta per loghi e piccoli disegni."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Barbados" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "18 x 18 cm" }
    ]
  },
  {
    "reference": "90020104",
    "id": "plato-intercambiable-redondo-24-barbados",
    "slug": "plato-intercambiable-redondo-24-barbados",
    "name": {
      "es": "Plato intercambiable redondo de 24cm para Beinsen Barbados",
      "en": "24cm round interchangeable plate for Beinsen Barbados",
      "pt": "Prato intercambi├ível redondo de 24cm para Beinsen Barbados",
      "it": "Piastra intercambiabile tonda 24cm per Beinsen Barbados"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-intercambiable-redondo-24-barbados/01.png",
    "description": {
      "es": "Plato base redondo de 24cm de di├ímetro para tu plancha transfer Beinsen Barbados. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Perfecto para platos, cojines y dise├▒os circulares.",
      "en": "24cm diameter round base plate for your Beinsen Barbados transfer press. Made of tough, high-quality materials to ensure uniform and precise application. Perfect for plates, cushions and circular designs.",
      "pt": "Prato base redondo de 24cm de di├ómetro para a sua prensa de transfer├¬ncia Beinsen Barbados. Fabricado com materiais resistentes e de alta qualidade para garantir uma aplica├º├úo uniforme e precisa. Perfeito para pratos, almofadas e designs circulares.",
      "it": "Piastra base rotonda da 24 cm di diametro per la tua pressa transfer Beinsen Barbados. Fabbricata con materiali resistenti e di alta qualit├á per garantire un'applicazione uniforme e precisa. Perfetta per piatti, cuscini e disegni circolari."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Barbados" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "24 cm di├ímetro" }
    ]
  },
  {
    "reference": "90020107",
    "id": "plato-intercambiable-zapatillas-barbados",
    "slug": "plato-intercambiable-zapatillas-barbados",
    "name": {
      "es": "Plato intercambiable para zapatillas para Barbados",
      "en": "Interchangeable shoe plate for Barbados",
      "pt": "Prato intercambi├ível para sapatilhas para Barbados",
      "it": "Piastra intercambiabile per scarpe per Barbados"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-intercambiable-zapatillas-barbados/01.png",
    "description": {
      "es": "Plato base para zapatillas para tu plancha transfer Beinsen Barbados. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Si te dedicas a la personalizaci├│n de productos, un plato para zapatillas puede ser una excelente inversi├│n para ampliar tu cat├ílogo y atraer m├ís clientes.",
      "en": "Shoe base plate for your Beinsen Barbados transfer press. Made of tough, high-quality materials to ensure uniform and precise application. If you personalize products, a shoe plate can be an excellent investment to expand your catalog and attract more customers.",
      "pt": "Prato base para sapatilhas para a sua prensa de transfer├¬ncia Beinsen Barbados. Fabricado com materiais resistentes e de alta qualidade para garantir uma aplica├º├úo uniforme e precisa. Se voc├¬ personaliza produtos, um prato para sapatilhas pode ser uma excelente expans├úo de cat├ílogo.",
      "it": "Piastra base per scarpe per la tua pressa transfer Beinsen Barbados. Fabbricata con materiali resistenti e di alta qualit├á per garantire un'applicazione uniforme e precisa. Se personalizzi prodotti, una piastra per scarpe ├¿ un eccellente investimento."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Barbados" }
    ]
  },
  {
    "reference": "90020100",
    "id": "plato-intercambiable-18x38-barbados",
    "slug": "plato-intercambiable-18x38-barbados",
    "name": {
      "es": "Plato intercambiable de 18x38cm para Beinsen Barbados",
      "en": "18x38cm interchangeable plate for Beinsen Barbados",
      "pt": "Prato intercambi├ível de 18x38cm para Beinsen Barbados",
      "it": "Piastra intercambiabile 18x38cm per Beinsen Barbados"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-intercambiable-18x38-barbados/01.png",
    "description": {
      "es": "Plato base de 18 x 38 cm para tu plancha transfer Beinsen Barbados. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Perfecto para camisetas infantiles y de tallas peque├▒as.",
      "en": "18 x 38 cm base plate for your Beinsen Barbados transfer press. Made of tough, high-quality materials to ensure uniform and precise application. Perfect for children's and small size t-shirts.",
      "pt": "Prato base de 18 x 38 cm para a sua prensa de transfer├¬ncia Beinsen Barbados. Fabricado com materiais resistentes e de alta qualidade para garantir aplica├º├úo uniforme e precisa. Perfeito para t-shirts infantis e tamanhos pequenos.",
      "it": "Piastra base da 18 x 38 cm per la tua pressa transfer Beinsen Barbados. Fabbricata con materiali resistenti e di alta qualit├á per garantire un'applicazione uniforme e precisa. Perfetta per magliette da bambino e taglie piccole."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Barbados" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "18 x 38 cm" }
    ]
  },
  {
    "reference": "90020102",
    "id": "plato-intercambiable-18x45-barbados",
    "slug": "plato-intercambiable-18x45-barbados",
    "name": {
      "es": "Plato intercambiable de 18x45cm para Beinsen Barbados",
      "en": "18x45cm interchangeable plate for Beinsen Barbados",
      "pt": "Prato intercambi├ível de 18x45cm para Beinsen Barbados",
      "it": "Piastra intercambiabile 18x45cm per Beinsen Barbados"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-intercambiable-18x45-barbados/01.png",
    "description": {
      "es": "Plato base de 18 x 45 cm para tu plancha transfer Beinsen Barbados. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Perfecto para prendas y textiles estrechos de gran longitud.",
      "en": "18 x 45 cm base plate for your Beinsen Barbados transfer press. Made of tough, high-quality materials to ensure uniform and precise application. Perfect for narrow and long textiles or garments.",
      "pt": "Prato base de 18 x 45 cm para a sua prensa de transfer├¬ncia Beinsen Barbados. Fabricado com materiais resistentes e de alta qualidade para garantir aplica├º├úo uniforme e precisa. Perfeito para pe├ºas de vestu├írio e t├¬xteis estreitos e longos.",
      "it": "Piastra base da 18 x 45 cm per la tua pressa transfer Beinsen Barbados. Fabbricata con materiali resistenti e di alta qualit├á per garantire un'applicazione uniforme e precisa. Perfetta per capi e tessuti stretti e molto lunghi."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Barbados" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "18 x 45 cm" }
    ]
  },
  {
    "reference": "90020101",
    "id": "plato-intercambiable-30x35-barbados",
    "slug": "plato-intercambiable-30x35-barbados",
    "name": {
      "es": "Plato intercambiable de 30x35cm para Beinsen Barbados",
      "en": "30x35cm interchangeable plate for Beinsen Barbados",
      "pt": "Prato intercambi├ível de 30x35cm para Beinsen Barbados",
      "it": "Piastra intercambiabile 30x35cm per Beinsen Barbados"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-intercambiable-30x35-barbados/01.png",
    "description": {
      "es": "Plato base de 30 x 35 cm para tu plancha transfer Beinsen Barbados. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Perfecto para materiales de tama├▒o mediano que requieren tensi├│n.",
      "en": "30 x 35 cm base plate for your Beinsen Barbados transfer press. Made of tough, high-quality materials to ensure uniform and precise application. Perfect for medium-sized materials that require tension.",
      "pt": "Prato base de 30 x 35 cm para a sua prensa de transfer├¬ncia Beinsen Barbados. Fabricado com materiais resistentes e de alta qualidade para garantir aplica├º├úo uniforme e precisa. Perfeito para materiais de tamanho m├®dio que requerem tens├úo.",
      "it": "Piastra base da 30 x 35 cm per la tua pressa transfer Beinsen Barbados. Fabbricata con materiali resistenti e di alta qualit├á per garantire un'applicazione uniforme e precisa. Perfetta per materiali di medie dimensioni che richiedono tensione."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Barbados" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "30 x 35 cm" }
    ]
  },
  {
    "reference": "MOLPLHOR",
    "id": "placa-polimero-platos-horno",
    "slug": "placa-polimero-platos-horno",
    "name": {
      "es": "Placa de pol├¡mero para platos de 6 a 10\" para horno",
      "en": "Polymer plate for 6 to 10\" plates for oven",
      "pt": "Placa de pol├¡mero para pratos de 6 a 10\" para forno",
      "it": "Piastra in polimero per piatti da 6 a 10\" per forno"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/placa-polimero-platos-horno/01.png",
    "description": {
      "es": "Este molde de placa de pol├¡mero de sublimaci├│n se utiliza en una prensa t├®rmica al vac├¡o 3D para evitar que las placas de pol├¡mero se deformen durante el proceso de sublimaci├│n. El molde est├í dividido en varios c├¡rculos de diferentes tama├▒os, lo que le permite ajustar el molde para adaptarse a platos de distintos tama├▒os.",
      "en": "This sublimation polymer plate mold is used in a 3D vacuum heat press to prevent polymer plates from deforming during the sublimation process. The mold is divided into several circles of different sizes, allowing you to adjust the mold to fit different plate sizes.",
      "pt": "Este molde de placa de pol├¡mero de sublima├º├úo ├® utilizado em uma prensa t├®rmica a v├ícuo 3D para evitar que as placas de pol├¡mero se deformem durante o processo de sublima├º├úo. O molde ├® dividido em v├írios c├¡rculos de diferentes tamanhos, permitindo ajustar o molde para caber em pratos de diferentes tamanhos.",
      "it": "Questo stampo per lastra in polimero a sublimazione viene utilizzato in una termopressa sottovuoto 3D per impedire la deformazione delle lastre in polimero durante il processo di sublimazione. Lo stampo ├¿ diviso in diversi cerchi di diverse dimensioni, consentendo di regolare lo stampo per adattarsi a piatti di diverse dimensioni."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Platos de 15 cm - 25 cm (6\"-10\") / 15 cm - 25 cm (6\"-10\") plates" },
      { "label": { "es": "Di├ímetros internos", "en": "Internal diameters", "pt": "Di├ómetros internos", "it": "Diametri interni" }, "value": "13,5 cm, 15,5 cm, 17 cm, 20 cm" }
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
    "image": "/products/accesorios/molde-3d-silicona-platos/01.png",
    "description": {
      "es": "Moldes 3D de silicona para platos en horno 3D. Estos moldes son el accesorio que se utiliza para personalizar platos en el horno de sublimaci├│n. Mediante su utilizaci├│n, podr├ís conseguir y garantizar que el papel de sublimaci├│n se quede firmemente sujeto, y a su vez, conseguir una impresi├│n perfecta especialmente en los bordes con el molde cuadrado universal.",
      "en": "3D silicone molds for plates in 3D oven. These molds are the accessory used to customize plates in the sublimation oven. By using them, you can ensure that the sublimation paper stays firmly attached and achieve a perfect print, especially at the edges with the universal square mold.",
      "pt": "Moldes 3D de silicone para pratos em forno 3D. Esses moldes s├úo o acess├│rio usado para personalizar pratos no forno de sublima├º├úo. Ao us├í-los, voc├¬ pode garantir que o papel de sublima├º├úo fique firmemente preso e obter uma impress├úo perfeita, especialmente nas bordas com o molde quadrado universal.",
      "it": "Stampi 3D in silicone per piatti in forno 3D. Questi stampi sono l'accessorio utilizzato per personalizzare i piatti nel forno di sublimazione. Utilizzandoli, puoi garantire che la carta di sublimazione rimanga saldamente fissata e ottenere una stampa perfetta, specialmente ai bordi con lo stampo quadrato universale."
    },
    "technicalSpecs": [
      { "label": { "es": "Molde redondo", "en": "Round mold", "pt": "Molde redondo", "it": "Stampo rotondo" }, "value": "Hasta 21 cm de di├ímetro / Up to 21 cm diameter" },
      { "label": { "es": "Molde cuadrado", "en": "Square mold", "pt": "Molde quadrado", "it": "Stampo quadrato" }, "value": "Universal para todos los tama├▒os de platos / Universal for all plate sizes" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Silicona de alta calidad / High quality silicone" },
      { "label": { "es": "Caracter├¡sticas", "en": "Features", "pt": "Caracter├¡sticas", "it": "Caratteristiche" }, "value": "Gran resistencia, tubo de enganche para vac├¡o, fijaci├│n firmemente sujeta" },
      { "label": { "es": "Temperatura sublimaci├│n", "en": "Sublimation temperature", "pt": "Temperatura sublima├º├úo", "it": "Temperatura sublimazione" }, "value": "200┬║C" },
      { "label": { "es": "Tiempo de curado", "en": "Curing time", "pt": "Tempo de cura", "it": "Tempo di polimerizzazione" }, "value": "7 minutos" }
    ]
  },
  {
    "reference": "MOLTAZCO",
    "id": "molde-3d-silicona-tazas-conicas-jarras",
    "slug": "molde-3d-silicona-tazas-conicas-jarras",
    "name": {
      "es": "Molde 3D de silicona para tazas c├│nicas y jarras de cerveza",
      "en": "3D silicone mold for conical mugs and beer steins",
      "pt": "Molde 3D de silicone para canecas c├│nicas e canecas de cerveja",
      "it": "Stampo 3D in silicone per tazze coniche e boccali di birra"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/molde-3d-silicona-tazas-conicas-jarras/01.png",
    "description": {
      "es": "Molde 3D de silicona para tazas c├│nicas y jarras de cerveza de 12 y 17oz para Horno 3D. Este accesorio se utiliza para personalizar tazas c├│nicas y jarras de cerveza en el horno de sublimaci├│n, garantizando que el papel de sublimaci├│n se quede firmemente sujeto para una impresi├│n perfecta. Tambi├®n se puede utilizar para cualquier otro tipo de tazas, incluyendo asas y partes inferiores.",
      "en": "3D silicone mold for conical mugs and beer steins 12 and 17oz for 3D oven. This accessory is used to personalize conical mugs and beer steins in the sublimation oven, ensuring that the sublimation paper stays firmly attached for perfect printing. Can also be used for any other type of mugs, including handles and bottoms.",
      "pt": "Molde 3D de silicone para canecas c├│nicas e canecas de cerveja de 12 e 17oz para Forno 3D. Este acess├│rio ├® usado para personalizar canecas c├│nicas e canecas de cerveja no forno de sublima├º├úo, garantindo que o papel de sublima├º├úo fique firmemente preso para impress├úo perfeita. Tamb├®m pode ser usado para qualquer outro tipo de caneca, incluindo al├ºas e fundos.",
      "it": "Stampo 3D in silicone per tazze coniche e boccali di birra 12 e 17oz per forno 3D. Questo accessorio viene utilizzato per personalizzare tazze coniche e boccali di birra nel forno di sublimazione, garantendo che la carta di sublimazione rimanga saldamente fissata per una stampa perfetta. Pu├▓ essere utilizzato anche per qualsiasi altro tipo di tazza, inclusi manici e fondi."
    },
    "technicalSpecs": [
      { "label": { "es": "Capacidad", "en": "Capacity", "pt": "Capacidade", "it": "Capacit├á" }, "value": "Tazas c├│nicas y jarras 12-17oz" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "145 x 110 x 175 mm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Silicona de alta calidad / High quality silicone" },
      { "label": { "es": "Caracter├¡sticas", "en": "Features", "pt": "Caracter├¡sticas", "it": "Caratteristiche" }, "value": "Tapa herm├®tica, tubo de vac├¡o integrado, f├ícil acoplamiento" },
      { "label": { "es": "Funci├│n", "en": "Function", "pt": "Fun├º├úo", "it": "Funzione" }, "value": "Personalizaci├│n de tazas, asas, interiores y exteriores" },
      { "label": { "es": "Temperatura sublimaci├│n", "en": "Sublimation temperature", "pt": "Temperatura sublima├º├úo", "it": "Temperatura sublimazione" }, "value": "200┬║C" },
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
    "image": "/products/accesorios/molde-3d-silicona-tazas-rectas/01.png",
    "description": {
      "es": "Molde 3D de silicona para tazas rectas personalizables en Horno 3D. Este accesorio se utiliza para personalizar tazas rectas en el horno de sublimaci├│n, garantizando que el papel de sublimaci├│n se quede firmemente sujeto para una impresi├│n perfecta. Tambi├®n se puede utilizar para cualquier otro tipo de tazas, incluyendo asas e interiores.",
      "en": "3D silicone mold for straight mugs customizable in 3D oven. This accessory is used to personalize straight mugs in the sublimation oven, ensuring that the sublimation paper stays firmly attached for perfect printing. Can also be used for any other type of mugs, including handles and interiors.",
      "pt": "Molde 3D de silicone para canecas retas personaliz├íveis em Forno 3D. Este acess├│rio ├® usado para personalizar canecas retas no forno de sublima├º├úo, garantindo que o papel de sublima├º├úo fique firmemente preso para impress├úo perfeita. Tamb├®m pode ser usado para qualquer outro tipo de caneca, incluindo al├ºas e interiores.",
      "it": "Stampo 3D in silicone per tazze dritte personalizzabili in forno 3D. Questo accessorio viene utilizzato per personalizzare tazze dritte nel forno di sublimazione, garantendo che la carta di sublimazione rimanga saldamente fissata per una stampa perfetta. Pu├▓ essere utilizzato anche per qualsiasi altro tipo di tazza, inclusi manici e interni."
    },
    "technicalSpecs": [
      { "label": { "es": "Altura", "en": "Height", "pt": "Altura", "it": "Altezza" }, "value": "17,8 cm" },
      { "label": { "es": "Di├ímetro superior", "en": "Top diameter", "pt": "Di├ómetro superior", "it": "Diametro superiore" }, "value": "11 cm" },
      { "label": { "es": "Di├ímetro inferior", "en": "Bottom diameter", "pt": "Di├ómetro inferior", "it": "Diametro inferiore" }, "value": "9 cm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Silicona de alta calidad / High quality silicone" },
      { "label": { "es": "Caracter├¡sticas", "en": "Features", "pt": "Caracter├¡sticas", "it": "Caratteristiche" }, "value": "Tapa herm├®tica, tubo de vac├¡o integrado, f├ícil acoplamiento" },
      { "label": { "es": "Temperatura sublimaci├│n", "en": "Sublimation temperature", "pt": "Temperatura sublima├º├úo", "it": "Temperatura sublimazione" }, "value": "220┬║C" },
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
    "image": "/products/accesorios/molde-silicona-3-tazas-11oz/01.png",
    "description": {
      "es": "Abrazadera multiusos que le permite sublimar hasta 3 tazas de 11oz a la vez, especialmente dise├▒ada para optimizar el flujo de trabajo al transferir dise├▒os a tazas mediante un horno 3D. Gracias a su fabricaci├│n con materiales de silicona ecol├│gicos y su facilidad de uso, este producto permite obtener un producto final m├ís preciso y mejorado. Proporciona un contacto m├ís estrecho entre la taza y el papel de transferencia de sublimaci├│n al vac├¡o, lo que garantiza un efecto de impresi├│n impresionante.",
      "en": "Multipurpose clamp that allows you to sublimate up to 3 mugs of 11oz at once, specially designed to optimize workflow when transferring designs to mugs using a 3D oven. Thanks to its manufacture with ecological silicone materials and ease of use, this product allows you to obtain a more precise and improved final product. Provides closer contact between the mug and the sublimation transfer paper under vacuum, guaranteeing an impressive printing effect.",
      "pt": "Grampo multiuso que permite sublimar at├® 3 canecas de 11oz de uma s├│ vez, especialmente projetado para otimizar o fluxo de trabalho ao transferir designs para canecas usando um forno 3D. Gra├ºas ├á sua fabrica├º├úo com materiais de silicone ecol├│gicos e facilidade de uso, este produto permite obter um produto final mais preciso e melhorado. Proporciona contato mais pr├│ximo entre a caneca e o papel de transfer├¬ncia de sublima├º├úo sob v├ícuo, garantindo um efeito de impress├úo impressionante.",
      "it": "Morsetto multipurpose che consente di sublimare fino a 3 tazze da 11oz contemporaneamente, appositamente progettato per ottimizzare il flusso di lavoro nel trasferimento di design su tazze utilizzando un forno 3D. Grazie alla sua realizzazione con materiali in silicone ecologico e facilit├á d'uso, questo prodotto consente di ottenere un prodotto finale pi├╣ preciso e migliorato. Fornisce un contatto pi├╣ stretto tra la tazza e la carta per il trasferimento di sublimazione sottovuoto, garantendo un effetto di stampa impressionante."
    },
    "technicalSpecs": [
      { "label": { "es": "Capacidad", "en": "Capacity", "pt": "Capacidade", "it": "Capacit├á" }, "value": "Hasta 3 tazas de 11oz / Up to 3 mugs 11oz" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Silicona ecol├│gica de alta calidad / High quality ecological silicone" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Botellas 200/300/400ml, tazas 11oz, huchas 11oz" },
      { "label": { "es": "Caracter├¡sticas", "en": "Features", "pt": "Caracter├¡sticas", "it": "Caratteristiche" }, "value": "Resistente a altas temperaturas, respetuoso con el medio ambiente, f├ícil de usar" },
      { "label": { "es": "Uso recomendado", "en": "Recommended use", "pt": "Uso recomendado", "it": "Uso consigliato" }, "value": "Evite usar objetos afilados. Aseg├║rese de fijar firmemente el papel de sublimaci├│n antes de usar." }
    ]
  },
  {
    "reference": "MOLVOTAL",
    "id": "molde-3d-silicona-3-botellas-aluminio",
    "slug": "molde-3d-silicona-3-botellas-aluminio",
    "name": {
      "es": "Molde 3D de silicona para 3 botellas de aluminio",
      "en": "3D silicone mold for 3 aluminum bottles",
      "pt": "Molde 3D de silicone para 3 garrafas de alum├¡nio",
      "it": "Stampo 3D in silicone per 3 bottiglie di alluminio"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/molde-3d-silicona-3-botellas-aluminio/01.png",
    "description": {
      "es": "Molde de transferencia t├®rmica con abrazadera multiusos para horno 3D. Permite sublimar hasta 3 botellas de aluminio a la vez, optimizando el flujo de trabajo. Proporciona un contacto m├ís estrecho entre la botella y el papel de transferencia de sublimaci├│n al vac├¡o, garantizando un efecto de impresi├│n impresionante.",
      "en": "Heat transfer mold with multi-purpose clamp for 3D oven. Allows you to sublimate up to 3 aluminum bottles at once, optimizing workflow. Provides closer contact between the bottle and sublimation transfer paper under vacuum, guaranteeing stunning print effects.",
      "pt": "Molde de transfer├¬ncia t├®rmica com grampo multiusos para forno 3D. Permite sublimar at├® 3 garrafas de alum├¡nio por vez, otimizando o fluxo de trabalho. Oferece contato mais pr├│ximo entre a garrafa e o papel de transfer├¬ncia de sublima├º├úo a v├ícuo, garantindo efeitos de impress├úo impressionantes.",
      "it": "Stampo di trasferimento termico con morsa multiuso per forno 3D. Consente di sublimare fino a 3 bottiglie di alluminio contemporaneamente, ottimizzando il flusso di lavoro. Fornisce un contatto pi├╣ stretto tra la bottiglia e la carta di trasferimento per sublimazione sottovuoto, garantendo effetti di stampa straordinari."
    },
    "technicalSpecs": [
      { "label": { "es": "Capacidad", "en": "Capacity", "pt": "Capacidade", "it": "Capacit├á" }, "value": "3 botellas / 3 bottles" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Botellas de aluminio 400/500/600/750ml" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Silicona ecol├│gica / Eco-friendly silicone" },
      { "label": { "es": "Caracter├¡sticas", "en": "Features", "pt": "Caracter├¡sticas", "it": "Caratteristiche" }, "value": "Resistente a altas temperaturas, f├ícil de usar" },
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Abrazadera multiusos / Multi-purpose clamp" },
      { "label": { "es": "Aplicaci├│n", "en": "Application", "pt": "Aplica├º├úo", "it": "Applicazione" }, "value": "Horno 3D sublimaci├│n de botellas" }
    ]
  },
  {
    "reference": "BPLAN163",
    "id": "resistencia-platos-6-1-gen",
    "slug": "resistencia-platos-6-1-gen",
    "name": {
      "es": "Resistencia para platos 6\" - 1┬¬ Generaci├│n",
      "en": "Heating element for 6\" plates - 1st Generation",
      "pt": "Resist├¬ncia para pratos 6\" - 1┬¬ Gera├º├úo",
      "it": "Resistenza per piatti 6\" - 1┬¬ Generazione"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-platos-6-1-gen/01.png",
    "description": {
      "es": "Resistencia de calor para planchas de platos. Este plato es el que aplica el calor sobre el objeto a planchar. Resistencia para platos de 6\".",
      "en": "Heating element for plate presses. This plate applies heat to the object to be pressed. 6\" plate heating element.",
      "pt": "Resist├¬ncia de calor para prensas de pratos. Este prato aplica calor ao objeto a ser prensado. Resist├¬ncia para pratos de 6\".",
      "it": "Resistenza di calore per presse per piatti. Questa piastra applica calore all'oggetto da pressare. Resistenza per piatti da 6\"."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "6\" (15 cm)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Plancha Combo de Beinsen 1┬¬ Generaci├│n (Dorian)" }
    ]
  },
  {
    "reference": "REPBEIRES05P",
    "id": "resistencia-platos-5-dorian",
    "slug": "resistencia-platos-5-dorian",
    "name": {
      "es": "Resistencia para Platos de 5\" Dorian",
      "en": "5\" plate heating element for Dorian",
      "pt": "Resist├¬ncia para pratos de 5\" Dorian",
      "it": "Resistenza per piatti da 5\" Dorian"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-platos-5-dorian/01.png",
    "description": {
      "es": "Resistencia de calor para plancha de Platos Beinsen de 5\"(12.6cm).",
      "en": "Heat heating element for Beinsen 5\"(12.6cm) Plate press.",
      "pt": "Resist├¬ncia de calor para prensa de Pratos Beinsen de 5\"(12.6cm).",
      "it": "Resistenza di calore per pressa per Piatti Beinsen da 5\"(12.6cm)."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "5\" (12.6 cm)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Dorian" }
    ]
  },
  {
    "reference": "ACCALR80X1",
    "id": "almohadilla-algodon-80x110",
    "slug": "almohadilla-algodon-80x110",
    "name": {
      "es": "Almohadilla de algod├│n reciclado de 80 x 110cm",
      "en": "80 x 110cm recycled cotton pad",
      "pt": "Almofada de algod├úo reciclado de 80 x 110cm",
      "it": "Cuscinetto in cotone riciclato 80 x 110 cm"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/almohadilla-algodon-80x110/01.png",
    "description": {
      "es": "Alfombrilla de 80x110cm para planchas transfer de gran tama├▒o. Aseguran una presi├│n uniforme durante el planchado.",
      "en": "80x110cm pad for large format heat presses. Ensures uniform pressure during pressing.",
      "pt": "Almofada de 80x110cm para planchas de grande formato. Garante press├úo uniforme durante o prensamento.",
      "it": "Cuscinetto 80x110cm per presse termiche di grande formato. Garantisce pressione uniforme durante la pressatura."
    },
    "technicalSpecs": [
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Algod├│n reciclado / Recycled Cotton / Algod├úo reciclado / Cotone riciclato" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "80 x 110 cm" },
      { "label": { "es": "Grosor", "en": "Thickness", "pt": "Espessura", "it": "Spessore" }, "value": "50 mm" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature", "pt": "Temperatura m├íxima", "it": "Temperatura massima" }, "value": "220┬║C" }
    ]
  },
  {
    "reference": "90006268",
    "id": "resistencia-tazas-2-5oz",
    "slug": "resistencia-tazas-2-5oz",
    "name": {
      "es": "Resistencia cil├¡ndrica de 2.5oz para mini tazas",
      "en": "2.5oz Cylindrical heating element for mini mugs",
      "pt": "Resist├¬ncia cil├¡ndrica de 2.5oz para mini canecas",
      "it": "Resistenza cilindrica da 2.5oz per mini tazze"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-tazas-2-5oz/01.png",
    "description": {
      "es": "Resistencia de 18 x 8.5 cm compatible con planchas transfer para tazas. Ideal para personalizar tazas peque├▒as con resultados precisos y profesionales.",
      "en": "18 x 8.5 cm heating element compatible with transfer presses for mugs. Ideal for personalizing small mugs with precise and professional results.",
      "pt": "Resist├¬ncia de 18 x 8.5 cm compat├¡vel com prensas t├®rmicas para canecas. Ideal para personalizar canecas pequenas com resultados precisos e profissionais.",
      "it": "Resistenza da 18 x 8.5 cm compatibile con presse transfer per tazze. Ideale per personalizzare tazze piccole con risultati precisi e professionali."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "18 x 8.5 cm (2.5oz)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Sicilia, Maine" }
    ]
  },
  {
    "reference": "90006264",
    "id": "resistencia-chupitos-1-5oz",
    "slug": "resistencia-chupitos-1-5oz",
    "name": {
      "es": "Resistencia c├│nica de 1.5oz para chupitos",
      "en": "1.5oz Conical heating element for shot glasses",
      "pt": "Resist├¬ncia c├│nica de 1.5oz para copos de shot",
      "it": "Resistenza conica da 1.5oz per bicchierini da shot"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-chupitos-1-5oz/01.png",
    "description": {
      "es": "Resistencia de 12 x 8 cm compatible con planchas transfer para tazas. Ideal para personalizar tazas de caf├® espresso y vasos de chupito de 1.5 oz con resultados precisos y profesionales.",
      "en": "12 x 8 cm heating element compatible with heat presses for mugs. Ideal for personalizing espresso coffee cups and 1.5 oz shot glasses with precise and professional results.",
      "pt": "Resist├¬ncia de 12 x 8 cm compat├¡vel com prensas t├®rmicas para canecas. Ideal para personalizar ch├ívenas de caf├® expresso e copos de shot de 1.5 oz com resultados precisos e profissionais.",
      "it": "Resistenza da 12 x 8 cm compatibile con presse transfer per tazze. Ideale per personalizzare tazzine da caff├¿ espresso e bicchierini da shot da 1.5 oz con risultati precisi e professionali."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "12 x 8 cm (1.5oz c├│nica)" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Sicilia, Maine" }
    ]
  },
  {
    "reference": "REPBEIRES20",
    "id": "resistencia-cilindrica-20-30oz",
    "slug": "resistencia-cilindrica-20-30oz",
    "name": {
      "es": "Resistencia cil├¡ndrica de 20 a 30 onzas",
      "en": "20 to 30 oz cylindrical heating element",
      "pt": "Resist├¬ncia cil├¡ndrica de 20 a 30 on├ºas",
      "it": "Resistenza cilindrica da 20 a 30 once"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/resistencia-cilindrica-20-30oz/01.png",
    "description": {
      "es": "Resistencia cil├¡ndrica de 20 a 30 onzas ÔÇô Compatible con plancha Maine. Da un salto de calidad en tus dise├▒os cil├¡ndricos con esta resistencia especializada para sublimar botellas, termos u otros recipientes de gran tama├▒o. Distribuci├│n uniforme del calor gracias a su construcci├│n robusta.",
      "en": "20 to 30 ounce cylindrical heating element - Compatible with Maine press. Take a leap in quality in your cylindrical designs with this specialized heating element for sublimating large bottles, thermoses or other large containers. Uniform heat distribution due to its robust construction.",
      "pt": "Resist├¬ncia cil├¡ndrica de 20 a 30 on├ºas ÔÇô Compat├¡vel com prensa Maine. D├¬ um salto de qualidade em seus designs cil├¡ndricos com esta resist├¬ncia especializada para sublimar garrafas, copos t├®rmicos ou outros recipientes grandes. Distribui├º├úo uniforme do calor gra├ºas ├á sua constru├º├úo robusta.",
      "it": "Resistenza cilindrica da 20 a 30 once ÔÇô Compatibile con la pressa Maine. Fai un salto di qualit├á nei tuoi disegni cilindrici con questa resistenza specializzata per sublimare bottiglie, thermos o altri grandi contenitori. Distribuzione uniforme del calore grazie alla sua costruzione robusta."
    },
    "technicalSpecs": [
      { "label": { "es": "Altura", "en": "Height", "pt": "Altura", "it": "Altezza" }, "value": "27 cm" },
      { "label": { "es": "Di├ímetro", "en": "Diameter", "pt": "Di├ómetro", "it": "Diametro" }, "value": "Ajustable 9,5 - 12 cm" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Maine" }
    ]
  },
  {
    "reference": "90020154",
    "id": "plato-base-18x18-cambio-rapido",
    "slug": "plato-base-18x18-cambio-rapido",
    "name": {
      "es": "Plato base de 18x18cm para intercambio r├ípido",
      "en": "18x18cm base plate for quick change",
      "pt": "Prato base de 18x18cm para troca r├ípida",
      "it": "Piastra base 18x18cm per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-18x18-cambio-rapido/01.png",
    "description": {
      "es": "Plato base de 18 x 18 cent├¡metros compatible con el sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Este tama├▒o resulta ideal para la personalizaci├│n de peque├▒os objetos de manera sencilla.",
      "en": "18 x 18 cm base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing small objects.",
      "pt": "Prato base de 18 x 18 cm compat├¡vel com o sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar objetos pequenos.",
      "it": "Piastra base 18 x 18 cm compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Ideale per personalizzare oggetti piccoli."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "18 x 18 cm" }
    ]
  },
  {
    "reference": "90020155",
    "id": "plato-base-18x38-cambio-rapido",
    "slug": "plato-base-18x38-cambio-rapido",
    "name": {
      "es": "Plato base de 18x38cm para intercambio r├ípido",
      "en": "18x38cm base plate for quick change",
      "pt": "Prato base de 18x38cm para troca r├ípida",
      "it": "Piastra base 18x38cm per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-18x38-cambio-rapido/01.png",
    "description": {
      "es": "Plato base de 18 x 38 cent├¡metros compatible con el sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Ideal para la personalizaci├│n de mangas de manera sencilla.",
      "en": "18 x 38 cm base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing sleeves easily.",
      "pt": "Prato base de 18 x 38 cm compat├¡vel com o sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar mangas.",
      "it": "Piastra base 18 x 38 cm compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Ideale per personalizzare le maniche."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "18 x 38 cm" }
    ]
  },
  {
    "reference": "90020152",
    "id": "plato-base-18x45-cambio-rapido",
    "slug": "plato-base-18x45-cambio-rapido",
    "name": {
      "es": "Plato base de 18x45cm para intercambio r├ípido",
      "en": "18x45cm base plate for quick change",
      "pt": "Prato base de 18x45cm para troca r├ípida",
      "it": "Piastra base 18x45cm per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-18x45-cambio-rapido/01.png",
    "description": {
      "es": "Plato base de 18 x 45 cent├¡metros compatible con el sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Este tama├▒o resulta ideal para la personalizaci├│n de pantalones de manera sencilla.",
      "en": "18 x 45 cm base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing pants easily.",
      "pt": "Prato base de 18 x 45 cm compat├¡vel com o sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar cal├ºas de forma simples.",
      "it": "Piastra base 18 x 45 cm compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Ideale per personalizzare pantaloni in modo semplice."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "18 x 45 cm" }
    ]
  },
  {
    "reference": "90020151",
    "id": "plato-base-30x35-cambio-rapido",
    "slug": "plato-base-30x35-cambio-rapido",
    "name": {
      "es": "Plato base de 30x35cm para intercambio r├ípido",
      "en": "30x35cm base plate for quick change",
      "pt": "Prato base de 30x35cm para troca r├ípida",
      "it": "Piastra base 30x35cm per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-30x35-cambio-rapido/01.png",
    "description": {
      "es": "Plato base 30 x 35 centimetros compatible con el sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Este tama├▒o resulta ideal para la personalizaci├│n de prendas infantiles u objetos de tama├▒o mediano de manera sencilla.",
      "en": "30 x 35 cm base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing children's garments or medium-sized objects easily.",
      "pt": "Prato base de 30 x 35 cm compat├¡vel com o sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar roupas infantis ou objetos de tamanho m├®dio de forma simples.",
      "it": "Piastra base 30 x 35 cm compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Ideale per personalizzare indumenti per bambini o oggetti di medie dimensioni in modo semplice."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "30 x 35 cm" }
    ]
  },
  {
    "reference": "90020158",
    "id": "plato-base-zapatillas-cambio-rapido",
    "slug": "plato-base-zapatillas-cambio-rapido",
    "name": {
      "es": "Plato base de 18x38cm especial zapatillas para intercambio r├ípido",
      "en": "18x38cm special shoe base plate for quick change",
      "pt": "Prato base de 18x38cm especial sapatilhas para troca r├ípida",
      "it": "Piastra base 18x38cm speciale scarpe per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-zapatillas-cambio-rapido/02.png",
    "description": {
      "es": "Plato base especial para zapatillas de 18 x 38 cent├¡metros compatible con el sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Ideal para la personalizaci├│n de zapatillas de manera sencilla.",
      "en": "Special 18 x 38 cm shoe base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing sneakers easily.",
      "pt": "Prato base especial para sapatilhas de 18 x 38 cm compat├¡vel com o sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar sapatilhas.",
      "it": "Piastra base speciale per scarpe da 18 x 38 cm compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Ideale per personalizzare scarpe da ginnastica."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "18 x 38 cm" }
    ]
  },
  {
    "reference": "90020156",
    "id": "plato-base-redondo-24-cambio-rapido",
    "slug": "plato-base-redondo-24-cambio-rapido",
    "name": {
      "es": "Plato base redondo de 24cm para intercambio r├ípido",
      "en": "24cm round base plate for quick change",
      "pt": "Prato base redondo de 24cm para troca r├ípida",
      "it": "Piastra base tonda 24cm per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-redondo-24-cambio-rapido/02.png",
    "description": {
      "es": "Plato base redondo de 24 centimetros de di├ímetro compatible con el sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Este tama├▒o resulta ideal para la personalizaci├│n de objetos redondo o sin bordes.",
      "en": "24cm diameter round base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing round or borderless objects.",
      "pt": "Prato base redondo de 24 cent├¡metros de di├ómetro compat├¡vel com o sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar objetos redondos ou sem bordas.",
      "it": "Piastra base rotonda da 24 centimetri di diametro compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Ideale per personalizzare oggetti rotondi o senza bordi."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "24 cm di├ímetro" }
    ]
  },
  {
    "reference": "90020157",
    "id": "plato-base-gorras-cambio-rapido",
    "slug": "plato-base-gorras-cambio-rapido",
    "name": {
      "es": "Plato base especial gorras para sistema de cambio r├ípido",
      "en": "Special cap base plate for quick change system",
      "pt": "Prato base especial bon├®s para sistema de troca r├ípida",
      "it": "Piastra base speciale cappellini per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-gorras-cambio-rapido/02.png",
    "description": {
      "es": "Plato base especial para gorras compatible con el sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Este tama├▒o resulta ideal para la personalizaci├│n de hasta 4 gorras de manera simult├ínea.",
      "en": "Special cap base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing up to 4 caps simultaneously.",
      "pt": "Prato base especial para bon├®s compat├¡vel com o sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar at├® 4 bon├®s em simult├óneo.",
      "it": "Piastra base speciale per cappellini compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Ideale per personalizzare fino a 4 cappellini contemporaneamente."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" }
    ]
  },
  {
    "reference": "90020172",
    "id": "plato-base-camisetas-cambio-rapido",
    "slug": "plato-base-camisetas-cambio-rapido",
    "name": {
      "es": "Plato base especial camisetas para sistema de cambio r├ípido",
      "en": "Special t-shirt base plate for quick change system",
      "pt": "Prato base especial camisetas para sistema de troca r├ípida",
      "it": "Piastra base speciale magliette per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-camisetas-cambio-rapido/02.png",
    "description": {
      "es": "Plato base especial para camisetas compatible con el sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Este tama├▒o resulta ideal para la personalizaci├│n de camisetas con su etiqueta interior.",
      "en": "Special t-shirt base plate compatible with the quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Ideal for personalizing t-shirts with their inner label.",
      "pt": "Prato base especial para camisetas compat├¡vel com o sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Ideal para personalizar camisetas com a sua etiqueta interna.",
      "it": "Piastra base speciale per magliette compatibile con il sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Ideale per personalizzare magliette con la loro etichetta interna."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" }
    ]
  },
  {
    "reference": "90020160",
    "id": "plato-base-40x50-2mangas-cambio-rapido",
    "slug": "plato-base-40x50-2mangas-cambio-rapido",
    "name": {
      "es": "Plato base de 40x50cm para 2 mangas para sistema de cambio r├ípido",
      "en": "40x50cm base plate for 2 sleeves for quick change system",
      "pt": "Prato base de 40x50cm para 2 mangas para sistema de troca r├ípida",
      "it": "Piastra base 40x50cm per 2 maniche per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-40x50-2mangas-cambio-rapido/02.png",
    "description": {
      "es": "Plato base de 40 x 50 cm. especial para mangas con sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Este tama├▒o resulta ideal para la personalizaci├│n de 2 mangas a la vez.",
      "en": "40 x 50 cm base plate special for sleeves with quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. This size is ideal for customizing 2 sleeves at once.",
      "pt": "Prato base de 40 x 50 cm especial para mangas com sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Este tamanho ├® ideal para a personaliza├º├úo de 2 mangas ao mesmo tempo.",
      "it": "Piastra base da 40 x 50 cm speciale per maniche con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Questa dimensione ├¿ ideale per la personalizzazione di 2 maniche contemporaneamente."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "40 x 50 cm" }
    ]
  },
  {
    "reference": "90020171",
    "id": "plato-base-12x45-mangas-cambio-rapido",
    "slug": "plato-base-12x45-mangas-cambio-rapido",
    "name": {
      "es": "Plato base de 12 x 45cm especial mangas para intercambio r├ípido",
      "en": "12 x 45cm special sleeve base plate for quick change",
      "pt": "Prato base de 12 x 45cm especial mangas para troca r├ípida",
      "it": "Piastra base 12 x 45cm speciale maniche per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-12x45-mangas-cambio-rapido/01.png",
    "description": {
      "es": "Plato base de 12 x 45 cm. con sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Este tama├▒o resulta ideal para la personalizaci├│n de mangas.",
      "en": "12 x 45 cm base plate with quick change system for your Beinsen transfer press. Made of tough, high-quality materials to ensure precise and even application. This size is ideal for personalizing sleeves.",
      "pt": "Prato base de 12 x 45 cm com sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado em materiais resistentes e de alta qualidade para garantir uma aplica├º├úo uniforme e precisa. Este tamanho ├® ideal para personaliza├º├úo de mangas.",
      "it": "Piastra base 12 x 45 cm con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á per garantire un'applicazione uniforme e precisa. Questa dimensione ├¿ ideale per la personalizzazione delle maniche."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "12 x 45 cm" }
    ]
  },
  {
    "reference": "90020164",
    "id": "plato-base-15x50-pantalones-cambio-rapido",
    "slug": "plato-base-15x50-pantalones-cambio-rapido",
    "name": {
      "es": "Plato base de 15 x 50cm especial pantalones para intercambio r├ípido",
      "en": "15 x 50cm special pants base plate for quick change",
      "pt": "Prato base de 15 x 50cm especial cal├ºas para troca r├ípida",
      "it": "Piastra base 15 x 50cm speciale pantaloni per cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-15x50-pantalones-cambio-rapido/01.png",
    "description": {
      "es": "Plato base de 15 x 50 cm. con sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Este tama├▒o resulta ideal para la personalizaci├│n de pantalones.",
      "en": "15 x 50 cm base plate with quick change system for your Beinsen transfer press. Made of tough, high-quality materials to ensure precise and even application. This size is ideal for personalizing pants.",
      "pt": "Prato base de 15 x 50 cm com sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado em materiais resistentes e de alta qualidade para garantir uma aplica├º├úo uniforme e precisa. Este tamanho ├® ideal para personaliza├º├úo de cal├ºas.",
      "it": "Piastra base 15 x 50 cm con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á per garantire un'applicazione uniforme e precisa. Questa dimensione ├¿ ideale per la personalizzazione dei pantaloni."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "15 x 50 cm" }
    ]
  },
  {
    "reference": "90020170",
    "id": "plato-base-15-5x25-5-cambio-rapido",
    "slug": "plato-base-15-5x25-5-cambio-rapido",
    "name": {
      "es": "Plato base de 15,5x25,5cm para sistema de cambio r├ípido",
      "en": "15.5x25.5cm base plate for quick change system",
      "pt": "Prato base de 15,5x25,5cm para sistema de troca r├ípida",
      "it": "Piastra base 15,5x25,5cm per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-15-5x25-5-cambio-rapido/01.png",
    "description": {
      "es": "Plato base de 15,5 x 25,5 cm. con sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Perfecto para mangas, pantalones, bufandas, bolsos y fundas.",
      "en": "15.5 x 25.5 cm base plate with quick change system for your Beinsen transfer press. Made of tough, high-quality materials for precise and even application. Perfect for sleeves, pants, scarves, bags and cases.",
      "pt": "Prato base de 15,5 x 25,5 cm com sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Perfeito para mangas, cal├ºas, len├ºos, bolsas e capas.",
      "it": "Piastra base 15,5 x 25,5 cm con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Perfetta per maniche, pantaloni, sciarpe, borse e custodie."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "15,5 x 25,5 cm" }
    ]
  },
  {
    "reference": "90020163",
    "id": "plato-base-15x25-cambio-rapido",
    "slug": "plato-base-15x25-cambio-rapido",
    "name": {
      "es": "Plato base de 15x25cm para sistema de cambio r├ípido",
      "en": "15x25cm base plate for quick change system",
      "pt": "Prato base de 15x25cm para sistema de troca r├ípida",
      "it": "Piastra base 15x25cm per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-15x25-cambio-rapido/01.png",
    "description": {
      "es": "Plato base de 15 x 25 cm. con sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Perfecto para mangas, pantalones, bufandas, bolsos y fundas.",
      "en": "15 x 25 cm base plate with quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Perfect for sleeves, pants, scarves, bags and cases.",
      "pt": "Prato base de 15 x 25 cm com sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Perfeito para mangas, cal├ºas, len├ºos, bolsas e capas.",
      "it": "Piastra base 15 x 25 cm con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Perfetta per maniche, pantaloni, sciarpe, borse e custodie."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "15 x 25 cm" }
    ]
  },
  {
    "reference": "90020169",
    "id": "plato-base-25x30-cambio-rapido",
    "slug": "plato-base-25x30-cambio-rapido",
    "name": {
      "es": "Plato base de 25x30cm para sistema de cambio r├ípido",
      "en": "25x30cm base plate for quick change system",
      "pt": "Prato base de 25x30cm para sistema de troca r├ípida",
      "it": "Piastra base 25x30cm per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "https://tiendasublimacion.com/media/catalog/product/cache/b1fc9389cb3c8abc49296622cc18a994/c/a/canva_export_-_lmlbsyq.webp",
    "description": {
      "es": "Plato base de 25 x 30 cm con sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Perfecto para camisetas infantiles, cojines, toallas, manteles, etc.",
      "en": "25 x 30 cm base plate with quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Perfect for children's t-shirts, cushions, towels, tablecloths, etc.",
      "pt": "Prato base de 25 x 30 cm com sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Perfeito para t-shirts infantis, almofadas, toalhas, toalhas de mesa, etc.",
      "it": "Piastra base da 25 x 30 cm con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Perfetta per magliette bambino, cuscini, asciugamani, tovaglie, ecc."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "25 x 30 cm" }
    ]
  },
  {
    "reference": "90020162",
    "id": "plato-base-15x15-cambio-rapido",
    "slug": "plato-base-15x15-cambio-rapido",
    "name": {
      "es": "Plato base de 15x15cm para sistema de cambio r├ípido",
      "en": "15x15cm base plate for quick change system",
      "pt": "Prato base de 15x15cm para sistema de troca r├ípida",
      "it": "Piastra base 15x15cm per sistema di cambio rapido"
    },
    "price": "Consultar PVP",
    "image": "/products/accesorios/plato-base-15x15-cambio-rapido/01.png",
    "description": {
      "es": "Plato base de 15 x 15 cm con sistema de intercambio r├ípido para tu plancha transfer Beinsen. Fabricado con materiales resistentes y de alta calidad para garantizar una aplicaci├│n uniforme y precisa. Perfecto para parches, logos, posavasos y otros materiales peque├▒os.",
      "en": "15 x 15 cm base plate with quick change system for your Beinsen transfer press. Made of tough, high-quality materials for uniform and precise application. Perfect for patches, logos, coasters and other small items.",
      "pt": "Prato base de 15 x 15 cm com sistema de troca r├ípida para a sua prensa de transfer├¬ncia Beinsen. Fabricado com materiais resistentes e de alta qualidade. Perfeito para patches, logos, apoios de copos e outros artigos pequenos.",
      "it": "Piastra base 15 x 15 cm con sistema di cambio rapido per la tua pressa transfer Beinsen. Fabbricata con materiali resistenti e di alta qualit├á. Perfetta per patch, loghi, sottobicchieri e altri articoli piccoli."
    },
    "technicalSpecs": [
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Malvinas, Esparta, Trinidad, Miranda" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "15 x 15 cm" }
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
    "image": "/products/accesorios/almohadilla-silicona-80x100/01.png",
    "description": {
      "es": "Almohadilla de silicona de 80 x 100cm para plato base. Resistente al calor hasta 220┬║C y con un espesor de 10mm, asegura una impresi├│n uniforme y perfecta en cualquier prensa de calor.",
      "en": "80 x 100cm silicone pad for base plate. Heat resistant up to 220┬║C with 10mm thickness, ensures uniform and perfect printing on any heat press.",
      "pt": "Almofada de silicone de 80 x 100cm para prato base. Resistente ao calor at├® 220┬║C com 10mm de espessura, garante impress├úo uniforme e perfeita em qualquer prensa t├®rmica.",
      "it": "Cuscinetto in silicone 80 x 100 cm per piastra base. Resistente al calore fino a 220┬║C con spessore di 10mm, garantisce una stampa uniforme e perfetta su qualsiasi pressa termica."
    },
    "technicalSpecs": [
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Silicona de grado industrial / Industrial grade silicone" },
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "80 x 100 cm" },
      { "label": { "es": "Espesor", "en": "Thickness", "pt": "Espessura", "it": "Spessore" }, "value": "10 mm" },
      { "label": { "es": "Temperatura m├íxima", "en": "Maximum Temperature", "pt": "Temperatura m├íxima", "it": "Temperatura massima" }, "value": "220┬║C" }
    ]
  },
  {
    "reference": "90950104",
    "id": "almohadilla-teflon-termorresistente-40x50",
    "slug": "almohadilla-teflon-termorresistente-40x50",
    "name": {
      "es": "Almohadilla de tefl├│n termorresistente negra de 40 x 50 cm. tp-20-bk",
      "en": "Black heat-resistant Teflon pad 40 x 50 cm. tp-20-bk",
      "pt": "Almofada de teflon termorresistente preta 40 x 50 cm. tp-20-bk",
      "it": "Cuscinetto in teflon termoresistente nero 40 x 50 cm. tp-20-bk"
    },
    "price": 30,
    "image": "/products/accesorios/almohadilla-teflon-termorresistente-40x50/01.png",
    "description": {
      "es": "Ideal para salvar los salientes de los botones, dobladillos, cremalleras, etc. Evita las rayas en la placa met├ílica superior de la plancha. Antiadherente. F├ícil de limpiar.",
      "en": "Ideal for protecting buttons, hems, zippers, etc. Prevents scratches on the upper metal plate of the heat press. Non-stick. Easy to clean.",
      "pt": "Ideal para proteger bot├Áes, bainhas, fechos, etc. Evita riscos na placa met├ílica superior da prensa. Antiaderente. F├ícil de limpar.",
      "it": "Ideale per proteggere bottoni, orli, cerniere, ecc. Previene i graffi sulla piastra metallica superiore della pressa. Antiaderente. Facile da pulire."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "40 x 50 cm" },
      { "label": { "es": "Referencia", "en": "Reference", "pt": "Refer├¬ncia", "it": "Riferimento" }, "value": "TP-20-BK" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Tefl├│n termorresistente / Heat-resistant Teflon" }
    ]
  },
  {
    "reference": "BSNALMTFL38",
    "id": "almohadilla-teflon-termorresistente-38x38",
    "slug": "almohadilla-teflon-termorresistente-38x38",
    "name": {
      "es": "Almohadilla de tefl├│n termorresistente de 38x38 cm.",
      "en": "Heat-resistant Teflon pad 38x38 cm.",
      "pt": "Almofada de teflon termorresistente 38x38 cm.",
      "it": "Cuscinetto in teflon termoresistente 38x38 cm."
    },
    "price": 25,
    "image": "/products/accesorios/almohadilla-teflon-termorresistente-38x38/01.png",
    "description": {
      "es": "Ideal para salvar los salientes de los botones, dobladillos, cremalleras, etc. Evita las rayas en la placa met├ílica superior de la plancha. Antiadherente. F├ícil de limpiar.",
      "en": "Ideal for protecting buttons, hems, zippers, etc. Prevents scratches on the upper metal plate of the heat press. Non-stick. Easy to clean.",
      "pt": "Ideal para proteger bot├Áes, bainhas, fechos, etc. Evita riscos na placa met├ílica superior da prensa. Antiaderente. F├ícil de limpar.",
      "it": "Ideale per proteggere bottoni, orli, cerniere, ecc. Previene i graffi sulla piastra metallica superiore della pressa. Antiaderente. Facile da pulire."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "38 x 38 cm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Tefl├│n termorresistente / Heat-resistant Teflon" }
    ]
  },
  {
    "reference": "BSNALMTFL25",
    "id": "almohadilla-teflon-termorresistente-25x25",
    "slug": "almohadilla-teflon-termorresistente-25x25",
    "name": {
      "es": "Almohadilla de tefl├│n termorresistente de 25x25 cm.",
      "en": "Heat-resistant Teflon pad 25x25 cm.",
      "pt": "Almofada de teflon termorresistente 25x25 cm.",
      "it": "Cuscinetto in teflon termoresistente 25x25 cm."
    },
    "price": 15,
    "image": "/products/accesorios/almohadilla-teflon-termorresistente-25x25/01.png",
    "description": {
      "es": "Ideal para salvar los salientes de los botones, dobladillos, cremalleras, etc. Evita las rayas en la placa met├ílica superior de la plancha. Antiadherente. F├ícil de limpiar.",
      "en": "Ideal for protecting buttons, hems, zippers, etc. Prevents scratches on the upper metal plate of the heat press. Non-stick. Easy to clean.",
      "pt": "Ideal para proteger bot├Áes, bainhas, fechos, etc. Evita riscos na placa met├ílica superior da prensa. Antiaderente. F├ícil de limpar.",
      "it": "Ideale per proteggere bottoni, orli, cerniere, ecc. Previene i graffi sulla piastra metallica superiore della pressa. Antiaderente. Facile da pulire."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "25 x 25 cm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Tefl├│n termorresistente / Heat-resistant Teflon" }
    ]
  },
  {
    "reference": "BSNALMTFL15",
    "id": "almohadilla-teflon-termorresistente-15x15",
    "slug": "almohadilla-teflon-termorresistente-15x15",
    "name": {
      "es": "Almohadilla de tefl├│n termorresistente de 15x15 cm.",
      "en": "Heat-resistant Teflon pad 15x15 cm.",
      "pt": "Almofada de teflon termorresistente 15x15 cm.",
      "it": "Cuscinetto in teflon termoresistente 15x15 cm."
    },
    "price": 10.70,
    "image": "/products/accesorios/almohadilla-teflon-termorresistente-15x15/01.png",
    "description": {
      "es": "Ideal para salvar los salientes de los botones, dobladillos, cremalleras, etc. Evita las rayas en la placa met├ílica superior de la plancha. Antiadherente. F├ícil de limpiar.",
      "en": "Ideal for protecting buttons, hems, zippers, etc. Prevents scratches on the upper metal plate of the heat press. Non-stick. Easy to clean.",
      "pt": "Ideal para proteger bot├Áes, bainhas, fechos, etc. Evita riscos na placa met├ílica superior da prensa. Antiaderente. F├ícil de limpiar.",
      "it": "Ideale per proteggere bottoni, orli, cerniere, ecc. Previene i graffi sulla piastra metallica superiore della pressa. Antiaderente. Facile da pulire."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones", "en": "Dimensions", "pt": "Dimens├Áes", "it": "Dimensioni" }, "value": "15 x 15 cm" },
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Tefl├│n termorresistente / Heat-resistant Teflon" }
    ]
  },
  {
    "reference": "S12253",
    "id": "termometro-digital-infrarrojos-it122",
    "slug": "termometro-digital-infrarrojos-it122",
    "name": {
      "es": "Term├│metro digital de infrarrojos IT-122",
      "en": "Digital Infrared Thermometer IT-122",
      "pt": "Term├│metro digital infravermelho IT-122",
      "it": "Termometro digitale a infrarossi IT-122"
    },
    "price": 24.90,
    "image": "/products/accesorios/termometro-digital-infrarrojos-it122/01.png",
    "description": {
      "es": "Term├│metro infrarrojo digital port├ítil sin contacto. Permite medir la temperatura de una habitaci├│n o de una taza al momento mientras se presiona el bot├│n de modo de objeto. Ideal para controlar la temperatura con rapidez y precisi├│n desde una distancia de seguridad.",
      "en": "Portable non-contact digital infrared thermometer. Allows measuring room or object temperature instantly. Ideal for monitoring temperature quickly and accurately from a safety distance.",
      "pt": "Term├┤metro infravermelho digital port├ítil sem contato. Permite medir a temperatura de uma sala ou objeto instantaneamente. Ideal para monitorar a temperatura com rapidez e precis├úo a uma dist├óncia de seguran├ºa.",
      "it": "Termometro digitale a infrarossi portatile senza contatto. Consente di misurare istantaneamente la temperatura di una stanza o di un oggetto. Ideale per monitorare la temperatura in modo rapido e accurato da una distanza di sicurezza."
    },
    "technicalSpecs": [
      { "label": { "es": "Modelo", "en": "Model", "pt": "Modelo", "it": "Modello" }, "value": "IT-122" },
      { "label": { "es": "Alimentaci├│n", "en": "Power", "pt": "Alimenta├º├úo", "it": "Alimentazione" }, "value": "2 pilas AA (3V) - No incluidas" },
      { "label": { "es": "Funciones", "en": "Functions", "pt": "Fun├º├Áes", "it": "Funzioni" }, "value": "Medici├│n r├ípida, Alarma de fiebre, Retroiluminaci├│n tricolor" }
    ]
  },
  {
    "reference": "3DGWST",
    "id": "guantes-protectores-algodon",
    "slug": "guantes-protectores-algodon",
    "name": {
      "es": "Guantes protectores de algod├│n",
      "en": "Protective cotton gloves",
      "pt": "Luvas protetoras de algod├úo",
      "it": "Guanti protettivi in cotone"
    },
    "price": 8.65,
    "image": "/products/accesorios/guantes-protectores-algodon/01.png",
    "description": {
      "es": "Guantes protectores de algod├│n para trabajar con total seguridad. Permiten manipular sin peligro planchas transfer y soportes impresos. Con textura de nitrilo para mejor adherencia y resistencia t├®rmica hasta 250┬║C.",
      "en": "Protective cotton gloves for working with total safety. They allow handling transfer presses and printed supports without danger. Featuring nitrile texture for better grip and heat resistance up to 250┬║C.",
      "pt": "Luvas protetoras de algod├úo para trabalhar com total seguran├ºa. Permitem manipular prensas de transfer e suportes impressos sem perigo. Com textura de nitrilo para melhor ader├¬ncia e resist├¬ncia t├®rmica at├® 250┬║C.",
      "it": "Guanti protettivi in cotone per lavorare in totale sicurezza. Consentono di maneggiare presse transfer e supporti stampati senza pericoli. Con trama in nitrile per una migliore presa e resistenza termica fino a 250┬║C."
    },
    "technicalSpecs": [
      { "label": { "es": "Material", "en": "Material", "pt": "Material", "it": "Materiale" }, "value": "Algod├│n y Nitrilo / Cotton and Nitrile" },
      { "label": { "es": "Resistencia T├®rmica", "en": "Heat Resistance", "pt": "Resist├¬ncia T├®rmica", "it": "Resistenza Termica" }, "value": "Hasta 250┬║C (periodos cortos) / Up to 250┬║C (short periods)" },
      { "label": { "es": "Talla", "en": "Size", "pt": "Tamanho", "it": "Taglia" }, "value": "├Ünica (15 x 27 cm)" }
    ]
  },
  {
    "reference": "REPBEISOPMOV",
    "id": "mesa-universal-grande",
    "slug": "mesa-universal-grande-ruedas",
    "name": {
      "es": "Mesa universal grande con ruedas para plancha t├®rmica",
      "en": "Large universal table with wheels for heat press",
      "pt": "Mesa universal grande com rodas para prensa t├®rmica",
      "it": "Carrello universale grande con ruote per pressa termica"
    },
    "price": 265,
    "image": "/products/accesorios/mesa-universal-grande-ruedas/01.png",
    "description": {
      "es": "Soporte M├│vil Universal para planchas transfer Beinsen. Con una superficie de 98x88 cm y una altura de 71 cm, aguanta prensas de todo tipo. Sus cuatro ruedas giratorias con freno permiten moverlo con facilidad. Incluye un estante inferior para organizar herramientas y materiales.",
      "en": "Universal Mobile Stand for Beinsen transfer presses. With a surface of 98x88 cm and a height of 71 cm, it supports all types of presses. Its four rotating wheels with brakes allow for easy movement. Includes a bottom shelf to organize tools and materials.",
      "pt": "Suporte M├│vel Universal para prensas de transfer Beinsen. Com uma superf├¡cie de 98x88 cm e uma altura de 71 cm, suporta todos os tipos de prensas. As suas quatro rodas girat├│rias com trav├Áes permitem uma movimenta├º├úo f├ícil. Inclui uma prateleira inferior para organizar ferramentas e materiais.",
      "it": "Supporto mobile universale per presse transfer Beinsen. Con una superficie di 98x88 cm e un'altezza di 71 cm, supporta tutti i tipi di presse. Le quattro ruote piroettanti con freno ne consentono un facile spostamento. Include un ripiano inferiore per organizzare strumenti e materiali."
    },
    "technicalSpecs": [
      { "label": { "es": "Dimensiones Superficie", "en": "Surface Dimensions", "pt": "Dimens├Áes da Superf├¡cie", "it": "Dimensioni Superficie" }, "value": "98 x 88 cm" },
      { "label": { "es": "Altura", "en": "Height", "pt": "Altura", "it": "Altezza" }, "value": "71 cm" },
      { "label": { "es": "Peso", "en": "Weight", "pt": "Peso", "it": "Peso" }, "value": "25 kg" },
      { "label": { "es": "Ruedas", "en": "Wheels", "pt": "Rodas", "it": "Ruote" }, "value": "4 giratorias con freno / 4 rotating with brakes" },
      { "label": { "es": "Caracter├¡sticas", "en": "Features", "pt": "Caracter├¡sticas", "it": "Caratteristiche" }, "value": "Estante inferior incluido / Lower shelf included" }
    ]
  },
  {
    "reference": "REPBEIRES12C",
    "id": "resistencia-conica-tazas-12oz",
    "slug": "resistencia-conica-tazas-12oz",
    "name": {
      "es": "Resistencia c├│nica para tazas de 12oz",
      "en": "Conical heating element for 12oz mugs",
      "pt": "Resist├¬ncia c├│nica para canecas 12oz",
      "it": "Resistenza conica per tazze da 12oz"
    },
    "price": 52,
    "image": "/products/accesorios/resistencia-conica-tazas-12oz/01.png",
    "description": {
      "es": "Dise├▒ada para tazas c├│nicas de 12 onzas. F├ícil instalaci├│n mediante tornillos y conector r├ípido. Ideal como repuesto o accesorio para ampliar las capacidades de tu plancha Beinsen.",
      "en": "Designed for 12oz conical mugs. Easy installation via screws and quick connector. Ideal as a replacement or accessory to expand the capabilities of your Beinsen press.",
      "pt": "Projetada para canecas c├│nicas de 12 on├ºas. F├ícil instala├º├úo atrav├®s de parafusos e conector r├ípido. Ideal como substitui├º├úo ou acess├│rio para expandir as capacidades da sua prensa Beinsen.",
      "it": "Progettata per tazze coniche da 12 once. Facile installazione tramite viti e connettore rapido. Ideale come ricambio o accessorio per ampliare le capacit├á della tua pressa Beinsen."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "C├│nica 12oz / Conical 12oz" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Alina, Aruba, Sicilia, Maine" }
    ]
  },
  {
    "reference": "REPBEIRES17C",
    "id": "resistencia-conica-tazas-17oz",
    "slug": "resistencia-para-tazas-conicas-17oz",
    "name": {
      "es": "Resistencia para tazas C├│nicas de 17oz",
      "en": "Heating element for 17oz Conical mugs",
      "pt": "Resist├¬ncia para canecas C├│nicas 17oz",
      "it": "Resistenza per tazze Coniche da 17oz"
    },
    "price": 52,
    "image": "/products/accesorios/resistencia-para-tazas-conicas-17oz/01.png",
    "description": {
      "es": "Resistencia de alta calidad para tazas c├│nicas de 17 onzas. Permite una transferencia de calor uniforme. F├ícil de montar y desmontar, asegurando una producci├│n eficiente.",
      "en": "High-quality heating element for 17oz conical mugs. Allows uniform heat transfer. Easy to assemble and disassemble, ensuring efficient production.",
      "pt": "Resist├¬ncia de alta qualidade para canecas c├│nicas de 17 on├ºas. Permite uma transfer├¬ncia de calor uniforme. F├ícil de montar e desmontar, garantindo uma produ├º├úo eficiente.",
      "it": "Resistenza di alta qualit├á per tazze coniche da 17 once. Consente un trasferimento di calore uniforme. Facile da montare e smontare, garantendo una produzione efficiente."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "C├│nica 17oz / Conical 17oz" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Alina, Sicilia, Aruba, Maine" }
    ]
  }
];
export const allAccessoriesData: Accessory[] = [...rawAccessoriesData].sort((a, b) => getSortName(a).localeCompare(getSortName(b), 'es'));


const rawConsumablesData: Consumable[] = [
  {
    "reference": "REPBEIRES11A",
    "id": "resistencia-cilindrica-tazas-11oz-tipo-a",
    "slug": "resistencia-cilindrica-tazas-11oz-tipo-a",
    "name": {
      "es": "Resistencia cil├¡ndrica para tazas de 11oz tipo A",
      "en": "Cylindrical heating element for 11oz mugs type A",
      "pt": "Resist├¬ncia cil├¡ndrica para canecas 11oz tipo A",
      "it": "Resistenza cilindrica per tazze da 11oz tipo A"
    },
    "price": 52,
    "image": "/products/consumibles/resistencia-cilindrica-tazas-11oz-tipo-a/01.png",
    "description": {
      "es": "Resistencia de repuesto o accesorio para planchas de tazas Beinsen. Permite personalizar tazas de 11 onzas de forma sencilla: solo conectar y empezar a trabajar. Se recomienda precalentar unos minutos en el primer uso.",
      "en": "Replacement or accessory heating element for Beinsen mug presses. Allows easy personalization of 11oz mugs: just connect and start working. Preheating for a few minutes on first use is recommended.",
      "pt": "Resist├¬ncia de substitui├º├úo ou acess├│rio para prensas de canecas Beinsen. Permite personalizar canecas de 11 on├ºas de forma simples: basta ligar e come├ºar a trabalhar. Recomenda-se pr├®-aquecer alguns minutos na primeira utiliza├º├úo.",
      "it": "Resistenza di ricambio o accessoria per presse per tazze Beinsen. Permette di personalizzare tazze da 11 once in modo semplice: basta collegare e iniziare a lavorare. Si consiglia di preriscaldare per alcuni minuti al primo utilizzo."
    },
    "technicalSpecs": [
      { "label": { "es": "Tipo", "en": "Type", "pt": "Tipo", "it": "Tipo" }, "value": "Cil├¡ndrica 11oz / Cylindrical 11oz" },
      { "label": { "es": "Compatibilidad", "en": "Compatibility", "pt": "Compatibilidade", "it": "Compatibilit├á" }, "value": "Andra, Sore (A)" }
    ]
  }
];
export const allConsumablesData: Consumable[] = [...rawConsumablesData].sort((a, b) => getSortName(a).localeCompare(getSortName(b), 'es'));
