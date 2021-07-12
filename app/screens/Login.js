<script src="http://192.168.1.69:19002"></script>
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../config/colors.js';
import Header from '../components/Header';
import Button from '../components/Button';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import * as Analytics from 'expo-firebase-analytics';
import { Snackbar } from 'react-native-paper';

export default function Login() {
  Analytics.setCurrentScreen('Login');
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [snackText, setsnackText] = useState();

  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const checkUserStatus = async () => {
    try {
      const credentials = await SecureStore.getItemAsync('userDetails');
      if (credentials) {
        navigation.navigate("Home");
      } else {
        // setLoading(false);
      }
    } catch (error) {
      console.log('Secure Storage error: ', error);
      // setLoading(false);
    }
  }

  function signIn() {

    axios.post('http://192.168.1.69:3000/api/auth/signin', {
      username: username,
      password: password,
    }).then((response) => {
      const credentials = { username, password }
      console.log(response.status);
      console.log(credentials)
      if (response.status == '200') {
        SecureStore.setItemAsync('userDetails', JSON.stringify(credentials))
        navigation.navigate("Home");
      }
    }, (error) => {
      console.log(error);
      setsnackText('Unknown login information');
      onToggleSnackBar();
    })
  }

  return (
    <ScrollView style={styles.biggestContainer}>
      <View style={styles.regform}>
        <Text style={styles.inputTitle}>Username</Text>
        <TextInput
          placeholderTextColor={colors.secondary}
          onChangeText={(text) => setUsername(text)}
          placeholder="Jonathan Smitherino"
          style={styles.textInput}
        />
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          placeholderTextColor={colors.secondary}
          placeholder="********"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={styles.textInput}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { signIn() }}
          type="clear"
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity >

      </View>


      <View style={styles.container}>
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
    backgroundColor: colors.primary,
    color: colors.secondary
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 15,
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
    borderRadius: 15,
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