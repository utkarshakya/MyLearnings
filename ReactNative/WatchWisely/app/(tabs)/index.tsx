import { ScrollView, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/src/components/SearchBar";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <ScrollView
        className="px-5 py-10"
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ minHeight: "100%" }}
      >
        <Text className="font-bold text-4xl text-white italic text-center">
          Welcome
        </Text>
        <SearchBar />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
