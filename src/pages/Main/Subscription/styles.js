import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center'
  },
  headerContainer: {
    height: height / 2,
    width,
    backgroundColor: '#000000',
    alignItems: 'center'
  }
});

export default styles;