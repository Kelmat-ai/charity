import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, TextInput} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from '../config/colors.js';

const SettingsRow = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.settingsItem}>{title}</Text>
      <Ionicons name={"ios-arrow-forward"} size={20} color={colors.secondary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    }
});

export default SettingsRow;
