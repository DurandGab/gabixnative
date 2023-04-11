import { StyleSheet, Text, View} from 'react-native';
import Profil from "../components/Profil"

export default function ProfilView(props){
    return (
    <View style={styles.container}>
    <Text>profil</Text>
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
  
  });