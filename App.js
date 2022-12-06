// Libraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './components/BottomTabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Accueil from './screens/Accueil';
import Places from './screens/Places';
import Contact from './screens/Contact';

function App() {

    // const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();
    

    return (
    // <NavigationContainer>
    //     <Tabs/>
    // </NavigationContainer>
    <NavigationContainer >
        <Drawer.Navigator screenOptions={{drawerActiveTintColor:'#006341',headerTintColor:'#006341'}}>
            <Drawer.Screen name="Accueil" component={Accueil}/>
            <Drawer.Screen name="Lieux" component={Places} />
            <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
    </NavigationContainer>
    
    );
}

export default App;
