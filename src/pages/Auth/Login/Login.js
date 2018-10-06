import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from 'react-native';
import { Backend } from '../../../../config';

import styles from './styles';

type LoginState = {
  email: string,
  password: string
};

export default class Login extends Component<*, LoginState> {
  state: LoginState = {
    email: '',
    password: ''
  };
  async logIn(): Promise<void> {
    const { email, password } = this.state;
    try {
      const { success, passenger, token } = await Backend.auth.logIn(
        email,
        password
      );
      if (success) {
        await AsyncStorage.setItem('@Busify:user', JSON.stringify(passenger));
        await AsyncStorage.setItem('@Busify:token', token);
        this.props.navigation.navigate('Register');
      }
    } catch (e) {
      alert(e);
    }
  }
  render() {
    const { logIn } = this;
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Log In</Text>
            <TextInput
              onChangeText={email => this.setState({ email })}
              placeholder='Your email'
              placeholderTextColor='#505050'
              style={styles.input}
            />
            <TextInput
              onChangeText={password => this.setState({ password })}
              placeholder='Your password'
              placeholderTextColor='#505050'
              style={styles.input}
            />
            <TouchableOpacity onPress={logIn.bind(this)} style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.barAccountLink} onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.barAccountText}>Don't have an account?</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
