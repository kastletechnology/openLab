import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar} from 'react-native';
import config from '../../config.json';
import Home from './Home'

export default class LoginForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
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
               onChangeText={(text) => this.setState({username})}
               />

                <TextInput style = {styles.input}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='#bbb' 
              secureTextEntry
              onChangeText={(text) => this.setPassword({password})}/>

            <TouchableOpacity style={styles.TransparentButtonContainer} 
                     onPress={function(){ console.log('Forgot clicked') }}>
                <Text  style={styles.TransparentButtonRightAlignText}>Forgot Password?</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.SolidButtonContainer} 
                     onPress={function(){ console.log('Login clicked', ) }}>
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