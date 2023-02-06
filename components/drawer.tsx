import { View, Button, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MainView } from "../App";

function Drawer({ switchView }: { switchView: (view: MainView) => void }) {
  return (
    <View className="border border-black py-2 w-full flex flex-row justify-center rounded-lg bg-slate-200">
      <Pressable
        className="px-1 py-1 rounded-lg border border-black"
        onPress={() => {
          switchView("availability");
        }}
      >
        <Feather name="calendar" size={24} color="black" />
      </Pressable>
      <Pressable
        className="px-1 py-1 rounded-lg border border-black mx-8"
        onPress={() => {
          switchView("home");
        }}
      >
        <Feather name="home" size={24} color="black" />
      </Pressable>
      <Pressable
        className="px-1 py-1 rounded-lg border border-black"
        onPress={() => {
          switchView("settings");
        }}
      >
        <Feather name="settings" size={24} color="black" />
      </Pressable>
    </View>
  );
}

export default Drawer;
