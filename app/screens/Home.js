<script src="http://192.168.56.1:19002"></script>
import { StatusBar } from 'expo-status-bar';
import colors from '../config/colors.js';
import React, { useState, Component } from "react";
import Header from '../components/Header.js';
import { Avatar } from 'react-native-paper';
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
import { Title } from 'react-native-paper';
import Constants from "expo-constants";
import CategoryCard from '../components/HomeCategory.js';
import { Divider } from 'react-native-paper';
import { Menu, SearchIcon } from '../components/Menu.js';
import Favourites from './Favourites.js';
import Button from '../components/Button.js';
import axios from 'axios';
import {useDispatch,useSelector, useStore} from 'react-redux';
import add from '../redux/actions/actione'
import * as Analytics from 'expo-firebase-analytics';

 function getCharity() {axios.get('http://192.168.1.69:3000/charities/33')
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
  console.log('123')
});
}

function HomeScreen ( {navigation}) { 
  Analytics.setCurrentScreen('Home base');
  const dispatch = useDispatch();
  const store = useStore();
  const data = useSelector(state => state.your_reducers)
  
  const CategoryCardAnalytics = async () => {
  Analytics.logEvent('CategoryDetails', {
    affiliation: charAffiliation
  })
  }

return(
  <ScrollView>
        <View>
        <Header title="Home"/>
        </View>
        <View style={styles.HomeContainer}>
  <View  style={styles.CategoryTitleContainer}>
    <Title>Area of impact</Title>
    <Text>Choose one below to see associated NGO's</Text>
  </View>
  <View style={styles.DividerContainer}>
      <Divider style={styles.Divider} />
    </View>
  <View>
    <View   style={styles.CategoryCardContainer}>
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/1.png')} charAffiliation = "ONGA" />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/2.png')} charAffiliation = "ONGD"   />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/3.png')} charAffiliation = "ONGM"   />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/4.png')} charAffiliation = "ONGPD"   />
    </View>
  </View>
  </View>
  </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  CategoryCardContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignContent: 'stretch',
      flexWrap: 'wrap',
      marginHorizontal: 25,
      marginBottom: 20,
  },
  CategoryTitleContainer: {
    marginBottom: 10,
    marginHorizontal: 20,
},
  DividerContainer: {
    marginHorizontal: 15,
    marginBottom: 20,
},
Divider: {
height: 1.5,
}
});

export default HomeScreen;