<script src="http://192.168.1.69:19002"></script>
import { StyleSheet, Text, Image, ImageBackground, View } from 'react-native';
import React from 'react';
import CharAvatar from '../components/Avatar';
import CharDescrip from '../components/CharDescrip';
import colors from '../config/colors';
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
  <View >
  <ImageBackground style={styles.ImageBackground}></ImageBackground>
  </View>
  <View >
          {(props.route.params.props.affiliation == 'ONGA') &&
            <CharAvatar
             circularImage={require('../assets/menuvectors/undraw_nature_m5ll.png')}
            />
            }
            {(props.route.params.props.affiliation == 'ONGD') &&
            <CharAvatar style={styles.circularImage}
            circularImage={require('../assets/menuvectors/undraw_under_construction_46pa.png')}
            />
            }
            {(props.route.params.props.affiliation == 'ONGPD') &&
            <CharAvatar
            circularImage={require('../assets/menuvectors/undraw_fatherhood_7i19.png')}
            />
            }
            {(props.route.params.props.affiliation == 'ONGM') &&
            <CharAvatar
            circularImage={require('../assets/menuvectors/undraw_women_day_2m89.png')}
            />
            }
    {/* <CharAvatar /> */}
  </View>
  <View style={styles.CharDescripContainer}>
  <CharDescrip {...props} />
  </View>
</View>
)
}

const styles = StyleSheet.create({
  circularImage: {
    resizeMode: "center",
    width: '10%'
  },
    container: {
      flex: 1,
      flexDirection: "column",
    },
    ImageBackgroundContainer: {
      flex: 1,
      backgroundColor: colors.primary,
      color: colors.fourth,
    },
    ImageBackground: {
      height: 175,
      width: '100%',
      backgroundColor: colors.fourth,
    },
    CharDescripContainer: {
      marginTop: 80,
      flex: 1,
      flexDirection: "row",
      justifyContent: 'center',
    }
  });

export default Profile;