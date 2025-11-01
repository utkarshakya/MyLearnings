import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-950">
      <Text className="font-bold text-4xl text-white italic">Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
