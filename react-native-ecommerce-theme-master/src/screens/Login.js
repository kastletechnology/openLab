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
    TextInput
} from 'react-native'

import Container from './../resources/components/Container'
import ListPanel from './../resources/components/ListPanel'
import SwiperProductThumb from './../resources/components/product/SwiperProductThumb'
import GridProductThumb from './../resources/components/product/GridProductThumb'
import Swiper from './../resources/components/Swiper'
import Grid from './../resources/components/Grid'

import colors from './../resources/styles/colors'

import Icon from 'react-native-vector-icons/FontAwesome'
import ListSwiper from './Listing/ListSwiper'
import Header from './../resources/components/Header'

import homeData from './../data/home'

var {height, width} = Dimensions.get('window');
const initWidth = width;
const initHeight = initWidth * (500/900)

class Login extends Component {
    token = false;
    static navigationOptions = {
        drawerLabel: 'Login',
        drawerIcon: ({ tintColor }) => (
            <Icon style={styles.icon} name='home' size={20}/>
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            dataSource: '',
        };
    }

    login(){
        console.log('login function is called')
        this.props.navigation.navigate('ListSwiper');
    }

    componentDidlMount() {  
        console.log('componentDidlMount function is called');
        this.props.navigation.navigate('ListSwiper');
     }

    // --- POST Method (Login)---
    
        postMessage = () => {
            var data = null;

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
                this.token = true;
               alert(this.responseText);
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
            this.checkLogin()
        )
    }

    checkLogin() {
        if(this.token === false) {
            return (
                <Container>
                    {/* <Header navigation={this.props.navigation} title="Login"/> */}
                    <View style={styles.container}>
                        <View style={styles.icon_container}>
                         <Image
                            style={ styles.logo }
                            source={ require('.././assets/logo-f.png') }
                         />
                        </View>
                        <View style={styles.formContainer}>
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
                    </View>
                </Container>
                )
             } else {
                return (
                    <ListSwiper/>
                )
            }
        }
        
    _renderSwiperList(data) {
        return (
            <ListPanel title={data.title} description={data.description}>
                <Swiper>
                    {
                        data.items.map((item, idx) => {
                            return <SwiperProductThumb key={idx} { ...item }/>
                        })
                    }
                </Swiper>
            </ListPanel>
        )
    }

    _renderGridList(data) {
        return (
            <ListPanel title={data.title} description={data.description}>
                <Grid>
                    {
                        data.items.map((item, idx) => {
                            return <GridProductThumb key={idx} { ...item }/>
                        })
                    }
                </Grid>
            </ListPanel>
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
    },icon_container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10
    },container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      },
      logo: {
          width: 200,
          height: 200
      },
      formContainer: {
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
    },SolidButtonContainer:{
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
})

module.exports = Login
