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
  <ScrollView  style={styles.biggestContainer}>
  <View  style={styles.CategoryTitleContainer}>
    <Title>Who do you want to help today?</Title>
    <Text style={styles.TextItem}>Choose a category below and find the right charity partnerships for your business.</Text>
  </View>
  <View style={styles.DividerContainer}>
      <Divider style={styles.Divider} />
    </View>
  <View>
    <View   style={styles.CategoryCardContainer}>
      <CategoryCard CategoryImgLink={require('../assets/menuvectors/undraw_nature_m5ll.png')}
       charAffiliation = "ONGA" subtitleText="Environmental action"   />
      <CategoryCard  CategoryImgLink={require('../assets/menuvectors/undraw_building_blocks_n0nc.png')}
      charAffiliation = "ONGD" subtitleText="Development aid"  />
      <CategoryCard CategoryImgLink={require('../assets/menuvectors/undraw_women_day_2m89.png')}
      charAffiliation = "ONGM" subtitleText="Human rights"  />
      <CategoryCard CategoryImgLink={require('../assets/menuvectors/undraw_fatherhood_7i19.png')}
      charAffiliation = "ONGPD" subtitleText="Social welfare"  />
    </View>
  </View>
  </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  biggestContainer: {
    backgroundColor: colors.primary,
    color: colors.secondary
},
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
},
  TextItem: {
    marginTop: 10,
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
},
  DividerContainer: {
    marginHorizontal: 15,
    marginBottom: 25,
},
Divider: {
height: 1.5,
}
});

export default HomeScreen;