import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import HorizontalMenu from '../Components/HorizontalMenu.js';
import MementoFeed from '../Components/MementoFeed.js';
//import  {feedItems} from '../Components/HardCoded/feeditems.js';
// import TripleToggleSwitch from 'react-triple-toggle-switch';

var visions= [
  {
    title: "All",
    color: 'grey',
    archived: false,
  },

  {
    title: "Learn ukelele",
    color: '#83E39E',
    archived: false,
  },
  {
    title: "Spend time with fam",
    color: '#80C9FF',
    archived: false,
  },
  {
   title: "Stay healthy",
   color: '#FFAD80',
   archived: false,
  }
];

var feedItems = [
  {
    title: "Stay healthy",
    reflection: false,
    color: '#FFAD80',
    date: "1/21/2020",
    caption: 'Today I went on a run! We went to the dish, and then got lunch at Coupa. I got a really yummy salad at Coupa afterwards!',
    favorite: true,
    media:
      [
        {type: "image", source:require('../Components/Images/stanford.jpeg'), key:'1'},
        {type: "location", source:require('../Components/Images/location.png'), key:'2'},
        {type: "audio", source:require('../Components/Images/audioIcon.png'), key:'3'},
      ]
  },
  {
    title: "Learn ukelele",
    reflection: false,
    color: '#83E39E',
    date: "1/19/2020",
    caption: 'Today I learned a brand new chord progression! I can now play "riptide by Vance Joy. ',
    media: [
      {type: "audio", source:require('../Components/Images/audioIcon.png'), key:'1'},
    ],
    favorite: true,
  },
  {
    title: "Stay healthy",
    reflection: true,
    color: '#FFAD80',
    date: "1/19/2020",
    prompt: "What are you most proud of?",
    caption: 'I am most proud of myself for keeping up with this vision consistently. Some days, its been really challenging for me to motivate myself, but Im thankful to get a little bit of movement in every day!',
    favorite: false,
  },

  {
    title: "Spend time with fam",
    reflection: false,
    color: '#80C9FF',
    date: "1/19/2020",
    caption: 'Made lunch with mom and dad today! it was SO SO SO much fun. I made a pest pasta and they made a side dish with vegetables',
    media: [
      {type: "image", source:require('../Components/Images/vegetables.jpeg'), key:'1'},
      {type: "image", source:require('../Components/Images/lunch.jpeg'), key:'2'},
      {type: "audio", source:require('../Components/Images/audioIcon.png'), key:'3'},
    ],
    favorite: false,
  },

  {
    title: "Spend time with fam",
    reflection: false,
    color: '#80C9FF',
    date: "1/19/2020",
    caption: 'Family game night yeah-yuh!!! Theo and Gracielas team beat us terribly in hearts but we played scrabble afterwards, it was so much fun!',
    favorite: false,
    media: [
      {type: "image", source:require('../Components/Images/games.jpeg'), key:'1'},
      {type: "image", source:require('../Components/Images/games2.jpeg'), key:'2'},
    ],
  },

  {
    title: "Learn ukelele",
    reflection: false,
    color: '#83E39E',
    date: "1/19/2020",
    caption: 'Played in the dorm with my RAs Sarah and Theo today! turns out they also have been trying to learn!',
    favorite: true,
  },

  {
    title: "Learn ukelele",
    reflection: true,
    color: '#83E39E',
    date: "1/19/2020",
    prompt: "What are you most proud of?",
    caption: 'I am most proud of myself for keeping up with this vision consistently',
    favorite: true,
  },

];

export default function HomeFeedScreen({navigation}) {
  const [activeVision, setActiveVision] = useState("All");

  const addVision = (vision) => {
    visions.push(vision);
  }

  const addReflection = (reflection) => {
    feedItems.push(reflection);
  }

  const addMemento = (memento) => {
    feedItems.push(memento);
  }

  const setVision = (vision) => {
    setActiveVision(vision);
  }

    return (
        <View style={{backgroundColor: 'white'}}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 14}}>

          <TouchableOpacity onPress={() => navigation.navigate("VisionAdd", {updateVision: {addVision}})}>
            <Text style={{fontSize: 20, color: '#3E71AE'}}>+  </Text>
          </TouchableOpacity>

          <HorizontalMenu
            visions={visions}
            setVisionCallback = {setVision}
          />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 5,}}>

          <TouchableOpacity
            onPress={() => navigation.navigate("MementoAdd",
            {currentVision: visions.find(element => element.title == activeVision),
             visions: visions,
             updateMementos: {addMemento},
             //setVision: addVision,
            })}
            style={styles.button}
          >
          <Text style={styles.buttonText}>Add a Memento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(
              "Reflect",
              {currentVision: visions.find(element => element.title == activeVision),
                visions: visions,
                updateReflections: {addReflection}
              })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Add a Reflection</Text>
          </TouchableOpacity>
          </View>

          </View>

          {/* <Text>{console.log(visions)}</Text> */}
          <ScrollView style={{paddingBottom: 100}}>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>

          </View>
            <MementoFeed
              vision = {activeVision}//for testing purposes
              feedItems = {feedItems}
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
    },
    buttonText: {
      color: 'white',
      fontFamily: 'Futura',
    }
  });
