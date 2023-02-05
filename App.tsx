import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Drawer from "./components/drawer";
import Main from "./components/main";
import { useState } from "react";

export type MainView = "home" | "availability" | "settings";

export default function App() {
  const [view, setView] = useState<MainView>("home");

  const switchView = (view: MainView) => {
    setView(view);
  };

  return (
    <View className="flex-1 flex-col items-center justify-between px-4 pt-16 pb-4">
      <StatusBar style="auto" />
      <Main view={view} />
      <Drawer switchView={switchView} />
    </View>
  );
}
