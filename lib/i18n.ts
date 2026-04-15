import { Locale, Localized } from "@/data/products";

export const DEFAULT_LOCALE: Locale = 'es';

export function getLocalized<T>(field: Localized<T> | T | undefined, locale: Locale): T | undefined {
  if (!field) return undefined;
  
  if (typeof field === 'object' && field !== null && !Array.isArray(field)) {
    const localized = field as Localized<T>;
    return localized[locale] ?? localized[DEFAULT_LOCALE];
  }
  
  return field as T;
}

export function getLocalizedArray<T>(field: Localized<T[]> | T[] | undefined, locale: Locale): T[] {
  if (!field) return [];
  
  if (typeof field === 'object' && field !== null && !Array.isArray(field)) {
    const localized = field as Localized<T[]>;
    return localized[locale] ?? localized[DEFAULT_LOCALE] ?? [];
  }
  
  return field as T[];
}
