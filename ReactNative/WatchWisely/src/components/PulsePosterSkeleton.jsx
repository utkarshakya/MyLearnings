import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useColors } from "../hooks/useColors";
import {
    useResponsiveHeight,
    useResponsiveWidth,
} from "../hooks/useResponsive";

const PulsePosterSkeleton = ({ heightInPercentage, widthInPercentage }) => {
  const colors = useColors();
  const opacity = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.6,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        height: useResponsiveHeight(heightInPercentage),
        borderRadius: 10,
        backgroundColor: colors.bg,
        opacity,
        aspectRatio: 2 / 3,
        margin: useResponsiveWidth(1),
      }}
    />
  );
};

export default PulsePosterSkeleton;
