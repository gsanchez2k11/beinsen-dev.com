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

1. Crea `public/downloads/<slug>/`.
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
public/downloads/<slug>/*.pdf
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

## Filtros del catálogo (`/planchas`)

- **Tipo**: Todo / Máquinas / Accesorios / Consumibles
- **Especialidad**: Textil, Tazas y Botellas, Gorras, Especializadas, Multifunción
- **Sistema** (sólo máquinas): Manual, Electromagnética, Neumática, Eléctrica
- **Formato** (sólo máquinas): Compacta, Estándar, Industrial, Estación de trabajo
- **Plato** (sólo máquinas): Intercambiable / Fijo
- **Máquina compatible** (accesorios/consumibles): filtra por compatibilidad con un modelo
- **Búsqueda**: por nombre **y** por referencia

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
├── icon.png                   # Favicon (logo Beinsen 512x512)
components/
├── ProductDetailView.tsx      # Ficha de producto (incluye ScrollToTopButton)
├── ScrollToTopButton.tsx      # Botón flotante "ir arriba"
├── TrustedBrands.tsx          # Partners: yoimprimo, tiendasublimacion,
│                              # tintaciss, espiraldigital, apphoto
└── ...
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
└── utils.ts
public/
├── brands/                    # Logos de partners
├── downloads/<slug>/*.pdf     # Manuales/documentación
└── products/<slug>/*.jpg      # Fotos
scripts/
├── generate-product-images.mjs
└── generate-product-downloads.mjs
```
