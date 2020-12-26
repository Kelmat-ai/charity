import { StatusBar } from 'expo-status-bar';
import colors from '../../config/colors.js';
import React, { useState } from "react";
import SettingsRow from '../../components/SettingsRow.js';
import Header from '../../components/Header.js';
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
import Constants from "expo-constants";

const SettingsScreen = (props) => {

const RowOptions = [
  {
    title: "Edit account details",
  },
  {
    title: "Notifications",
  },
  {
    title: "Rate us",
  },
  {
    title: "Contact us",
  },
  {
    title: "Privacy",
  },
  {
    title: "Terms of use",
  },
];

return(
  <ScrollView style={styles.container}>
        <Header  style={styles.header} title="Settings"/>
        {RowOptions.map((item, index) => {
        return (
          <SettingsRow key={index} onPress={item.onPress} title={item.title} />
          );
      })}
  </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    alignSelf: 'stretch',
    flex: 1,
    width: '100%',
    backgroundColor: colors.primary,
    color: colors.secondary,
    paddingLeft: 30,
    paddingRight: 60,
  },
  item: {
    paddingLeft: 40,
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.primary,
    color: colors.secondary,
    height: 40,
    marginBottom: 20,
  },
  header: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    fontSize: 35,
    fontWeight: "bold",
    marginTop: Constants.statusBarHeight,
    flex: 1,
    width: '100%',
    backgroundColor: colors.primary,
    color: colors.secondary,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 14,
    paddingBottom: 10,
    color: colors.secondary,
    alignSelf: 'stretch',
    alignItems: 'center',
    fontWeight: 'bold',
  }
});

export default SettingsScreen;