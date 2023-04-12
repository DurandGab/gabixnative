import { StyleSheet, Text, View} from 'react-native';
import Profil from "../components/Profil"

export default function ProfilView(props){
    return (
    <View style={styles.container}>
    <Text style={styles.sous_titre}>Mon profil</Text>
    {/* <Profil id= {paramIdFilm}></Profil> */}
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