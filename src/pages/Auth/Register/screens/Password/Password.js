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

type PasswordState = {
  password: string,
  confirmPassword: string
};

export default class Name extends Component<*, PasswordState> {
  state: PasswordState = {
    password: '',
    confirmPassword: ''
  };
  async signUp(): Promise<void> {
    const { password, confirmPassword } = this.state;
    const { navigate } = this.props.navigation;
    if (password !== confirmPassword) {
      alert('Please make sure the passwords match!');
    }
    try {
      // await Backend.auth.signUp();
      navigate('Main');
    } catch (e) {
      alert(e);
    }
  }
  render() {
    const { signUp } = this;
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Your password</Text>
            <TextInput
              onChangeText={password => this.setState({ password })}
              placeholder="Your password"
              secureTextEntry
              placeholderTextColor="#D3D3D3"
              style={styles.input}
            />
            <TextInput
              onChangeText={password => this.setState({ password })}
              placeholder="Confirm your password"
              secureTextEntry
              placeholderTextColor="#D3D3D3"
              style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={signUp.bind(this)}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.goBackLink} onPress={() => navigate('EmailAndPhone')}>
              <Text style={styles.goBackText}>Back</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
