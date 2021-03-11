import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

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

    function VisionItem (props) {
        return (
            <View> 
                <Button
                    title = {props.title}
                    color={props.color}
                /> 
            </View>
        );

    }
    return (
        <View>
            <VisionItem
                title = "be happy"
                color = "red"
            />

            <VisionItem
                title = "learn ukelele"
                color = "blue"
            />
        </View>
    );
}

const styles = StyleSheet.create({

  });