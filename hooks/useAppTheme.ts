import { useThemeStore } from "@/stores/themeStore";
import { ResolvedTheme } from "@/types/theme";
import { useAppColorScheme } from "./useAppColorScheme";

export const useAppTheme = () => {
  const { themePreference, setThemePreference } = useThemeStore();
  const systemColorScheme = useAppColorScheme();

  const resolvedTheme: ResolvedTheme =
    themePreference === "system"
      ? systemColorScheme || "light"
      : themePreference;

  return {
    themePreference,
    resolvedTheme,
    setThemePreference,
    systemColorScheme,
  };
};
