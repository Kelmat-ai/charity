<script src="http://192.168.1.69:19002"></script>
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {Button} from '../components/Button.js';
import Header from '../components/Header.js';
import colors from '../config/colors.js';
import axios from 'axios';
import * as Analytics from 'expo-firebase-analytics';
import { Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

function Register(props) {
Analytics.setCurrentScreen('Register');
const [username, setUsername] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const [visible, setVisible] = useState(false);
const [snackText, setsnackText] = useState();
const [editable, setEditable] = useState(false);
const navigation = useNavigation();

const onToggleSnackBar = () => setVisible(!visible);

const onDismissSnackBar = () => setVisible(false);

useEffect(() => {
  setEditable(true);
}, []);

function createUser() {
const baseUrl = Constants.manifest.extra.BASEURL
const basePort = Constants.manifest.extra.BASEPORT
axios.post(`${baseUrl}:${basePort}/api/auth/signup`, {
  user_id: Math.floor(Math.random() * 1000000),  
  username: username,
  email: email,
  password: password,
  admin: false,
  createdat: Date.now(),
  updatedat: Date.now()
}).then((response) => {
  console.log(response);
  if (response.status == '200') {
    setsnackText('Welcome to BetterGiving!');
    onToggleSnackBar()
    function goHome() {
    navigation.navigate("Home")
  }
  setTimeout(goHome, 1500)
}
}, (error) => {
  console.log(error);
  setsnackText('An error has occurred. Please try again later');
  onToggleSnackBar();
}
)}

function fieldValidation() {
 if (username == undefined || email == undefined || password == undefined) {
  setsnackText('All fields are required');
  onToggleSnackBar();
 } 
}

  return (
    <ScrollView style={styles.biggestContainer}>
  <View style={styles.regform}>
<Text style={styles.inputTitle}>Username *</Text>
<TextInput
    placeholderTextColor={colors.secondary}
    onChangeText={(text) => setUsername( text )}
    editable={editable}
    autoCorrect={false}
    placeholder="Your username here"
    style={styles.textInput}
    />
<Text style={styles.inputTitle}>Email *</Text>
<TextInput
    placeholderTextColor={colors.secondary}
    editable={editable}
    onChangeText={(text) => setEmail( text.toLowerCase() )}
    autoCorrect={false}
    placeholder="you@example.com"
    style={styles.textInput}
    />
<Text style={styles.inputTitle}>Password *</Text>
<TextInput
    placeholderTextColor={colors.secondary}
    onChangeText={(text) => setPassword( text )}
    placeholder="********"
    secureTextEntry={true}
    style={styles.textInput}
    />
</View>
<View style = {styles.container}>
<TouchableOpacity
    style = {styles.button}
    onPress= {() =>{ fieldValidation();createUser()}}
    type="clear"> 
   <Text style = {styles.btnText}>Register now</Text>
</TouchableOpacity >
</View>

<View style={styles.containerSnack}>
      <Snackbar
        visible={visible}
        duration = {2500}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'OK',
          onPress: () => {
            onDismissSnackBar
          },
        }}
        >
        {snackText}
      </Snackbar>
    </View>

</ScrollView>
  );
}

const styles = StyleSheet.create({
    btnText: {
        color: colors.primary,
        fontWeight: 'normal',
    },
    biggestContainer: {
      backgroundColor: colors.primary,
      color: colors.secondary
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: "row",
},
  containerSnack: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: 100,
},
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingTop:15,
    paddingBottom:15,
    borderRadius:15,
    width: '80%',
    borderWidth: 1,
    borderColor: '#fff'
},
  regform: {
    alignSelf: 'stretch',
    flex: 1,
    width: '100%',
    backgroundColor: colors.primary,
    color: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    paddingTop: 40,
  },
  textInput: {
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 16,
    backgroundColor: colors.primary,
    alignSelf: 'stretch',
    color: 'black',
    height: 50,
    marginBottom: 20,
    borderColor: colors.tertiary,
    borderRadius:15,
    borderWidth: 1,
  },
  inputTitle: {
    fontSize: 16,
    paddingBottom: 10,
    color: colors.tertiary,
    alignSelf: 'stretch',
    fontWeight: 'bold',
    alignItems: 'center',
    fontWeight: 'normal',
  }
});

export default Register;