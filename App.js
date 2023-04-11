import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccueilView from './screens/AccueilView'
import ListeView from './screens/ListeView'
import DetailView from './screens/DetailView';
import FavoriView from './screens/FavoriView';
import AjoutView from './screens/AjoutView';
import ProfilView from './screens/ProfilView';
const Stack = createNativeStackNavigator();
export default function App() {
  
  function FilmsScreen() {
 const Stack = createNativeStackNavigator();
 return ( 
 <Stack.Navigator>
 {/* la navigation doit se faire uniquement entre des View*/}
 <Stack.Screen name="Accueil" component={AccueilView} />
 <Stack.Screen name="Films" component={ListeView} />
 <Stack.Screen name="Detail" component={DetailView} />
 </Stack.Navigator>
 )}

 function AccueilScreen() {
  const StackAccueil = createNativeStackNavigator();
  return ( 
    <StackAccueil.Navigator>
    <StackAccueil.Screen name="Accueil" component={AccueilView} />
    </StackAccueil.Navigator>
  )
 }
 function AjoutScreen() {
  const StackAjout = createNativeStackNavigator();
  return ( 
    <StackAjout.Navigator>
    <StackAjout.Screen name="Ajout" component={AjoutView} />
    </StackAjout.Navigator>
  )
 }
 function FavoriScreen() {
  const StackFavori = createNativeStackNavigator();
  return ( 
    <StackFavori.Navigator>
    <StackFavori.Screen name="Favori" component={FavoriView} />
    </StackFavori.Navigator>
  )
 }
 function ProfilScreen() {
  const StackProfil = createNativeStackNavigator();
  return ( 
    <StackProfil.Navigator>
    <StackProfil.Screen name="Profil" component={ProfilView} />
    </StackProfil.Navigator>
  )
 }
 
 const Tab = createBottomTabNavigator();
    return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
    tabBarActiveTintColor: 'green',
    tabBarInactiveTintColor: 'gray',
    headerShown: false
    })}
    >
    <Tab.Screen
    name="Accueil"
    component={AccueilScreen}
    options={{
      tabBarIcon: ({size}) => {
        return (
          <Image
            style={{ width: size, height: size }}
            source={{
              uri:
                'https://cdn-icons-png.flaticon.com/512/1946/1946488.png',
            }}
          />
        );
      },
    }}

    />
    <Tab.Screen
    name="Ajout"
    component={AjoutScreen}
    options={{
      tabBarIcon: ({size}) => {
        return (
          <Image
            style={{ width: size, height: size }}
            source={{
              uri:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
          />
        );
      },
    }}
    />
    <Tab.Screen
    name="Favori"
    component={FavoriScreen}
    options={{
      tabBarIcon: ({size}) => {
        return (
          <Image
            style={{ width: size, height: size }}
            source={{
              uri:
                'https://cdn-icons-png.flaticon.com/512/142/142241.png',
            }}
          />
        );
      },
    }}
    />
    <Tab.Screen
    //
    name="Profil"
    component={ProfilScreen}
    options={{
      tabBarIcon: ({size}) => {
        return (
          <Image
            style={{ width: size, height: size }}
            source={{
              uri:
                'https://cdn-icons-png.flaticon.com/512/2734/2734847.png',
            }}
          />
        );
      },
    }}
    />
    
    </Tab.Navigator>
    </NavigationContainer>
   );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});