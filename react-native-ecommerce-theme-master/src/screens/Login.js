import React, {Component} from 'react';
import {Platform, StyleSheet, View, ActivityIndicator, Image, Button, Text} from 'react-native';
import LoginForm from './LoginForm';
import ListSwiper from './Listing/ListSwiper'
export default class Login extends Component {
  token = false;
  
    render() {
      return (
        this._checkLogin()
      );
    }

    _checkLogin() {
      if (this.token === false) {
        return (
          <View style={styles.container}>
            <View style={styles.icon_container}>
              <Image
                  style={ styles.logo }
                  source={ require('.././assets/logo-f.png') }
                  />
            </View>
            <View style={styles.formContainer}>
                <LoginForm />
            </View>
          </View>
        )
      } else {
          return (
            <ListSwiper />
          )
      }
    }

}


const styles = StyleSheet.create({
    icon_container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    item: {
      flex: 1,
      alignSelf: 'stretch',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#eee'
    },loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200
    }
  });