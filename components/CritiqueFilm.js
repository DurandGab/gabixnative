import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

export default function CritiqueFilm(props){
    const url ="https://gabix-films.herokuapp.com/public/api/films/" + props.ptitre + "/critiques";
  const [critique, setCritique] = useState([]);
  useEffect(() => {
  const fetchOptions = { method: "GET" };
  //const critere = "jardin";
  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      setCritique(dataJSON);
      console.log(dataJSON)
    });
  }, [])
  return(
    <FlatList
        data={critique}
        keyExtractor={ (item) => item.titre.toString() }
        renderItem={({item}) =>{
        return(
    <View style={styles.card}>
        <Text style={styles.descr}>{item.nom} {item.prenom}</Text>
        <Text style={styles.title}>{item.note}/5</Text>
        <Text style={styles.title}>{item.commentaire}</Text>
    </View>
  )
        }}
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
    
        card: {
          backgroundColor: '#fff',
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#ccc',
          margin: 8,
          padding: 8,
        },
        image: {
          height: 400,
          width: 350,
          resizeMode: 'cover',
          marginBottom: 2,
        },
        title: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        description: {
          fontSize: 16,
          marginBottom: 2,
        },
        categorie: {
            fontSize: 14,
          },
          descr: {
            fontSize: 14,
            textAlign:"right"
          },
      

    item: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 30,
        borderRadius: 2,
        height: 140,
        flexDirection: 'row'
    },
    
  });