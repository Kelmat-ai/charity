import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, TextInput} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from '../config/colors.js';

const SettingsRow = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text bold>{title}</Text>
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
      justifyContent: 'center',
      paddingLeft: 30,
      paddingRight: 60,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 14,
      paddingHorizontal: 16,
    }
});

export default SettingsRow;
