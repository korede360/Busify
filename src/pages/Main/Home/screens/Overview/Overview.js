import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Backend } from '../../../../../../config';
import styles from './styles';

type OverviewState = {
  user: null | any
}

export default class Overview extends Component<*, OverviewState> {
  state: OverviewState = {
    user: null
  }
  componentDidMount() {
    this.goToCurrentScreen();
    this.getCurrentUser();
  }
  toNext() {
    const { navigate } = this.props.navigation;
    navigate('NearbyTrips');
  }
  async getCurrentUser() {
    const { navigate } = this.props.navigation;
    try {
      const user = await Backend.auth.getCurrentUserAndToken()[0];
      if (!user) { // Buh-bye!
        navigate('Auth', {}, NavigationActions.navigate({ routeName: 'Auth' })); // I hope this works, though!
      }
      this.setState({ user });
    } catch (e) {
      alert(e);
    }
  }
  async goToCurrentScreen() {
    const { navigate } = this.props.navigation;
    const { user, token } = await Backend.auth.getCurrentUserAndToken();
    try {
      await Backend.trips.getCurrentTrip(user.id, token)
        .then(response => {
          if (typeof response.trip == 'object') {
            navigate('Current');
          }
        })
    } catch (e) {
      alert(e);
    }
  }
  async getTimeOfDay() {
    const today = new Date();
    const currentHour = await today.getHours();
    if (currentHour < 12) {
      return 'morning';
    } else if (currentHour < 18) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  }
  render() {
    const { getTimeOfDay, toNext } = this;
    const { user } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{`Good ${getTimeOfDay()}`}</Text>
        <Text style={styles.placeholderText}>
          Hello {`${user.firstName}`}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => toNext()}>
          <Text style={styles.buttonText}>Join Trip</Text>
        </TouchableOpacity>
      </View>
    )
  }
}