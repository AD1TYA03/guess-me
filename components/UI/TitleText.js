import { Text  , StyleSheet} from "react-native"
import Colors from "../../constants/colors"

const TitleText = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default TitleText

const styles=StyleSheet.create({

    title:{
        fontSize:18,
        fontWeight:'bold',
        color:"white",
        textAlign:"center",
        borderWidth:2,
        borderColor:Colors.accent500,
        padding:12,
    },

    });