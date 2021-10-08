import "react-native-gesture-handler";
import React from "react";
import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});