import { StyleSheet, View, Text, Image } from 'react-native';
import { getIconByQualityValue, getQualityValueText } from '../utils/helpers';
import CircularProgress from 'react-native-circular-progress-indicator';

export const AirPolutionDashBoard = ({ selectedCity, qualityValue, ozoneValue }) => {

  const imageSrc = getIconByQualityValue(qualityValue);

  return (
    <View style={styles.airPolutionStyling}>
        <CircularProgress
          value={ozoneValue}
          radius={120}
          duration={2000}
          progressValueColor={'#0cf2b4'}
          maxValue={100}
          title={'ppm'}
          titleColor={'black'}
          titleStyle={{ fontWeight: 'bold' }}
        />
      <View style={styles.selectedCityTextBelowIconContainer}>
        <Text style={styles.selectedCityTextBelowIconStyle}>
          Trenutni kvalitet vazduha - {selectedCity}
        </Text>
      </View>
      <View style={styles.indexNumberOfPolutionContainer}>
        <Text style={styles.indexNumberOfPolutionContainerStyle}>AQI:{qualityValue}</Text>
        <Text style={styles.indexInWordStyle}>{getQualityValueText(qualityValue)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  airPolutionStyling: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
