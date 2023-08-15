import React from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';

import { theme } from '../utils/style';
import { DashboardIcon } from '../components/DashboardIcon';
import { AirPolutionDashBoard } from '../components/AirPolutionDashBoard';

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
      <View style={styles.indexTable}>
        <View style={styles.indexTableRow}>
          <View style={styles.indexTableColumn}>
            <Text>index 1</Text>
          </View>
          <View style={styles.indexTableColumn}>
            <Text>index 1</Text>
          </View>
        </View>
        <View style={styles.indexTableRow}>
          <View style={styles.indexTableColumn}>
            <Text>index 1</Text>
          </View>
          <View style={styles.indexTableColumn}>
            <Text>index 1</Text>
          </View>
        </View>
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
  airPolutionStylingContainer: {
    flex: 3,
    backgroundColor: '#38bf56',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  indexTable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indexTableRow: {
    flexDirection: 'row',
  },
  indexTableColumn: {
    flex: 1,
    height: 95,
    backgroundColor: 'lightgray',
  },

  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'beige'
  },

  // EMOJI ICON STYLES
});
