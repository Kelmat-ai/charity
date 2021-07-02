<script src="http://192.168.1.69:19002"></script>
import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Alert, TouchableOpacity, Text, ScrollView } from 'react-native';
import Button from '../components/Button.js';
import colors from '../config/colors.js';
import Constants from "expo-constants";
import * as Analytics from 'expo-firebase-analytics';

function Welcome( {props} ) {
Analytics.setCurrentScreen('Welcome');
    return (
<View style={styles.container}>
    <View  style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
    </View>
    
    <View style = {styles.Registercontainer}>
<TouchableOpacity
    style = {styles.RegisterBtn}
    type="clear"> 
   <Text style = {styles.btnText}>Register</Text>
</TouchableOpacity >
</View>
<View style = {styles.Registercontainer}>
<TouchableOpacity
    style = {styles.LoginBtn}
    type="clear"> 
   <Text style = {styles.btnText}>Sign in</Text>
</TouchableOpacity >
</View>
</View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary
    },
    logoContainer: {
        alignSelf: 'stretch',
        flex: 1,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        marginTop: 400,
    },
    RegisterBtn: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingTop:15,
        paddingBottom:15,
        borderRadius:15,
        width: '80%',
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 200,
        position: 'absolute',
        marginBottom: 20,
    },
    LoginBtn: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingTop:15,
        paddingBottom:15,
        borderRadius:15,
        width: '80%',
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 270,
        marginBottom: 20,
    },
    btnText: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
    Registercontainer: {
        justifyContent: 'center',
        flexDirection: "row",
    }
})

export default Welcome;