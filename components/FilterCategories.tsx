import { categories } from "@/constants/data";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

export function FilterCategories() {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  function handleSelectCategory(category: string) {
    setSelectedCategory(category);
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
            className={`flex-row items-center justify-center rounded-full ${
              selectedCategory === item.category
                ? "bg-primary-300"
                : "bg-primary-100 border border-primary-200"
            } px-4 py-2 mx-2`}
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
