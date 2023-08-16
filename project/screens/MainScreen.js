import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import CardAirQuality from '../components/CardAirQuality';
import { citiesData } from '../dummyData';

export default function MainScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {citiesData.map((cityData, index) => (
        <CardAirQuality
          key={index}
          city={cityData.city}
          qualityValue={cityData.index}
          navigation={navigation}
          ozoneValue={cityData.ozone}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 10,
  },
});
