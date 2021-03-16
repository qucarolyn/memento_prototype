import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, TouchableOpacity} from "react-native";
import HorizontalMenu from '../Components/HorizontalMenu.js';
import MementoFeed from '../Components/MementoFeed.js';
// import TripleToggleSwitch from 'react-triple-toggle-switch';

var visions= [
  {
    title: "All",
    color: 'grey',
    archived: false,
  },

  // {
  //   title: "Be happy",
  //   color: 'red',
  // },
  {
    title: "Learn ukelele",
    color: '#83E39E',
    archived: false,
  },
  {
    title: "Spend time with fam",
    color: '#80C9FF',
    archived: true,
  },
  {
   title: "Stay healthy",
   color: '#FFAD80',
   archived: false,
  }
];

export default function HomeFeedScreen({navigation}) {
  const [activeVision, setActiveVision] = useState("All");

  const addVision = (vision) => {
    visions.push(vision);
  }

  const setVision = (vision) => {
    setActiveVision(vision);
  }

    return (
        <View style={{backgroundColor: 'white'}}>

          <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 14}}>

          <TouchableOpacity onPress={() => navigation.navigate("VisionAdd", {updateVision: {addVision}})}>
            <Text style={{fontSize: 20}}>+</Text>
          </TouchableOpacity>

          <HorizontalMenu
            visions={visions}
            setVisionCallback = {setVision}
          />

          </View>

          {/* <Text>{console.log(visions)}</Text> */}
          <SafeAreaView>
            <MementoFeed
              vision = {activeVision}//for testing purposes
            ></MementoFeed>

            <Button
              onPress={() => navigation.navigate("MementoAdd", {currentVision: activeVision, visions: visions})}
              title="Create a Memento"
            />

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
