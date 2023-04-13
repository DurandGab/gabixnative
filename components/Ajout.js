import React from "react";
import { StyleSheet, Text, TextInput, ScrollView,Button, Image, FlatList, Picker } from 'react-native';
import {useEffect, useState} from "react"
export default function Ajout(props) {
        const [titre, setTitre] = useState('');
        const [age_min, setAge] = useState('');
        const [realisateur, setRealisateur] = useState('');
        const [affiche, setAffiche] = useState('');
        const [date, setDate] = useState('');
        const [duree, setDuree] = useState('');
        const [synopsis, setSynopsis] = useState('');
        const [categories, setCategorie] = useState([]);
        const [selectedCategorie, setSelectedCategorie] = useState('');
        const handleChangeCat = (data) =>{
          console.log(data)
          setSelectedCategorie(data);
        }

        const [genres, setGenre] = useState([]);
        const [selectedGenre, setSelectedGenre] = useState('');
        const handlechangeGen = (data) =>{
          setSelectedGenre(data);
        }

        const [pays, setPays] = useState([]);
        const [selectedPays, setSelectedPays] = useState('');
        const handleChangePays = (data) =>{
          setSelectedPays(data);
        }
 
        const urlcat = "https://gabix-films.herokuapp.com/public/api/categories"

  useEffect(() => {
  const fetchOptions = { method: "GET" };
  //const critere = "jardin";
  fetch(urlcat , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      setCategorie(dataJSON);
      console.log(dataJSON)
    });
  }, [])

  const urlgen = "https://gabix-films.herokuapp.com/public/api/genres"


  useEffect(() => {
  const fetchOptions = { method: "GET" };
  //const critere = "jardin";
  fetch(urlgen , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      setGenre(dataJSON);
      console.log(dataJSON)
    });
  }, [])


  const urlpays ="https://gabix-films.herokuapp.com/public/api/pays"


  useEffect(() => {
  const fetchOptions = { method: "GET" };
  //const critere = "jardin";
  fetch(urlpays , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      setPays(dataJSON);
      console.log(dataJSON)
    });
  }, [])

    const[ajoutFilm, setAjoutFilm]= useState({})
        const handleSubmit = () => {
          // Handle form submission logic here

          const data = {titre:titre, age_min:age_min, realisateur:realisateur, logo:affiche, date_sortie:date,duree:duree , synopsis:synopsis, id_categorie:selectedCategorie, id_genre:selectedGenre, id_pays:selectedPays}
          data.id_utilisateur=props.userid
          console.log(data)

      fetch("https://gabix-films.herokuapp.com/public/api/film/ajout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        setAjoutFilm(data)
          props.navigation.navigate('Accueil')
          
      });

          console.log('Titre:', titre);
          console.log('Age_min:', age_min);
          console.log('Realisateur:', realisateur);
          console.log('Affiche:', affiche);
          console.log('Date:', date);
          console.log('Synopsis:', synopsis);
          console.log('Categorie:', categories);
          console.log('Genre:', genres);
          console.log('Pays:', pays);
        }
      
        return (
            <ScrollView>
            <Text>Titre</Text>
            <TextInput
              value={titre}
              onChangeText={setTitre}
              placeholder="titre"
              style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom:10 }}
            />
            <Text>Age minimum</Text>
            <TextInput
              value={age_min}
              onChangeText={setAge}
              placeholder="age min"
              style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom:10 }}
            />
            <Text>Réalisateur</Text>
            <TextInput
              value={realisateur}
              onChangeText={setRealisateur}
              placeholder="réalisateur"
              style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            />
            <Text>Affiche</Text>
            <TextInput
              value={affiche}
              onChangeText={setAffiche}
              placeholder="lien affiche"
              style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            />
            <Text>Date de sortie</Text>
            <TextInput
              value={date}
              onChangeText={setDate}
              placeholder="Date de sortie (aaaa-mm-jj)"
              style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            />
            <Text>Durée</Text>
            <TextInput
              value={duree}
              onChangeText={setDuree}
              placeholder="durée (hh:mm:dd)"
              style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            />
            <Text>Synopsis</Text>
            <TextInput
              value={synopsis}
              onChangeText={setSynopsis}
              placeholder="synopsis"
              style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            />
            <Text>Catégorie</Text>
            <Picker
                selectedValue={selectedCategorie}
                onValueChange={handleChangeCat}
                style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            >
              {categories.map((categorie) => (
                    <Picker.Item key={categorie.id_categorie} label={categorie.nom_categorie} value={categorie.id_categorie}/>
                 ))}
            </Picker>

            <Text>Genre</Text>
            <Picker
                selectedValue={selectedGenre}
                onValueChange={handlechangeGen}
                style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            >
                {genres.map((genre) => (
                    <Picker.Item key={genre.id_genre} label={genre.nom_genre} value={genre.id_genre}/>
                    
                    
                 ))}
            </Picker>

            <Text>Pays d'origine</Text>
            <Picker
                selectedValue={selectedPays}
                onValueChange={handleChangePays}
                style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            >
                {pays.map((p) => (
                    <Picker.Item key={p.id_pays} label={p.nom_pays} value={p.id_pays}/>
                    
                    
                 ))}
            </Picker>

            <Button title="Ajouter" onPress={handleSubmit} color='#5f9ea0'/>
          </ScrollView>
        );
      };
  