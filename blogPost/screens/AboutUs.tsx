import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Alert,
  Pressable,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";

const AboutUs = ({ navigation }: { navigation: any }) => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isClick1, setIsClick1] = useState(false);
  const [isClick2, setIsClick2] = useState(false);
  const [isClick3, setIsClick3] = useState(false);

  const sendMessage = async () => {
    const url = "mailto:kavindyadevindi038@gmail.com";
    try {
      const link = await Linking.openURL(url);
      //console.log(link);
      setName("");
      setEmail("");
      setSubject("");
      setIsClick1(false);
      setIsClick2(false);
      setIsClick3(false);
      Alert.alert("Message has been sent");
    } catch (e) {
      console.log("error:" + e);
    }
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <LinearGradient
        colors={["rgba(101, 48, 186,1)", "rgba(160, 57, 219,1)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={styles.container}>
          <View style={styles.bannerContainer}>
            <Image
              source={require("../assets/images/about.png")}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>
          <View style={styles.top}>
            <View>
              <Text style={styles.textStyle}>
                You can create your own blog posts as your wish using this blog
                application and see all blog posts created by all users,If you
                have any question please ask us.
              </Text>
            </View>
            <View>
              <Text style={styles.textTop}>WANT TO GET IN TOUCH!</Text>
            </View>
          </View>
          <View style={styles.textField}>
            <FontAwesome name="user" size={26} color="black" />
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              placeholder="Enter Your Name"
              value={name}
              onChangeText={(text) => {
                setName(text);
                setIsClick1(true);
              }}
            />
          </View>
          <View style={styles.textField}>
            <MaterialCommunityIcons
              name="email-multiple"
              size={26}
              color="black"
            />
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              placeholder="Enter Your Email Address"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setIsClick2(true);
              }}
            />
          </View>

          <View style={styles.textField}>
            <MaterialIcons name="message" size={26} color="black" />
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              placeholder="Enter Subject"
              value={subject}
              onChangeText={(text) => {
                setSubject(text);
                setIsClick3(true);
              }}
            />
          </View>

          {
            //@ts-ignore
            isClick1 && isClick2 && isClick3 ? (
              <View style={styles.bottom}>
                <TouchableOpacity onPress={sendMessage}>
                  <LinearGradient
                    colors={["rgba(160, 57, 219,1)", "rgba(101, 48, 186,1)"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText1}>Send Message</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.bottom}>
                <TouchableOpacity disabled={true} onPress={sendMessage}>
                  <LinearGradient
                    colors={[
                      "rgba(132, 130, 133,0.5)",
                      "rgba(183, 180, 184,0.5)",
                    ]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText2}>Send Message</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )
          }
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
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
  banner: {
    borderRadius: 50,
    height: 300,
    width: 300,
  },
  bannerContainer: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  top: {
    justifyContent: "center",
    alignItems: "center",
  },

  bottom: {
    marginTop: 25,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
  },
  buttonText1: {
    fontWeight: "bold",
    paddingHorizontal: 40,
    paddingVertical: 9,
    fontSize: 18,
    color: "#241d23",
    opacity: 1,
  },
  buttonText2: {
    fontWeight: "bold",
    paddingHorizontal: 40,
    paddingVertical: 9,
    fontSize: 18,
    color: "#241d23",
    opacity: 0.5,
  },

  navContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 20,
    paddingHorizontal: 10,
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: " rgba(247, 237, 246, 0.4)",
    width: "100%",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  iconBehave: {
    padding: 10,
  },
  textField: {
    padding: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 10,
    fontSize: 14,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 15,
  },
  textStyle: {
    paddingTop: 10,
    color: "#fff",
    fontSize: 15,
    fontWeight: "normal",
  },
  textTop: {
    paddingTop: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 20,
    textShadowColor: "#b7b4b8",
  },
  lineStyle: {
    width: "20%",
    borderWidth: 0.5,
    borderColor: "black",
    margin: 5,
  },
});
