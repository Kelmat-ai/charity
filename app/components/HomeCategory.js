<script src="http://192.168.1.69:19002"></script>
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
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
import axios from 'axios';
import * as Analytics from 'expo-firebase-analytics';

function CategoryCard(props) {

  const navigation = useNavigation();
  return(
    <View style = {styles.CategoryImgContainer}>
    <TouchableOpacity  onPress={() => {
      navigation.navigate("Results", {charAffiliation: props.charAffiliation})
      Analytics.logEvent('CategoryDetails', {charAffiliation: props.charAffiliation})
    }}>
    <Image  source={props.CategoryImgLink} style = {styles.CategoryImg}/>
    </TouchableOpacity>
    </View>
  );
}

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