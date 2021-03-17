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
  "'I am most grateful for...''",
  "What would I tell my future self?",
  "If I could do anything, what would it be?",
  "What are my strengths right now?",
  "What are my weaknesses right now?",
  "What am I afraid of right now?",
  "Where do I want to be in a month?",
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
  "If I had all the time in the world, what would I do?",
  "What do I need to get off my chest today?",
  "What advice would I give myself right now?",
  "What are five things I should do less often?",
  "What are five things I should do more often?",
  "What are three things I've done well on this week?",
  "What are five things I love about myself?",
  "How have I changed in the past year?",
  "What makes me unique?",
  "Write a thank you note to yourself",
  "What do I love about this period in my life?",
  "What are some ways I can give back?",
  "How can I use my strengths to help others?",
  "How could I make someone's day better?",
  "What love language do I need the most right now?",
  "What's a skill I want to learn in the next month?",
  "What's a skill I want to learn in the next year?",
  "How have I relaxed this week?",
  "How do I decompress?",
  "What's a recent memory that I would like to remember when I'm 90?",
  "What part of my life makes me feel the best right now?",
  "What qualities do I admire in others?",
  "What qualities do I hope others admire in me?",
  "What advice would I give to 5-year-old me?",
  "What advice would I give to myself a year ago?",
  "If I had all the money in the world, what would I do?",
  "What's my favorite book/movie/song right now?",
  "Who is a person I admire?",
  "When was the last time I did something I was afraid of?",
  "What 5-minute activity could I do right now to improve my mood?",
  "What 5-minute activity could I do right now to feel productive?",
  "What 5-minute activity could I do right now to make an impact?",
  "If life stopped today, what would I wish I had done?",
  "What does my ideal day look like?",
  "Who should I forgive?",
  "What's been the highlight of my day so far?",
  "What's bothering me right now?",
  "What's a fear I'd like to get over?",
  "What is my biggest obstable right now and how can I tackle that?",
  "What habit do I wish I had?",
  "How can I lay the foundation for a long-term goal right now?",
  "How has my outlook on life changed over time?",
  "What's the most important lesson I learned in the last year?",
  "What am I most proud of in my life?",
  "What words do I want to describe my next year?",
  "What do I want to remember about my life 5 years from now?",
  "When do I feel the most successful?",
  "What kind of person do I want to be?",
  "When do I feel the most alive?",
  "How am I feeling right now?",
  "What's one thing I've ahcieved that I never expected?",
  "How has my social circle had an impact on my life recently?",
  "What's something on my bucket list?",
  "What habits/mindsets from my life do I most recommend for others?",
  "What compliment would make me feel the best right now?",
  "What's my ideal day right now?",
  "What do I hope my normal day looks like in a year?",
  "How do I spend the weekends?",
  "What's a short goal I could achieve today?",
  "What's a goal for myself that would help others too?",
  "What's one toxic thing do I need to let go of?",
  "What do I value most in my daily life?",
  "What's one obstacle in my life that I've already overcome?",
  "What's the best possible outcome of my goal?",
  "How could I change my perspective on a current obstacle/insecurity?",
  "What's one of my favorite places?",
  "What's something I'm looking forward to right now?",
  "What were my highest highs of the past week?",
  "What's one thing I dream of doing?",
  "What's a qualitative milestone I hope to reach and when?",
  "What's a quantitative milestone I hope to reach and when?"
]

//const [prompt, setPrompt] = useState("");

// const setRandom = () => {
//   var prompt = prompts[Math.floor(Math.random() * (28))];
//   setPrompt(prompt);
// }

export default function ReflectScreen({navigation}) {
  const [prompt, setPrompt] = useState(prompts[Math.floor(Math.random() * (28))]);
  const [isCustom, setCustomPrompt] = useState(false);
  //const [customPromptText, setCustomPromptText] = useState("");

  function randomPrompt() {
     setPrompt(prompts[Math.floor(Math.random() * (100))]);
     setCustomPrompt(false);
     console.log(prompt);
  }

  function customPrompt() {
    setPrompt("");
    setCustomPrompt(true);
  }


    return (
        <View style={styles.container}>
          <View style={{justifyContent: 'center', height: 100}}>
            {isCustom ? 
              <TextInput
                style={{margin: 20, fontSize: 20, fontFamily: 'Futura',}}
                placeholder='(optional) Add your own prompt'
                value={prompt}
                onChangeText={(prompt) => setPrompt(prompt)}
              /> :
              <Text style={{margin: 20, fontSize: 20, fontFamily: 'Futura',}}>
                {prompt}
              </Text>
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
          <KeyboardAvoidingView style={{alignItems: 'center', margin: 10,}}>
            <TextInput
              multiline
              style={styles.textinput}
              placeholder='Start reflecting...'

            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.voicememo}>
            <FontAwesome name="microphone" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.save}
            // onPress={}
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
