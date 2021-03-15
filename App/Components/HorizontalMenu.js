import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from "react-native";
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
                            margin: 5,
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
        <View>
           <FlatList
              horizontal = {true}
              data={visions}
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
