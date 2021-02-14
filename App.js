import React from "react";
import { SafeAreaView } from "react-native";
import ViewImageScreen from "./app/components/screens/ViewImageScreen";

import WelcomeScreen from "./app/components/screens/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ViewImageScreen />
    </SafeAreaView>
  );
}
