import React, { useEffect, useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';


const prompts=[
  "What have I enjoyed most about the last week?",
  "I am most grateful for...",
  "What would I tell my future self",
  "If I could do anything, what would it be?",
  "What are my strengths right now?",
  "What are my weaknesses right now?",
  "What am I afraid of right now?",
  "Where do I want to be in a year?",
  "Where do I want to be in 5 years?",
  "What do I need more of in my life?",
  "What do I need less of in my life?",
  "What do I love about myself?",
  "What drains my energy?",
  "Who/what is inspiring me right now?",
  "What is a quote that is particulary touching right now and why?",
  "What motivates me?",
  "What is something I'll never forget?",
  "What is holding me back from making progress?",
  "What am I passionate about?",
  "What do I know today that I didn't know a year ago?",
  "If today was my last day, what would I do?",
  "If I couldn't fail, what would I do?",
  "What does 'failure' mean to me?",
  "What does 'success' mean to me?",
  "List 15 things that made me smile this week",
  "What is my biggest fear right now?",
  "Is my morning routine currently supporting my goals?",
  "Is my nighttime routine currently supporting my goals?",
  "What can I do today to make progress?",
  "If I had all the time in the world, what would I do?"
]

//const [prompt, setPrompt] = useState("");

// const setRandom = () => {
//   var prompt = prompts[Math.floor(Math.random() * (28))];
//   setPrompt(prompt);
// }

export default function ReflectScreen(props) {
  console.log(props)
  const visionList = props.route.params.visions;
  const [currentVision, setCurrentVision] = useState(props.route.params.currentVision);
  const [isCustom, setIsCustom] = useState(false);
  const [prompt, setPrompt] = useState(prompts[Math.floor(Math.random() * (28))]);
  const [reflectionText, setReflectionText] = useState("");
  

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

  const addReflection = () => {
    if(reflectionText == ""){
      textAlert();
    }else {
      const newReflection = {
        title: currentVision.title,
        prompt: prompt,
        reflection: true,
        color: currentVision.color,
        date: "1/19/2020",
        caption: reflectionText,
        favorite: false,
      };
    }
  }


  const textAlert = () =>
    Alert.alert(
      "Reflection cannot be empty",
      "Please type a reflection to submit"
      [{ text: "OK", onPress: () => console.log("OK Pressed"),}
      ],
    );

    const randomPrompt = () => {
      setIsCustom(false);
      setPrompt(prompts[Math.floor(Math.random() * (28))])
    }

    const customPrompt = () => {
      setIsCustom(true);
      setPrompt("");
    }
  
    return (
        <View style={styles.container}>
          <View style={{justifyContent: 'center', height: 100}}>
            {isCustom ? 
              <TextInput
                placeholder='(optional) Enter Prompt...'
                value={prompt}
                style={{margin: 20, fontSize: 20, fontFamily: 'Futura',}}
              onChangeText={(reflectionPrompt) => setPrompt(reflectionPrompt)}
              />:
              <Text style={{margin: 20, fontSize: 20, fontFamily: 'Futura',}}>{prompt}</Text> 
            }
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.newprompt}
              onPress={() => {randomPrompt()}}
            >
              <Text style={styles.buttonText}>New prompt</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.newprompt}
              onPress={() => {customPrompt()}}
            >
              <Text style={styles.buttonText}>Custom prompt</Text>
            </TouchableOpacity>
          </View>
          <DropDownPicker
          items={dropdownItems(visionList)}
          style={{
            backgroundColor: currentVision.color,
            color: "white"
          }}
          containerStyle={{height: 40}}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          onChangeItem= 
            {item => setCurrentVision(visionList.find(element => element.title == item.label))}

        />
          <KeyboardAvoidingView style={{alignItems: 'center', margin: 10,}}>
            <TextInput
              multiline
              placeholder='Start Reflecting...'
              value={reflectionText}
              style={styles.textinput}
              onChangeText={(reflectionText) => setReflectionText(reflectionText)}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity 
            style={styles.voicememo}
            onPress = {() => setReflectionText("Voice Memo Added!")}
          >
            <FontAwesome name="microphone" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.save}
            onPress={() => addReflection()}
          >
            <Text style={{fontSize: 20, color: 'white', fontFamily: 'Futura',}}>save</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: '100%',
    backgroundColor: 'white',
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
  textinput: {
    padding: 15,
    paddingTop: 15,
    height: 300,
    width: 300,
    alignItems: 'flex-start',
    borderColor: '#C5C5C5',
    borderWidth: 1,
    borderRadius: 18,
  },
  voicememo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3E71AE',
    padding: 10,
    marginBottom: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
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
