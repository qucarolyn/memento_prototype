import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import HorizontalMenu from '../Components/HorizontalMenu.js';
import MementoFeed from '../Components/MementoFeed.js';



export default function HomeFeedScreen({navigation}) {
  const [activeVision, setActiveVision] = useState("");

  const addVision = (vision) => {
    visions.push(vision);
  }

  const setVision = (vision) => {
    setActiveVision(vision);
  }

  var visions= [
    {
      title: "All",
      color: 'grey',
    },

    // {
    //   title: "Be happy",
    //   color: 'red',
    // },
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
    }
  ];

    return (
        <View>

          <HorizontalMenu 
            visions={visions}
            setVisionCallback = {setVision}
          />
          <Text>{console.log(visions)}</Text>
          <MementoFeed
            vision = {activeVision}//for testing purposes 

          ></MementoFeed>

          <Button
            onPress={() => navigation.navigate("VisionAdd", {updateVision: {addVision}})}
            title="Create a Vision"
          />

        <Button
            onPress={() => navigation.navigate("Reflect")}
            title="Reflect"
          />

        </View>
    );
}
