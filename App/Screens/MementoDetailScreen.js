import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function MementoDetailScreen(props) {
    let navigation = useNavigation(); 
    let memento = props.route.params;
    console.log(memento);
    return (
        <View>
          <Text>{memento.title}</Text>
          <Text>{memento.caption}</Text>
        </View>
    );
}