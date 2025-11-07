import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovies, selectMovies } from "../../src/redux/slice/movieSlice";
import SearchBar from "../../src/components/SearchBar";
import TopRatedMovies from "../../src/components/TopRatedMovies";

const Index = () => {
  const dispatch = useDispatch();
  const movie = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  if (movie.status === "loading") {
    return <Text>Loading...</Text>;
  }

  if (movie.status === "failed") {
    return <Text>Error: {movie.error}</Text>;
  }

  if (movie.status === "succeeded") {
    return (
      <SafeAreaView className="flex-1 bg-gray-950">
        <ScrollView
          className="flex-1 px-5 pt-10 mb-10"
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ minHeight: "100%" }}
        // keyboardShouldPersistTaps="handled"
        >
          <Text className="font-bold text-4xl text-white italic text-center">
            Welcome
          </Text>
          <SearchBar
            placeholder="String"
            onPress={() => router.push("/search")}
          />
          <TopRatedMovies movies={movie.data?.results} />
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default Index;
