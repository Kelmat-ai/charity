<script src="http://192.168.1.69:19002"></script>
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import colors from './../config/colors.js';
import Constants from "expo-constants";
import {
    StyleSheet,
    View,
  } from "react-native";

const openDrawer = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Drawer />
        </View>
      );
}

function GoBack( {navigation} ) {
    return (
<Ionicons name={"ios-arrow-back"} size={30} onPress={openDrawer} style={styles.GoBack}/>
    );
}

function Menu( {navigation} ) {
    return (
<Ionicons name={"md-menu"} size={30} onPress={openDrawer} style={styles.Menu}/>
    );
}

function Filter( {navigation} ) {
    return (
<Ionicons name={"md-funnel"} size={30} onPress={openDrawer} style={styles.Filter}/>
    );
}

function Favourite( {navigation} ) {
    return (
<Ionicons name={"ios-heart-empty"} size={30} onPress={openDrawer} style={styles.Filter}/>
    );
}

function SearchIcon( {navigation} ) {
    return (
<Ionicons name={"ios-search"} size={30} onPress={openDrawer} style={styles.Filter}/>
    );
}

const styles = StyleSheet.create({
    Menu: {
        flex: 1,
        flexDirection: 'row',
        marginTop: Constants.statusBarHeight,
        color: colors.secondary,
        margin: 15,
        position: 'absolute',
    },
    GoBack: {
        flex: 1,
        flexDirection: 'row',
        marginTop: Constants.statusBarHeight,
        color: colors.secondary,
        margin: 20,
        position: 'absolute',
    },
    Filter: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: Constants.statusBarHeight,
        color: colors.secondary,
        margin: 15,
        paddingHorizontal: 15,
        position: 'absolute',
    }
})

export {Menu, GoBack, Favourite, Filter, SearchIcon};