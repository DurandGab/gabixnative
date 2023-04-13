import React from "react";
import { StyleSheet, Text, TextInput, View,Button, Image, FlatList } from 'react-native';
import {useEffect, useState} from "react"
import Slider from '@react-native-community/slider';
export default function AjoutCritique(props) {
        const [note, setNote] = useState(0);
        const [commentaire, setCommentaire] = useState('');
        const [ajoutCritique, setAjoutCritique] = useState({})
      
        const handleSubmit = (event) => {
            event.preventDefault();
            const data={id_utilisateur:6, commentaire:commentaire, note:note}
            console.log(data)
          // Handle form submission logic here
          fetch("https://gabix-films.herokuapp.com/public/api/films/" + props.ptitre + "/critique", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAjoutCritique(data)

        // window.location.href="/login"
      });

          
        }
      
        return (
            <View>
            <Text>Note : {note}/5</Text>
            <Slider
          step={1}
          minimumValue={1}
          maximumValue={5}
          value={note}
          onValueChange={note => setNote(note)}
          minimumTrackTintColor="#5f9ea0"
          maximumTrackTintColor="#5f9ea0"
          thumbTintColor="#5f9ea0"
          style={{width:275, padding: 10, marginBottom:10 }}
        />
        
            {/* <TextInput
              value={note}
              onChangeText={setNote}
              placeholder="Note/5"
              style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom:10 }}
            /> */}
            <Text>Comentaire</Text>
            <TextInput
            h={5}
              value={commentaire}
              onChangeText={setCommentaire}
              placeholder="Ce film est bien car..."
              style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            />

            <Button title="Ajouter" onPress={handleSubmit} color='#5f9ea0'/>
          </View>
        );
      };

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        sous_titre:{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom:5,
          },
      
      });