import { useState } from "react";
import { Pressable, Text } from "react-native";
import DateTimePicker from "./date-time-picker";

function DateTimeView({
  date,
  show,
  handleDateChange,
  toggleShow,
}: {
  date: Date;
  show: boolean;
  handleDateChange: any;
  toggleShow: any;
}) {
  return (
    <>
      <Pressable className="mt-4" onPress={toggleShow}>
        <Text className="text-base font-semibold px-2 py-1 rounded border border-black text-center">
          Choose a Date
        </Text>
      </Pressable>
      <DateTimePicker
        show={show}
        date={date}
        mode="date"
        handleDateChange={handleDateChange}
      />
    </>
  );
}

export default DateTimeView;
