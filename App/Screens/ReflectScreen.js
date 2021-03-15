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
} from "react-native";

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

export default function ReflectScreen({navigation}) {
  const [prompt, setPrompt] = useState(prompts[Math.floor(Math.random() * (28))]);
  function randomPrompt() {
    setPrompt(prompts[Math.floor(Math.random() * (28))]);
    console.log(prompt);
  }
    return (
        <View style={styles.container}>
          <View style={{justifyContent: 'center', height: 100}}>
            <Text style={{margin: 20, fontSize: 20,}}>
              {prompt}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.newprompt}
              onPress={() => {setPrompt(prompts[Math.floor(Math.random() * (28))])}}
            >
              <Text style={styles.buttonText}>New prompt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newprompt}>
              <Text style={styles.buttonText}>Custom prompt</Text>
            </TouchableOpacity>
          </View>
          <KeyboardAvoidingView style={{alignItems: 'center', margin: 10,}}>
            <TextInput
              multiline
              style={styles.textinput}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.voicememo}>
            <FontAwesome name="microphone" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.save}
            // onPress={}
          >
            <Text style={{fontSize: 20, color: 'white'}}>save</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
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
    textDecorationLine: 'underline',
  }
});
