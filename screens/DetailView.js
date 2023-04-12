import { StyleSheet, Text, View} from 'react-native';
import DetailFilm from "../components/DetailFilm"

export default function DetailView(props){
  const paramIdFilm = props.route.params.titre;
  console.log(paramIdFilm)
    return (
    <View style={styles.container}>
    <Text style={styles.sous_titre}>Détail</Text>
    <DetailFilm titre= {paramIdFilm}></DetailFilm>
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