import { ThemedText } from "@/components/ThemedText";
import { FONT_SIZES, SPACING } from "@/constants/Theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useAppThemeColor } from "@/hooks/useAppThemeColor";
import { bluePrimary, bluePrimaryLight } from "@/theme/color";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthenticationScreen() {
  const { themeColors } = useAppThemeColor();
  const { resolvedTheme } = useAppTheme();
  const isDark = resolvedTheme === "dark";
  const { t } = useTranslation();
  const router = useRouter();

  const handleGoogleLogin = () => {
    router.replace("/(tabs)");
  };
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? themeColors.background : "white" },
      ]}
    >
      <SafeAreaView style={styles.safeArea}>
        <Image
          source={require("@/assets/images/auth.webp")}
          style={styles.authImage}
        />
        <View style={styles.content}>
          <ThemedText style={styles.welcomeText}>{t("app.welcome")}</ThemedText>
          <ThemedText type="title" style={styles.titleText}>
            Let&apos;s Get You Closer To{" "}
            <ThemedText type="title" style={styles.titleHighlight}>
              Your Ideal Home
            </ThemedText>
          </ThemedText>
          <ThemedText style={styles.loginInfoText}>
            Login to Real Scout with Google
          </ThemedText>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleLogin}
          >
            <Image
              source={require("@/assets/images/google-logo.webp")}
              style={styles.googleLogo}
            />
            <ThemedText type="title" style={styles.googleButtonText}>
              {t("auth.signUpWithGoogle")}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  authImage: {
    width: "100%",
    height: 500,
  },
  content: {
    paddingHorizontal: SPACING.md,
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.md,
  },
  welcomeText: {
    color: "#666876",
    fontSize: FONT_SIZES.lg,
  },
  titleText: {
    textAlign: "center",
    lineHeight: 40,
    color: "black",
  },
  titleHighlight: {
    color: bluePrimary,
  },
  loginInfoText: {
    color: "#666876",
    fontSize: FONT_SIZES.lg,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: bluePrimaryLight,
    borderRadius: 9999,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    gap: SPACING.sm,
  },
  googleLogo: {
    width: 24,
    height: 24,
  },
  googleButtonText: {
    fontSize: FONT_SIZES.lg,
    color: "black",
  },
});
