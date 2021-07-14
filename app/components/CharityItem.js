<script src="http://192.168.1.69:19002"></script>
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors.js';
import { Card, Title, Paragraph, Image } from 'react-native-paper';
import Button from './Button.js';
import { DetailLocation, DetailTax } from './CharDescrip.js';
import { StyleSheet, Text, ImageBackground, View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

export const CardDetailLocation = (props) => (

    <List.Item
      style={styles.CardCharityDetails}
      descriptionStyle={{fontSize: 16}}
      titleStyle={{fontSize: 16}}
      // description={props.city}
      title={props.city}
      descriptionNumberOfLines={1}
      left={props => <List.Icon {...props} style={{marginLeft: -10,marginRight: -10}} color= {colors.secondary}  icon={"map-marker"} />}
    />
  );
  
  export const CardDetailAffiliation = (props) => (
    <List.Item
      style={styles.CardCharityDetails}
      descriptionStyle={{fontSize: 16}}
      titleStyle={{fontSize: 16}}
      title={props.affiliation}
      descriptionNumberOfLines={1}
      left={props => <List.Icon {...props} style={{marginLeft: -10,marginRight: -10}} color= {colors.secondary}  icon={"passport-biometric"}/>}
    />
  );

function CharityItem(props) {
  const navigation = useNavigation();
  console.log(props)
    return (

        <Card style={styles.CardContainer} onPress={() => navigation.navigate("Charity Profile", {props})} >
            <View style={styles.container}>
      <View style={styles.ContentContainer}>
      <Card.Content>
          <View  style={styles.CardContentTitle}>
            <Title color= {colors.secondary}>{props.charity_name}</Title>
            </View>
            <View style={styles.CardContentDetails}>
            <CardDetailLocation city={props.city} />
            <CardDetailAffiliation affiliation={props.affiliation} />
            </View>
    </Card.Content>
    </View>
    </View>
      </Card>
    );
}

const styles = StyleSheet.create({
    CardContainer: {
        flex: 1,
        flexDirection: 'row',
      },
    container: {
      justifyContent: 'flex-start',
      flex: 1,
      flexDirection: 'row',
    },
    ContentContainer: {
        height: 150,
        width: '100%',
        flex: 1,
    },
    CardContentTitle: {
        width: '100%',
        height: '60%',
        marginTop: 15,
    },
    CardContentDetails: {
        width: '100%',
        height: '40%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    CardCharityDetails: {
        width: '50%',
        justifyContent: 'flex-start',
        // marginTop: -10,
        // marginLeft: -20,
    },
  });

export default CharityItem;