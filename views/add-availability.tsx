import { View, Text, Pressable, FlatList } from "react-native";
import Header from "../components/header";
import { Entypo } from "@expo/vector-icons";
import Card from "../components/card";
import DateTimeView from "../components/date-time-view";
import { MainView } from "../App";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import SlotChip from "../components/slot-chip";

function AddAvailability({
  switchView,
}: {
  switchView: (view: MainView) => void;
}) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [selected, setSelected] = useState("");

  //TODO Fetch the data from the server
  const data = [
    { key: "1", value: "Mobiles" },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers" },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

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
    <View className="w-full  border-red-500">
      <Header />
      <View className="border-black mt-4 flex flex-col">
        <Text className="text-2xl font-semibold text-center">
          Add Availability
        </Text>

        <View className="  border-black flex flex-col ">
          <Text className="font-semibold text-lg">
            {date.toLocaleDateString()}
          </Text>
          <DateTimeView
            date={date}
            show={show}
            handleDateChange={handleDateChange}
            toggleShow={toggleShow}
          />
          <Text className="font-semibold text-lg mt-4">Add the slots</Text>
          <View>
            <SlotChip slot={{id:13,stime:"2023-02-24T03:00:28.550Z",etime:"2023-02-24T07:00:28.550Z"}} />
            <SelectList
              boxStyles={{ borderRadius: 4, padding: 4, marginTop: 8 }}
              inputStyles={{ fontSize: 16, fontWeight: "500" }}
              dropdownTextStyles={{ fontSize: 16, fontWeight: "500" }}
              dropdownStyles={{ borderRadius: 4, padding: 4 }}
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              search={false}
            />
            <Pressable
              className="mt-4"
              onPress={() => {
                switchView("add-availability");
              }}
            >
              <Text className="text-base font-semibold px-2 py-1 W-1/2 rounded border border-black text-center">
                ADD SLOT
              </Text>
            </Pressable>
          </View>
          <View className="w-full flex flex-row  border-black">
            <Pressable
              className="mt-4 w-1/4"
              onPress={() => {
                switchView("availability");
              }}
            >
              <Text className="text-base font-semibold px-2 py-1 rounded border border-black text-center">
                CANCEL
              </Text>
            </Pressable>
            <Pressable className="mt-4" onPress={() => {}}>
              <Text className="text-base font-semibold px-2 py-1 ml-4 rounded border border-black text-center">
                ADD AVAILABILITY
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AddAvailability;

