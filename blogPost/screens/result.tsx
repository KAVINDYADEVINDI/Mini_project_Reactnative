import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

import ConfettiCannon from "react-native-confetti-cannon";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";



const Result = ({ route ,navigation}) => {
  const [state, setState] = useState("false");

  const _handlePress = () => {
    
    setState("true");
    setTimeout(() => {
      setState("true ");
    }, 10000);
  };
  console.log(state);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ImageBackground
        source={require("../assets/images/result.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.Container}>
          {route.params.paramKey >= 60 ? (
            <View style={styles.cardLayoutView}>
              <Text style={styles.paragraphHeading}>Congratulations!!</Text>
              <Text style={styles.score}>{route.params.paramKey}%</Text>
              <Text style={styles.paragraph}>
                You have recieved {route.params.paramKey}0 Stars Collect Now
              </Text>
              <Image
                style={styles.logo}
                source={require("../assets/images/k.png")}
              />
              <Button
                onPress={_handlePress}
                title="Claim Now"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
              <TouchableOpacity
                style={styles.Btn}
                onPress={() => navigation.navigate("Welcome")}
              >
                <LinearGradient
                  colors={["rgba(30,201,76,1)", "rgba(20,99,41,1)"]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 0 }}
                  style={styles.gradient}
                >
                  <Text style={styles.BtnText}> Try Again </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.cardLayoutView}>
              <Text style={styles.paragraphHeading}>
                Don't worry !!!
              </Text>
              
              <Image
                source={require("../assets/sad2.gif")}
                style={styles.logo}
              />

              <Text style={styles.score}>{route.params.paramKey}%</Text>
              <TouchableOpacity
                style={styles.Btn}
                onPress={() => navigation.navigate("Welcome")}
              >
                <LinearGradient
                  colors={["rgba(30,201,76,1)", "rgba(20,99,41,1)"]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 0 }}
                  style={styles.gradient}
                >
                  <Text style={styles.BtnText}> Try Again </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ImageBackground>
      {state == "true" ? (
        <ConfettiCannon
          count={300}
          explosionSpeed={350}
          origin={{ x: -10, y: 10 }}
        />
      ) : null}
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  cardLayoutView: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#fff9c4",
    shadowColor: "#1c632f",
    shadowOpacity: 0.9,
    elevation: 16,
    shadowRadius: 15,
  },
  paragraphHeading: {
    margin: 24,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "center",
  },
  score: {
    fontSize: 40,
    fontWeight: "700",
    textShadowColor: "#8c308b",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,

    color: "#841584",
  },
  logo: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  claimBtn: {
    borderRadius: 15,
  },
  Btn: {
    marginHorizontal: 100,
    width: "50%",
    marginVertical: 40,
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 25,
    padding: 6,
    shadowColor: "#1c632f",
    shadowOpacity: 0.9,
    elevation: 16,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 10 },
  },
  BtnText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#fff",
    backgroundColor: "transparent",
  },
});
