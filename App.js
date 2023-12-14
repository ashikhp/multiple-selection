// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SelectionScreen from './SelectionScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Selection" component={SelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;