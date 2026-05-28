/**
 * Gestión del consentimiento de cookies — LSSI art. 22.2 + RGPD.
 *
 * El banner ([components/CookieConsent.tsx]) ofrece tres opciones equivalentes
 * en visibilidad:
 *   - "all":       acepta cookies técnicas + analítica/marketing
 *   - "necessary": solo cookies técnicas (default si el usuario cierra sin elegir)
 *
 * Cualquier script que dependa de consentimiento ([components/Analytics.tsx],
 * píxeles, embeds bajo demanda, etc.) debe importar `getConsent()` o suscribirse
 * a `subscribeConsent()` para reaccionar al cambio sin necesidad de recargar.
 *
 * NUNCA cargar trackers fuera de este flujo: incumpliría el bloqueo previo
 * exigido por la guía AEPD de cookies (jul. 2023).
 */

export type Consent = "all" | "necessary" | null;

const KEY = "beinsen_cookie_consent";
const EVENT = "beinsen:consent";

export function getConsent(): Consent {
    if (typeof window === "undefined") return null;
    const v = window.localStorage.getItem(KEY);
    return v === "all" || v === "necessary" ? v : null;
}

export function setConsent(c: Exclude<Consent, null>): void {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(KEY, c);
    window.dispatchEvent(new CustomEvent(EVENT, { detail: c }));
}

export function clearConsent(): void {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(KEY);
    window.dispatchEvent(new CustomEvent(EVENT, { detail: null }));
}

/** Suscribe `cb` a los cambios de consentimiento. Devuelve fn para desuscribir. */
export function subscribeConsent(cb: (c: Consent) => void): () => void {
    if (typeof window === "undefined") return () => {};
    const handler = (e: Event) => cb((e as CustomEvent).detail as Consent);
    window.addEventListener(EVENT, handler);
    return () => window.removeEventListener(EVENT, handler);
}
