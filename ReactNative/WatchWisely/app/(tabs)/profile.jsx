import React, { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { toggleTheme, selectTheme } from "../../src/redux/slice/themeSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTopRatedMovies, selectMovies } from "../../src/redux/slice/movieSlice";

const Profile = () => {
  // const dispatch = useDispatch();
  // const isDarkMode = useSelector(selectTheme);
  // console.log("Theme in Profile:", isDarkMode);

  // useEffect(() => {
  //   dispatch(toggleTheme());
  // }, [dispatch]);
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-950">
      <Text className="font-bold text-4xl text-white italic">Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
