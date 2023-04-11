import { StyleSheet, Text, View} from 'react-native';
import DetailFilm from "../components/DetailFilm"

export default function DetailView(props){
  const paramIdFilm = props.route.params.idFilm;
    return (
    <View style={styles.container}>
    <Text>detail</Text>
    <DetailFilm id= {paramIdFilm}></DetailFilm>
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