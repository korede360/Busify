import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 35,
    fontFamily: 'Karla Bold',
    color: '#D3D3D3',
    marginBottom: 15
  },
  input: {
    width: width - width / 5,
    height: 40,
    fontFamily: 'Karla Regular',
    backgroundColor: '#505050',
    color: '#FFFFFF',
    fontSize: 16,
    paddingLeft: 10,
    borderRadius: 2,
    marginBottom: 10
  },
  button: {
    width: width - width / 5,
    height: 40,
    borderRadius: 2,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Karla Bold',
    color: '#FFFFFF'
  },
  goBackLink: {
    marginTop: 10
  },
  goBackText: {
    color: '#FFFFFF',
    fontFamily: 'Karla Bold',
    fontSize: 16
  }
});

export default styles;
