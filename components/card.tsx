import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import clsx from "clsx";


function Card({preview,date}:{preview:boolean,date:Date}) {

  // TODO: use date to get slots and render

  return (
    <View className="flex flex-col w-full px-6 py-4 border border-black rounded-lg">
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="text-base font-semibold">4th February</Text>
        <View className="flex flex-row gap-4 ">
          {/* <Feather name="edit" size={16} color="black" /> */}
          <Feather name="trash" size={16} color="black" className="hidden"/>
        </View>
      </View>
      <View className="mt-4 gap-2">
        <View className="border border-black flex flex-row justify-center rounded-md">
          <Text className="text-base font-semibold py-1">09:30 - 14:30</Text>
        </View>
        <View className="border border-black flex flex-row justify-center rounded-md">
          <Text className="text-base font-semibold py-1">16:30 - 21:30</Text>
        </View>
      </View>
    </View>
  );
}

export default Card;
