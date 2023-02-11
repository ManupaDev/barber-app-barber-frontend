import { MaterialIcons, Feather } from "@expo/vector-icons";
import { View, Text, Pressable, FlatList } from "react-native";
import { useMutation,useQueryClient } from "react-query";
import { deleteSlot } from "../api/api";


function SlotChip({ slot }: { slot: any }) {

  const queryClient = useQueryClient();

  const stime = new Date(slot.stime).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const etime = new Date(slot.etime).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const deleteSlotMutation = useMutation(deleteSlot, {
    onSuccess: () => {
      queryClient.invalidateQueries("slots");
    },
  });

  return (
    <View className="py-1 px-2 border border-black flex flex-row justify-between items-center rounded mt-2">
      <Text className="text-base font-semibold">{`${stime} - ${etime}`}</Text>
      <MaterialIcons name="delete-outline" size={20} color="black" onPress={()=>{
        deleteSlotMutation.mutate({id:slot.id});
      }}/>
    </View>
  );
}

export default SlotChip;
