<script src="http://192.168.1.69:19002"></script>
import colors from '../../config/colors.js';
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking
} from "react-native";
import * as Analytics from 'expo-firebase-analytics';

const SettingsScreen = (props) => {
  const navigation = useNavigation(); 
  Analytics.setCurrentScreen('Settings');

const RowOptions = [
  {
    title: "Change password",
    navigationDestination: "Change Your Password",
  },
  {
    title: "Contact us",
    navigationDestination: "Settings",
    titli: '123',
  },
  {
    title: "Privacy",
    navigationDestination: "Privacy Policy",
  },
  {
    title: "Terms of use",
    navigationDestination: "Terms Of Use",
  },
];

return(
  <ScrollView  style={styles.biggestContainer}>
        {RowOptions.map((item, index) => {
        return (
          <TouchableOpacity  key={index} style={styles.container} onPress={() => {navigation.navigate(item.navigationDestination)
            {if (item.title=="Contact us"){
              Linking.openURL('mailto:kelmatventures@gmail.com')}
          }}
        }
        >
          <Text style={styles.settingsItem}>{item.title}</Text>
          <Ionicons name={"ios-arrow-forward"} size={20} color={colors.secondary} />
        </TouchableOpacity>
          );
      })}
  </ScrollView>
  
  );
};

const styles = StyleSheet.create({
    biggestContainer: {
      backgroundColor: colors.primary,
      color: colors.secondary,
      paddingTop: 40-16
  },
  container: {
    alignSelf: 'stretch',
    flex: 1,
    width: '100%',
    backgroundColor: colors.primary,
    color: colors.secondary,
    alignItems: 'flex-start',
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  settingsItem: {
    fontSize: 18,
    color: colors.tertiary
  }
});

export default SettingsScreen;