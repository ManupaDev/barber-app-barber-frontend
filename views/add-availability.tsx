import { View, Text, Pressable, FlatList } from "react-native";
import Header from "../components/header";
import { Entypo } from "@expo/vector-icons";
import Card from "../components/card";
import DateTimeView from "../components/date-time-view";
import { MainView } from "../App";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import SelectableSlots from "../components/selectable-slots";
import { createAvailability } from "../api/api";
import dayjs from "dayjs";

function AddAvailability({
  switchView,
}: {
  switchView: (view: MainView) => void;
}) {
  const [date, setDate] = useState(dayjs());
  const [show, setShow] = useState(false);

  const [selectedSlots, setSelectedSlots] = useState(new Map());

  const toggleSlotSelection = (id, slot) => {
    if (selectedSlots.has(id)) {
      const temp = new Map(selectedSlots);
      temp.delete(id);
      setSelectedSlots(temp);
    } else {
      const temp = new Map(selectedSlots);
      temp.set(id, id);
      setSelectedSlots(temp);
    }
  };

  const handleAddAvailability = async () =>{
    if(selectedSlots.size === 0) {
      console.log("Please select at least one slot");

    }else{
      console.log(selectedSlots);
      await createAvailability({on:date, slots:Array.from(selectedSlots.keys())})
    }

  }

  const handleDateChange = (e: any, selectedDate: Date) => {
    if (e.type === "set") {
      setDate(dayjs(selectedDate));
      setShow(false);
    } else if (e.type === "dismissed") {
      setShow(false);
    }
  };

  const toggleShow = () => {
    setShow(true);
  };

  return (
    <View className="w-full  border-red-500">
      <Header />
      <View className="border-black mt-4 flex flex-col">
        <Text className="text-2xl font-semibold text-center">
          Add Availability
        </Text>

        <View className="  border-black flex flex-col ">
          <Text className="font-semibold text-lg">
            {date.toDate().toLocaleDateString()}
          </Text>
          <DateTimeView
            date={date}
            show={show}
            handleDateChange={handleDateChange}
            toggleShow={toggleShow}
          />
          <Text className="font-semibold text-lg mt-4">Select the slots</Text>
          <View>
            <SelectableSlots toggleSlotSelection={toggleSlotSelection} />
          </View>
          <View className="w-full flex flex-row  border-black">
            <Pressable
              className="mt-4 w-1/4"
              onPress={() => {
                switchView("availability");
              }}
            >
              <Text className="text-base font-semibold px-2 py-1 rounded border border-black text-center">
                Cancel
              </Text>
            </Pressable>
            <Pressable className="mt-4" onPress={() => {}}>
              <Text onPress={handleAddAvailability} className="text-base font-semibold px-2 py-1 ml-4 rounded border border-black text-center">
                Add Availability
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AddAvailability;
