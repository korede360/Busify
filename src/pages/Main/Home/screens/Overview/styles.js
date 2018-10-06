import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  placeholderText: {
    fontFamily: 'Karla Regular',
    fontSize: 16
  }
});

export default styles;