import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';



export default function MementoAddScreen(props) {
  const [currentVisionTitle, setCurrentVisionTitle] = useState(props.route.params.currentVision);
  const visionList = props.route.params.visions;

  const [liked, setLiked] = useState(false);
  const [currentVision, setCurrentVision] = useState(visionList.find(element => element.title == currentVisionTitle));

  // const [currentVisionColor, setCurrentVisionColor] = useState(currentVision.color);

  const titleToVision = (currentVision) => {
    setCurrentVisionTitle(currentVision.value);
    setCurrentVision(visionList.find(element => element.title == currentVisionTitle));

  }

    const dropdownItems = (visions) => {
    return(
      // newVisions = visions.filter(vision)
      visions.map(vision => {
        let item = {}
        item.label = vision.title 
        item.value = vision.title
        item.selected = vision.title == currentVisionTitle ? true :false
        return item
      }))

    }

    console.log(dropdownItems(visionList));

    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>

        <TouchableOpacity 
          style={{flexDirection: 'row', margin: 20,}}
          onPress={() => liked ? setLiked(false) : setLiked(true)}
        >
          {liked ? <FontAwesome name="heart" size={16} color={currentVision.color} /> : 
                   <FontAwesome name="heart-o" size={16} color={currentVision.color} />}
          <Text style={{fontSize: 15}}>  {liked ? "Added to Favorites!":"Add to Favorites"}</Text>
        </TouchableOpacity>

        <View style={{
          borderRadius: 10,
          backgroundColor: 'white',
          width: 320,
          marginBottom: 20,
        }}>
          <DropDownPicker
          items={dropdownItems(visionList).slice(1)}
          style={{
            backgroundColor: currentVision.color,
            color: "white"
          }}
          containerStyle={{height: 40}}
          itemStyle={{
            justifyContent: 'flex-start'
          }}

          onChangeItem={item => titleToVision(item)}

        />

          <View style={{
            borderRadius: 10,
            padding: 10,
            height: 330,
          }}>
          </View>

          <View style={{
            backgroundColor: currentVision.color,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            padding: 10,
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}>
            <TouchableOpacity>
            <FontAwesome name="photo" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name="format-text" size={26} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
            <FontAwesome name="microphone" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
            <Entypo name="location" size={23} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialIcons name="insert-emoticon" size={26} color="white" />
            </TouchableOpacity>
          </View>

        </View>

        <Button
          //onPress={() => navigation.navigate("MementoScreen")}
          title="Save"
        />

        <Button
          //onPress={() => navigation.navigate("MementoScreen")}
          title="Cancel"
        />

      </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    headerText2: {
      color: 'white',
    },
    prompt: {
      fontWeight: 'bold'
    },
    caption: {
      color: 'black',
    }
  });
