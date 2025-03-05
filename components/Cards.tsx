import { icons, images } from "@/constants";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Models } from "react-native-appwrite";

type FeaturedCardProps = {
  item: Models.Document;
};

export function FeaturedCard({ item }: FeaturedCardProps) {
  return (
    <TouchableOpacity className="flex-col w-[240px] h-[340px]">
      <Image source={{ uri: item?.image }} className="size-full rounded-xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-xl absolute bottom-0"
      />

      <View className="flex-row items-center bg-white/85 rounded-full gap-2 absolute right-6 top-5 py-2 px-2.5">
        <Image source={icons.star} className="size-4" />
        <Text className="font-rubik-bold text-primary-300">{item?.rating}</Text>
      </View>

      <View className="flex-col gap-3 absolute left-5 bottom-6">
        <Text className="font-rubik-bold text-white">{item?.name}</Text>
        <Text className="font-rubik text-white">{item?.address}</Text>
        <Text className="font-rubik-bold text-white">${item?.price}</Text>
      </View>

      <View className="flex-row items-center gap-2 absolute right-7 bottom-7">
        <Image source={icons.heart} className="size-6" />
      </View>
    </TouchableOpacity>
  );
}

type CardProps = {
  item: Models.Document;
};

export function Card({ item }: CardProps) {
  return (
    <TouchableOpacity className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative">
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          {item?.rating}
        </Text>
      </View>

      <Image source={{ uri: item?.image }} className="w-full h-40 rounded-lg" />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">
          {item?.name}
        </Text>
        <Text className="text-xs font-rubik text-black-100">
          {item?.address}
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
            ${item?.price}
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
