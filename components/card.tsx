import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

function Card() {
  return (
    <View className="flex flex-col w-full px-6 py-4 border border-black rounded-lg">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-base font-semibold">4th February</Text>
        <Feather name="edit" size={16} color="black" />
      </View>
      <View className="mt-4">
        <View className="border border-black flex flex-row justify-center rounded-md">
          <Text className="text-base font-semibold py-1">09:30 - 14:30</Text>
        </View>
        <View className="border border-black flex flex-row justify-center mt-2 rounded-md">
          <Text className="text-base font-semibold py-1">16:30 - 21:30</Text>
        </View>
      </View>
    </View>
  );
}

export default Card;
