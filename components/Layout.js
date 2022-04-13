// import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function Layout() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          left: 95,
          bottom: 5,
          zIndex: 1,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 40,
          }}
        >
          j
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 0,
          borderRadius: 10,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          right: 95,
          top: 5,
          zIndex: -1,
          borderRadius: 10,
        }}
      />
    </View>
  );
}
