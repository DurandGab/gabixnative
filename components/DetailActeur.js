import React from "react";
import { StyleSheet, Text, ScrollView, Image, FlatList, Button} from 'react-native';
import {useEffect, useState} from "react"
import ActeursFilm from "./ActeursFilm"
import CritiqueFilm from "./CritiqueFilm"
export default function DetailActeur(props) {
  
  const url =
    "https://gabix-films.herokuapp.com/public/api/acteur/" +props.id_acteur;
    console.log(url)

    const [acteur, setActeur] = useState({});
  useEffect(() => {
    const fetchOptions = { method: "GET" };
    //const critere = "jardin";
    fetch(url,fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        setActeur(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

    <ScrollView style={styles.card}>
        <Image source={ { uri: acteur.img_acteur}} style={styles.image} />
        <Text style={styles.descr}>{acteur.nom}</Text>
        <Text style={styles.title}>{acteur.date_naiss}</Text>
        <Text style={styles.descr}>Bio :{acteur.biographie}</Text>
        <Text style={styles.categorie}>{acteur.nom_pays}</Text>

    </ScrollView>
  );
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