import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";

const Login = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image
            source={require("../assets/images/logo.jpg")}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>

        <View style={styles.top}>
          <Text style={styles.textStyle}>BlogZen</Text>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity>
            <LinearGradient
              colors={["rgba(101, 48, 186,1)", "rgba(160, 57, 219,1)"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    padding: 6,
    width: "100%",
    height: "100%",
  },
  logo: {
    height: 200,
    width: 200,
    marginBottom: 10,
  },
  loading: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 20,
    color: "#e4e1f0",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  top: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  topText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  question: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 18,
  },
  options: {
    paddingHorizontal: 20,
    marginVertical: 16,
  },
  option: {
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#af46eb",
  },
  optionText: {
    fontSize: 16,
    textAlign: "left",
  },
  bottom: {
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
});
