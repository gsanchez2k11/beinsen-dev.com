// Catálogo Beinsen — entrada única. Importa los datos crudos por dominio
// (planchas / accesorios / consumibles), aplica el enriquecido común y
// re-exporta los conjuntos derivados que usa la app.
import { rawPlanchasData } from "./raw/planchas";
import { rawAccessoriesData } from "./raw/accessories";
import { rawConsumablesData } from "./raw/consumables";
import { enrichPlancha, getSortName } from "./enrich";
import type { Plancha, Accessory, Consumable } from "./types";

export type {
    Locale,
    Localized,
    CompatibleItem,
    Accessory,
    Consumable,
    TechnicalSpec,
    Benefit,
    Hotspot,
    Plancha,
} from "./types";

export const planchasData: Plancha[] = rawPlanchasData
    .map(enrichPlancha)
    .filter(p => !p.hidden)
    .sort((a, b) => getSortName(a).localeCompare(getSortName(b), "es"));

export const allPlanchasData: Plancha[] = rawPlanchasData
    .map(enrichPlancha)
    .sort((a, b) => getSortName(a).localeCompare(getSortName(b), "es"));

export const allAccessoriesData: Accessory[] = [...rawAccessoriesData]
    .sort((a, b) => getSortName(a).localeCompare(getSortName(b), "es"));

export const allConsumablesData: Consumable[] = [...rawConsumablesData]
    .sort((a, b) => getSortName(a).localeCompare(getSortName(b), "es"));
