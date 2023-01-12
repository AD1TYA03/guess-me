import{Text ,View, StyleSheet }from 'react-native';
import TitleText from '../components/TitleText';

function GameScreen() {
  return (<View style={styles.screen}>
     <TitleText text="Opponent's Guess"/>
     {/* Guess */}
     <View>
        <Text>Higher or lower</Text>
        {/* +
        - */}
     </View>
     <View>
     {/* LOG Round */}
     </View>
  </View>
    
  )
}

export default GameScreen

const styles=StyleSheet.create({
screen:{
    flex:1,
    padding:12,

},

});