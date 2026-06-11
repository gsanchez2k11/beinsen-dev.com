/**
 * Advertencias por producto que se renderizan como banner destacado en la
 * ficha. Pensado para limitaciones tecnicas que el cliente debe conocer
 * antes de imprimir o trabajar con el accesorio (ej. margenes del area
 * util, voltaje, compatibilidad, etc.).
 *
 * Las 6 resistencias para tazas comparten el mismo aviso del fabricante
 * (Microtec, junio 2026): los 5-10 mm desde el borde del elemento no
 * tienen hilo calefactor; el diseno impreso debe quedar dentro del area
 * central para que sublime de forma uniforme.
 */

export interface ProductWarning {
    es: string;
    en: string;
    pt: string;
    it: string;
}

const MUG_HEATER_EDGE_WARNING: ProductWarning = {
    es: "Los 5-10 mm del borde de la resistencia no tienen hilo calefactor y, por tanto, no calientan. Mantén el diseño dentro del área central de la resistencia para que la sublimación quede uniforme. Si mides la temperatura, hazlo en el centro del elemento.",
    en: "The 5-10 mm strip along the heating element's edge has no heating wires and therefore does not heat up. Keep your design inside the central active area so sublimation is even across the print. When measuring temperature, do it at the centre of the element.",
    pt: "Os 5-10 mm a partir da borda da resistência não têm fio aquecedor e, portanto, não aquecem. Mantenha o desenho dentro da área central da resistência para que a sublimação fique uniforme. Se medir a temperatura, faça-o no centro do elemento.",
    it: "I 5-10 mm dal bordo della resistenza non hanno filo riscaldante e quindi non si scaldano. Mantieni il disegno entro l'area centrale della resistenza affinché la sublimazione risulti uniforme. Per misurare la temperatura, fallo al centro dell'elemento.",
};

/**
 * Mapeo slug -> advertencia. Si un slug no aparece aquí, no se renderiza
 * banner. Para añadir una nueva: una linea por slug, reusando el objeto
 * de mensaje si comparten texto.
 */
export const PRODUCT_WARNINGS: Record<string, ProductWarning> = {
    "resistencia-cilindrica-tazas-11oz-tipo-a": MUG_HEATER_EDGE_WARNING,
    "resistencia-tazas-11oz-a": MUG_HEATER_EDGE_WARNING,
    "resistencia-tazas-11oz-b": MUG_HEATER_EDGE_WARNING,
    "resistencia-tazas-6-10oz": MUG_HEATER_EDGE_WARNING,
    "resistencia-tazas-conicas-17oz": MUG_HEATER_EDGE_WARNING,
    "resistencia-doble-taza-11-15oz": MUG_HEATER_EDGE_WARNING,
};

export function getProductWarning(slug?: string): ProductWarning | undefined {
    if (!slug) return undefined;
    return PRODUCT_WARNINGS[slug];
}
