import { StyleSheet,ImageBackground , SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
  const [userNumber,setUserNumber]=useState(null);
  const [gameIsOver,setGameIsOver]=useState(true);
  const[guessRounds,setGuessRounds]=useState(0);
  const pickedNumberHandler=(pickedNumber)=>{
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const startNewGameHandler=()=>{
    setUserNumber(null);
    setGuessRounds(0);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;
  if(userNumber){
    screen=<GameScreen inputNumber={userNumber}  onGameOver={()=>{ setGameIsOver(true);}}/>
  }
  
  if(gameIsOver && userNumber){
    screen=<GameOverScreen roundsNumber={guessRounds} userInput={userNumber} onStartNewGame={startNewGameHandler}/>
  }

 
  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
    <ImageBackground style={styles.rootScreen1} source={require("./assets/image/background.jpeg")} resizeMode="cover" imageStyle={styles.backgroundImage}>
    <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
     
     </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
   flex: 1,
  },
  rootScreen1: {
    flex: 1,
   },
   backgroundImage:{
    opacity:0.45,
   }
});
