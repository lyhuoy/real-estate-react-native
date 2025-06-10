import i18n from "@/i18n";
import { useLanguageStore } from "@/stores/localizationStore";
import { useCallback } from "react";

export const useLanguageChanger = () => {
  const setLanguageInStore = useLanguageStore((state) => state.setLanguage);

  const onChangeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
      setLanguageInStore(lang);
    },
    [setLanguageInStore]
  );

  return { onChangeLanguage };
};
