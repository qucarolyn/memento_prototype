import React, { useState} from "react";
import { StyleSheet, SafeAreaView , View, Text, Button} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeFeedScreen  from './App/Screens/HomeFeedScreen.js';
import MementoDetailScreen  from './App/Screens/MementoDetailScreen.js';
import MementoAddScreen  from './App/Screens/MementoAddScreen.js';
import VisionAddScreen  from './App/Screens/VisionAddScreen.js';
import ReflectScreen  from './App/Screens/ReflectScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator
        initialRouteName="HomeFeed"
       >
         <Stack.Screen name="HomeFeed" component= {HomeFeedScreen}
          options={{
            title: 'memento',
            headerLeft: () => (
              <Button
                  onPress={() => alert('This is where the menu should go!')}// incomplete: need options to "keep editing" or "delete vision"
                  title="menu"// incomplete: need to use expo vectors for this part
              >

              </Button>
            ),


          }} />
         <Stack.Screen name = "MementoAdd" component = {MementoAddScreen} />
         <Stack.Screen name = "MementoDetail" component = {MementoDetailScreen} />
         <Stack.Screen name = "VisionAdd" component = {VisionAddScreen}
            options={{
              title: 'Add a Vision',
              headerRight: () => (
                 <Button
                   onPress={() => alert('This is a button!')}// incomplete: need options to "keep editing" or "delete vision"
                   title="alert"// incomplete: need to use expo vectors for this part
                 />
               ),
            }}
         />
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
