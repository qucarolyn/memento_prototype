import React from "react";
import { View, Text, Button } from "react-native";

visions: [
    {
        title: "be healthy",
        color: "red",
    },
    {
        title: "learn ukelele",
        color: "orange",
    }


]

export default function HorizontalMenu() {

    function visionItem (props) {
        return (
            <View> 
                <Button
                    title = {props.title}
                > 

                </Button>
                <Text>{props.title}</Text>
            </View>

        );

    }
    return (
        <View>
            <Text> 
                Be Happy
            </Text>
            <Text> 
                Vision 2
            </Text>
        </View>
    );
}