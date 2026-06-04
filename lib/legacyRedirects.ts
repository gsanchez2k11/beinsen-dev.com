/**
 * Redirecciones 308 para URLs heredadas del antiguo Wordpress de beinsen.com.
 *
 * Cada entrada lleva una URL pública antigua (formato /<slug-wordpress>) a la
 * URL corta de marketing (/alaska, /jamaica, etc.). Esa URL corta luego
 * redirige al slug canónico actual /catalogo/<slug>.
 *
 * ¿Por qué dos saltos en lugar de uno?
 *   - El alias corto es ESTABLE: /alaska siempre será Alaska.
 *   - El slug canónico /catalogo/alaska-plancha-termica-textil puede cambiar
 *     en el futuro (renombrado del modelo, recategorización, swap de fábrica
 *     como el Felina<->Estambul). Apuntando al alias corto, las URLs
 *     antiguas siguen funcionando automáticamente sin tener que tocar
 *     este archivo cada vez.
 *
 * Para modelos retirados o nunca publicados (Grecia, Haití, Riad) se
 * redirige directamente al catálogo general.
 */

import { productAliases } from "./productAliases";

export interface LegacyRedirect {
    /** URL antigua sin barra inicial. Coincide con el `source` de Next. */
    from: string;
    /** Destino dentro del sitio actual (sin host). */
    to: string;
}

// Helper: devuelve el alias corto registrado para un slug canónico. Lanza si
// no existe (evita typos silenciosos al editar este archivo).
function alias(slug: string): string {
    const a = productAliases.find((p) => p.slug === slug);
    if (!a) throw new Error(`No hay alias corto para el slug "${slug}". Revisa lib/productAliases.ts.`);
    return `/${a.alias}`;
}

export const legacyRedirects: LegacyRedirect[] = [
    // Alaska
    { from: "alaska-prensa-termica-electrica-compacta-sublimacion", to: alias("alaska-plancha-termica-textil") },

    // Alina
    { from: "plancha-termica-para-tazas-4-en-1-alina", to: alias("alina-plancha-para-tazas") },

    // Andra
    { from: "heat-press-for-cups", to: alias("andra-prensa-automatica-tazas") },
    { from: "plancha-para-tazas", to: alias("andra-prensa-automatica-tazas") },

    // Aruba
    { from: "double-mug-press", to: alias("aruba-plancha-para-tazas") },
    { from: "plancha-para-tazas-doble", to: alias("aruba-plancha-para-tazas") },

    // Barahona
    { from: "heat-press-mug-6-in-1", to: alias("barahona-plancha-para-tazas-6-en-1") },
    { from: "plancha-para-tazas-6-en-1", to: alias("barahona-plancha-para-tazas-6-en-1") },

    // Barbados
    { from: "barbados-plancha-transfer-para-camisetas", to: alias("barbados-plancha-termica-textil") },

    // Barein
    { from: "manual-thermal-press-for-mugs", to: alias("barein-plancha-termica") },
    { from: "plancha-termica-manual-para-tazas", to: alias("barein-plancha-termica") },

    // Belice
    { from: "belice-en", to: alias("belice-plancha-termica-textil") },
    { from: "belice-plancha-transfer-manual", to: alias("belice-plancha-termica-textil") },

    // Caen
    { from: "double-station-pneumatic-heat-press", to: alias("caen-plancha-neumatica-doble-estacion") },
    { from: "plancha-neumatica-doble-estacion", to: alias("caen-plancha-neumatica-doble-estacion") },

    // Chinela
    { from: "plancha-transfer-zapatillas-chinela", to: alias("chinela-plancha-transfer-zapatillas") },

    // Doha
    { from: "doha-2", to: alias("doha-plancha-transfer-gran-formato") },
    { from: "doha-plancha-transfer-gran-formato", to: alias("doha-plancha-transfer-gran-formato") },

    // Dorian
    { from: "heat-press-for-plates", to: alias("dorian-plancha-termica-platos") },
    { from: "plancha-termica-para-platos", to: alias("dorian-plancha-termica-platos") },

    // Esparta
    { from: "esparta-prensa-termica-neumatica", to: alias("esparta-prensa-termica-neumatica") },

    // Estambul (Wordpress URL apunta a la espinilleras, que ahora es Felina tras swap de fábrica)
    { from: "estambul-prensa-termica-para-espinilleras", to: alias("felina-prensa-termica-para-espinilleras") },

    // Gante
    { from: "gante-plancha-manual-gorras", to: alias("gante-plancha-manual-gorras") },

    // Guyana
    { from: "guyana-heat-press", to: alias("guyana-plancha-termica-textil") },
    { from: "plancha-transfer-sandwich-guyana", to: alias("guyana-plancha-termica-textil") },

    // Jamaica
    { from: "plancha-combo-8-en-1", to: alias("jamaica-planchas-transfer-multifuncion-para-sublimacion") },

    // Kenia
    { from: "kenia-2", to: alias("kenia-plancha-termica-textil") },
    { from: "plancha-termica-para-cintas", to: alias("kenia-plancha-termica-textil") },

    // Luanda
    { from: "plancha-termica-automatica-profesional", to: alias("luanda-plancha-termica-automatica") },

    // Maine
    { from: "plancha-6-en-1maine", to: alias("maine-plancha-para-tazas") },

    // Miranda
    { from: "miranda-prensa-termica-automatica-electrica", to: alias("miranda-prensa-termica-automatica-electrica") },

    // Normandía (I, II, III)
    { from: "normandy-automatic-heat-press", to: alias("normandia-i-plancha-termica-textil") },
    { from: "plancha-neumatica-profesiomal-80x100", to: alias("normandia-ii-plancha-termica-textil") },
    { from: "plancha-neumatica-profesional-80x110", to: alias("normandia-iii-plancha-termica-textil") },
    { from: "plancha-termica-neumatica-normandia", to: alias("normandia-i-plancha-termica-textil") },

    // Obrei
    { from: "heat-press-for-caps", to: alias("obrei-plancha-gorras-apertura-automatica") },
    { from: "obrei-plancha-gorras-apertura-automatica", to: alias("obrei-plancha-gorras-apertura-automatica") },

    // Pocola
    { from: "pocola-plancha-transfer-manual-pequena", to: alias("pocola-plancha-transfer-manual-pequena") },

    // Sore
    { from: "heat-press-sore", to: alias("sore-plancha-profesional-tazas") },
    { from: "sore-plancha-profesiona-tazas", to: alias("sore-plancha-profesional-tazas") },

    // Trinidad
    { from: "trinidad-prensa-termica-automatica", to: alias("trinidad-prensa-termica-automatica") },

    // Modelos retirados o nunca publicados → al catálogo general de planchas
    { from: "plancha-termica-grecia", to: "/catalogo?type=planchas" },
    { from: "plancha-termica-6-en-1-haiti", to: "/catalogo?type=planchas" },
    { from: "flat-heat-press-for-sublimation", to: "/catalogo?type=planchas" },
    { from: "plancha-plana-para-sublimar", to: "/catalogo?type=planchas" },
];
