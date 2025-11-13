import { FlatList, Text, View } from "react-native";
import MovieCard from "./MovieCard";

const Carousel = ({ movies = [] }) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return (
      <View className="mt-8">
        <Text className="text-white">No movies found</Text>
      </View>
    );
  }

  return (
    <View className="justify-center mt-10">
      {/* <Text className="text-gray-300 mx-5 mb-2 text-xl font-bold">
        TOP RATED MOVIES
      </Text> */}
      <FlatList
        data={movies}
        horizontal
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </View>
  );
};

export default Carousel;
