import React, { useState} from "react";
import { StyleSheet, SafeAreaView , View, Text, Button, TouchableOpacity} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeFeedScreen  from './App/Screens/HomeFeedScreen.js';
import MementoDetailScreen  from './App/Screens/MementoDetailScreen.js';
import MementoAddScreen  from './App/Screens/MementoAddScreen.js';
import VisionAddScreen  from './App/Screens/VisionAddScreen.js';
import ReflectScreen  from './App/Screens/ReflectScreen.js';
import VisionDrawerScreen from './App/Screens/VisionDrawerScreen.js';
import DrawerScreen from './App/Screens/DrawerScreen.js';
import HelpScreen from './App/Screens/HelpScreen.js';
import FAQScreen from './App/Screens/FAQScreen.js';

import { Octicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator
        initialRouteName="HomeFeed"
       >
         <Stack.Screen name="HomeFeed" component= {HomeFeedScreen}
          options={({navigation}) => ({
            title: 'memento',
            headerStyle: {
              //backgroundColor: '#f4511e',
              borderColor: 'white'
            },
            headerLeft: () => (
              <TouchableOpacity
                  onPress={() => {
                    //const navigation = useNavigation();
                    navigation.navigate("Drawer");
                  }}// incomplete: need options to "keep editing" or "delete vision"
                  style={{paddingLeft: 15, paddingTop: 5}}
              >
              <Octicons name="three-bars" size={24} color="black" />
              </TouchableOpacity>
            ),


          })} />
         <Stack.Screen name = "MementoAdd" component = {MementoAddScreen} 
          options = {{
            title: "Add Memento",
          }}
         />
         <Stack.Screen name = "MementoDetail" component = {MementoDetailScreen} 
         options = {{
          title: "Details",
        }}
         />
         <Stack.Screen name = "VisionAdd" component = {VisionAddScreen}
            options={{
              title: 'Add a Vision',
              // headerRight: () => (
              //    <Button
              //      onPress={() => {
              //        alert('This is a button!');
              //       }}// incomplete: need options to "keep editing" or "delete vision"
              //      title="alert"// incomplete: need to use expo vectors for this part
              //    />
              //  ),
            }}
         />
         <Stack.Screen name = "Reflect" component = {ReflectScreen} options={{ title: 'Reflect' }}/>
         <Stack.Screen name = "Drawer" component = {DrawerScreen} options={{ title: 'Menu' }}/>
         <Stack.Screen name = "VisionDrawer" component = {VisionDrawerScreen} 
            options={{ title: 'Visions', 
            //gestureDirection: inverted, doesnt work 
          }}/>
         <Stack.Screen name = "Help" component = {HelpScreen} options={{ title: 'Help' }}/>
         <Stack.Screen name = "FAQ" component = {FAQScreen} options={{ title: 'FAQ' }}/>

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
