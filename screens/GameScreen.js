import { View, StyleSheet, Alert, Text ,FlatList} from "react-native";
import TitleText from "../components/UI/TitleText";
import { useState, useEffect } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import MyButton from "../components/UI/MyButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ inputNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, inputNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === inputNumber) {
      onGameOver();
    }
  }, [currentGuess, inputNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prevGuess) => [newRndNumber, ...prevGuess]);
  };
  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>

      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower</InstructionText>
        <View style={styles.buttonRow}>
          <View style={styles.buttonContainer}>
            <MyButton onPress={nextGuessHandler.bind(this, "lower")}>
              +
            </MyButton>
            <MyButton onPress={nextGuessHandler.bind(this, "higher")}>
              -
            </MyButton>
          </View>
        </View>
      </Card>
      <View>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}> {guessRound} </Text>
        ))} */}
        <FlatList data={guessRounds} renderItem={(itemData)=><Text>{itemData.item}</Text>}
        keyExtractor={(item,index)=>item}></FlatList>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  buttonRow: {
    marginTop: 10,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
