import { StyleSheet, Text, Image, ImageBackground, View } from 'react-native';
import React from 'react';
import CharAvatar from '../components/Avatar';
import CharDescrip from '../components/CharDescrip';
import colors from '../config/colors';
import { Favourite, GoBack, Menu } from '../components/Menu';

const Profile = () => {
  return(
<View style={styles.ImageBackgroundContainer}>
    <View  style={styles.Header}>
      <GoBack />
      <Favourite />
    </View>
  <View >
  <ImageBackground style={styles.ImageBackground} source={ {uri: "https://reactjs.org/logo-og.png"} }></ImageBackground>
  </View>
  <View>
    <CharAvatar />
  </View>
  <View style={styles.CharDescripContainer}>
  <CharDescrip />
  </View>
</View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    ImageBackgroundContainer: {
      flex: 1,
    },
    ImageBackground: {
      height: 300,
      width: '100%',
    },
    CharDescripContainer: {
      marginTop: 80,
      flex: 1,
      flexDirection: "row",
      justifyContent: 'center',
    },
    Header: {
      zIndex: 1,
      elevation: 1,
    },
  });

export default Profile;