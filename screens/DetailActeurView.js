import { StyleSheet, Text, View, Button} from 'react-native';
import DetailActeur from "../components/DetailActeur"

export default function DetailActeurView(props){
  const paramIdActeur = props.route.params.id_acteur;
  console.log('toto' + paramIdActeur)
    return (
    <View style={styles.container}>
    <Text style={styles.sous_titre}>Détail</Text>
    <DetailActeur {...props}></DetailActeur>
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