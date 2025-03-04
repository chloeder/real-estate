import { icons } from "@/constants";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useDebouncedCallback } from "use-debounce";

export function Search() {
  // const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query || "");

  const debounceSearch = useDebouncedCallback((text: string) => {
    setSearch(text);
  }, 1000);

  const handleSearch = (text: string) => {
    setSearch(text);
    debounceSearch(text);
  };
  return (
    <View className="flex-row items-center justify-between w-full rounded-lg bg-accent-100 border border-primary-100 mt-5 p-4">
      <View className="flex-1 flex-row items-center z-50">
        <Image source={icons.search} className="size-6" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          placeholderTextColor="#9CA3AF"
          className="text-sm font-rubik  ml-2 flex-1"
        />
      </View>

      <TouchableOpacity>
        <Image source={icons.filter} className="size-6" />
      </TouchableOpacity>
    </View>
  );
}
