import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import MyButton from "../components/UI/MyButton";
import Colors from "../constants/colors";
import TitleText from "../components/UI/TitleText";
import Card from "../components/UI/card";
import InstructionText from "../components/UI/InstructionText";





function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setInteredNumber] = useState("");
  const numberInputHandler = (enteredText) => {
    setInteredNumber(enteredText);
  };
  const resetInputHandler = () => {
    setInteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be a number b/w 1 and 99", [
        { text: "okay", style: "distructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };
  return (
    <View style={styles.rootContainer}>
      <TitleText>Guess My Number</TitleText>
     <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        ></TextInput>
        <View style={styles.buttonsStyle}>
          <View style={styles.buttonContainer}>
            <MyButton onPress={resetInputHandler}>Reset</MyButton>
          </View>
          <View style={styles.buttonContainer}>
            <MyButton onPress={confirmInputHandler}>Start</MyButton>
          </View>
        </View>
        </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100, 
    alignItems: "center",
  },
  
  numberInput: {
    height: 50,
    width: 120,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: "bold",
  },
  buttonsStyle: {
    marginTop: 10,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
