import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, TextInput} from "react-native";
import colors from '../config/colors.js';
import Constants from "expo-constants";
import { Menu, SearchIcon } from "./Menu.js";

const Header = ({ title }) => {
  return (
      <View>
      <Text style={styles.container}>{title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: "bold",
      marginTop: Constants.statusBarHeight,
      flex: 1,
      width: '100%',
      backgroundColor: colors.primary,
      color: colors.secondary,
      paddingBottom: 25,
      flexDirection: "row",
      paddingVertical: 14,
      paddingHorizontal: 16,
    }
});

export default Header;
