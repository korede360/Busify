import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Backend } from '../../../../../../config';
import Store from '../../Store';

import styles from './styles';

type NameState = {
  firstName: string,
  lastName: string
};

export default class Name extends Component<*, NameState> {
  state: NameState = {
    firstName: '',
    lastName: ''
  };
  toNext() {
    const { firstName, lastName } = this.state;
    Store.firstName = firstName;
    Store.lastName = lastName;
    this.props.navigation.navigate('EmailAndPhone');
  } // Remeber to bind this!
  render() {
    const { navigate } = this.props.navigation;
    const { toNext } = this;
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Your name</Text>
            <TextInput
              placeholder="Your first name"
              placeholderTextColor="#505050"
              onChangeText={firstName => this.setState({ firstName })}
              style={styles.input}
            />
            <TextInput
              placeholder="Your last name"
              placeholderTextColor="#505050"
              onChangeText={lastName => this.setState({ lastName })}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={toNext.bind(this)}
              style={styles.toNextButton}
            >
              <Text style={styles.toNextButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigate(
                  'Login',
                  {},
                  NavigationActions.navigate({ routeName: 'Login' })
                )
              }
              style={styles.goBackLink}
            >
              <Text style={styles.goBackText}>Back</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
