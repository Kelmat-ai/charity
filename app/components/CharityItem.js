<script src="http://192.168.1.69:19002"></script>
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors.js';
import { Card, Title } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';

export const CardDetailLocation = (props) => (

    <List.Item
      style={styles.CardCharityDetails}
      descriptionStyle={{fontSize: 16}}
      titleStyle={{fontSize: 14.5}}
      // description={props.city}
      title={props.city}
      descriptionNumberOfLines={1}
      left={props => <List.Icon {...props} style={{width: '50%',marginLeft: -20,marginRight: -30}} color= {colors.secondary}  icon={"map-marker"} />}
    />
  );
  
  export const CardDetailAffiliation = (props) => (
    <List.Item
      style={styles.CardCharityDetails}
      descriptionStyle={{fontSize: 15}}
      titleStyle={{fontSize: 14.5}}
      title={props.affiliation}
      descriptionNumberOfLines={1}
      left={props => <List.Icon {...props} style={{width: '50%', marginLeft: -40,marginRight: -30}} color= {colors.secondary}  icon={"passport-biometric"}/>}
    />
  );

function CharityItem(props) {
  const navigation = useNavigation();

    return (

        <Card style={styles.CardContainer} onPress={() => navigation.navigate("Charity Profile", {props})} >
            <View style={styles.container}>
      <View style={styles.ContentContainer}>
      <Card.Content>
          <View  style={styles.CardContentTitle}>
            <Title  style={styles.Title}>{props.charity_name}</Title>
            </View>
            <View style={styles.CardContentDetails}>
            {(props.affiliation == 'ONGA') &&
            <CardDetailAffiliation 
             affiliation='Environmental action'
            />
            }
            {(props.affiliation == 'ONGD') &&
            <CardDetailAffiliation 
             affiliation='Development aid'
            />
            }
            {(props.affiliation == 'ONGPD') &&
            <CardDetailAffiliation 
             affiliation='Social welfare'
            />
            }
            {(props.affiliation == 'ONGM') &&
            <CardDetailAffiliation 
             affiliation='Human rights'
            />
            }
            {(props.city != null)
            &&
            <CardDetailLocation city={`${props.city.slice(0,1).toUpperCase()}${props.city.slice(1).toLowerCase()}`} />
            }
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
        overflow: 'hidden',
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
    },
    Title: {
      fontSize: 18,
  }
  });

export default CharityItem;