import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 35,
    fontFamily: 'Karla Bold',
    color: '#000000',
    marginBottom: 15
  },
  input: {
    width: width - width / 5,
    height: 40,
    fontFamily: 'Karla Regular',
    color: '#000000',
    backgroundColor: '#D3D3D3',
    fontSize: 16,
    borderRadius: 2,
    paddingLeft: 10,
    marginBottom: 10
  },
  toNextButton: {
    width: width - width / 5,
    height: 40,
    borderRadius: 2,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toNextButtonText: {
    fontSize: 16,
    fontFamily: 'Karla Bold',
    color: '#FFFFFF'
  },
  goBackLink: {
    marginTop: 10
  },
  goBackText: {
    color: '#505050',
    fontFamily: 'Karla Bold',
    fontSize: 16
  }
});

export default styles;
