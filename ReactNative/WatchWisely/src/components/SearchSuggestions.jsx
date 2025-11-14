import { FlatList, Text, View } from "react-native";
import { useColors } from "../hooks/useColors";
import { useResponsiveHeight } from "../hooks/useResponsive";
import MovieCard from "./MovieCard";

const SearchSuggestions = ({ data }) => {
  const { Colors } = useColors();

  return (
    <View
      style={{
        height: useResponsiveHeight(70),
        paddingVertical: useResponsiveHeight(1),
      }}
    >
      {data.length === 0 ? (
        <Text
          style={{
            color: Colors.core.text,
            textAlign: "center",
            marginTop: 40,
          }}
        >
          No Result Found
        </Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) =>
            item.id?.toString() || index.toString()
          }
          renderItem={({ item }) => (
            <MovieCard data={item} heightInPercentage={20} />
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
        />
      )}
    </View>
  );
};

export default SearchSuggestions;
