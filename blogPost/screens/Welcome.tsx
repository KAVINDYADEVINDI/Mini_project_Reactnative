import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Title from "../components/title";

const Welcome = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
        }}
        style={styles.backgroundImage}
      >
        <View>
          <Title />
          <View style={styles.bannerContainer}>
            <Image
              source={{
                uri: "https://cdn3d.iconscout.com/3d/premium/thumb/question-mark-2891357-2409768@0.png",
              }}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>

          <TouchableOpacity
            style={styles.Btn}
            onPress={() => navigation.navigate("Login", { screen: "Login" })}
          >
            <LinearGradient
              colors={["rgba(30,201,76,1)", "rgba(20,99,41,1)"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={styles.gradient}
            >
              <Text style={styles.BtnText}>
                Get Start {">"}
                {">"}{" "}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.HowPlayBtn}>
            <Text style={styles.HowPlayBtnText}>
              If you want to Create your own Blog & View Others Blog posts..Try
              it Now{" "}
            </Text>
          </TouchableOpacity>

          <View style={styles.line}></View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%", // or 'stretch'
  },
  Btn: {
    // justifyContent: "center",
    // alignItems: "center",
    marginLeft: 80,
    marginTop: 300,
    width: "60%",
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 25,
    padding: 8,
    shadowColor: "#1c632f",
    shadowOpacity: 0.9,
    elevation: 16,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 23 },
  },
  BtnText: {
    fontSize: 24,
    fontWeight: "300",
    color: "#fff",
    backgroundColor: "transparent",
  },
  HowPlayBtn: {
    marginTop: 5,
    marginHorizontal: 10,
  },
  HowPlayBtnText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "300",
    color: "#191c1a",
    backgroundColor: "transparent",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 20,
    textShadowColor: "#86d99c",
  },
  line: {
    borderBottomColor: "#837887",
    borderBottomWidth: 1,
    marginHorizontal: 90,
    paddingVertical: 10,
    shadowColor: "#594d4c",
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 10 },
  },
});
