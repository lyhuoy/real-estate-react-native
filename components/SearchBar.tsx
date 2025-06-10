import { FONT_KANTUMRUY_PRO_REGULAR } from "@/constants/Fonts";
import { FONT_SIZES, SPACING } from "@/constants/Theme";
import { useAppThemeColor } from "@/hooks/useAppThemeColor";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface SearchBarProps extends Omit<TextInputProps, "style"> {
  //   value: string;
  //   onChange: (text: string) => void;
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
}

export const SearchBar = ({
  //   value,
  //   onChange,
  suffixIcon,
  prefixIcon,
  placeholder,
  containerStyle,
  inputStyle,
  ...props
}: SearchBarProps) => {
  const { themeColors } = useAppThemeColor();
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        { backgroundColor: themeColors.searchBarBg },
      ]}
    >
      {suffixIcon}
      <TextInput
        // value={value}
        // onChangeText={onChange}
        placeholder={placeholder || "Search..."}
        style={[
          {
            flex: 1,
            height: 50,
            padding: SPACING.md,
            color: "#333",
            fontFamily: FONT_KANTUMRUY_PRO_REGULAR,
            fontSize: FONT_SIZES.md,
          },
          inputStyle,
        ]}
        placeholderTextColor={themeColors.placeholder}
        {...props}
      />
      <TouchableOpacity>{prefixIcon}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SPACING.md,
    borderRadius: 12,
  },
});
