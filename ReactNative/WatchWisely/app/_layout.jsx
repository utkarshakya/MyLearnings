import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../src/globals.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
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
      </Provider>
    </SafeAreaProvider>
  );
}
