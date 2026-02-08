import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import "../global.css";

export default function LandingScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black">
      <ImageBackground
        source={{ uri: "https://via.placeholder.com/400x800" }}
        className="absolute w-full h-full"
        imageStyle={{ resizeMode: "cover", opacity: 0.15 }}
      />

      <View className="flex-1 items-center justify-between px-6 py-16">
        <Animated.View entering={FadeInDown.duration(500)} className="mt-10">
          <View className="w-20 h-20 rounded-full bg-white/20 items-center justify-center">
            <Text className="text-2xl">👋🏼</Text>
          </View>
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(150).duration(500)}
          className="items-center space-y-4"
        >
          <Text className="text-3xl font-bold text-white text-center">
            Welcome to Boilerplate
          </Text>
          <Text className="text-sm text-gray-300 text-center max-w-xs">
            The best way to start your new React Native project with Expo &
            NativeWind.
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(300).duration(500)}
          className="w-full max-w-sm space-y-4 gap-2"
        >
          <TouchableOpacity
            onPress={() => router.push("/(auth)/register")}
            className="w-full py-4 rounded-full bg-white flex-row justify-center items-center"
          >
            <Text className="text-black font-semibold text-base">
              Get Started
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text className="text-gray-300 text-center mt-2">
              Already have an account?{" "}
              <Text className="text-white underline font-bold">Log in</Text>
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
