import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';


export default function FAQScreen({route, navigation}) {
    return (
        <ScrollView alignItems="center">
          <Text style={styles.buttonText}>
              Frequently Asked Questions:
          </Text>
          <Text style={styles.questionText}>
              What is a vision?
          </Text>
          <Text style={styles.answerText}>
              A vision is a long-term goal that you set for yourself. It consists of mementos, or memories.
          </Text>
          <Text style={styles.questionText}>
              How do I make a vision?
          </Text>
          <Text style={styles.answerText}>
              On the home screen, click on the hamburger menu on the top left. Tap on "Visions" and add a vision! Focus on emotional needs and how to cater to them. Some examples are "Eat Healthier" and "Learn How to Surf."
          </Text>
          <Text style={styles.questionText}>
              What is a memento?
          </Text>
          <Text style={styles.answerText}>
              A memento is a memory that is a step in your journey towards your vision. It can be anything from a photo to a voice recording!
          </Text>
          <Text style={styles.questionText}>
              How do I make a memento?
          </Text>
          <Text style={styles.answerText}>
                After creating a vision, you are now ready to add a memento. On the home screen, tap on "Add a Memento." Select a vision from the dropdown menu and add your media. When you're done adding your media, tap "Save." You have now created your memento!
          </Text>
          <Text style={styles.questionText}>
              What is a reflection?
          </Text>
          <Text style={styles.answerText}>
              A reflection is a note about a certain vision or question. You can reflect on generated questions or even create your own prompt to reflect on.
          </Text>
          <Text style={styles.questionText}>
              How do I make a reflection?
          </Text>
          <Text style={styles.answerTextLast}>
              On the home screen, tap on "Add a Reflection." From there, you have the choice to reflect through text and/or a voice recording on any prompt of your choice. Good luck!
          </Text>
          
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#3E71AE',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      width: 150,
      padding: 5,
      margin: 5,
    },
    buttonText: {
      color: 'black',
      alignSelf: 'center',
      fontSize: 20,
      fontFamily: 'Futura',
      marginTop: "5%"
    },
    questionText: {
        color: "#3E71AE",
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Futura',
        marginTop: "5%",
        alignSelf: 'flex-start',
        marginLeft: "5%",
    },
    answerText: {
        color: "#36454f",
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'Futura',
        marginTop: "2%",
        alignSelf: 'flex-start',
        marginLeft: "5%",
        marginRight: "3%",
    },
    answerTextLast: {
        color: "#36454f",
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'Futura',
        marginTop: "2%",
        alignSelf: 'flex-start',
        marginLeft: "5%",
        marginBottom: "10%",
    }
});