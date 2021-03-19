import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Button, FlatList, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';


export default function MementoDetailScreen(props) {
    let navigation = useNavigation();
    let memento = props.route.params;
    let media = memento.media;

    //favoriting a memento (not fully functional)
    const [favoriteStatus, setFavoriteStatus] = useState(memento.favorite);
    let location = require('../Components/Images/location.png')

    const editFavorite = (status) => {
      if(status){
        setFavoriteStatus(false);
      }else {
        setFavoriteStatus(true);
      }
    }


    return (

      <View style={{justifyContent: 'center', alignItems: 'center'}}>

        <View style={{
          marginTop: 20,
          marginBottom: 20,
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.headerText}>{memento.title}</Text>
              <TouchableOpacity
                onPress = {() => editFavorite(favoriteStatus)}
              >
              {favoriteStatus == true ? <FontAwesome name="heart" size={16} color="white" /> : //doesnt fully work yet
                                    <FontAwesome name="heart-o" size={16} color="white" /> }
              </TouchableOpacity>
            </View>
            <Text style={styles.headerText2}>{memento.date}</Text>
          </View>

          <ScrollView style={{height: '80%'}}>
          <View style={{
            borderRadius: 10,
            padding: 10,
          }}>
            <Text style={styles.prompt}>{memento.prompt}</Text>
            <Text style={styles.caption}>{memento.caption}</Text>
            <FlatList
              //horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={media}
              renderItem={ ({item, index}) => (
              item.type == "image" || item.type == "location" ?
              <Image source={item.source}
                key = {index}
                style={{
                  width:'100%',
                  height: 150,
                  //width:600,
                  //height:200,
                  //borderWidth:1,
                  //borderColor:'#d35647',
                  //resizeMode:'contain',
                  margin:4
               }}></Image> :
               <Image source={require('../Components/Images/audioWav.png')}
                key = {index}
                style={{
                  width:300,
                  //height:100,
                  //borderColor:'#d35647',
                  resizeMode:'contain',
                  //margin:4
               }}></Image>
             )}/>
          </View>
          </ScrollView>

        </View>

        <TouchableOpacity style={styles.save}>
          <Text style={{fontSize: 18, color: 'white', fontFamily: 'Futura',}}>Edit this Memento</Text>
        </TouchableOpacity>

      </View>

    );
}

const styles = StyleSheet.create({
    headerText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      fontFamily: 'Futura'
    },
    headerText2: {
      color: 'white',
      fontFamily: 'Futura'
    },
    save: {
      backgroundColor: '#3E71AE',
      height: 40,
      borderRadius: 20,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      color: '#3E71AE',
      fontSize: 14,
      fontFamily: 'Futura',
      textDecorationLine: 'underline',
    },
    prompt: {
      fontWeight: 'bold',
      fontFamily: 'Futura'
    },
    caption: {
      color: 'black',
      fontFamily: 'Futura'
    }
  });
