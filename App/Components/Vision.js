import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";


export default function Vision(props) {
    const nagivation = useNavigation();
    return (
    <View> 
        <Button
            title = {props.title}
            color={props.color}
        /> 
    </View>
    
  );
    
}

const styles = StyleSheet.create({

  });