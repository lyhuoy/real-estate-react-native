import { ACTIVE_COLOR } from "@/constants/Colors";
import { FONT_KANTUMRUY_PRO_SEMI_BOLD } from "@/constants/Fonts";
import { FONT_SIZES } from "@/constants/Theme";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";

type SectionHeaderProps = {
  title?: string;
  onPress?: () => void;
};

export default function SectionHeader({ title, onPress }: SectionHeaderProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      <ThemedText
        style={{
          fontSize: FONT_SIZES.xl,
          fontFamily: FONT_KANTUMRUY_PRO_SEMI_BOLD,
        }}
      >
        {title}
      </ThemedText>
      <TouchableOpacity onPress={onPress}>
        <ThemedText
          style={{
            fontSize: FONT_SIZES.md,
            fontFamily: FONT_KANTUMRUY_PRO_SEMI_BOLD,
            color: ACTIVE_COLOR,
          }}
        >
          See All
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
}
