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
import { GoBack } from '../../../components/Menu.js';

const Notifications = (props) => {

return(
    <ScrollView>
    <View>
    <Header title="Notifications" />
    <GoBack />
    </View>
  <View style={styles.container}>
    <Text style={styles.settingsItem}>Notifications</Text>
    <Switch size={20} />
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
    paddingRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  settingsItem: {
    fontSize: 18,
  },
});

export default Notifications;