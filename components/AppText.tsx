import { Text, TextStyle } from "react-native";

type textType = "title" | "subtitle" | "body" | "caption";
interface AppTextProps {
  children: React.ReactNode;
  type?: textType;
  style?: TextStyle | TextStyle[];
  onPress?: () => void;
}

export function AppText({
  children,
  type = "body",
  style,
  onPress,
}: AppTextProps) {
  const textStyles: Record<textType, TextStyle> = {
    title: { fontSize: 32, fontWeight: "bold" },
    subtitle: { fontSize: 24, fontWeight: "600" },
    body: { fontSize: 16, fontWeight: "500" },
    caption: { fontSize: 12, fontWeight: "400" },
  };

  const combinedStyle = Array.isArray(style)
    ? [textStyles[type], ...style]
    : [textStyles[type], style];

  return (
    <Text style={combinedStyle} onPress={onPress}>
      {children}
    </Text>
  );
}
