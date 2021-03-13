import React from "react";
import { View, Text, Button } from "react-native";
import HorizontalMenu from '../Components/HorizontalMenu.js';


export default function HomeFeedScreen({navigation}) {
  const visions= [
    {
        title: "Be happy",
        color: 'red',
    },
    {
        title: "Learn ukelele",
        color: 'green',
    },
    {
      title: "Spend time with fam",
      color: 'blue',
    },
    {
        title: "Stay healthy",
        color: 'orange',
    }];
    return (
        <View>

          <HorizontalMenu visions={visions}>

          </HorizontalMenu>

          <Button
            onPress={() => navigation.navigate("VisionAdd")}
            title="Create a Vision"
          />

        <Button
            onPress={() => navigation.navigate("Reflect")}
            title="Reflect"
          />

        </View>
    );
}
