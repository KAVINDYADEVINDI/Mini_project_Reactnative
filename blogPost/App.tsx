import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./navigation";
import Quiz from "./screens/quiz";
import Result from "./screens/result";
import Welcome from "./screens/Welcome";

export default function App() {
  return (  
      <NavigationContainer>
        <MyStack />      
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
