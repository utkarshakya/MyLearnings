import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch, selectSearch } from "../../src/redux/slice/searchSlice";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSearchBar from "../../src/components/CustomSearchBar";

const Search = () => {
  // const response = useSelector(selectSearch)
  // console.log(response)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   // dispatch(fetchSearch("Red Notice"));
  // }, [dispatch])
  return (
    <SafeAreaView className="flex-1 bg-gray-800">
      <ScrollView
        className="flex-1 p-5 mb-10"
        contentContainerStyle={{ gap: 6 }}
      >
        <Text className="font-bold text-4xl text-white italic text-center">
          Search
        </Text>
        <CustomSearchBar />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
