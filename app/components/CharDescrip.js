<script src="http://192.168.1.69:19002"></script>
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
    left={props => <List.Icon {...props}  color= {colors.secondary}  icon={"map-marker"} />}
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
    // description="Social"
    left={props => <List.Icon {...props}  color= {colors.secondary}  icon={"passport-biometric"}/>}
  />
);

function CharDescrip(props) {
    return (
    <ScrollView>
      <View  style={styles.CharityNameContainer}>
        <Text style={styles.CharityName}>{props.route.params.props.charity_name}</Text>
        </View>
        {props.route.params.props.website != null &&
          <View style={styles.ButtonContainer}>
          <ButtonWebsite btnText="Know more" website={props.route.params.props.website}/>
          </View>
        }
            <View>
            <View>
            <Text  style={styles.TagTitle}>Details</Text>
            </View>
            <View style={styles.CharityDetailsContainer}>
            {(props.route.params.props.city != null || props.route.params.props.address != null)
            &&
            <DetailLocation city ={`${props.route.params.props.city.slice(0,1).toUpperCase()}${props.route.params.props.city.slice(1).toLowerCase()}`} address={props.route.params.props.address}/>
            }

            {(props.route.params.props.affiliation == 'ONGA') &&
            <DetailFieldofWork
             affiliation='Environmental action'
            />
            }
            {(props.route.params.props.affiliation == 'ONGD') &&
            <DetailFieldofWork
             affiliation='Development aid'
            />
            }
            {(props.route.params.props.affiliation == 'ONGPD') &&
            <DetailFieldofWork
             affiliation='Social welfare'
            />
            }
            {(props.route.params.props.affiliation == 'ONGM') &&
            <DetailFieldofWork
             affiliation='Human rights'
            />
            }
            </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  CharityNameContainer: {
      marginHorizontal: 20,
  },
    CharityName: {
      width: '100%',
      textAlign: 'center',
      alignItems: 'center',
      fontSize: 20,
      backgroundColor: colors.primary,
      color: 'black',
      paddingBottom: 15,
      paddingVertical: 18,
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
      marginBottom: 30,
      marginTop: 26,
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
        marginBottom: -5,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
      },
});

export default CharDescrip;