<script src="http://192.168.56.1:19002"></script>
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, drawerContent } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './app/screens/Welcome';
import SettingsScreen from './app/screens/Settings/Settings';
import Header from './app/components/Header';
import Notifications from './app/screens/Settings/SettingsScreens/Notifications';
import ContactUs from './app/screens/Settings/SettingsScreens/ContactUs';
import EditDetails from './app/screens/Settings/SettingsScreens/EditDetails';
// import Drawer from './app/Drawer';
import {Menu, GoBack, Favourite, Filter, SearchIcon} from './app/components/Menu';
import Profile from './app/screens/Profile';
import Favourites from './app/screens/Favourites';
import Search from './app/components/Search';
import Register from './app/screens/Register';
import Login from './app/screens/Login';
import Logout from './app/screens/Logout';
import HomeScreen from './app/screens/Home';
import Button from './app/components/Button';
import TouchableOpacity from 'react-native';
import ProfileListingScreen from './app/screens/ProfileListing';
import {Provider} from 'react-redux';
import Store from './app/redux/store'
import * as Analytics from 'expo-firebase-analytics';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>12345</Text>
      <Text onPress={() => navigation.navigate("Favourites")} title="Go back home">1234567</Text>
    </View>
  );
}

function HomeStack () {
  return (
    <Stack.Navigator  initialRouteName="Home">
      <Stack.Screen name = "Home" component={HomeScreen}/>
      <Stack.Screen name = "Favourites" component={Favourites}/>
      <Stack.Screen name = "Settings" component={SettingsScreen}/>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileListing" component={ProfileListingScreen} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Logout" component={Logout} />
      <Stack.Screen name="Notifications" component={Notifications}/>
    </Stack.Navigator>
    );
    }
  
  function DrawerStack (){
    return(
    <Drawer.Navigator  initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Favourites" component={Favourites} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Search" component={Search} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
    );
      }

 export default function App() {
  Analytics.setCurrentScreen('Home menu');

    return (
      <Provider store={Store}>
      <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});