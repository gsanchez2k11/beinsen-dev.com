import manifest from "@/data/product-downloads.json";

type DownloadEntry = {
  label: Record<string, string> | string;
  url?: string;
  languages?: Partial<Record<"es" | "en" | "pt" | "it", string>>;
};
type Manifest = Record<string, DownloadEntry[]>;
const typedManifest = manifest as Manifest;

export function getLocalDownloads(slug?: string): DownloadEntry[] | undefined {
  if (!slug) return undefined;
  const list = typedManifest[slug];
  return list && list.length > 0 ? list : undefined;
}

export function enrichWithLocalDownloads<T extends { slug?: string; downloads?: any }>(product: T): T {
  const local = getLocalDownloads(product.slug);
  if (!local) return product;
  return { ...product, downloads: local };
}
