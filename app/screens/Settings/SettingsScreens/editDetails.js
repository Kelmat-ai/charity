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
import { Snackbar } from 'react-native-paper';
import Constants from 'expo-constants';


export default function EditDetails() {
  Analytics.setCurrentScreen('EditDetails');
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();
  const [visible, setVisible] = React.useState(false);
  const [snackText, setsnackText] = useState();

const onToggleSnackBar = () => setVisible(!visible);

const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    checkUserDetails();
  }, []);

  const checkUserDetails = async () => {
    try {
      const credentials = await SecureStore.getItemAsync('userDetails');
      if (credentials) {
        console.log('Credentials found')
        ParsedCredentials = JSON.parse(credentials)
      } else {
        console.log('No credentials found')
      }
    } catch (error) {
      console.log('User Details Error: ', error);
    }
  }


  const changePassword = async () => {
    const baseUrl = Constants.manifest.extra.BASEURL
    const basePort = Constants.manifest.extra.BASEPORT
    const credentials = await SecureStore.getItemAsync('userDetails');
    ParsedCredentials = JSON.parse(credentials);
    console.log(ParsedCredentials);

    if ((newPassword != undefined && confirmNewPassword != undefined) && (newPassword == confirmNewPassword)) {
    // for development: axios.put(`${baseUrl}:${basePort}/api/auth/changepassword`,
      axios.put(`${baseUrl}/api/auth/changepassword`,
     { 
      email: ParsedCredentials.email,
      password: ParsedCredentials.password,
      newPassword: newPassword
    }
    ).then((response) => {
      console.log(response);
      if (response.status=='200') {
        setsnackText('Password changed successfully');
        onToggleSnackBar()}
    }, (error) => {
      console.log(error.response);
      if (error.response.status=='401') {
      setsnackText('Your new and old passwords must be different');
      onToggleSnackBar()}
    }
    )
  } else {
    setsnackText('Passwords do not match');
    onToggleSnackBar()
    }

  }

  return (
    <ScrollView style={styles.biggestContainer}>
  <View style={styles.regform}>
<Text style={styles.inputTitle}>New Password *</Text>
<TextInput
    placeholderTextColor={colors.secondary}
    onChangeText= {(text) => setNewPassword( text )}
    placeholder="********"
    secureTextEntry={true}
    style={styles.textInput}
    />

<Text style={styles.inputTitle}>Confirm Password *</Text>
<TextInput
    placeholderTextColor={colors.secondary}
    onChangeText={(text) => {setConfirmNewPassword( text )} }
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
