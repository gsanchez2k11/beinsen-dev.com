import manifest from "@/data/product-images.json";
import detailsManifest from "@/data/detail-images.json";

type Manifest = Record<string, string[]>;
type DetailEntry = { src: string; width: number; height: number };
type DetailsManifest = Record<string, DetailEntry>;
const typedManifest = manifest as Manifest;
const typedDetailsManifest = detailsManifest as DetailsManifest;

export function getLocalImages(slug?: string): { image?: string; gallery?: string[] } {
  if (!slug) return {};
  const images = typedManifest[slug];
  if (!images || images.length === 0) return {};
  return { image: images[0], gallery: images };
}

export function enrichWithLocalImages<T extends { slug?: string; image?: string; gallery?: string[]; hotspotImage?: string; hotspotImageWidth?: number; hotspotImageHeight?: number; storySegments?: any[] }>(product: T): T {
  const local = getLocalImages(product.slug);
  const detail = product.slug ? typedDetailsManifest[product.slug] : undefined;
  if (!local.gallery || local.gallery.length === 0) {
    if (!detail) return product;
    return { ...product, hotspotImage: detail.src, hotspotImageWidth: detail.width, hotspotImageHeight: detail.height };
  }
  const g = local.gallery;
  return {
    ...product,
    image: g[0],
    gallery: g,
    hotspotImage: detail?.src ?? g[0],
    hotspotImageWidth: detail?.width,
    hotspotImageHeight: detail?.height,
    storySegments: product.storySegments?.map((seg: any, i: number) => ({
      ...seg,
      image: seg.image?.startsWith('/') ? seg.image : g[i % g.length],
    })),
  };
}
