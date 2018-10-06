import React, { Component } from 'react';
import { View, Text } from 'react-native';

type VerifyProps = {};

export default class Verify extends Component<VerifyProps, *> {
  render() {
    const { email, phoneNumber } = this.props.navigation.state.params;
    return (
      <View>
        <Text>Verify your account!</Text>
      </View>
    );
  }
}
