import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from './screens/Settings/Settings.js'
import HomeScreen from './screens/Home.js'
import FavouritesScreen from './screens/Favourites.js'

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function SliderMenu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Favourites" component={FavouritesScreen} />
        <Drawer.Screen name="Search" component={FavouritesScreen} />
        <Drawer.Screen name="Logout" component={FavouritesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}