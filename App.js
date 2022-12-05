// Libraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './screens/Accueil';
import Places from './screens/Places';

function App() {

    const Stack = createNativeStackNavigator();
    

    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={Accueil} />
            <Stack.Screen name="Lieux" component={Places} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;
