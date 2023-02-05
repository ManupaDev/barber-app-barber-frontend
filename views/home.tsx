import { View, Text } from "react-native";
import Header from "../components/header";
import HeadCount from "../components/head-count";

function Home() {
  return (
    <View className="border border-black w-full">
      <Header />
      <HeadCount />
    </View>
  );
}

export default Home;
