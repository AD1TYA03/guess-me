import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import MyButton from "../components/UI/MyButton";
import Colors from "../constants/colors";
import TitleText from "../components/UI/TitleText";
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
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter A Number</Text>
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
      </View>
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
  inputContainer: {
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 6,
    padding: 10,
    backgroundColor: Colors.primary800,
    justifyContent: "center",
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
