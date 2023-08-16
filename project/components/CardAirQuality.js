import * as React from 'react';
import { Card, Text, Button } from 'react-native-paper';
import {View, StyleSheet, Image } from 'react-native';
import { getIconByQualityValue, getQualityValueText, getColorByQualityValue } from '../utils/helpers';


const CardAirQuality = ({ city, qualityValue, navigation, ozoneValue }) => {

  const leftContent = (props) => 
  <Image {...props} source={getIconByQualityValue(qualityValue)} style={[styles.iconAirIndicator, {backgroundColor: colorByIndex}]}/>

  const rightContent = (props) => {
    return (
      <Button {...props} mode="text" onPress={navigateToDashboard} labelStyle={styles.btnStyle}>
        saznaj više {'->'}
      </Button>
    );

  }
  const navigateToDashboard = () => {
    navigation.navigate('DashboardScreen', { selectedCity: city, qualityValue, ozoneValue });
  };

  const colorByIndex = getColorByQualityValue(qualityValue);

  return (
    <Card style={[styles.cardWrapper,{borderColor: colorByIndex}]} onPress={navigateToDashboard}>
      <Card.Title style={styles.cardTitle} title={city} left={leftContent} right={rightContent}/>
      <Card.Content style={styles.cardContent}>
        <Text variant="titleLarge" style={[styles.textIndicator, {color: colorByIndex}]}>{getQualityValueText(qualityValue)}</Text>
        <View style={styles.airIndex}>
          <Text variant='displaySmall' style={[styles.indexValue, {color: colorByIndex}]}>{qualityValue}</Text>
          <Text variant='labelMedium' style={styles.labelIndicator}>
            Index kvaliteta
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CardAirQuality;

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 10,
    borderWidth:3,
  },
  cardTitle: {
    
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  iconAirIndicator:{
    width: 40,
    height: 40,
    borderRadius: 50
  },
  airIndex: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  textIndicator: {
    fontWeight: 'bold'
  },
  indexValue: {
    fontWeight: 'bold'
  },
  labelIndicator: {
    color: 'gray'
  },
  btnStyle: {
    color: 'gray'
  }
});
