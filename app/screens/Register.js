import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../components/Button.js';
import Header from '../components/Header.js';
import colors from '../config/colors.js';

export default function Register() {

  return (
    <ScrollView>
  <View>
  <Header title="Create your account" />
  </View>
  <View style={styles.regform}>
<Text style={styles.inputTitle}>Name</Text>
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
    />
<Text style={styles.inputTitle}>Password</Text>
<TextInput
    placeholderTextColor={colors.secondary}
    placeholder="********"
    secureTextEntry={true}
    style={styles.textInput}
    />
</View>
<View>
<Button btnText="Register now" />
</View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
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
