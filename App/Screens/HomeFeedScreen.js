import React from "react";
import { View, Text, Button } from "react-native";
import HorizontalMenu from '../Components/HorizontalMenu.js';


export default function HomeFeedScreen({navigation}) {
    return (
        <View>


          <HorizontalMenu>

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
