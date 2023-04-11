import { StyleSheet, Text, View, Button, Image} from 'react-native';
import FilmList from "../components/FilmList"
export default function ListeView(props){
    
  const critere = props.route.params.critere;

return (
    <View style={styles.container}>
    <Text>Liste</Text>
    <FilmList pcritere={critere} {...props}></FilmList>
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