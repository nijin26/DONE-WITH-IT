import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.close}></View>
      <View style={styles.deleteIcon}></View>
      <Image source={require("../../assets/chair.jpg")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", backgroundColor: "black" },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  close: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
    position: "absolute",
    top: 50,
    right: 30,
  },
});

export default ViewImageScreen;
