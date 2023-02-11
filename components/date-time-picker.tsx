import RNDateTimePicker from "@react-native-community/datetimepicker";

function DateTimePicker({
    show,
    date,
    mode,
    handleDateChange,
  }: {
    show: boolean;
    date: Date;
    mode:any;
    handleDateChange: any;
  }) {
    if (show) {
      return (
        <RNDateTimePicker
          value={date}
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