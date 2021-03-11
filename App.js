import React, { useState} from "react";
import { StyleSheet, SafeAreaView , View, Text} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './App/Screens/HomeScreen.js';

const Stack = createStackNavigator();
      
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="HomeScreen" component={ HomeScreen } />
       </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
  },

  welcomeText: {
    color: "black",
    fontSize: 40, 
    fontWeight: "bold",
  },

  captionView: {
    margin: 10,
    padding: 10,
    alignItems: "center",

  },

  captionText: {
    color: "grey",
  }, 

});
