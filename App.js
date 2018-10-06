import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { AppLoading, Font } from 'expo';

import { createStackNavigator } from 'react-navigation';

import { Backend } from './config';

import { Auth, Main } from './src/pages';

type AppState = {
  haveFontsLoaded: boolean,
  authStatusReported: boolean,
  isUserAuthenticated: boolean
};

export default class App extends Component<*, AppState> {
  state = {
    haveFontsLoaded: false,
    authStatusReported: false,
    isUserAuthenticated: false
  };
  async loadFonts(): Promise<void> {
    await Font.loadAsync({
      'Karla Regular': require('./assets/fonts/Karla-Regular.ttf'),
      'Karla Bold': require('./assets/fonts/Karla-Bold.ttf'),
      'Karla Italic': require('./assets/fonts/Karla-Italic.ttf'),
      'Karla Bold Italic': require('./assets/fonts/Karla-BoldItalic.ttf'),
      'Realtime Rounded Regular': require('./assets/fonts/RealtimeRounded-Regular.ttf'),
      'Realtime Rounded Bold': require('./assets/fonts/RealtimeRounded-Bold.ttf'),
      'Realtime Text Bold': require('./assets/fonts/RealtimeText-Bold.ttf')
    });
    this.setState({ haveFontsLoaded: true });
  }
  async getAuthenticationState(): Promise<void> {
    const user = await AsyncStorage.getItem('@Busify:user');
    this.setState({
      authStatusReported: true,
      isUserAuthenticated: !!user
    });
  }
  componentDidMount() {
    this.loadFonts();
    this.getAuthenticationState();
  }
  render() {
    const { haveFontsLoaded, authStatusReported, isUserAuthenticated } = this.state;
    return (
      (haveFontsLoaded && authStatusReported)
        ?
        isUserAuthenticated
          ?
          <Main />
          :
          <AppNavigator />
        :
        <AppLoading />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Auth: { screen: Auth },
    Main: { screen: Main, navigationOptions: { gesturesEnabled: false } }
  },
  {
    headerMode: 'none'
  }
);