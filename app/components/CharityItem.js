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
  
  // export const CardDetailTax = () => (
  //   <List.Item
  //     style={styles.CardCharityDetails}
  //     description="40%"
  //     title="40%"
  //     titleStyle={{fontSize: 16}}
  //     descriptionStyle={{fontSize: 16}}
  //     left={props => <List.Icon {...props}   color= {colors.secondary} icon={"currency-eur"} />}
  //   />
  // );

  // axios.get('/charities/33')
  // .then((response) => {
  //   console.log(response);
  // }, (error) => {
  //   console.log(error);
  // });

function CharityItem(props) {
  const navigation = useNavigation();

    return (

        <Card style={styles.CardContainer} onPress={() => navigation.navigate("Profile", {props})} >
            <View style={styles.container}>
    <View style={styles.ImageContainer}>
      <Card.Cover  style={styles.CardImage} source={{ uri: 'https://picsum.photos/700' }} />
      </View>
      <View style={styles.ContentContainer}>
      <Card.Content style={styles.CardContent}>
          <View  style={styles.CardContentTitle}>
            <Title color= {colors.secondary}>{props.charity_name}</Title>
            <View style={styles.CardContentDetails}>
            <CardDetailLocation city={props.city} />
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
        flex: 0.7,
        // paddingHorizontal: 30,
        // paddingVertical: 30,
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
        marginTop: 15,
    },
    CardContentDetails: {
        alignSelf: 'stretch',
    },
    CardCharityDetails: {
        width: '100%',
        marginTop: -10,
        marginLeft: -20,
    },
  });

export default CharityItem;