import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
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
          <ScrollView style={{paddingBottom: 100}}>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>

            <TouchableOpacity
              onPress={() => navigation.navigate("MementoAdd", {currentVision: activeVision, visions: visions})}
              style={styles.button}
            >
            <Text style={{color: 'white'}}>Add a Memento</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Reflect")}
              style={styles.button}
            >
              <Text style={{color: 'white'}}>Add a Reflection</Text>
            </TouchableOpacity>

          </View>

            <MementoFeed
              vision = {activeVision}//for testing purposes
            ></MementoFeed>

          <View style={{height: 150}}/>

          </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#3E71AE',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      width: 150,
      padding: 5,
      margin: 5,
    }
  });
