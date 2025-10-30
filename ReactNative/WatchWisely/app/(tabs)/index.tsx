import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-slate-900">
      <Text className="font-bold text-4xl text-white italic">Welcome</Text>
    </SafeAreaView>
  );
};

export default Index;
