import { icons, images } from "@/constants";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6 "
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-center text-base uppercase">
            welcome to real state
          </Text>
          <Text className="text-center text-3xl font-rubik-bold text-black-300">
            Let's Get Your Closer {"\n"}
            To <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="text-center text-lg font-rubik text-black-200 mt-12">
            Login RealState with Google
          </Text>

          <TouchableOpacity
            onPress={() => {}}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-6 h-6 mr-5"
                resizeMode="contain"
              />
              <Text className="text-center text-lg font-rubik-medium text-black-300">
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
