import { StyleSheet, Text, View, Button, Image, StatusBar, TextInput} from 'react-native';
import {useState} from "react"

export default function AccueilView(props){

  const [text, onChangeText] = useState('');

return(
    <View style={styles.container}>
    <Text style={styles.titre}>Gabix-Films</Text>
    <Text style={styles.sous_titre}>Qu'est ce qu'on regarde ce soir ?</Text>
    
    <StatusBar style="auto" />

    <TextInput
 style={styles.input}
 onChangeText={onChangeText}
 value={text}
 placeholder="Un titre ?"
 />
 <Button 
    onPress={ () => props.navigation.navigate("Films",{critere : text})} title="Rechercher" color='#5f9ea0'>
    </Button>

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

  titre:{
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom:5,
  },
  sous_titre:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:50,
  },
  input:{
    textAlign:'center',
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical:10,
    paddingHorizontal:30,
    marginBottom:10
  },
});