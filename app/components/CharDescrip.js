import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, ScrollView, Linking } from 'react-native';
import colors from '../config/colors';
import { List } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";
import {ButtonWebsite} from './Button';
import { useEffect } from 'react';
import PropTypes from "prop-types";
import { useNavigation } from '@react-navigation/native';

export const DetailLocation = (props) => (
  <List.Item
    style={styles.CharityDetails}
    title={props.city}
    description={props.address}
    left={props => <List.Icon {...props}   color= {colors.secondary}  icon={"map-marker"} />}
  />
);

// export const DetailTax = () => (
//   <List.Item
//     style={styles.CharityDetails}
//     title="Tax benefits"
//     description="40%"
//     left={props => <List.Icon {...props}   color= {colors.secondary} icon={"currency-eur"} />}
//   />
// );

// export const DetailFoundation = () => (
//   <List.Item
//     style={styles.CharityDetails}
//     title="Foundation year"
//     description="2020"
//     left={props => <List.Icon {...props}  color= {colors.secondary} icon={"calendar-range"}/>}
//   />
// );

export const DetailFieldofWork = (props) => (
  <List.Item
    style={styles.CharityDetails}
    title={props.affiliation}
    description="Social"
    left={props => <List.Icon {...props}  color= {colors.secondary}  icon={"passport-biometric"}/>}
  />
);

function CharDescrip(props) {
    return (
    <ScrollView>
        <Text style={styles.CharityName}>{props.route.params.props.charity_name}</Text>
        <View style={styles.ButtonContainer}>
          <ButtonWebsite btnText="Know more" website={props.route.params.props.website}/>
        </View>
            <View>
            <View>
            <Text  style={styles.TagTitle}>Details</Text>
            </View>
            <View style={styles.CharityDetailsContainer}>
            <DetailLocation city ={props.route.params.props.city} address={props.route.params.props.address}/>
            {/* <DetailTax/>
            <DetailFoundation/> */}
            <DetailFieldofWork affiliation={props.route.params.props.affiliation}/>
            </View>
        </View>
        <View style={styles.CharityOverviewContainer}>
                <Text style={styles.TagTitle}>Tags</Text>
        </View>
    </ScrollView>
    );
}

// CharDescrip.propTypes = {
//   charity_name: PropTypes.string.isRequired, // must be a string and defined
// };

const styles = StyleSheet.create({
    CharityName: {
      width: '100%',
      textAlign: 'center',
      fontSize: 20,
      backgroundColor: colors.primary,
      color: colors.secondary,
      paddingBottom: 15,
      paddingVertical: 14,
    },
    CharityOverview: {
        width: '100%',
        textAlign: 'justify',
        fontSize: 16,
        color: 'black',
        paddingLeft: 20,
        paddingRight: 20,
      },
      CharityOverviewContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        marginBottom: 20,
    },
    ButtonContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: 'center',
      marginBottom: 65,
      marginTop: 30,
  },
    CharityDetailsContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
    TagTitle: {
        marginTop: 10,
        width: '100%',
        alignItems: 'flex-start',
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
      },
    CharityDetails: {
        width: '100%',
        marginBottom: -15,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
      },
});

export default CharDescrip;