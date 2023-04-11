import { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useEffect } from "react";

export default function FilmList(props) {
  const apiKey = "af1e1c8f8ad6efb5b326eabaffa38b8a";
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    apiKey +
    "&language=fr-FR&page=1&query=";

  const [listeFilms, setFilms] = useState([]);
  useEffect(() => {
    const fetchOptions = { method: "GET" };
    //const critere = "jardin";
    fetch(url + props.pcritere, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        setFilms(dataJSON.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.pcritere]);

  return (
    <FlatList
        data={listeFilms}
        keyExtractor={ (item) => item.id.toString() }
        renderItem={({item}) =>{
        return(
        
            <TouchableOpacity
            onPress={ ()=>props.navigation.navigate("Detail", {idFilm:item.id})}>
            <View style={styles.item}>
            <Image
            source={ { uri: "https://image.tmdb.org/t/p/w500/"+ item.poster_path}}
            style={styles.image}></Image>
            <Text>{item.title}</Text>
            </View>
            </TouchableOpacity>
        )
        }
        }
    />
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