import manifest from "@/data/product-images.json";

type Manifest = Record<string, string[]>;
const typedManifest = manifest as Manifest;

export function getLocalImages(slug?: string): { image?: string; gallery?: string[] } {
  if (!slug) return {};
  const images = typedManifest[slug];
  if (!images || images.length === 0) return {};
  return { image: images[0], gallery: images };
}

export function enrichWithLocalImages<T extends { slug?: string; image?: string; gallery?: string[]; hotspotImage?: string; storySegments?: any[] }>(product: T): T {
  const local = getLocalImages(product.slug);
  if (!local.gallery || local.gallery.length === 0) return product;
  const g = local.gallery;
  return {
    ...product,
    image: g[0],
    gallery: g,
    hotspotImage: g[0],
    storySegments: product.storySegments?.map((seg: any, i: number) => ({
      ...seg,
      image: g[i % g.length],
    })),
  };
}
