import React from "react";
import { StyleSheet, Text, ScrollView, Image, FlatList, Button} from 'react-native';
import {useEffect, useState} from "react"
import ActeursFilm from "./ActeursFilm"
import CritiqueFilm from "./CritiqueFilm"
export default function DetailFilm(props) {
  
  const url =
    "https://gabix-films.herokuapp.com/public/api/films/"+props.titre;
    console.log(url)

    const [film, setFilms] = useState({});
  useEffect(() => {
    const fetchOptions = { method: "GET" };
    //const critere = "jardin";
    fetch(url,fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        setFilms(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

    <ScrollView style={styles.card}>
        <Image source={ { uri: film.logo}} style={styles.image} />
        <Text style={styles.descr}>{film.duree}</Text>
        <Text style={styles.title}>{film.titre}</Text>
        <Text style={styles.descr}>{film.nom_pays}</Text>
        <Text style={styles.categorie}>{film.nom_categorie} - {film.nom_genre}</Text>
        <Text style={styles.descr}>+ {film.age_min}ans</Text>
        <Text style={styles.description}>Réalisateur : {film.realisateur}</Text>
        <Text style={styles.description}>Sortie le : {film.date_sortie}</Text>
        <Text style={styles.description}>Synopsis : {film.synopsis}</Text>

      <Text style={styles.description}>Acteurs :</Text>
      <ActeursFilm ptitre={props.titre}></ActeursFilm>
      <Text style={styles.description}>Critiques :</Text>
      <CritiqueFilm ptitre={props.titre}></CritiqueFilm>
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