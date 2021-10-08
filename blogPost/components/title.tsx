import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = () => {
  return (
    <View style={styles.text}>
      <Text style={styles.textStyle}>BlogEx</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  text: {
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "#e0a81b",
    fontSize: 40,
    fontWeight: "bold",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 20,
    textShadowColor: "#e0a81b",
  },
});
