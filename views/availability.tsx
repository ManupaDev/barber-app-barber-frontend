import { View, Text, Pressable, FlatList } from "react-native";
import Header from "../components/header";
import { Entypo } from "@expo/vector-icons";
import Card from "../components/card";
import DateTimeView from "../components/date-time-view";


function Availability() {
  return (
    <View className="w-full border-red-500">
      <Header />
      <View className="border-black mt-4 flex flex-col">
        <Text className="text-2xl font-semibold text-center">
          Availabilities
        </Text>

        <View className=" border-black flex flex-col mt-4">
          <Card preview={false}/>
          <DateTimeView />
        </View>
      </View>
    </View>
  );
}

export default Availability;
