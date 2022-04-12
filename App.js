import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        style={{
          width: wp("100%"),
          height: hp("110%"),
          resizeMode: "cover",
          justifyContent: "center",
          alignItems: "center",
        }}
        source={{ uri: "https://picsum.photos/800/800" }}
      >
        <Text style={{ color: "#eeeee4", fontSize: 80 }}>Title</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
