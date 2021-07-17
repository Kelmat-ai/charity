<script src="http://192.168.1.69:19002"></script>
import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import colors from '../config/colors.js';
import axios from 'axios';
import CharityItem from '../components/CharityItem.js';
import {
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import { useEffect, useState } from 'react';
import * as Analytics from 'expo-firebase-analytics';
import _ from 'lodash';

const Search = () => {
  Analytics.setCurrentScreen('Search');
  const [charities, setCharities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    initialSearch();
  }, []);

  const initialSearch = async() => {
    min=Math.floor(1)
    max=Math.ceil(645)
    const charId = Array(max - min + 1).fill().map((_, idx) => min + idx)
    const randomCharId = _.sampleSize(charId, 50);
      const url = `http://192.168.1.69:3000/charities/charId`
      axios.get(url, {params: {charId: randomCharId }})
        .then((response) => {
          setCharities(response.data.charitySelected)
        }, (error) => {
          console.log(error.response);
        });
    }

  const onChangeSearch = query => {
    setSearchQuery(query);
    Analytics.logEvent('SearchQuery', {
      query: query
    })
    const url = 'http://192.168.1.69:3000/search'
    axios.get(url, {params: {search_query: query} })
      .then((response) => {
        setCharities(response.data.charitySelected)
      }, (error) => {
        console.log(error);
      });
    }

  return (
    <View>
      <View style={styles.SearchContainer}>
    <Searchbar
      iconColor= {colors.secondary}
      style={styles.Search}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
    <View>
      <ScrollView>
    {
      charities.map(charity => {
        return (<View key={charity.id} style={styles.CharityItemContainer}>
          <CharityItem {...charity}/>
        </View>
        )
      })}
    </ScrollView>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
    SearchContainer: {
        marginTop: 1,
        marginBottom: 42,
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
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
    }
  });

export default Search;