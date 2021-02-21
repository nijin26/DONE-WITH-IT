import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.close}>
        <MaterialCommunityIcons name="close" color="white" size={32} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={34}
        />
      </View>
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
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 30,
  },
});

export default ViewImageScreen;
