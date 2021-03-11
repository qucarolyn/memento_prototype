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
      color: 'red'
    },
    { label: "C2", 
      value: "2", 
      color: 'orange'
    },
    { label: "C3", 
      value: "3", 
      color: 'yellow'
    },
    { label: "C4", 
      value: "4", 
      color: 'green'
    },
    { label: "C5", 
      value: "5", 
      color: 'blue'
    },
    { label: "C6", 
      value: "6", 
      color: 'purple'
    },
  ];
   

    return (
        <View>
          <KeyboardAvoidingView style={{alignItems: 'center', margin: 50,}}>
            <Text>Enter a title</Text>
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
            <Text>Choose a color</Text>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'red',
            }}
            onPress = {() => setVisionColor('red')}/>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'orange',
            }}
            onPress = {() => setVisionColor('orange')}
            />
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'yellow',
            }}
            onPress = {() => setVisionColor('yellow')}
            />
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'green',
            }}
            onPress = {() => setVisionColor('green')}
            />
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'blue',
            }}
            onPress = {() => setVisionColor('blue')}
            />
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'purple',
            }}
            onPress = {() => setVisionColor('purple')}
            />
            </View>
          </View>

          <Button
            title="Finish"
            accessibilityLabel="Click Here to Publish Vision"
            onPress={() => addVision()}
          />
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
});
