# Imágenes de Productos

Para añadir imágenes a un producto, crea una carpeta con el `slug` del producto y coloca las imágenes dentro.

## Convención

```
public/products/
├── sore-plancha-profesional-tazas/
│   ├── 01-principal.jpg       ← Primera alfabéticamente = imagen principal
│   ├── 02-detalle.jpg
│   └── 03-lateral.webp
└── trinidad-prensa-termica-automatica/
    ├── 01-main.png
    └── 02-closeup.jpg
```

## Reglas

- Nombre de carpeta = `slug` del producto (ver `data/products.ts`)
- Formatos aceptados: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.avif`
- Las imágenes se ordenan alfabéticamente — usa prefijos numéricos (`01-`, `02-`) para controlar el orden
- La primera imagen es la **principal** (tarjetas de catálogo, metadata, Open Graph)
- Todas forman la **galería** del detalle del producto
- Si no hay imágenes locales para un slug, se usa el `image`/`gallery` de `data/products.ts`

## Regenerar manifiesto

El build lo hace automáticamente (`prebuild`). Manualmente:

```bash
npm run images
```

Esto actualiza `data/product-images.json`.
