import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "../firebaseConfig";
import { FontAwesome } from "@expo/vector-icons";

const Register = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onRegisterSubmit = () => {
    // console.log(email);
    // console.log(password);

    if (password !== confirmPassword) {
      //console.log("passwords do not match");
      Alert.alert("Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("SUCESS");
        Alert.alert("Successfully Creating Account");
        navigation.navigate("Home");
      })
      .catch((error) => {
        //console.log(error);
        Alert.alert(error.message);
      });
  };
  const changeIcon = () => {
    setShow(true);
  };
  const changeIcon2 = () => {
    setShow(false);
  };
  const changeIconConfirm = () => {
    setShowConfirm(true);
  };
  const changeIconConfirm2 = () => {
    setShowConfirm(false);
  };
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
          <View style={styles.lineStyle} />
          <View>
            <Text style={styles.textStyle}>Create Account!</Text>
          </View>
          <View style={styles.lineStyle} />
        </View>

        <View style={styles.passwordContainer}>
          <FontAwesome name="user" size={24} color="black" />
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            placeholder="Enter Username"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </View>

        <View style={styles.passwordContainer}>
          <FontAwesome name="lock" size={24} color="black" />
          {show === false ? (
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              secureTextEntry
              placeholder="Enter Password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
          ) : (
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              placeholder="Enter Password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
          )}
          {show === false ? (
            <FontAwesome
              name="eye"
              size={24}
              color="black"
              onPress={changeIcon}
            />
          ) : (
            <FontAwesome
              name="eye-slash"
              size={24}
              color="black"
              onPress={changeIcon2}
            />
          )}
        </View>

        <View style={styles.passwordContainer}>
          <FontAwesome name="lock" size={24} color="black" />
          {showConfirm === false ? (
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              secureTextEntry
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
              }}
            />
          ) : (
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
              }}
            />
          )}
          {showConfirm === false ? (
            <FontAwesome
              name="eye"
              size={24}
              color="black"
              onPress={changeIconConfirm}
            />
          ) : (
            <FontAwesome
              name="eye-slash"
              size={24}
              color="black"
              onPress={changeIconConfirm2}
            />
          )}
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity>
            <LinearGradient
              colors={["rgba(101, 48, 186,1)", "rgba(160, 57, 219,1)"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={styles.button}
            >
              <Text style={styles.buttonText} onPress={onRegisterSubmit}>
                Create Account
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.bottompara}>
          <Text style={styles.t1}>If you have already an account?</Text>
          <Text style={styles.t2} onPress={() => navigation.navigate("Login")}>
            LogIn
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    padding: 6,
    width: "100%",
    height: "100%",
  },
  logo: {
    height: 200,
    width: 200,
    marginBottom: 5,
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
    flexDirection: "row",
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
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottompara: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
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
    width: "100%",
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 130,
    paddingVertical: 7,
  },
  textStyle: {
    color: "#141212",
    fontSize: 20,
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
  passwordContainer: {
    padding: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 10,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 10,
  },
  t1: {
    fontSize: 14,
    color: "black",
  },
  t2: {
    paddingLeft: 5,
    fontSize: 14,
    color: "blue",
  },
});
