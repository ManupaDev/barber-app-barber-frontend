import { MaterialIcons, Feather } from "@expo/vector-icons";
import { View, Text, Pressable, FlatList } from "react-native";
import { useMutation,useQueryClient } from "react-query";
import { deleteSlot } from "../api/api";
import { useState } from "react";
import clsx from "clsx";
import dayjs from "dayjs";

function SlotChip({ slot,canDelete,toggleSlotSelection}: { slot: any,canDelete: boolean,toggleSlotSelection?:any }) {

  const [selected,setSelected] = useState(false);

  const toggleSelect = () =>{
    setSelected(!selected);
  }
  

  const queryClient = useQueryClient();

  const stime = dayjs(new Date(slot.stime)).format("HH:mm") ;

  const etime = dayjs(new Date(slot.etime)).format("HH:mm")

  const deleteSlotMutation = useMutation(deleteSlot, {
    onSuccess: () => {
      queryClient.invalidateQueries("slots");
    },
  });

  if (canDelete) {

    return (
      <View className="py-1 px-2 border border-black flex flex-row justify-between items-center rounded mt-2">
        <Text className="text-base font-semibold">{`${stime} - ${etime}`}</Text>
        <MaterialIcons name="delete-outline" size={20} color="black" onPress={()=>{
          deleteSlotMutation.mutate({id:slot.id});
        }}/>
      </View>
    );
  }
  return (
    <Pressable onPress={()=>{
      toggleSelect()
      toggleSlotSelection(slot.id,slot)
    }} className={clsx("py-1 px-2 border border-black flex flex-row justify-center items-center rounded mt-2",{
      "border-red-500":selected
    })}>
      <Text className="text-base font-semibold">{`${stime} - ${etime}`}</Text>
    </Pressable>
  );
}

export default SlotChip;
