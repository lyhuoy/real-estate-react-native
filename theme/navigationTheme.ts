// src/theme/navigationTheme.ts

import { ResolvedTheme } from "@/types/theme";
import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { COLORS_MAP } from "./color";

export const createNavigationTheme = (resolvedTheme: ResolvedTheme): Theme => {
  const baseTheme = resolvedTheme === "dark" ? DarkTheme : DefaultTheme;

  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: COLORS_MAP.primary[resolvedTheme],
      background: COLORS_MAP.background[resolvedTheme],
      card: COLORS_MAP.card[resolvedTheme],
      text: COLORS_MAP.text[resolvedTheme],
      border: COLORS_MAP.border[resolvedTheme],
      notification: COLORS_MAP.primary[resolvedTheme],
    },
  };
};
