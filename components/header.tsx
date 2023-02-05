import { View, Text } from "react-native";

function Header() {
  return (
    <View className="px-4 py-4 border border-black rounded-lg">
      <Text className="text-base font-semibold">Welcome, Manupa</Text>
      <View className="mt-2">
        <Text className="text-3xl font-semibold">09:45</Text>
        <Text className="text-xl font-semibold">4th February 2023</Text>
      </View>
    </View>
  );
}

export default Header;
