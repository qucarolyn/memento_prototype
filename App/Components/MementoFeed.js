import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function MementoFeed(props) {
    const Mementos = [
      {
        title: "Be happy",
        color: "red", 
        // date: "1/21/2020", 
        caption: 'today I went on a run! Was very very fun'
      },
      {
        title: "Learn ukelele",
        color: "green", 
        date: "1/19/2020", 
        caption: 'Learned a brand new chord progression!',
      }, 
      {
        title: "Reflection",
        color: "blue", 
        date: "1/19/2020", 
        prompt: "what are you most proud of?",
        caption: 'I am most proud of myself for keeping up with this vision consistently',
      },
    ];

    function Memento (props) {
      console.log(props.color);
      return (
        <TouchableOpacity
          style={{
          backgroundColor: props.color,
        }}
        >
          <Text>{props.title}</Text>
          <Text>{props.date}</Text>
          <Text>{props.caption}</Text>
        </TouchableOpacity>
      );
    }

    function filterMementos(data, title){
      if(title == "All"){
        //console.log("success");
        return data;
      }else{
        console.log(title);
        // need to iterate through the array and find the ones with the proper title 


      }
    }

    const nagivation = useNavigation();
    return (

    <SafeAreaView> 
        <FlatList 
          data = {filterMementos(Mementos, "All")}//need to filter mementos based on the click (callback function)
          renderItem = {({item}) => (
            <Memento 
                title = {item.title}
                caption = {item.caption}
                date = {item.date == null? "No Date Available" :item.date}
                color = {item.color}
            />
          )}
        />
    </SafeAreaView>
    
  );
    
}

const styles = StyleSheet.create({

  });