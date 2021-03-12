import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet
} from "react-native";

export default function ReflectScreen({navigation}) {
    return (
        <View style={styles.container}>
          <View style={{justifyContent: 'center'}}>
          <Text style={{margin: 20, fontSize: 20,}}>What have you enjoyed most about the last week?</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.newprompt}>
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
          <TouchableOpacity style={styles.save}>
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
