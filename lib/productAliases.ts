import { rawPlanchasData } from "../data/raw/planchas";

/**
 * URLs cortas de marketing para las planchas.
 *
 *   beinsen.com/esparta  →  /catalogo/esparta-prensa-termica-neumatica
 *
 * El alias es el primer segmento del slug (el nombre del modelo). Si dos
 * productos comparten ese segmento (p. ej. la serie Normandía), se usa
 * primer + segundo segmento para desambiguar. Si aun así colisiona o
 * choca con una ruta real del sitio, ese producto se queda sin alias
 * corto: no se genera redirección y no se rompe nada.
 *
 * IMPORTANTE para SEO: el alias corto SOLO redirige (308) a la URL larga.
 * La URL larga sigue siendo la canónica — sin contenido duplicado.
 */

// Rutas reales del sitio: un alias jamás puede tapar una de estas.
const RESERVED_PATHS = new Set([
    "planchas", "accesorios", "consumibles", "comparar", "contacto",
    "asesor", "casos-exito", "aprende", "novedades", "soporte",
    "legal", "privacidad", "condiciones", "tienda-sublimacion",
    "en", "pt", "it", "api", "manuales", "products", "_next", "favicon.ico",
]);

export interface ProductAlias {
    /** Segmento corto de marketing, p. ej. "esparta". */
    alias: string;
    /** Slug completo y canónico, p. ej. "esparta-prensa-termica-neumatica". */
    slug: string;
}

function buildProductAliases(): ProductAlias[] {
    const slugs = rawPlanchasData
        .map((p) => p.slug)
        .filter((s): s is string => typeof s === "string" && s.length > 0);

    // Cuántos slugs comparten el mismo primer segmento.
    const firstSegmentCount = new Map<string, number>();
    for (const slug of slugs) {
        const seg = slug.split("-")[0];
        firstSegmentCount.set(seg, (firstSegmentCount.get(seg) ?? 0) + 1);
    }

    const used = new Set<string>();
    const result: ProductAlias[] = [];

    for (const slug of slugs) {
        const parts = slug.split("-");
        const first = parts[0];

        // Único → alias corto. Colisión → primer + segundo segmento
        // (p. ej. "normandia-i", "normandia-ii", "normandia-iii").
        const alias =
            (firstSegmentCount.get(first) ?? 0) > 1
                ? parts.slice(0, 2).join("-")
                : first;

        // Descartar si choca con una ruta real, ya está en uso, o no acorta nada.
        if (RESERVED_PATHS.has(alias) || used.has(alias) || alias === slug) {
            continue;
        }

        used.add(alias);
        result.push({ alias, slug });
    }

    return result;
}

export const productAliases: ProductAlias[] = buildProductAliases();
