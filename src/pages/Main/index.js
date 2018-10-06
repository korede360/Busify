import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Feather as Icon } from '@expo/vector-icons';

import Home from './Home';
import { Subscription } from './Subscription';
import { Trips } from './Trips';

const Main = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Subscription: { screen: Subscription },
    Trips: { screen: Trips }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Subscription') {
          iconName = 'credit-card';
        } else if (routeName === 'Trips') {
          iconName = 'navigation';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: 'gray',
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
  }
);

export default Main;

// Find a way to attach a user to a trip!
// This is a really important decision, as it will greatly affect the navigation flow of the app.