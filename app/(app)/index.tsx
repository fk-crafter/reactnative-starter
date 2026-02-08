import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = () => {
    console.log("User logged out");
    router.replace("/(auth)/login");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 items-center justify-center p-6">
      <View className="items-center space-y-4">
        <View className="w-24 h-24 bg-blue-100 rounded-full items-center justify-center mb-4">
          <Text className="text-4xl">🚀</Text>
        </View>

        <Text className="text-2xl font-bold text-gray-900">
          Boilerplate Ready!
        </Text>

        <Text className="text-gray-500 text-center text-base">
          This is your protected Home Screen.{"\n"}
          Start building your new app from here.
        </Text>

        <TouchableOpacity
          onPress={handleLogout}
          className="mt-10 border border-red-500 px-8 py-3 rounded-full"
        >
          <Text className="text-red-500 font-semibold">Log out (Demo)</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
