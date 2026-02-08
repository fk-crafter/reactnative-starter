import HeaderApp from "@/components/HeaderApp";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function ProtectedLayout() {
  return (
    <View className="flex-1 bg-white">
      <HeaderApp />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </View>
  );
}
