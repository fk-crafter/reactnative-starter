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

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSendResetLink = () => {
    if (!email) return;

    console.log("Reset link sent to:", email);
    setSent(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white justify-center px-6"
    >
      <View className="items-center mb-10">
        <View className="w-20 h-20 rounded-full bg-gray-200 mb-4 items-center justify-center">
          <Text className="text-xs text-gray-500">Logo</Text>
        </View>

        <Text className="text-2xl font-bold text-gray-900">
          Forgot Password
        </Text>
        <Text className="text-gray-500 mt-2 text-center max-w-sm">
          Enter your email to receive a password reset link.
        </Text>
      </View>

      {sent ? (
        <View className="items-center space-y-4">
          <Text className="text-gray-700 text-center">
            ✅ A password reset link has been sent to{" "}
            <Text className="font-semibold">{email}</Text>.
          </Text>

          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-black rounded-full py-4 w-full mt-4"
          >
            <Text className="text-white text-center font-semibold">
              Back to Login
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="you@example.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 mb-4"
          />

          <TouchableOpacity
            onPress={handleSendResetLink}
            className="bg-black rounded-full py-4"
          >
            <Text className="text-white text-center font-semibold text-base">
              Send Reset Link
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()} className="mt-6">
            <Text className="text-center text-gray-500">
              Remember your password?{" "}
              <Text className="text-blue-600 font-semibold">Log in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
