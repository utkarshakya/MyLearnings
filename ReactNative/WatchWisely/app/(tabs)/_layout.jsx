import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColors } from "../../src/hooks/useColors";
import {
  useResponsiveHeight,
  useResponsiveWidth,
} from "../../src/hooks/useResponsive";
import CustomTabBar from "../../src/components/CustomTabBar";
import { use } from "react";

export default function TabLayout() {
  const iconSize = useResponsiveHeight(3); // Example size based on height

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarFocusedIconName: "home",
          tabBarUnfocusedIconName: "home-outline",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          tabBarFocusedIconName: "search",
          tabBarUnfocusedIconName: "search-outline",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarFocusedIconName: "person",
          tabBarUnfocusedIconName: "person-outline",
        }}
      />
    </Tabs>
  );
}
