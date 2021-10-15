import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "../firebaseConfig";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Welcome from "../screens/Welcome";
import ForgotPassword from "../screens/ForgotPassword";
import Home from "../screens/Home";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, TabBarIOS } from "react-native";
import AddPost from "../screens/AddPost";

const Stack = createStackNavigator();

const MyStack = () => {
  const [isSign, setIsSign] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      await firebase.auth().onAuthStateChanged(async function (user) {
        if (user) {
          setIsSign(true);
        } else {
          setIsSign(false);
        }
      });
    };
    getUser();
  }, []);

  return (
    <>
      {isSign ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home Page",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "rgba(160, 57, 219, 1)",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerRight: () => (
                <MaterialIcons
                  name="logout"
                  onPress={() => {
                    firebase
                      .auth()
                      .signOut()
                      .then(() => {
                        //console.log("successfully logout");
                        Alert.alert("Successfully Logout");
                      })
                      .catch((error) => {
                        console.log(error);
                        Alert.alert(error.message);
                      });
                  }}
                  size={24}
                  color="#fff"
                />
              ),
            }}
          />
          <Stack.Screen
            name="AddPost"
            component={AddPost}
            options={{
              title: "Add Post",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "rgba(160, 57, 219, 1)",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerRight: () => (
                <MaterialIcons
                  name="logout"
                  onPress={() => {
                    firebase
                      .auth()
                      .signOut()
                      .then(() => {
                        //console.log("successfully logout");
                        Alert.alert("Successfully Logout");
                      })
                      .catch((error) => {
                        //console.log(error);
                        Alert.alert(error.message);
                      });
                  }}
                  size={24}
                  color="#fff"
                />
              ),
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "BlogZen",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "rgba(160, 57, 219, 1)",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: "BlogZen",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "rgba(160, 57, 219, 1)",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              title: "BlogZen",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "rgba(160, 57, 219, 1)",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default MyStack;
