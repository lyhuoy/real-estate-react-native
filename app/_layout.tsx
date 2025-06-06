import "@/i18n";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { APP_FONTS } from "@/constants/Fonts";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useLanguageStore } from "@/stores/localizationStore";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts(APP_FONTS);
  const { initializeLanguage } = useLanguageStore();

  useEffect(() => {
    initializeLanguage();
  }, [initializeLanguage]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
