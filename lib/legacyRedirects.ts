/**
 * Redirecciones 308 para URLs heredadas del antiguo Wordpress de beinsen.com.
 *
 * Cada entrada lleva una URL pública antigua (formato /<slug-wordpress>) al
 * slug canónico actual /catalogo/<slug>. Para modelos que ya no existen
 * (Grecia, Haití, Riad) se redirige al catálogo general.
 *
 * Notas:
 *  - Las URLs cortas de marketing (Trinidad, Chicago, etc.) están cubiertas
 *    por lib/productAliases.ts. Aquí solo van los slugs largos y los aliases
 *    de inglés que no genera el sistema automático.
 *  - estambul-prensa-termica-para-espinilleras → felina-prensa-termica-para-espinilleras
 *    porque hicimos el swap Felina <-> Estambul tras el etiquetado incorrecto de fábrica.
 */

export interface LegacyRedirect {
    /** URL antigua sin barra inicial. Coincide con el `source` de Next. */
    from: string;
    /** Destino dentro del sitio actual (sin host). */
    to: string;
}

export const legacyRedirects: LegacyRedirect[] = [
    // Alaska
    { from: "alaska-prensa-termica-electrica-compacta-sublimacion", to: "/catalogo/alaska-plancha-termica-textil" },

    // Alina
    { from: "plancha-termica-para-tazas-4-en-1-alina", to: "/catalogo/alina-plancha-para-tazas" },

    // Andra
    { from: "heat-press-for-cups", to: "/catalogo/andra-prensa-automatica-tazas" },
    { from: "plancha-para-tazas", to: "/catalogo/andra-prensa-automatica-tazas" },

    // Aruba
    { from: "double-mug-press", to: "/catalogo/aruba-plancha-para-tazas" },
    { from: "plancha-para-tazas-doble", to: "/catalogo/aruba-plancha-para-tazas" },

    // Barahona
    { from: "heat-press-mug-6-in-1", to: "/catalogo/barahona-plancha-para-tazas-6-en-1" },
    { from: "plancha-para-tazas-6-en-1", to: "/catalogo/barahona-plancha-para-tazas-6-en-1" },

    // Barbados (slug largo; /barbados ya lo cubre productAliases)
    { from: "barbados-plancha-transfer-para-camisetas", to: "/catalogo/barbados-plancha-termica-textil" },

    // Barein
    { from: "manual-thermal-press-for-mugs", to: "/catalogo/barein-plancha-termica" },
    { from: "plancha-termica-manual-para-tazas", to: "/catalogo/barein-plancha-termica" },

    // Belice
    { from: "belice-en", to: "/catalogo/belice-plancha-termica-textil" },
    { from: "belice-plancha-transfer-manual", to: "/catalogo/belice-plancha-termica-textil" },

    // Caen
    { from: "double-station-pneumatic-heat-press", to: "/catalogo/caen-plancha-neumatica-doble-estacion" },
    { from: "plancha-neumatica-doble-estacion", to: "/catalogo/caen-plancha-neumatica-doble-estacion" },

    // Chinela
    { from: "plancha-transfer-zapatillas-chinela", to: "/catalogo/chinela-plancha-transfer-zapatillas" },

    // Doha
    { from: "doha-2", to: "/catalogo/doha-plancha-transfer-gran-formato" },
    { from: "doha-plancha-transfer-gran-formato", to: "/catalogo/doha-plancha-transfer-gran-formato" },

    // Dorian
    { from: "heat-press-for-plates", to: "/catalogo/dorian-plancha-termica-platos" },
    { from: "plancha-termica-para-platos", to: "/catalogo/dorian-plancha-termica-platos" },

    // Esparta
    { from: "esparta-prensa-termica-neumatica", to: "/catalogo/esparta-prensa-termica-neumatica" },

    // Estambul (Wordpress) → Felina (tras el swap de fábrica)
    { from: "estambul-prensa-termica-para-espinilleras", to: "/catalogo/felina-prensa-termica-para-espinilleras" },

    // Gante
    { from: "gante-plancha-manual-gorras", to: "/catalogo/gante-plancha-manual-gorras" },

    // Guyana
    { from: "guyana-heat-press", to: "/catalogo/guyana-plancha-termica-textil" },
    { from: "plancha-transfer-sandwich-guyana", to: "/catalogo/guyana-plancha-termica-textil" },

    // Jamaica (slug largo; /jamaica ya lo cubre productAliases)
    { from: "plancha-combo-8-en-1", to: "/catalogo/jamaica-planchas-transfer-multifuncion-para-sublimacion" },

    // Kenia
    { from: "kenia-2", to: "/catalogo/kenia-plancha-termica-textil" },
    { from: "plancha-termica-para-cintas", to: "/catalogo/kenia-plancha-termica-textil" },

    // Luanda (slug largo; /luanda ya lo cubre productAliases)
    { from: "plancha-termica-automatica-profesional", to: "/catalogo/luanda-plancha-termica-automatica" },

    // Maine (slug largo; /maine ya lo cubre productAliases)
    { from: "plancha-6-en-1maine", to: "/catalogo/maine-plancha-para-tazas" },

    // Miranda
    { from: "miranda-prensa-termica-automatica-electrica", to: "/catalogo/miranda-prensa-termica-automatica-electrica" },

    // Normandía (I, II, III; /normandia-ii y /normandia-iii ya los cubre productAliases)
    { from: "normandy-automatic-heat-press", to: "/catalogo/normandia-i-plancha-termica-textil" },
    { from: "plancha-neumatica-profesiomal-80x100", to: "/catalogo/normandia-ii-plancha-termica-textil" },
    { from: "plancha-neumatica-profesional-80x110", to: "/catalogo/normandia-iii-plancha-termica-textil" },
    { from: "plancha-termica-neumatica-normandia", to: "/catalogo/normandia-i-plancha-termica-textil" },

    // Obrei
    { from: "heat-press-for-caps", to: "/catalogo/obrei-plancha-gorras-apertura-automatica" },
    { from: "obrei-plancha-gorras-apertura-automatica", to: "/catalogo/obrei-plancha-gorras-apertura-automatica" },

    // Pocola
    { from: "pocola-plancha-transfer-manual-pequena", to: "/catalogo/pocola-plancha-transfer-manual-pequena" },

    // Sore
    { from: "heat-press-sore", to: "/catalogo/sore-plancha-profesional-tazas" },
    { from: "sore-plancha-profesiona-tazas", to: "/catalogo/sore-plancha-profesional-tazas" },

    // Trinidad
    { from: "trinidad-prensa-termica-automatica", to: "/catalogo/trinidad-prensa-termica-automatica" },

    // Modelos retirados o nunca publicados → al catálogo general de planchas
    { from: "plancha-termica-grecia", to: "/catalogo?type=planchas" },
    { from: "plancha-termica-6-en-1-haiti", to: "/catalogo?type=planchas" },
    { from: "flat-heat-press-for-sublimation", to: "/catalogo?type=planchas" },
    { from: "plancha-plana-para-sublimar", to: "/catalogo?type=planchas" },
];
