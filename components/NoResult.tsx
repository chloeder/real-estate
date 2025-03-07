import { images } from "@/constants";
import { Image, Text, View } from "react-native";

export function NoResult() {
  return (
    <View className="flex-col items-center my-5">
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMode="contain"
      />
      <Text className="font-rubik-bold text-black-300 text-2xl">
        No result found
      </Text>
      <Text className="font-rubik text-black-100 mt-2">
        Try searching for something else
      </Text>
    </View>
  );
}
