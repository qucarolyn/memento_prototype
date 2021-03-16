import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { FontAwesome } from '@expo/vector-icons';
import MementoThumbnail from './MementoThumbnail.js';
import ReflectionThumbnail from './ReflectionThumbnail.js';


export default function MementoFeed(props) {
    let navigation = useNavigation();
    const MementosAndReflections = [
      {
        title: "Stay healthy",
        reflection: false,
        color: '#FFAD80',
        date: "1/21/2020",
        caption: 'today I went on a run! Was very very fun. Im trying to max out the character count but im not sure if it will work lets see how this goes!',
        favorite: true,
      },
      {
        title: "Learn ukelele",
        reflection: false,
        color: '#83E39E',
        date: "1/19/2020",
        caption: 'Learned a brand new chord progression!',
        favorite: true,
      },
      {
        title: "Stay healthy",
        reflection: true,
        color: '#FFAD80',
        date: "1/19/2020",
        prompt: "What are you most proud of?",
        caption: 'I am most proud of myself for keeping up with this vision consistently',
        favorite: false,
      },

      {
        title: "Spend time with fam",
        reflection: false,
        color: '#80C9FF',
        date: "1/19/2020",
        caption: 'Got lunch with mom and dad today! it was SO SO SO much fun! ',
        favorite: false,
      },

      {
        title: "Spend time with fam",
        reflection: false,
        color: '#80C9FF',
        date: "1/19/2020",
        caption: 'Family game night yeah-yuh!!! ',
        favorite: false,
      },

      {
        title: "Learn ukelele",
        reflection: false,
        color: '#83E39E',
        date: "1/19/2020",
        caption: 'Played in the dorm with my RAs Sarah and Theo today! turns out they also have been trying to learn!',
        favorite: true,
      },

      {
        title: "Learn ukelele",
        reflection: true,
        color: '#83E39E',
        date: "1/19/2020",
        prompt: "What are you most proud of?",
        caption: 'I am most proud of myself for keeping up with this vision consistently',
        favorite: true,
      },

      {
        title: "Spend time with fam",
        reflection: false,
        color: '#80C9FF',
        date: "1/19/2020",
        caption: 'Filler',
        favorite: false,
      },

      {
        title: "Spend time with fam",
        reflection: false,
        color: '#80C9FF',
        date: "1/19/2020",
        caption: 'Filler',
        favorite: false,
      },

    ];
    
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

    return (
      <FlatList
      data = {filterMementos(MementosAndReflections, props.vision)}//need to filter mementos based on the click (callback function)
      renderItem = {({item}) => {
        if(item.reflection == false){
          return (
            <MementoThumbnail
             title = {item.title}
             caption = {item.caption}
             date = {item.date == null? "No Date Available" :item.date}
             color = {item.color}
             favorite = {item.favorite}
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
