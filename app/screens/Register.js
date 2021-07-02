<script src="http://192.168.1.69:19002"></script>
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {Button} from '../components/Button.js';
import Header from '../components/Header.js';
import colors from '../config/colors.js';
import axios from 'axios';
import * as Analytics from 'expo-firebase-analytics';

function Register(props) {
Analytics.setCurrentScreen('Register');
const [username, setUsername] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()

function createUser() {
axios.post('http://192.168.1.69:3000/api/auth/signup', {
  user_id: 12345,  
  username: username,
  email: email,
  password: password,
  admin: false,
  createdat: Date.now(),
  updatedat: Date.now()
}).then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
}
)}

  return (
    <ScrollView>
  <View>
  <Header title="Create your account" />
  </View>
  <View style={styles.regform}>
<Text style={styles.inputTitle}>Username</Text>
<TextInput
    placeholderTextColor={colors.secondary}
    onChangeText={(text) => setUsername( text )}
    placeholder="Jonathan Smitherino"
    style={styles.textInput}
    />
<Text style={styles.inputTitle}>Email</Text>
<TextInput
    placeholderTextColor={colors.secondary}
    onChangeText={(text) => setEmail( text )}
    placeholder="you@example.com"
    style={styles.textInput}
    />
<Text style={styles.inputTitle}>Password</Text>
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
    onPress= {() =>{createUser()}}
    type="clear"> 
   <Text style = {styles.btnText}>Register now</Text>
</TouchableOpacity >
</View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
    btnText: {
        color: colors.primary,
        fontWeight: 'normal',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: "row",
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
    paddingBottom: 60,
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
    fontSize: 14,
    paddingBottom: 10,
    color: colors.secondary,
    alignSelf: 'stretch',
    alignItems: 'center',
    fontWeight: 'normal',
  }
});

export default Register;