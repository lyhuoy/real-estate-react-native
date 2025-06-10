import { useAppThemeColor } from "@/hooks/useAppThemeColor";
import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeAreaContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
export const SafeAreaContainer = ({
  children,
  style,
}: SafeAreaContainerProps) => {
  const { themeColors } = useAppThemeColor();
  return (
    <SafeAreaView
      style={[
        styles.container,
        style,
        { backgroundColor: themeColors.background },
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
