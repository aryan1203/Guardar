import { View, Text, Pressable } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Text className="text-white text-4xl font-bold">
        Guardar
      </Text>

      <Text className="text-gray-400 mt-2">
        Family Safety Network
      </Text>

      <Pressable
        className="bg-red-500 px-6 py-3 rounded-xl mt-8"
        onPress={() => navigation.navigate("Map")}
      >
        <Text className="text-white font-bold">
          Open Map
        </Text>
      </Pressable>
    </View>
  );
}