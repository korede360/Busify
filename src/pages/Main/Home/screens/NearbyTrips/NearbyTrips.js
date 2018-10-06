import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type NearbyTripType = {
  id: string
}

type NearbyTripsState = {
  nearbyTrip: NearbyTripType
}

export default class NearbyTrips extends Component<*, NearbyTripsState> {
  state: NearbyTripsState = {
    nearbyTrip: {
      id: ''
    }
  }
  async joinTrip(): Promise<void> {
    // Join the trip
  }
  render() {
    const { joinTrip } = this;
    const { nearbyTrip } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => joinTrip()} style={styles.button}>
          <Text style={styles.buttonText}>Join Trip</Text>
        </TouchableOpacity>
      </View>
    )
  }
}