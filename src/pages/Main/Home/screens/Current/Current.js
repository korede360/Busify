import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Backend } from '../../../../../../config';

type CurrentState = {
  trip: {
    id: string,
    driverId: string,
    origin: string,
    destination: string,
    passengers: Array<mixed>
  }
}

export default class Current extends Component<*, *> {
  componentWillMount() {
    // this.getCurrentTrip();
  }
  async getCurrentTrip() {
    const { user, token } = await Backend.auth.getCurrentUserAndToken();
    try {
      await Backend.trips.getCurrentTrip(user.id, token)
        .then(response => console.log(response.trip) && this.setState({ trip: response.trip }));
    } catch (e) {
      alert(e);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}></View>
      </View>
    );
  }
}