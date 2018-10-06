import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';

type Trip = {
  id: string,
  driverId: string,
  passengers: Array<mixed>,
  status: string
}

type TripState = {
  trips: Trip[]
}

export default class Home extends Component {
  state: TripState = {
    trips: []
  }
  render() {
    const { trips } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={trips}
          keyExtractor={trip => trip.id}
          renderItem={({ item }) => console.log(item)}
        />
      </View>
    )
  }
}