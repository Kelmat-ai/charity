<script src="http://192.168.1.69:19002"></script>
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import * as Analytics from 'expo-firebase-analytics';

const removeCredentials = async () => {
    try {
      await SecureStore.deleteItemAsync('userDetails');
    } catch (error) {
      console.log(error);
    }
  };

// export default 
function Logout() {
  Analytics.setCurrentScreen('Logout');
  const navigation = useNavigation();

  const removeCreds = async () => {
    try {
      console.log('b4 secure store')
      await SecureStore.deleteItemAsync('userDetails');
      console.log('after secure store')
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  removeCreds();

  return null

  }

  export {removeCredentials, Logout};