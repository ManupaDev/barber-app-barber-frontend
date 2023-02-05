import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

function Drawer() {
  return (
    <View className="border border-black py-2 w-full flex flex-row justify-center rounded-lg">
      <View className="px-1 py-1 rounded-lg border border-black">
        <Feather name="calendar" size={24} color="black" />
      </View>
      <View className="px-1 py-1 rounded-lg border border-black mx-8">
        <Feather name="home" size={24} color="black" />
      </View>
      <View className="px-1 py-1 rounded-lg border border-black">
        <Feather name="settings" size={24} color="black" />
      </View>
    </View>
  );
}

export default Drawer;
