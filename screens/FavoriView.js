import { StyleSheet, Text, View} from 'react-native';
import Favori from "../components/Favori"

export default function FavoriView(props){
    return (
    <View style={styles.container}>
    <Text>favori</Text>
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
  
  });