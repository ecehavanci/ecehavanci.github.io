import { translations } from "./constants";
import { LanguageType } from "./types";

export function getLanguageCode(lang: LanguageType) {
    return translations[lang];
}