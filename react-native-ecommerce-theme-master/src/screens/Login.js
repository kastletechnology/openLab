import React, {Component} from 'react';
import {Platform, StyleSheet, View, ActivityIndicator, Image, Button, Text} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    // componentDidMount () {

    //     // --- POST Method (Login)---
    //     return fetch(apiHost + "/my/logins/direct", {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         firstParam: 'value1',
    //         secondParam: 'value2',
    //       }),
    //     });
    
        // --- GET Method ---
        // return fetch(apiHost+"/obp/v3.0.0/root")
        // .then ( (response) => response.json() )
        // .then ( (responseJson) => {
    
        //   this.setState({
        //     isloading: false,
        //     dataSource: responseJson,
        //   })
    
        //   console.log(dataSource);
        // })
        // .catch((error) => {
        //   console.log(error)
        // });
    // }

    render() {
        return (
            <View style={styles.container}>

                <Text>Home Logo</Text>

                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
        );
    }

}
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
    },loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }
  });