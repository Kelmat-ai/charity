import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';

import colors from './../config/colors.js';

function WelcomeScreen(props) {
    return (
<ImageBackground 
        source={require('../assets/background.jpg')}
        style={styles.background}
>
<Image style={styles.logo} source={require('../assets/logo-red.png')}/>
<View style={styles.loginButton} />
<View style={styles.registerButton}/>

</ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 70,
    },
})

export default WelcomeScreen;