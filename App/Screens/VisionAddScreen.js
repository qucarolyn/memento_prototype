import React, { useEffect, useState } from "react";
import { View, 
          Text, 
          Button, 
          TouchableOpacity, 
          StyleSheet, 
          TextInput, 
          KeyboardAvoidingView, 
          Alert, 
          FlatList} from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function VisionAddScreen({route, navigation}) {
  const [visionText, setVisionText] = useState("");
  const [visionColor, setVisionColor] = useState("");
  const [pressed, setPress] = useState(null);

  
  const colorPressHandler = (props) => {
    console.log(props);
    setPress(props.color);
    setVisionColor(props.color); 
  };

  const { updateVision } = route.params; //call with vision to be added when submit button is hit
  
  const addVision = () => {
    if(visionText == ""){
      textAlert();
    }else if(visionColor == "") {
      colorAlert();
    }else {
      // console.log(visionText);
      // console.log(visionColor);
      // Deep copy of array avoids any state mutation instead of state update rerender issues
      //let newVisions = [...visions];
      //newVisions.push({title: visionText, color: visionColor});
      const newVision = {
        color: visionColor,
        title: visionText,
      };
      console.log(updateVision);
      updateVision.addVision(newVision);
      navigation.popToTop(); // Do I need to force a re render?
      //console.log(newVisions);
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
    { label: "red",
      value: "1",
      color: '#FF7F96'
    },
    { label: "orange",
      value: "2",
      color: '#FFAD80'
    },
    { label: "yellow",
      value: "3",
      color: '#FFE380'
    },
    { label: "green",
      value: "4",
      color: '#83E39E'
    },
    { label: "blue",
      value: "5",
      color: '#80C9FF'
    },
    { label: "purple",
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
            <Text style={{color: '#A5A5A5', margin: 2,}}>
              {visionText.length}/20
            </Text>
          </KeyboardAvoidingView>


          <View style={{alignItems: 'center', margin: 30,}}>
            <Text style={styles.title}>Choose a color</Text>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <FlatList
                horizontal = {true}
                data={color_list}
                // keyExtractor={item => item.id.toString()}
                renderItem = {({item}) => (
                  <TouchableOpacity 
                    style={{
                      height: 30, 
                      width: 30, 
                      borderRadius: 15, 
                      margin: 5,
                      backgroundColor: item.color,
                      borderColor: "grey",
                      borderWidth: pressed == item.color ? 2 : 0,
                    }}
                    onPress = {() => colorPressHandler(item)}
                  />
                )}
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
