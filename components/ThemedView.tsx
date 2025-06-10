import { View, type ViewProps } from "react-native";

import { useAppThemeColor } from "@/hooks/useAppThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const { themeColors } = useAppThemeColor();

  return (
    <View
      style={[{ backgroundColor: themeColors.background }, style]}
      {...otherProps}
    />
  );
}
