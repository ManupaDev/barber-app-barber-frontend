import { View, Text } from "react-native";
import Header from "../components/header";
import HeadCount from "../components/head-count";
import Card from "../components/card";

function Home() {
  const date = new Date();

  return (
    <View className="w-full">
      <Header />
      <HeadCount />
      <View className="mt-4 flex flex-col items-center">
        <Text className="text-2xl font-semibold mb-4">TODAY</Text>
        <Card preview={true} date={date}/>
      </View>
    </View>
  );
}

export default Home;
