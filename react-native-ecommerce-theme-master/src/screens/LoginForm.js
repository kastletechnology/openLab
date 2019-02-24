import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar} from 'react-native';
import config from '../../config.json';
import Home from './Home'

// The location, on the interweb, of the OBP API server we want to use.
var apiHost = config.apiHost;
var consumerKey = config.consumerKey;

export default class LoginForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
                username: '',
                password: '',
                dataSource: '',
        };
    }

    // --- POST Method (Login)---
    postMessage = () => {
        // headers_str ={
        //     'Content-Type': 'application/json',
        //     'Authorization': 'DirectLogin username=${this.state.username}, password=${this.state.password}, consumer_key=${consumerKey}'
        //     }
        // console.log(headers_str);
        // fetch(apiHost + "/my/logins/direct", {
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json',
        //     "Authorization": "DirectLogin username=skchanag, password=123456789Kk^^, consumer_key=5h5psolgvi1vhe452kwn20bcnwkcusw4vv4j3vjq",
        // }
        // })
        // .then((response) => response.text())
        // .then((responseText) => {
        //     // if (responseJson.token == null)
        //         alert(responseText);
        //     // else
        //     //     this.state.dataSource.token = teresponseJson.token;
        // })
        // .catch((error) => {
        //     console.error(error);
        // });
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
        });

        xhr.open("POST", "https://openlab.openbankproject.com/my/logins/direct");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("authorization", "DirectLogin username=skchanag, password=123456789Kk^^, consumer_key=5h5psolgvi1vhe452kwn20bcnwkcusw4vv4j3vjq");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("postman-token", "19908b9f-ba86-c489-957f-b6c1fad3eb46");

        xhr.send(data);
    } 

    render() {
        return (
            <View style={styles.container}>
            <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='default' 
               returnKeyType="next" 
               placeholder='Username' 
               placeholderTextColor='#bbb'
               onChangeText={username => this.setState({username})}
               />

                <TextInput style = {styles.input}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='#bbb' 
              secureTextEntry
              onChangeText={(password) => this.setState({password})}/>

            <TouchableOpacity style={styles.TransparentButtonContainer} 
                     onPress={function(){ console.log('Forgot clicked') }}>
                <Text  style={styles.TransparentButtonRightAlignText}>Forgot Password?</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.SolidButtonContainer} 
                     onPress={this.postMessage}>
                <Text  style={styles.SolidButtonText}>LOGIN</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.TransparentButtonContainer} 
                     onPress={function(){ console.log('Signup clicked') }}>
                <Text  style={styles.TransparentButtonText}>SIGN UP</Text>
            </TouchableOpacity> 
              
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginTop: 150
    },
    input:{
        height: 40,
        width: 250,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#000'
    },
    SolidButtonContainer:{
        backgroundColor: '#33cccc',
        paddingVertical: 10,
        width: 250,
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 10
    },
    TransparentButtonContainer:{
        // backgroundColor: '#68a0cf',
        paddingVertical: 10,
        width: 250,
        alignSelf: 'center',
        borderRadius: 15
    },
    SolidButtonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    TransparentButtonText:{
        color: '#70716f',
        textAlign: 'center',
        fontWeight: '700'
    },
    TransparentButtonRightAlignText:{
        color: '#70716f',
        textAlign: 'right',
        fontWeight: '400'
    }
  });