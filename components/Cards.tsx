import { icons, images } from "@/constants";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Models } from "react-native-appwrite";

type FeaturedCardProps = {
  item: Models.Document;
  onPress?: () => void;
};

type CardProps = {
  item: Models.Document;
  onPress?: () => void;
};

export function FeaturedCard({
  item: { name, address, image, price, rating },
  onPress,
}: FeaturedCardProps) {
  return (
    <TouchableOpacity
      className="flex-col w-[240px] h-[340px]"
      onPress={onPress}
    >
      <Image source={{ uri: image }} className="size-full rounded-xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-xl absolute bottom-0"
      />

      <View className="flex-row items-center bg-white/85 rounded-full gap-2 absolute right-6 top-5 py-2 px-2.5">
        <Image source={icons.star} className="size-4" />
        <Text className="font-rubik-bold text-primary-300">{rating}</Text>
      </View>

      <View className="flex-col gap-3 absolute left-5 bottom-6">
        <Text className="font-rubik-bold text-white">{name}</Text>
        <Text className="font-rubik text-white">{address}</Text>
        <Text className="font-rubik-bold text-white">${price}</Text>
      </View>

      <View className="flex-row items-center gap-2 absolute right-7 bottom-7">
        <Image source={icons.heart} className="size-6" />
      </View>
    </TouchableOpacity>
  );
}

export function Card({
  item: { name, address, image, price, rating },
  onPress,
}: CardProps) {
  return (
    <TouchableOpacity
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
      onPress={onPress}
    >
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          {rating}
        </Text>
      </View>

      <Image source={{ uri: image }} className="w-full h-40 rounded-lg" />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">{name}</Text>
        <Text className="text-xs font-rubik text-black-100">{address}</Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
            ${price}
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
