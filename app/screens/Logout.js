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
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

export default function Logout() {

    const removeCredentials = async () => {
        try {
          const credentials = await Keychain.resetGenericPassword();
          } catch(error) {
          console.log('Keychain could not be accessed!', error);
        }
      }

    function CustomDrawerContent(props) {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => removeCredentials(username,password)} />
          </DrawerContentScrollView>
        );
      }
   }