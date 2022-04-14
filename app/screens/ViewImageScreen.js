import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.closeIcon, styles.icon]}></View>
      <View style={[styles.deleteIcon, styles.icon]}></View>

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
