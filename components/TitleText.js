import { Text  , StyleSheet} from "react-native"

const TitleText = (props) => {
  return (
    <Text style={styles.title}>{props.text}</Text>
  )
}

export default TitleText

const styles=StyleSheet.create({

    title:{
        fontSize:18,
        fontWeight:'bold',
        color:"#ddb52f",
        textAlign:"center",
        borderWidth:2,
        borderColor:"#ddb52f",
        padding:12,
    },

    });