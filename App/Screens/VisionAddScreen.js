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
  const [pressed, setPress] = useState("null");


  const colorPressHandler = (props) => {
    setPress(props.color);
    setVisionColor(props.color);
  };

  const { updateVision } = route.params; //call with vision to be added when submit button is hit
  const visionCallback = route.params.setVisionCallback;
  //console.log (route);

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
        archived: false,
      };
      //console.log(updateVision);
      updateVision.addVision(newVision);
      //visionCallback(props.title);
      navigation.popToTop(); // Do I need to force a re render?
      //console.log(newVisions);
    }

  };

  const colorAlert = () =>
    Alert.alert(
      "No Color Selected",
      "Please Select a Color",
      [{ text: "OK", onPress: () => console.log("OK Pressed"),}
      ],
    );

    const textAlert = () =>
    Alert.alert(
      "Vision is Empty",
      "Please add a title for your Vision",
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
        <View style={{backgroundColor: 'white', height: '100%', paddingBottom: 100, justifyContent: 'space-between'}}>
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


          <View style={{alignItems: 'center', margin: 30, marginBottom: 150,}}>
            <Text style={styles.title}>Choose a color</Text>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <FlatList
                horizontal = {true}
                data={color_list}
                //justifyContent='space-between'
                // keyExtractor={item => item.id.toString()}
                renderItem = {({item}) => (
                  <TouchableOpacity
                    style={{
                      marginHorizontal: 11,
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

          <View style={{alignItems: 'center',}}>
          <TouchableOpacity
            style={styles.save}
            onPress={() => addVision()}
          >

            <Text style={{fontSize: 20, color: 'white', fontFamily: 'Futura',}}>finish</Text>
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
    fontFamily: 'Futura',
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
