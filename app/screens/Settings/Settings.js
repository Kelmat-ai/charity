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
  <ScrollView>
        <Header title="Settings"/>
        {RowOptions.map((item, index) => {
        return (
          <SettingsRow key={index} onPress={item.onPress} title={item.title} />
          );
      })}
  </ScrollView>
  
  );
};

export default SettingsScreen;