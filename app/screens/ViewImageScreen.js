import React from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Welcome")}
        style={[styles.closeIcon, styles.icon]}
      ></TouchableOpacity>
      <TouchableOpacity
        style={[styles.deleteIcon, styles.icon]}
      ></TouchableOpacity>

      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  icon: {
    width: 50,
    height: 50,
    zIndex: 1,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 50,
    right: 30,
  },
});

export default ViewImageScreen;
