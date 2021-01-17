import * as React from 'react';
import { Card } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  SectionList
} from "react-native";
import colors from '../config/colors.js';

const CategoryCard = ({ CategoryImgLink }) => (
  <View style = {styles.CategoryImgContainer}>
  <Image  source={CategoryImgLink}   style = {styles.CategoryImg} />
  </View>
);

const styles = StyleSheet.create({
  CategoryImg: {
    width: '100%',
    height: '100%',
    height: 160,
    width: 160,
},
  CategoryImgContainer: {
  alignItems: 'center',
  width: '50%',
  marginVertical: 5,
},
});

export default CategoryCard;