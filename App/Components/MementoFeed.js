import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { FontAwesome } from '@expo/vector-icons';
import MementoThumbnail from './MementoThumbnail.js';
import ReflectionThumbnail from './ReflectionThumbnail.js';


export default function MementoFeed(props) {
    let navigation = useNavigation();
    let feedItems = props.feedItems;
    //console.log(feedItems);

    function shortenText (text){
      if(text.length <= 50) {
        return text;
      }else{
        return text.substring(0, 47) + "...";
      }
    }

    function filterActive(data) {
      let toReturn = data.filter(function(item){
        return item.archived == false;
      }).map((item) => item);
      return toReturn;
    }

    function filterFavorites(data) {
      let toReturn = data.filter(function(item){
        return item.favorite == true;
      }).map((item) => item);
      return toReturn;
    }

    function filterReflections(data) {

      let toReturn = data.filter(function(item){
        //need to filter so that the archived ones are not here
        return item.reflection == true;
      }).map((item) => item);
      return toReturn;
    }

    function filterMementos(data, title){
      // console.log("title test");
      // console.log(title);
      if(title == "All"){
        return data;
        // return filterReflections(data);
        // should use this instead: to hide the archived visions
      }else{
        // console.log(title);
        let toReturn = data.filter(function(item){
          return item.title == title;
       }).map((item) => item);
       return toReturn;
      }
    }

    const nagivation = useNavigation();
    // console.log("feed items");
    // console.log(feedItems);

    if(filterMementos(feedItems, props.vision).length == 0) {
      return (
        <View>
          <Text>Vision is empty</Text>
        </View>
      );
    }else {
      //console.log(filterMementos(feedItems, props.vision));
      return (
        <FlatList
        data = {filterMementos(feedItems, props.vision)}
        inverted={true}
        renderItem = {({item}) => {
          if(item.reflection == false){
            return (
              <MementoThumbnail
               title = {item.title}
               caption = {item.caption}
               date = {item.date == null? "No Date Available" :item.date}
               color = {item.color}
               favorite = {item.favorite}
               media = {item.media}
            />
            );
          }else {
            return (
              <ReflectionThumbnail
               title = {item.title}
               caption = {item.caption}
               date = {item.date == null? "No Date Available" :item.date}
               color = {item.color}
               prompt = {item.prompt}
               favorite = {item.favorite}
              />
            );}
        }
      }
      />
    );

    }

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
    body: {
      fontFamily: 'Futura',
    },
    prompt: {
      fontWeight: 'bold',
      fontFamily: 'Futura',
    },
  });
