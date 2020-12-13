import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Button, Alert, TouchableOpacity, Text } from 'react-native';

import colors from '../config/colors.js';

function Welcome(props) {
    return (
<ImageBackground 
        style={styles.background}
>
<Image style={styles.logo} source={require('../assets/logo-red.png')}/>
<View style={styles.button}>
<TouchableOpacity
              type="clear"
              onPress={() => Alert.alert('Simple Button pressed')}> 
   <Text style = {styles.btnText}>
       Criar conta
   </Text>
</TouchableOpacity >
</View>
<View style={styles.button}>
<TouchableOpacity
              type="clear"
              onPress={() => Alert.alert('Simple Button pressed')}> 
   <Text style = {styles.btnText}>
       Login
   </Text>
</TouchableOpacity >
</View>
</ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        alignSelf: 'stretch',
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    btnText: {
        color: colors.primary,
        fontWeight: 'bold',
    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 300,
    },
})

export default Welcome;