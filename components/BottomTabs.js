import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accueil from "../screens/Accueil";
import Places from "../screens/Places";

const Tab = createBottomTabNavigator();


export default function BottomNav() {

    const accueil = "Accueil";
    const places = "Lieux";
    return (
      
        <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Accueil') {
            iconName = 'home';
          } else if (route.name === 'Lieux') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
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
          {/* <Tab.Screen name={restaurantName} component={Restaurant} /> */}
        </Tab.Navigator>
      
    );
  }