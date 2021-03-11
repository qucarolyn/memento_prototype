import React, { useState} from "react";
import { StyleSheet, SafeAreaView , View, Text} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import HomeFeedScreen  from './App/Screens/HomeFeedScreen.js';
import MementoEditScreen  from './App/Screens/MementoEditScreen.js';
import MementoScreen  from './App/Screens/MementoScreen.js';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator(); 
      
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="HomeFeed" component={ HomeFeedScreen } />
         <Stack.Screen name = "Memento" component = {MementoScreen} />
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
