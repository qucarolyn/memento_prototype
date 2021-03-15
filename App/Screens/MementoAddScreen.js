import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function MementoAddScreen({navigation}) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>

        <TouchableOpacity style={{flexDirection: 'row', margin: 20,}}>
          <FontAwesome name="heart" size={16} color="black" />
          <Text style={{fontSize: 15}}>  Add to Favorites</Text>
        </TouchableOpacity>

        <View style={{
          borderRadius: 10,
          backgroundColor: 'white',
          width: 320,
          marginBottom: 20,
        }}>
          <TouchableOpacity style={{
            backgroundColor: 'blue',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 10,
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}>
            <Text style={styles.headerText}>Title</Text>
            <AntDesign name="down" size={20} color="white" />
          </TouchableOpacity>

          <View style={{
            borderRadius: 10,
            padding: 10,
            height: 330,
          }}>
          </View>

          <View style={{
            backgroundColor: 'blue',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            padding: 10,
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}>
            <TouchableOpacity>
            <FontAwesome name="photo" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name="format-text" size={26} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
            <FontAwesome name="microphone" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
            <Entypo name="location" size={23} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialIcons name="insert-emoticon" size={26} color="white" />
            </TouchableOpacity>
          </View>

        </View>

        <Button
          //onPress={() => navigation.navigate("MementoScreen")}
          title="Save"
        />

        <Button
          //onPress={() => navigation.navigate("MementoScreen")}
          title="Cancel"
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
