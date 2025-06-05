import { APP_LANGUAGE_KEY } from "@/constants/StorageKey";
import i18nInstance from "@/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface LanguageState {
  language: string;
  setLanguage: (lng: string) => void;
  initializeLanguage: () => Promise<void>;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (lng: string) => {
        set({ language: lng });

        i18nInstance.changeLanguage(lng);
      },
      initializeLanguage: async () => {
        const storedLanguage = await AsyncStorage.getItem(APP_LANGUAGE_KEY);
        if (storedLanguage && storedLanguage !== i18nInstance.language) {
          i18nInstance.changeLanguage(storedLanguage);
          set({ language: storedLanguage });
        } else if (!storedLanguage && i18nInstance.language) {
          await AsyncStorage.setItem(APP_LANGUAGE_KEY, i18nInstance.language);
          set({ language: i18nInstance.language });
        }
      },
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ language: state.language }),
      onRehydrateStorage: (state) => {
        if (state) {
          i18nInstance.changeLanguage(state.language);
        }
      },
    }
  )
);
