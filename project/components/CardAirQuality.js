import * as React from 'react';
import { Button, Card, Text } from 'react-native-paper';
import { StyleSheet, Image } from 'react-native';

const leftContent = (props) => <Image {...props} source={require("../assets/emoji/emojiDobar.png")} style={styles.iconAirIndicator}/>

const CardAirQuality = ({ city, qualityValue, navigation }) => {
  const navigateToDashboard = () => {
    navigation.navigate('DashboardScreen', { selectedCity: city });
  };
  return (
    <Card style={styles.cardWrapper}>
      <Card.Title title="Vazduh je trenutno odlican" left={leftContent} />
      <Card.Content>
        <Text variant="titleLarge">{city}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={navigateToDashboard}>Saznaj više</Button>
      </Card.Actions>
    </Card>
  );
};

export default CardAirQuality;

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 50,
  },
  iconAirIndicator:{
    width: 40,
    height: 40
  }
});
