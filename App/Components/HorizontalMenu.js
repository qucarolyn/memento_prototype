import React from "react";
import { StyleSheet, View, Text, Button, FlatList} from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function HorizontalMenu(props) {
const visions = props.visions;
    const renderVisionTitle = (props) => {
        console.log(props);
        return <Vision color = {props.item.color} title = {props.item.title}/>;
      };



    function Vision (props) {
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
           <FlatList
           horizontal = {true}
              data={visions}
              renderItem={renderVisionTitle}
          />
        </View>
    );
}

const styles = StyleSheet.create({

  });
