import { useEffect, useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import CustomSearchBar from "../../src/components/CustomSearchBar";
import SearchSuggestions from "../../src/components/SearchSuggestions";
import {
  useResponsiveHeight,
  useResponsiveWidth,
} from "../../src/hooks/useResponsive";
import {
  clearSearch,
  fetchSearch,
  selectSearch,
} from "../../src/redux/slice/searchSlice";
import { optimizeSearchResults } from "../../src/utils/functions";
import PulsePosterSkeleton from "../../src/components/PulsePosterSkeleton";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { search, searchStatus, searchError } = useSelector(selectSearch);
  const searchPromiseRef = useRef(null);
  const optimizedSearch = optimizeSearchResults(search);
  const gap = useResponsiveHeight(4);
  const skeletonHeight = useResponsiveHeight(70);
  const skeletonPadding = useResponsiveHeight(1);

  useEffect(() => {
    searchPromiseRef.current?.abort();
    searchPromiseRef.current = null;

    const trimmedQuery = query.trim();

    if (trimmedQuery.length === 0) {
      dispatch(clearSearch());
      return undefined;
    }

    const delayDebounce = setTimeout(() => {
      const promise = dispatch(fetchSearch(trimmedQuery));
      searchPromiseRef.current = promise;
    }, 1000);

    return () => {
      clearTimeout(delayDebounce);
    };
  }, [dispatch, query]);

  useEffect(() => {
    return () => {
      searchPromiseRef.current?.abort();
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-gray-800">
      <View className="flex-1 p-5 mb-10" style={{ gap }}>
        <Text className="font-bold text-4xl text-white italic text-center">
          Search
        </Text>
        <View>
          <CustomSearchBar
            query={query}
            setQuery={setQuery}
            placeholder={"Search"}
          />
          {searchStatus === "loading" ? (
            <View
              style={{
                height: skeletonHeight,
                paddingVertical: skeletonPadding,
              }}
            >
              <FlatList
                data={[...Array(9).keys()]}
                keyExtractor={(item) => item.toString()}
                renderItem={() => (
                  <PulsePosterSkeleton
                    heightInPercentage={20}
                    widthInPercentage={30}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                numColumns={3}
              />
            </View>
          ) : (
            optimizedSearch.length > 0 && (
              <SearchSuggestions data={optimizedSearch} />
            )
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
