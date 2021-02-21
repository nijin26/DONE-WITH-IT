import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "../AppText/AppText";
import styles from "./styles";

const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;
