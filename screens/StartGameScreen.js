import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import MyButton from "../components/MyButton";
function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setInteredNumber] = useState("");
  const numberInputHandler = (enteredText) => {
    setInteredNumber(enteredText);
  };
  const resetInputHandler=()=>{
    setInteredNumber('');
  };
  const confirmInputHandler = () => {

    const chosenNumber=parseInt(enteredNumber);

 if((isNaN(chosenNumber)) || chosenNumber <=0 || chosenNumber >99){
     Alert.alert("Invalid Number",'Number has to be a number b/w 1 and 99',[{text: 'okay',style: 'distructive',onPress: resetInputHandler}])
    return;
 }
  onPickNumber(chosenNumber);

  };
  return (
    <View style={styles.inputContainer}>
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
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 6,
    padding: 10,
    backgroundColor: "#3b021f",
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 120,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontWeight: "bold",
  },
  buttonsStyle: {
    marginTop: 10,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
