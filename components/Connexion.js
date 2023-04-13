import React from "react";
import { StyleSheet, Text, TextInput, ScrollView,Button, Image, FlatList, Picker, TouchableOpacity } from 'react-native';
import {useEffect, useState} from "react"
export default function Inscription(props) {

        const [mail, setMail] = useState('');
        const [mdp, setMdp] = useState('');
        const [errorMessage, setErrorMessage] = useState(null)
    const handlerPress = () =>{
        props.navigation.navigate('Inscription')
    }
        

    const[connectUser, setConnectUser]= useState({})
        const handleSubmit = () => {
          // Handle form submission logic here

          const data = {mail:mail,mdp:mdp}
          console.log(data)

      fetch("https://gabix-films.herokuapp.com/public/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        if(data.status === 1){
            setErrorMessage(null)
            console.log(data.user)
            props.navigation.navigate('Accueil')
        }else{
            setErrorMessage('Mail incorrect ou mauvais mot de passe, veuillez rééssayez')
            console.log('Mail incorrect ou mauvais mot de passe, veuillez rééssayez')
        }
        //setConnectUser(data)
          
      });
        }
      
        return (
            <ScrollView>
            {errorMessage && <Text style={{color: 'red', margin:10, width:250, textAlign:'center'}}>{errorMessage}</Text>}
            <Text>Mail</Text>
            <TextInput
              value={mail}
              onChangeText={setMail}
              placeholder="Mail"
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
            <Button title="Connexion" onPress={handleSubmit} color='#5f9ea0'/>
            <TouchableOpacity onPress={handlerPress}>
                <Text style={{margin:10, width:250, textAlign:'center'}} >Pas de compte ? Inscrivez vous</Text>
            </TouchableOpacity>
          </ScrollView>
        );
      };
  