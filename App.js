<script src="http://192.168.56.1:19002"></script>
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, drawerContent } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Welcome from './app/screens/Welcome';
import SettingsScreen from './app/screens/Settings/Settings';
import Notifications from './app/screens/Settings/SettingsScreens/Notifications';
import ContactUs from './app/screens/Settings/SettingsScreens/ContactUs';
import EditDetails from './app/screens/Settings/SettingsScreens/EditDetails';
import TermsOfUse from './app/screens/Settings/SettingsScreens/TermsOfUse';
import PrivacyPolicy from './app/screens/Settings/SettingsScreens/PrivacyPolicy';
import Profile from './app/screens/Profile';
import Favourites from './app/screens/Favourites';
import Search from './app/components/Search';
import Register from './app/screens/Register';
import Login from './app/screens/Login';
import Logout from './app/screens/Logout';
import HomeScreen from './app/screens/Home';
import colors from './app/config/colors.js';
import ProfileListingScreen from './app/screens/ProfileListing';
import { Provider } from 'react-redux';
import Store from './app/redux/store';
import * as SecureStore from 'expo-secure-store';
import * as Analytics from 'expo-firebase-analytics';
import { HeaderBackButton } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { List } from 'react-native-paper';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function GoBack() {
  const navigation = useNavigation();
  return (
    <HeaderBackButton
      onPress={() => {
        navigation.goBack();
      }}
    />
  )
}

function HomeStack() {
  const navigation = useNavigation();


  return (
    <Stack.Navigator initialRouteName="Home" headerMode="screen">
      <Stack.Screen name="Home" component={HomeScreen}
        options={{
          headerBackImage: () => <Ionicons name={"md-menu"} color={colors.secondary} size={30} onPress={() => navigation.toggleDrawer()} />,
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen}
        options={{
          headerBackImage: () =>
            <Ionicons name={"md-menu"} size={30} onPress={() => navigation.toggleDrawer()} />,
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen name="Search" component={Search}
        options={{
          headerBackImage: () =>
            <Ionicons name={"md-menu"}
              size={30} onPress={() => navigation.toggleDrawer()} />,
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
            />
          )
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome}
        options={{ headerShown: false }} />
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props, { navigation }) {

  const { state, ...rest } = props;
  const newState = { ...state }
  //copy from state before applying any filter. do not change original state

  newState.routes = newState.routes.filter(item =>
    item.name !== 'Create your account').filter(item =>
      item.name !== 'Login').filter(item =>
        item.name !== 'Welcome') //routes to be excluded

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.drawerLogo} source={require('./app/assets/Logo_red2.png')} />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList state={newState} {...rest}
        //  {...props} 
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  )
}

function DrawerStack() {

  return (
    <Drawer.Navigator initialRouteName="Welcome" drawerStyle={styles.drawerNavigator}
      drawerContentOptions={{
        activeTintColor: colors.primary,
        activeBackgroundColor: colors.fourth
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeStack}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-home"
              size={23}
              color={focused ? colors.primary : colors.tertiary}
            />)
        }}
      />
      <Drawer.Screen name="Search" component={Search}
        options={{
          headerShown: true,
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-search"
              size={23}
              color={focused ? colors.primary : colors.tertiary}
            />),
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen}
        options={{
          headerShown: true,
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-settings"
              size={23}
              color={focused ? colors.primary : colors.tertiary}
            />),
        }}
      />
      <Drawer.Screen name="Logout" component={Logout}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-log-out"
              size={23}
              color={focused ? colors.primary : colors.tertiary}
            />),
        }}
      />
      <Drawer.Screen name="Create your account" component={Register}
        options={{
          swipeEnabled: false,
          headerShown: true,
          headerLeft: (props) => (
            <GoBack />
          ),
        }}
      />
      <Drawer.Screen name="Login" component={Login}
        options={{
          swipeEnabled: false,
          headerShown: true,
          headerLeft: (props) => (
            <GoBack />
          ),
        }}
      />
      <Drawer.Screen name="Welcome" component={Welcome}
        options={{
          swipeEnabled: false,
        }}
      />
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
  },
  drawerNavigator: {
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  drawerLogo: {
    marginTop: 45,
    marginBottom: -30,
    width: '80%',
    height: '80%',
    height: 70,
  },
  logoContainer: {
    alignItems: "center",
  },
  icons: {
    color: colors.secondary,
    backgroundColor: colors.secondary
  },
  hiddenDrawers: {
    width: "0%",
  }
});