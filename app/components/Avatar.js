<script src="http://192.168.1.69:19002"></script>
import * as React from 'react';
import { Avatar } from 'react-native-paper';
import { StyleSheet, Text, Image, ImageBackground, View } from 'react-native';

const CharAvatar = (props) => (
  
  <Avatar.Image size={140} source={props.circularImage} style={styles.Avatar} />
);

const styles = StyleSheet.create({
  Avatar: {
    resizeMode: 'center',
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});


export default CharAvatar