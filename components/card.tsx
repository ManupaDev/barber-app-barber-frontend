import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import clsx from "clsx";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import { getAvailabilityByDate } from "../api/api";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { isLoading } from "expo-font";
dayjs.extend(advancedFormat);

function Card({ preview, date }: { preview: boolean; date: dayjs.Dayjs }) {
  // TODO: use date to get slots and render
  const { isLoading: isAvailabilityLoading, data: availability } = useQuery(
    ["availabilities", date.toISOString()],
    () => getAvailabilityByDate(date.toISOString())
  );

  if (isAvailabilityLoading) {
    return (
      <View className="flex flex-col h-32 w-full px-6 py-4 border border-black rounded-lg">
        <View className="flex flex-row justify-between items-center mb-4">
          <Text className="text-base font-semibold">
            {dayjs(date).format("Do MMMM")}
          </Text>
          <View className="flex flex-row">
            <FeatherIcon
              name="edit"
              size={16}
              color="black"
              preview={preview}
            />
            <FeatherIcon
              name="trash"
              size={16}
              color="black"
              preview={preview}
            />
          </View>
        </View>
        <View className="mt-4 flex justify-center items-center">
          <Text className="text-base font-semibold">Loading...</Text>
        </View>
      </View>
    );
  }

  if (!availability) {
    return (
      <View className="flex flex-col h-32 w-full   px-6 py-4 border border-black rounded-lg">
        <View className="flex flex-row justify-between items-center mb-4">
          <Text className="text-base font-semibold">
            {dayjs(date).format("Do MMMM")}
          </Text>
          <View className="flex flex-row">
            <FeatherIcon
              name="edit"
              size={16}
              color="black"
              preview={preview}
            />
            <FeatherIcon
              name="trash"
              size={16}
              color="black"
              preview={preview}
            />
          </View>
        </View>
        <View className="mt-4 flex justify-center items-center">
          <Text className="text-base font-semibold">
            No availabilities added for this day
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="flex flex-col w-full px-6 py-4 border border-black rounded-lg">
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="text-base font-semibold">
          {dayjs(availability.on).format("Do MMMM")}
        </Text>
        <View className="flex flex-row">
          <FeatherIcon name="edit" size={16} color="black" preview={preview} />
          <FeatherIcon name="trash" size={16} color="black" preview={preview} />
        </View>
      </View>
      <View className="mt-4 gap-2">
        {availability.slots.map((slot) => {
          return (
            <View
              key={slot.slot.id}
              className="border border-black flex flex-row justify-center rounded-md"
            >
              <Text className="text-base font-semibold py-1">
                {`${dayjs(slot.slot.stime).format("HH:mm")} - ${dayjs(
                  slot.slot.etime
                ).format("HH:mm")}`}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default Card;

function FeatherIcon({
  name,
  size,
  color,
  preview,
}: {
  name: any;
  size: number;
  color: string;
  preview: boolean;
}) {
  if (!preview) {
    return <Feather name={name} size={size} color={color} className="block" />;
  }
  return null;
}
