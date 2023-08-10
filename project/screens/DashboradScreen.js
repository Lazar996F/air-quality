import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { theme } from '../utils/style';

export default function DashboardScreen({ navigation }) {
  const openGoogleMaps = () => {
    const latitude = 43.8563;
    const longitude = 18.4131;
    const mapUrl = `https://www.google.com/maps/place/${latitude},${longitude}`;
    Linking.openURL(mapUrl);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.polutionIntroText}>
        <Text>Zagađenost vazduha je</Text>
      </View>
      <View style={styles.polutionHalfCircleScale}>
        <Text>Here goes scale</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
          <FontAwesome name="home" size={30} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openGoogleMaps}>
          <FontAwesome name="map" size={25} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="analytics-outline"
            size={25}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
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
  polutionHalfCircleScale: {
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
