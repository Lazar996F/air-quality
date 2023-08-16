import { TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { theme } from '../utils/style';

export const DashboardIcon = ({ name, onPress }) => {
  if (name === 'home') {
    return (
      <TouchableOpacity onPress={onPress}>
        <FontAwesome name="home" size={30} color={theme.colors.primary} />
      </TouchableOpacity>
    );
  }
  if (name === 'map') {
    return (
      <TouchableOpacity onPress={onPress}>
        <FontAwesome name="map" size={25} color={theme.colors.primary} />
      </TouchableOpacity>
    );
  }
  if (name === 'analytics-outline') {
    return (
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name="analytics-outline"
          size={25}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
    );
  }
};
