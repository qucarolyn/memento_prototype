import React, { useState} from "react";
import { StyleSheet, SafeAreaView , View, Text} from "react-native";
import { Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from "./App/Components/HomeScreen";
import ArticlePage from "./App/Components/ArticlePage";

const Stack = createStackNavigator();
      
export default function App() {
  const [firstLaunch, setFirstLaunch] = useState(true);

  const checkOnboarding = async () => {
    try{
      const onboarded = await AsyncStorage.getItem('onboarded');
      if(onboarded !== null && onboarded === 'true') {
      }else { 
        AsyncStorage.setItem('onboarded', 'true');
      }

    }catch(e) {
      console.error(e);
    }
  }

  const renderHomePage = () => {
      return <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen 
           name="Article" 
           component={ArticlePage} 
         />
       </Stack.Navigator>
      </NavigationContainer>

  }

  const renderOnboard =  () => {
    return <SafeAreaView style = {styles.welcomeView}>
      <Text style = {styles.welcomeText}>Welcome to NYT!</Text>
      <View style = {styles.captionView}>
        <Text style = {styles.captionText}>It looks like this is your first time using the app.</Text>
        <Text style = {styles.captionText}>Please press the button below to continue</Text>
      </View>
      
      <Button
          title = "Open the App"
          raised = {true}
          onPress = {() => {
            checkOnboarding();
            setFirstLaunch(false);
          }}
      />
    </SafeAreaView>
}

  const renderPage = () => {
    checkOnboarding();
    if(firstLaunch === true){
      return renderOnboard();
    }else{
      return renderHomePage();
    }

  }

  return (
    renderPage()
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
