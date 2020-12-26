import { StatusBar } from 'expo-status-bar';
import colors from '../../../config/colors.js';
import React, { useState } from "react";
import SettingsRow from '../../../components/SettingsRow.js';
import Header from '../../../components/Header.js';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Switch
} from "react-native";
import Constants from "expo-constants";

const Notifications = (props) => {

return(
    <ScrollView>
    <View>
    <Header title="Notifications" />
    </View>
  <View style={styles.container}>
    <Text>Notifications</Text>
    <Switch size={20} style={{marginRight:70}} />
  </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    width: '100%',
    backgroundColor: colors.primary,
    color: colors.secondary,
    alignItems: 'flex-start',
    paddingLeft: 30,
    paddingRight: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
  }
});

export default Notifications;