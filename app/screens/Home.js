import { StatusBar } from 'expo-status-bar';
import colors from '../config/colors.js';
import React, { useState } from "react";
import Header from '../components/Header.js';
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

const HomeScreen = (props) => {

return(
  <ScrollView>
        <Header title="Home"/>
  </ScrollView>
  
  );
};

export default HomeScreen;