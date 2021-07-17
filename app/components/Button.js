<script src="http://192.168.1.69:19002"></script>
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';
import colors from '../config/colors.js';
import * as Analytics from 'expo-firebase-analytics';

function ButtonWebsite(props) {
  if (!(props.website.startsWith('http://'))) {
  var httpWebsite = `http://${props.website}`
    } else {
      httpWebsite = props.website
    }

    Analytics.logEvent('WebsiteButtonTapped', {
      website: httpWebsite,
    })

  return (
<View style = {styles.container}>
<TouchableOpacity
    onPress= {() =>{Linking.openURL(httpWebsite) }}
    style = {styles.button}
    type="clear"> 
   <Text style = {styles.btnText}>{props.btnText}</Text>
</TouchableOpacity >
</View>
  )
};

function Button(props) {

  return (
<View style = {styles.container}>
<TouchableOpacity
    style = {styles.button}
    type="clear"> 
   <Text style = {styles.btnText}>{props.btnText}</Text>
</TouchableOpacity >
</View>

  )
}

  const styles = StyleSheet.create({
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
    btnText: {
        color: colors.primary,
        fontWeight: 'normal',
    }
  });

export {ButtonWebsite, Button}