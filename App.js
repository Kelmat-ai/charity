import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './app/screens/Welcome';
import RegForm from './app/screens/RegForm';
import Login from './app/screens/Login';
import SettingsScreen from './app/screens/Settings/Settings';
import Header from './app/components/Header';

export default function App() {

  return (
    <View style={styles.container}>
    <SettingsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
