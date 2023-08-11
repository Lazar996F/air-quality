import React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

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
        <Text style={styles.polutionIntroTextStyle}>Zagađenost vazduha je</Text>
      </View>
      <View style={styles.polutionSemiCircleScale}>
        <CircularProgress
          value={60}
          radius={120}
          duration={2000}
          progressValueColor={'#0cf2b4'}
          maxValue={100}
          title={'ppm'}
          titleColor={'black'}
          titleStyle={{ fontWeight: 'bold' }}
        />
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
  polutionIntroTextStyle: {
    fontSize: 22,
    color: theme.colors.primary,
  },
  polutionSemiCircleScale: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 200,
  },
  iconContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 25,
  },
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
