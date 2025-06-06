import { Image } from "expo-image";
import { Button } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  FONT_KANTUMRUY_PRO_LIGHT_ITALIC,
  FONT_KANTUMRUY_PRO_REGULAR,
} from "@/constants/Fonts";
import { useLanguageChanger } from "@/hooks/useLanguager";
import { useTranslation } from "react-i18next";

export default function HomeScreen() {
  const { t, i18n } = useTranslation();

  const changeLanguage = useLanguageChanger();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image source={require("@/assets/images/partial-react-logo.png")} />
      }
    >
      <ThemedView>
        <ThemedText
          style={{
            fontSize: 24,
            fontFamily: FONT_KANTUMRUY_PRO_REGULAR,
            lineHeight: 32,
            textAlign: "center",
          }}
        >
          {t("app.welcome")}
        </ThemedText>
        <Button
          title="English"
          onPress={() => changeLanguage("en")}
          disabled={i18n.language === "en"}
        />
        <Button
          title="ភាសាខ្មែរ"
          onPress={() => changeLanguage("km")}
          disabled={i18n.language === "km"}
        />
        <Button
          title="ภาษาไทย"
          onPress={() => changeLanguage("th")}
          disabled={i18n.language === "th"}
        />
        <Button
          title="한국어"
          onPress={() => changeLanguage("kr")}
          disabled={i18n.language === "kr"}
        />
        <ThemedView
          style={{
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <ThemedText
            style={{
              fontFamily: FONT_KANTUMRUY_PRO_REGULAR,
            }}
          >
            current language: {i18n.language}
          </ThemedText>
          <ThemedText
            style={{
              fontSize: 18,
              fontFamily: FONT_KANTUMRUY_PRO_LIGHT_ITALIC,
              fontStyle: "italic",
            }}
          >
            {t("app.title")}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}
