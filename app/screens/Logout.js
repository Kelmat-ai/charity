<script src="http://192.168.1.69:19002"></script>
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../config/colors.js';
import Header from '../components/Header';
import Button from '../components/Button';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import * as Analytics from 'expo-firebase-analytics';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

export default function Logout() {
  Analytics.setCurrentScreen('Logout');
const navigation = useNavigation();

  const removeCredentials = async () => {
    try {
      await SecureStore.deleteItemAsync('userDetails');
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  removeCredentials();

  return null;
}
    // function CustomDrawerContent(props) {
    //     return (
    //       <DrawerContentScrollView {...props}>
    //         <DrawerItemList {...props} />
    //         <DrawerItem label="Logout" onPress={() => removeCredentials()} />
    //       </DrawerContentScrollView>
    //     );
    //   }
