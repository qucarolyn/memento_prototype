import React from "react";
import { View, Text } from "react-native";

export default function ReflectScreen({navigation}) {
    return (
        <View>
          <Text>Reflect</Text>
          <Text>What have you enjoyed most about the last week?></Text>
          <TouchableOpacity>
            <Text>I want a new prompt</Text>
          </TouchableOpacity>
          <KeyboardAvoidingView style={{alignItems: 'center', margin: 50,}}>
            <TextInput
              style={styles.textinput}
              onChangeText={(text) => setSearchText(text)}
            />
          </KeyboardAvoidingView>
        </View>
    );
}
