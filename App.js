import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./StackNavigator";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
