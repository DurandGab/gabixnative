import { StyleSheet, Text, View} from 'react-native';
import Connexion from "../components/Connexion"

export default function ConnexionView(props){
    return (
    <View style={styles.container}>
    <Text style={styles.sous_titre}>Connexion</Text>
    <Connexion {...props}></Connexion>
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