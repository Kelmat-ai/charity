import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, ScrollView } from 'react-native';
import colors from '../config/colors';
import { List } from 'react-native-paper';

const Detail = () => (
  <List.Item
    title="First Item"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
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
            <View style={styles.CharityOverviewContainer}>
            <Text  style={styles.TagTitle}>Details</Text>
            <View>
            <Detail style={styles.ListItem}></Detail>
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
    TagTitle: {
        marginTop: 10,
        width: '100%',
        alignItems: 'flex-start',
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
      },
      ListItem: {
          marginTop: 10,
          width: '100%',
          alignItems: 'flex-start',
          textAlign: 'center',
          fontSize: 18,
          color: 'black',
        },
});

export default CharDescrip; Detail;