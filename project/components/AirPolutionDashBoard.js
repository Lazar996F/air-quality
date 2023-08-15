import { StyleSheet, View, Text, Image } from 'react-native';

export const AirPolutionDashBoard = ({ selectedCity }) => {
  return (
    <View style={styles.airPolutionStyling}>
      <View>
        <Text style={styles.appNameTextStyle}>Digitalni Ozon</Text>
      </View>
      <View style={styles.iconAirIndicatorContainer}>
        <Image
          source={require('../assets/emoji/emojiDobar.png')}
          style={styles.iconAirIndicator}
        />
      </View>
      <View style={styles.selectedCityTextBelowIconContainer}>
        <Text style={styles.selectedCityTextBelowIconStyle}>
          Trenutni kvalitet vazduha - {selectedCity}
        </Text>
      </View>
      <View style={styles.indexNumberOfPolutionContainer}>
        <Text style={styles.indexNumberOfPolutionContainerStyle}>22</Text>
        <Text style={styles.indexInWordStyle}>Odlično</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  airPolutionStyling: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appNameTextStyle: {
    color: 'white',
    fontSize: 22,
  },
  iconAirIndicatorContainer: {
    width: 80,
    height: 80,
    marginTop: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  iconAirIndicator: {
    width: 80,
    height: 80,
    marginVertical: 25,
  },
  selectedCityTextBelowIconContainer: {
    marginTop: 70,
  },
  selectedCityTextBelowIconStyle: {
    color: 'white',
    fontSize: 18,
  },
  indexNumberOfPolutionContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indexNumberOfPolutionContainerStyle: {
    color: 'white',
    fontSize: 40,
  },
  indexInWordStyle: {
    color: 'white',
    fontSize: 17,
    marginTop: 10,
  },
});
