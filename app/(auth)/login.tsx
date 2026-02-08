import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Login with:", email, password);
      setLoading(false);
      router.replace("/(app)");
    }, 1000);
  };

  const handleOAuthLogin = (provider: string) => {
    console.log(`Login with ${provider} clicked`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white justify-center px-6"
    >
      <View className="items-center mb-10">
        {/* Placeholder Logo */}
        <View className="w-20 h-20 rounded-full bg-gray-200 mb-4 items-center justify-center">
          <Text className="text-xs text-gray-500">Logo</Text>
        </View>

        <Text className="text-2xl font-bold text-gray-900">Welcome Back</Text>
        <Text className="text-gray-500 mt-2 text-center">
          Log in to continue to the app
        </Text>
      </View>

      <View className="space-y-4">
        <View>
          <Text className="text-gray-700 mb-1 font-medium">Email</Text>
          <TextInput
            placeholder="you@example.com"
            placeholderTextColor="#999"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900"
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-1 font-medium">Password</Text>
          <View className="flex-row items-center border border-gray-300 rounded-lg px-4">
            <TextInput
              placeholder="Your password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              className="flex-1 py-3 text-base text-gray-900"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text className="text-blue-600 font-semibold">
                {showPassword ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/(auth)/forgot-password")}
          className="self-end mt-2"
        >
          <Text className="text-blue-500 text-sm font-medium">
            Forgot password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={loading}
          onPress={handleLogin}
          className={`rounded-full py-4 mt-4 ${
            loading ? "bg-gray-400" : "bg-black"
          }`}
        >
          <Text className="text-white text-center font-semibold text-base">
            {loading ? "Logging in..." : "Log in"}
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
          onPress={() => handleOAuthLogin("github")}
          className="border border-gray-300 rounded-full py-4 flex-row items-center justify-center mb-3"
        >
          <FontAwesome name="github" size={20} color="black" />
          <Text className="ml-2 text-base font-semibold text-gray-800">
            Continue with GitHub
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/(auth)/register")}
          className="mt-6"
        >
          <Text className="text-center text-gray-500">
            Don’t have an account?{" "}
            <Text className="text-blue-600 font-semibold">Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
