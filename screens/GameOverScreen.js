import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import TitleText from "../components/UI/TitleText";
import MyButton from "../components/UI/MyButton";

function GameOverScreen({ roundsNumber, userInput, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <TitleText>Hurray! Victory </TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/success.jpeg")}
        />
      </View>
      <Text style={styles.summeryText}>
        Your Phone took <Text style={styles.highlightText}>{roundsNumber}</Text> guess to
        find <Text style={styles.highlightText}>{userInput}</Text>
      </Text>
      <MyButton onPress={onStartNewGame} >Start New Game</MyButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summeryText: {
    fontSize: 18,
    color: "white",
    marginBottom: 50,
  },
  highlightText: {
    color: Colors.accent500,
    fontSize: 30,
  },
});
