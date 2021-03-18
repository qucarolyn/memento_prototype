import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function VerticalMenu(props) {
    const [pressed, setPress] = useState(null);
    const visions = props.visions;
    const archive = (vision) => {props.archiveFunction(vision)};

    //const visionCallback = props.setVisionCallback;
    const visionPressHandler = (props) => {
        setPress(props.title);
        console.log(props.title);
        archive(props);
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
                            fontWeight: 'light',
                            color: !props.archived ? props.color : "black",
                            paddingVertical: 8,
                            fontFamily: 'Futura',
                        }}
                    >
                        {props.title}
                    </Text>

                </TouchableOpacity>


            </View>
        );

    }

    return (
        visions.length !== 0 ?
        <View>
           <FlatList
              horizontal = {false}
              data={visions}
              style={{padding: 20}}
              renderItem = {({item}) => (
                <Vision
                    color = {item.color}
                    title = {item.title}
                    archived = {item.archived}
                    onPress = {() => visionPressHandler(item)}
                />
              )}
          />
        </View>
        :
        <View alignItems="center">
           <Text style = {{
                            margin: 5,
                            fontSize: 20,
                            color: "gray",
                            paddingVertical: 8,
                            fontWeight: 'light',
                            fontFamily: 'Futura',
                        }}>no visions here yet</Text>
        </View>

    );
}

const styles = StyleSheet.create({

});
