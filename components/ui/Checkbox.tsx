import { ACTIVE_COLOR, INACTIVE_COLOR } from "@/constants/Colors";
import { FONT_KANTUMRUY_PRO_MEDIUM } from "@/constants/Fonts";
import AntDesign from "@expo/vector-icons/AntDesign";
import Color from "color";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type CheckboxProps = {
  label: string;
  checked?: boolean;
  onPress: () => void;
};

const TimingConfig = {
  duration: 150,
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onPress,
}) => {
  const fadedActiveColor = Color(ACTIVE_COLOR).alpha(0.1).toString();
  const rContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        checked ? fadedActiveColor : "transparent",
        TimingConfig
      ),
      borderColor: withTiming(
        checked ? ACTIVE_COLOR : INACTIVE_COLOR,
        TimingConfig
      ),
      paddingLeft: 20,
      paddingRight: !checked ? 20 : 14,
    };
  }, [checked]);

  const rTextStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(checked ? ACTIVE_COLOR : INACTIVE_COLOR, TimingConfig),
    };
  }, [checked]);

  return (
    <Animated.View
      layout={LinearTransition.springify().mass(0.8)}
      style={[styles.container, rContainerStyle]}
      onTouchEnd={onPress}
    >
      <Animated.Text style={[styles.label, rTextStyle]}>{label}</Animated.Text>
      {checked && (
        <Animated.View
          entering={FadeIn.duration(350)}
          exiting={FadeOut}
          style={{
            marginLeft: 8,
            justifyContent: "center",
            alignItems: "center",
            height: 20,
            width: 20,
          }}
        >
          <AntDesign name="checkcircle" size={20} color={ACTIVE_COLOR} />
        </Animated.View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6.5,
    borderWidth: 0.5,
    borderColor: "#fff",
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontFamily: FONT_KANTUMRUY_PRO_MEDIUM,
    color: "#fff",
    textAlign: "center",
  },
});
