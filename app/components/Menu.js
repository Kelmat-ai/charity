import React from 'react';
import SliderMenu from './../Drawer.js'
import { Ionicons } from "@expo/vector-icons";
import colors from './../config/colors.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function Menu(props) {
    return (
<Ionicons name={"md-menu"} size={200} color={colors.secondary}/>
    );
}

export default Menu;