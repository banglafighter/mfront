import i18n, {TOptions} from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
    initReactI18next,
    useTranslation,
} from "react-i18next";


i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {},
        fallbackLng: "en",
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: [
                "querystring",
                "localStorage",
                "navigator",
                "htmlTag",
            ],
            lookupQuerystring: "lng",
            caches: ["localStorage"],
        },
        react: {
            useSuspense: false,
        },
    });


/**
 * Translate text
 */
export const _t = (key: string, options?: TOptions): string => {
    return i18n.t(key, options) as string;
};


export const loadTranslation = (language: string, translation: Record<string, string>) => {
    i18n.addResourceBundle(
        language,
        "translation",
        translation,
        true,
        true
    );
};


export const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
};

/**
 * Hook for rerender support
 */
export const useI18n = () => {
    useTranslation();
};

export const activeLanguage = (): string => {
  return i18n.language;
};

export default i18n;