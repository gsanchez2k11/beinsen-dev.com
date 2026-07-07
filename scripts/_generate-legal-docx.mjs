// Genera revision-legal-beinsen-DRAFT.docx en Descargas con el contenido
// legal en castellano de las 6 paginas publicas. Pensado para que el jefe
// del usuario lo edite y se lo pase a la abogada.

import fs from "node:fs";
import path from "node:path";
import {
    Document,
    Packer,
    Paragraph,
    HeadingLevel,
    TextRun,
    AlignmentType,
    PageBreak,
    Table,
    TableRow,
    TableCell,
    WidthType,
    BorderStyle,
    ExternalHyperlink,
} from "docx";

const PAGES = [
    { file: "app/privacidad/page.tsx", title: "Política de Privacidad" },
    { file: "app/cookies/page.tsx", title: "Política de Cookies" },
    { file: "app/condiciones/page.tsx", title: "Condiciones Generales" },
    { file: "app/legal/page.tsx", title: "Aviso Legal" },
    { file: "app/subprocesadores/page.tsx", title: "Subprocesadores" },
    { file: "app/accesibilidad/page.tsx", title: "Declaración de Accesibilidad" },
];

// ---------------------------------------------------------------------------
// Extraccion del bloque ES del JSX

function extractEsBlock(src) {
    const i = src.indexOf("es: (");
    if (i < 0) return null;
    // Buscar el cierre con ), justo al nivel correcto
    let depth = 0, j = i + 5; // empezamos justo despues de "es: ("
    while (j < src.length) {
        const c = src[j];
        if (c === "(") depth++;
        else if (c === ")") { if (depth === 0) break; depth--; }
        j++;
    }
    return src.slice(i + 5, j);
}

// ---------------------------------------------------------------------------
// Normalizacion JSX -> "HTML limpio" + extras

function normalizeJsx(jsx) {
    let t = jsx;
    // Quitar className="..."
    t = t.replace(/\s+className=\{`[^`]*`\}|\s+className="[^"]*"|\s+className=\{"[^"]*"\}/g, "");
    // Quitar key={...}
    t = t.replace(/\s+key=\{[^}]*\}/g, "");
    // Quitar aria-*=
    t = t.replace(/\s+aria-\w+="[^"]*"/g, "");
    // Quitar target=, rel=, role=, style=, id=
    t = t.replace(/\s+(target|rel|role|style|id)="[^"]*"/g, "");
    // Quitar onClick / onChange / etc
    t = t.replace(/\s+on[A-Z]\w+=\{[^}]*\}/g, "");
    // Quitar {" "} -> espacio
    t = t.replace(/\{\s*"\s*"\s*\}/g, " ");
    // Convertir entidades HTML basicas
    t = t.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
    return t;
}

// Expande arrays JS estaticos del tipo  { [ "a", "b" ].map((item,idx) => ( <li ...>{item}</li> )) }
// hacia <li>a</li><li>b</li>
function expandStaticArrays(jsx) {
    return jsx.replace(
        /\{\s*\[\s*([\s\S]*?)\s*\]\.map\s*\(\s*\(?[\w,\s]+\)?\s*=>\s*\(\s*<li[^>]*>([\s\S]*?)<\/li>\s*\)\s*\)\s*\}/g,
        (m, arr, liInner) => {
            // Solo soportamos arrays de strings simples: "..."
            const items = [];
            const re = /"((?:[^"\\]|\\.)*)"/g;
            let mm;
            while ((mm = re.exec(arr)) !== null) {
                items.push(mm[1].replace(/\\"/g, '"').replace(/\\n/g, " "));
            }
            // Si el li tiene texto fijo + {item}, sustituimos {item} por cada string
            return items.map((s) => `<li>${liInner.replace(/\{\s*item\s*\}/g, s)}</li>`).join("");
        }
    );
}

// Expande objetos array para tablas/cards tipo { title, desc } - patron usado en privacidad/derechos
function expandObjectArrays(jsx) {
    // Patron: { [ { title: "...", desc: "..." }, ... ].map((right, idx) => ( ... )) }
    return jsx.replace(
        /\{\s*\[\s*(\{[\s\S]*?\})\s*\]\.map\s*\(\s*\([^)]+\)\s*=>\s*\(([\s\S]*?)\)\s*\)\s*\}/g,
        (m, objs, template) => {
            try {
                // Crudo: extraemos pares { title: "x", desc: "y" } y los aplanamos a parrafos
                const out = [];
                const re = /\{\s*title:\s*"([^"]+)"\s*,\s*desc:\s*"([^"]+)"\s*\}/g;
                let mm;
                while ((mm = re.exec(objs)) !== null) {
                    out.push(`<h4>${mm[1]}</h4><p>${mm[2]}</p>`);
                }
                return out.join("");
            } catch {
                return "";
            }
        }
    );
}

// ---------------------------------------------------------------------------
// Parseo de HTML basico a nodos docx

function decodeText(s) {
    return s
        .replace(/\s+/g, " ")
        .trim();
}

// Convierte un fragmento inline (puede tener <a>, <span>, <strong>, <code>) a TextRun[]
function parseInline(html) {
    const runs = [];
    const re = /<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>|<(strong|b)>([\s\S]*?)<\/\3>|<(span|code)[^>]*>([\s\S]*?)<\/\5>/g;
    let last = 0;
    let m;
    while ((m = re.exec(html)) !== null) {
        if (m.index > last) {
            runs.push(new TextRun({ text: decodeText(html.slice(last, m.index)) }));
        }
        if (m[1]) {
            // link
            const url = m[1];
            const text = decodeText(stripAllTags(m[2]));
            runs.push(
                new ExternalHyperlink({
                    link: url,
                    children: [new TextRun({ text, style: "Hyperlink", color: "0563C1", underline: {} })],
                })
            );
        } else if (m[3]) {
            // strong
            runs.push(new TextRun({ text: decodeText(stripAllTags(m[4])), bold: true }));
        } else if (m[5]) {
            // span or code
            const t = decodeText(stripAllTags(m[6]));
            if (m[5] === "code") runs.push(new TextRun({ text: t, font: "Consolas" }));
            else runs.push(new TextRun({ text: t }));
        }
        last = m.index + m[0].length;
    }
    if (last < html.length) {
        runs.push(new TextRun({ text: decodeText(html.slice(last)) }));
    }
    return runs.length ? runs : [new TextRun({ text: decodeText(stripAllTags(html)) })];
}

function stripAllTags(s) {
    return s.replace(/<[^>]+>/g, "");
}

// Parsea una tabla <table>...</table> a docx Table
function parseTable(tableHtml) {
    const headRows = [];
    const bodyRows = [];
    const thRe = /<th[^>]*>([\s\S]*?)<\/th>/g;
    const tdRe = /<td[^>]*>([\s\S]*?)<\/td>/g;
    const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
    const headSection = tableHtml.match(/<thead[\s\S]*?<\/thead>/);
    const bodySection = tableHtml.match(/<tbody[\s\S]*?<\/tbody>/);
    if (headSection) {
        let tr;
        const trReLocal = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
        while ((tr = trReLocal.exec(headSection[0])) !== null) {
            const cells = [];
            let th;
            const thReLocal = /<th[^>]*>([\s\S]*?)<\/th>/g;
            while ((th = thReLocal.exec(tr[1])) !== null) cells.push(th[1]);
            if (cells.length) headRows.push(cells);
        }
    }
    if (bodySection) {
        let tr;
        const trReLocal = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
        while ((tr = trReLocal.exec(bodySection[0])) !== null) {
            const cells = [];
            let td;
            const tdReLocal = /<td[^>]*>([\s\S]*?)<\/td>/g;
            while ((td = tdReLocal.exec(tr[1])) !== null) cells.push(td[1]);
            if (cells.length) bodyRows.push(cells);
        }
    }

    const mkCell = (html, bold) =>
        new TableCell({
            children: [new Paragraph({ children: parseInline(html).map((r) => bold ? new TextRun({ ...r.options, bold: true }) : r) })],
            width: { size: 100 / (headRows[0]?.length || 4), type: WidthType.PERCENTAGE },
        });

    const rows = [];
    for (const h of headRows) rows.push(new TableRow({ tableHeader: true, children: h.map((c) => mkCell(c, true)) }));
    for (const b of bodyRows) rows.push(new TableRow({ children: b.map((c) => mkCell(c, false)) }));
    if (!rows.length) return null;

    return new Table({ rows, width: { size: 100, type: WidthType.PERCENTAGE } });
}

// Walker principal: convierte el HTML de un bloque ES a nodos docx
function htmlToDocxNodes(html) {
    const nodes = [];

    // Procesamos por bloques de nivel superior buscando tags conocidos
    const blockRe = /<h2[^>]*>([\s\S]*?)<\/h2>|<h3[^>]*>([\s\S]*?)<\/h3>|<h4[^>]*>([\s\S]*?)<\/h4>|<table[^>]*>([\s\S]*?)<\/table>|<p[^>]*>([\s\S]*?)<\/p>|<li[^>]*>([\s\S]*?)<\/li>|<footer[^>]*>([\s\S]*?)<\/footer>/g;
    let m;
    while ((m = blockRe.exec(html)) !== null) {
        if (m[1]) {
            nodes.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: parseInline(m[1]), spacing: { before: 240, after: 120 } }));
        } else if (m[2]) {
            nodes.push(new Paragraph({ heading: HeadingLevel.HEADING_3, children: parseInline(m[2]), spacing: { before: 180, after: 100 } }));
        } else if (m[3]) {
            nodes.push(new Paragraph({ heading: HeadingLevel.HEADING_4, children: parseInline(m[3]), spacing: { before: 140, after: 80 } }));
        } else if (m[4]) {
            const tbl = parseTable("<table>" + m[4] + "</table>");
            if (tbl) {
                nodes.push(tbl);
                nodes.push(new Paragraph({ text: "", spacing: { after: 120 } }));
            }
        } else if (m[5]) {
            nodes.push(new Paragraph({ children: parseInline(m[5]), spacing: { after: 120 } }));
        } else if (m[6]) {
            nodes.push(new Paragraph({ children: parseInline(m[6]), bullet: { level: 0 }, spacing: { after: 60 } }));
        } else if (m[7]) {
            // footer (version / fecha)
            nodes.push(new Paragraph({
                children: [new TextRun({ text: decodeText(stripAllTags(m[7])), italics: true, color: "888888" })],
                alignment: AlignmentType.CENTER,
                spacing: { before: 240 },
            }));
        }
    }
    return nodes;
}

// ---------------------------------------------------------------------------
// Construccion del documento completo

const sections = [];

// Portada
sections.push({
    children: [
        new Paragraph({ text: "", spacing: { after: 2000 } }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: "BEINSEN.COM", bold: true, size: 56 })],
            spacing: { after: 400 },
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: "Borrador del bloque legal", size: 36 })],
            spacing: { after: 200 },
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: "para revisión interna y validación legal", italics: true, size: 24, color: "666666" })],
            spacing: { after: 600 },
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: "Futura Teck de Murcia S.L.U. · CIF B30507743", size: 22 })],
            spacing: { after: 100 },
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: "Av. Alto de las Atalayas, 18 — 30110 Cabezo de Torres, Murcia", size: 22 })],
            spacing: { after: 600 },
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: "Generado el " + new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" }), size: 20, color: "888888" })],
        }),
    ],
});

// Indice y contenido por pagina
const indexChildren = [
    new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "Índice", bold: true })],
        spacing: { after: 240 },
    }),
];
PAGES.forEach((p, i) => {
    indexChildren.push(
        new Paragraph({
            children: [new TextRun({ text: `${i + 1}. ${p.title}`, size: 26 })],
            spacing: { after: 100 },
        })
    );
});
indexChildren.push(
    new Paragraph({
        children: [new TextRun({ text: "Cómo usar este documento", bold: true, size: 24 })],
        spacing: { before: 400, after: 120 },
    }),
    new Paragraph({
        children: [new TextRun({ text: "Cada sección reproduce el texto que actualmente está publicado en beinsen.com en castellano. Tu jefe puede revisar, marcar cambios y devolverlo. Luego se manda a la abogada para validación. Las versiones en inglés, portugués e italiano se han redactado a partir de estos textos (no figuran en este documento; si la abogada cambia algo aquí, replicaremos el cambio en las otras 3 traducciones)." })],
        spacing: { after: 240 },
    })
);
sections.push({ children: indexChildren });

// Una seccion docx por pagina
for (const p of PAGES) {
    const raw = fs.readFileSync(p.file, "utf8");
    const block = extractEsBlock(raw);
    if (!block) {
        console.warn("No se pudo extraer ES de", p.file);
        continue;
    }
    let html = normalizeJsx(block);
    html = expandObjectArrays(html);
    html = expandStaticArrays(html);

    const children = [
        new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [new TextRun({ text: p.title, bold: true })],
            spacing: { before: 0, after: 240 },
        }),
        ...htmlToDocxNodes(html),
    ];
    sections.push({ children });
}

const doc = new Document({
    creator: "Beinsen",
    title: "Borrador legal Beinsen",
    styles: {
        default: {
            document: { run: { font: "Calibri", size: 22 } },
        },
    },
    sections,
});

const out = path.join("C:/Users/futur/Downloads", "revision-legal-beinsen-DRAFT.docx");
const buf = await Packer.toBuffer(doc);
fs.writeFileSync(out, buf);
console.log("Guardado: " + out + "  (" + (buf.length / 1024).toFixed(0) + " KB)");
