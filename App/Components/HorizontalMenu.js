import React from "react";
import { StyleSheet, View, Text, Button, FlatList} from "react-native";
import { useNavigation } from '@react-navigation/native';

const visions= [
    {
        title: "be happy",
        color: 'red',
    },
    {
        title: "Learn ukelele",
        color: 'green',
    }
]

export default function HorizontalMenu(props) {

    const renderVisionTitle = (props) => {
        return <Vision props = {props} />;
      };



    function Vision (props) {
        return (
            <View>
                <Button
                    title = {visions[1].title}
                    color={visions[1].color}
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
