<script src="http://192.168.1.69:19002"></script>
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Switch,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    SectionList
  } from "react-native";
import Button from '../components/Button.js';
import CharityItem from '../components/CharityItem.js';
  import Header from '../components/Header.js';
import { Menu, GoBack } from '../components/Menu.js';
  import colors from '../config/colors.js';
  import * as Analytics from 'expo-firebase-analytics';

function Favourites(props) {
  Analytics.setCurrentScreen('Favourites');
  // props = {
  //   charId: [], 
  // }
    return (
        <ScrollView>
        <View>
        <Header title="Your charities" />
      <Menu />
        </View>
      <View style={styles.CharityItemContainer}>
          <CharityItem />
      </View>
      <View style={styles.CharityItemContainer}>
          <CharityItem />
      </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    CharityItemContainer: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: "row",
      alignItems: 'center',
      alignSelf: 'stretch',
      width: '100%',
      paddingLeft: 10,
      paddingRight: 10,
      paddingVertical: 8,
    },
  });

export default Favourites;