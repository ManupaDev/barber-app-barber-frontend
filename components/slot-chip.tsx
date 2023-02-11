import { MaterialIcons, Feather } from "@expo/vector-icons";
import { View, Text, Pressable, FlatList } from "react-native";

function SlotChip() {
    return (
      <View className="py-1 px-2 border border-black flex flex-row justify-between items-center rounded mt-2">
        <Text className="text-base font-semibold">09:30 - 14:30</Text>
        <MaterialIcons name="delete-outline" size={20} color="black" />
      </View>
    );
  }

export default SlotChip;