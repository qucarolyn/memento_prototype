import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { FontAwesome } from '@expo/vector-icons';

export default function ReflectionThumbnail (props) {
    const [favoriteStatus, setFavoriteStatus] = useState(props.favorite);
    const editFavorite = (status) => {
      if(status){
        setFavoriteStatus(false);
      }else {
        setFavoriteStatus(true);
      }
    }

    function shortenText (text){
        if(text.length <= 50) {
          return text;
        }else{
          return text.substring(0, 47) + "...";
        }
    }

    return (
        <TouchableOpacity
          style={{
          backgroundColor: '#F1F1F1',
          borderRadius: 10,
          //padding: 10,
          margin: 5,
          }}
          onPress={() => navigation.navigate("MementoDetail", props)}
          >

          <View
            style = {{
            backgroundColor: props.color,

            // backgroundColor: '#3E71AE',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 7,
            paddingLeft: 10,
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            }}>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.headerText}>{props.title}</Text>
              <Text style={styles.headerText}>{" - Reflection"}</Text>
              <Text style={styles.headerText2}> - </Text>
              <Text style={styles.headerText2}>{props.date}</Text>
            </View>

            <TouchableOpacity
            onPress = {() => editFavorite(favoriteStatus)}
            >
            {favoriteStatus == true ? <FontAwesome name="heart" size={16} color="white" /> : //doesnt fully work yet
                                    <FontAwesome name="heart-o" size={16} color="white" /> }
            </TouchableOpacity>
          </View>

          <View style={{padding: 10}}>
            <Text style={styles.prompt}>{props.prompt}</Text>
            <Text>{shortenText(props.caption)}</Text>
          </View>
        </TouchableOpacity>
      );
  }

  const styles = StyleSheet.create({
    headerText: {
      color: 'white',
      fontWeight: 'bold',
      //fontFamily: 'Verdana',
    },
    headerText2: {
      color: 'white',
    },
    prompt: {
      fontWeight: 'bold'
    },
  });
