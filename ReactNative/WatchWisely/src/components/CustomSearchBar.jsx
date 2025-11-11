import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const CustomSearchBar = ({ value, onChangeText, placeholder }) => {
  return (
    <View className="flex-row items-center bg-gray-700 rounded-full px-6 py-3 my-2 border border-white/30">
      <TextInput
        className="flex-1 text-white"
        placeholderTextColor={"#9e9e9e"}
        placeholder={placeholder || "Search for Movies or TV Shows"}
        value={value}
        onChangeText={onChangeText}
      />
      <Feather name="search" size={20} color="gray" />
    </View>
  );
};

export default CustomSearchBar;
