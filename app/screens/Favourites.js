import React from 'react';
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
import CharityItem from '../components/CharityItem.js';
  import Header from '../components/Header.js';
  import colors from '../config/colors.js';

function Favourites(props) {
    return (
        <ScrollView>
        <View>
        <Header title="Your charities" />
        </View>
      <View style={styles.CharityItemContainer}>
          <CharityItem />
      </View>
      <View style={styles.CharityItemContainer}>
          <CharityItem />
      </View>
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

export default Favourites;