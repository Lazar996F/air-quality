import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import { getColorByQualityValue } from '../utils/helpers';

const MapAirQuality = () => {
    const cityCoordinates = {
        latitude: 44.7866,
        longitude: 20.4489,
      };

  const airQualityCircles = [
    { id: 1, radius: 3000, aqi: 30 },
    { id: 2, radius: 6000, aqi: 80 }
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: cityCoordinates.latitude,
          longitude: cityCoordinates.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {airQualityCircles.map(circle => (
          <Circle
            key={circle.id}
            center={cityCoordinates}
            radius={circle.radius}
            fillColor={getColorByQualityValue(circle.aqi)}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapAirQuality;