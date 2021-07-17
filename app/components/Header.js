<script src="http://192.168.1.69:19002"></script>
import React from "react";
import { Text, StyleSheet, View} from "react-native";
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
