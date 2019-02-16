import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Dimensions, Button, TextInput,TouchableOpacity} from 'react-native';

export default class Login extends Component {
    render() {
        return(
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../../images/scopd.png')} 
                    />
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title1}>meet</Text>
                        <Text style={styles.title2}>like</Text>
                        <Text style={styles.title3}>connect</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
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
                    </View>
                    <View style={styles.buttonWrapper} >
                    <View>
                        <TouchableOpacity 
                        title='Login'
                        onPress={() => this.props.navigation.navigate('Home')}
                        >
                        <Text style={styles.buttonContainer}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity 
                        title='Sign up'
                        onPress={() => this.props.navigation.navigate('Sign up')}
                        >
                            <Text style={styles.buttonContainer}>Sign Up</Text>
                        </TouchableOpacity>    
                    </View>                        
                </View>
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
        backgroundColor: '#3498db',
        
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        marginTop: 10,
        width: 100,
        height: 100,
    },
    title1: {
        color: 'red',
        width: 40,
        textAlign: 'center',
        opacity: 0.9,
        margin: 0,
        padding: 0,
    },
    title2: {
        color: 'blue',
        width: 50,
        textAlign: 'center',
        opacity: 0.9,
        margin: 0,
        padding: 0,
    },
    title3: {
        color: 'yellow',
        width: 50,
        textAlign: 'center',
        opacity: 0.9,
        margin: 0,
        padding: 0,
    },
    titleWrapper: {
        flex: 7,
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        fontSize: 10,
        color: 'red',  
        backgroundColor: 'lightgrey',
        marginLeft: 150,
        marginRight: 150,
        height: 20,
        textAlign: 'center',
        margin: 1,
        alignItems: 'center'
      },
      buttonWraper: {
        flexGrow: 1, 
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center'
        
      },
    
})