import { TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { theme } from '../utils/style';

export const DashboardIcon = ({ name, onPressHome, onPressMap }) => {
  if (name === 'home') {
    return (
      <TouchableOpacity onPress={onPressHome}>
        <FontAwesome name="home" size={30} color={theme.colors.primary} />
      </TouchableOpacity>
    );
  }
  if (name === 'map') {
    return (
      <TouchableOpacity onPress={onPressMap}>
        <FontAwesome name="map" size={25} color={theme.colors.primary} />
      </TouchableOpacity>
    );
  }
  if (name === 'analytics-outline') {
    return (
      <TouchableOpacity>
        <Ionicons
          name="analytics-outline"
          size={25}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
    );
  }
};
