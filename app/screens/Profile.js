<script src="http://192.168.1.69:19002"></script>
import { StyleSheet, Text, Image, ImageBackground, View } from 'react-native';
import React from 'react';
import CharAvatar from '../components/Avatar';
import CharDescrip from '../components/CharDescrip';
import colors from '../config/colors';
import { Favourite, GoBack, Menu } from '../components/Menu';
import * as Analytics from 'expo-firebase-analytics';

const Profile = (props) => {
  Analytics.setCurrentScreen('Profile');
  Analytics.logEvent('ProfileDetails', {
    affiliation: props.route.params.props.affiliation,
    city: props.route.params.props.city,
    id: props.route.params.props.id,
    website: props.route.params.props.website,
    charity_name: props.route.params.props.charity_name
  })

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
  <CharDescrip {...props} />
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