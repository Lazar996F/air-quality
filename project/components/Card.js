import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { citiesData } from '../dummyData';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MyComponent = ({ city, qualityValue, navigation }) => {
  const navigateToDashboard = () => {
    navigation.navigate('DashboardScreen', { selectedCity: city });
  };
  return (
    <Card style={styles.cardWrapper}>
      <Card.Title title={city} subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Text variant="titleLarge">{city}</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={navigateToDashboard}>Saznaj više</Button>
      </Card.Actions>
    </Card>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#A8E05F',
    marginBottom: 50,
  },
});
