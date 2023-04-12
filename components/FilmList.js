import { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useEffect } from "react";

export default function FilmList(props) {
 
  const url =
    "https://gabix-films.herokuapp.com/public/api/films?search=";

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
        setFilms(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.pcritere]);

  return (
    <FlatList
        data={listeFilms}
        keyExtractor={ (item) => item.titre.toString() }
        renderItem={({item}) =>{
        return(
        
            <TouchableOpacity
            onPress={ ()=>props.navigation.navigate("Detail", {titre:item.titre})}>
            <View style={{ width: 250, height: 350, flexDirection: 'row', margin: 24 }}>
                <Image
                style={{ width: 250, height: 350, position: 'absolute' }}
                source={ { uri:item.logo}}
                />
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
                    <Text style={{ color: 'white', fontSize: 20, margin: 6 }}>{item.titre}</Text>
                    <Text style={{ color: 'white', margin: 6 }}>{item.nom_categorie} - {item.nom_genre}</Text>
                </View>
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