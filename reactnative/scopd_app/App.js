/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry} from 'react-native';
import Home from './src/components/Home/Home.js'
import Login from './src/components/Login/Login.js'
import Profile from './src/components/Profile/Profile.js'
import Messages from './src/components/Messages/Messages.js'
import Settings from './src/components/Settings/Settings.js'
import SignUp from './src/components/SignUp/SignUp.js'
import ConfirmPhone from './src/components/SignUp/ConfirmPhone.js'
import PersonalInfo from './src/components/SignUp/PersonalInfo.js'
import Preferences from './src/components/SignUp/Preferences.js'
import UploadPhoto from './src/components/SignUp/UploadPhoto.js'

import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Login: {screen: Login},
    Profile: {screen: Profile},
    Messages: {screen: Messages},
    Settings: {screen: Settings},
    SignUp: {screen: SignUp},
    ConfirmPhone: {screen: ConfirmPhone},
    PersonalInfo: {screen: PersonalInfo},
    Preferences: {screen: Preferences},
    UploadPhoto: {screen: UploadPhoto},
  },
  {
    initialRouteName: 'Preferences',
  }
  
);
const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  render() {
    
    return (
      <AppContainer/>
    );
  }
}

// export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
