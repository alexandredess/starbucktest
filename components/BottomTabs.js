import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accueil from "../screens/Accueil";
import Places from "../screens/Places";
import Contact from "../screens/Contact";

const Tab = createBottomTabNavigator();


export default function BottomNav() {

    const accueil = "Accueil";
    const places = "Lieux";
    const contact = "Contact";
    //JSX
    return (
      
        <Tab.Navigator
        //options d'écran
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Accueil') {
            iconName = 'home';
          } else if (route.name === 'Lieux') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Contact'){
            iconName = 'at-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#006341',
        tabBarInactiveTintColor: 'gray',
      })}
      >
          <Tab.Screen name={accueil} component={Accueil} />
          <Tab.Screen name={places} component={Places} />
          <Tab.Screen name={contact} component={Contact} /> 
        </Tab.Navigator>
      
    );
  }