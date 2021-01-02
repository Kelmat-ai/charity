import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './app/screens/Welcome';
import Register from './app/screens/Register';
import Login from './app/screens/Login';
import SettingsScreen from './app/screens/Settings/Settings';
import Header from './app/components/Header';
import Notifications from './app/screens/Settings/SettingsScreens/Notifications';
import ContactUs from './app/screens/Settings/SettingsScreens/ContactUs';
import EditDetails from './app/screens/Settings/SettingsScreens/EditDetails';
import Drawer from './app/Drawer';
import Menu from './app/components/Menu';
import Profile from './app/screens/Profile';

export default function App() {

  return (
    <View style={styles.container}>
    <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
