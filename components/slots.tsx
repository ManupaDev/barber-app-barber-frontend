import { View, ScrollView, Text, Pressable } from "react-native";
import SlotChip from "../components/slot-chip";
import { getAllSlots } from "../api/api";
import { useQuery, useMutation, useQueryClient } from "react-query";

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
          return <SlotChip key={slot.id} slot={slot} canDelete={true}/>;
        })}
      </View>
    );
  }

  export default Slots;