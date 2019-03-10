import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Dimensions, Button, TextInput,} from 'react-native';

export default class UploadPhoto extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View>
                    <Text>Privacy</Text>
                    <Text>For your safety, when you are in your 'home' zipcode, 
                        your exact location will be unknown to others.</Text>
                    <TextInput 
                    placeholder="Enter your zipcode"
                    placeholderTextColor='rgba(255, 255, 255, 0.2)'
                    returnKeyType='go'
                    style={styles.input}        
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>I have read and accept the</Text>
                    <A href=""><Text>terms and conditions</Text></A>
                    <View style={{borderWidth: 1, height: 20, width: 20}}></View>
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
        backgroundColor: '#3498db',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    title1: {
        color: 'red',
        textAlign: 'center',
        opacity: 0.9,
        margin: 0,
        padding: 0,
    },
    title2: {
        color: 'blue',
        textAlign: 'center',
        opacity: 0.9,
        margin: 0,
        padding: 0,
    },
    title3: {
        color: 'yellow',
        textAlign: 'center',
        opacity: 0.9,
        margin: 0,
        padding: 0,
    },
    titleWrapper: {
        flex: 1, 
        
        flexDirection:'row',
       justifyContent: 'center'
    },
    input: {
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        marginLeft: 50,
        marginRight: 50,
        
    },
    buttonContainer: {
        fontSize: 10,
        color: 'red',  
        backgroundColor: 'lightgrey',
        marginLeft: 50,
        marginRight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 1,
        height: 30,
        paddingTop: 2,
      },
      buttonContainer2: {
        fontSize: 10,
        color: 'red',  
        
        marginLeft: 150,
        // marginRight: 150,
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