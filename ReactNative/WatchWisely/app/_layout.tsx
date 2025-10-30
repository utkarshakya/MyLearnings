import { Stack } from "expo-router";
import "@/src/globals.css";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="movies/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar />
    </>
  );
}
