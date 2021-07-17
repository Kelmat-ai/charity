<script src="http://192.168.1.69:19002"></script>
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import * as Analytics from 'expo-firebase-analytics';

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