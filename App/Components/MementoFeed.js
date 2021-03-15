import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ListItem } from "react-native-elements/dist/list/ListItem";



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
        prompt: "what are you most proud of?",
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
        prompt: "what are you most proud of?",
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

    function ReflectionThumbnail (props) {
        return (
          <TouchableOpacity
            style={{
            backgroundColor: '#E5E5E5',
            borderRadius: 20,
            //padding: 10,
            margin: 5,
            }}
            onPress={() => navigation.navigate("MementoDetail", props)}
            >
  
            <View
              style = {{
              backgroundColor: props.color,

              // backgroundColor: '#3E71AE',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 7,
              paddingLeft: 10,
              flexDirection: 'row',
              }}>
  
              <Text style={styles.headerText}>{"Reflection"}</Text>
              <Text style={styles.headerText2}> - </Text>
              <Text style={styles.headerText2}>{props.date}</Text>
            </View>
  
            <View style={{padding: 10}}>
              <Text>{props.title}</Text>
              <Text>{props.prompt}</Text>
              <Text>{shortenText(props.caption)}</Text>
            </View>
          </TouchableOpacity>
        );

    }
    function MementoThumbnail (props) {
      return (
        <TouchableOpacity
          style={{
          backgroundColor: '#E5E5E5',
          borderRadius: 20,
          //padding: 10,
          margin: 5,
          }}
          onPress={() => navigation.navigate("MementoDetail", props)}
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

            <Text style={styles.headerText}>{props.title}</Text>
            <Text style={styles.headerText2}> - </Text>
            <Text style={styles.headerText2}>{props.date}</Text>
          </View>

          <View style={{padding: 10}}>
          <Text>{shortenText(props.caption)}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    function shortenText (text){
      if(text.length <= 50) {
        return text;
      }else{
        return text.substring(0, 47) + "...";
      }
    }


    function filterFavorites(data) {
      let toReturn = data.filter(function(item){
        return item.favorite == true;
      }).map((item) => item);
      return toReturn;
    }

    function filterReflections(data) {
      let toReturn = data.filter(function(item){
        return item.reflection == true;
      }).map((item) => item);
      return toReturn;
    }

    function filterMementos(data, title){
      console.log("title test");
      console.log(title);
      if(title == "All"){
        return data;
      }else{
        console.log(title); 
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
    },
    headerText2: {
      color: 'white',
    }
  });
