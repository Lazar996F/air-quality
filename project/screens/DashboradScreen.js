import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DashboardIcon } from '../components/DashboardIcon';
import { AirPolutionDashBoard } from '../components/AirPolutionDashBoard';
import { getColorByQualityValue } from '../utils/helpers';

export default function DashboardScreen({ navigation, route }) {
  const selectedCity = route.params.selectedCity;
  const qualityValue = route.params.qualityValue;
  const ozoneValue = route.params.ozoneValue;

  const openGoogleMaps = () => {
    navigation.navigate('MapAirQuality')
  };


  const goToHomeScreen = () => {
    navigation.navigate('MainScreen');
  };

  const openGraphView = () => {
    navigation.navigate('GraphAirQuality');
  }

  return (
    <View style={styles.screen}>
      <View style={[styles.airPolutionStylingContainer, {backgroundColor: getColorByQualityValue(qualityValue)}]}>
        <AirPolutionDashBoard selectedCity={selectedCity} qualityValue={qualityValue} ozoneValue={ozoneValue} />
      </View>
      <View style={styles.iconContainer}>
        <DashboardIcon name={'home'} onPress={goToHomeScreen} />
        <DashboardIcon name={'map'} onPress={openGoogleMaps} />
        <DashboardIcon name={'analytics-outline'} onPress={openGraphView} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  airPolutionStylingContainer: {
    flex: 4,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 65,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e3e2e5',
  },
});
