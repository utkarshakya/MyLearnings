import { router } from "expo-router";
import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
// import SearchBar from "../../src/components/SearchBar";
import Carousel from "../../src/components/Carousel";
import {
  fetchPopularMovies,
  selectMovies,
} from "../../src/redux/slice/movieSlice";

const Index = () => {
  const dispatch = useDispatch();
  const movie = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (movie.status === "loading") {
    return <Text>Loading...</Text>;
  }

  if (movie.status === "failed") {
    return <Text>Error: {movie.error}</Text>;
  }

  if (movie.status === "succeeded") {
    return (
      <SafeAreaView className="flex-1 bg-gray-800">
        <ScrollView
          className="flex-1 pt-10"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ minHeight: "100%" }}
          // keyboardShouldPersistTaps="handled"
        >
          <Text className="font-bold text-4xl text-white italic text-center">
            Welcome
          </Text>
          {/* <SearchBar
            placeholder="Search movies..."
            onPress={() => router.push("/(tabs)/search")}
          /> */}
          <Carousel movies={movie.data?.results} />
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default Index;
