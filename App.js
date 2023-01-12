import { StyleSheet,ImageBackground , SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';


export default function App() {
  const [userNumber,setUserNumber]=useState(null);
  const pickedNumberHandler=(pickedNumber)=>{
    setUserNumber(pickedNumber);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;
  if(userNumber){
    screen=<GameScreen/>
  }
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
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
