import React from "react";
import { StyleSheet, View, Text, Button, FlatList} from "react-native";
import { useNavigation } from '@react-navigation/native';

visions= [
    {
        title: "be happy",
        color: "red",
    },
    {
        title: "learn ukelele",
        color: "green",
    }
]

export default function HorizontalMenu(props) {

    const renderVisionTitle = (props) => {
        return <Vision props = {props} />;
      };

      

    function Vision (props) {
        return (
            <View> 
                <Button
                    title = {visions[1].title}
                    color={props.color}
                /> 
            </View>
        );

    }
    return (
        <View>
             <FlatList
                data={visions}
                renderItem={renderVisionTitle}
            />
        </View>
    );
}

const styles = StyleSheet.create({

  });