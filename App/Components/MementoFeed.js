import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function MementoFeed(props) {
    const Mementos = [
      {
        title: "Stay healthy",
        type: "memento",
        color: '#FFAD80',
        date: "1/21/2020",
        caption: 'today I went on a run! Was very very fun'
      },
      {
        title: "Learn ukelele",
        type: "memento",
        color: '#83E39E',
        date: "1/19/2020",
        caption: 'Learned a brand new chord progression!',
      },
      {
        title: "Stay healthy",
        type: "reflection",
        backgroundColor: '#3E71AE',
        date: "1/19/2020",
        prompt: "what are you most proud of?",
        caption: 'I am most proud of myself for keeping up with this vision consistently',
      },
    ];

    function Memento (props) {
      return (
        <TouchableOpacity
          style={{
          backgroundColor: '#E5E5E5',
          borderRadius: 20,
          //padding: 10,
          margin: 5,
          }}
          >

          <View
            style = {{
            backgroundColor: props.color,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 7,
            paddingLeft: 10,
            flexDirection: 'row',
            }}>

            <Text style={styles.headerText}>
                {props.type == "reflection" ? "reflection":props.title
                //not working right now...
                }
            </Text>
            <Text style={styles.headerText2}> - </Text>
            <Text style={styles.headerText2}>{props.date}</Text>
          </View>

          <View style={{padding: 10}}>
          <Text>{props.caption}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    function filterMementos(data, title){
      console.log("title test");
      console.log(title);
      if(title == "All"){
        //console.log("success");
        return data;
      }else{
        console.log(title); 
        let toReturn = data.filter(function(item){
          return item.title == title;
       }).map((item) => item);
       return toReturn;


        console.log(title);
        // need to iterate through the array and find the ones with the proper title


      }
    }

    const nagivation = useNavigation();
    return (

    <SafeAreaView>
        {/* <Text>{props.vision}</Text> */}
        <FlatList
          data = {filterMementos(Mementos, props.vision)}//need to filter mementos based on the click (callback function)
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
    headerText: {
      color: 'white',
      fontWeight: 'bold',
    },
    headerText2: {
      color: 'white',
    }
  });
