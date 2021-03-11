import React from "react";
import { View, Text, Button, TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet } from "react-native";

export default function ReflectScreen({navigation}) {
    return (
        <View>
          <Text>Reflect</Text>
          <Text>What have you enjoyed most about the last week?</Text>
          <TouchableOpacity>
            <Text>I want a new prompt</Text>
          </TouchableOpacity>
          <KeyboardAvoidingView style={{alignItems: 'center', margin: 50,}}>
            <TextInput
              multiline
              style={styles.textinput}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.voicememo}>
            <Text>Record a voice memo</Text>
          </TouchableOpacity>
          <Button
            title="Save"
            accessibilityLabel="Click Here to Publish Vision"
          />
        </View>
    );
}

const styles = StyleSheet.create({
  textinput: {
    padding: 15,
    paddingTop: 15,
    height: 300,
    width: 300,
    alignItems: 'flex-start',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 18,
  },
  voicememo: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    marginBottom: 30,
  },
  newprompt: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
