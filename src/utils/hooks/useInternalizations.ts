import { useCallback } from "react";
import { useSelector } from "react-redux";
import { translations } from "../../constants";
import { RootState } from "../../store";
import { LanguageType } from "../../types";

interface ILangJson {
    [key: string]: string | ILangJson;
}

export default function useInternalizations() {
    const lang = useSelector((state: RootState) => state.language.selectedLanguage);

    const getNestedTranslation = (langJson: ILangJson, key: string): string => {
        const keys = key.split('.');
        let result: string | ILangJson = langJson;

        for (const k of keys) {
            if (typeof result === 'object' && k in result) {
                result = result[k];
            } else {
                return '';
            }
        }

        return typeof result === 'string' ? result : '';
    };

    const i18n = useCallback(
        (key: string): string => {
            const langJson = translations[lang as LanguageType] as ILangJson;
            const fallback = translations['en'] as ILangJson;

            return getNestedTranslation(langJson, key) || getNestedTranslation(fallback, key);
        },
        [lang]
    );

    return { i18n };
}
