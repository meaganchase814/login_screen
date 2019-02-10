import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Dimensions, Button, TextInput,} from 'react-native';

export default class Profile extends Component {
    render() {
        return(
            <View>
                <Text>This is a profile</Text>
            </View>
        )
    };

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