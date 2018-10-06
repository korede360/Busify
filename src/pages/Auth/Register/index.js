import { createStackNavigator } from 'react-navigation';
import { Name, EmailAndPhone, Password } from './screens';

const Register = createStackNavigator(
  {
    Name: { screen: Name },
    EmailAndPhone: { screen: EmailAndPhone },
    Password: { screen: Password }
  },
  {
    headerMode: 'none'
  }
);

export default Register;
