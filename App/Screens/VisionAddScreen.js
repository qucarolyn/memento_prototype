import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";

export default function HomeFeedScreen({navigation}) {
    return (
        <View>
          <KeyboardAvoidingView style={{alignItems: 'center', margin: 50,}}>
            <Text>Enter a title</Text>
            <TextInput
              style={styles.textinput}
            />
          </KeyboardAvoidingView>
          <View style={{alignItems: 'center', margin: 30,}}>
            <Text>Choose a color</Text>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'red',
            }}/>
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
