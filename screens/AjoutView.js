import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import Ajout from '../components/Ajout';


export default function AjoutView(props) {
   return(
    <View style={styles.container}>
    <Text style={styles.sous_titre}>Ajoutez quelque chose a regarder </Text>
    <Ajout userid={1} {...props}></Ajout>
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