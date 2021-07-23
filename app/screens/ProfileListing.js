<script src="http://192.168.1.69:19002"></script>
import React from 'react';
import { useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import CharityItem from '../components/CharityItem.js';
import axios from 'axios';
import { useState } from 'react';
import * as Analytics from 'expo-firebase-analytics';
import Constants from 'expo-constants';

function ProfileListingScreen(props) {
  const baseUrl = Constants.manifest.extra.BASEURL
  const basePort = Constants.manifest.extra.BASEPORT
  Analytics.setCurrentScreen('Profile Listing');
  let [charities, setCharities] = useState([]);
  useEffect(() => {
    const { charAffiliation } = props.route.params;
    // for development: const url = `${baseUrl}:${basePort}/listing/${charAffiliation}`
    const url = `${baseUrl}/listing/${charAffiliation}`
    axios.get(url)
      .then((response) => {
        setCharities(response.data.charitySelected)
      }, (error) => {
        console.log(error);
      });
  }, [])

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
    paddingLeft: 5,
    paddingRight: 5,
    paddingVertical: 5,
  },
});

export default ProfileListingScreen;