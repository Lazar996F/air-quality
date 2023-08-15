import React from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';

import { theme } from '../utils/style';
import { DashboardIcon } from '../components/DashboardIcon';
import { AirPolutionDashBoard } from '../components/AirPolutionDashBoard';
import { PolutionIndexTableDashboard } from '../components/PolutionIndexTableDashboard';

const leftContent = (props) => (
  <Image
    source={require('../assets/emoji/emojiDobar.png')}
    style={styles.iconAirIndicator}
  />
);

export default function DashboardScreen({ navigation, route }) {
  const selectedCity = route.params.selectedCity;
  const openGoogleMaps = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      selectedCity
    )}`;
    Linking.openURL(mapUrl);
  };

  const goToHomeScreen = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.airPolutionStylingContainer}>
        <AirPolutionDashBoard selectedCity={selectedCity} />
      </View>
      <PolutionIndexTableDashboard />
      <View style={styles.iconContainer}>
        <DashboardIcon name={'home'} onPressHome={goToHomeScreen} />
        <DashboardIcon name={'map'} onPressMap={openGoogleMaps} />
        <DashboardIcon name={'analytics-outline'} />
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
    flex: 3,
    backgroundColor: '#38bf56',
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
