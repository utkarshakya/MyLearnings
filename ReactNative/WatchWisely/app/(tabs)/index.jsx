import { router } from "expo-router";
import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColors } from "../../src/hooks/useColors";

// Redux
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../src/components/Carousel";
import {
  fetchPopularMovies,
  selectMovies,
} from "../../src/redux/slice/movieSlice";

import {
  useResponsiveFont,
  useResponsiveHeight,
} from "../../src/hooks/useResponsive";

const Index = () => {
  const { Colors } = useColors();
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(selectMovies);

  // Responsive sizes
  const titleFont = useResponsiveFont(32); // ~32px responsive
  const topSpacing = useResponsiveHeight(3); // top padding

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (status === "failed") {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.core.bg,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.semantic.error,
            fontSize: useResponsiveFont(18),
            fontWeight: "600",
          }}
        >
          Error: {error}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.core.bg,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          paddingTop: topSpacing,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: titleFont,
            fontWeight: "700",
            color: Colors.core.text,
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: useResponsiveHeight(2),
          }}
        >
          Welcome
        </Text>

        {status === "loading" ? (
          <Text
            style={{
              color: Colors.core.subText,
              textAlign: "center",
              fontSize: useResponsiveFont(16),
            }}
          >
            Loading...
          </Text>
        ) : (
          <Carousel movies={data} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
