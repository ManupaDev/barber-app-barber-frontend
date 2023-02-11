import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Drawer from "./components/drawer";
import Main from "./components/main";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export type MainView =
  | "home"
  | "availability"
  | "settings"
  | "add-availability";

const queryClient = new QueryClient();

export default function App() {
  const [view, setView] = useState<MainView>("home");

  const switchView = (view: MainView) => {
    setView(view);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <View className="flex-1 flex-col items-center justify-between px-4 pt-16 pb-4 border-2 border-blue-500">
        <StatusBar style="auto" />
        <Main view={view} switchView={switchView} />
        <Drawer switchView={switchView} />
      </View>
    </QueryClientProvider>
  );
}
