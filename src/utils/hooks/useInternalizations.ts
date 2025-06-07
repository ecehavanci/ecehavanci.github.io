import { useCallback } from "react";
import { useSelector } from "react-redux";
import { translations } from "../../constants";
import { RootState } from "../../store";
import { LanguageType } from "../../types";

export default function useInternalizations() {
    const lang = useSelector((state: RootState) => state.language.selectedLanguage);

    interface ILangJson {
        [key: string]: string;
    }

    const i18n = useCallback(
        (key: string): string => {
            const langJson: ILangJson = translations[lang as LanguageType];
            if (langJson) {
                return langJson[key];
            }

            return translations['en'][key];
        }, [lang]
    );

    return { i18n }
}