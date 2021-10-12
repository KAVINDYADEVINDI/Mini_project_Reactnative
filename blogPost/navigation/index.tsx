import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Welcome from "../screens/Welcome";
import ForgotPassword from "../screens/ForgotPassword";

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
