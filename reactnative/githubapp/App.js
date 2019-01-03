/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry} from 'react-native';
import Login from './src/components/Login/Login.js'
import Home from './src/components/Home/Home.js'
import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Login: {screen: Login},
  },
  {
    initialRouteName: 'Login',
  }
  
);
const AppContainer = createAppContainer(AppNavigator);


class App extends Component {
  render() {
    
    return (
      <AppContainer/>
    );
  }
}

export default App;


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
