import { createStackNavigator } from 'react-navigation';
import { Current, NearbyTrips, Overview } from './screens';

const Home = createStackNavigator(
  {
    Overview: { screen: Overview }
    Current: { screen: Current },
    NearbyTrips: { screen: NearbyTrips }
  },
  {
    headerMode: 'none'
  }
);

export default Home;