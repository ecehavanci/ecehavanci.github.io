import { useCallback } from "react";
import { useSelector } from "react-redux";
import { translations } from "../../constants";
import { RootState } from "../../store";
import { LanguageType } from "../../types";

export default function useInternalizations() {
    const lang = useSelector((state: RootState) => state.language.selectedLanguage);

    interface ILangJson {
        [key: string]: any;
    }

    const getNestedTranslation = (langJson: ILangJson, key: string): any => {
        return key.split('.').reduce((obj, k) => (obj && obj[k] ? obj[k] : null), langJson) || null;
    };

    const i18n = useCallback(
        (key: string): any => {
            const langJson = translations[lang as LanguageType] as ILangJson;
            if (langJson) {
                return getNestedTranslation(langJson, key);
            }

            return getNestedTranslation(translations['en'] as ILangJson, key); // Fallback to English
        },
        [lang]
    );

    return { i18n };
}