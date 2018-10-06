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
import { Backend } from '../../../../../../config';
import Store from '../../Store';
import styles from './styles';

type EmailAndPhoneState = {
  email: string,
  phoneNumber: string
};

export default class EmailAndPhone extends Component<*, EmailAndPhoneState> {
  state: EmailAndPhoneState = {
    email: '',
    phoneNumber: ''
  };
  toNext() {
    const { email, phoneNumber } = this.state;
    const { navigate } = this.props.navigation;
    Store.email = email;
    Store.phoneNumber = phoneNumber;
    navigate('Password');
  }
  render() {
    const { toNext } = this;
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Email & Phone</Text>
            <TextInput
              placeholder="Your email"
              placeholderTextColor="#505050"
              onChangeText={email => this.setState({ email })}
              style={styles.input}
            />
            <TextInput
              placeholder="Your phone number"
              placeholderTextColor="#505050"
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={toNext.bind(this)}
              style={styles.toNextButton}
            >
              <Text style={styles.toNextButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Name')}
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
