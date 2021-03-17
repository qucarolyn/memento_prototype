import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';



export default function MementoAddScreen(props) {
  const visionList = props.route.params.visions;

  const [liked, setLiked] = useState(false);
  const [currentVision, setCurrentVision] = useState(props.route.params.currentVision);
  const [media, setMedia] = useState([]);

  /*media [
    {
      type: text
      value: "today I went on a run... dodod"
    }
    {
      type: location
      value: "the Dish, Stanford"
    }
    {
      type: recording
      value: "audio waveform"
    }
    {
      type: image
      value: [(array of images)

      ]
    }

  ]*/
  
  const addText = () => {
    return(
      <View>
        <TextInput
              placeholder='add a caption for this memento...'
              maxLength={20}
        />

      </View>
    )

  }


  const dropdownItems = (visions) => {
    return(
      visions.filter(vision => vision.title != "All" && !vision.archived)
      .map((vision) => {
        let item = {}
        item.label = vision.title
        item.value = vision.title
        item.selected = vision.title == currentVision.title ? true :false
        // console.log(item);
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
          items={dropdownItems(visionList)}
          style={{
            backgroundColor: currentVision.color,
            color: "white"
          }}

          placeholder = "Select a vision..."
          containerStyle={{height: 40}}

          itemStyle={{
            justifyContent: 'flex-start'
          }}

          onChangeItem={item => 
            setCurrentVision(visionList.find(element => element.title == item.label))}

        />

          <View style={{
            borderRadius: 10,
            padding: 10,
            height: 330,
          }}>
            {/* {media.find(type == text) */}
            {addText()}
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
            <MaterialCommunityIcons
              name="format-text"
              size={26}
              color="white"
              onPress = {() => addText}
            />
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
