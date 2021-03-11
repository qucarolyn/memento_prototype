import React, { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";

export default function HomeFeedScreen({navigation}) {
  const [text, setText] = useState("");
    const [choice, setChoice] = useState('');


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
              maxLength={'20'}
              style={styles.textinput}
              value={text.length} 
              onChangeText={(text) => setText(text)}
            />
            <Text>
              {text.length}/20
            </Text>
          </KeyboardAvoidingView>
          <View style={{alignItems: 'center', margin: 30,}}>
            <Text>Choose a color</Text>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'red',
            }}
            />
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'orange',
            }}/>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'yellow',
            }}/>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'green',
            }}/>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'blue',
            }}/>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'purple',
            }}/>
            </View>
          </View>

          <Button
            title="Finish"
            accessibilityLabel="Click Here to Publish Vision"
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
