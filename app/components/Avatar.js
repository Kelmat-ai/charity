import * as React from 'react';
import { Avatar } from 'react-native-paper';
import { StyleSheet, Text, Image, ImageBackground, View } from 'react-native';

const CharAvatar = () => (
  <Avatar.Image size={140} source={require('../assets/avatar.jpg')} style={styles.Avatar} />
);

const styles = StyleSheet.create({
  Avatar: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});


export default CharAvatar