import { StyleSheet, Text, View} from 'react-native';
import Favori from "../components/Favori"

export default function FavoriView(props){
    return (
    <View style={styles.container}>
    <Text style={styles.sous_titre}>Mes favoris</Text>
    <Favori></Favori>
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