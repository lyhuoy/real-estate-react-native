import { ACTIVE_COLOR } from "@/constants/Colors";
import { FONT_KANTUMRUY_PRO_SEMI_BOLD } from "@/constants/Fonts";
import { BORDER_RADIUS, SPACING } from "@/constants/Theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useAppThemeColor } from "@/hooks/useAppThemeColor";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

export default function RecommandationCard() {
  const { themeColors } = useAppThemeColor();
  const { themePreference } = useAppTheme();
  const isDark = themePreference === "dark";

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: themeColors.card }]}
    >
      <View style={styles.content}>
        <View style={styles.imageWrapper}>
          <BlurView intensity={10} style={styles.ratingBadge}>
            <ThemedText style={styles.ratingText}>4.8</ThemedText>
            <AntDesign name="star" size={14} color="#FB9400" />
          </BlurView>
          <Image
            source={require("@/assets/images/h-stay.webp")}
            style={styles.propertyImage}
            transition={500}
          />
        </View>
        <View style={styles.detailsContainer}>
          <ThemedText style={[styles.title, { color: themeColors.text }]}>
            Merialla Villa
          </ThemedText>
          <ThemedText style={styles.location}>Tokyo, Japan</ThemedText>
          <View style={styles.priceContainer}>
            <ThemedText style={styles.price}>$656754</ThemedText>
            <TouchableOpacity>
              <Image
                source={require("@/assets/svgs/heart.svg")}
                style={[
                  styles.heartIcon,
                  { tintColor: isDark ? "white" : ACTIVE_COLOR },
                ]}
                transition={500}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.md,
  },
  content: {
    gap: SPACING.md,
  },
  imageWrapper: {
    position: "relative",
  },
  ratingBadge: {
    position: "absolute",
    top: SPACING.sm,
    right: SPACING.sm,
    borderRadius: BORDER_RADIUS.lg,
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    gap: 4,
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    overflow: "hidden",
  },
  ratingText: {
    fontSize: 14,
    fontFamily: FONT_KANTUMRUY_PRO_SEMI_BOLD,
  },
  propertyImage: {
    width: 140,
    height: 120,
    borderRadius: BORDER_RADIUS.xl,
  },
  detailsContainer: {
    gap: SPACING.sm,
  },
  title: {
    fontSize: 18,
    lineHeight: 20,
    fontFamily: FONT_KANTUMRUY_PRO_SEMI_BOLD,
  },
  location: {
    fontSize: 14,
    opacity: 0.7,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SPACING.xs,
  },
  price: {
    fontSize: 18,
    fontFamily: FONT_KANTUMRUY_PRO_SEMI_BOLD,
  },
  heartIcon: {
    width: 18,
    height: 18,
  },
});
