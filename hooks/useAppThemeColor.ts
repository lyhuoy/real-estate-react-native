import { COLORS_MAP } from "@/theme/color";
import { useAppTheme } from "./useAppTheme";

type ThemeColors = {
  primary: string;
  primaryLight: string;
  primaryLighter: string;
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  border: string;
  icon: string;
  tabBg: string;
  searchBarBg: string;
  placeholder: string;
};

export const useAppThemeColor = (): { themeColors: ThemeColors } => {
  const { resolvedTheme } = useAppTheme();

  const themeColors: ThemeColors = {
    primary: COLORS_MAP.primary[resolvedTheme],
    primaryLight: COLORS_MAP.primaryLight[resolvedTheme],
    primaryLighter: COLORS_MAP.primaryLighter[resolvedTheme],
    background: COLORS_MAP.background[resolvedTheme],
    card: COLORS_MAP.card[resolvedTheme],
    text: COLORS_MAP.text[resolvedTheme],
    textSecondary: COLORS_MAP.textSecondary[resolvedTheme],
    border: COLORS_MAP.border[resolvedTheme],
    icon: COLORS_MAP.icon[resolvedTheme],
    tabBg: COLORS_MAP.tabBg[resolvedTheme],
    searchBarBg: COLORS_MAP.searchBarBg[resolvedTheme],
    placeholder: COLORS_MAP.placeholder[resolvedTheme],
  };

  return { themeColors };
};
