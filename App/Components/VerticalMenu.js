import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function VerticalMenu(props) {
    const [pressed, setPress] = useState(null);
    const visions = props.visions;
    const archive = props.archiveFunction;
    //const visionCallback = props.setVisionCallback;
    const visionPressHandler = (props) => {
        setPress(props.title);
        console.log(props.title);
        //archive(props)
        //visionCallback(props.title); 
    };

    function Vision (props) {
        return (
            <View>
                <TouchableOpacity
                    style = {{
                        backgroundColor: pressed == props.title ? "white" : "white",
                        borderRadius: 15,
                        margin: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 5,
                    }}
                    onPress={props.onPress}
                >
                    <Text
                        style = {{
                            margin: 5,
                            fontSize: 20,
                            fontWeight: pressed == props.title ? 'bold' : 'light',
                            color: pressed == props.title ? props.color : "black",
                            paddingVertical: 8,
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
              horizontal = {false}
              data={visions}
              style={{padding: 20}}
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
