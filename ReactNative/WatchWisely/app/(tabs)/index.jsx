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
  fetchTopRatedMovies,
  selectMovies,
} from "../../src/redux/slice/movieSlice";

import {
  useResponsiveFont,
  useResponsiveHeight,
} from "../../src/hooks/useResponsive";
import PulsePosterSkeleton from "../../src/components/PulsePosterSkeleton";
import MovieCard from "../../src/components/MovieCard";

const Index = () => {
  const { Colors } = useColors();
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(selectMovies);

  // Responsive sizes
  const titleFont = useResponsiveFont(25); // ~25px responsive
  const topSpacing = useResponsiveHeight(4); // top padding

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
            fontSize: titleFont * 0.75,
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
            fontWeight: "bold",
            color: Colors.core.text,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Welcome
        </Text>

        {status === "loading" ? (
          <Carousel isLoading={true} CardComponent={PulsePosterSkeleton} cardHeightInPercentage={40} />
        ) : (
          <Carousel
            data={data}
            CardComponent={MovieCard}
            cardHeightInPercentage={40}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
