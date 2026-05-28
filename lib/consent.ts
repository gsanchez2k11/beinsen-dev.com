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
 * El consentimiento caduca a los 24 meses (Guía AEPD cookies, jul. 2023).
 * Al caducar, `getConsent()` devuelve `null` y el banner se vuelve a mostrar.
 *
 * NUNCA cargar trackers fuera de este flujo: incumpliría el bloqueo previo.
 */

export type Consent = "all" | "necessary" | null;

const KEY = "beinsen_cookie_consent";
const EVENT = "beinsen:consent";
const MAX_AGE_MS = 730 * 24 * 60 * 60 * 1000; // 24 meses

interface StoredConsent {
    /** Decisión del usuario. */
    v: "all" | "necessary";
    /** Timestamp en ms (Date.now()) en que se guardó la decisión. */
    t: number;
}

function read(): StoredConsent | null {
    if (typeof window === "undefined") return null;
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    try {
        const parsed = JSON.parse(raw) as StoredConsent;
        if ((parsed.v === "all" || parsed.v === "necessary") && typeof parsed.t === "number") {
            return parsed;
        }
        return null;
    } catch {
        // Formato legado (string plano de versiones previas): invalida y fuerza re-consult.
        return null;
    }
}

export function getConsent(): Consent {
    const s = read();
    if (!s) return null;
    if (Date.now() - s.t > MAX_AGE_MS) return null; // caducado → re-prompt
    return s.v;
}

export function setConsent(c: Exclude<Consent, null>): void {
    if (typeof window === "undefined") return;
    const payload: StoredConsent = { v: c, t: Date.now() };
    window.localStorage.setItem(KEY, JSON.stringify(payload));
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
