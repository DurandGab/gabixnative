import { StyleSheet, Text, View, Button, Image, StatusBar, TextInput} from 'react-native';
import {useState} from "react"

export default function AccueilView(props){

  const [text, onChangeText] = useState('');

return(
    <View style={styles.container}>
    <Text>Gabix-Films</Text>
    <Button
    onPress={ () => props.navigation.navigate("Films",{critere : text})} title="Rechercher un film">
    </Button>
    <StatusBar style="auto" />

    <TextInput
 style={styles.input}
 onChangeText={onChangeText}
 value={text}
 placeholder="citere de recherche"
 />

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

  images :{
    width:400,
    height:320
  }
});