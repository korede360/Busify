import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

type SubscriptionType = {
  id: string,
  passengerId: string,
  paymentId: string
}

type SubscriptionState = {
  subscription: SubscriptionType
}

export default class Subscription extends Component<*, SubscriptionState> {
  state: SubscriptionState = {
    subscription: {
      id: '',
      passengerId: '',
      paymentId: ''
    }
  }
  render() {
    const { subscription } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text>{subscription.passengerId}</Text>
        </View>
      </View>
    )
  }
}