import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, TouchableOpacity} from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';


export default function DrawerScreen({route, navigation}) {
    return(
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
              onPress={() => navigation.navigate("VisionDrawer")} //, {updateVision: {addVision}})}
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
                        Visions
                    </Text>

            </TouchableOpacity>
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
              onPress={() => navigation.navigate("FAQ")}
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
                        Help
                    </Text>

            </TouchableOpacity>
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
              onPress={() => navigation.navigate("FAQ")}
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
                        FAQ
                    </Text>

            </TouchableOpacity>

        </View>
    );
}
