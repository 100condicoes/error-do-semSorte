import 'react-native-gesture-handler'
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicial from './Telas/Inicial';
import Localisador from './Telas/Localisador';
import Meteoro from './Telas/Meteoro';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicial' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name= "Inicial" component={Inicial}/>
        <Stack.Screen name= "Localisador" component={Localisador}/>
        <Stack.Screen name= "Meteoro" component={Meteoro}/>
      </Stack.Navigator>
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
