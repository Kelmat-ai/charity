<script src="http://192.168.1.69:19002"></script>
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';
import {Button} from '../../../components/Button.js';
import Header from '../../../components/Header.js';
import { GoBack } from '../../../components/Menu.js';
import colors from '../../../config/colors.js';
import * as Analytics from 'expo-firebase-analytics';

export default function ContactUs(props) {
  Analytics.setCurrentScreen('Contact us');

  return (

<ScrollView>
    <View>
    <Header title="Contact us" />
    <GoBack />
    </View>

    <View>
<TextInput
    placeholderTextColor={colors.secondary}
    placeholder="Your message here"
    style={styles.textInput}
    multiline={true}
    />
    <Button 
    onPress= {() =>{Linking.openURL('mailto:kelmatventures@gmail.com') }}
    btnText="Send"/>
</View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    paddingLeft: 20,
    fontSize: 16,
    paddingRight: 15,
    width: '100%',
    backgroundColor: colors.primary,
    alignSelf: 'stretch',
    color: 'black',
    maxHeight: 400,
    paddingBottom: 150,
    alignSelf: 'stretch',
    flex: 1,
  }
});