// import { TabBarIcon } from "@/src/components/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

let theme = "light";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: `${theme === "light" ? "#fff" : "#000"}`,
          borderTopLeftRadius: 20, // Round top-left corner
          borderTopRightRadius: 20, // Round top-right corner
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.08,
          shadowRadius: 12,
          elevation: 10,
        },
        tabBarActiveTintColor: `${theme === "light" ? "#000" : "#fff"}`,
        tabBarInactiveTintColor: "#8E8E93",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "journal" : "journal-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
