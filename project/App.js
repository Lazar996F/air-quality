import { StyleSheet } from 'react-native';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import StartScreen from './screens/StartScreen'
import MainScreen from './screens/MainScreen'
import DashboardScreen from './screens/DashboradScreen';
import {theme} from './utils/style';
import MapAirQuality from './components/MapAirQuality';
import GraphAirQuality from './screens/GraphAirQuality';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="MapAirQuality" component={MapAirQuality} />
        <Stack.Screen name="GraphAirQuality" component={GraphAirQuality} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({

});
