import { View, ScrollView, Text, Pressable } from "react-native";
import Header from "../components/header";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import SlotChip from "../components/slot-chip";
import { createSlot, getAllSlots } from "../api/api";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import DateTimePicker from "../components/date-time-picker";
import Slots from "../components/slots";
import dayjs from "dayjs";

function Settings() {
  const queryClient = useQueryClient();

  const [stime, setStime] = useState(dayjs());
  const [etime, setEtime] = useState(dayjs());

  const handleStimeUpdate = (newStime: dayjs.Dayjs) => {
    setStime(newStime);
  };

  const handleEtimeUpdate = (newEtime: dayjs.Dayjs) => {
    setEtime(newEtime);
  };

  const addSlotMutation = useMutation(createSlot, {
    onSuccess: () => {
      queryClient.invalidateQueries("slots");
    },
  });

  

  return (
    <View className="w-full  border-red-500">
      <Header />
      <View className="mt-4  border-black">
        <Text className="text-2xl font-semibold text-center">Settings</Text>
        <View className="mt-4">
          <Text className="text-xl font-semibold">Manage Work Slots</Text>

          <View className="mt-4">
            <Text className="text-xl font-semibold">Existing Slots</Text>
            <Slots />
          </View>

          <View className="mt-4">
            <Text className="text-xl font-semibold">Add a new slot</Text>
            <View className="  mt-2 border-black rounded-lg">
              <Text className="text-base font-semibold">Start Time</Text>

              <TimeSelect time={stime} handleTimeUpdate={handleStimeUpdate} />

              <Text className="text-base font-semibold">End Time</Text>

              <TimeSelect time={etime} handleTimeUpdate={handleEtimeUpdate} />

              <Pressable
                className="mt-2"
                onPress={() => {
                  addSlotMutation.mutate({ stime, etime });
                }}
              >
                <Text className="text-base border border-black py-1 px-2 rounded text-center font-semibold">
                  ADD
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Settings;


function TimeSelect({
  time,
  handleTimeUpdate,
}: {
  time: dayjs.Dayjs;
  handleTimeUpdate: any;
}) {
  const [show, setShow] = useState(false);
  
  const formattedDate = time.format("HH:mm")
  

  const handleDateChange = (e: any, selectedDate: Date) => {
    if (e.type === "set") {
      setShow(false);
      handleTimeUpdate(dayjs(selectedDate));
    } else if (e.type === "dismissed") {
      setShow(false);
    }
  };

  return (
    <View className="flex flex-row border-black my-1 items-center">
      <Text className="px-2 py-1 border w-1/2 text-center border-black rounded text-base font-semibold">
        {formattedDate}
      </Text>
      <Pressable className="border border-black rounded-md px-1 py-1 ml-4">
        <Feather
          name="clock"
          size={22}
          color="black"
          onPress={() => {
            setShow(true);
          }}
        />
      </Pressable>
      <DateTimePicker
        date={time}
        show={show}
        mode={"time"}
        handleDateChange={handleDateChange}
      />
    </View>
  );
}
