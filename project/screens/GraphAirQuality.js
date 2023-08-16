import React from 'react';
import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import moment from 'moment';
import { Text } from 'react-native-paper';

const data = [
    { date: '2021-07-01', aqi: 50 },
    { date: '2023-08-08', aqi: 140 },
  ];

const GraphAirQuality = () => {
  const chartData = {
    labels: data.map(entry => moment(entry.date).format('MMM D')),
    datasets: [
      {
        data: data.map(entry => entry.aqi),
      },
    ],
  };

  return (
    <ImageBackground
    source={require('../assets/images/background.jpg')}
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
        <View style={styles.graphTitleLabel}>
      <Text variant="titleLarge" style={{marginBottom: 10}}>
        Grafički prikaz kvaliteta za period:
      </Text>
      <Text variant='titleMedium'>
      {moment(data[0].date).format('D MMM YYYY')}{' do '}{moment(data[1].date).format('D MMM YYYY')}
      </Text>
      </View>
      <LineChart
        data={chartData}
        width={Dimensions.get('window').width - 20}
        height={400}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`, // Green color
          style: {
            borderRadius: 16,
          },
        }}
        bezier
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphTitleLabel: {
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default GraphAirQuality;
