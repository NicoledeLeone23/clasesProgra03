import React, {Component} from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Home from "../screens/Home";
import Profile from "../screens/Profile";


const Tab = createBottomTabNavigator();

function HomeMenu (){
    

    return(
                    <Tab.Navigator screenOptions={{headerShown: false}}>
                        <Tab.Screen name="Home" component={ Home }  options={ 
	                    { tabBarIcon: () => <MaterialCommunityIcons name="home-assistant" size={24} color="black" />}} />
                        <Tab.Screen name="Profile" component={ Profile }  options={ 
	                    { tabBarIcon: () => <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" /> }} />
                    </Tab.Navigator>

        
    )
}

export default HomeMenu;