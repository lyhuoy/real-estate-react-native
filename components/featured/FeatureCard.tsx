import { FONT_KANTUMRUY_PRO_SEMI_BOLD } from "@/constants/Fonts";
import { BORDER_RADIUS, SPACING } from "@/constants/Theme";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

export default function FeatureCard() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/h-stay.webp")}
          style={styles.image}
          transition={500}
        />
        <View style={styles.overlay}>
          <ThemedText type="title" style={styles.overlayTitle}>
            Merialla Villa
          </ThemedText>
          <ThemedText style={styles.overlayLocation}>New York, US</ThemedText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ThemedText type="title" style={styles.overlayPrice}>
              $12219
            </ThemedText>
            <TouchableOpacity style={styles.favoriteButton}>
              <Image
                source={require("@/assets/svgs/heart.svg")}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: "white",
                }}
                transition={500}
              />
            </TouchableOpacity>
          </View>
        </View>
        <BlurView intensity={50} style={[styles.ratingContainer]}>
          <ThemedText style={styles.ratingText}>4.8</ThemedText>
          <AntDesign name="star" size={16} color="#FB9400" />
        </BlurView>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS.xl,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
    width: 250,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 250,
    height: 320,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SPACING.md,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  overlayTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  overlayLocation: {
    color: "white",
    fontSize: 14,
    opacity: 0.8,
  },
  overlayPrice: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  ratingContainer: {
    position: "absolute",
    top: SPACING.md,
    right: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.xs,
    gap: 4,
    overflow: "hidden",
    paddingHorizontal: SPACING.sm,
  },
  ratingText: {
    fontSize: 14,
    fontFamily: FONT_KANTUMRUY_PRO_SEMI_BOLD,
    color: "white",
  },
  favoriteButton: {},
});
