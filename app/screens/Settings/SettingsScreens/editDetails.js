<script src="http://192.168.1.69:19002"></script>
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../../../config/colors.js';
import Header from '../../../components/Header';
import {Button} from '../../../components/Button';
import { GoBack } from '../../../components/Menu.js';
import * as Analytics from 'expo-firebase-analytics';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';


export default function EditDetails() {
  Analytics.setCurrentScreen('EditDetails');
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  useEffect(() => {
    checkUserDetails();
  }, []);

  const checkUserDetails = async () => {
    try {
      const credentials = await SecureStore.getItemAsync('userDetails');
      if (credentials) {
        ParsedCredentials = JSON.parse(credentials)
      } else {
        console.log('No credentials found')
      }
    } catch (error) {
      console.log('User Details Error: ', error);
    }
  }


  const changePassword = async () => {
    const credentials = await SecureStore.getItemAsync('userDetails');
    ParsedCredentials = JSON.parse(credentials);
    console.log(ParsedCredentials);
    axios.put('http://192.168.1.69:3000/api/auth/changepassword',
     { 
      username: ParsedCredentials.username,
      password: ParsedCredentials.password,
      newPassword: newPassword
    }
    ).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error.response);
    }
    )
  }

  return (
    <ScrollView>
  <View>
  <Header title="Your account details" />
  <GoBack />
  </View>
  <View style={styles.regform}>
{/* <Text style={styles.inputTitle}>Name</Text>
<TextInput
    placeholderTextColor={colors.secondary}
    placeholder="Jonathan Smitherino"
    style={styles.textInput}
    />
<Text style={styles.inputTitle}>Email</Text>
<TextInput
    placeholderTextColor={colors.secondary}
    placeholder="you@example.com"
    style={styles.textInput}
    /> */}
<Text style={styles.inputTitle}>New Password</Text>
<TextInput
    placeholderTextColor={colors.secondary}
    onChangeText={(text) => setNewPassword( text )}
    placeholder="********"
    secureTextEntry={true}
    style={styles.textInput}
    />
</View>

<View style = {styles.container}>
<TouchableOpacity
    style = {styles.button}
    onPress= {() =>{changePassword()}}
    type="clear"> 
   <Text style = {styles.btnText}>
     Save
   </Text>
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
