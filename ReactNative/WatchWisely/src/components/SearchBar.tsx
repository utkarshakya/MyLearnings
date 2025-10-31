import { View, TextInput } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View className="flex-row border border-white rounded-full justify-center items-center mt-8">
      <EvilIcons name="search" color={"white"} size={24} className="ml-5" />
      <TextInput
        className="w-full flex-1 text-white py-4 text-xl"
        placeholder="Search"
        placeholderTextColor={"grey"}
      />
    </View>
  );
};

export default SearchBar;
