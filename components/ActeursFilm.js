
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

export default function ActeursFilm(props){
  
    const url ="https://gabix-films.herokuapp.com/public/api/films/" + props.ptitre + "/acteurs";
  const [acteur, setActeur] = useState([]);
  useEffect(() => {
  const fetchOptions = { method: "GET" };
  //const critere = "jardin";
  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      setActeur(dataJSON);
      console.log(dataJSON)
    });
  }, [])
  return(
    <FlatList
        data={acteur}
        keyExtractor={ (item) => item.titre.toString() }
        renderItem={({item}) =>{
        return(
        
            <TouchableOpacity
            onPress={ ()=>props.navigation.navigate("DetailActeur", {id_acteur : item.id_acteur})}>
            <View style={{ width: 250, height: 350, flexDirection: 'row',marginHorizontal:50, marginBottom: 24 }}>
                <Image
                style={{ width: 250, height: 350, position: 'absolute' }}
                source={ { uri:item.img_acteur}}
                />
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
                    <Text style={{ color: 'white', fontSize: 20, margin: 6 }}>{item.nom}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
        }
        }
        /> 
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    item: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 30,
        borderRadius: 2,
        height: 140,
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 120,
        margin: 5,
        backgroundColor: 'gray'
    },
    title: {
        fontSize: 20
    },
  });