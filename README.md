# beinsen-dev.com

Aplicación web de Beinsen construida con [Next.js 16](https://nextjs.org) (App Router + Turbopack).

## Desarrollo

```bash
npm run dev    # arranca en http://localhost:3000
npm run build  # compila para producción
npm run start  # sirve el build de producción
npm run images # regenera el manifiesto de imágenes locales
```

---

## Gestión de imágenes de producto

Las imágenes de cada producto se gestionan mediante una **convención basada en carpetas**. No hay que editar `data/products.ts` para añadir o cambiar imágenes.

### Cómo añadir imágenes a un producto

1. Localiza el `slug` del producto en `data/products.ts` (ej. `sore-plancha-profesional-tazas`).
2. Crea la carpeta `public/products/<slug>/`.
3. Coloca las imágenes dentro.
4. Despliega (`./deploy.sh`) o regenera el manifiesto (`npm run images`) y reinicia.

### Ejemplo

```
public/products/
├── sore-plancha-profesional-tazas/
│   ├── 01-principal.jpg    ← imagen principal (tarjetas, metadata, Open Graph)
│   ├── 02-detalle.jpg      ← galería
│   └── 03-lateral.webp     ← galería
└── trinidad-prensa-termica-automatica/
    ├── 01-main.png
    └── 02-closeup.jpg
```

### Reglas

- **Nombre de carpeta** = `slug` exacto del producto.
- **Formatos**: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.avif`.
- **Orden**: alfabético. Usa prefijos `01-`, `02-`, `03-` para controlarlo.
- **Primera imagen** = principal (tarjeta de catálogo, `<meta>`, Open Graph, Twitter, JSON-LD).
- **Todas las imágenes** = galería que se muestra en la página de detalle.
- **Fallback**: si un slug no tiene carpeta local (o está vacía), se usan las URLs externas definidas en `data/products.ts`.

### Arquitectura

```
public/products/<slug>/*.jpg
        │
        ▼
scripts/generate-product-images.mjs  ← se ejecuta en prebuild/predev
        │
        ▼
data/product-images.json            ← manifiesto { slug: [rutas] }
        │
        ▼
lib/productImages.ts                ← enrichWithLocalImages(product)
        │
        ▼
- app/planchas/[slug]/page.tsx      ← detalle + metadata
- components/CatalogProductCard.tsx ← tarjetas del catálogo
```

### Regenerar el manifiesto

El manifiesto se regenera automáticamente antes de `build` y `dev` gracias a los scripts `prebuild` y `predev` en `package.json`. Para regenerarlo manualmente:

```bash
npm run images
```

Esto actualiza `data/product-images.json` escaneando `public/products/`.

---

## Despliegue

El despliegue se hace con el script `deploy.sh`:

```bash
./deploy.sh
```

Ejecuta:
1. `git pull origin main`
2. `next build` (regenera manifiesto de imágenes como `prebuild`)
3. `pm2 restart beinsen-as`

---

## Estructura del proyecto

```
app/                  # App Router (páginas y layouts)
components/           # Componentes React
context/              # Contextos (LanguageContext)
data/
├── products.ts       # Catálogo completo (planchas, accesorios, consumibles)
├── product-images.json  # Manifiesto generado — no editar a mano
└── stories.ts        # Casos de éxito
lib/
├── i18n.ts           # Utilidades de localización
├── productImages.ts  # Helper para imágenes locales
└── utils.ts
public/
└── products/         # Imágenes locales por slug (ver sección arriba)
scripts/
└── generate-product-images.mjs  # Generador del manifiesto
```
