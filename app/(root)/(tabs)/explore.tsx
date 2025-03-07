import { Card } from "@/components/Cards";
import { FilterCategories } from "@/components/FilterCategories";
import { NoResult } from "@/components/NoResult";
import { Search } from "@/components/Search";
import { icons } from "@/constants";
import { getProperties } from "@/lib/appwrite";
import { useAppwrite } from "@/lib/useAppwrite";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const {
    data: properties,
    loading: propertiesLoading,
    refetch,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 20,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 20,
    });
  }, [params.filter, params.query]);

  function handlePress(id: string) {
    return router.push(`/properties/${id}`);
  }

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={properties}
        numColumns={2}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handlePress(item.$id)} />
        )}
        keyExtractor={(item) => item.$id}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          propertiesLoading ? (
            <ActivityIndicator size="large" className="text-primary-300 mt-5" />
          ) : (
            <NoResult />
          )
        }
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex-row items-center justify-between mt-5">
              <TouchableOpacity
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
                onPress={() => {
                  router.back();
                }}
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <Text className="font-rubik-medium">
                Search for Your Ideal Home
              </Text>

              <TouchableOpacity>
                <Image source={icons.bell} className="size-5" />
              </TouchableOpacity>
            </View>

            <Search />

            <FilterCategories />

            <Text className="mt-5 font-rubik-bold">
              Found {properties?.length} items
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
