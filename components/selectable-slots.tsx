import { View, ScrollView, Text, Pressable } from "react-native";
import SlotChip from "./slot-chip";
import { getAllSlots } from "../api/api";
import { useQuery, useMutation, useQueryClient } from "react-query";

function SelectableSlots({toggleSlotSelection}:{toggleSlotSelection:any}) {

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
          return <SlotChip toggleSlotSelection={toggleSlotSelection} key={slot.id} slot={slot} canDelete={false}/>;
        })}
      </View>
    );
  }

  export default SelectableSlots;