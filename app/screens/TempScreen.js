import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  TouchableOpacity,
  Button,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";

import colors from "../config/colors";

function TempScreen(props) {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/keyboard.jpg")}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Image")}
        style={[styles.loginButton, styles.buttons]}
      >
        <Text style={styles.buttonText}>View Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Welcome")}
        style={[styles.registerButton, styles.buttons]}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttons: {
    width: "100%",
    justifyContent: "center",
    height: 70,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 20,
  },
  loginButton: {
    backgroundColor: colors.primary,
  },
  registerButton: {
    backgroundColor: colors.secondary,
  },
});

export default TempScreen;
