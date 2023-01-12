import React from "react";
import { Text, View,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function LogItems({ roundNumber, guess }) {
  return (
    <View>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess:{guess}</Text>
    </View>
  );
}

export default LogItems;
const styles=StyleSheet.create({
    listItem:{
        
    },
});
