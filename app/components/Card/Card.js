import React from "react";
import { Image, View } from "react-native";

import AppText from "../AppText/AppText";

import styles from "./styles";

function Card({ title, price, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> {title} </AppText>
        <AppText style={styles.price}> {price} </AppText>
      </View>
    </View>
  );
}

export default Card;
