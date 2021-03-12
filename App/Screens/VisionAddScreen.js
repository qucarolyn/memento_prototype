import React, { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Alert} from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function VisionAddScreen(props) {
  const [visionText, setVisionText] = useState("");
  const [visionColor, setVisionColor] = useState("");
  const navigation = useNavigation();


  const addVision = () => {
    if(visionText == ""){
      textAlert();
    }else if(visionColor == "") {
      colorAlert();
    }else {
      console.log(visionText);
      console.log(visionColor);
      // Deep copy of array avoids any state mutation instead of state update rerender issues
      let newVisions = [...visions];
      newVisions.push({title: visionText, color: visionColor});
      navigation.popToTop();
      visions = newVisions;
      console.log(newVisions);
    }

  };


  const colorAlert = () =>
    Alert.alert(
      "No Color Selected",
      "Please Select a Color"
      [{ text: "OK", onPress: () => console.log("OK Pressed"),}
      ],
    );

    const textAlert = () =>
    Alert.alert(
      "Vision is Empty",
      "Please add a title for your Vision"
      [{ text: "OK", onPress: () => console.log("OK Pressed"),}
      ],
    );


  const color_list = [
    { label: "C1",
      value: "1",
      color: '#FF7F96'
    },
    { label: "C2",
      value: "2",
      color: '#FFAD80'
    },
    { label: "C3",
      value: "3",
      color: '#FFE380'
    },
    { label: "C4",
      value: "4",
      color: '#83E39E'
    },
    { label: "C5",
      value: "5",
      color: '80C9FF'
    },
    { label: "C6",
      value: "6",
      color: '#C0A2FF'
    },
  ];


    return (
        <View>
          <KeyboardAvoidingView style={{alignItems: 'center', margin: 50,}}>
            <Text style={styles.title}>Enter a title</Text>
            <TextInput
              placeholder='be healthy...'
              value={visionText}
              maxLength={20}
              style={styles.textinput}
              onChangeText={(visionText) => setVisionText(visionText)}
            />
            <Text>
              {visionText.length}/20
            </Text>
          </KeyboardAvoidingView>

          <View style={{alignItems: 'center', margin: 30,}}>
            <Text style={styles.title}>Choose a color</Text>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: '#FF7F96',
            }}
            onPress = {() => setVisionColor('red')}/>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: '#FFAD80',
            }}
            onPress = {() => setVisionColor('orange')}
            />
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: '#FFE380',
            }}
            onPress = {() => setVisionColor('yellow')}
            />
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: '#83E39E',
            }}
            onPress = {() => setVisionColor('green')}
            />
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: '#80C9FF',
            }}
            onPress = {() => setVisionColor('blue')}
            />
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: '#C0A2FF',
            }}
            onPress = {() => setVisionColor('purple')}
            />
            </View>
          </View>

          <View style={{alignItems: 'center', marginTop: 70}}>
          <TouchableOpacity
            style={styles.save}
            onPress={() => addVision()}
          >
            <Text style={{fontSize: 20, color: 'white'}}>finish</Text>
          </TouchableOpacity>
          </View>

        </View>
    );
}

const styles = StyleSheet.create({
  textinput: {
    paddingLeft: 15,
    height: 36,
    width: '70%',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 18,
  },
  title: {
    color: '#3E71AE',
    fontSize: 18,
    marginBottom: 10,
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
  buttonText: {
    color: '#3E71AE',
    fontSize: 14,
    textDecorationLine: 'underline',
  }
});
