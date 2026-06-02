# beinsen-dev.com

Aplicación web de Beinsen construida con [Next.js 16](https://nextjs.org) (App Router + Turbopack).

## Desarrollo

```bash
npm run dev        # arranca en http://localhost:3000
npm run build      # compila para producción
npm run start      # sirve el build de producción
npm run manifests  # regenera manifiestos (imágenes + descargas)
npm run images     # sólo manifiesto de imágenes
npm run downloads  # sólo manifiesto de descargas
```

---

## Gestión de imágenes de producto

Las imágenes de cada producto se gestionan mediante una **convención basada en carpetas**. No hay que editar `data/products.ts` para añadir o cambiar imágenes.

### Cómo añadir imágenes

1. Localiza el `slug` del producto en `data/products.ts`.
2. Crea la carpeta `public/products/<slug>/`.
3. Coloca las imágenes dentro.
4. Despliega (`./deploy.sh`) o regenera el manifiesto (`npm run images`) y reinicia.

### Ejemplo

```
public/products/
├── sore-plancha-profesional-tazas/
│   ├── 01-principal.jpg    ← imagen principal (tarjetas, metadata, Open Graph)
│   ├── 02-detalle.jpg      ← galería
│   └── 03-lateral.webp
└── trinidad-prensa-termica-automatica/
    ├── 01-main.png
    └── 02-closeup.jpg
```

### Reglas

- **Nombre de carpeta** = `slug` exacto del producto.
- **Formatos**: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.avif`.
- **Orden**: alfabético. Usa prefijos `01-`, `02-` para controlarlo.
- **Primera imagen** = principal (tarjeta, `<meta>`, Open Graph, Twitter, JSON-LD, hotspotImage, storySegments ciclan por la galería).
- **Fallback**: si un slug no tiene carpeta local, se usan las URLs externas definidas en `data/products.ts`.

---

## Gestión de manuales y documentación

Misma convención que las imágenes, aplicada a PDFs/Office.

### Cómo añadir documentos

1. Crea `public/manuales/<slug>/`.
2. Coloca los archivos.
3. Regenera (`npm run downloads`) y despliega.

### Nombres reconocidos (etiquetas localizadas ES/EN/PT/IT)

- `manual.pdf` / `manual-usuario.pdf` → *Manual de Usuario*
- `ficha-tecnica.pdf` / `datasheet.pdf` → *Ficha Técnica*
- `guia.pdf`, `guia-sublimacion.pdf` → *Guía* / *Guía de Sublimación*
- `catalogo.pdf` → *Catálogo*
- `garantia.pdf` → *Garantía*
- `despiece.pdf` → *Despiece*
- `declaracion-conformidad.pdf` → *Declaración de Conformidad*

Otros nombres se muestran "prettified" (guiones → espacios, title case). Formatos soportados: `.pdf`, `.doc(x)`, `.xls(x)`.

### Flujo

```
public/manuales/<slug>/*.pdf
        │
        ▼
scripts/generate-product-downloads.mjs
        │
        ▼
data/product-downloads.json
        │
        ▼
lib/productDownloads.ts → enrichWithLocalDownloads()
        │
        ▼
ProductDetailView → sección "Centro de Recursos"
```

Si no hay manifest local, se muestran los `downloads` definidos en `data/products.ts` (si los hubiera).

---

## Campos de producto

El tipo `Plancha` y `CompatibleItem` incluyen estos campos relevantes para el PIM:

| Campo | Tipo | Visible dónde |
|---|---|---|
| `price` | `number \| string` | Interno / fallback |
| `pvp` | `number \| string` | Cabecera ficha, tarjeta catálogo, búsqueda (tiene prioridad sobre `price`) |
| `reference` | `string` | Tarjeta catálogo + ficha (**sólo accesorios/consumibles**), búsqueda |
| `tiendaSublimacionUrl` | `string` | Sección "Dónde Comprar" — link directo al producto en tiendasublimacion.com |
| `size` | `"Compacta" \| "Estándar" \| "Industrial" \| "Estación de trabajo"` | Filtro Formato |
| `openingType` | `"Manual" \| "Electromagnética" \| "Neumática" \| "Eléctrica"` | Filtro Sistema |

Los campos opcionales pueden dejarse vacíos hasta que el PIM los rellene.

---

## Filtros del catálogo (`/catalogo`)

- **Tipo**: Todo / Máquinas / Accesorios / Consumibles
- **Especialidad**: Textil, Tazas y Botellas, Gorras, Especializadas, Multifunción
- **Sistema** (sólo máquinas): Manual, Electromagnética, Neumática, Eléctrica
- **Formato** (sólo máquinas): Compacta, Estándar, Industrial, Estación de trabajo
- **Plato** (sólo máquinas): Intercambiable / Fijo
- **Máquina compatible** (accesorios/consumibles): filtra por compatibilidad con un modelo
- **Búsqueda**: por nombre **y** por referencia

---

## Asesor de compra (`/asesor`)

Wizard de 3 pasos que recomienda 1-3 modelos según uso, volumen y formato:

1. **¿Qué personalizas?** → categoría (Textil / Tazas / Gorras / Especializadas / Cualquiera)
2. **Volumen diario** → mapea a sistema de cierre (Manual para bajo; Electromagnética/Eléctrica para medio; Neumática/Eléctrica para alto)
3. **Formato de taller** → mapea a `size`

### Lógica de scoring

Cada máquina obtiene puntos por match:
- Categoría: +3 (o -2 si no hay match y el usuario eligió categoría concreta)
- Sistema ideal: +3 (primer sistema preferido)
- Sistema compatible: +2 (segundo sistema preferido)
- Formato: +2

Top 3 con puntuación > 0 se muestran con explicación "Por qué encaja".

### Mapas editables en `app/asesor/page.tsx`

- `CATEGORY_MAP`: categoría del wizard → valor de `category.es` en `products.ts`
- `VOLUME_PREFS`: volumen → lista ordenada de `openingType` preferidos
- `FORMAT_MAP`: formato → valores aceptados de `size`

---

## Comparador de modelos (`/comparar`)

Selecciona hasta 3 máquinas y las compara fila a fila.

- Slots con picker modal (búsqueda por nombre)
- Tabla con PVP, categoría, sistema, formato + unión de todas las `technicalSpecs` de las máquinas elegidas (labels localizados)
- Estado en querystring: `/comparar?ids=modelo1,modelo2,modelo3` → URL compartible
- Quick links al pie para ir a la ficha completa de cada modelo

No requiere datos adicionales en `products.ts` — usa `technicalSpecs` existentes.

---

## Centro de aprendizaje (`/aprende`)

Blog técnico basado en MDX. Sin CMS — los artículos viven en el repo.

### Crear un artículo

Crea `content/aprende/<slug>.mdx` con frontmatter:

```mdx
---
title: "Tu título aquí"
excerpt: "Resumen de 1-2 líneas que se muestra en el listado y meta description."
category: guias         # guias | tecnica | mantenimiento | troubleshooting | novedades
author: "Nombre Apellido"
authorRole: "Ingeniero de producción"
publishedAt: "2026-04-20"
heroImage: "/products/alaska-plancha-termica-textil/01.png"
videoUrl: "https://www.youtube.com/embed/XXXXX"
products:               # slugs de productos para cross-linking
  - alaska-plancha-termica-textil
  - barbados-plancha-termica-textil
downloads:              # slugs cuyos PDFs (public/manuales/<slug>/) se adjuntan
  - alaska-plancha-termica-textil
readingMinutes: 5       # opcional, se calcula automáticamente si falta
---

## Usa markdown estándar

Párrafos, listas, `código`, [enlaces](https://…), **negrita**, *cursiva*, tablas…

### Subencabezados
...
```

### Elementos que renderiza la ficha de artículo

- Hero con imagen + categoría + fecha + tiempo de lectura + autor
- Vídeo embebido (iframe) si hay `videoUrl`
- Contenido MDX con estilos tipográficos consistentes
- Sección **Descargas**: PDFs agregados desde `public/manuales/<slug>/` de los productos listados en `downloads`
- Sección **Productos relacionados**: cards completas de los `products`
- Sección **Sigue aprendiendo**: 3 artículos distintos del actual

### Cross-linking bidireccional

- En `/aprende/<slug>`: muestra los productos referenciados en `products[]`
- En `/catalogo/<slug>`: muestra artículos que citan ese slug en su `products[]` (hasta 3)

### Categorías disponibles

Editables en `lib/articles.ts` (`CATEGORY_LABELS`):

- `guias` — tutoriales paso a paso
- `tecnica` — deep dives técnicos
- `mantenimiento` — cuidado, calibración, repuestos
- `troubleshooting` — resolución de problemas
- `novedades` — lanzamientos, eventos

---

## Despliegue

```bash
./deploy.sh
```

Ejecuta, dentro de `beinsen-dev-as/` (branch `as`):

1. `git pull origin as`
2. Regenera manifiestos de imágenes y descargas
3. `next build`
4. `pm2 restart beinsen-as`

---

## Estructura del proyecto

```
app/                           # App Router (páginas y layouts)
├── favicon.ico                # Favicon (logo Beinsen)
├── aprende/                   # Centro de aprendizaje (MDX)
│   ├── page.tsx               # Índice
│   └── [slug]/page.tsx        # Artículo
├── asesor/                    # Wizard "¿Qué plancha necesito?"
├── comparar/                  # Comparador de modelos
├── planchas/                  # Catálogo + fichas
└── ...
components/
├── ProductDetailView.tsx      # Ficha de producto (+ ScrollToTopButton)
├── ScrollToTopButton.tsx      # Botón flotante "ir arriba"
├── TrustedBrands.tsx          # Partners: yoimprimo, tiendasublimacion,
│                              # tintaciss, espiraldigital, apphoto
├── CatalogProductCard.tsx
├── Navbar.tsx                 # Incluye links a /asesor /comparar /aprende
└── ...
content/
└── aprende/<slug>.mdx         # Artículos del blog
context/                       # LanguageContext
data/
├── products.ts                # Catálogo (planchas, accesorios, consumibles)
├── product-images.json        # Manifiesto generado — NO editar a mano
├── product-downloads.json     # Manifiesto generado — NO editar a mano
└── stories.ts
lib/
├── i18n.ts
├── productImages.ts           # enrichWithLocalImages()
├── productDownloads.ts        # enrichWithLocalDownloads()
├── articles.ts                # Loader de MDX + tipos del frontmatter
└── utils.ts
public/
├── brands/                    # Logos de partners
├── downloads/<slug>/*.pdf     # Manuales/documentación
└── products/<slug>/*.jpg      # Fotos
scripts/
├── generate-product-images.mjs
└── generate-product-downloads.mjs
```
