import { View, TextInput } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = ({ placeholder, onPress }) => {
  const [search, setSearch] = useState("");

  return (
    <View className="flex-row rounded-full justify-center items-center mt-8 px-7 py-2 mx-5 bg-gray-700">
      <TextInput
        className="w-full flex-1 text-white py-4 text-xl"
        placeholder={placeholder}
        placeholderTextColor={"#bdbdbd"}
        value={search}
        onChangeText={setSearch}
        onPress={onPress}
      />
      <EvilIcons name="search" color={"#bdbdbd"} size={24} />
    </View>
  );
};

export default SearchBar;
