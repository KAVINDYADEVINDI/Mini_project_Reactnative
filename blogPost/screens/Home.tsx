import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import firebase from "../firebaseConfig";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }: { navigation: any }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    await firebase
      .firestore()
      .collection("posts")
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          snapshot.forEach((item) => {
            console.log(item.data());
          });
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {isLoading ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#a333d6",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/kkk.gif")} style={styles.logo} />
          <Text style={styles.loadingText}>Loading...</Text>
          {/* </LinearGradient> */}
        </View>
      ) : (
        <View style={{ width: "100%", height: "100%" }}>
          <LinearGradient
            colors={["rgba(101, 48, 186,1)", "rgba(160, 57, 219,1)"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
          >
            <View style={styles.container}>
              <ScrollView>
                {data.map((item) => {
                  // return <View key={item.postid}></View>;
                })}
              </ScrollView>
            </View>
            <View style={styles.navContainer}>
              <View style={styles.navBar}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                  style={styles.iconBehave}
                  android_ripple={{ borderless: true, radius: 50 }}
                >
                  <FontAwesome name="home" size={25} color="black" />
                </Pressable>

                <Pressable
                  onPress={() => {
                    navigation.navigate("AddPost");
                  }}
                  style={styles.iconBehave}
                  android_ripple={{ borderless: true, radius: 50 }}
                >
                  <MaterialIcons name="add-to-photos" size={25} color="black" />
                </Pressable>
                <Pressable
                  onPress={() => {
                    navigation.navigate("MyPost");
                  }}
                  style={styles.iconBehave}
                  android_ripple={{ borderless: true, radius: 50 }}
                >
                  <MaterialCommunityIcons
                    name="square-edit-outline"
                    size={25}
                    color="black"
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    navigation.navigate("AboutUs");
                  }}
                  style={styles.iconBehave}
                  android_ripple={{ borderless: true, radius: 50 }}
                >
                  <FontAwesome name="users" size={25} color="black" />
                </Pressable>
              </View>
            </View>
          </LinearGradient>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 12,
    width: "100%",
    height: "100%",
  },
  logo: {
    height: 200,
    width: 200,
    marginBottom: 20,
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

  top: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
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

  navContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 20,
    paddingHorizontal: 20,
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: " rgba(247, 237, 246, 0.4)",
    width: "100%",
    justifyContent: "space-evenly",
    borderRadius: 20,
  },
  iconBehave: {
    padding: 10,
  },
});
