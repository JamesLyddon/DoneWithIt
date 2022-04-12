import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableNativeFeedback,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function TitleScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={{ uri: "https://picsum.photos/800/800" }}
      >
        <Text style={styles.titleText}>Title</Text>
        <TouchableNativeFeedback onPress={() => console.log("boop!")}>
          <Image
            source={{
              width: 200,
              height: 200,
              uri: "https://picsum.photos/200/200",
            }}
          />
        </TouchableNativeFeedback>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  imageBackground: {
    width: wp("100%"),
    height: hp("110%"),
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: { color: "#eeeee4", fontSize: 80 },
});