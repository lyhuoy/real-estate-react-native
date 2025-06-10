import { Image } from "expo-image";
import { Dimensions, ImageProps } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type CircularCarouselListItemProps = {
  imageSrc: ImageProps["source"];
  index: number;
  contentOffset: SharedValue<number>;
};

const { width: windowWidth } = Dimensions.get("window");

export const ListItemWidth = windowWidth / 4;

const CircularCarouselListItem: React.FC<CircularCarouselListItemProps> = ({
  imageSrc,
  index,
  contentOffset,
}) => {
  const rStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * ListItemWidth,
      (index - 1) * ListItemWidth,
      index * ListItemWidth,
      (index + 1) * ListItemWidth,
      (index + 2) * ListItemWidth,
    ];

    const translateYOutputRange = [
      0,
      -ListItemWidth / 3,
      -ListItemWidth / 2,
      -ListItemWidth / 3,
      0,
    ];

    const opacityOutputRange = [0.7, 0.9, 1, 0.9, 0.7];

    const scaleOutputRange = [0.7, 0.8, 1, 0.8, 0.7];

    const translateY = interpolate(
      contentOffset.value,
      inputRange,
      translateYOutputRange,
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      contentOffset.value,
      inputRange,
      opacityOutputRange,
      Extrapolation.CLAMP
    );

    const scale = interpolate(
      contentOffset.value,
      inputRange,
      scaleOutputRange,
      Extrapolation.CLAMP
    );

    return {
      opacity,
      transform: [
        {
          translateY: translateY,
        },
        // Padding left is better than translateX
        // {
        //   translateX: ListItemWidth / 2 + ListItemWidth,
        // },
        {
          scale,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: ListItemWidth,
          aspectRatio: 1,
          elevation: 5,
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 20,
        },
        rStyle,
      ]}
    >
      <Image
        source={imageSrc}
        style={{
          margin: 3,
          height: ListItemWidth,
          width: ListItemWidth,

          borderRadius: 200,
          borderWidth: 2,
          borderColor: "white",
        }}
        transition={500}
      />
    </Animated.View>
  );
};

export { CircularCarouselListItem };
