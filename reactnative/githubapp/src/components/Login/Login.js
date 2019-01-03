import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Dimensions, Button, TextInput,} from 'react-native';

export default class Login extends Component {
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../../images/octocat.jpg')} 
                    />
                    <Text style={styles.title}>An app made for Github using React Native</Text>
                </View>
                <View style={styles.container}>
                
                <TextInput 
                    placeholder="username or email"
                    placeholderTextColor='rgba(255, 255, 255, 0.2)'
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="password"
                    placeholderTextColor='rgba(255, 255, 255, 0.2)'
                    returnKeyType='go'
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />

                <Button style={styles.buttonContainer}
                  title='home'
                  onPress={() => this.props.navigation.navigate('Home')}
                ></Button>                          

            </View>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
    },
    buttonConatiner: {
        backgroundColor: '#rgba(193, 66, 66, 1)',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign:'center',
        color: '#FFFFFF',
        fontWeight: '700',
    },
})