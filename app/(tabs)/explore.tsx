import ThemeToggleButton from "@/components/ThemeToggleButton";
import { useAppThemeColor } from "@/hooks/useAppThemeColor";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function SettingsScreen() {
  const { themeColors } = useAppThemeColor();

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: themeColors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.header, { color: themeColors.text }]}>
        App Settings
      </Text>

      <ThemeToggleButton />

      <View
        style={[
          styles.card,
          {
            backgroundColor: themeColors.card,
            borderColor: themeColors.border,
          },
        ]}
      >
        <Text style={[styles.cardTitle, { color: themeColors.text }]}>
          Appearance
        </Text>
        <Text style={[styles.cardText, { color: themeColors.textSecondary }]}>
          Customize your app&apos;s visual theme here. Changes are saved
          automatically.
        </Text>
      </View>

      <View
        style={[
          styles.card,
          {
            backgroundColor: themeColors.card,
            borderColor: themeColors.border,
          },
        ]}
      >
        <Text style={[styles.cardTitle, { color: themeColors.text }]}>
          Account
        </Text>
        <Text style={[styles.cardText, { color: themeColors.textSecondary }]}>
          Manage your profile information and preferences.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 22,
  },
});

export default SettingsScreen;
