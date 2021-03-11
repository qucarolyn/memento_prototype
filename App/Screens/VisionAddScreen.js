import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

export default function HomeFeedScreen({navigation}) {
    return (
        <View>
          <View>
            <Text>Enter a title</Text>
          </View>
          <View>
            <Text>Choose a color</Text>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'red',
            }}/>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'orange',
            }}/>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'yellow',
            }}/>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'green',
            }}/>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'blue',
            }}/>
            <TouchableOpacity style={{
              height: 30, width: 30, borderRadius: 15, margin: 5,
              backgroundColor: 'purple',
            }}/>
            </View>
          </View>

          <Button
            title="Finish"
            accessibilityLabel="Click Here to Publish Vision"
          />
        </View>
    );
}
