import React from 'react';
import SliderMenu from './../Drawer.js'
import { Ionicons } from "@expo/vector-icons";
import colors from './../config/colors.js';
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Constants from "expo-constants";
import Drawer from './../Drawer.js';
import {
    StyleSheet,
    Text,
    View,
    Switch,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    SectionList
  } from "react-native";

const openDrawer = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Drawer />
        </View>
      );
}


function Menu( {navigation} ) {
    return (
<Ionicons name={"md-menu"} size={30} onPress={openDrawer} style={styles.container}/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: Constants.statusBarHeight,
        color: colors.secondary,
        margin: 15
    }
})

export default Menu;