import { icons } from "@/constants";
import { settings } from "@/constants/data";
import { logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import React from "react";
import {
  Alert,
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SettingItemProps = {
  icon: ImageSourcePropType;
  title: string;
  showArrow?: boolean;
  textStyle?: string;
  onPress?: () => void;
};

function SettingItems({
  icon,
  title,
  textStyle,
  showArrow = true,
  onPress,
}: SettingItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between"
    >
      <View className="flex-row items-center gap-3">
        <Image source={icon} className="size-7" />
        <Text
          className={`font-rubik-medium text-black-300 text-lg ${textStyle}`}
        >
          {title}
        </Text>
      </View>

      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
  );
}

export default function Profile() {
  const { user, refetch } = useGlobalContext();

  async function handleLogout() {
    const res = await logout();

    if (res) {
      refetch();
    } else {
      Alert.alert("Login failed", "Please try again later");
    }
  }

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="px-5 pb-32">
        <View className="flex-row items-center justify-between">
          <Text className="font-rubik-bold text-xl">Profile</Text>
          <Image source={icons.bell} className="size-6" />
        </View>

        <View className="flex-row justify-center mt-5">
          <View className="flex-col items-center gap-5">
            <Image
              source={{ uri: user?.avatar }}
              className="size-44 rounded-full relative"
            />

            <Text className="font-rubik-bold text-2xl">{user?.name}</Text>
          </View>
        </View>

        <View className="flex-col gap-6 mt-12">
          <SettingItems
            icon={icons.calendar}
            title="My Booking"
            textStyle="text-black-200"
          />
          <SettingItems
            icon={icons.wallet}
            title="My Payment"
            textStyle="text-black-200"
          />
        </View>

        <View className="flex-col gap-6 mt-12">
          {settings.slice(2).map((item, index) => (
            <SettingItems
              key={index}
              icon={item.icon}
              title={item.title}
              textStyle="text-black-200"
            />
          ))}
        </View>

        <View className="flex-col gap-6 mt-12">
          <SettingItems
            icon={icons.logout}
            title="Logout"
            textStyle="text-[#F75555]"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
