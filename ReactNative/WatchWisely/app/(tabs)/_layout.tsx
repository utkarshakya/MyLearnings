import { TabBarIcon } from "@/src/components/TabBarIcon";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          color: "white",
        },
        tabBarStyle: {
          position: "absolute",
          marginHorizontal: 20,
          overflow: "hidden",
          height: 100,
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: `#0f172a`,
        },
        tabBarItemStyle: {
          height: 54,
          borderRadius: 10,
          backgroundColor: "#334155",
          margin: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              icon="home-outline"
              focusedIcon="home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              icon="search-outline"
              focusedIcon="search"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              icon="person-outline"
              focusedIcon="person"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
