// Rate-limit en memoria. En serverless cada instancia tiene su propio mapa,
// así que esto NO es una protección perfecta contra un atacante distribuido;
// sí frena spam casual y bots que reusen IP. Para protección robusta,
// migrar a Upstash/Redis/Vercel KV.
type Entry = { count: number; resetAt: number };
const buckets = new Map<string, Entry>();

export function rateLimit(key: string, limit: number, windowMs: number): { ok: boolean; retryAfterSec: number } {
    const now = Date.now();
    const entry = buckets.get(key);
    if (!entry || entry.resetAt < now) {
        buckets.set(key, { count: 1, resetAt: now + windowMs });
        return { ok: true, retryAfterSec: 0 };
    }
    if (entry.count >= limit) {
        return { ok: false, retryAfterSec: Math.ceil((entry.resetAt - now) / 1000) };
    }
    entry.count++;
    return { ok: true, retryAfterSec: 0 };
}

// Limpia entradas vencidas cada 5 min. Sin esto en una instancia long-lived
// el mapa crecería indefinidamente. En serverless es irrelevante (proceso muere).
if (typeof setInterval !== 'undefined') {
    setInterval(() => {
        const now = Date.now();
        for (const [k, v] of buckets.entries()) {
            if (v.resetAt < now) buckets.delete(k);
        }
    }, 5 * 60 * 1000);
}
