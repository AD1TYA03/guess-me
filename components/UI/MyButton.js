import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function MyButton({ children, onPress  }) {
  return (
    <View style={styles.buttonOuterContainer} >  
      <Pressable style={({pressed}) => pressed?[styles.buttonContainer,styles.pressed]: styles.buttonContainer} onPress={onPress} android_ripple={{ color: Colors.primary600 }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default MyButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
      overflow: 'hidden',
    },
  buttonContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingHorizontal: 16,
    margin: 4,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold", 
    fontSize: "16px",
    color: "white",
  },
  pressed:{
    opacity: 0.75,

  },
});
