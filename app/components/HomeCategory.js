<script src="http://192.168.1.69:19002"></script>
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { Title } from 'react-native-paper';
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
    <Text  style={styles.TextItem}>{props.subtitleText}</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  CategoryImg: {
    resizeMode: "center",
    width: '100%',
    height: '100%',
    height: 200,
    width: 200,
    borderTopRightRadius: 200,
    marginBottom: -10
},
  CategoryImgContainer: {
  alignItems: 'center',
  width: '50%',
  marginVertical: 5,
  marginBottom: 25
},
  TextItem: {
    fontSize: 16,
    textAlign: 'center',
},
});

export default CategoryCard;