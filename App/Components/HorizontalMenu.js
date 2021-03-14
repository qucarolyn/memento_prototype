import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableHighlight} from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function HorizontalMenu(props) {
    const [pressed, setPress] = useState(null);
    const visions = props.visions;

    const visionPressHandler = (props) => {
        setPress(props.title);
        console.log(props.title);
    };

    function Vision (props) {
        return (
            <View>
                <Button
                    backgroundColor= "green"
                    style = {{
                        backgroundColor: 'blue',
                        // backgroundColor: pressed == props.title ? props.color : "white",
                        color: pressed == props.title ? "white" : props.color,
                    }}
                    title = {props.title}
                    color={props.color}
                    onPress={props.onPress}
                />
            </View>
        );

    }

    return (
        <View>
           <FlatList
              horizontal = {true}
              data={visions}
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
