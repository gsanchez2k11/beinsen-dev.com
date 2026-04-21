import manifest from "@/data/product-images.json";

type Manifest = Record<string, string[]>;
const typedManifest = manifest as Manifest;

export function getLocalImages(slug?: string): { image?: string; gallery?: string[] } {
  if (!slug) return {};
  const images = typedManifest[slug];
  if (!images || images.length === 0) return {};
  return { image: images[0], gallery: images };
}

export function enrichWithLocalImages<T extends { slug?: string; image?: string; gallery?: string[] }>(product: T): T {
  const local = getLocalImages(product.slug);
  return {
    ...product,
    image: local.image || product.image,
    gallery: local.gallery && local.gallery.length > 0 ? local.gallery : product.gallery,
  };
}
