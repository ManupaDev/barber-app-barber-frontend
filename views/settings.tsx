import { View, ScrollView, Text, Pressable } from "react-native";
import Header from "../components/header";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import SlotChip from "../components/slot-chip";
import { createSlot, getAllSlots } from "../api/api";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import DateTimePicker from "../components/date-time-picker";

function Settings() {
  const queryClient = useQueryClient();

  const [stime, setStime] = useState(new Date());
  const [etime, setEtime] = useState(new Date());

  const handleStimeUpdate = (newStime: Date) => {
    setStime(newStime);
  };

  const handleEtimeUpdate = (newEtime: Date) => {
    setEtime(newEtime);
  };

  const addSlotMutation = useMutation(createSlot, {
    onSuccess: () => {
      queryClient.invalidateQueries("slots");
    },
  });

  

  return (
    <ScrollView className="w-full border border-red-500">
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
            <View className="px-4 py-4 border mt-2 border-black rounded-lg">
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
    </ScrollView>
  );
}

export default Settings;

function Slots() {
  const { isLoading, isError, data, error } = useQuery("slots", getAllSlots);
  if (isLoading) {
    return (
      <View className=" border-black ">
        <Text>Loading</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View className=" border-black ">
        <Text>Unable to connect to the server</Text>
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View className=" border-black ">
        <Text className="font-semibold text-base">No Slots Added.</Text>
      </View>
    );
  }

  return (
    <View className=" border-black ">
      {data.map((slot) => {
        return <SlotChip key={slot.id} slot={slot} />;
      })}
    </View>
  );
}

function TimeSelect({
  time,
  handleTimeUpdate,
}: {
  time: Date;
  handleTimeUpdate: any;
}) {
  const [show, setShow] = useState(false);
  
  const formattedDate = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const handleDateChange = (e: any, selectedDate: Date) => {
    if (e.type === "set") {
      handleTimeUpdate(selectedDate);
      setShow(false);
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
