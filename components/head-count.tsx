import { View, Text,Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

function HeadCount() {

  const [count,setCount] = useState(0);

  const decrement = () =>{
    if (count > 0){
      setCount(count -1);
    }
  }

  const increment = () =>{
    setCount(count + 1);
  }


  return (
    <View className="px-4 py-4 mt-4 border border-black flex-col  items-center rounded-lg">
      <Text className="text-2xl font-semibold">HEAD COUNT</Text>
      <View className="flex flex-row items-center mt-2">
        <Pressable
          className="px-1 py-1 rounded-lg border border-black"
          onPress={decrement}
        >
          <Feather name="minus" size={24} color="black" />
        </Pressable>
        <Text className="text-3xl font-semibold mx-8">{count}</Text>
        <Pressable
          className="px-1 py-1 rounded-lg border border-black"
          onPress={increment}
        >
          <Feather name="plus" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

export default HeadCount;
