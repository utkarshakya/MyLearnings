import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearch,
  fetchSearchSuggestions,
  selectSearch,
} from "../../src/redux/slice/searchSlice";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSearchBar from "../../src/components/CustomSearchBar";
import { useResponsiveHeight } from "../../src/hooks/useResponsive";
import { optimizeSearchResults } from "../../src/utils/functions";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { search, searchStatus, searchError } = useSelector(selectSearch);

  if (searchStatus === "succeeded" && search.length > 0) {
    // console.log(typeof search[0].popularity);

    // Sort the search results by popularity in descending order
    const optimizedSearch = optimizeSearchResults(search);
    // console.log(JSON.stringify(optimizedSearch[0], null, 2));
  }

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim().length > 2) {
        dispatch(fetchSearch(query));
      }
    }, 1000);
    return () => clearTimeout(delayDebounce);
  }, [dispatch, query]);

  return (
    <SafeAreaView className="flex-1 bg-gray-800">
      <ScrollView
        className="flex-1 p-5 mb-10"
        contentContainerStyle={{ gap: useResponsiveHeight(4) }}
      >
        <Text className="font-bold text-4xl text-white italic text-center">
          Search
        </Text>
        <CustomSearchBar
          query={query}
          setQuery={setQuery}
          placeholder={"Search"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
