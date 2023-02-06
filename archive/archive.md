## FlatList

```jsx
const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "First Item",
  },
  {
    id: "5",
    title: "Second Item",
  },
  {
    id: "6",
    title: "Third Item",
  },
  {
    id: "7",
    title: "First Item",
  },
  {
    id: "8",
    title: "Second Item",
  },
  {
    id: "9",
    title: "Third Item",
  },
];

<View className="h-96 border border-red-500 mt-4 ">
  <FlatList
    data={DATA}
    renderItem={({ item }) => <Item title={item.title} />}
    keyExtractor={(item) => item.id}
  />
</View>;

const Item = ({ title }: { title: string }) => (
  <View className="border border-black py-4 mt-2">
    <Text className="text-2xl">{title}</Text>
  </View>
);
```

## Month Navigator

```jsx
<View className="flex flex-row w-1/2 mt-2  justify-between">
  <Pressable className="px-1 py-1 rounded-lg border border-black">
    <Entypo name="chevron-left" size={20} color="black" />
  </Pressable>
  <Text className="text-xl font-semibold mx-2">February</Text>
  <Pressable className="px-1 py-1 rounded-lg border border-black">
    <Entypo name="chevron-right" size={20} color="black" />
  </Pressable>
</View>
```
