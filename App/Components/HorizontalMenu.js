import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import VisionAddScreen  from './App/Screens/VisionAddScreen.js';


export default function HorizontalMenu(props) {
    const [pressed, setPress] = useState(null);
    const visions = props.visions;
    const visionCallback = props.setVisionCallback;
    const visionPressHandler = (props) => {
        setPress(props.title);
        console.log(props.title);
        visionCallback(props.title);
    };

    function filterActive(data) {
        let toReturn = data.filter(function(item){
          return item.archived == false;
        }).map((item) => item);
        return toReturn;
      }

    function Vision (props) {
        return (
            <View>
                <TouchableOpacity
                    style = {{
                        backgroundColor: pressed == props.title ? props.color : "white",
                        borderRadius: 15,
                        margin: 2,
                    }}
                    onPress={props.onPress}
                >
                    <Text
                        style = {{
                            marginLeft: 10,
                            marginRight: 10,
                            margin: 5,
                            fontSize: 16,
                            color: pressed == props.title ? "white" : props.color,
                        }}
                    >
                        {props.title}
                    </Text>

                </TouchableOpacity>


            </View>
        );

    }

    return (
        <View >

           <FlatList
              horizontal = {true}
              data={filterActive(visions)}
              style={{padding: 10}}
              renderItem = {({item}) => (
                <Vision
                    color = {item.color}
                    title = {item.title}
                    onPress = {() => visionPressHandler(item)}
                />
              )}
          />
        </View>
    );
}

const styles = StyleSheet.create({

});
