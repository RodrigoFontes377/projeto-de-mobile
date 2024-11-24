import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function CarImages() {
  return (
    <View style={styles.imageContainer}>
      <Image source={require("../assets/car1.jpg")} style={styles.image} />
      <Image source={require("../assets/car2.jpg")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    width: "80%",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
