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
  const [caption, setCaption] = useState("");

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
          <Text style={{fontSize: 15, fontFamily: 'Futura'}}>  {liked ? "Added to Favorites!":"Add to Favorites"}</Text>
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
          labelStyle={{fontFamily: 'Futura', color: 'white'}}
          placeholder = "Select a vision..."
          //placeholder = <Text style={{fontFamily: 'Futura', color: 'white'}}>Select a vision...</Text>
          containerStyle={{height: 40}}
          dropDownStyle={{backgroundColor: "grey"}}
          itemStyle={{justifyContent: 'flex-start',}}
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

        <TouchableOpacity
          style={styles.save}
          //onPress={() => addReflection()}
        >
          <Text style={{fontSize: 20, color: 'white', fontFamily: 'Futura',}}>save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.newprompt}
          //onPress={() => {randomPrompt()}}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>

      </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      fontFamily: 'Futura'
    },
    headerText2: {
      color: 'white',
      fontFamily: 'Futura'
    },
    prompt: {
      fontWeight: 'bold',
      fontFamily: 'Futura'
    },
    caption: {
      color: 'black',
      fontFamily: 'Futura'
    },
    save: {
      backgroundColor: '#3E71AE',
      height: 40,
      borderRadius: 20,
      width: 150,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    newprompt: {
      height: 24,
      borderRadius: 12,
      margin: 5,
      paddingLeft: 15,
      paddingRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#3E71AE',
      fontSize: 14,
      fontFamily: 'Futura',
      textDecorationLine: 'underline',
    }
  });
