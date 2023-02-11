import { useState,useEffect } from "react";
import { View, Text } from "react-native";

function Header() {

  const [date,setDate] = useState(new Date());
  
  useEffect(()=>{

    const clock = setInterval(()=>{
      const tick = new Date();
      setDate(tick);
    },60*1000); 

    return ()=>{
      clearInterval(clock);
    }
  },[])

  return (
    <View className="px-4 py-4 border border-black rounded-lg">
      <Text className="text-base font-semibold">Welcome, Mr. Ruwan</Text>
      <View className="mt-2">
        <Text className="text-3xl font-semibold">{date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</Text>
        <Text className="text-xl font-semibold">{date.toDateString()}</Text>
      </View>
    </View>
  );
}

export default Header;
