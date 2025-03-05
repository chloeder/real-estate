import { Card, FeaturedCard } from "@/components/Cards";
import { FilterCategories } from "@/components/FilterCategories";
import { Search } from "@/components/Search";
import { icons } from "@/constants";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { useAppwrite } from "@/lib/useAppwrite";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data: latestProperties, loading: latestPropertiesLoading } =
    useAppwrite({
      fn: getLatestProperties,
    });

  const {
    data: properties,
    loading: propertiesLoading,
    refetch,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 5,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 5,
    });
  }, [params.filter, params.query]);

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={properties}
        numColumns={2}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.toString()}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-4 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <Image
                  source={{ uri: user?.avatar }}
                  className="size-11 rounded-full"
                />
                <View className="ml-4 flex-col gap-1">
                  <Text className="text-black-100 font-rubik text-xs">
                    Good Morning
                  </Text>
                  <Text className="font-rubik-medium">{user?.name}</Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>

            <Search />

            <View className="flex-row items-center justify-between mt-6">
              <Text className="font-rubik-bold text-xl">Featured</Text>
              <Text className="font-rubik-bold text-primary-300">See All</Text>
            </View>

            <FlatList
              data={latestProperties}
              renderItem={({ item }) => <FeaturedCard item={item} />}
              keyExtractor={(item) => item.toString()}
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="flex gap-5 mt-5"
            />

            <View className="flex-row items-center justify-between mt-8">
              <Text className="font-rubik-bold text-xl">
                Our Recommendation
              </Text>
              <Text className="font-rubik-bold text-primary-300">See All</Text>
            </View>

            <FilterCategories />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
