import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "../firebaseConfig";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Welcome from "../screens/Welcome";
import ForgotPassword from "../screens/ForgotPassword";
import Home from "../screens/Home";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";

const Stack = createStackNavigator();

function MyStack() {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("successfully logout");
        useNavigation.navigate("Welcome",{screen:});
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
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
              onPress={logout}
              size={24}
              color="#fff"
            />
          ),
        }}
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
  );
}

export default MyStack;
