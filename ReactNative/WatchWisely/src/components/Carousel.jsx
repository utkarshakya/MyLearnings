import { FlatList, Text, View } from "react-native";
import MovieCard from "./MovieCard";

const Carousel = ({
  data = [],
  CardComponent,
  cardHeightInPercentage,
  isLoading,
}) => {
  if ((!isLoading && !Array.isArray(data)) || data.length === 0) {
    return (
      <View className="mt-8">
        <Text className="text-white">No data found</Text>
      </View>
    );
  }

  return (
    <View className="justify-center mt-10">
      {/* <Text className="text-gray-300 mx-5 mb-2 text-xl font-bold">
        TOP RATED data
      </Text> */}
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({ item }) => (
          <CardComponent
            data={item}
            heightInPercentage={cardHeightInPercentage}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
      />
    </View>
  );
};

export default Carousel;
