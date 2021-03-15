import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView} from "react-native";
import HorizontalMenu from '../Components/HorizontalMenu.js';
import MementoFeed from '../Components/MementoFeed.js';
// import TripleToggleSwitch from 'react-triple-toggle-switch';


export default function HomeFeedScreen({navigation}) {
  const [activeVision, setActiveVision] = useState("All");

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
      color: '#83E39E',
    },
    {
      title: "Spend time with fam",
      color: '#80C9FF'
    },
    {
     title: "Stay healthy",
     color: '#FFAD80'
    }
  ];

    return (
        <View>

          <HorizontalMenu 
            visions={visions}
            setVisionCallback = {setVision}
          />

          {/* <Text>{console.log(visions)}</Text> */}
          <SafeAreaView>
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

          </SafeAreaView>
          

        </View>
    );
}
