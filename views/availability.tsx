import { View, Text, Pressable, FlatList } from "react-native";
import Header from "../components/header";
import { Entypo } from "@expo/vector-icons";
import Card from "../components/card";
import DateTimeView from "../components/date-time-view";
import { useState } from "react";

function Availability() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleDateChange = (e: any, selectedDate: Date) => {
    if (e.type === "set") {
      setDate(selectedDate);
      setShow(false);
    } else if (e.type === "dismissed") {
      setShow(false);
    }
  };

  const toggleShow = () => {
    setShow(true);
  };

  return (
    <View className="w-full border-red-500">
      <Header />
      <View className="border-black mt-4 flex flex-col">
        <Text className="text-2xl font-semibold text-center">
          Availabilities
        </Text>
        <View className=" border-black flex flex-col mt-4">
          <Card preview={false} date={date}/>
          <DateTimeView date={date} show={show} handleDateChange={handleDateChange} toggleShow={toggleShow}/>
        </View>
      </View>
    </View>
  );
}

export default Availability;
