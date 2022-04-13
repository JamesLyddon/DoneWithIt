import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  SafeAreaView,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import TitleScreen from "./components/TitleScreen";

export default function Alert() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={styles.button}
        title="Do not Press"
        color="orangered"
        onPress={() =>
          Alert.alert("😡Hey", "What did I just say...💀💀💀", [
            {
              text: "I'm sorry",
              onPress: () => Alert.alert("🤔Well... ", "alright then...🤓"),
            },
            {
              text: "Get bent",
              onPress: () =>
                Alert.alert(
                  "🤨Charming...",
                  "you spoil us with your presence...🤌"
                ),
            },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {},
});
