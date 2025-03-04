import { icons, images } from "@/constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function FeaturedCard() {
  return (
    <TouchableOpacity className="flex-col w-[240px] h-[340px]">
      <Image source={images.newYork} className="size-full rounded-xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-xl absolute bottom-0"
      />

      <View className="flex-row items-center bg-white/85 rounded-full gap-2 absolute right-6 top-5 py-2 px-2.5">
        <Image source={icons.star} className="size-4" />
        <Text className="font-rubik-bold text-primary-300">4.5</Text>
      </View>

      <View className="flex-col gap-3 absolute left-5 bottom-6">
        <Text className="font-rubik-bold text-white">Merialla Villa</Text>
        <Text className="font-rubik text-white">New York, US</Text>
        <Text className="font-rubik-bold text-white">$12219</Text>
      </View>

      <View className="flex-row items-center gap-2 absolute right-7 bottom-7">
        <Image source={icons.heart} className="size-6" />
      </View>
    </TouchableOpacity>
  );
}

export function Card() {
  return (
    <TouchableOpacity className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative">
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          4.8
        </Text>
      </View>

      <Image source={images.newYork} className="w-full h-40 rounded-lg" />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">Villa</Text>
        <Text className="text-xs font-rubik text-black-100">New York, US</Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
            $500
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191D31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
