import React from 'react';
import { useEffect } from 'react';
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
import Button from '../components/Button.js';
import CharityItem from '../components/CharityItem.js';
import Header from '../components/Header.js';
import { Menu, GoBack } from '../components/Menu.js';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors.js';
import axios from 'axios';
import { useState } from 'react';

function ProfileListingScreen(props) {
  let [charities, setCharities] = useState([]);
  useEffect(() => {
    const { charAffiliation } = props.route.params;
    const url = `http://192.168.1.69:3000/${charAffiliation}`
    axios.get(url)
      .then((response) => {
        setCharities(response.data.charitySelected)
        // console.log(response.data.charitySelected)
        // console.log('123')
        // console.log(Object.keys(charities.charitySelected).length)
      }, (error) => {
        console.log(error);
      });
  })


  return (
    <ScrollView>
      {
        charities.map(charity => {
          return (<View key={charity.id} style={styles.CharityItemContainer}>
            <CharityItem {...charity}/>
          </View>
          )
        })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  CharityItemContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: "row",
    alignItems: 'center',
    alignSelf: 'stretch',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 8,
  },
});

export default ProfileListingScreen;