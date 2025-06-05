import { APP_LANGUAGE_KEY } from "@/constants/StorageKey";
import Language from "@/types/enum/Language";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en-US/translations.json";
import translationKm from "./locales/km-KH/translations.json";
import translationKr from "./locales/kr-KO/translations.json";
import translationTh from "./locales/th-TH/translations.json";

const resources = {
  km: { translation: translationKm },
  en: { translation: translationEn },
  th: { translation: translationTh },
  kr: { translation: translationKr },
};

const languageDetector = {
  type: "languageDetector" as const,
  async: true,
  init: () => {},
  detect: async (callback: (lng: string) => void) => {
    try {
      const language = await AsyncStorage.getItem(APP_LANGUAGE_KEY);
      if (language) {
        callback(language);
      } else {
        callback(Language.EN);
      }
    } catch (error) {
      console.error("Failed to load language from AsyncStorage", error);
      callback(Language.EN);
    }
  },
  cacheUserLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem(APP_LANGUAGE_KEY, language);
    } catch (error) {
      console.error("Failed to save language to AsyncStorage", error);
    }
  },
};

// eslint-disable-next-line import/no-named-as-default-member
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    compatibilityJSON: "v4",
    interpolation: {
      escapeValue: false,
    },
    cleanCode: true,
    debug: false,
  });

export default i18next;
