import React from "react";
import { View, Text, StyleSheet, Button, } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function MementoDetailScreen(props) {
    let navigation = useNavigation();
    let memento = props.route.params;
    console.log(memento);
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>

        <View style={{
          marginTop: 20,
          borderRadius: 10,
          backgroundColor: 'white',
          width: 320,
        }}>
          <View style={{
            backgroundColor: memento.color,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 10,
          }}>
            <Text style={styles.headerText}>{memento.title}</Text>
            <Text style={styles.headerText2}>{memento.date}</Text>
          </View>

          <View style={{
            borderRadius: 10,
            padding: 10,
          }}>
            <Text>{memento.caption}</Text>
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
    }
  });
