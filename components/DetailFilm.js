import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import {useEffect, useState} from "react"
export default function DetailFilm(props) {
  const apiKey = "af1e1c8f8ad6efb5b326eabaffa38b8a";
  const url =
    "https://api.themoviedb.org/3/movie/"+props.id+"?api_key=" +apiKey+ 
    "&language=fr-FR&page=1&query=";

    const [film, setFilms] = useState({});
  useEffect(() => {
    const fetchOptions = { method: "GET" };
    //const critere = "jardin";
    fetch(url + fetchOptions)
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
    <View style={styles.item}>
      <Image
        source={ { uri: "https://image.tmdb.org/t/p/w500/"+ film.poster_path}}
        style={styles.image}></Image>
      <Text>{film.title}</Text>
    </View>
  );
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