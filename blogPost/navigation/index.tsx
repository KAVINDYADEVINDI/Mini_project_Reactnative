import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import Login from "../screens/Login";

import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="Result"
        component={Result}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

export default MyStack;
