import React from "react";
import { View, ImageBackground, Image, Text, StyleSheet } from "react-native";
import colors from "../../config/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo-red.png")}
          style={styles.logo}
        />
        <Text style={styles.text}> Sell What You Don't Need </Text>
      </View>
      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  text: {
    fontWeight: "bold",
    marginTop: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
