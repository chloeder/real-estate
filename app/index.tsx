import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl my-10">Welcome to my Apps</Text>
      <Link href="/sign-in">
        <Text>Properties</Text>
      </Link>
      <Link href="/explore">
        <Text>Explore</Text>
      </Link>
      <Link href="/profile">
        <Text>Profile</Text>
      </Link>
      <Link href="/properties/1">
        <Text>Properties</Text>
      </Link>
    </View>
  );
}
