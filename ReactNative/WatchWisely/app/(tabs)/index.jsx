import { router } from "expo-router";
import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../src/components/Carousel";
import {
  fetchPopularMovies,
  selectMovies,
} from "../../src/redux/slice/movieSlice";

const Index = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (status === "failed") {
    return <Text>Error: {error}</Text>;
  }

  if (status === "succeeded") {
    return (
      <SafeAreaView className="flex-1 bg-gray-800">
        <ScrollView
          className="flex-1 pt-10"
          showsVerticalScrollIndicator={false}
        >
          <Text className="font-bold text-4xl text-white italic text-center">
            Welcome
          </Text>
          {status === "loading" ? (
            <Text style={{ color: "white", textAlign: "center" }}>
              Loading...
            </Text>
          ) : (
            <Carousel movies={data} />
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default Index;
