import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import colors from '../../../config/colors.js';

export default function RegForm() {

  return (
<View style={styles.regform}>
    <Text style={styles.header}>Change your account details</Text>
  
<Text style={styles.inputTitle}>Name</Text>
<TextInput
    placeholderTextColor={'white'}
    placeholder="Exampleriny"
    style={styles.textInput}
    />
<Text style={styles.inputTitle}>Email</Text>
<TextInput
    placeholderTextColor={'white'}
    placeholder="you@example.com"
    style={styles.textInput}
    />
<Text style={styles.inputTitle}>Password</Text>
<TextInput
    placeholderTextColor={'white'}
    secureTextEntry={true}
    style={styles.textInput}
    />
<TouchableOpacity
    style = {styles.button}
    type="clear">
   <Text style = {styles.btnText}>Register</Text>
</TouchableOpacity >
</View>
  );
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
    flex: 1,
    width: '100%',
    backgroundColor: colors.primary,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    fontSize: 24,
    color: 'white',
    paddingBottom: 10,
    marginBottom: 10,
  },
  textInput: {
    paddingLeft: 10,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    color: 'black',
    height: 40,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  button: {
      marginTop: 55,
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: 'white',
  },
  btnText: {
      color: colors.primary,
      fontWeight: 'bold',
  },
  inputTitle: {
    fontSize: 14,
    paddingBottom: 10,
    color: 'white',
    alignSelf: 'stretch',
    alignItems: 'center',
    fontWeight: 'bold',
  }
});
