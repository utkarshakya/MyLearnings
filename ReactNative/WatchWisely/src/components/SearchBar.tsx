import { View, TextInput } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

interface props {
  placeholder: string;
  onPress: () => void;
}

const SearchBar = ({ placeholder, onPress }: props) => {
  const [search, setSearch] = useState("");

  return (
    <View className="flex-row border border-white rounded-full justify-center items-center mt-8">
      <EvilIcons name="search" color={"white"} size={24} className="ml-5" />
      <TextInput
        className="w-full flex-1 text-white py-4 text-xl"
        placeholder={placeholder}
        placeholderTextColor={"grey"}
        value={search}
        onChangeText={setSearch}
        onPress={onPress}
      />
    </View>
  );
};

export default SearchBar;
