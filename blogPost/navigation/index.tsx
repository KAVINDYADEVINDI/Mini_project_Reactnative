import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
// import Register from "../screens/Register";
import Welcome from "../screens/Welcome";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

const Stack = createStackNavigator();

function MyStack() {
  return (
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
         
         headerTitle:LogoTitle
        }}
      />
      {/* <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}
function LogoTitle() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <LinearGradient
        colors={["rgba(101, 48, 186,1)", "rgba(160, 57, 219,1)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        kavi
      </LinearGradient>
    </View>
  );
}

export default MyStack;
