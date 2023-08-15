import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const PolutionIndexTableDashboard = () => {
  return (
    <View style={styles.indexTable}>
      <View style={styles.indexTableRow}>
        <View style={styles.indexTableColumn}>
          {/* <Icon name="" size={30} color="blue"  type='material'/> */}
          <Text>index 1</Text>
        </View>
        <View style={styles.indexTableColumn}>
          <Text>index 1</Text>
        </View>
      </View>
      <View style={styles.indexTableRow}>
        <View style={styles.indexTableColumn}>
          <Text>index 1</Text>
        </View>
        <View style={styles.indexTableColumn}>
          <Text>index 1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indexTable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indexTableRow: {
    flexDirection: 'row',
  },
  indexTableColumn: {
    flex: 1,
    height: 95,
    // backgroundColor: '#ffffff',
  },
});
