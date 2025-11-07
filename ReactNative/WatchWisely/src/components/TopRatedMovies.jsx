import { FlatList, Text, View } from "react-native";
import MovieCard from "./MovieCard";

const TopRatedMovies = ({ movies = [] }) => {
    if (!Array.isArray(movies) || movies.length === 0) {
        return (
            <View className="mt-8">
                <Text className="text-white">No movies found</Text>
            </View>
        )
    }

    return (
        <View className="justify-center mt-8">
            <Text className="text-white text-xl mx-5">Top Rated</Text>
            <FlatList
                data={movies}
                horizontal
                keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                renderItem={({ item }) => (
                    <MovieCard movie={item}/>
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 8 }}
            />
        </View>
    );
};

export default TopRatedMovies;
