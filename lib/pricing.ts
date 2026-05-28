/**
 * Visibilidad global de precios en la UI.
 *
 * Mientras esté en `false`, todos los componentes que muestran precio
 * renderizan en su lugar el texto de "Consultar PVP" del idioma activo.
 * Los datos numéricos en data/raw/*.ts se mantienen intactos; solo se
 * oculta su renderizado.
 *
 * Para reactivar los precios cuando se actualicen las tarifas:
 *   1) Poner `PRICES_VISIBLE = true` aquí.
 *   2) Verificar que data/raw/*.ts tiene los nuevos importes.
 */
export const PRICES_VISIBLE = false;
