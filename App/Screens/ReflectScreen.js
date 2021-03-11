import React from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet } from "react-native";

export default function ReflectScreen({navigation}) {
    return (
        <View style={{alignItems: 'center'}}>
          <Text style={{margin: 10,}}>Prompt:</Text>
          <View>
            <Text style={{margin: 10,}}>What have you enjoyed most about the last week?</Text>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Text style={{color: 'blue', textDecorationLine: 'underline'}}>I want a new prompt</Text>
            </TouchableOpacity>
          </View>
          <KeyboardAvoidingView style={{alignItems: 'center', margin: 50,}}>
            <TextInput
              style={styles.textinput}
            />
          </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
  textinput: {
    padding: 15,
    height: 36,
    width: '70%',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 18,
  },
});
