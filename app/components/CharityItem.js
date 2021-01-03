import React from 'react';
import colors from '../config/colors.js';
import { Card, Title, Paragraph, Image } from 'react-native-paper';
import Button from './Button.js';
import { DetailLocation, DetailTax } from './CharDescrip.js';
import { StyleSheet, Text, ImageBackground, View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";

export const CardDetailLocation = () => (
    <List.Item
      style={styles.CardCharityDetails}
      description="Lisboa, Portugal"
      left={props => <List.Icon {...props}   color= {colors.secondary}  icon={"map-marker"} />}
    />
  );
  
  export const CardDetailTax = () => (
    <List.Item
      style={styles.CardCharityDetails}
      description="40%"
      left={props => <List.Icon {...props}   color= {colors.secondary} icon={"currency-eur"} />}
    />
  );

function CharityItem(props) {
    return (
        <Card style={styles.CardContainer}>
            <View style={styles.container}>
    <View style={styles.ImageContainer}>
      <Card.Cover  style={styles.CardImage} source={{ uri: 'https://picsum.photos/700' }} />
      </View>
      <View style={styles.ContentContainer}>
      <Card.Content style={styles.CardContent}>
          <View  style={styles.CardContentTitle}>
            <Title color= {colors.secondary}>Greenpeace</Title>
            <View style={styles.CardContentDetails}>
            <CardDetailTax />
            <CardDetailLocation />
            </View>
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
    CardImage: {
        height: 150,
        width: '100%',
      },
      ImageContainer: {
        flex: 1,
    },
    CardContent: {
        height: 150,
        width: '100%',

    },
    ContentContainer: {
        flex: 1,
    },
    CardContentTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    CardContentDetails: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    CardCharityDetails: {
        width: '100%',
    },
  });

export default CharityItem;