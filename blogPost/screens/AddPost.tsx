import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Alert,
  Platform,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import firebase from "../firebaseConfig";
import * as ImagePicker from "expo-image-picker";
import { useIsFocused } from "@react-navigation/core";

const AddPost = ({ navigation }: { navigation: any }) => {
  const [image, setImage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [header, setHeader] = useState("");
  const [postid, setPostid] = useState("");
  const [description, setDescription] = useState("");
  const [isClick1, setIsClick1] = useState(false);
  const [isClick2, setIsClick2] = useState(false);
  const [isClick3, setIsClick3] = useState(false);
  const IsFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
      const user = firebase.auth().currentUser;
      setId(user!.uid);
      return () => {
        setImage("");
        setLoading(true);
        setHeader("");
        setDescription("");
        setId("");
        setPostid("");
        setIsClick1(false);
        setIsClick2(false);
        setIsClick3(false);
      };
    })();
  }, [IsFocused]);

  const UploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      uploadData(result.uri);
    }
  };
  const uploadData = async (image: string) => {
    setLoading(true);

    const response = await fetch(image);
    const blob = await response.blob();

    const postId = Math.floor(Math.random() * 100000);

    const StorageRef = firebase.storage().ref();
    const fileRef = StorageRef.child("images/" + id + postId);
    await fileRef.put(blob);
    const downloadURL = await fileRef.getDownloadURL();
    setImage(downloadURL);
    setPostid(postId.toString());
    setLoading(false);
    setIsClick3(true);
  };

  const saveDatabase = async () => {
    setLoading(true);
    const date = new Date().toLocaleString();

    const newPost = {
      id: id,
      date: date,
      postid: postid,
      header: header,
      description: description,
      imageUri: image,
    };
    //console.log(newPost);
    await firebase
      .firestore()
      .collection("posts")
      .doc(postid)
      .set(newPost)
      .then(() => {
        setLoading(false);
        setImage("");
        setPostid("");
        Alert.alert("Successfully Added New Post");
        navigation.navigate("Home");
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
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
              source={require("../assets/images/wel.png")}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>
          <ScrollView>
            <View>
              <Text style={styles.textStyle}> Post's Header:</Text>
            </View>
            <View style={styles.textField}>
              <MaterialIcons name="style" size={25} color="black" />
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                placeholder="Enter Post's Header"
                value={header}
                onChangeText={(text) => {
                  setHeader(text);
                  setIsClick1(true);
                }}
              />
            </View>
            <View>
              <Text style={styles.textStyle}>Post's Description:</Text>
            </View>
            <View style={styles.textField}>
              <MaterialIcons name="style" size={25} color="black" />
              <TextInput
                multiline={true}
                style={styles.inputStyle}
                autoCorrect={false}
                placeholder="Enter Post's Description"
                value={description}
                onChangeText={(text) => {
                  setDescription(text);
                  setIsClick2(true);
                }}
              />
            </View>
            <View style={styles.uploadImage}>
              <Text style={styles.textImageStyle} onPress={UploadImage}>
                Upload Image:
              </Text>
              <MaterialIcons
                name="add-a-photo"
                size={30}
                color="black"
                android_ripple={{ borderless: true, radius: 50 }}
                onPress={UploadImage}
              />
            </View>

            {
              //@ts-ignore
              isClick1 && isClick2 && isClick3 ? (
                <View style={styles.bottom}>
                  <TouchableOpacity onPress={saveDatabase}>
                    <LinearGradient
                      colors={["rgba(160, 57, 219,1)", "rgba(101, 48, 186,1)"]}
                      start={{ x: 1, y: 0 }}
                      end={{ x: 0, y: 0 }}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText1}>Add Post</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.bottom}>
                  <TouchableOpacity disabled={true} onPress={saveDatabase}>
                    <LinearGradient
                      colors={[
                        "rgba(132, 130, 133,0.5)",
                        "rgba(183, 180, 184,0.5)",
                      ]}
                      start={{ x: 1, y: 0 }}
                      end={{ x: 0, y: 0 }}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText2}>Add Post</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )
            }

            {isLoading == true ? (
              <ActivityIndicator size="large" color="#e0cee0" />
            ) : null}
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
};

export default AddPost;

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
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 15,
  },
  textStyle: {
    paddingTop: 10,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  textImageStyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  uploadImage: {
    marginTop: 15,
    padding: 5,
    flexDirection: "row",
    backgroundColor: " rgba(247, 237, 246, 0.4)",
    justifyContent: "space-evenly",
    borderRadius: 20,
  },
});
