import { StatusBar } from 'expo-status-bar';
import colors from '../config/colors.js';
import React, { useState } from "react";
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

const HomeScreen = (props) => {

return(
  <ScrollView>
        <Header title="Home"/>
        <View style={styles.HomeContainer}>
  <View  style={styles.CategoryTitleContainer}>
    <Title>Area of impact</Title>
    <Text>Choose one below to see associated NGO's.</Text>
  </View>
  <View style={styles.DividerContainer}>
      <Divider style={styles.Divider} />
    </View>
  <View>
    <View   style={styles.CategoryCardContainer}>
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/1.png')} />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/2.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/3.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/4.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/5.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/6.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/7.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/8.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/9.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/10.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/11.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/12.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/13.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/14.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/15.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/16.png')}  />
      <CategoryCard CategoryImgLink={require('../assets/SDG_IconsB/17.png')}  />
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