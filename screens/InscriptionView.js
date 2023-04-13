import { StyleSheet, Text, View} from 'react-native';
import Inscription from "../components/Inscription"

export default function InscriptionView(props){
    return (
    <View style={styles.container}>
    <Text style={styles.sous_titre}>Inscription</Text>
    <Inscription {...props}></Inscription>
    </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sous_titre:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:5,
      },
  
  });