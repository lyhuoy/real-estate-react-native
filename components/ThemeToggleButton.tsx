import { useAppTheme } from "@/hooks/useAppTheme";
import { useAppThemeColor } from "@/hooks/useAppThemeColor";
import { useLanguageChanger } from "@/hooks/useLanguageChanger";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ThemeToggleButton: React.FC = () => {
  const { themePreference, resolvedTheme, setThemePreference } = useAppTheme();
  const { themeColors } = useAppThemeColor();
  const { onChangeLanguage } = useLanguageChanger();
  const { i18n } = useTranslation(); // Initialize translation hook, if needed
  // current language
  const currentLanguage = i18n.language;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: themeColors.background,
        },
      ]}
    >
      <Text style={[styles.label, { color: themeColors.text }]}>Theme:</Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                themePreference === "light"
                  ? themeColors.primary
                  : themeColors.card,
            },
          ]}
          onPress={() => setThemePreference("light")}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: themePreference === "light" ? "white" : themeColors.text,
              },
            ]}
          >
            Light
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                themePreference === "dark"
                  ? themeColors.primary
                  : themeColors.card,
            },
          ]}
          onPress={() => setThemePreference("dark")}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: themePreference === "dark" ? "white" : themeColors.text,
              },
            ]}
          >
            Dark
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                themePreference === "system"
                  ? themeColors.primary
                  : themeColors.card,
            },
          ]}
          onPress={() => setThemePreference("system")}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color:
                  themePreference === "system" ? "white" : themeColors.text,
              },
            ]}
          >
            System
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.infoText, { color: themeColors.textSecondary }]}>
        Resolved: <Text style={styles.boldText}>{resolvedTheme}</Text>
      </Text>
      <Text style={[styles.infoText, { color: themeColors.textSecondary }]}>
        Preference: <Text style={styles.boldText}>{themePreference}</Text>
      </Text>
      <Text style={[styles.infoText, { color: themeColors.textSecondary }]}>
        System:{" "}
        <Text style={styles.boldText}>
          {useAppTheme().systemColorScheme || "N/A"}
        </Text>
      </Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                currentLanguage === "km"
                  ? themeColors.primary
                  : themeColors.card,
            },
          ]}
          onPress={() => onChangeLanguage("km")}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: currentLanguage === "km" ? "white" : themeColors.text,
              },
            ]}
          >
            Khmer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                currentLanguage === "en"
                  ? themeColors.primary
                  : themeColors.card,
            },
          ]}
          onPress={() => onChangeLanguage("en")}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: currentLanguage === "en" ? "white" : themeColors.text,
              },
            ]}
          >
            English
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                currentLanguage === "kr"
                  ? themeColors.primary
                  : themeColors.card,
            },
          ]}
          onPress={() => onChangeLanguage("kr")}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: currentLanguage === "kr" ? "white" : themeColors.text,
              },
            ]}
          >
            Korea
          </Text>
        </TouchableOpacity>
      </View>
      <Text>
        Current Language: <Text style={styles.boldText}>{currentLanguage}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    margin: 10,
    gap: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: "bold",
  },
  buttonGroup: {
    flexDirection: "row",
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 90,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
  },
  infoText: {
    marginTop: 5,
    fontSize: 14,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default ThemeToggleButton;
