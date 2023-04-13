import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import AjoutCritique from '../components/AjoutCritique';


export default function AjoutCritiqueView(props) {
   return(
    <View style={styles.container}>
    <Text style={styles.sous_titre}>Ajoutez une critique </Text>
    <AjoutCritique></AjoutCritique>
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