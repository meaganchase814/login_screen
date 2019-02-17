import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput,} from 'react-native';

export default class ConfirmPhone extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Confirm your phone number</Text>
                    <Text style={styles.title}>Enter the 4-digit code sent to </Text> 
                    <Text style={styles.title}>(000) 000-000</Text> 
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput 
                        placeholder="____"
                        placeholderTextColor='rgba(255, 255, 255, 0.2)'
                        returnKeyType='next'
                       
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}            
                    />
                    <TextInput 
                        placeholder="____"
                        placeholderTextColor='rgba(255, 255, 255, 0.2)'
                        returnKeyType='next'
                        
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}            
                    />
                    <TextInput 
                        placeholder="____"
                        placeholderTextColor='rgba(255, 255, 255, 0.2)'
                        returnKeyType='next'
                        
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}            
                    />
                    <TextInput 
                        placeholder="____"
                        placeholderTextColor='rgba(255, 255, 255, 0.2)'
                        returnKeyType='next'
                       
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}            
                    />
                </View>
                <View>
                <TouchableOpacity 
                    title='Confirm'
                    onPress={() => this.props.navigation.navigate('PersonalInfo')}>
                    <Text style={styles.buttonContainer}>Confirm</Text>
                </TouchableOpacity>             
                                   
                </View> 
            </View>
        )
    };

}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: 'darkblue',
        
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 40,
    },
    logo: {
        marginTop: 10,
        width: 200,
        height: 200,
    },
    title: {
        color: 'grey',
        textAlign: 'center',
        opacity: 0.9,
        margin: 0,
        padding: 0,
        fontSize: 40,
    },
    
    titleWrapper: {
        marginTop: 10,
        flex: 1, 
        alignItems: 'center',
        flexDirection:'column',
        flexWrap: 'wrap'
    },
    input: {
        height: 40,
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        // marginLeft: 150,
        // marginRight: 150,
        fontSize: 20,
    },
    inputWrapper: {
        flexGrow: 1, 
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
       
      },
    buttonContainer: {
        fontSize: 10,
        color: 'red',  
        backgroundColor: 'lightgrey',
        marginLeft: 150,
        marginRight: 150,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 1,
        
        height: 20,
        paddingTop: 2,
      },
      buttonContainer2: {
        fontSize: 10,
        color: 'red',  
        
        marginLeft: 150,
        marginRight: 150,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 1,
       
        height: 20,
        paddingTop: 2,
      },
      buttonWrapper: {
        flexGrow: 1, 
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
       
      },
    
})