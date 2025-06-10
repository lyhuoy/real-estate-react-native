import "@/i18n";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { APP_FONTS } from "@/constants/Fonts";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useLanguageStore } from "@/stores/localizationStore";
import { createNavigationTheme } from "@/theme/navigationTheme";

export default function RootLayout() {
  const { resolvedTheme } = useAppTheme();
  const [loaded] = useFonts(APP_FONTS);
  const { initializeLanguage } = useLanguageStore();

  useEffect(() => {
    initializeLanguage();
  }, [initializeLanguage]);

  if (!loaded) {
    return null;
  }

  const customNavigationTheme = createNavigationTheme(resolvedTheme);
  return (
    <ThemeProvider value={customNavigationTheme}>
      <StatusBar animated style={resolvedTheme === "dark" ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
