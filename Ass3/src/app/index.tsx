import { View, Button } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View>
      <Button
        title="Sign In"
        onPress={() => router.push("/signin")}
      />

      <Button
        title="Sign Up"
        onPress={() => router.push("/signup")}
      />

      <Button
        title="Employee Form"
        onPress={() => router.push("/employee")}
      />
    </View>
  );
}