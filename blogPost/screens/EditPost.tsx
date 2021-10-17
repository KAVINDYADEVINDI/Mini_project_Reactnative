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
//@ts-ignore
const EditPost = ({ route, navigation }) => {
  const { paramPostid } = route.params;
  const [data, setData] = useState({});
  const [image, setImage] = useState("");
  const [postUri, setPostUri] = useState("");
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
    const getData = async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }

      await firebase
        .firestore()
        .collection("posts")
        .doc(paramPostid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            //@ts-ignore
            // console.log(snapshot.data());
            setData(snapshot.data() as object);
            //@ts-ignore
            setHeader(data.header);
            //@ts-ignore
            setDescription(data.description);
            //@ts-ignore
            setPostUri(data.imageUri);
          } else {
            Alert.alert("Error Occured");
          }
        })
        .catch((error) => console.error(error));

      return () => {
        setData([]);
        setImage("");
        setLoading(true);
        setHeader("");
        setDescription("");
        setId("");
        setIsClick1(false);
        setIsClick2(false);
        setIsClick3(false);
      };
    };
    getData();
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

  const updateDatabase = async () => {
    setLoading(true);
    const date = new Date().toLocaleString();

    const newPost = {
      date: date,

      header: header,
      description: description,
      imageUri: image,
    };
    //console.log(newPost);
    await firebase
      .firestore()
      .collection("posts")
      .doc(paramPostid)
      .update(newPost)
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
              //@ts-ignore
              source={{ uri: postUri }}
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
                editable={true}
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
                editable={true}
                multiline
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
                Edit Image:
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
                  <TouchableOpacity onPress={updateDatabase}>
                    <LinearGradient
                      colors={["rgba(160, 57, 219,1)", "rgba(101, 48, 186,1)"]}
                      start={{ x: 1, y: 0 }}
                      end={{ x: 0, y: 0 }}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText1}>Update Post</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.bottom}>
                  <TouchableOpacity disabled={true} onPress={updateDatabase}>
                    <LinearGradient
                      colors={[
                        "rgba(132, 130, 133,0.5)",
                        "rgba(183, 180, 184,0.5)",
                      ]}
                      start={{ x: 1, y: 0 }}
                      end={{ x: 0, y: 0 }}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText2}>Update Post</Text>
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

export default EditPost;

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
    height: 300,
    width: 350,
    borderRadius: 10,
    shadowColor: "#e6d8e3",
    shadowOpacity: 0.9,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
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
