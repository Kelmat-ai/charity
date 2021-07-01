<script src="http://192.168.1.69:19002"></script>
import * as React from 'react';
import { StyleSheet, Text, ImageBackground, View, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import colors from '../config/colors.js';
import Constants from "expo-constants";
import axios from 'axios';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => {
    setSearchQuery(query);
    const url = 'http://192.168.1.69:3000/search'
    axios.get(url, {params: {search_query: query} })
      .then((response) => {
        // setCharities(response.data.charitySelected)
        // console.log(response)
      }, (error) => {
        console.log(error);
      });
    }

  return (
      <View style={styles.SearchContainer}>
    <Searchbar
      iconColor= {colors.secondary}
      style={styles.Search}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
  );
};

const styles = StyleSheet.create({
    SearchContainer: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
    }
  });

export default Search;