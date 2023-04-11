import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {useEffect, useState} from "react"
export default function Top10People() {
    const apiKey="af1e1c8f8ad6efb5b326eabaffa38b8a"
    const url =
    "https://api.themoviedb.org/3/person/popular?api_key=" +
    apiKey +
    "&language=fr-FR&page="
    
    const [page, setPage] = useState(1)

    const [listeTopPeople, setTopPeople] = useState([])
  useEffect(() => {
    getDatas()
  }, []);
  function getDatas(){
    let myHeaders= new Headers()
    myHeaders.append("Content_type", "application/JSON")
  const fetchOptions = { method: "PUT" };
    //const critere = "jardin";
    fetch(url + page, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        setTopPeople(dataJSON.results);
        let p = Number(page) + 1
        setPage(p)
      })
      .catch((error) => {
        console.log(error);
      });
    }
  return (
    <FlatList
        data={listeTopPeople}
        onEndReached={getDatas}
        keyExtractor={ (item) => item.id.toString() }
        renderItem={({item}) =>{
        return(
        
            
            <View style={styles.item}>
            <Image
            source={ { uri: " https://image.tmdb.org/t/p/w185"+ item.profile_path}}
            style={styles.image}></Image>
            <Text>{item.name}</Text>
            </View>
            
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