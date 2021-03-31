import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, ScrollView } from 'react-native';
import colors from '../config/colors';
import { List } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";
import Button from './Button';

export const DetailLocation = () => (
  <List.Item
    style={styles.CharityDetails}
    title="Location"
    description="Lisboa, Portugal"
    left={props => <List.Icon {...props}   color= {colors.secondary}  icon={"map-marker"} />}
  />
);

export const DetailTax = () => (
  <List.Item
    style={styles.CharityDetails}
    title="Tax benefits"
    description="40%"
    left={props => <List.Icon {...props}   color= {colors.secondary} icon={"currency-eur"} />}
  />
);

export const DetailFoundation = () => (
  <List.Item
    style={styles.CharityDetails}
    title="Foundation year"
    description="2020"
    left={props => <List.Icon {...props}  color= {colors.secondary} icon={"calendar-range"}/>}
  />
);

export const DetailFieldofWork = () => (
  <List.Item
    style={styles.CharityDetails}
    title="Impact"
    description="Social"
    left={props => <List.Icon {...props}  color= {colors.secondary}  icon={"passport-biometric"}/>}
  />
);

function CharDescrip(props) {
    return (
    <ScrollView>
        <Text style={styles.CharityName}>Greenpeace</Text>
        <View style={styles.CharityOverviewContainer}>
            <Text style={styles.CharityOverview} multiline={true}>
            Isto é um exemplo de um texto escrito por uma caridade. Na Exempleriny, fazemos exemplos com amor
                e ilustramos situações gerais com casos particulares. 
            É um trabalho árduo, mas faz o Mundo melhor a cada dia que passa. Quero 250 caracteres rapaz.
            </Text>
        </View>
        <View style={styles.ButtonContainer}>
          <Button btnText="Know more"/>
        </View>
            <View>
            <View>
            <Text  style={styles.TagTitle}>Details</Text>
            </View>
            <View style={styles.CharityDetailsContainer}>
            <DetailTax/>
            <DetailLocation/>
            <DetailFoundation/>
            <DetailFieldofWork/>
            </View>
        </View>
        <View style={styles.CharityOverviewContainer}>
                <Text style={styles.TagTitle}>Tags</Text>
        </View>
    </ScrollView>
    );
}

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