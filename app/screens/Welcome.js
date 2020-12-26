import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Alert, TouchableOpacity, Text, ScrollView } from 'react-native';
import Button from '../components/Button.js';
import colors from '../config/colors.js';

function Welcome( {props} ) {
    return (
<View>
    <View  style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
    </View>
    <View >
        <Button btnText="Register"/>
    </View>
</View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        alignSelf: 'stretch',
        flex: 1,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
    }
})

export default Welcome;