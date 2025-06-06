import { StyleSheet, Text, type TextProps } from "react-native";

import {
  FONT_KANTUMRUY_PRO_LIGHT,
  FONT_KANTUMRUY_PRO_MEDIUM_ITALIC,
  FONT_KANTUMRUY_PRO_REGULAR,
  FONT_KANTUMRUY_PRO_SEMI_BOLD,
} from "@/constants/Fonts";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 32,
    fontFamily: FONT_KANTUMRUY_PRO_REGULAR,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: FONT_KANTUMRUY_PRO_SEMI_BOLD,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
    fontFamily: FONT_KANTUMRUY_PRO_SEMI_BOLD,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: FONT_KANTUMRUY_PRO_LIGHT,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: FONT_KANTUMRUY_PRO_MEDIUM_ITALIC,
  },
});
