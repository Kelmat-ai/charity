import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, TextInput} from "react-native";
import colors from '../config/colors.js';
import Constants from "expo-constants";

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
      alignItems: 'flex-start',
      fontSize: 35,
      fontWeight: "bold",
      marginTop: Constants.statusBarHeight,
      flex: 1,
      width: '100%',
      backgroundColor: colors.primary,
      color: colors.secondary,
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: 30,
      paddingRight: 60,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 14,
      paddingHorizontal: 16,
    }
});

export default Header;
