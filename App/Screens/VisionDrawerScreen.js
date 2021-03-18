import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, TouchableOpacity, ScrollView} from "react-native";
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
    const [update, setUpdate] = useState(0);
    const addVision = (vision) => {
        visions.push(vision);
        archived = visions.filter(vision => vision.archived);
        active = visions.filter(vision => !vision.archived);
    }
    const setVisionArchived = (vision) => {
        var newVisions = visions.filter(currVision => currVision.title !== vision.title);
        //console.log(newVisions)
        console.log("Vision to be (un) archived: " + vision.title);
        console.log("Before: ")
        console.log(vision);
        console.log("After: ")
        var newVision = vision
        newVision.archived = !vision.archived;
        newVisions.push(newVision);
        console.log(newVision);
        visions = newVisions;
        archived = newVisions.filter(vision => vision.archived);
        active = newVisions.filter(vision => !vision.archived);
        setUpdate(archived.length);
    }
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                <TouchableOpacity
                    style = {{
                        backgroundColor: '#3E71AE',
                        borderRadius: 25,
                        margin: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 25,
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
                                    fontFamily: 'Futura',
                                }}
                            >
                                Add a Vision
                            </Text>

                    </TouchableOpacity>

                    <View style={{alignItems: "center"}}>
                        <Text style={{fontSize: 24, marginTop: 20, fontFamily: 'Futura',}}>Active Visions</Text>
                    </View>

                    <View>
                        <VerticalMenu
                            visions={active}
                            archiveFunction={setVisionArchived}
                        />
                    </View>

                    <View style={{alignItems: "center"}}>
                        <Text style={{fontSize: 24, marginTop: 20, fontFamily: 'Futura',}}>Archived Visions</Text>
                    </View>
                    <View>
                        <VerticalMenu
                            visions={archived}
                            archiveFunction={setVisionArchived}
                        />
                    </View>
                    <TouchableOpacity
                    style = {{
                        backgroundColor: '#3E71AE',
                        borderRadius: 25,
                        margin: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 25,
                        marginHorizontal: 25,
                    }}
                    onPress={() => navigation.navigate("HomeFeed")}
                    >
                            <Text
                                style = {{
                                    margin: 5,
                                    fontSize: 20,
                                    color: "white",
                                    paddingVertical: 8,
                                    fontFamily: 'Futura',
                                }}
                            >
                                Home
                            </Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
