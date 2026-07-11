import { View, Button } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="Sign In"
          onPress={() => router.push("/signin")}
        />

        <Button
          title="Sign Up"
          onPress={() => router.push("/signup")}
        />
      </View>
    </SafeAreaView>
  );
}