import React from "react";
import { StyleSheet, Text, TextInput, ScrollView,Button, Image, FlatList, Picker, TouchableOpacity } from 'react-native';
import {useEffect, useState} from "react"
export default function Inscription(props) {
        const [prenom, setPrenom] = useState('');
        const [nom, setNom] = useState('');
        const [mail, setMail] = useState('');
        const [date, setDate] = useState('');
        const [mdp, setMdp] = useState('');
        const [img, setImg] = useState('');
    
        const handlerPress = () =>{
            props.navigation.navigate('Connexion')
        }

    const[ajoutUser, setAjoutUser]= useState({})
        const handleSubmit = () => {
          // Handle form submission logic here

          const data = {prenom:prenom, nom:nom, mail:mail, date_naiss:date, date_sortie:date,mdp:mdp , img_profil:img}
          console.log(data)

      fetch("https://gabix-films.herokuapp.com/public/api/identuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        setAjoutUser(data)
          props.navigation.navigate('Accueil')
          
      });
        }
      
        return (
            <ScrollView>
            <Text>Prenom</Text>
            <TextInput
              value={prenom}
              onChangeText={setPrenom}
              placeholder="Prenom"
              style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom:10 }}
            />
            <Text>Nom</Text>
            <TextInput
              value={nom}
              onChangeText={setNom}
              placeholder="Nom"
              style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom:10 }}
            />
            <Text>Mail</Text>
            <TextInput
              value={mail}
              onChangeText={setMail}
              placeholder="Mail"
              style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            />
            <Text>Date de naissance</Text>
            <TextInput
              value={date}
              onChangeText={setDate}
              placeholder="aaaa-mm-jj"
              style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            />
            <Text>Mot de passe</Text>
            <TextInput
            secureTextEntry={true}
              value={mdp}
              onChangeText={setMdp}
              placeholder="mot de passe"
              style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            />
            <Text>image profil</Text>
            <TextInput
              value={img}
              onChangeText={setImg}
              placeholder="url"
              style={{ borderWidth: 1, borderColor: 'gray',width:275, padding: 10, marginBottom:10 }}
            />
            
            <Button title="Inscription" onPress={handleSubmit} color='#5f9ea0'/>
            <TouchableOpacity onPress={handlerPress}>
                <Text style={{margin:10, width:250, textAlign:'center'}} >Déja un compte ? Connectez-vous</Text>
            </TouchableOpacity>
          </ScrollView>
        );
      };
  