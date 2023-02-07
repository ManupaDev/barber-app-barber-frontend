import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Pressable, Text } from "react-native";

function DateTimeView() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleDateChange = (e: any, selectedDate: Date) => {
    if (e.type === "set") {
      setDate(selectedDate);
      setShow(false);
    } else if (e.type === "dismissed") {
      setShow(false);
    }
  };

  const toggleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Pressable className="mt-4" onPress={toggleShow}>
        <Text className="text-base font-semibold px-2 py-1 rounded border border-black text-center">
          Choose A Date
        </Text>
      </Pressable>
      <DateTimePicker
        show={show}
        date={date}
        handleDateChange={handleDateChange}
      />
    </>
  );
}

export default DateTimeView;

function DateTimePicker({
  show,
  date,
  handleDateChange,
}: {
  show: boolean;
  date: Date;
  handleDateChange: any;
}) {
  if (show) {
    return (
      <RNDateTimePicker
        value={date}
        mode="date"
        is24Hour={true}
        onChange={handleDateChange}
      />
    );
  } else {
    return null;
  }
}
