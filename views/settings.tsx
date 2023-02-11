import { View,ScrollView, Text, Pressable } from "react-native";
import Header from "../components/header";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import SlotChip from "../components/slot-chip";

function Settings() {
  
  return (
    <ScrollView className="w-full border border-red-500">
      <Header />
      <View className="mt-4  border-black">
        <Text className="text-2xl font-semibold text-center">Settings</Text>
        <View className="mt-4">
          <Text className="text-xl font-semibold">Manage Work Slots</Text>

          <View className="mt-4">
            <Text className="text-xl font-semibold">Existing Slots</Text>
            <View className=" border-black ">
              <SlotChip />
              <SlotChip />
            </View>
          </View>

          <View className="mt-4">
            <Text className="text-xl font-semibold">Add a new slot</Text>
            <View className="px-4 py-4 border mt-2 border-black rounded-lg">
              <Text className="text-base font-semibold">Start Time</Text>
              <View className="flex flex-row border-black my-1 items-center">
                <Text className="px-2 py-1 border w-1/2 text-center border-black rounded text-base font-semibold">
                  09:30
                </Text>
                <Pressable className="border border-black rounded-md px-1 py-1 ml-4">
                  <Feather name="clock" size={22} color="black" />
                </Pressable>
              </View>

              <Text className="text-base font-semibold">End Time</Text>
              <View className="flex flex-row my-1 items-center">
                <Text className="px-2 py-1 border w-1/2 text-center border-black  rounded text-base font-semibold">
                  09:30
                </Text>
                <Pressable className="border border-black rounded-md px-1 py-1 ml-4">
                  <Feather name="clock" size={22} color="black" />
                </Pressable>
              </View>

              <Pressable className="mt-2">
                <Text className="text-base border border-black py-1 px-2 rounded text-center font-semibold">ADD</Text>
              </Pressable>
            </View>
          </View>

          
        </View>
      </View>
    </ScrollView>
  );
}

export default Settings;
