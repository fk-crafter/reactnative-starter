import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    if (!name || !email || !password) return;

    setLoading(true);
    // Simulation API
    setTimeout(() => {
      console.log("Registering user:", { name, email });
      setLoading(false);
      // Redirige directement vers l'app après inscription
      router.replace("/(app)");
    }, 1000);
  };

  const handleOAuthLogin = (provider: string) => {
    console.log(`Register with ${provider}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
        className="px-6"
      >
        <View className="items-center mb-10 mt-10">
          {/* Placeholder Logo */}
          <View className="w-20 h-20 rounded-full bg-gray-200 mb-4 items-center justify-center">
            <Text className="text-xs text-gray-500">Logo</Text>
          </View>

          <Text className="text-2xl font-bold text-gray-900">
            Create your account
          </Text>
          <Text className="text-gray-500 mt-2 text-center">
            Start your journey with us
          </Text>
        </View>

        <View className="space-y-4">
          <View>
            <Text className="text-gray-700 mb-1 font-medium">Name</Text>
            <TextInput
              placeholder="John Doe"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
              className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900"
            />
          </View>

          <View>
            <Text className="text-gray-700 mb-1 font-medium">Email</Text>
            <TextInput
              placeholder="you@example.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900"
            />
          </View>

          <View>
            <Text className="text-gray-700 mb-1 font-medium">Password</Text>
            <TextInput
              placeholder="********"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900"
            />
          </View>

          <View>
            <Text className="text-gray-700 mb-1 font-medium">
              Confirm Password
            </Text>
            <TextInput
              placeholder="********"
              placeholderTextColor="#999"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900"
            />
          </View>

          <TouchableOpacity
            disabled={loading}
            onPress={handleRegister}
            className={`rounded-full py-4 mt-4 ${
              loading ? "bg-gray-400" : "bg-black"
            }`}
          >
            <Text className="text-white text-center font-semibold text-base">
              {loading ? "Creating account..." : "Create Account"}
            </Text>
          </TouchableOpacity>

          <View className="flex-row items-center my-6">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-3 text-gray-400 text-sm">or</Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          <TouchableOpacity
            onPress={() => handleOAuthLogin("google")}
            className="border border-gray-300 rounded-full py-4 flex-row items-center justify-center mb-3"
          >
            <FontAwesome name="google" size={20} color="black" />
            <Text className="ml-2 text-base font-semibold text-gray-800">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.back()}
            className="mt-6 mb-10"
          >
            <Text className="text-center text-gray-500">
              Already have an account?{" "}
              <Text className="text-blue-600 font-semibold">Log in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
