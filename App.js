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
import TermsOfUse from './app/screens/Settings/SettingsScreens/TermsOfUse';
import PrivacyPolicy from './app/screens/Settings/SettingsScreens/PrivacyPolicy';
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
// import { Button } from 'react-native-paper';
import TouchableOpacity from 'react-native';
import ProfileListingScreen from './app/screens/ProfileListing';
import {Provider} from 'react-redux';
import Store from './app/redux/store';
import * as SecureStore from 'expo-secure-store';
import * as Analytics from 'expo-firebase-analytics';
import { useEffect } from 'react';
import { HeaderBackButton } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack () {
  const navigation = useNavigation();
  return (
    <Stack.Navigator  initialRouteName="Home">
      <Stack.Screen name = "Home" component={HomeScreen}
                          options={{
                            headerBackImage: () => <Ionicons name={"md-menu"} size={30} onPress={() => navigation.toggleDrawer()}/>,
                            headerLeft: (props) => (
                              <HeaderBackButton
                                {...props}
                              />
                            ),
                          }}
      />
      <Stack.Screen name = "Favourites" component={Favourites}/>
      <Stack.Screen name = "Settings" component={SettingsScreen}
                          options={{
                            headerBackImage: () => <Ionicons name={"md-menu"} size={30} onPress={() => navigation.toggleDrawer()}/>,
                            headerLeft: (props) => (
                              <HeaderBackButton
                                {...props}
                              />
                            ),
                          }}
      />
      <Stack.Screen name="Search" component={Search}
                          options={{
                            headerBackImage: () => <Ionicons name={"md-menu"} size={30} onPress={() => navigation.toggleDrawer()}/>,
                            headerLeft: (props) => (
                              <HeaderBackButton
                                {...props}
                              />
                            ),
                          }}
      />
      <Stack.Screen name="Charity Profile" component={Profile} />
      <Stack.Screen name="Results" component={ProfileListingScreen} />
      <Stack.Screen name="Contact Us" component={ContactUs} />
      <Stack.Screen name="Change Your Password" component={EditDetails} 
                    options={{
                      headerLeft: (props) => (
                        <HeaderBackButton
                          {...props}
                          onPress={() => {
                            navigation.goBack();
                          }}
                        />
                      ),
                    }}
      />
      <Stack.Screen name="Terms Of Use" component={TermsOfUse} 
                          options={{
                            headerLeft: (props) => (
                              <HeaderBackButton
                                {...props}
                                onPress={() => {
                                  navigation.goBack();
                                }}
                              />
                            ),
                          }}
      />
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicy}
                          options={{
                            headerLeft: (props) => (
                              <HeaderBackButton
                                {...props}
                                onPress={() => {
                                  navigation.goBack();
                                }}
                              />
                            ),
                          }}
      />
      <Stack.Screen name="Create your account" component={Register} />
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Logout" component={Logout} />
      <Stack.Screen name="Notifications" component={Notifications}/>
    </Stack.Navigator>
    );
    }
  
  function DrawerStack (){
    return(
    <Drawer.Navigator  initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Settings" component={SettingsScreen} 
          options={{headerShown: true}}
      />
      <Stack.Screen name="Search" component={Search}
          options={{headerShown: true}}
      />
      <Stack.Screen name="Create your account" component={Register} 
      options={{headerShown: true}}
      />
      <Stack.Screen name="Login" component={Login}
      options={{headerShown: true}}
      // options={{
      //     swipeEnabled: false,
      //   }}
      />
      <Stack.Screen name="Logout" component={Logout} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Drawer.Navigator>
    );
  }

 export default function App() {
  const credentials = SecureStore.getItemAsync('userDetails');
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