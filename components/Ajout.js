import React from "react";
import { StyleSheet, Text, TextInput, View,Button, Image, FlatList, Picker } from 'react-native';
import {useEffect, useState} from "react"
export default function Ajout() {
        const [titre, setTitre] = useState('');
        const [age_min, setAge] = useState('');
        const [realisateur, setRealisateur] = useState('');
        const [affiche, setAffiche] = useState('');
        const [date, setDate] = useState('');
        const [synopsis, setSynopsis] = useState('');
        const [categorie, setCategorie] = useState('');
        const [genre, setGenre] = useState('');
        const [pays, setPays] = useState('');
      
        const handleSubmit = () => {
          // Handle form submission logic here
          console.log('Titre:', titre);
          console.log('Age_min:', age_min);
          console.log('Realisateur:', realisateur);
          console.log('Affiche:', affiche);
          console.log('Date:', date);
          console.log('Synopsis:', synopsis);
          console.log('Categorie:', categorie);
          console.log('Genre:', genre);
          console.log('Pays:', pays);
        }
      
        return (
            <View>
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
              placeholder="aaaa-mm-dd"
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
                selectedValue={categorie}
                onValueChange={(itemValue) => setCategorie(itemValue)}
                style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
            </Picker>

            <Text>Genre</Text>
            <Picker
                selectedValue={genre}
                onValueChange={(itemValue) => setGenre(itemValue)}
                style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
            </Picker>

            <Text>Pays d'origine</Text>
            <Picker
                selectedValue={pays}
                onValueChange={(itemValue) => setPays(itemValue)}
                style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
            </Picker>

            <Button title="Ajouter" onPress={handleSubmit} color='#5f9ea0'/>
          </View>
        );
      };
  