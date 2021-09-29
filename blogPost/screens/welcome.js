import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Title from "../components/title";

const Welcome = () => {
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
            onPress={() => navigation.navigate("Login")}
          >
            <LinearGradient
              colors={["rgba(30,201,76,1)", "rgba(20,99,41,1)"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={styles.gradient}
            >
              <Text style={styles.BtnText}>Get Start </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.HowPlayBtn}>
            <Text style={styles.HowPlayBtnText}>
              Improve your Computer knowledge and upgrade your personal growth
            </Text>
          </TouchableOpacity>

          <View style={styles.line}></View>
        </View>
      </ImageBackground>
    </View>
  );
};
