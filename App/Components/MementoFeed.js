import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView} from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function MementoFeed(props) {

    const nagivation = useNavigation();
    return (
    <SafeAreaView> 
        <Text> {props.vision.title} </Text>
    </SafeAreaView>
    
  );
    
}

const styles = StyleSheet.create({

  });