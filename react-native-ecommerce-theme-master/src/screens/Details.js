'use strict'
import React, {Component} from 'react'
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TextInput,
    Alert,
} from 'react-native'

import Container from './../resources/components/Container'
import colors from './../resources/styles/colors'

import Icon from 'react-native-vector-icons/FontAwesome'
import Header from './../resources/components/Header'
import Swiper from 'react-native-swiper';

var {height, width} = Dimensions.get('window');
const initWidth = width;
const initHeight = initWidth * (500/900)

class Details extends Component {
    static navigationOptions = {
        drawerLabel: 'Log Out',
        drawerIcon: ({ tintColor }) => (
            <Icon style={styles.icon} name='sign-out' size={20}/>
        ),
    };

    constructor(props) {
        super(props)
    }

    // --- POST Method (Invest)---
    postMessage = () => {
        var data = JSON.stringify({
            "to": {
              "bank_id": "hsbc.01.hk.hsbc",
              "account_id": "123"
            },
            "value": {
              "currency": "HKD",
              "amount": "10"
            },
            "description": "this is for work"
          });
          
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
          
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
              alert(this.responseText);
            }
          });
          
          xhr.open("POST", "https://openlab.openbankproject.com/obp/v2.1.0/banks/hsbc.01.hk.hsbc/accounts/f751de0f-18dd-46dc-8b36-5f9664cf0431/owner/transaction-request-types/SANDBOX_TAN/transaction-requests");
          xhr.setRequestHeader("content-type", "application/json");
          xhr.setRequestHeader("authorization", "DirectLogintoken=eyJhbGciOiJIUzI1NiJ9.eyIiOiIifQ.gGULRyKabWIslzFWEl2GF09lyo31-FzdNwj84FQgpJc");
          xhr.setRequestHeader("cache-control", "no-cache");
          xhr.setRequestHeader("postman-token", "352fc15a-5c09-920c-fc0f-18a6c77f28f7");
          
          xhr.send(data);
    } 


    render() {
      return (
        <Container>
            <Header navigation={this.props.navigation} title="Tiffany Key Company"/>
            <Swiper style={styles.wrapper} showsButtons={true}>
              <ScrollView style={styles.slide1}>
                <Image
                  source={ require('.././assets/Artboard1.jpg') }
                  />
              </ScrollView>  
              <ScrollView style={styles.slide2}>
                <Image
                  source={ require('.././assets/Artboard2.jpg') }
                  />
              </ScrollView>
              <ScrollView style={styles.slide3}>
                <Image
                  source={ require('.././assets/Artboard3.jpg') }
                  />
              </ScrollView>
              <View style={styles.slide4}>
                <TextInput style={styles.textinput}
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType='default' 
                returnKeyType="next" 
                placeholder='HKD Amount' 
                placeholderTextColor='#bbb'
                />
                <TextInput style={styles.textinput}
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType='default' 
                returnKeyType="next" 
                placeholder='Message' 
                placeholderTextColor='#bbb'
                />
                <TouchableOpacity style={styles.SolidButtonContainer} 
                     onPress={this.postMessage}>
                    <Text  style={styles.SolidButtonText}>INVEST</Text>
                </TouchableOpacity> 
            </View>
            </Swiper>
            
        </Container>
      )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.bg_header
    },
    headerSub: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    amountinput: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    textinput: {
        paddingLeft: 30,
        paddingRight: 30,
        height: 50,
    },
    logo: {
        width: 64,
        height: 28,
        resizeMode: 'center'
    },
    icoSearch: {
        color: colors.txt_description,
        marginRight: 5
    },
    btnSearchHolder: {
        padding: 15,
        paddingTop: 0
    },
    btnSearch: {
        borderColor: colors.bd_input,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 8,
        backgroundColor: colors.bg1,
        borderWidth: 1,
        borderRadius: 5
    },
    btnSearchTitle: {
        color: colors.txt_description,
        fontSize: 16
    },
    btnDeals: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 0.5
    },
    icoDeals: {
        color: colors.txt_description,
        marginRight: 10
    },
    section_title:{
        fontSize: 18,
        fontWeight: '600',
        padding: 20
    },
    wrapper: {
    },
    slide1: {
      flex: 1
    },
    slide2: {
      flex: 1
    },
    slide3: {
      flex: 1
    },
    slide4: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    SolidButtonContainer:{
        backgroundColor: '#33cccc',
        paddingVertical: 10,
        width: 250,
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 10
    },
    SolidButtonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
})

module.exports = Details
