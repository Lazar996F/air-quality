import React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';

import { theme } from '../utils/style';
import { DashboardIcon } from '../components/DashboardIcon';

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
      <View style={styles.polutionIntroText}>
        <Text>Zagađenost vazduha je</Text>
      </View>
      <View style={styles.polutionSemiCircleScale}>
        <Text>Here goes scale</Text>
      </View>
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
  polutionIntroText: {
    marginTop: 100,
  },
  polutionSemiCircleScale: {
    flex: 2,
    height: 150,
    width: 200,
  },
  iconContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 15,
  },
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
