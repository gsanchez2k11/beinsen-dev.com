const fs = require('fs');
const productsFilePath = 'data/products.ts';
const content = fs.readFileSync(productsFilePath, 'utf8');

const interfaces = `

function getSortName(item: any): string {
  if (typeof item.name === "string") return item.name;
  return item.name?.es || "";
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
}

export interface Accessory {
  reference?: string;
  id: string;
  slug: string;
  name: Localized<string>;
  price: number | "Consultar PVP";
  image: string;
  description: Localized<string>;
  technicalSpecs?: TechnicalSpec[];
  category?: Localized<string>;
}

export interface Consumable {
  reference?: string;
  id: string;
  slug: string;
  name: Localized<string>;
  price: number | "Consultar PVP";
  image: string;
  description: Localized<string>;
  technicalSpecs?: TechnicalSpec[];
  category?: Localized<string>;
}

export interface Localized<T> {
  es: T;
  en: T;
  pt?: T;
  it?: T;
}

export type Locale = "es" | "en" | "pt" | "it";

export interface Plancha {
  id: string;
  slug: string;
  name: Localized<string>;
  description: Localized<string>;
  features: Localized<string[]>;
  price: number | string;
  pvp?: number | string;
  image: string;
  gallery?: string[];
  category: Localized<string>;
  size: Localized<string>;
  openingType: Localized<string>;
  technicalSpecs: TechnicalSpec[];
  maintenanceTips?: Localized<string[]>;
  accessories?: { id: string; price?: number | string }[];
  consumables?: { id: string; price?: number | string }[];
  storyTitle?: Localized<string>;
  storySegments?: { title: Localized<string>; text: Localized<string>; image: string }[];
  hidden?: boolean;
}

export interface CompatibleItem {
  id: string;
  slug: string;
  name: Localized<string>;
  price: number | string;
  image: string;
  description: Localized<string>;
  reference?: string;
}
`;

fs.writeFileSync(productsFilePath, content + interfaces);
console.log("Interfaces restored.");
