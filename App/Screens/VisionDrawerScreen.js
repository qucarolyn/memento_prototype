import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, TouchableOpacity} from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import VerticalMenu from '../Components/VerticalMenu.js';
//work on actually getting the data structure rather than defining it here, may not have to for prototype
var visions= [
    {
        title: "All",
        color: 'grey',
        archived: false,
      },
    
      // {
      //   title: "Be happy",
      //   color: 'red',
      // },
      {
        title: "Learn ukelele",
        color: '#83E39E',
        archived: false,
      },
      {
        title: "Spend time with fam",
        color: '#80C9FF',
        archived: true,
      },
      {
       title: "Stay healthy",
       color: '#FFAD80',
       archived: false,
      }
    ];
    var archived = visions.filter(vision => vision.archived);
    var active = visions.filter(vision => !vision.archived)
export default function VisionDrawerScreen({route, navigation}) {
    const addVision = (vision) => {
        visions.push(vision);
    }
    const setVisionArchived = (vision) => {
        var newVisions = visions.filter(currVision => currVision.title !== vision.title)
        vision.archived = !vision.archived;
        newVisions.push(vision);
        visions = newVisions;
    }
    return(
        <SafeAreaView>
        <View style={{display: 'flex', flexDirection: 'column'}}>
        <TouchableOpacity
                    style = {{
                        backgroundColor: '#80C9FF', //replace color
                        borderRadius: 25,
                        margin: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 5,
                        marginHorizontal: 25,
                    }}
                    onPress={() => navigation.navigate("VisionAdd", {updateVision: {addVision}})}
                >
                    <Text
                        style = {{
                            margin: 5,
                            fontSize: 20,
                            color: "white",
                            paddingVertical: 8,
                        }}
                    >
                        Add a Vision +
                    </Text>

            </TouchableOpacity>
            <View style={{alignItems: "center"}}>
                <Text style={{fontSize: 24, marginVertical: 10}}>Active visions</Text>
            </View>
            <View>
                <VerticalMenu
                    visions={active}
                    archiveFunction={setVisionArchived}
                />
            </View>
            <View style={{alignItems: "center"}}>
                <Text style={{fontSize: 24, marginVertical: 10}}>Memory box</Text>
            </View>
            <View>
                <VerticalMenu
                    visions={archived}
                />
            </View>

        </View>
        </SafeAreaView>
    );
}