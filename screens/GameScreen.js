import { Text, View, StyleSheet, Alert } from "react-native";
import TitleText from "../components/UI/TitleText";
import { useState, useEffect } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import MyButton from "../components/UI/MyButton";
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ inputNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, inputNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === inputNumber) {
      onGameOver();
    }
  }, [currentGuess, inputNumber, onGameOver]);

  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < inputNumber) ||
      (direction === "higher" && currentGuess > inputNumber)
    ) {
      Alert.alert("Don't Lie", "You know it's Wrong", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") maxBoundary = currentGuess;
    else minBoundary = currentGuess + 1;
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };
  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower</Text>
        <View>
          <MyButton onPress={nextGuessHandler.bind(this, "lower")}>+</MyButton>
          <MyButton onPress={nextGuessHandler.bind(this, "higher")}>-</MyButton>
        </View>
      </View>
      <View>{/* LOG Round */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
