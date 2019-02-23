/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, ActivityIndicator, Image, Button, Text} from 'react-native';
import config from '../config.json';
import Login from './screens/Login';
import HomeConfig from './screens/HomeConfig';
import {
  DrawerNavigator,
  DrawerItems,
  DrawerView
} from 'react-navigation';

// The location, on the interweb, of the OBP API server we want to use.
var apiHost = config.apiHost;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //isloading: true,
      token: "eyJhbGciOiJIUzI1NiJ9.eyIiOiIifQ.0_WU1FMhii52ED397YLRGe0UtuK1LDa6N6bCMCZbusU",
      dataSource: null,
    }
  }

  render() {

      return (

        <View style={styles.container}>
         
          <Login/>

        </View>

      );

  }
}

// var routerConfig = HomeConfig.routerConfig;
// var options = HomeConfig.options;

// const MyApp = DrawerNavigator(HomeConfig.routerConfig, HomeConfig.options);

// const defaultGetStateForAction = MyApp.router.getStateForAction;
// console.log(defaultGetStateForAction)

// AppRegistry.registerComponent('ecommercematerialtheme', () => MyApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
});
