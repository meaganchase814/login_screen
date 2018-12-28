import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, StatusBar, Text} from 'react-native';


export default class LoginForm extends Component {
    render() {
        
        return(
            <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
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

                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                    title="Home"
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>               

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
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