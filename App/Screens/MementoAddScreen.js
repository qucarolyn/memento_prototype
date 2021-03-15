import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function MementoAddScreen({navigation}) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>

        <View style={{
          marginTop: 20,
          borderRadius: 10,
          backgroundColor: 'white',
          width: 320,
        }}>
          <View style={{
            backgroundColor: 'blue',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 10,
          }}>
            <Text style={styles.headerText}>Title</Text>
            <Text style={styles.headerText2}>Date</Text>
          </View>

          <View style={{
            borderRadius: 10,
            padding: 10,
          }}>
            <Text style={styles.prompt}>Prompt</Text>
            <Text style={styles.caption}>Caption</Text>
          </View>

        </View>

        <Button
          //onPress={() => navigation.navigate("MementoScreen")}
          title="Edit this Memento"
        />

      </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    headerText2: {
      color: 'white',
    },
    prompt: {
      fontWeight: 'bold'
    },
    caption: {
      color: 'black',
    }
  });
