import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, TouchableOpacity, StyleSheet} from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';


export default function DrawerScreen({route, navigation}) {
    return(
    <View style={styles.container}>
        <Text style={styles.help}>
            Help
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#3E71AE',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      width: 150,
      padding: 5,
      margin: 5,
    },
    help: {
      color: 'white',
      fontFamily: 'Futura',
      fontSize: 20,
    }
  });
