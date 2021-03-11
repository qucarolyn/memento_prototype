import React, { useState} from "react";
import { StyleSheet, SafeAreaView , View, Text} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeFeedScreen  from './App/Screens/HomeFeedScreen.js';
import MementoEditScreen  from './App/Screens/MementoEditScreen.js';
import MementoScreen  from './App/Screens/MementoScreen.js';
import VisionAddScreen  from './App/Screens/VisionAddScreen.js';



const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();

function HomeTabComponent () {
  return (
    <TabNav.Navigator headerMode="float">
      <TabNav.Screen name = "Home" component={HomeScreen} />
      <TabNav.Screen name = "UserProfile" component={UserProfileScreen} />
    </TabNav.Navigator>
  );
}
      
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator
        initialRouteName="HomeFeed"
       >
         <Stack.Screen name="HomeFeed" component= {HomeFeedScreen} />
         <Stack.Screen name="HomeTab" component= {HomeTabComponent} />
         <Stack.Screen name = "Memento" component = {MementoScreen} />
         <Stack.Screen name = "MementoEdit" component = {MementoEditScreen} />
         <Stack.Screen name = "VisionAdd" component = {VisionAddScreen} />
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
