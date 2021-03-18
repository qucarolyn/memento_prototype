import React from "react";
import { View, Text, StyleSheet, Button, FlatList, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';


export default function MementoDetailScreen(props) {
    let navigation = useNavigation();
    let memento = props.route.params;
    let media = memento.media;
    console.log(memento);
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>

        <View style={{
          marginTop: 20,
          marginBottom: 20,
          borderRadius: 10,
          backgroundColor: 'white',
          width: 320,
        }}>
          <View style={{
            backgroundColor: memento.color,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 10,
          }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.headerText}>{memento.title}</Text>
              <FontAwesome name="heart" size={16} color="white" />
            </View>
            <Text style={styles.headerText2}>{memento.date}</Text>
          </View>

          <View style={{
            borderRadius: 10,
            padding: 10,
          }}>
            <Text style={styles.prompt}>{memento.prompt}</Text>
            <Text style={styles.caption}>{memento.caption}</Text>
            <FlatList
              //horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              data={media}
              renderItem={ ({item, index}) => (
              <Image source={item} 
                key = {index}
                style={{
                  //width:600,
                  height:100,
                  borderWidth:1,
                  //borderColor:'#d35647',
                  //resizeMode:'contain',
                  margin:4
               }}></Image>
             )}/>
          </View>

        </View>

        <Button
          //onPress={() => navigation.navigate("MementoScreen")}
          title="Edit this Memento"
        />

      </View>

    );
}

const styles = StyleSheet.create({
    headerText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      fontFamily: 'Futura'
    },
    headerText2: {
      color: 'white',
      fontFamily: 'Futura'
    },
    prompt: {
      fontWeight: 'bold',
      fontFamily: 'Futura'
    },
    caption: {
      color: 'black',
      fontFamily: 'Futura'
    }
  });
