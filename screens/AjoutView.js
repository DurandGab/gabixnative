import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import Ajout from '../components/Ajout';


export default function AjoutView() {
   return(
    <View style={styles.container}>
    <Text>Ajoutez quelque chose a regarder </Text>
    <Ajout></Ajout>
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