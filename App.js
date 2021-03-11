import React, { useState} from "react";
import { StyleSheet, SafeAreaView , View, Text} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeFeedScreen  from './App/Screens/HomeFeedScreen.js';
import MementoEditScreen  from './App/Screens/MementoEditScreen.js';
import MementoScreen  from './App/Screens/MementoScreen.js';
import VisionAddScreen  from './App/Screens/VisionAddScreen.js';
import ReflectScreen  from './App/Screens/ReflectScreen.js';




const Stack = createStackNavigator();
      
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator
        initialRouteName="HomeFeed"
       >
         <Stack.Screen name="HomeFeed" component= {HomeFeedScreen} options={{ title: 'memento' }} />
         <Stack.Screen name = "Memento" component = {MementoScreen} />
         <Stack.Screen name = "MementoEdit" component = {MementoEditScreen} />
         <Stack.Screen name = "VisionAdd" component = {VisionAddScreen} options={{ title: 'Add a Vision' }}/>
         <Stack.Screen name = "Reflect" component = {ReflectScreen} options={{ title: 'Reflect' }}/>
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
