import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Drawer from "./components/drawer";

export default function App() {
  return (
    <View className="flex-1 flex-col items-center justify-between px-4 pt-16 pb-4">
      <StatusBar style="auto" />
      <View className="border border-black py-2 w-full flex-col justify-start">

      </View>
      <Drawer/>
    </View>
  );
}
