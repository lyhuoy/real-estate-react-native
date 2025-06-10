import { useAppThemeColor } from "@/hooks/useAppThemeColor";
import { StyleProp, View, ViewStyle } from "react-native";

type ContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
};

export const Container = ({
  children,
  style,
  ...otherProps
}: ContainerProps) => {
  const { themeColors } = useAppThemeColor();
  return (
    <View
      style={[style, { backgroundColor: themeColors.background }]}
      {...otherProps}
    >
      {children}
    </View>
  );
};
