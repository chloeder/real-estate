import { categories } from "@/constants/data";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

export function FilterCategories() {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter ?? "All"
  );

  function handleSelectCategory(category: string) {
    if (selectedCategory === category) {
      setSelectedCategory("");
      router.setParams({ filter: "" });
      return;
    }
    setSelectedCategory(category);
    router.setParams({ filter: category });
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-6"
    >
      {categories.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => handleSelectCategory(item.category)}
            key={index}
            className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${
              selectedCategory === item.category
                ? "bg-primary-300"
                : "bg-primary-100 border border-primary-200"
            }`}
          >
            <Text
              className={`text-sm ${
                selectedCategory === item.category
                  ? "text-white font-rubik-bold"
                  : "text-black-300 font-rubik"
              }`}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
