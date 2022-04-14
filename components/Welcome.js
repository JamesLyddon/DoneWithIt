// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Image
        style={{ flex: 1, height: undefined, width: undefined }}
        source={require("../app/assets/background.jpg")}
      />
      <View
        style={{
          position: "absolute",
          alignSelf: "center",
          top: 80,
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
          }}
          source={require("../app/assets/logo-red.png")}
        />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={{ height: 50, backgroundColor: "tomato" }}></View>
      <View style={{ height: 50, backgroundColor: "turquoise" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
