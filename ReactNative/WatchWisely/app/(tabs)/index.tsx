import { ScrollView, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/src/components/SearchBar";
import { router } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-950">
      <ScrollView
        className="flex-1 px-5 pt-10 mb-10"
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ minHeight: "100%" }}
        // keyboardShouldPersistTaps="handled"
      >
        <Text className="font-bold text-4xl text-white italic text-center">
          Welcome
        </Text>
        <SearchBar
          placeholder="String"
          onPress={() => router.push("/search")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
