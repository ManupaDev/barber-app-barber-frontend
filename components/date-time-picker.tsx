import RNDateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

function DateTimePicker({
    show,
    date,
    mode,
    handleDateChange,
  }: {
    show: boolean;
    date: dayjs.Dayjs;
    mode:any;
    handleDateChange: any;
  }) {
    if (show) {
      return (
        <RNDateTimePicker
          value={date.toDate()}
          mode={mode}
          is24Hour={true}
          onChange={handleDateChange}
        />
      );
    } else {
      return null;
    }
  }
  
  export default DateTimePicker;