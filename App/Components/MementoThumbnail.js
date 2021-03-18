import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { FontAwesome } from '@expo/vector-icons';

export default function MementoThumbnail (props) {
    let navigation = useNavigation();
    let media = props.media;
    console.log(props.title);

    if(props.media != undefined) {
      console.log(media[1].source);
    }

    const [favoriteStatus, setFavoriteStatus] = useState(props.favorite);
    const editFavorite = (status) => {
      if(status){
        setFavoriteStatus(false);
      }else {
        setFavoriteStatus(true);
      }
    }
    // console.log("memento images");
    // console.log(props.images);

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
        <Text style={styles.caption}>{shortenText(props.caption)}</Text>
        
        {//conditional rendering of images
          media != undefined ?  
          // <Text>Image here</Text>
            <FlatList
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              data={media}
              renderItem={ ({item, index}) => (
              <Image source={item} 
                key = {index}
              style={{
                width:75,
                   height:75,
                   borderWidth:1,
                   //borderColor:'#d35647',
                   resizeMode:'contain',
                   margin:4
               }}></Image>
             )}
           />
        : <></>}
        </View>
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    headerText: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Futura',
    },
    headerText2: {
      color: 'white',
      fontFamily: 'Futura',
    },
    prompt: {
      fontWeight: 'bold',
      fontFamily: 'Futura',
    },
    caption: {
      fontFamily: 'Futura'
    }
  });
