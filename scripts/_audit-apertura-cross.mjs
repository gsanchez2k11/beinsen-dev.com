// Audita apertura/cierre/tipo cruzando el REPO (data/raw/planchas.ts)
// contra tiendasublimacion.com (según tiendaSublimacionUrl de cada plancha).
// No modifica nada. Solo reporta.

import { rawPlanchasData } from "../data/raw/planchas.ts";

const norm = (s) => (s || "").replace(/\s+/g, " ").trim().toLowerCase();

const KWS = {
    apertura: /apertura\s+(autom[aá]tica|manual|el[eé]ctrica|neum[aá]tica|electromag)/gi,
    cierre:   /cierre\s+(autom[aá]tico|manual|el[eé]ctrico|neum[aá]tico|electromag)/gi,
    tipo:     /(sandwich|s[aá]ndwich|swing[\s-]?away|multi[\s-]?funci[oó]n|semi[\s-]?autom[aá]tica|autom[aá]tica|manual|el[eé]ctrica|electromag|neum[aá]tica)/gi,
};

async function fetchTS(url) {
    try {
        const r = await fetch(url, { signal: AbortSignal.timeout(15000) });
        if (!r.ok) return { error: `HTTP ${r.status}` };
        const html = await r.text();
        // Strip scripts/styles
        const stripped = html
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ")
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ")
            .replace(/<[^>]+>/g, " ")
            .replace(/&nbsp;/gi, " ")
            .replace(/&amp;/gi, "&")
            .replace(/&quot;/gi, '"')
            .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
            .replace(/\s+/g, " ")
            .trim();
        const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] || "";
        const apertura = new Set();
        const cierre = new Set();
        const tipos = new Set();
        for (const m of stripped.matchAll(KWS.apertura)) apertura.add(norm(m[0]));
        for (const m of stripped.matchAll(KWS.cierre)) cierre.add(norm(m[0]));
        for (const m of stripped.matchAll(KWS.tipo)) {
            const t = norm(m[1]);
            if (t && t.length > 3) tipos.add(t);
        }
        return { title: title.trim(), apertura: [...apertura], cierre: [...cierre], tipos: [...tipos] };
    } catch (e) {
        return { error: e.message };
    }
}

function extractRepo(p) {
    const opening = typeof p.openingType === "object" ? p.openingType.es : p.openingType;
    const modoSpec = (p.technicalSpecs || []).find(s => {
        const lab = typeof s.label === "string" ? s.label : s.label?.es || "";
        return /modo\s+de\s+funcionamiento/i.test(lab);
    });
    const modo = modoSpec ? (typeof modoSpec.value === "string" ? modoSpec.value : modoSpec.value?.es || "") : "";
    const tipoSpec = (p.technicalSpecs || []).find(s => {
        const lab = typeof s.label === "string" ? s.label : s.label?.es || "";
        return /tipo\s+de\s+plancha/i.test(lab);
    });
    const tipoPlancha = tipoSpec ? (typeof tipoSpec.value === "string" ? tipoSpec.value : tipoSpec.value?.es || "") : "";
    return { opening, modo, tipoPlancha };
}

function detectClash(repo, ts) {
    if (!ts || ts.error) return null;
    const flags = [];
    const repoTxt = norm(`${repo.opening} ${repo.modo} ${repo.tipoPlancha}`);
    const tsApertura = ts.apertura.join(" | ");
    const tsCierre = ts.cierre.join(" | ");
    const tsTitle = norm(ts.title);

    // Semiautomática en TS vs manual/electromagnética/eléctrica en repo?
    const tsSemi = /semi[\s-]?autom[aá]tic/i.test(tsTitle) || ts.tipos.includes("semiautomatica") || ts.tipos.includes("semi-automatica");
    if (tsSemi && !/electromag|autom[aá]tic/i.test(repoTxt)) flags.push("TS dice semiautomática, repo NO refleja componente automático");

    // Apertura automática en TS vs manual en repo
    if (/autom[aá]tic/i.test(tsApertura) && /manual/i.test(repo.opening || "") && !/electromag/i.test(repo.opening || "")) {
        flags.push("TS: apertura automática — repo openingType: Manual");
    }
    // Cierre manual en TS vs eléctrica/automática en repo (no incompatible, informativo)
    // Apertura manual en TS vs automática en repo
    if (/manual/i.test(tsApertura) && !/manual/i.test(repo.opening || "") && /autom|electromag|neum/i.test(repo.opening || "")) {
        flags.push("TS: apertura manual — repo openingType: " + repo.opening);
    }
    // Neumática en TS vs eléctrica/electromagnética en repo
    if (/neum[aá]tic/i.test(tsTitle) && !/neum[aá]tic/i.test(repo.opening || "") && !/neum[aá]tic/i.test(repo.modo || "")) {
        flags.push("TS: neumática — repo openingType: " + repo.opening);
    }
    // Electromagnética en TS vs no en repo
    if (/electromag/i.test(tsTitle) && !/electromag/i.test(repo.opening || "")) {
        flags.push("TS: electromagnética — repo openingType: " + repo.opening);
    }
    return flags;
}

const visible = rawPlanchasData.filter(p => !p.hidden);
const withUrl = visible.filter(p => p.tiendaSublimacionUrl);
console.log(`Total planchas visibles: ${visible.length} · con URL tiendasublimacion: ${withUrl.length}\n`);

// Fetch en paralelo (limitamos a 8 concurrentes)
const results = [];
const limit = 8;
for (let i = 0; i < withUrl.length; i += limit) {
    const chunk = withUrl.slice(i, i + limit);
    const chunkResults = await Promise.all(chunk.map(async (p) => {
        const ts = await fetchTS(p.tiendaSublimacionUrl);
        const repo = extractRepo(p);
        const flags = detectClash(repo, ts);
        return { p, ts, repo, flags };
    }));
    results.push(...chunkResults);
    process.stderr.write(`   ${Math.min(i + limit, withUrl.length)}/${withUrl.length}\r`);
}
process.stderr.write("\n\n");

// Reporte
console.log("=".repeat(90));
console.log("DISCREPANCIAS APERTURA / CIERRE / TIPO — repo vs tiendasublimacion.com");
console.log("=".repeat(90));

let clashes = 0;
for (const { p, ts, repo, flags } of results) {
    console.log(`\n▶ ${p.name.es}  [${p.slug}]`);
    console.log(`   REPO   openingType:    ${repo.opening || "(vacío)"}`);
    console.log(`   REPO   Modo funcion.:  ${repo.modo || "(vacío)"}`);
    console.log(`   REPO   Tipo plancha:   ${repo.tipoPlancha || "(vacío)"}`);
    if (ts?.error) {
        console.log(`   TS     ${ts.error}`);
        continue;
    }
    console.log(`   TS     title:      ${ts.title}`);
    console.log(`   TS     apertura:   ${ts.apertura.join(" · ") || "(no detectada)"}`);
    console.log(`   TS     cierre:     ${ts.cierre.join(" · ") || "(no detectado)"}`);
    if (flags && flags.length > 0) {
        clashes++;
        for (const f of flags) console.log(`   ⚠ ${f}`);
    }
}

console.log(`\n\n${"=".repeat(90)}`);
console.log(`TOTAL discrepancias detectadas por heurística: ${clashes}/${withUrl.length}`);
console.log(`(Revísalo visualmente arriba — la heurística puede tener falsos negativos)`);
