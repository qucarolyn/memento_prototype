import React from "react";
import { View, Text, Button } from "react-native";

export default function HorizontalMenu() {
    return (
        <View>

          <Button
            onPress={() => navigation.navigate("VisionAdd")}
            title="Click Here to Create a Vision"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
    );
}