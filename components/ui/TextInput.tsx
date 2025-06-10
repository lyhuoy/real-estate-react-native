import { zincColors } from "@/constants/Colors";
import { FONT_KANTUMRUY_PRO_REGULAR } from "@/constants/Fonts";
import { useAppTheme } from "@/hooks/useAppTheme";
import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { ThemedText } from "../ThemedText";

type InputVariant = "default" | "filled" | "outlined" | "ghost";
type InputSize = "sm" | "md" | "lg";

interface TextInputProps extends Omit<RNTextInputProps, "style"> {
  label?: string;
  error?: string;
  variant?: InputVariant;
  size?: InputSize;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  disabled?: boolean;
}

export const TextInput = ({
  label,
  error,
  variant = "default",
  size = "md",
  containerStyle,
  inputStyle,
  disabled = false,
  ...props
}: TextInputProps) => {
  const { resolvedTheme } = useAppTheme();
  const isDark = resolvedTheme === "dark";

  const sizeStyles: Record<
    InputSize,
    { height?: number; fontSize: number; padding: number }
  > = {
    sm: { fontSize: 16, padding: 8 },
    md: { height: 50, fontSize: 16, padding: 14 },
    lg: { height: 55, fontSize: 32, padding: 16 },
  };

  const getVariantStyle = () => {
    const baseStyle: ViewStyle = {
      borderRadius: 12,
      backgroundColor: isDark ? zincColors[900] : "rgb(229, 229, 234)",
    };

    switch (variant) {
      case "filled":
        return {
          ...baseStyle,
          backgroundColor: isDark ? zincColors[700] : zincColors[100],
        };
      case "outlined":
        return {
          ...baseStyle,
          borderWidth: 1,
          borderColor: isDark ? zincColors[600] : zincColors[200],
        };
      case "ghost":
        return {
          ...baseStyle,
          backgroundColor: "transparent",
        };
      default:
        return baseStyle;
    }
  };

  const getTextColor = () => {
    if (disabled) {
      return isDark ? zincColors[500] : zincColors[400];
    }
    return isDark ? zincColors[50] : zincColors[900];
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <ThemedText style={styles.label}>{label}</ThemedText>}
      <View style={[getVariantStyle(), disabled && styles.disabled]}>
        <RNTextInput
          style={[
            {
              height: sizeStyles[size].height,
              fontSize: sizeStyles[size].fontSize,
              padding: sizeStyles[size].padding,
              color: getTextColor(),
              fontFamily: FONT_KANTUMRUY_PRO_REGULAR,
            },
            inputStyle,
          ]}
          placeholderTextColor={isDark ? zincColors[500] : zincColors[400]}
          editable={!disabled}
          {...props}
        />
      </View>
      {error && <ThemedText style={styles.error}>{error}</ThemedText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
  },
  error: {
    color: "#ef4444",
    marginTop: 4,
  },
  disabled: {
    opacity: 0.5,
  },
});
