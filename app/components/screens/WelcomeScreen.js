import React from "react";
import { View, ImageBackground, Image, Text, StyleSheet } from "react-native";

import AppButton from "../AppButton/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={4}
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
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />

        <AppButton title="Register" color="secondary" />
      </View>
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
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  text: {
    fontSize: 22,
    marginTop: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
});

export default WelcomeScreen;
