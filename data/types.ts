export type Locale = 'es' | 'en' | 'pt' | 'it';
export type Localized<T> = { [key in Locale]?: T };

export interface CompatibleItem {
  id: string;
  name: Localized<string> | string;
  price: number | string;
  pvp?: number | string;
  image?: string;
  description?: Localized<string> | string;
  reference?: string;
  tiendaSublimacionUrl?: string;
}

export interface Accessory extends CompatibleItem {
  slug?: string;
  technicalSpecs?: TechnicalSpec[];
  gallery?: string[];
}
export interface Consumable extends CompatibleItem {
  slug?: string;
  technicalSpecs?: TechnicalSpec[];
  gallery?: string[];
}

export interface TechnicalSpec {
  label: Localized<string> | string;
  value: Localized<string> | string;
}

export interface Benefit {
  title: Localized<string> | string;
  description: Localized<string> | string;
  icon: string;
  image?: string;
  objectFit?: "cover" | "contain" | "cover-zoom";
  bgClass?: string;
}

export interface Hotspot {
  x: number;
  y: number;
  title: Localized<string> | string;
  description: Localized<string> | string;
}

export interface Plancha {
  id: string;
  slug: string;
  name: Localized<string>;
  description: Localized<string>;
  image: string;
  heroVideo?: string;
  size: Localized<string> | string;
  price: number | string;
  pvp?: number | string;
  reference?: string;
  tiendaSublimacionUrl?: string;
  category: Localized<string> | string;
  openingType?: Localized<string> | string;
  features: Localized<string[]>;
  accessories: { id: string; price?: number | string }[];
  consumables?: { id: string; price?: number | string }[];

  // New Rich Content Fields
  gallery?: string[];
  videoUrl?: string;
  technicalSpecs?: TechnicalSpec[];
  benefits?: Benefit[];
  hotspots?: Hotspot[];
  hotspotImage?: string;
  downloads?: { label: Localized<string> | string; url?: string; languages?: Partial<Record<"es" | "en" | "pt" | "it", string>> }[];
  storySegments?: { title: Localized<string> | string; description: Localized<string> | string; image?: string; iframe?: string }[];
  storyHeadline?: Localized<string> | string;
  storyTitle?: Localized<string> | string;
  maintenanceTips?: Localized<string[]>;
  distributors?: { name: string; url: string; logo?: string }[];
  hidden?: boolean;
  isNew?: boolean;
}
